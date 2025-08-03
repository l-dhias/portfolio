import styled, { createGlobalStyle } from 'styled-components'

const EstiloGolbal = createGlobalStyle`
* {
margin:0;
padding:0;
display: flexbox;
font-family: "Inter", sans-serif;

}

body {
padding-top: 80px;
background-color: red;
}
`
export default EstiloGolbal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
  }

  Title {
    margin-bottom: 25px;
  }

  img {
    max-width: 200px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(000, 0, 3);
    margin-bottom: 25px;
  }
`
