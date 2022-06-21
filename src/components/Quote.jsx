import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const QuoteDiv = styled.div``;

const Text = styled.p`
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
`;

const Highlight = styled.span`
  font-size: 1.4rem;
  color: hsl(178, 100%, 50%);
`;

const Quote = ({ quote }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = quote;

  return (
    <QuoteDiv>
      <Text>
        El precio es de: <Highlight>{PRICE}</Highlight>
      </Text>

      <Text>
        Precio más alto del día: <Highlight>{HIGHDAY}</Highlight>
      </Text>

      <Text>
        Precio más bajo del día: <Highlight>{LOWDAY}</Highlight>
      </Text>

      <Text>
        Variación últimas 24 horas: <Highlight>{CHANGEPCT24HOUR}</Highlight>
      </Text>

      <Text>
        Última actualización: <Highlight>{LASTUPDATE}</Highlight>
      </Text>
    </QuoteDiv>
  );
};

Quote.propTypes = {
  quote: PropTypes.object,
};

export default Quote;
