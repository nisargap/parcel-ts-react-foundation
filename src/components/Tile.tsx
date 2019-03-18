import React from 'react';
import styled from 'styled-components';

interface TileProps {
    name: string;
    descr: string;
    date: string;
    author: string;
    category: string;
}
function Tile(props: TileProps) {
    const Container = styled.div`
        padding: 30px;
        border: 2px solid grey;
        margin: 10px;
        border-radius: 10px;
        max-width: 400px;
        font-family: Helvetica, sans-serif;
        h3 {
            color: #333333;
            font-weight: bold;
        }
    `;
    return (
        <Container>
            <h3>{props.name}</h3>
            <p>
                {props.descr}
            </p>
            <span>{props.date}</span>
            <br />
            <span>{props.author}</span>
            <br />
            <span>{props.category}</span>
        </Container>
    );
}
export default Tile;