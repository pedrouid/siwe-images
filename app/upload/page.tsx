import UploadFile from "@/components/UploadFile";
import React from "react";

export default function Upload() {
  return (
    <section className="w-full">
      <div className="container">
        <div className="space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Upload images
          </h2>
          <UploadFile />
        </div>
      </div>
    </section>
  );
}
