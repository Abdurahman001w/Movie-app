import React from "react";
import { Header } from "./up/Header";
import { Article } from "./up/Article";
import { Slider } from "./up/Slider";
import { useSelector } from "react-redux";

export function Up() {
  const state = useSelector((state) => state.data);

  return (
    <>
      {state.map((item) => (
        <div
          style={{
            backgroundImage: `url(${item.films[0].posterUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <Header />
            <Article />
            <Slider />
          </div>
        </div>
      ))}
    </>
  );
}
