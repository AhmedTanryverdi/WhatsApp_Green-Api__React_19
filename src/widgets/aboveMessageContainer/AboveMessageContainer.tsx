import React from 'react';
import avatar from '../../shared/assets/icons/user.png';
import style from './above.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store';

export const AboveMessageContainer: React.FC = (): React.JSX.Element => {

    const chatid = useSelector<RootState, string>(state=>state.chat.chatid);

  return (
		<div className={style.above}>
			<div className={style.container}>

                <div className={style.avatar}>
                    <img src={avatar} alt="avatar" />
                    <span>{chatid.slice(0, -5)}</span>
                </div>

            </div>
		</div>
  );
}
