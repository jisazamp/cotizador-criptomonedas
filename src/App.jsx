import styled from '@emotion/styled';
import CryptosImage from './img/imagen-criptos.png';

import Form from './components/Form';

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 50rem;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 40rem) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Image = styled.img`
  max-width: 20rem;
  width: 80%;
  margin: 2rem auto;

  @media (min-width: 40rem) {
    margin: 6rem auto;
  }
`;

const Header = styled.h1`
  color: hsl(0, 0%, 100%);
  text-align: center;
  font-weight: 600;
  width: 80%;
  margin: 1rem auto;

  @media (min-width: 40rem) {
    margin: 5rem auto 0 auto;
  }
`;

const Separator = styled.hr`
  border: 0.1rem solid hsl(178, 100%, 50%);
  background-color: hsl(178, 100%, 50%);
  width: 25%;
  margin: 1em auto 0em auto;
`;

const App = () => {
  return (
    <Container>
      <Image src={CryptosImage} alt='Imagen de criptos' />
      <div>
        <Header>Cotiza Criptomonedas al Instante</Header>
        <Separator />
        <Form />
      </div>
    </Container>
  );
};

export default App;
