import React, { useState, useEffect }from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import './DiscoverNew.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function App() {
    const items = 6;
    const [state, setState] = useState({DataSet: []});
    const [PageNumber, SetPageNumber] = useState(1);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = () => {
        console.log("Inside FetchData");
        console.log("PageNumber : ",PageNumber);
        console.log("Item : ",items)
        axios
        .get(
            `https://jsonplaceholder.typicode.com/photos?_page=${PageNumber}&_limit=${items}`
        )
        .then(res =>
            {
            setState({
            DataSet: [...state.DataSet, ...res.data],
            })
            SetPageNumber(PageNumber+1);
            }
        );
    };
    return (
        <InfiniteScroll
            dataLength={state.DataSet.length}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            height={600}
        >
            <div className="Discover-content">
            {
            state.DataSet.map(dataset => (
                <div className="Discover-images" key={dataset.id}>
                    <img src={dataset.url} alt={dataset.id} className="DiscoverImg"/>
                    {/* <LazyLoadImage
                        effect='blur'
                        src={dataset.url} 
                        alt={dataset.id}
                        key=""
                        className="DiscoverImg"
                    /> */}
                </div>
            ))
            }
            </div>
        </InfiniteScroll>
    
    );
}