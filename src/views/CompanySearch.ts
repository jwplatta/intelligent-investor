import { App, SuggestModal } from 'obsidian';
import IntelligentInvestor from '@/main'
import { IntelligentInvestorSettings } from '@/src/settings/IntelligentInvestorSettings';
import Company from '@/src/types/Company';

export default class CompanySearch extends SuggestModal<Company> {
	app: App;
	settings: IntelligentInvestorSettings;
	plugin: IntelligentInvestor;
  companyCIKs: Company[];

	constructor(app: App, settings: IntelligentInvestorSettings, plugin: IntelligentInvestor, companyCIKs: Company[]) {
		super(app);
		this.app = app;
		this.settings = settings;
		this.plugin = plugin;
    this.companyCIKs = companyCIKs;
	}

	async getSuggestions(query: string): Promise<Company[]> {
    const filteredCompanies = this.companyCIKs.filter((company) => {
      return company.title.toLowerCase().includes(query.toLowerCase()) || company.ticker.toLowerCase().includes(query.toLowerCase());
    });

		return filteredCompanies;
	}

	renderSuggestion(company: Company, el: HTMLElement) {
		el.createEl('h4', { text: `${company.title} - ${company.ticker}`, cls: '' });
	}

	onChooseSuggestion(company: Company, evt: MouseEvent | KeyboardEvent) {
		this.plugin.showCompanyData(company);
	}
}