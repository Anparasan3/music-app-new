
import React, { useEffect, useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme,GlobalStyle } from "./theme";
import Content from './Content/Content';
import Player  from './Player/Player';
import Left    from './Left/Left'; 
import './MusicApp.css';
import { Redirect } from 'react-router-dom';


function AdjustWindowSize(){
    const[currentScreenSize, setCurrentScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setCurrentScreenSize(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    },[]);
    return currentScreenSize;
}

export default function MusicApp({ authorized }){
    const width = AdjustWindowSize();
    const [theme, setTheme] = useState("light");
    const [content, setContent] = useState("Videos");
    const [searchTerm, setSearchTerm] = useState("");
    const [topListSearchTerm, setTopListSearchTerm] = useState("");
    // if(!authorized){
    //     console.log("what happen")
    //     return <Redirect to = "/" />;
    // }
    // if(props.authorized == false){
    //     console.log("what happen")
    //     return <Redirect to = "/" />;
    // }
    // else {
        return(
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
                <div className="AppMain">
                    <div className="FirstComponent">
                        <Left 
                            theme={theme} 
                            content={content} setContent={setContent}
                            searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                            width={width}
                        />
                        <Content
                            theme={theme} setTheme={setTheme}
                            content={content} 
                            searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                            topListSearchTerm={topListSearchTerm} setTopListSearchTerm={setTopListSearchTerm}
                            width={width}
                        />
                    </div>
                    <div className="SecondComponent">
                        <Player theme={theme} width={width}/>
                    </div>
                </div>
            </ThemeProvider>
        );

    // }
}

