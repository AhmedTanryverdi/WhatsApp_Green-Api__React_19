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

export type ChatType = {
	type: string;
	idMessage: string;
	timestamp: number;
	typeMessage: string;
	textMessage: string;
	chatId: string;
	statusMessage: string;
	sendByApi: boolean;
	editedMessageId: string;
	deletedMessageId: string;
	isEdited: boolean;
	isDeleted: boolean;
	
	videoNote?: boolean;
	downloadUrl?: string;
	caption?: string;
	fileName?: string;
	jpegThumbnail?: string;
	mimeType?: string;
	isAnimated?: boolean;
	isForwarded?: boolean;
	forwardingScore?: number;
};
