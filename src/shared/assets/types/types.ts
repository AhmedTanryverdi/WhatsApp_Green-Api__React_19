export type CountryType = {
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

export type FormType = {
	number: string;
	error: boolean;
};

export type NumberType = {
	isNumber: boolean;
};

export type UserType = {
	statusAuth: string;
	auth: {
		status: string;
		code: string;
	};
};

export type AuthType = {
	status: string;
	code: string;
};
