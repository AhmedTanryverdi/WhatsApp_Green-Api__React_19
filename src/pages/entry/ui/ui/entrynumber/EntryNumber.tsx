import { useSelector } from "react-redux";
import { InputCode } from "./ui/inputcode/InputCode";
import { InputNumber } from "./ui/inputnumber/InputNumber";
import { RootState } from "../../../../../app/redux/store";
import { AuthType } from "../../../../../shared/assets/types/types";
import style from "./entrynumber.module.scss";


export const EntryNumber: React.FC = (): React.JSX.Element => {
	const auth = useSelector<RootState, AuthType>((state) => state.user.auth);

	return (
		<div className={style.entrynumber}>
			{auth.code === "" ? <InputNumber /> : <InputCode />}
		</div>
	);
};

//
