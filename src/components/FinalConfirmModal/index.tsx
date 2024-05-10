import React, { useState } from "react";
import useModal from "../../hooks/useModal";

import { Modal } from "harrysimodal";

import { useNavigate } from "react-router-dom";
import { CARD_APP_PATH } from "../../constants/card-app";
import { checkImage } from "../../assets/image";
import styled from "styled-components";

const FinalConfirmModal = () => {
  const navigate = useNavigate();

  const { isModalOpen, openModal, closeModal } = useModal(true);

  const [isFirstTermChecked, setIsFirstTermChecked] = useState(false);
  const [isSecondTermChecked, setIsSecondTermChecked] = useState(false);

  return (
    <>
      <Modal.ModalButton size="medium" width="fit" onClick={openModal}>
        약관 동의하기
      </Modal.ModalButton>

      <Modal isOpen={isModalOpen} onClose={closeModal} position="bottom" device="mobile">
        <Modal.ModalContent>
          <Modal.ModalHeader>
            <Modal.ModalTitle text="약관에 동의해 주세요" />
            <Modal.ModalCloseButton onCloseButtonClick={closeModal} />
          </Modal.ModalHeader>

          <TermsContainer onClick={() => setIsFirstTermChecked((prevChecked) => !prevChecked)}>
            <CheckImageContainer $isChecked={isFirstTermChecked}>
              <CheckImage src={checkImage} />
            </CheckImageContainer>
            <TermLabel>[필수] 개인정보 수집이용 동의</TermLabel>
          </TermsContainer>

          <TermsContainer onClick={() => setIsSecondTermChecked((prevChecked) => !prevChecked)}>
            <CheckImageContainer $isChecked={isSecondTermChecked}>
              <CheckImage src={checkImage} />
            </CheckImageContainer>
            <TermLabel>[필수] 고객정보 제 3자 제공동의</TermLabel>
          </TermsContainer>

          <Modal.ModalFooter>
            <Modal.ModalButton theme="dark" disabled={!isFirstTermChecked || !isSecondTermChecked} onClick={() => navigate(CARD_APP_PATH.complete)}>
              동의하고 저장하기
            </Modal.ModalButton>
          </Modal.ModalFooter>
        </Modal.ModalContent>
      </Modal>
    </>
  );
};

export default FinalConfirmModal;

const TermsContainer = styled.div`
  height: 24px;
  width: 100%;

  display: flex;
  align-items: center;
`;

const CheckImageContainer = styled.div<{ $isChecked: boolean }>`
  height: 20px;
  width: 20px;

  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ $isChecked }) => ($isChecked ? "#333333" : "#acacac")};
  border-radius: 50%;
  margin-right: 12px;
`;

const CheckImage = styled.img`
  height: 20px;
  width: 20px;
`;

const TermLabel = styled.span`
  height: 15px;
  line-height: 15px;

  font-size: 12px;
  font-weight: 500;
  color: #8b95a1;
`;
