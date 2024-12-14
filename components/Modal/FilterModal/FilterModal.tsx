import { twMerge } from "tailwind-merge";
import { Category } from "@/types/contentUtils";

import { CircleX } from "lucide-react";

import Button from "@/components/Button";
import Modal, { ModalProps } from "@/components/Modal/Modal";
import CategoryButton from "@/components/Button/CategoryButton";

interface FilterModalProps extends Omit<ModalProps, "children"> {
  categories: Category[];
}

export default function FilterModal(
  { categories, ...props }: FilterModalProps,
) {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      className={twMerge(
        "w-full h-full lg:w-1/3 lg:h-2/4 overflow-auto flex flex-col px-8 py-7 space-y-6",
        props.className,
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-8">
          <span className="text-3xl font-bold">
            Filter Search
          </span>

          <Button onClick={() => props.onClose()} className="border-0 p-0">
            <CircleX size={24} strokeWidth={1.5} className="stroke-danger dark:stroke-danger-dark" />
          </Button>
        </div>

        <span className="text-gray-500 dark:text-neutral-600 text-sm">
          Filter search by category
        </span>
      </div>

      <div
        className={`
          flex flex-col gap-6 mb-3 flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 px-2`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 flex-1">
          {categories.map((category, i) => (
            <CategoryButton
              key={`${category.title}${i}`}
              icon={category.icon}
              slug={category.title}
              className="shadow w-full px-4 py-3"
            >
              {category.title}
            </CategoryButton>
          ))}
        </div>
      </div>
    </Modal>
  );
}
