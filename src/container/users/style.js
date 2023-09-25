import styled from 'styled-components';
import {Link} from 'react-router-dom';
import background from '../../assets/background2.svg'

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

export const ContainerItens = styled.div`
background: linear-gradient(
        
         157.44deg,
         rgba(255, 255, 255, 0.6) 0.84%,
         rgba(255, 255, 255, 0.6) 0.85%,
         rgba(255, 255, 255, 0.15) 100%      
);

border-radius: 61px 61px 0px 0px;
padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100vh;
`;

export const H1 = styled.h1`

margin-bottom: 70px;
font-size: 34px;
font-weight: 700;
line-height: 40px;
letter-spacing: 0px;
text-align: center;

`;

export const Button = styled(Link)`

width: 342px;
height: 74px;
border-radius: 14px;
border: 1px solid #ffffff;
cursor: pointer;
font-size: 17px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0px;
background: transparent;
color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
gap:20px;
margin-top: 100px;

&:hover{
    background: linear-gradient(  157.44deg,
         rgba(255, 255, 255, 0.6) 0.84%,
         rgba(255, 255, 255, 0.6) 0.85%,
         rgba(255, 255, 255, 0.15) 100% );

         &:active{
            opacity: 0.5;
         }
}
`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
margin-top:20px;

box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;

border: none;
outline: none;

p{
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
color: rgba(238, 238, 238, 1);
}

button{
   background: none;
   border:none;
   cursor: pointer;
}

`;