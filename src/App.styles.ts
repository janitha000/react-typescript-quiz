import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './images/background.jpg'

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%
    }

    body{
        background-image : url(${BGImage});
        background-size: cover;
        margin: 0;
        padding : 0 20px;
        display : flex;
        justify-content : center;
    }

    *{
        box-sizing : border-box;
        font-family: 'Roboto Condensed', sans-serif;
    }

`

export const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;

    > p {
        color : #fff;
    }

    .score {
        color : #fff;
        font-size: 2rem;
        margin : 0
    }

    h1 {
       backgrond-image: linear-gradient(180deg,#fff,#87f1ff) 
       background-size: 100%;
       backgrond-clip : text
       font-size: 70px;
       filter: drop-shadow(2px 2px #0085a3)
       text-align: center
       margin : 20px
    }

    .start .next{
        cursor : pointer;
        backgrond: linear-gradient(180deg,#fff,#ffcc91)
        border: 2px solid #d38558
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25)
        border-radius: 10px
        heght : 40px;
        margin : 2px 0;
        padding : 0 40px;

    }



`