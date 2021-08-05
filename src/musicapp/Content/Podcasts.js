import './Style/Podcasts.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Podcasts() {
  const url = 'https://api.unsplash.com/photos/?client_id=o6naDRKKL6I-_maJr8Ir8wsYYmmxMZlv_Ut0XTvBXQM&per_page=50';
  const [images, setImages] = useState([]);
  
  const [ newPage, setNewPage] = useState(1); 
  const getImages = () => {
    axios.get(url).then(res=>{
      console.log(res.data);
      setImages(res.data)
    })
  }

  useEffect(()=>{
    getImages()
  },[])

  return <div className="Podcast-content">
    {/* <InfiniteScroll
      dataLength={images.length} 
      next = { () => setNewPage( newPage + 1 )}
      hasMore = {true}
    > */}
      { 
        images.map((image) => {
          return (
            <div className="Podcasts-images">
              <LazyLoadImage
                effect='blur'
                src={image.urls.regular} 
                alt={image.alt_description} 
                key={image.id} 
                // height="200px"
                // width="300px"
                // height="auto"
                // width="auto"
              />
            </div>
          )
        })
      }
    {/* </InfiniteScroll> */}
  </div>
}