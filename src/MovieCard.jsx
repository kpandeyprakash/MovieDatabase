import React from "react";

const MovieCard = ({ movie }) => {
  // Generate a random image 
  const randomImageUrl = `https://picsum.photos/seed/${movie.id}/200/300`;

  return (
    <div
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "300px",
        backgroundColor: "#fff",
        transition: "transform 0.2s, box-shadow 0.2s",
        gap: "20px",
        marginLeft: "auto",
        cursor: "pointer",
        
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      }}
    >
      <img
        src={randomImageUrl}
        alt={movie.movie}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "15px", textAlign: "center" }}>
        <h3 style={{ fontSize: "18px", margin: "10px 0", color: "#333" }}>
          {movie.movie}
        </h3>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            margin: "5px 0",
            fontWeight: "bold",
          }}
        >
          Rating: {movie.rating}
        </p>
        <a
          href={movie.imdb_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "8px 12px",
            backgroundColor: "#007BFF",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "14px",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#007BFF";
          }}
        >
          IMDb
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
