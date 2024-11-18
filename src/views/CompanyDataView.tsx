import { App, ItemView, WorkspaceLeaf, ViewStateResult } from 'obsidian';
import { StrictMode } from 'react';
import { Root, createRoot } from "react-dom/client";
import CompanyDataDisplay from '@/src/components/CompanyDataDisplay';
import { fetchCompanyData } from '@/src/utils/fetchCompanyData';
import Company from '@/src/types/Company';

export const COMPANY_DATA_VIEW = "show-company-data-view";

interface CompanyDataViewState extends Record<string, unknown> {
  company: Company | null;
}

export class CompanyDataView extends ItemView {
  root: Root | null = null;
  app: App;
  company: Company | null;

  constructor(leaf: WorkspaceLeaf, app: App, company: Company | null) {
    super(leaf);
    this.app = app;
    this.company = company;
  }

  setState(state: any, result: ViewStateResult): Promise<void> {
    if (state.company) {
      this.company = state.company;
    }

    this.render();

    return super.setState(state, result);
  }

  getState(): CompanyDataViewState {
    return {
      company: this.company
    };
  }

  getViewType() {
    return COMPANY_DATA_VIEW;
  }

  getDisplayText() {
    return this.company?.ticker || "No Ticker Provided";
  }

  getIcon(): string {
    return "building-2";
  }

  async render() {
    if (!this.company) {
      return;
    }
    const companyData = await fetchCompanyData(this.company?.cik_str);
    const container = this.containerEl.children[1];
    container.empty();
    this.root = createRoot(container);

    this.root.render(
      <StrictMode>
				<CompanyDataDisplay companyData={companyData} />
      </StrictMode>
   );
  }

  async onOpen() {
    this.render();
  }

  async onClose() {
    this.root?.unmount();
  }
}