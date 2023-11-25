"use client";
import { useState, useEffect } from "react";
import webtoonlist from "../data/webtoonlist.json";
import Image from "next/image";
import { image } from "@/constants/images";

const DataWebtoon = webtoonlist;

export const ImageCard = () => (
  <Image
    className="w-full rounded-lg object-cover object-center"
    src={image.card}
    width={320}
    height={100}
    alt="product"
  />
);

const WebtoonCard = () => {
  const [uniqueTitlesData, setUniqueTitlesData] = useState<any[]>([]);

  useEffect(() => {
    const uniqueTitlesArray: any[] = [];

    for (const story of DataWebtoon) {
      const isDuplicate = uniqueTitlesArray.some(
        (item) => item.title === story.title
      );

      if (!isDuplicate) {
        uniqueTitlesArray.push(story);
      }
    }

    setUniqueTitlesData(uniqueTitlesArray);
  }, []);
  
  return (
    <div className="py-40 container">
      <span className="text-lg font-bold p-10 grid text-gray-950">
        ทั้งหมด {uniqueTitlesData.length.toLocaleString()} เรื่อง
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  min-h-screen items-center justify-center">
        {uniqueTitlesData.map((story, i) => (
          <div className="mx-auto px-5" key={i}>
            <div className="w-[320px] cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
              <div>
                <div className="my-4 flex justify-between px-4 items-start">
                  <p className="font-bold text-blue-900 line-clamp-2 h-12">
                    {story.title}
                  </p>
                  <p
                    style={{ backgroundColor: `#${story.genreColor}` }}
                    className="rounded-full px-2 py-0.5 text-xs font-semibold text-white"
                  >
                    {story.representGenre}
                  </p>
                </div>
                <div className="my-3 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">
                    Total Chapter
                  </p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    {story.totalServiceEpisodeCount}
                  </p>
                </div>
                <div className="my-3 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">Status</p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    {story.dailyPass ? "Lock" : "Free Read"}
                  </p>
                </div>
                <div className="my-3 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">
                    Third option
                  </p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    1
                  </p>
                </div>
                <div className="my-3 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">
                    Fourth option
                  </p>
                  <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                    23
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebtoonCard;
