import { useReducer } from "react";
import { Outlet } from "react-router-dom";

import FormContext from "../../../context/card-add-form";

import { cardAddFormReducer, initialCardFormState } from "./cardAddFormReducer";
import CardPageLayout from "../../layout/CardPageLayout";
import { useCardNumbers } from "hook-simo-harry";

const CardAddFormProvider = () => {
  const [formState, dispatch] = useReducer(
    cardAddFormReducer,
    initialCardFormState
  );

  const { cardNumbers, validationResult, handleCardNumberChange } =
    useCardNumbers();

  return (
    <FormContext.Provider
      value={{
        formState,
        dispatch,
        cardNumbers,
        validationResult,
        handleCardNumberChange,
      }}
    >
      <CardPageLayout>
        <Outlet />
      </CardPageLayout>
    </FormContext.Provider>
  );
};

export default CardAddFormProvider;
