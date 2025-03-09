"use client";


import { animatePageOut } from "@/lib/animation";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


interface TransitionLinkProps {
  href: string;
  label: string;
  className?: string;
  handleMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const TransitionLink = ({
  href,
  label,
  className,
  handleMouseEnter,
  handleMouseLeave,
}: TransitionLinkProps) => {


  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent<HTMLAnchorElement>)}
      onMouseLeave={(e) => handleMouseLeave(e as unknown as React.MouseEvent<HTMLAnchorElement>)}
      className={className}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
