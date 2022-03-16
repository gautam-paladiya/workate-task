import React, { useState } from "react";

function GalleryImageItem({ photo }) {
  const [toggleZoom, setToggleZoom] = useState(0);

  return (
    <div
      className="flex flex-wrap w-1/3 p-1 cursor-pointer "
      onClick={() => {}}
    >
      <a href={photo.url}>
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-lg"
          src={`http://source.unsplash.com/${photo.url.substring(
            photo.url.lastIndexOf("/"),
            photo.url.length
          )}`}
        />
      </a>
    </div>
  );
}

export default GalleryImageItem;
