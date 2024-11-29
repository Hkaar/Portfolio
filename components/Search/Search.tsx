"use client";

import { useState } from "react";
import Button from "../Button";
import FilterModal from "../Modal/FilterModal";
import SearchBox from "../SearchBox";
import { Category } from "@/types/contentUtils";

interface SearchProps {
  placeholder?: string;
  categories: Category[]
}

export default function Search({ placeholder, categories }: SearchProps) {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 w-full">
        <SearchBox
          placeholder={placeholder}
          className="w-full lg:w-3/4"
        />

        <div className="flex items-center gap-2">
          <Button icon="mdi:filter-outline" type="outline-info" onClick={openModal}>
            Filter
          </Button>
        </div>
      </div>

      <FilterModal categories={categories} isOpen={open} onClose={closeModal} />
    </>
  );
}
