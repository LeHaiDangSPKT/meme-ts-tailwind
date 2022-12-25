import React from "react";
import { Meme } from "../interface";

const Index: React.FC<Meme> = (props) => {
  const { name, url } = props;
  return (
    <>
      <a href={url} className="bg-cart rounded-lg text-center cursor-pointer">
        <div className="p-4 flex justify-between items-center flex-col h-full">
          <img src={url} />
          <div className="text-secondary text-xl my-4">{name}</div>
        </div>
      </a>
    </>
  );
};

export default Index;
