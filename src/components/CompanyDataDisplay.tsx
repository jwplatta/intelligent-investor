import { useState, useEffect } from 'react';
import { CompanyData, Share, UsGaap } from '@/src/types/CompanyData';
import getUnits from '@/src/components/getUnits';

// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface CompanyDataDisplayProps {
  companyData: CompanyData;
}

export default function CompanyDataDisplay({ companyData }: CompanyDataDisplayProps) {
  // const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [formType, setFormType] = useState("10-Q");
  const [companyMetrics, setCompanyMetrics] = useState<string[]>([]);
  const [companyMetric, setCompanyMetric] = useState("Assets");
  const [years, setYears] = useState<number[]>([]);
  const [startYear, setStartYear] = useState("None");
  const [endYear, setEndYear] = useState("None");
  const [displayData, setDisplayData] = useState<Share[]>([]);

  useEffect(() => {
    console.log("Company Data Display: ", companyData);
    setCompanyMetrics(Object.keys(companyData.facts["us-gaap"]));
    console.log(companyMetric, ": ", companyData.facts["us-gaap"][companyMetric as keyof UsGaap])

    const units = getUnits(companyData, companyMetric);
    const years = Array.from(
      new Set(
        units
          .map((report: any) => report.fy)
          .sort((a: number, b: number) => a - b)
      )
    ) as number[];
    setYears(years);

    const startYear = Math.min(...years as number[]);
    setStartYear(startYear.toString());

    const endYear = Math.max(...years as number[]);
    setEndYear(endYear.toString());
  }, []);

  console.log("Company Data Display: ", companyData);
  const assets = companyData.facts["us-gaap"].Assets;

  const fiscalQuarterOrder = { Q1: 1, Q2: 2, Q3: 3, Q4: 4, FY: 5 };
  const quarterlyReports = assets.units.USD
    .filter(report => report.form === "10-Q")
    .slice()
    .sort((a, b) => {
      if (a.fy !== b.fy) {
        return a.fy - b.fy;
      }

      if (fiscalQuarterOrder[a.fp] !== fiscalQuarterOrder[b.fp]) {
        return fiscalQuarterOrder[a.fp] - fiscalQuarterOrder[b.fp];
      }

      const endDateComparison = new Date(a.end).getTime() - new Date(b.end).getTime();
      if (endDateComparison !== 0) {
        return endDateComparison;
      }

      return a.frame ? 1 : -1;
    });

  console.log("Quarterly Reports: ", quarterlyReports);

  const exportCompanyData = () => {
    console.log("Exporting company dataa");
  }

  const handleSelectFormType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormType(e.target.value);
  }

  const handleSelectMetric = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selected Metric: ", e.target.value);
    setCompanyMetric(e.target.value);
  }

  const handleSelectStartYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartYear(e.target.value);
  }

  const handleSelectEndYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndYear(e.target.value);
  }

  return (
    <div>
      <div className="company-data-control">
        <label className="control-label">Company Metric</label>
        <select
          className="select-metric-control"
          onChange={handleSelectMetric}
        >
          {companyMetrics.map((metric, index) => (
            <option key={index} value={metric}>{metric}</option>
          ))}
        </select>
      </div>
      <div className="company-data-controls">
        <div className="company-data-control">
          <label className="control-label">Select Form Type</label>
          <select
            className="select-control"
            onChange={handleSelectFormType}
          >
            <option value="10-Q">10-Q</option>
            <option value="10-K">10-K</option>
          </select>
        </div>
        <div className="company-data-control">
          <label className="control-label">
            Start Year
          </label>
          <select
            className="select-control"
            value={startYear}
            onChange={handleSelectStartYear}
          >
            {years.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="company-data-control">
          <label className="control-label">
            End Year
          </label>
          <select
            className="select-control"
            value={endYear}
            onChange={handleSelectEndYear}
          >
            {years.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <button className="export-button" onClick={exportCompanyData}>
          Export
        </button>
      </div>
      <div className="company-data-container">
        <table className="company-data-table">
          <thead>
            <tr>
              <th>FP</th>
              <th>FY</th>
              <th>Filed</th>
              <th>End</th>
              <th>Frame</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {quarterlyReports.map((data: any, index: number) => (
              <tr key={index} className={index % 2 === 0 ? "company-data-row-light" : "company-data-row-dark"}>
                <td className="company-data-cell">{data.fp}</td>
                <td className="company-data-cell">{data.fy}</td>
                <td className="company-data-cell">{data.filed}</td>
                <td className="company-data-cell">{data.end}</td>
                <td className="company-data-cell">{data.frame}</td>
                <td className="company-data-cell">{data.val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}