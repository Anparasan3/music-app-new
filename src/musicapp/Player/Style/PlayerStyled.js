import styled from 'styled-components';


export const Player = styled.div`
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.PlayerBackground};
    position: absolute;
    left: 0%;
    right: 0%;
    top: 88.44%;
    bottom: 0%; 
    display: flex;
    flex-wrap: row wrap;
    flex-direction: row;
    flex-flow: row wrap;
    /* justify-content: space-evenly; */
    /* justify-items: stretch; */
    
`;