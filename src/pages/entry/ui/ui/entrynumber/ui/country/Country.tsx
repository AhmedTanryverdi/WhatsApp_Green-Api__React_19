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
		</li>
	);
};
