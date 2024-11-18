import { httpsGET } from './httpsGET';
import Company from '@/src/types/Company';

const COMPANY_TICKERS_URL = "https://www.sec.gov/files/company_tickers.json";

export async function fetchCompanyCIKs() {
  const data = await httpsGET(COMPANY_TICKERS_URL, 'www.sec.gov');
  const parsedData: { [key: string]: Company } = JSON.parse(data);
  const companyList: Company[] = Object.values(parsedData);

  return companyList;
}