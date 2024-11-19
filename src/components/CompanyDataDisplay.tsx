import { App, normalizePath, TFile, Notice } from 'obsidian';
import { IntelligentInvestorSettings } from '@/src/settings/IntelligentInvestorSettings';
import { useState, useEffect } from 'react';
import { CompanyData, Share } from '@/src/types/CompanyData';
import getUnits from '@/src/components/getUnits';

// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface CompanyDataDisplayProps {
  app: App;
  settings: IntelligentInvestorSettings;
  companyData: CompanyData;
}

export default function CompanyDataDisplay({ app, settings, companyData }: CompanyDataDisplayProps) {
  const [formType, setFormType] = useState("10-Q");
  const [companyMetric, setCompanyMetric] = useState("Assets");
  const [years, setYears] = useState<number[]>([]);
  const [startYear, setStartYear] = useState<number>(0);
  const [endYear, setEndYear] = useState<number>(0);
  const [displayData, setDisplayData] = useState<Share[]>([]);
  const fiscalQuarterOrder = { Q1: 1, Q2: 2, Q3: 3, Q4: 4, FY: 5 } as any;

  useEffect(() => {
    const units = getUnits(companyData, companyMetric);
    const years = Array.from(
      new Set(
        units
          .map((report: any) => report.fy)
          .sort((a: number, b: number) => a - b)
      )
    ) as number[];
    setYears(years);

    if (startYear === 0) {
      setStartYear(years[0]);
    }
    if (endYear === 0) {
      setEndYear(years[years.length - 1]);
    }

    const data = units
      .filter((datum: any) => {
        return datum.form === formType && datum.fy >= startYear && datum.fy <= endYear
      })
      .slice()
      .sort((a: any, b: any) => {
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

    console.log("Displaying Data: ", data);

    setDisplayData(data);
  }, [formType, companyMetric, startYear, endYear]);

  const exportCompanyData = async () => {
    console.log("Exporting company data");
    const csvContent = displayData.map((datum) => {
      const row = [datum.fp, datum.fy, datum.filed, datum.end, datum.frame, datum.val];
      return row.join(',');
    }).join('\n');

    const exportDirectory = settings.exportDirectory;
    const filePath = normalizePath(`${exportDirectory}/${companyData.entityName} ${companyMetric}.csv`);
    const existingFile = app.vault.getAbstractFileByPath(filePath);

    if (existingFile instanceof TFile) {
        await app.vault.modify(existingFile, csvContent);
    } else {
        await app.vault.create(filePath, csvContent);
    }

    new Notice(`Company data exported to ${filePath}`);
  }

  const handleSelectFormType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormType(e.target.value);
  }

  const handleSelectMetric = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCompanyMetric(e.target.value);
  }

  const handleSelectStartYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartYear(Number(e.target.value));
  }

  const handleSelectEndYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndYear(Number(e.target.value));
  }

  return (
    <div>
      <div className="company-data-control">
        <label className="control-label">Company Metric</label>
        <select
          className="select-metric-control"
          onChange={handleSelectMetric}
        >
          {Object.keys(companyData.facts["us-gaap"]).map((metric, index) => (
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
            {displayData.map((data: any, index: number) => (
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