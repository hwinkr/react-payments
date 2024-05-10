import styled, { CSSProperties } from "styled-components";

interface CardTextProps {
  text: string;
  type: "longText" | "text" | "password";
}

const CardText = ({ text, type }: CardTextProps) => {
  const width = type === "longText" ? "170px" : "40px";

  return <StyledCardText width={width}>{text}</StyledCardText>;
};

export default CardText;

const StyledCardText = styled.span<{ width: CSSProperties["width"] }>`
  height: 20px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 2px;
`;

// const StyledEllipse = styled.img`
//   height: 4px;
//   width: 4px;

//   margin-right: 5px;
// `;
