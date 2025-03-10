import React, { useEffect, useState } from "react";
import style from "./entrybody.module.scss";
import { Title } from "./ui/title/Title";
import { Manual } from "./ui/manual/Manual";
import { Links } from "./ui/links/Links";
import { apiUrl, idInstance, apiTokenInstance } from "../../../shared";

export const Entrybody: React.FC = (): React.JSX.Element => {
	const [qr, setQr] = useState<any>();

	useEffect(() => {
		const url = `${apiUrl}/waInstance${idInstance}/qr/${apiTokenInstance}`;
		async function getQr(url: string) {
			const response = await fetch(url);
			const data = await response.json();
			setQr(data);
		}

		getQr(url);
	}, [qr]);

	return (
		<div className={style.entry}>
			<div className={style.container}>
				<div className={style.content}>
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
									<input type="checkbox" id="checkbox" />
									Не выходить в этом браузере
								</div>
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
