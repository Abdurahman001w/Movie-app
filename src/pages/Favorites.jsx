import { useSelector } from "react-redux";
import { Link } from "react-router";

export function Favorites() {
  const id = useSelector((state) => state.id);
  return (
    <div style={{ background: "#121829", height: "100vh" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          <h2>Back</h2>
        </Link>
        {id.map((item) => {
          return (
            <div
              style={{
                background: "black",
                borderRadius: "18px",
                padding: "10px",
              }}
            >
              <img
                src={item.posterUrl}
                alt="404"
                style={{ width: "400px", display: "block" }}
              />
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {item.nameRu}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
