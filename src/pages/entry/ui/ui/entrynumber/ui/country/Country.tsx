import React from 'react';
import style from './country.module.scss';

export const Country: React.FC<{
	src: string;
	name: string;
	code: string;
	id: number;
	setId: (number: number) => void;
}> = ({ src, name, code, id, setId }): React.JSX.Element => {
	return (
		<li className={style.country_item} onClick={() => setId(id)}>
			<img src={src} alt="flag image" />
			<span className={style.name}>{name}</span>
			<span className={style.code}>{code}</span>
		</li>
	);
};
