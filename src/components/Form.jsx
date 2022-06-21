import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import useSelectCurrency from '../hooks/useSelectCurrency';
import { currencies } from '../data/currencies';
import Error from './Error';

const FormContainer = styled.form`
  margin-bottom: 1rem;
`;

const SubmitButton = styled.input`
  background-color: hsl(215, 51%, 40%);
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.2rem;
  width: 100%;
  margin: 1rem 0;
  color: white;
  text-transform: uppercase;
  font-weight: 600;

  @media (min-width: 40rem) {
    cursor: pointer;

    &:hover {
      background-color: hsl(215, 51%, 50%);
      transition: background-color 200ms ease;
    }
  }
`;

const Form = ({ setCurrencies }) => {
  const [topCryptos, setTopCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [currency, SelectCurrency] = useSelectCurrency(
    'Elige tu moneda',
    currencies
  );

  const [crypto, SelectCrypto] = useSelectCurrency(
    'Elige tu criptomoneda',
    topCryptos
  );

  useEffect(() => {
    const fetchCryptos = async () => {
      const response = await fetch(
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      );
      const data = await response.json();

      // Structure the array in the way we need it
      const cryptosData = data.Data.map((crypto) => {
        return { id: crypto.CoinInfo.Name, name: crypto.CoinInfo.FullName };
      });
      setTopCryptos(cryptosData);
    };

    fetchCryptos();
  }, []);

  const handleCryptoSubmit = (e) => {
    e.preventDefault();

    if (!currency || !crypto) {
      setError(true);
      return;
    }

    setCurrencies({ currency, crypto });
    setError(false);
  };

  return (
    <FormContainer onSubmit={handleCryptoSubmit}>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <SelectCurrency />
      <SelectCrypto />

      <SubmitButton type='submit' value='Cotizar' />
    </FormContainer>
  );
};

Form.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
};

export default Form;
