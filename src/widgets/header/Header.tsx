import React from "react";
import style from "./header.module.scss";
import { Logo } from "./ui/logo/Logo";
import { DownloadBtn } from "./ui/downloadbtn/DownloadBtn";


export const Header: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.header}>
			<div className={style.container}>
				<header className={style.header__header}>
					<Logo />
					<DownloadBtn />
				</header>
			</div>
		</div>
	);
};
