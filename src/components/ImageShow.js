import React from 'react'
import "./main.css";


function ImageShow({image}) {
  console.log(image);
  let Description= image.alt_description;
  console.log(Description);
  let Length = Description.length;
  console.log(Length);
  let p1 ;
  let p2 ;
  let p3 ;
  if(Length<26){
     p1 = <>{Description}</> ;
     p2=<br/>

    }else if(Length ===null || Length===undefined || Length===0){
    p1 = "Description is not given";
    p2=<p className="txthide">okay</p>
    p3=<p className="txthide">okay</p>

  }else if(Length<=63 && Length>=26){
    p1=Description.slice(0,25);
    p2=Description.slice(25,64);
    p3=<p className="txthide"></p>
  }else if(Length<=90 && Length>=64){
    p1=Description.slice(0,25);
    p2=Description.slice(25,64);
    p3=Description.slice(64,90);
  }

  // let DescLength =Description.length;
  // console.log(DescLength);
  return (
    <div className='col-xs-12 col-md-6 col-lg-4 image-show '>
    <img  src={image.urls.small} alt={image.alt_description}/><br></br>
    Author: {image.user.name} <br />
    <p>Description:</p> 
    <div property={{display:"inline"}}>{p1}  <br/>
     {p2}  <br />
     {p3} <br /> </div>
    <a href={image.urls.raw}>Real Photo </a>  
    </div>
  );
}

export default ImageShow;