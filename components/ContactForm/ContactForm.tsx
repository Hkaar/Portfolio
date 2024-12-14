"use client";

import { twMerge } from "tailwind-merge";
import Button from "../Button";
import InputField from "../InputField";
import TextArea from "../TextArea";

import { FormEvent, useState } from "react";
import { SendHorizontal } from "lucide-react";

export default function ContactForm(
  { ...props }: React.HTMLAttributes<HTMLFormElement>,
) {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "45ee2ba9-7c2c-4dd1-a55b-3968ca96b088");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={twMerge(
        "px-8 py-6 border border-neutral-200 dark:border-neutral-800 rounded-md shadow-md",
        props.className,
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="space-y-3">
          {
            /* <div className="flex items-center gap-3">
            <InputField
              title="First name"
              datatype="text"
              name="first name"
              className="flex-1"
              placeholder="Your first name ..."
              required
            />
            <InputField
              title="Last name"
              datatype="text"
              name="last name"
              className="flex-1"
              placeholder="Your last name ..."
              required
            />
          </div> */
          }

          <div>
            <InputField
              title="Name"
              name="name"
              className="bg-body-light dark:bg-body-dark"
              datatype="text"
              placeholder="Enter your name ..."
              required
            />
          </div>

          <div>
            <InputField
              title="Email"
              name="email"
              datatype="email"
              className="w-full bg-body-light dark:bg-body-dark"
              placeholder="Enter your email address ..."
              required
            />
          </div>

          <div>
            <InputField
              title="Subject"
              name="subject"
              datatype="text"
              className="bg-body-light dark:bg-body-dark"
              placeholder="What do you want to discuss?"
              required
            />
          </div>

          <div>
            <TextArea
              title="Message"
              name="message"
              className="w-full bg-body-light dark:bg-body-dark"
              placeholder="Enter your message here ..."
            />
          </div>

          <span>{result}</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            type="submit"
          >
            Send message
            <SendHorizontal size={24} strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </form>
  );
}
