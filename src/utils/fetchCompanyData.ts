import { httpsGET } from './httpsGET';
import { CompanyData } from '@/src/types/CompanyData';

const COMPANY_FACTS_URL = 'https://data.sec.gov/api/xbrl/companyfacts/CIK';

export async function fetchCompanyData(cik: string) {
  const url = `${COMPANY_FACTS_URL}${"0".repeat(10 - cik.toString().length)}${cik}.json`;
  const data = await httpsGET(url, 'data.sec.gov');
  const parsedData: CompanyData = JSON.parse(data) ;
  console.log("Company Data: ", parsedData);
  return parsedData;
}