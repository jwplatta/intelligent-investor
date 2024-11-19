import IntelligentInvestor from '@/main';
import { App, PluginSettingTab, Setting } from 'obsidian';

export default class SettingTab extends PluginSettingTab {
	plugin: IntelligentInvestor;

	constructor(app: App, plugin: IntelligentInvestor) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Email')
			.setDesc('The email address is necessary for sending requests to the SEC to fetch the company data.')
			.addText(text => text
				.setPlaceholder('Enter your email address')
				.setValue(this.plugin.settings.email)
				.onChange(async (value) => {
					this.plugin.settings.email = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Export Directory')
			.setDesc('The directory where the exported company data will be saved.')
			.addText(text => text
				.setPlaceholder('/path/to/export/directory')
				.setValue(this.plugin.settings.exportDirectory)
				.onChange(async (value) => {
					this.plugin.settings.exportDirectory = value;
					await this.plugin.saveSettings();
				}));
	}
}