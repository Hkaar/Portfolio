import Link from "next/link";
import Badge from "../Badge";

export default function Footer() {
    return (
        <footer className="py-4 border-t bg-base-light dark:bg-base-dark shadow-md border-gray-200 dark:border-gray-800">
            <div className="container flex items-center justify-between">
                <span className="font-bold">
                    Copyright &#169; 2024 Shava Jaya. All rights reserved.
                </span>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        <Link href="https://www.x.com/Hkaar5">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="size-6" viewBox="0 0 24 24">
                                <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
                            </svg>
                        </Link>

                        <Link href="https://www.github.com/Hkaar">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="size-6" viewBox="0 0 24 24">
                                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                            </svg>
                        </Link>
                    </div>

                    <Badge icon="shoppingmode">
                        {process.env.APP_VERSION ? process.env.APP_VERSION : '1.0'}
                    </Badge>
                </div>
            </div>
        </footer>
    )
}