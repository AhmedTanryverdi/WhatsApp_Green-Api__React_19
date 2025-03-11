import React, { useEffect, useState } from "react";
import style from "./entrybody.module.scss";
import { Title } from "./ui/title/Title";
import { Manual } from "./ui/manual/Manual";
import { Links } from "./ui/links/Links";
import { apiUrl, idInstance, apiTokenInstance } from "../../../shared";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/redux/store";
import { EntryNumber } from "./ui/entrynumber/EntryNumber";

export const Entrybody: React.FC = (): React.JSX.Element => {
	const [qr, setQr] = useState<any>();

	const isNumber = useSelector<RootState, boolean>(
		(state) => state.onNumber.isNumber
	);

	useEffect(() => {
		const url = `${apiUrl}/waInstance${idInstance}/qr/${apiTokenInstance}`;
		async function getQr(url: string) {
			const response = await fetch(url);
			const data = await response.json();
			setQr(data);
		}

		const intervalId = setInterval(() => {
			getQr(url);
		}, 21000);

		if (isNumber) {
			clearInterval(intervalId);
		} else {
			getQr(url);
		}

		return () => clearInterval(intervalId);
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
								<Manual />
								<Links />
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
