"use client"


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AddProjectAction } from "@/lib/action";
import { UploadDropzone } from "@/lib/uploadthing";
import { useForm } from "react-hook-form"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const ProjectForm = () => {
  const [techInput, setTechInput] = useState<string>("");
  const [technologies, setTechnologies] = useState<{ name: string }[]>([]);
  const [currentProfileImage, setCurrentProfileImage] = useState<string | null>(null);

  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm<{
    title: string;
    description: string;
    sourceCodeUrl?: string;
    demoUrl?: string;
    imageUrl: string;
    technologies: { name: string }[];
  }>({
    defaultValues: {
      title: "",
      description: "",
      sourceCodeUrl: "",
      demoUrl: "",
      imageUrl: "",
      technologies: [],
    },
  });

  // // ✅ Sync `technologies` dengan `setValue` hanya ketika ada perubahan
  useEffect(() => {
    setValue("technologies", technologies);
  }, [technologies, setValue]);

  // // ✅ Sync `imageUrl` jika ada perubahan
  useEffect(() => {
    if (currentProfileImage) {
      setValue("imageUrl", currentProfileImage);
    }
  }, [currentProfileImage, setValue]);

  const handleAddTech = () => {
    if (techInput.trim() !== "" && !technologies.some(tech => tech.name.toLowerCase() === techInput.trim().toLowerCase())) {
      const newTech = { name: techInput.trim() };
      setTechnologies((prev) => [...prev, newTech]);
      setTechInput("");
    }
  };

  const handleRemoveTech = (techToRemove: string) => {
    setTechnologies((prev) => prev.filter((tech) => tech.name !== techToRemove));
  };

  const onSubmit = async (data: { imageUrl: string; technologies: { name: string }[], title: string, description: string, sourceCodeUrl?: string, demoUrl?: string }) => {
    toast("Submit clicked!");
    console.log("🛠️ Data sebelum dikirim:", {
      ...data,
      technologies,
    });



    if (!data.imageUrl) {
      toast.error("Please upload a valid image.");
      return;
    }

    try {
      console.log("🚀 Mengirim data ke server:", {
        ...data,
        technologies,
      });
      await AddProjectAction(null, {
        ...data,
        technologies,
      });

      // await AddProjectAction(null, {
      //   ...data,
      //   technologies,
      // });

      reset();
      setTechnologies([]);
      setCurrentProfileImage(null);
      toast.success("Project berhasil ditambahkan!");
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-2">
              <label>Title</label>
              <input {...register("title")} placeholder="Title" />
            </div>

            <div className="flex flex-col gap-y-2">
              <label>Source Code URL</label>
              <input {...register("sourceCodeUrl")} placeholder="https://example.com" />
            </div>

            <div className="flex flex-col gap-y-2">
              <label>Demo URL</label>
              <input {...register("demoUrl")} placeholder="https://example.com" />
            </div>

            <div className="flex flex-col gap-y-2">
              <label>Description</label>
              <textarea {...register("description")} placeholder="Enter project description..." />
            </div>

            {/* Technologies Input */}
            <div className="flex flex-col gap-y-2">
              <label>Technologies</label>
              <div className="flex gap-2">
                <input value={techInput} onChange={(e) => setTechInput(e.target.value)} placeholder="e.g., React, Next.js, Tailwind" />
                <Button type="button" onClick={handleAddTech}>Add</Button>
              </div>

              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center bg-gray-200 px-2 py-1 rounded">
                  <span>{tech.name}</span>
                  <button type="button" onClick={() => handleRemoveTech(tech.name)} className="ml-2 text-red-500">
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* IMAGE UPLOAD */}
            <div className="grid gap-y-5">
              <Label>Image</Label>
              <input type="hidden" {...register("imageUrl")} placeholder="Image URL" />
              {currentProfileImage ? (
                <div className="relative size-24 border border-accent rounded-lg shadow p-1">
                  <Image src={currentProfileImage} alt="Profile Image" width={75} height={50} priority className="w-full rounded-lg" />
                  <button type="button" onClick={() => setCurrentProfileImage(null)} className="absolute cursor-pointer p-1 text-gray-300 hover:bg-red-500 hover:text-white bg-red-400 -top-1 -right-1 rounded-full">
                    ✕
                  </button>
                </div>
              ) : (
                <UploadDropzone
                  onClientUploadComplete={(res) => {
                    setCurrentProfileImage(res[0].ufsUrl);
                    setValue("imageUrl", res[0].ufsUrl);
                    toast.success("Profile Image has been uploaded");
                  }}
                  onUploadError={(error) => {
                    toast.error(error.message);
                  }}
                  endpoint="imageUploader"
                />
              )}
            </div>
            <button type="submit">{isSubmitting ? "Submitting..." : "Submit"}</button>
          </div>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProjectForm;






