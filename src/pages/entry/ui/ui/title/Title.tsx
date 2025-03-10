import React from 'react';
import style from './title.module.scss';

export const Title: React.FC = (): React.JSX.Element => {
  return (
		<div className={style.title}>
			<h2>Вход в WhatsApp Web</h2>
			<p>
				Конфиденциально обменивайтесь сообщениями с друзьями и близкими
				в версии WhatsApp для браузера.
			</p>
		</div>
  );
}
