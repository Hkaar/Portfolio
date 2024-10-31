"use client";

import { Project } from "@/types/project";

import Modal from "../Modal";
import LinkButton from "../LinkButton";
import { useState } from "react";
import Button from "../Button";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="flex flex-col gap-3 px-6 py-4 bg-primary dark:bg-primary-dark text-base-light dark:text-base-dark rounded-lg shadow">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tighter flex-1">
              {project.title}
            </h1>

            <LinkButton
              href="#"
              icon="material-symbols:share-outline"
              className="lg:hidden border-none shadow-none"
            >
              Share
            </LinkButton>
          </div>

          <div className="flex items-center gap-2 flex-1 lg:justify-end">
            <Button onClick={openModal}
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

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="flex justify-between items-center gap-8 px-6 py-2">
          <h6 className="text-2xl font-bold">
            Share this project
          </h6>

          <Button onClick={() => closeModal()} className="border-0">
            <Icon icon="mdi:close" fontSize={24} fontWeight={400} />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 px-6 py-4">
          <LinkButton href="https://x.com/intent/tweet?text=">
            <Icon icon="pajamas:twitter" fontSize={24} fontWeight={400} />
          </LinkButton>
          
          <LinkButton href="http://www.instagram.com">
            <Icon icon="mdi:instagram" fontSize={24} fontWeight={400} />
          </LinkButton>

          <LinkButton href="http://www.reddit.com">
            <Icon icon="mdi:reddit" fontSize={24} fontWeight={400} />
          </LinkButton>

          <LinkButton href="https://www.facebook.com">
            <Icon icon="mdi:facebook" fontSize={24} fontWeight={400} />
          </LinkButton>

          <LinkButton href="https://web.whatsapp.com/send?text=">
            <Icon icon="mdi:whatsapp" fontSize={24} fontWeight={400} />
          </LinkButton>
        </div>
      </Modal>
    </>
  );
}
