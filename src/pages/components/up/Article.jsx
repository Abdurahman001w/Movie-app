import { useSelector } from "react-redux";
import stars from "./img/Group 2.svg";
import watching from "./img/Watching.png";
export function Article() {
  const state = useSelector((state) => state.data);

  return (
    <>
      {state.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "35px",
            marginBottom: "45px",
          }}
        >
          <h1 className="movie-title">{item.films[0].nameRu}</h1>
          <p className="movie-subtitle" style={{ maxWidth: "30%" }}>
            {item.films[0].description}
          </p>
          <img
            className="stars"
            width={157}
            height={26}
            src={stars}
            alt="stars"
          />
          <div
            style={{
              display: "flex",
              columnGap: "25px",
              color: "#ffff",
              alignItems: "center",
            }}
          >
            <button className="watch-now-btn">
              <img src={watching} alt="404" />
              Watch Now
            </button>
            <button className="trailer-btn">Trailer</button>
          </div>
        </div>
      ))}
    </>
  );
}
