import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import './Discover1.css';
import axios from 'axios';

export default function Discover() {
    const url = 'https://api.unsplash.com/photos/?client_id=o6naDRKKL6I-_maJr8Ir8wsYYmmxMZlv_Ut0XTvBXQM&per_page=50';
    const [images, setImages] = useState([]);
    
    useEffect(()=>{
        console.log("first images : ", images);
      getImages();
      console.log("images : ", images);
      testing();
    },[])

    const getImages = () => {
        axios.get(url).then(res=>{
          console.log(res.data);
          setImages(res.data);
        })
    }
    const testing = () =>{
        console.log("testing . . . . .")
    }
    // console.log("Loop : ", axios.get(url).map(res => (res)) );

    const  NoOfElementsLoadMore = 4;
    const [NoOfElements, SetNoOfElements] = useState(6);
    const [state, setState] = useState({items: images.slice(0,NoOfElements).map((element) => (element))})
    const [HasMore, SetHasMore] = useState(true);
    const fetchMoreData = () => {
      setTimeout(() => {
        setState({
          items: state.items.concat(images.slice(NoOfElements,NoOfElements+NoOfElementsLoadMore).map((element) => (element)))
        });
      }, 500);
      SetNoOfElements(NoOfElements+NoOfElementsLoadMore);
    //   if(state.items.length >= images.length){
    //     SetHasMore(false);
    //   }
    };

    return (
        <div>
        <InfiniteScroll
            dataLength={state.items.length}
            next={fetchMoreData}
            hasMore={HasMore}
            // loader={<div className="Box">Loading.....</div>}
            >
            {
            state.items.map((item) => {
                return(
                <div className="Box">
                    <img src={item.urls.regular} alt={item.alt_description} className="DiscoverImages"/>
                </div>
                )
            })
            }
        </InfiniteScroll>
        </div>
    );
  
}