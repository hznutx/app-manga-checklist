"use client";
import { useState, useEffect } from "react";
import webtoonlist from "../data/webtoonlist.json";
import { SearchBar, WebtoonCard } from ".";

const Library = () => {
  const [uniqueTitlesData, setUniqueTitlesData] = useState<any[]>([]);
  const [searchInput, setsearchInput] = useState("");

  const DataWebtoon = webtoonlist;

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
  }, [DataWebtoon]);

  const searchWebtoon = uniqueTitlesData.filter((story) => {
    return story.title.includes(searchInput.toLowerCase().replace(/\s+/g, ""));
  });

  const isDataEmpty =
    !Array.isArray(searchWebtoon) || searchWebtoon.length < 1 || !searchWebtoon;
  const SearchResult = searchWebtoon.length.toLocaleString();

  return (
    <div className="py-20 grid container mx-auto items-center justify-center">
      <SearchBar keyword={searchInput} onChange={setsearchInput} />
      {isDataEmpty ? (
        <span className="text-lg font-bold relative text-center pb-4 text-gray-950">
          ทั้งหมด {SearchResult} เรื่อง
        </span>
      ) : (
        <>
          <span className="text-lg font-bold relative text-center pb-4 text-gray-950">
            ทั้งหมด {SearchResult} เรื่อง
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchWebtoon?.map((story, i) => (
              <WebtoonCard story={story} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Library;
