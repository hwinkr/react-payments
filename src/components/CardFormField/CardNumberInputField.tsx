import Input from "../common/Input";
import FormField from "../FormField";

import { CARD_FORM_ATTRIBUTES } from "../../constants/card-app";
import useCardAddForm from "../../hooks/useCardAddForm";

const CardNumberInputField = () => {
  const { cardNumbers, handleCardNumberChange, validationResult } =
    useCardAddForm();

  const { query, labelText, caption } = CARD_FORM_ATTRIBUTES["cardNumbers"];

  return (
    <FormField>
      <FormField.InputTitle text={query} />
      <FormField.InfoText textType="caption" text={caption} />
      <FormField.Label htmlFor="card-number" labelText={labelText} />
      <FormField.InputContent>
        <Input
          inputSize="large"
          isError={cardNumbers.length > 1 && !validationResult.isValid}
          value={cardNumbers.join("-")}
          onChange={(event) =>
            handleCardNumberChange(event.target.value.replaceAll("-", ""))
          }
        />
      </FormField.InputContent>
      <FormField.InfoText
        textType="error"
        text={validationResult.isValid ? "" : validationResult.errorText}
      />
    </FormField>
  );
};

export default CardNumberInputField;
