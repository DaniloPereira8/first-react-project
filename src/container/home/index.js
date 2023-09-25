import React, { useState, useRef, } from "react";

import axios from 'axios'

import People from '../../assets/people.svg';
import seta from '../../assets/arrowD.svg';

import {
  Container,
  H1, Image,
  ContainerItens,
  InputLabel, Input,
  Button,
} from './style';

function App() {
  
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser(){

    const {data: newUser} = await axios.post('http://localhost:3001/users' , 
    {name: inputName.current.value,
       age: inputAge.current.value,
      });

setUsers([...users, newUser]);

  };
  
  return <Container>
    <Image alt = "people-image" src = {People}/>

  <ContainerItens>
  <H1>Olá</H1>
  
  <InputLabel>Nome</InputLabel>
  <Input ref={inputName} placeholder="Nome"/>

  <InputLabel>Idade</InputLabel>
  <Input ref={inputAge} placeholder="Idade"/>

<Button to='/usuarios' onClick={addNewUser}>Cadastrar <img alt = 'seta' src= {seta} /></Button>

  </ContainerItens>
  </Container>
}

export default App;