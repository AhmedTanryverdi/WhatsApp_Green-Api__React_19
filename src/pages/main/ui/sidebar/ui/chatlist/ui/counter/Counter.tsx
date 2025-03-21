import React from "react";
import { RootState, useAppDispatch } from "../../../../../../../../app/redux/store";
import { setSelected } from "../../../../../../../../entities/model/slices/selectchat/selectchat";
import style from "./counter.module.scss";
import { useSelector } from "react-redux";

export const Counter: React.FC = (): React.JSX.Element => {
    const dispatch = useAppDispatch();

	const count = useSelector<RootState, number>(state=>state.isSelected.count);

	return (
		<div className={style.counter}>
			<div>
				<span onClick={() => dispatch(setSelected(false))}>
					<svg
						viewBox="0 0 24 24"
						height="24"
						width="24"
						preserveAspectRatio="xMidYMid meet"
						fill="currentColor"
						enableBackground="new 0 0 24 24"
					>
						<title>x</title>
						<path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
					</svg>
				</span>
				<span>Выбрано: {count}</span>
			</div>
		</div>
	);
};
