import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import useSelectCurrency from '../hooks/useSelectCurrency';
import { currencies } from '../data/currencies';

const FormContainer = styled.form`
  margin-bottom: 4rem;
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

const Form = () => {
  const [currency, SelectCurrency] = useSelectCurrency(
    'Elige tu moneda',
    currencies
  );

  const [crypto, SelectCrypto] = useSelectCurrency(
    'Elige tu criptomoneda',
    currencies
  );

  useEffect(() => {
    fetchCryptos();
  }, []);

  const fetchCryptos = () => {
    fetch(
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    )
      .then((res) => res.json())
      .then((data) => console.log(data.Data));
  };

  return (
    <FormContainer>
      <SelectCurrency />

      <SubmitButton type='submit' value='Cotizar' />
    </FormContainer>
  );
};

export default Form;
