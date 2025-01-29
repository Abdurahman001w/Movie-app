import { useSelector, useDispatch } from "react-redux";
import addd from "./up/img/add.png";
import stars from "./up/img/stars.svg";
import { NavLink } from "react-router";
import { getCurrentObj } from "../../redux/store/reducer";
import { useState } from "react";

export function Down() {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [add, setAdd] = useState({ text: "" });
  return (
    <div
      style={{
        backgroundColor: "#000",
        paddingTop: "189px",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <h1 className="movies-tag">Movies</h1>
        <div className="cart-wrapper">
          {state[0].films.map((item) => (
            <div className="cart" key={item.filmId}>
              <NavLink
                onClick={() => dispatch(getCurrentObj(item))}
                to={`/${item.filmId}`}
              >
                <img
                  className="cart-img"
                  src={item.posterUrlPreview}
                  alt="img"
                />
              </NavLink>
              <p className="cart__nameEn">{item.nameRu}</p>
              <div style={{ display: "flex", columnGap: "15px" }}>
                <img src={addd} alt="#" />
                <p
                  onClick={() => (
                    dispatch(getCurrentObj(item)),
                    setAdd({ id: item.filmId, text: "added" })
                  )}
                  className="cart__add"
                >
                  {add.text.length > 0 && add.id == item.filmId
                    ? add.text
                    : "Add to my list"}
                </p>
              </div>
              <span className="cart__stars-block">
                <img src={stars} alt="#" />
                <p className="rating">
                  {item.rating === "null" ? "7.5" : item.rating}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
