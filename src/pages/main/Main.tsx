import React from 'react';
import style from './main.module.scss';
import { SideBar } from './ui/sidebar/SideBar';
import { ChatList } from './ui/sidebar/ui/chatlist/ChatList';

export const Main:React.FC = (): React.JSX.Element => {
  return (
		<div className={style.main}>
			<div className={style.container}>
				<SideBar />
        <ChatList />
			</div>
		</div>
  );
}
