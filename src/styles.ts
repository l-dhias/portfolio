import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
margin:0;
padding:0;
font-family: "Inter", sans-serif;
list-style: none;
}

body {
padding-top: 120px;
padding-bottom:80px;
background:  #0f172a;


@media (max-width: 768px) {
padding-top: 16px;
}
}


`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;
  column-gap: 50px;

  @media (max-width: 768px) {
    width: 80%;
    display: block;
  }
`
