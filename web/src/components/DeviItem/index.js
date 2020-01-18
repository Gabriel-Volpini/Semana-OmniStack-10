import React from "react";
import styled from "styled-components";
import api from "../../services/api"
import "./styles.css"; 

export default function DevItem({dev}){

    async function deletar(name){
      return await api.delete("/deletar", {"github_userName":name})
    }

    return(
        <li className="dev-item" >
              <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(`, `)}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_userName}`}>Ver perfil no Github</a>
              <DeleteButton onClick={() => deletar(dev.github_userName)}>
                  Deletar
              </DeleteButton>
        </li>
    )
}

const DeleteButton = styled.span`
  color: #d41515;
  position:absolute;
  bottom:20px;
  right:10px;
  cursor:pointer;
`