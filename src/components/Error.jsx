import styled from '@emotion/styled';

const ErrorMessage = styled.p`
  background-color: hsl(178, 100%, 50%);
  max-width: 20rem;
  margin: 1em auto 1em auto;
  padding: 1em 2em;
  border-radius: 0.5rem;
  color: hsl(216, 50%, 16%);
`;

const Error = ({ children }) => {
  return <ErrorMessage>{children}</ErrorMessage>;
};

export default Error;
