# Intelligent Investor Assistant

Set of tools for researching and taking notes for investment ideas right in Obsidian. Currently, the plugin supports querying the SEC's EDGAR API.

## Install

To install the plugin copy the `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Settings

You will need to set up an email and export directoy in the SettingsTab of the plugin. The email is used to query the SEC's EDGAR API. The export directory is where CSV files of the financial data are saved.

## Usage

Use the `Select Company` command to select a company to research. The plugin will then fetch the company's financial statements and display them in a table in a new view.

You can filter the financial data by year, metric, and statement. You can also export the data to a CSV file.

<p align="center">
  <img src="./docs/select_apple.gif" width="400">
</p>


