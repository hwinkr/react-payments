import React from "react";
import {
  bcCard,
  hanaCard,
  hyundaiCard,
  kakoCard,
  kookminCard,
  lotteCard,
  shinhanCard,
  wooriCard,
} from "../../assets/image";
import styled from "styled-components";
import { CardCompany } from "../../constants/card-app";

interface CardCompanyInfo {
  imagePath: string;
  company: CardCompany;
}

const CARD_COMPANIES: CardCompanyInfo[] = [
  {
    imagePath: bcCard,
    company: "BC카드",
  },
  {
    imagePath: hanaCard,
    company: "하나카드",
  },
  {
    imagePath: hyundaiCard,
    company: "현대카드",
  },
  {
    imagePath: kakoCard,
    company: "카카오뱅크",
  },
  {
    imagePath: kookminCard,
    company: "국민카드",
  },
  {
    imagePath: lotteCard,
    company: "롯데카드",
  },
  {
    imagePath: shinhanCard,
    company: "신한카드",
  },
  {
    imagePath: wooriCard,
    company: "우리카드",
  },
];

interface CardCompaniedProps {
  handleCardCompanyChange: (company: CardCompany) => void;
}

const CardCompanies = ({ handleCardCompanyChange }: CardCompaniedProps) => {
  return (
    <Container>
      {CARD_COMPANIES.map(({ imagePath, company }) => (
        <CardCompanyInfo
          key={imagePath}
          onClick={() => handleCardCompanyChange(company)}
        >
          <StyledImg src={imagePath} />
          <CardCompanyLabel>{company}</CardCompanyLabel>
        </CardCompanyInfo>
      ))}
    </Container>
  );
};

export default CardCompanies;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const StyledImg = styled.img`
  height: 32px;
  width: 32px;
`;

const CardCompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const CardCompanyLabel = styled.span`
  width: 56px;
  height: 15px;
  line-height: 15px;
  font-size: 12px;

  text-align: center;
`;
