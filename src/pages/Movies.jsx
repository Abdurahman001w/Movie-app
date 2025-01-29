import { useSelector } from "react-redux";
import movies_logo from "./components/up/img/Movies_logo.png";
import right_logo from "./components/up/img/arrow-right.png";
import { Link } from "react-router";
import stars from "./components/up/img/stars.svg";
import icon_search from "./components/up/img/icon_search.png";
import { useState } from "react";
export function Movies() {
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);
  const id = useSelector((state) => state.id);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  console.log(text);

  const handleClick = (e) => {
    e.preventDefault();
    setText([...text, input]);
    setInput("");
  };
  return (
    <div className="bg-movies">
      <div className="container">
        <header className="header-movies">
          <img
            style={{ width: "40px", height: "40px" }}
            src={movies_logo}
            alt="404"
          />
          <div className="apps-movies">
            <Link to="/Favorites" className="nav-link">
              <h3> Favorites</h3>
            </Link>
            <Link to="/" className="nav-link">
              <h3>
                Suggest me
                <img
                  src={right_logo}
                  alt="404"
                  style={{ width: "16px", height: "16px" }}
                />
              </h3>
            </Link>
          </div>
        </header>
        {id.map((item) => (
          <div className="container">
            <center className="center-block">
              <img
                className="movies-logo-film"
                src={item.posterUrl}
                alt="404"
              />
              <div>
                <div className="center-title">
                  <h3>{item.nameRu}</h3>
                  <div className="description-movie"> {item.description}</div>
                  <span className="rating-logo">
                    <img src={stars} alt="#" />
                    {item.rating === "null" ? "7.5" : item.rating}
                  </span>
                </div>

                <div className="center-subtitle">
                  <span>Type</span>
                  <div>{item.type}</div>
                </div>
                <div className="center-subtitle">
                  <span>Release Date:</span>
                  <div>{item.year}</div>
                </div>
                <div className="center-subtitle">
                  <span>Run time</span>
                  <div>{item.filmLength}</div>
                </div>
                <div className="center-subtitle">
                  <span>Genres</span>
                  <div>{item.genres[0].genre}</div>
                </div>
              </div>
            </center>
            <comment className="comment-block">
              <form>
                <img src={icon_search} alt="404" />
                <input
                  value={input}
                  onChange={(e) => handleChange(e)}
                  placeholder="Comment..."
                />
                <button onClick={(e) => handleClick(e)}>add</button>
                {text.map((item) => (
                  <p className="comment-text">{item}</p>
                ))}
              </form>
            </comment>
          </div>
        ))}
      </div>
    </div>
  );
}
