import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import Login from './LoginPage/Login';
import LoginNew from './LoginPage/LoginNew';
import MusicApp from './musicapp/MusicApp';
import CreateAccount from './LoginPage/CreateAccount';

export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                {/* <Route exact path="/music-app-new" component={LoginPage}/> */}
                <Route exact path="/music-app-new" component={LoginNew}/>
                <Route exact path="/" component={LoginNew}/>
                <Route path="/create-account" component={CreateAccount}/>
                <Route path="/musicapp" component={MusicApp}/>
            </Switch>
        </BrowserRouter>
    );
}









//"homepage": "https://Anparasan3.github.io/music-app-new/",







{/* <Route exact path="/musicapp" component={()=><MusicApp authorized={false}/>}/> */}





                {/* <Route exact path="/" component={() => <LoginPage authorized={authorized} setAuthorized={setAuthorized}/>}/>
                <Route path="/musicapp" component = {() => <MusicApp authorized={authorized} setAuthorized={setAuthorized}/> }/> */}