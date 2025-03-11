import React, { useEffect, useState } from "react";
import { Country } from "./ui/country/Country";
import style from "./entrynumber.module.scss";
import { useAppDispatch } from "../../../../../app/redux/store";
import { setStatusNumber } from "../../../../../entities/model/slices/onnumber/OnNumber";
import { getCountries } from "../../../../../features/utils/functions";

type CountryType = {
	name: {
		common: string;
	};
	flags: {
		svg: string;
	};

	idd: {
		root: string;
		suffixes: string[];
	};
};

export const EntryNumber: React.FC = (): React.JSX.Element => {
	const [countries, setCountries] = useState<CountryType[]>([]);

	const [isOpenList, setOpenList] = useState(true);

	const [id, setId] = useState<number>(104);

	const dispatch = useAppDispatch();

	useEffect(() => {
		const url = "https://restcountries.com/v3.1/all";
		const data = getCountries(url);
		data.then((result) => setCountries(result));
		
	}, []);

	const statusList = () => {
		setOpenList(!isOpenList);
	};

	useEffect(() => {
		setOpenList(!isOpenList);
	}, [id]);

	const handleChangeNumber = () => {
		dispatch(setStatusNumber(false));
	};

	return (
		<div className={style.entrynumber}>
			<div className={style.container}>
				<h2 className={style.title}>Введите номер телефона</h2>
				<p className={style.subtitle}>
					Выберите страну и введите свой номер телефона.
				</p>
				{countries.length && (
					<>
						<div className={style.countries}>
							<div
								className={style.current_country}
								onClick={statusList}
							>
								<img
									src={countries[id].flags.svg}
									alt="flag image"
								/>
								<span>{countries[id].name.common}</span>

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
							</div>
							{isOpenList && (
								<div className={style.country_list}>
									<ul>
										{countries.map((item, index) => {
											const code =
												item.idd.root +
												item.idd.suffixes;
											return (
												<Country
													key={index}
													name={item.name.common}
													src={item.flags.svg}
													code={code}
													id={index}
													setId={setId}
												/>
											);
										})}
									</ul>
								</div>
							)}
						</div>

						<form action="">
							<label htmlFor="country-number">
								<span>{countries[id].idd.root}</span>

								<input
									type="text"
									id="country-number"
									className={style.number}
								/>
							</label>

							<button type="submit">Далее</button>
						</form>

						<p onClick={handleChangeNumber} className={style.toQr}>
							<span>Войти с помощью QR-кода</span>
							<svg
								viewBox="0 0 30 30"
								height="20"
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
						</p>
					</>
				)}
			</div>
		</div>
	);
};
