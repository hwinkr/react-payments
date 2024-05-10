import useCardAddForm from "../hooks/useCardAddForm";

import CardPreview from "../components/CardPreview/CardPreview";

import CardPasswordInputField from "../components/CardFormField/CardPasswordInputField";
import CardOwnerInputField from "../components/CardFormField/CardOwnerInputField";
import CVCNumberInputField from "../components/CardFormField/CVCNumberInputFiled";
import ExpirationDateInputField from "../components/CardFormField/ExpirationDateInputField";
import CardCompanySelectField from "../components/CardFormField/CardCompanySelectField";
import CardNumberInputField from "../components/CardFormField/CardNumberInputField";

import FinalConfirmModal from "../components/FinalConfirmModal";

const CardFormPage = () => {
  const { formState, isCardCompanySelectCompleted, isCardNumbersInputCompleted, isExpirationDateInputCompleted, isFormInputCompleted } =
    useCardAddForm();

  return (
    <>
      <CardPreview />

      {isFormInputCompleted && <FinalConfirmModal />}

      {formState.cardPassword.displayed && <CardPasswordInputField />}

      {formState.cvcNumber.displayed && <CVCNumberInputField />}

      {(isExpirationDateInputCompleted || formState.ownerName.displayed) && <CardOwnerInputField />}

      {(isCardCompanySelectCompleted || formState.expirationDate.displayed) && <ExpirationDateInputField />}

      {(isCardNumbersInputCompleted || formState.cardCompany.displayed) && <CardCompanySelectField />}

      <CardNumberInputField />
    </>
  );
};

export default CardFormPage;
