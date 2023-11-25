
import { image } from "@/constants/images";
import Image from "next/image";


export const ImageCard = () => (
  <Image
    className="w-full rounded-lg object-cover object-center"
    src={image.card}
    width={320}
    height={100}
    alt="product"
  />
);

const WebtoonCard = ({story}:{story?:any}) => {
 
        return (
        
                <div className="mx-auto px-5" >
                  <div className="w-[320px] cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                    <div>
                      <div className="my-4 flex justify-between px-4 items-start">
                        <p className="font-bold text-blue-900 line-clamp-2 h-12">
                          {story?.title}
                        </p>
                        <p
                          style={{ backgroundColor: `#${story?.genreColor}` }}
                          className="rounded-full px-2 py-0.5 text-xs font-semibold text-white"
                        >
                          {story?.representGenre}
                        </p>
                      </div>

                      <div className="my-3 flex items-center justify-between px-4">
                        <p className="text-sm font-semibold text-gray-500">
                          Total Chapter (free)
                        </p>
                        <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                          {story?.totalServiceEpisodeCount}
                        </p>
                      </div>
                      <div className="my-3 flex items-center justify-between px-4">
                        <p className="text-sm font-semibold text-gray-500">
                          Status
                        </p>
                        <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                          {story?.dailyPass ? "Lock" : "Free Read"}
                        </p>
                      </div>
                      <div className="my-3 flex items-center justify-between px-4">
                        <p className="rounded-full bg-gray-200 px-2 py-2 text-xs font-semibold text-gray-600">
                          {story?.restTerminationStatus === "SERIES"
                            ? "ยังไม่จบ"
                            : "จบแล้ว"}
                        </p>
                        <p className="rounded-full px-2 py-0.5 text-xs font-semibold text-gray-600">
                          {story?.dailyPass?.modifyYmdt ? (
                            <>
                              ล่าสุด {story?.dailyPass?.modifyYmdt[2]}/
                              {story?.dailyPass?.modifyYmdt[1]}/
                              {story?.dailyPass?.modifyYmdt[0]}
                            </>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                      <div className="my-3 flex items-center justify-between px-4">
                        <p className="text-sm font-semibold text-gray-500">
                          Artist
                        </p>
                        <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                          {story?.writingAuthorName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
           
        );
};

export default WebtoonCard;
