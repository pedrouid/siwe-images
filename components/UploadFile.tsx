import React from "react";
import UploadIcon from "./UploadIcon";

export default function UploadFile() {
  async function uploadImage() {
    "use server";
    return {};
  }

  return (
    <form className="flex flex-col mt-4 md:mt-6 gap-4" action={uploadImage}>
      <div className="flex flex-col mb-2 gap-1">
        <label htmlFor="image" className="hidden">
          Upload file
        </label>
        <input
          className="self-center max-w-60 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="file_input_help"
          id="image"
          name="image"
          type="file"
        />
        <p
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 4MB).
        </p>
      </div>

      <button className="flex bg-gray-800 hover:bg-gray-700 text-white text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]">
        <UploadIcon />
        Upload
      </button>
    </form>
  );
}
