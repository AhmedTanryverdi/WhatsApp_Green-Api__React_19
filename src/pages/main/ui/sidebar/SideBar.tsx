import React from "react";
import style from "./sidebar.module.scss";
import { Header } from "./ui/header/Header";

export const SideBar: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.sidebar}>
			<div className={style.content}>
                <Header />
                <div>

                </div>
			</div>
		</div>
	);
};
