import styled from 'styled-components';
import background from '../../assets/background1.svg'

export const Container = styled.div`

background: url('${background}');
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
height: 100%;

`;

export const Image = styled.img`
margin: 25px 0;

`;

export const InputLabel = styled.p`

font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
color: rgba(238, 238, 238, 1);
margin-left: 25px;
`;

export const Input = styled.input`

box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
margin-bottom: 20px;
border-radius: 14px;
border: none;
outline: none;
color: rgba(255, 255, 255, 1);


`;