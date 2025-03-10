import React from "react";
import style from './downloadbtn.module.scss';

export const DownloadBtn: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.download_btn}>
			<button>
				<span>Скачать</span>
				<span>
					<svg
						viewBox="0 0 24 24"
						height="16"
						width="16"
						preserveAspectRatio="xMidYMid meet"
						fill="none"
					>
						<title>download-outline</title>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M20.625 20.625C20.625 21.2463 20.1213 21.75 19.5 21.75L4.5 21.75C3.87868 21.75 3.375 21.2463 3.375 20.625C3.375 20.0037 3.87868 19.5 4.5 19.5H19.5C20.1213 19.5 20.625 20.0037 20.625 20.625Z"
							fill="currentColor"
						></path>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M13.125 3C13.125 2.37868 12.6213 1.875 12 1.875C11.3787 1.875 10.875 2.37868 10.875 3V14.3093L4.79045 8.27174C4.34942 7.8341 3.63711 7.83686 3.19948 8.2779C2.76184 8.71894 2.7646 9.43125 3.20564 9.86888L11.2056 17.8071C11.6443 18.2424 12.3518 18.2424 12.7905 17.8071L20.7905 9.86888C21.2315 9.43125 21.2343 8.71894 20.7966 8.2779C20.359 7.83687 19.6467 7.83411 19.2056 8.27174L13.125 14.3054L13.125 3Z"
							fill="currentColor"
						></path>
					</svg>
				</span>
			</button>
		</div>
	);
};
