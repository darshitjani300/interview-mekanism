import React from "react";

const Card = ({ data }) => {
  return (
    <div className="min-h-80 bg-green-500 rounded-lg relative">
      <div className="h-full w-full flex flex-col">
        <div className="flex-1">
          <h3 className="p-2 text-white w-full text-right font-bold">
            #00${data?.id}
          </h3>
        </div>

        <div className="flex-1 p-2">
          <div className="h-full w-full bg-white rounded-lg">
            <div className="flex flex-col justify-end items-center gap-3 h-full w-full p-3">
              <div className="text-2xl text-green-600 font-bold">
                {data?.name?.english}
              </div>
              <div className="flex gap-2">
                {data?.type?.length > 0 &&
                  data?.type?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-green-500 rounded-lg p-1 px-2 text-white text-sm"
                      >
                        {item}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[40%] left-1/2 -translate-1/2">
          <img
            src={data?.image?.thumbnail}
            className=" object-cover"
            alt="Thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
