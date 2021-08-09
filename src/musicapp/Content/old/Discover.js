
import React, { useState, useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import './Discover.css';
import axios from 'axios';
import jsonImage from './old/JsonImage';


export default function App(props) {
    // const urls = 'https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=50';
    // const [images, setImages] = useState([]);
    // useEffect(()=>{
    //   getImages();
    // },[])

    // const getImages = () => {
    //     axios.get(urls).then(res=>{
    //       console.log(res.data);
    //       setImages(res.data);
    //     })
    // }

    const  NoOfElementsLoadMore = 4;
    const [NoOfElements, SetNoOfElements] = useState(6);
    const [state, setState] = useState({items: props.images.slice(0,NoOfElements).map((element) => (element))})
    const [HasMore, SetHasMore] = useState(true);
    console.log("length : ", state.items);
    const fetchMoreData = () => {
        setTimeout(() => {
        setState({
            items: state.items.concat(props.images.slice(NoOfElements,NoOfElements+NoOfElementsLoadMore).map((element) => (element)))
        });
        }, 500);
        SetNoOfElements(NoOfElements+NoOfElementsLoadMore);
        if(state.items.length >= props.images.length){
        SetHasMore(false);
        }
    };
    let myCount = 0; 
    const changeLength = () => {
        console.log("mycount : ", myCount);
        myCount += 1;
        return (
            myCount === 1 ? 4 :state.items.length 
        );
    }
    return (
        <div>
        <InfiniteScroll
            dataLength={changeLength}
            // height={700}
            next={fetchMoreData}
            hasMore={HasMore}
            loader={<div className="Box">Loading.....</div>}
            // style={{backgroundColor:"red"}}
            >
            { 
            state.items.map((item) => {
                console.log("length : ", state.items.length);
                return(
                <div className="Box">
                    <img src={item.url} alt="" className="BoxImages"/>
                </div>
                )
            })
            }
        </InfiniteScroll>
        </div>
    );
}











                    // const url = 'https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10';
                    // const [discover, setDiscover] = useState(); 

                    //     axios.get(url).then(res=>{
                    //         res.data.map((item) => {
                    //             return(
                    //                 <div className="Box">
                    //                     <InfiniteScroll
                    //                     dataLength={res.data.length}
                    //                     next={10}
                    //                     hasMore={true}
                    //                     loader={<div className="Box">Loading.....</div>}
                    //                     >  
                    //                         <img src={item.url} alt=""/>
                    //                     </InfiniteScroll> 
                    //                 </div>
                    //             );
                    //         })
                    //     })
