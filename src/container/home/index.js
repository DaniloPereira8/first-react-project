import React, { useState, useRef, } from "react";

import axios from 'axios'
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import People from '../../assets/people.svg';
import seta from '../../assets/arrowD.svg';

import H1 from './../../components/Title'
import ContainerItens from './../../components/componentsitens'

import Button from '../../components/Button'


import {
  Container, Image,
  InputLabel, Input,
} from './style';

function App() {

  const history = useHistory();
  
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser(){

    const {data: newUser} = await axios.post('http://localhost:3001/users' , 
    {name: inputName.current.value,
       age: inputAge.current.value,
      });

setUsers([...users, newUser]);

history.push('/usuarios')


  };
  
  return <Container>
    <Image alt = "people-image" src = {People}/>

  <ContainerItens>
  <H1>Olá</H1>
  
  <InputLabel>Nome</InputLabel>
  <Input ref={inputName} placeholder="Nome"/>

  <InputLabel>Idade</InputLabel>
  <Input ref={inputAge} placeholder="Idade"/>

<Button onClick={addNewUser}>Cadastrar <img alt = 'seta' src= {seta} /></Button>

  </ContainerItens>
  </Container> 
}

export default App;