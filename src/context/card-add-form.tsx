import { createContext } from "react";
import { CardAddFormState } from "../types/card";

import { FormAction } from "../components/providers/CardAddFormProvider/cardAddFormReducer";

interface FormContextType {
  formState: CardAddFormState;
  dispatch: React.Dispatch<FormAction>;
  cardNumbers: string[];
  handleCardNumberChange: (value: string) => void;
  validationResult: {
    isValid: boolean;
    errorText: string;
  };
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export default FormContext;
