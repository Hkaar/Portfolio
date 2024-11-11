import Button from "@/components/Button";
import Modal, { ModalProps } from "../Modal";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";
import { Category } from "@/types/contentUtils";
import CategoryBadge from "@/components/Badge/CategoryBadge";

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
      className={twMerge("w-1/2 h-3/4", props.className)}
    >
      <div className="flex justify-between items-center gap-8 px-4 pt-3 mb-3">
        <h6 className="text-xl font-semibold">
          Filter Search
        </h6>

        <Button onClick={() => props.onClose()} className="border-0 p-0">
          <Icon icon="mdi:close" fontSize={28} fontWeight={300} />
        </Button>
      </div>

      <div className="flex flex-col gap-6 px-4 mb-3">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 px-3 py-2 rounded-md border">
          {categories.map((category, i) => (
            <CategoryBadge key={`${category.title}${i}`} icon={category.icon} slug={category.title} className="shadow">
              {category.title}
            </CategoryBadge>
          ))}
        </div>
      </div>
    </Modal>
  );
}
