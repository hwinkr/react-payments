import styled from "styled-components";

import CardText from "./CardText";

interface CardNumberProps {
  value: string;
}

const CardNumber = ({ value }: CardNumberProps) => {
  return (
    <Container>
      <CardText text={value} type="text" />
    </Container>
  );
};

export default CardNumber;

const Container = styled.div`
  width: 170px;

  display: flex;
  justify-content: space-between;
`;
