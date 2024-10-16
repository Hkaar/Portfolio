import Button from "../Button";
import InputField from "../InputField";
import TextArea from "../TextArea";

export default function ContactForm() {
    return (
        <form className="px-8 py-6 border border-gray-200 dark:border-gray-800 rounded-md shadow-md">
            <div className="flex flex-col gap-6">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <InputField title="First name" />
                        <InputField title="Last name" />
                    </div>

                    <InputField title="Email" className="w-full" />

                    <TextArea title="Message" className="w-full"/>
                </div>

                <div className="flex items-center gap-2">
                    <Button icon="cancel" type="danger">
                        Clear Form
                    </Button>

                    <Button icon="send" type="accent">
                        Send
                    </Button>
                </div>
            </div>
        </form>
    )
}