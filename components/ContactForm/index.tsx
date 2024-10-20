import { twMerge } from "tailwind-merge";
import Button from "../Button";
import InputField from "../InputField";
import TextArea from "../TextArea";

export default function ContactForm({ ...props }: React.HTMLAttributes<HTMLFormElement>) {
  return (
    <form className={twMerge("px-8 py-6 border border-gray-200 dark:border-gray-800 rounded-md shadow-md", props.className)}>
      <div className="flex flex-col gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <InputField title="First name" datatype="text" placeholder="Your first name ..." />
            <InputField title="Last name" datatype="text" placeholder="Your last name ..." />
          </div>

          <InputField title="Email" datatype="email" className="w-full" placeholder="Your email address ..." />

          <InputField title="Subject" placeholder="What do you want to discuss?"></InputField>

          <TextArea title="Message" className="w-full" placeholder="Enter your message here ..." />
        </div>

        <div className="flex items-center gap-2">
          <Button icon="material-symbols-light:send-outline" type="primary" rightIcon>
            Send message
          </Button>
        </div>
      </div>
    </form>
  );
}
