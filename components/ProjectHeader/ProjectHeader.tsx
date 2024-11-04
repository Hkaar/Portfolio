"use client";

import { Project } from "@/types/project";

import {toast} from 'sonner'
import LinkButton from "../LinkButton";
import Button from "../Button";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ShareModal from "../Modal/ShareModal";

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
    })
  }

  return (
    <>
      <div className="flex flex-col gap-3 px-6 py-4 bg-primary dark:bg-primary-dark text-base-light dark:text-base-dark rounded-lg shadow shadow-gray-300 dark:shadow-gray-700">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tighter flex-1">
              {project.title}
            </h1>

            <LinkButton
              href="#"
              onClick={openModal}
              icon="material-symbols:share-outline"
              className="lg:hidden border-none shadow-none"
            >
              Share
            </LinkButton>
          </div>

          <div className="flex items-center gap-2 flex-1 lg:justify-end">
            <Button
              onClick={openModal}
              icon="material-symbols:share-outline"
              className="hidden lg:flex border-none shadow-none"
            >
              Share
            </Button>

            <LinkButton
              href={project.repo || "#"}
              type="outline-accent"
              icon="material-symbols:collections-bookmark-outline"
              target={project.repo ? "_blank" : ""}
              disabled={project.repo ? false : true}
            >
              Repository
            </LinkButton>

            <LinkButton
              href={project.preview || "#"}
              type="primary"
              target={project.preview ? "_blank" : ""}
              icon={project.preview ? "mdi:eye-outline" : "mdi:eye-off-outline"}
              disabled={project.preview ? false : true}
            >
              Preview
            </LinkButton>
          </div>
        </div>
      </div>

      <ShareModal isOpen={modalOpen} onClose={closeModal} path={path} handleCopy={handleCopy} />
    </>
  );
}
