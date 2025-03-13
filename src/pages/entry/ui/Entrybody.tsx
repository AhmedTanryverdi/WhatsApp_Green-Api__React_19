import React, { useEffect, useState } from "react";
import { Title } from "./ui/title/Title";
import { Manual } from "./ui/manual/Manual";
import { Links } from "./ui/links/Links";
import { urlQr } from "../../../shared";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/redux/store";
import { EntryNumber } from "./ui/entrynumber/EntryNumber";
import { getQr } from "../../../features/utils/functions";
import style from "./entrybody.module.scss";


let intervalID: any = null;

export const Entrybody: React.FC = (): React.JSX.Element => {
	const [qr, setQr] = useState<any>();

	const isNumber = useSelector<RootState, boolean>(
		(state) => state.onNumber.isNumber
	);

	useEffect(() => {
		const data = getQr(urlQr);
		data.then((result) => setQr(result));
	}, []);

	useEffect(() => {
		if (!intervalID) {
			intervalID = setInterval(() => {
				const data = getQr(urlQr);
				data.then((result) => setQr(result));
			}, 21000);
		}

		if (isNumber) {
			clearInterval(intervalID);
		}

		return () => clearInterval(intervalID);
	}, [qr, isNumber]);

	return (
		<div className={style.entry}>
			<div className={style.container}>
				<div className={style.content}>
					{isNumber ? (
						<EntryNumber />
					) : (
						<>
							<div className={style.content_left}>
								<Title />
								<Manual
									text="Наведите телефон на этот экран, чтобы отсканировать QR-код"
								/>
								<Links item="Войти по номеру телефона"/>
							</div>
							<div className={style.content_right}>
								<form action="" className={style.form}>
									<label htmlFor="checkbox">
										<img
											hidden={false}
											id="img-qr-code"
											alt="QR-Code"
											aria-hidden="false"
											src={`data:image/png;base64,${qr?.message}`}
										/>
										<div>
											<input
												type="checkbox"
												id="checkbox"
											/>
											Не выходить в этом браузере
										</div>
									</label>
								</form>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
