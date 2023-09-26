import React, { useState, useEffect } from "react";

import axios from 'axios'

import {useHistory} from 'react-router-dom';
import Avatar from '../../assets/avatar.svg';
import seta from '../../assets/arrowS.svg';
import Trash from '../../assets/trash.svg'

import {
  Container,
  H1, Image,
  ContainerItens,
  Button,
  User,
} from './style';

function Users() {

  const history = useHistory();

  const [users, setUsers] = useState([]);


  useEffect(() => {

    async function fetchUsers(){

      const {data: newUsers} = await axios.get('http://localhost:3001/users');
      setUsers(newUsers);
    };

    fetchUsers()  }, []);


  async function deleteUser(UserId) {
    await axios.delete(`http://localhost:3001/users/${UserId}`)

    const  newUser = users.filter (user => user.id !== UserId) ;
    setUsers (newUser)
  }

  function goBackPage(){
    history.push('/');
  }
  
  return <Container>
    <Image alt = "people-image" src = {Avatar}/>

  <ContainerItens>
  <H1>Usuários</H1>

<ul>
  {users.map((user) => (
    <User key = {user.id}>
    <p> {user.name}</p> <p>{user.age} </p>
    <button onClick={ () =>  deleteUser(user.id)}><img src = {Trash} alt = 'lata de lixo' /></button>
    </User>
  ))}
</ul>

<Button onClick={goBackPage} > <img alt = 'seta' src= {seta} /> Voltar</Button>


  </ContainerItens>
  </Container>
}

export default Users;