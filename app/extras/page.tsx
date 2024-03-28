import HackedComponent from "@/components/hacked-component";
import {
  experimental_taintObjectReference,
  experimental_taintUniqueValue,
} from "react";

async function getData() {
  const keys = {
    apiKey: "11191119",
    secret: "10101001",
  };
  // experimental_taintObjectReference("API Keys were leaked!!!", keys);
  experimental_taintUniqueValue("Secret key was exposed", keys, keys.secret);
  return keys;
}

export default async function Extras() {
  const data = await getData();
  return (
    <div className="flex flex-col gap-3 py-10">
      <h1 className="text-6xl">Extras!</h1>
      <h2 className="font-roboto">So much more to learn!</h2>
      <HackedComponent data={data} />
    </div>
  );
}
