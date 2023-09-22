import React, { useState, useRef } from "react";
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
  const inputName = useRef()
  const inputAge = useRef()

  function addNewUser(){
    setUsers ([...users, {id: Math.random(), name:inputName.current.value, age: inputAge.current.value }])
  }

  // const [users, setUsers] = useState([]);


  // function addNewUser() {

  // }

  function deleteUser(UserId) {
    const  newUser = users.filter (user => user.id !== UserId) ;
    setUsers (newUser)
  }
  
  return <Container>
    <Image alt = "people-image" src = {People}/>

  <ContainerItens>
  <H1>Olá</H1>
  
  <InputLabel>Nome</InputLabel>
  <Input ref={inputName} placeholder="Nome"/>

  <InputLabel>Idade</InputLabel>
  <Input ref={inputAge} placeholder="Idade"/>

<Button onClick={addNewUser}>Cadastrar <img alt = 'seta' src= {seta} /></Button>

<ul>
  {users.map((user) => (
    <User key = {user.id}>
    <p> {user.name}</p> <p>{user.age} </p>
    <button onClick={ () =>  deleteUser(user.id)}><img src = {Trash} alt = 'lata de lixo' /></button>
    </User>
  ))}
</ul>

  </ContainerItens>
  </Container>
}

export default App;