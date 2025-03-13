import { RefObject } from "react";
import { FormType } from "../../../../../../shared/assets/types/types";

export const validationForm = (stateForm: FormType): FormType => {
	let str = stateForm.number;

	if (!str || str.length < 10) {
		return { ...stateForm, error: true };
	}

	str = str.replace(" ", "");
	str = str.replace("-", "");
	str = str.replace("-", "");

	if (str.length < 10 || str.length > 10) {
		return { ...stateForm, error: true };
	}

	return { error: false, number: str };
};


export 	const checkNumber = (
	e: React.KeyboardEvent<HTMLInputElement>,
	ref: RefObject<HTMLInputElement | null>
) => {
	if (e.code >= "Digit0" && e.code <= "Digit9") {
		if (ref.current) {
			if (ref?.current.value.length === 3) {
				ref.current.value += " ";
			} else if (
				ref?.current.value.length === 7 ||
				ref?.current.value.length === 10
			) {
				ref.current.value += "-";
			}
		}
	}
};