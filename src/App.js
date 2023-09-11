import React from "react";
import People from './assets/people.svg'
import seta from './assets/arrowD.svg'

import {
  Container,
  H1, Image,
  ContainerItens,
  InputLabel, Input,
  Button
} from './style';

const app = () => {
  return <Container>
    <Image alt = "people-image" src = {People}/>

  <ContainerItens>
  <H1>Olá</H1>
  
  <InputLabel>Nome</InputLabel>
  <Input placeholder="Nome"/>

  <InputLabel>Idade</InputLabel>
  <Input placeholder="Idade"/>

<Button>Cadastrar <img alt = 'seta' src= {seta} /></Button>

  </ContainerItens>

  </Container>
}

export default app