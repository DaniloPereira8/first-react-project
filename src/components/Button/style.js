import styled from 'styled-components'


export const Button = styled.button`

width: 342px;
height: 74px;
border-radius: 14px;
border: ${props => props.isBack ? '1px solid #ffffff' : 'none'};
cursor: pointer;
font-size: 17px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0px;
background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
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