import React from 'react';
import Imageshow from "./ImageShow";
import "./main.css";

function ImageList({images}) {

  const rendedImages = images.map((image)=>{
    return <Imageshow image={image} />
  });

  return (
    <div className='image-list '>
    <div >{rendedImages}</div>
    </div>
  )
}

export default ImageList;