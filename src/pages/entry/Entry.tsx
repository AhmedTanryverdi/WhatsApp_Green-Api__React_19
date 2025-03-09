import React from 'react';
import style from './entry.module.scss';

export const Entry: React.FC = (): React.JSX.Element => {
  return (
		<div className={style.entry}>
			<div className={style.container}>
				<div className={style.content}>
					<div className={style.content_left}>
						<h2 className={style.title}>Вход в WhatsApp Web</h2>
						<p>
							Конфиденциально обменивайтесь сообщениями с друзьями
							и близкими в версии WhatsApp для браузера.
						</p>
					</div>
					<div className={style.content_right}></div>
				</div>
			</div>
		</div>
  );
}
