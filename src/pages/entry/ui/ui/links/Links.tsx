import React from "react";
import { Link } from "react-router-dom";
import { setStatusNumber } from "../../../../../entities/model/slices/onnumber/OnNumber";
import { useAppDispatch } from "../../../../../app/redux/store";
import style from "./links.module.scss";

export const Links: React.FC<{item: string}> = ({item}): React.JSX.Element => {
	const dispatch = useAppDispatch();

	return (
		<div className={style.links}>
			<Link
				to={
					"https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=ru"
				}
			>
				Нужна помощь, чтобы начать?
				<span>
					<svg
						viewBox="0 0 30 30"
						height="20"
						width="20"
						preserveAspectRatio="xMidYMid meet"
						version="1.1"
						x="0px"
						y="0px"
						enableBackground="new 0 0 30 30"
					>
						<title>arrow-forward</title>
						<path
							fill="currentColor"
							d="M15,7l-1.4,1.4l5.6,5.6H7v2h12.2l-5.6,5.6L15,23l8-8L15,7z"
						></path>
					</svg>
				</span>
			</Link>

			<Link to={"/"} onClick={() => dispatch(setStatusNumber(true))}>
				{item}
				<span>
					<svg
						viewBox="0 0 30 30"
						height="20"
						width="20"
						preserveAspectRatio="xMidYMid meet"
						x="0px"
						y="0px"
					>
						<title>chevron</title>
						<path
							fill="currentColor"
							d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"
						></path>
					</svg>
				</span>
			</Link>
		</div>
	);
};
