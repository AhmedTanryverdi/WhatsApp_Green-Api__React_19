import React from "react";
import { Header } from "../../widgets/header/Header";
import { Entrybody } from "./ui/Entrybody";
import style from './style.module.scss';

export const Entry: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.entry}>
			<Header />
			<Entrybody />
		</div>
	);
};
