import { Plugin } from 'obsidian';
import { COMPANY_DATA_VIEW } from '@/src/views/CompanyDataView';
import { CompanyDataView } from '@/src/views/CompanyDataView';
import { IntelligentInvestorSettings, DEFAULT_SETTINGS } from '@/src/settings/IntelligentInvestorSettings';
import { fetchCompanyCIKs } from '@/src/utils/fetchCompanyCIKs';
import CompanySearch from '@/src/views/CompanySearch';
import Company from '@/src/types/Company';
import SettingTab from '@/src/settings/SettingTab';

export default class IntelligentInvestor extends Plugin {
	settings: IntelligentInvestorSettings;

	async onload() {
		await this.loadSettings();

		this.registerView(
			COMPANY_DATA_VIEW,
			(leaf) => {
				return new CompanyDataView(leaf, this.app, this.settings, null)
			}
		);

		this.addCommand({
			id: 'search-company-data',
			name: 'Search Company SEC Data',
			callback: async () => {
				const companyCIKs = await fetchCompanyCIKs(this.settings.email);
				new CompanySearch(this.app, this.settings, this, companyCIKs).open();
			}
		});

		this.addSettingTab(new SettingTab(this.app, this));
	}

	onunload() {}

	async showCompanyData(company: Company) {
		const { workspace } = this.app;

		const leaf = workspace.getLeaf(false);
		await leaf?.setViewState({
			type: COMPANY_DATA_VIEW,
			active: true,
			state: { company: company }
		});

		workspace.revealLeaf(leaf);
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}