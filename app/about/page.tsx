import { siteConfig } from "@/constants";
import { decodeHtmlEntities } from "@/lib/htmlDecoder";
import type { Metadata } from "next";
import Image from "next/image";

export const generateMetadata = async (): Promise<Metadata> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/about-us`,
  );

  const json = await res.json();
  return {
    title: json.metaTitle || "Hello",
    description: json.metaDescription,
    openGraph: {
      title: json.metaTitle,
      description: json.metaDescription,
      images: [
        {
          url: json.coverImage,
          width: 800,
          height: 600,
          alt: json.tags[0] || `About - ${siteConfig.name}`,
        },
      ],
    },
  };
};

export default async function AboutPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/about-us`,
  );

  const json = await res.json();

  return (
    <div>
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent" />
        <Image
          src={json.coverImage}
          alt={json.tags[0] || json.coverImage}
          height={420}
          width={720}
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-8 sm:pb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
              {json.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="container  mt-8 max-w-4xl mx-auto">
        <div
          className="col-span-2 min-w-0!
          p-4
  prose-base leading leading-relaxed
  prose-headings:text-gray-900 prose-headings:font-bold
  prose-h1:text-3xl
  prose-h2:text-3xl   prose-h2:font-bold
  prose-h3:text-xl
  prose-h4:text-lg
  prose-p:leading-loose prose-p:tracking-normal prose-p:text-lg prose-p:mb-4 prose-p:mt-0
  prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary hover:prose-a:underline
  prose-strong:text-black prose-strong:font-bold
  prose-ul:my-2 prose-ol:my-2
  prose-li:text-gray-700 prose-li:mb-1
  prose-blockquote:border-l-4 prose-blockquote:border-primary/70 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
  prose-img:rounded-lg prose-img:my-6
  prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
  prose-ul:list-none
  prose-li:relative prose-li:pl-8
  prose-li:before:absolute
  prose-li:before:left-0
  prose-li:before:top-[0.45em]
  prose-li:before:w-4 prose-li:before:h-4
  prose-li:before:bg-primary
  prose-li:before:mask-[url('/icons/bullet.svg')]
  prose-li:before:rotate-90
  prose-li:before:mask-contain
  prose-li:before:mask-no-repeat
  prose-li:text-lg prose-li:leading-loose prose-li:tracking-normal
  prose-ul:text-lg prose-ul:leading-loose prose-ul:tracking-normal
  prose max-w-none w-full
  wrap-break-word
  **:wrap-break-word
        "
          dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(json.content) }}
        />
      </div>
    </div>
  );
}
