import React, { useState } from "react";
import People from './assets/people.svg';
import seta from './assets/arrowD.svg';
import Trash from './assets/trash.svg'

import {
  Container,
  H1, Image,
  ContainerItens,
  InputLabel, Input,
  Button,
  User,
} from './style';

function App() {
  
  const [users, setUsers] = useState([]);

  function addNewUser(){
    setUsers ([{id: Math.random(), name: 'Danilo', age: 27}])
  }
  // const [users, setUsers] = useState([]);


  // function addNewUser() {

  // }

  
  return <Container>
    <Image alt = "people-image" src = {People}/>

  <ContainerItens>
  <H1>Olá</H1>
  
  <InputLabel>Nome</InputLabel>
  <Input placeholder="Nome"/>

  <InputLabel>Idade</InputLabel>
  <Input placeholder="Idade"/>

<Button onClick={addNewUser}>Cadastrar <img alt = 'seta' src= {seta} /></Button>

<ul>
  {users.map((user) => (
    <User key = {user.id}>
    <p> {user.name}</p> <p>{user.age} </p>
    <button><img src = {Trash} alt = 'lata de lixo' /></button>
    </User>
  ))}
</ul>

  </ContainerItens>
  </Container>
}

export default App;