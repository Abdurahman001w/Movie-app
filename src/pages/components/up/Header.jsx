import logo from "./img/ApnaTV.png";
import search from "./img/search.svg";
import note from "./img/notification.svg";
import { useEffect, useState } from "react";
import { asyncFetch } from "../../../redux/asyncActions/asyncFetch";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

export function Header() {
  const [flagSearch, setFlagSearch] = useState(false);
  const [inp, setInp] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
      dispatch(asyncFetch(name));
    }
  }, [dispatch, name]);

  const handleClick = (e) => {
    e.preventDefault();
    setFlagSearch(!flagSearch);
    setName(inp);
    setInp("");
  };
  const handleScroll = () => {
    window.scrollTo({ top: 1100, behavior: "smooth" });
  };

  return (
    <div
      className="header-md"

    >
      <div className="df cg-40">
        <h3 style={{ cursor: "pointer" }} onClick={handleScroll}>
          Movies
        </h3>
        <Link
          style={{ textDecoration: "none", color: "#ffff" }}
          to="/Favorites"
        >
          <h3>Favorites</h3>
        </Link>
      </div>
      <img
        className="apna-logo"
        width={161.65}
        height={30}
        src={logo}
        alt="logo"
      />
      <div className="df cg-40">
        {flagSearch && (
          <input
            onChange={(e) => setInp(e.currentTarget.value)}
            value={inp}
            type="text"
          />
        )}
        <img
          width={24}
          height={24}
          onClick={(e) => handleClick(e)}
          src={search}
          alt="search-img"
        />
        <img width={25} height={30} src={note} alt="note-img" />
        <p className="sign-up" style={{ textWrap: "nowrap" }}>
          Sign Up
        </p>
      </div>
    </div>
  );
}
