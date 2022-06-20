import { useState } from 'react';
import styled from '@emotion/styled';

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

const useSelectCurrency = (label, options) => {
  const [state, setState] = useState('');

  const SelectCurrency = () => (
    <FormGroup>
      <Label htmlFor='currency'>{label}</Label>
      <Select
        name='currency'
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value='' defaultValue hidden>
          - Seleccione -
        </option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </Select>
    </FormGroup>
  );

  return [state, SelectCurrency];
};

export default useSelectCurrency;
