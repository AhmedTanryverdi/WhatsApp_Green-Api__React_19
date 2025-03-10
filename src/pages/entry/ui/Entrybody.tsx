import React from "react";
import style from "./entrybody.module.scss";
import { Link } from "react-router-dom";
import { Title } from "./ui/title/Title";
import { Manual } from "./ui/manual/Manual";
import { Links } from "./ui/links/Links";

export const Entrybody: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.entry}>
			<div className={style.container}>
				<div className={style.content}>
					<div className={style.content_left}>
                        <Title />
                        <Manual />
                        <Links />
					</div>
					<div className={style.content_right}></div>
				</div>
			</div>
		</div>
	);
};
