import Link from "next/link";
import Badge from "../Badge";

import { Icon } from "@iconify/react";
import process from "node:process";

export default function Footer() {
  return (
    <footer className="py-4 border-t bg-base-light dark:bg-base-dark shadow-md border-gray-200 dark:border-gray-800">
      <div className="container flex md:items-center flex-col md:flex-row gap-3 justify-between">
        <span className="font-semibold text-lg">
          Copyright &#169; 2024 Shava Jaya. All rights reserved.
        </span>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Link href="https://www.x.com/Hkaar5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="size-6"
                viewBox="0 0 24 24"
              >
                <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z">
                </path>
              </svg>
            </Link>

            <Link href="https://www.github.com/Hkaar">
              <Icon icon="mdi:github" className="size-6"></Icon>
            </Link>
          </div>

          <Badge icon="material-symbols-light:shoppingmode-outline" className="px-3 py-2 shadow-none border-neutral-200 dark:border-neutral-800">
            {process.env.APP_VERSION ? process.env.APP_VERSION : "1.0"}
          </Badge>
        </div>
      </div>
    </footer>
  );
}
