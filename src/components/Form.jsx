import styled from '@emotion/styled';

const FormContainer = styled.form`
  margin-bottom: 4rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin: 1em 0 1em 0;
`;

const Label = styled.label`
  font-size: 1.5rem;
  color: hsl(0, 0%, 100%);
`;

const Select = styled.select`
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
`;

const SubmitButton = styled.input`
  background-color: hsl(215, 51%, 40%);
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5rem;
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
  return (
    <FormContainer>
      <FormGroup>
        <Label htmlFor='currency'>Elige tu moneda</Label>
        <Select name='currency'>
          <option value='' defaultValue disabled hidden>
            - Seleccione -
          </option>
          <option value='dos'>Dos</option>
          <option value='tres'>Tres</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor='currency'>Elige tu criptomoneda</Label>
        <Select name='currency'>
          <option value='' defaultValue disabled hidden>
            - Seleccione -
          </option>
          <option value='dos'>Dos</option>
          <option value='tres'>Tres</option>
        </Select>
      </FormGroup>

      <SubmitButton type='submit' value='Cotizar' />
    </FormContainer>
  );
};

export default Form;
