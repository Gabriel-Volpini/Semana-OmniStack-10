import React from "react";
import styled from "styled-components";

export default function IsLoading({sppinig}){

    return(sppinig &&
        <StyledDiv className="loading"  sppinig={sppinig}>
            <div className="lds-dual-ring"></div>
        </StyledDiv>
    )

}

const StyledDiv = styled.div `
        position: fixed;
        background: block;
        width: 100%;
        height: 100%; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 2; 

        .lds-dual-ring {
            display: inline-block;
            width: 80px;
            height: 80px;
          }
          .lds-dual-ring:after {
            content: " ";
            display: block;
            width: 85px;
            height: 85px;
            margin: 8px;
            border-radius: 50%;
            border: 10px solid #fff;
            border-color: #702ee2 transparent #702ee2 transparent;
            animation: lds-dual-ring 1.2s linear infinite;
            position: absolute;
            bottom: 50%;
            left: 50%;
            font-size: 50px;
            transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
          }
          @keyframes lds-dual-ring {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
`