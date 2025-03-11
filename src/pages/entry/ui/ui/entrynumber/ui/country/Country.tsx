import React from 'react';
import style from './country.module.scss';

export const Country: React.FC<{
	src: string | null;
	name: string | null;
	code: string | null;
	id: number;
	setId: (number: number) => void | null;
}> = ({ src, name, code, id=104, setId }): React.JSX.Element => {
	return (
		<li
			className={style.country_item}
			onClick={() => {
				if (src) {
					() => setId(id);
				}
			}}
		>
			{src && <img src={src} alt="flag image" />}
			{name && <span className={style.name}>{name}</span>}
			{code && <span className={style.code}>{code}</span>}
			<svg
				viewBox="0 0 30 30"
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
		</li>
	);
};
