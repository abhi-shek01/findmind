import React from "react";

export const ItemDisplay = ({ avatar_url }) => {
  const { author, url, width, height, download_url } = avatar_url;

  return (
    <div classname='card text-center'>
      <h1>{author}</h1>
      <img
        src={download_url}
        alt=''
        style={{
          width: "50%",
          height: "50%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <br />
      <br />
      <a
        href={url}
        className='btn'
        style={{
          width: "auto",
          backgroundColor: "DodgerBlue",
          color: "white",
          padding: "12px 30px",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        <i className='fa fa-download'></i>Download
      </a>
    </div>
  );
};

export default ItemDisplay;
