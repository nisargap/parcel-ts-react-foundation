import React from "react";
import Home from "/pages/home";

interface AppProps {
    route: any;
}
const App: React.SFC<AppProps> = ({ route }) => {
    if (!route) {
        return null
    }
    switch(route.name) {
        case 'home': {
            return <Home />;
        }
        case 'profile': {
            return <h1>Profile</h1>;
        }
        default: {
            return (<h1>Not Found</h1>)
        }
    }
};

export default App;