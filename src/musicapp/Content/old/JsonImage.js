import React, { useState, useEffect } from 'react';
import Discover from '../Discover';
import axios from 'axios';

function NewFunction(){
    const urls = 'https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=50';
    const [images, setImages] = useState([]);
    useEffect(()=>{
      getImages();
    },[])

    const getImages = () => {
        axios.get(urls).then(res=>{
          console.log(res.data);
          setImages(res.data);
        })
    }
    return imagesNew=images
}

export default function JsonImage(){
    const imagesNew = NewFunction();
    return(
        <div>
            <Discover images={imagesNew} setImages={setImages}/>
        </div>
    );
}