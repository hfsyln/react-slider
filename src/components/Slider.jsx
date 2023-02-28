import React from 'react'
import Resim from "../image/bloom.jpg"
import data from "../util/Data" 

const Slider = () => {
    let box = document.querySelector('.product-container');
// let box = document.querySelector('.card-wrapper');
//let item = document.querySelector('.card');

const goLeft = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
    // let width = item.clientWidth;
    // let xwidth = box.clientWidth
    // box.scrollLeft = box.scrollLeft - width;
    // console.log(width)
    // console.log(xwidth)
    // console.log(box.scrollLeft)
}

const goRight = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width)
}

  return (
    <>
    <div className="slide-container"> 
        <button onClick={goLeft} className="arrowleft">left</button>
        <button onClick={goRight}  className="arrowright"> right</button>  
       
       
        
             <div className="card-wrapper">
      
                { data.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="image-content">
                                <span className="overlay"></span>
                                <div className="card-image">
                                    <img src={item?.image} alt="" className="card-img" />
                                </div>
                            </div>
                            <div className="card-content">
                                <h2 className="name">{item?.name}</h2>
                                <p className="desciription">{item?.job}</p>
                            </div>
                        </div>
               ) })}
               
                </div> 
        
    </div> 
    </>
  )
}

export default Slider