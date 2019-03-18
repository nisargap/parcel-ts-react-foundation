import React from 'react';
import MainMenu from '/components/MainMenu';
import Tile from '/components/Tile';

function getToday() {
    var today: any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

const Home = () => {
    
    return (<div>
        <MainMenu />
        <Tile 
            name="Some Title"
            descr="Some Description"
            author="Bob Smith"
            date={getToday()}
            category="General"
        />
        <Tile 
            name="Some Title 2"
            descr="Some Description"
            author="Bob Smith 2"
            date={getToday()}
            category="General"
        />
        <Tile 
            name="Some Title 3"
            descr="Some Description"
            author="Bob Smith 3"
            date={getToday()}
            category="General"
        />

    </div>);
}

export default Home;