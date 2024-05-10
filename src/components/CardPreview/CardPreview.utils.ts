import { visaCard } from "../../assets/image";
import { masterCard } from "../../assets/image";

import { CARD_NUMBER } from "../../constants/card-app";

const isVisaCard = (cardNumber: string[]) => {
  if (cardNumber.length < 1) return false;

  const first = cardNumber[0];

  return parseInt(first[0], 10) === CARD_NUMBER.visaStartNumber;
};

const isMasterCard = (cardNumber: string[]) => {
  if (cardNumber.length < 1) return false;

  const first = cardNumber[0];

  if (first.length < 2) return false;

  const slicedCardNumber = parseInt(first.slice(0, 2), 10);

  return slicedCardNumber >= CARD_NUMBER.minMasterNumber && slicedCardNumber <= CARD_NUMBER.maxMasterNumber;
};

export const decideCardLogo = (value: string[]) => {
  if (isVisaCard(value)) return visaCard;

  if (isMasterCard(value)) return masterCard;

  return null;
};
