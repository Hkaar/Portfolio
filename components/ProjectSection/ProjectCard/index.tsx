import Image from "next/image";
import LinkButton from "@/components/LinkButton";

interface ProjectCardProps {
  src: string;
  previewLink?: string;
  children?: React.ReactNode;
}

export default function ProjectCard({ src, previewLink, children }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-md border border-gray-200 dark:border-gray-800 shadow-md">
      <Image 
        src={src} 
        className="block w-full h-auto"
        width={640} 
        height={480} 
        alt="No image was loaded ..." 
      />

      {children}

      <div className="flex items-center gap-2">
        <LinkButton href="#" icon="info">
          Details
        </LinkButton>

        <LinkButton href={previewLink || '#'} icon="arrow_right_alt" rightIcon>
          Preview
        </LinkButton>
      </div>
    </div>
  );
}
