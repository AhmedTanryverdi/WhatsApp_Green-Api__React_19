import React from 'react';
import style from './dropdownitem.module.scss';

export const DropDownItem: React.FC<{text: string}> = ({text}): React.JSX.Element => {
  return (
		<li className={style.item}>
			<div>{text}</div>
		</li>
  );
}
