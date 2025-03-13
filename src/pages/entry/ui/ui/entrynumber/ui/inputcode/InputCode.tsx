import React from "react";
import style from "./inputcode.module.scss";
import { Manual } from "../../../manual/Manual";
import { Links } from "../../../links/Links";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../app/redux/store";
import { AuthType } from "../../../../../../../shared/assets/types/types";

export const InputCode: React.FC = (): React.JSX.Element => {

    const auth = useSelector<RootState, AuthType>(state=>state.user.auth);

	return (
		<div className={style.inputCode}>
			<div className={style.container}>
				<div className={style.header}>
					<h2 className={style.title}>Введите код на телефоне</h2>
					<p>Связывание аккаунта WhatsApp </p>
				</div>
				<div className={style.code}>
					<ul>
                        {
                            auth.code.split('').map((item, index)=>{
                                return <li key={index}>{item}</li>
                            })
                        }
					</ul>
				</div>
				<Manual text="Связать по номеру телефона и&nbsp;введите этот код на&nbsp;своем телефоне" />
				<Links item="Войти с помощью QR-кода" />
			</div>
		</div>
	);
};
