import React from "react";
import logo from "../../shared/assets/icons/whatsapp.png";
import download from "../../shared/assets/icons/download.png";
import style from "./header.module.scss";

export const Header: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.header}>
			<div className={style.container}>
				<header className={style.header__header}>
					<div className={style.logo}>
						<img src={logo} alt="whatsapp logo icon" />
						<p>WhatsApp</p>
					</div>
					<button className={style.download_btn}>
						<span>Скачать</span>
						<img src={download} alt="download icon" />
					</button>
				</header>
			</div>
		</div>
	);
};
