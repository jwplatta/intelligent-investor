export interface IntelligentInvestorSettings {
	email: string;
	exportDirectory: string;
}

export const DEFAULT_SETTINGS: IntelligentInvestorSettings = {
	email: '',
	exportDirectory: '/'
}
