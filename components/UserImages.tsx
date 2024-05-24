import Image from "next/image";

export async function UserImages() {
  const images: any = {};

  return (
    <section className="w-full">
      <div className="container">
        <div className="space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Images
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {images?.blobs?.map((image: any) => (
              <Image
                priority
                key={image.pathname}
                src={image.url}
                alt="Image"
                className="aspect-square object-cover w-full"
                height={500}
                width={500}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
