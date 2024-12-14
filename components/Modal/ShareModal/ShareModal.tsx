import { ModalProps } from "../Modal";

import Button from "@/components/Button";
import Modal from "../Modal";
import { Icon } from "@iconify/react";
import LinkButton from "@/components/LinkButton";
import { CircleX, Clipboard } from "lucide-react";

interface ShareModalProps extends ModalProps {
  title: string;
  path: string;
  handleCopy: CallableFunction
}

export default function ShareModal({ title, isOpen, onClose, path, handleCopy }: ShareModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="p-2 flex flex-col gap-3 w-11/12 max-w-[24rem]"
    >
      <div className="flex justify-between items-center gap-8 px-4 py-2">
        <h6 className="text-2xl font-bold">
          {title}
        </h6>

        <Button onClick={() => onClose()} className="border-0 p-0">
          <CircleX size={24} strokeWidth={1.5} className="stroke-danger dark:stroke-danger-dark" />
        </Button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between px-4">
          <LinkButton
            href="https://x.com/intent/tweet?text="
            className="rounded-full p-3"
          >
            <Icon icon="pajamas:twitter" fontSize={32} fontWeight={400} />
          </LinkButton>

          <LinkButton
            href="http://www.instagram.com"
            className="rounded-full p-3"
          >
            <Icon icon="mdi:instagram" fontSize={32} fontWeight={400} />
          </LinkButton>

          <LinkButton
            href="http://www.reddit.com"
            className="rounded-full p-3"
          >
            <Icon icon="mdi:reddit" fontSize={32} fontWeight={400} />
          </LinkButton>

          <LinkButton
            href="https://www.facebook.com"
            className="rounded-full p-3"
          >
            <Icon icon="mdi:facebook" fontSize={32} fontWeight={400} />
          </LinkButton>

          <LinkButton
            href="https://web.whatsapp.com/send?text="
            className="rounded-full p-3"
          >
            <Icon icon="mdi:whatsapp" fontSize={32} fontWeight={400} />
          </LinkButton>
        </div>

        <div className="flex p-2 gap-4 items-center rounded-md border border-neutral-200 dark:border-neutral-800">
          <span className="flex max-w-64 overflow-x-auto whitespace-nowrap no-scrollbar">
            {path}
          </span>

          <Button
            variant="primary"
            onClick={() => handleCopy()}
          >
            <Clipboard size={24} strokeWidth={1.5} />
            Copy
          </Button>
        </div>
      </div>
    </Modal>
  );
}
