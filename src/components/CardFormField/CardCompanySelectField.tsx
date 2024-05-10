import useCardAddFormField from "../../hooks/useCardAddFormField";

import FormField from "../FormField";

import { CARD_FORM_ATTRIBUTES, CardCompany, VALIDATION_MESSAGES } from "../../constants/card-app";

import useModal from "../../hooks/useModal";
import { Modal } from "harrysimodal";
import CardCompanies from "../CardCompanies";

const CardCompanySelectField = () => {
  const { isModalOpen, openModal, closeModal } = useModal(false);

  const { isValidFormField, handleFormFieldFocus, dispatch } = useCardAddFormField("cardCompany");

  const handleCardCompanyChange = (company: CardCompany) => {
    dispatch({
      type: "SET_CARD_COMPANY",
      value: company,
    });

    closeModal();
  };

  const { query, caption } = CARD_FORM_ATTRIBUTES["cardCompany"];

  return (
    <FormField>
      <FormField.InputTitle text={query} />
      <FormField.InfoText textType="caption" text={caption} />

      <Modal.ModalButton width="full" theme="dark" autoFocus onFocus={handleFormFieldFocus} onClick={openModal}>
        카드사 선택하기
      </Modal.ModalButton>

      <Modal isOpen={isModalOpen} onClose={closeModal} device="mobile">
        <Modal.ModalContent size="small">
          <Modal.ModalHeader>
            <Modal.ModalTitle text="카드사 선택" />
            <Modal.ModalCloseButton onCloseButtonClick={closeModal} />
          </Modal.ModalHeader>

          <CardCompanies handleCardCompanyChange={handleCardCompanyChange} />
        </Modal.ModalContent>
      </Modal>

      <FormField.InfoText textType="error" text={isValidFormField ? "" : VALIDATION_MESSAGES.invalidOwnerName} />
    </FormField>
  );
};

export default CardCompanySelectField;
