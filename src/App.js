import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import MusicApp from './musicapp/MusicApp';
import CreateAccount from './LoginPage/CreateAccount';

export default function App(){
    //const[authorized, setAuthorized] = useState(false);
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route path="/create-account" component={CreateAccount}/>
                <Route path="/musicapp" component={MusicApp}/>
            </Switch>
        </BrowserRouter>
    );
}

















{/* <Route exact path="/musicapp" component={()=><MusicApp authorized={false}/>}/> */}

                {/* <Route exact path="/" component={() => <LoginPage authorized={authorized} setAuthorized={setAuthorized}/>}/>
                <Route path="/musicapp" component = {() => <MusicApp authorized={authorized} setAuthorized={setAuthorized}/> }/> */}