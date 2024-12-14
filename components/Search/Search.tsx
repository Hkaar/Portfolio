"use client";

import { useState } from "react";
import { Category } from "@/types/contentUtils";

import { Filter } from "lucide-react";

import Button from "@/components/Button";
import FilterModal from "@/components/Modal/FilterModal";
import SearchBox from "@/components/SearchBox";

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
          <Button variant="outline-info" className="text-sm" onClick={openModal}>
            <Filter size={18} strokeWidth={1.5} />
            Filter
          </Button>
        </div>
      </div>

      <FilterModal categories={categories} isOpen={open} onClose={closeModal} />
    </>
  );
}
