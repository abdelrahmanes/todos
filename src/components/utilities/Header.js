import React, { useEffect, useState } from "react";
import header from "../../images/header.jpg";
import axios from "axios";
export default function Header(props) {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const baseUrl = "https://type.fit/api/quotes";
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      const randomQuote = res.data[Math.floor(Math.random() * res.data.length)];
      setQuote(randomQuote.text);
      randomQuote.author ? setAuthor(randomQuote.author) : setAuthor("Someone");
    });
  }, []);
  return (
    <div>
      <div className={`relative bg-gray-700 h-72 `}>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r bg-purple-400 bg-opacity-30 flex flex-col justify-start items-center px-48 ">
          <p className="text-3xl pl-2 font-sharp text-center text-white drop-shadow-2xl mt-12">
            {quote}
          </p>
          <p className="text-base font-bold mt-2">{author}</p>
        </div>
        <img
          src={header}
          alt="Moountain image"
          className="h-full w-full object-cover object-bottom "
        />
      </div>
    </div>
  );
}
