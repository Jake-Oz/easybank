import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
}

const ArticleCard = ({
  author,
  title,
  description,
  image,
}: ArticleCardProps) => {
  return (
    <Link href={"#"} className="transition ease-in-out hover:scale-105 ">
      <Image
        src={image}
        alt={title}
        width={250}
        height={200}
        className="h-48 w-full rounded object-cover"
      />
      <div className="flex h-48 flex-col gap-2 rounded bg-neutral-white px-4 py-6">
        <p className="text-[10px] text-neutral-grayishBlue">by {author}</p>
        <h1 className="text-sm ">{title}</h1>
        <p className="text-xs text-neutral-grayishBlue">{description}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
