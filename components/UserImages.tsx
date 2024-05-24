import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCaip10Account } from "@/utils";
import { list } from "@vercel/blob";
import { getServerSession } from "next-auth";
import Image from "next/image";

export async function UserImages() {
  async function allImages() {
    const session = await getServerSession(authOptions);
    if (!session) return null;
    const { address, chainId } = session;
    const account = getCaip10Account(address, chainId);
    const blobs = await list({
      prefix: account,
    });
    return blobs;
  }
  const images = await allImages();

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
