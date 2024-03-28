"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { startStream } from "./actions";

export default function AddStream() {
  const [state, action] = useFormState(startStream, null);
  return (
    <form className="p-5 flex flex-col gap-2" action={action}>
      <Input
        name="title"
        required
        placeholder="Title or your stream."
        errors={state?.formErrors}
      />
      <Button text="Start streaming" />
    </form>
  );
}
