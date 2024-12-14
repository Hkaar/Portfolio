"use client";

import { Project } from "@/types/project";

import { toast } from "sonner";
import LinkButton from "../LinkButton";
import Button from "../Button";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ShareModal from "../Modal/ShareModal";
import { BookMarked, Eye, EyeOff, Share2 } from "lucide-react";

interface ProjectHeaderProps {
  project: Project;
  host: string;
}

export default function ProjectHeader({ project, host }: ProjectHeaderProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const path = `${host}${usePathname()}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(path).then(() => {
      toast.success("Copied to clipboard!");
    }).catch(() => {
      toast.error("Failed to copy!");
    });
  };

  return (
    <>
      <div className="flex flex-col gap-3 px-6 py-4 bg-primary dark:bg-primary-dark text-base-light dark:text-base-dark rounded-lg shadow shadow-gray-300 dark:shadow-gray-700">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter flex-1">
              {project.title}
            </h1>

            <LinkButton
              href="#"
              onClick={openModal}
              className="lg:hidden border-none shadow-none"
            >
              <Share2 size={24} strokeWidth={1.5} />
              Share
            </LinkButton>
          </div>

          <div className="flex items-center gap-2 flex-1 lg:justify-end">
            <Button
              onClick={openModal}
              className="hidden lg:flex border-none shadow-none"
            >
              <Share2 size={24} strokeWidth={1.5} />
              Share
            </Button>

            <LinkButton
              href={project.repo || "#"}
              variant="outline-accent"
              target={project.repo ? "_blank" : ""}
              disabled={project.repo ? false : true}
            >
              <BookMarked size={24} strokeWidth={1.5} />
              Repository
            </LinkButton>

            <LinkButton
              href={project.preview || "#"}
              variant="outline-secondary"
              target={project.preview ? "_blank" : ""}
              disabled={project.preview ? false : true}
            >
              { project.preview ? <Eye size={24} strokeWidth={1.5} /> : <EyeOff size={24} strokeWidth={1.5} /> }
              Preview
            </LinkButton>
          </div>
        </div>
      </div>

      <ShareModal
        title="Share this project"
        isOpen={modalOpen}
        onClose={closeModal}
        path={path}
        handleCopy={handleCopy}
      />
    </>
  );
}
