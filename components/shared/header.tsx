"use client"

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { DarkModeToggle } from './darkModeToggle'
import { useGSAP } from "@gsap/react";
import { useCursor } from '@/context/CursorContex'
import TransitionLink from './transitionLink'
import { MenuIcon, X } from 'lucide-react'
import { gsap } from "gsap";



const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Skills",
    path: "/skills",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];


interface MouseEventProps {
  clientX: number;
  clientY: number;
  currentTarget: {
    id: string;
  };
}



const Header = () => {


  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleCursorHover,
    handleElementMove,
    isHover,
    position,
    buttonPositions,
  } = useCursor() || {};
  const socialMediaLinks = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | HTMLParagraphElement | null)[]>([]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    handleCursorHover && handleCursorHover(false, "");
  };

  useGSAP(
    () => {
      gsap.set(".menu-links-item-holder", { y: 75 });
      if (socialMediaLinks.current) {
        gsap.set(socialMediaLinks.current.children, { y: 35, autoAlpha: 0 });
      }
      gsap.set(".menu-info-sos", { y: 25, autoAlpha: 0 }); // Set posisi awal dan sembunyikan info
      gsap.set(".menu-info-cop", { y: 25, autoAlpha: 0 }); // Set posisi awal dan sembunyikan info

      tl.current = gsap
        .timeline({ pause: true })
        .to("#menu-overlay", {
          duration: 0.5,
          clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          ease: "power2.inOut",
        })
        .to(".menu-links-item-holder", {
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.inOut",
        })
        .to(
          socialMediaLinks.current ? Array.from(socialMediaLinks.current.children) : [], // Ubah menjadi array untuk animasi
          {
            y: 0,
            autoAlpha: 1, // Tampilkan gambar
            duration: 0.2,
            stagger: 0.1, // Delay berurutan untuk setiap gambar
            ease: "power2.inOut",
          }
        )
        .to(
          ".menu-info-sos", // Tambahkan animasi untuk info
          {
            y: 0,
            autoAlpha: 1, // Tampilkan info
            duration: 0.1,
            stagger: 0.1, // Delay berurutan untuk setiap info
            ease: "power2.inOut",
          }
        )
        .to(
          ".menu-info-cop", // Tambahkan animasi untuk info
          {
            y: 0,
            autoAlpha: 1, // Tampilkan info
            duration: 0.1,
            stagger: 0.1, // Delay berurutan untuk setiap info
            ease: "expo.out",
          }
        );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (tl.current) {
      if (isOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isOpen]);

  // Pastikan untuk menyembunyikan elemen sebelum animasi
  useEffect(() => {
    if (socialMediaLinks.current) {
      const children = Array.from(socialMediaLinks.current.children);
      if (children.length > 0) {
        gsap.set(children, { y: 25, autoAlpha: 0 });
      }
    }
    gsap.set(".menu-info-cop", { y: 35, autoAlpha: 0 });
    gsap.set(".menu-info-sos", { y: 35, autoAlpha: 0 });
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLParagraphElement, MouseEvent>) => {
    handleCursorHover && handleCursorHover(true, e.currentTarget.id); // Update elementId saat hover
    handleElementMove && handleElementMove({
      x: e.clientX,
      y: e.clientY,
      elementId: e.currentTarget.id,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLParagraphElement, MouseEvent>) => {
    handleCursorHover && handleCursorHover(false, e.currentTarget.id); // Update elementId saat hover keluar
  };
  useEffect(() => {
    if (buttonRefs.current.length > 0) {
      buttonRefs.current.forEach((btn) => {
        if (btn) {
          const sensitivity = 0.6; // Sensitivitas pergerakan, coba sesuaikan
          const xDiff =
            position ? position.x - btn.getBoundingClientRect().left - btn.offsetWidth / 2 : 0;
          const yDiff =
            position ? position.y - btn.getBoundingClientRect().top - btn.offsetHeight / 2 : 0;
          if (isHover && position && btn.id === position.elementId) {
            // Hitung jarak antara posisi kursor dan posisi tombol

            // Terapkan transformasi dengan sensitivitas kecil
            btn.style.transform = `translate3d(${xDiff * sensitivity}px, ${yDiff * sensitivity
              }px, 0)`;
            btn.style.transition = "transform 0.2s ease-out"; // Transisi yang halus
          } else {
            // Reset posisi tombol jika tidak di-hover
            btn.style.transform = `translate3d(0, 0, 0)`;
            btn.style.transition = "transform 0.2s ease-out"; // Transisi yang halus
          }
        }
      });
    }
  }, [position, isHover, buttonPositions]);


  return (
    <div ref={containerRef} className="w-full  ">
      <div className="fixed bg-black/80 text-white backdrop-blur-md top-0 left-0 w-screen py-[1em] px-[1em] md:px-[2em] flex justify-between items-center z-10">
        <Link
          id="button-logo"
          ref={(el) => {
            buttonRefs.current[0] = el;
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href="/"
          className='text-lg md:text-xl font-bold'
        >
          RYZA
        </Link>
        {isOpen === true ? (
          ""
        ) : (
          <div className='flex gap-4 items-center'>
            <DarkModeToggle />
            <button
              id="button-menu"
              ref={(el) => {
                buttonRefs.current[1] = el;
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={toggleMenu}
              className={`sd_text text-md lg:text-lg `}
            >
              {/* <MenuIcon className='size-8' /> */}
              MENU
            </button>
          </div>
        )}

      </div>
      <div
        id="menu-overlay"
        className="fixed top-0 left-0 w-screen h-screen py-[1em] px-[2em] flex flex-wrap  bg-gradient-to-tr from-purple-500/60 via-purple-300 to-purple-400/60 backdrop-blur-md z-20 clip_2"
      >
        <div className="menu-overlay-bar  fixed top-0 left-0 w-screen p-[1em] px-[1em] md:px-[2em] flex justify-between items-center z-20">
          <Link
            id="button-logo"
            ref={(el) => {
              buttonRefs.current[2] = el;
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleMenu}
            href="/"
            className='text-lg md:text-xl font-bold'
          >
            RYZA
          </Link>
          <button
            id="button-close"
            ref={(el) => {
              buttonRefs.current[3] = el;
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleMenu}
            className={` menu-close-icon  text-white sd_text font-bold flex flex-2 items-end justify-end text-xl lg:text-2xl  `}
          >
            <X className='size-8' />
          </button>

        </div>

        <div className="menu-copy flex-grow flex flex-col justify-between pt-[5em]  md:pt-[4em]">
          <div className="menu-links ">
            {menuItems?.map((item, i) => (
              <div key={i} className="menu-links-item w-max clip">
                <div
                  onClick={toggleMenu}
                  className="menu-links-item-holder relative"
                >
                  <TransitionLink
                    href={item?.path}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    label={item?.label}
                    className={`menu-links px-1 md:px-2 text-[calc(2.6em+1vw)] md:text-[calc(3em+1vw)]  leading-[115%] tracking-[-0.03em] uppercase  ${pathname === item?.path
                      ? "text-white delay-1000 font-extrabold sd_text"
                      : " text-[#141414] hover:text-white"
                      }  `}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            id="menu-info"
            className=" flex flex-col md:flex-row gap-6 justify-between md:items-end"
          >
            <span className="menu-info-cop text-md hidden md:flex items-end pl-4">
              RYZA
            </span>
            <div className="flex flex-col gap-2 ">
              <p
                id="title-sm"
                ref={(el) => {
                  buttonRefs.current[4] = el;
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="menu-info-cop text-left md:text-center"
              >
                follow{" "}
                <span className="font-bold cursor-none pointer-events-none text-xl font-serif">
                  &
                </span>{" "}
                subscribe
              </p>
              <div
                id="menu-info-col"
                ref={socialMediaLinks}
                className="flex-4 flex flex-row flex-wrap gap-2 md:gap-4 "
              >
                <Link
                  id="button-ig"
                  ref={(el) => {
                    buttonRefs.current[5] = el;
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  href=""
                >
                  IG
                </Link>
                <Link
                  id="button-fb"
                  ref={(el) => {
                    buttonRefs.current[6] = el;
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  href=""
                >
                  FB
                </Link>
                <Link
                  id="button-in"
                  ref={(el) => {
                    buttonRefs.current[7] = el;
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  href=""
                >
                  IN
                </Link>
                <Link
                  id="button-yt"
                  ref={(el) => {
                    buttonRefs.current[8] = el;
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  href=""
                >

                </Link>
              </div>
            </div>
            <div className="menu-info-sos flex flex-col md:items-end">
              <p>rickyzatnika91@gmail.com</p>
              <p>+62 812 3456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;