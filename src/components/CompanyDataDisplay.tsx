import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { CompanyData } from '@/src/types/CompanyData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface CompanyDataDisplayProps {
  companyData: CompanyData;
}

export default function CompanyDataDisplay({ companyData }: CompanyDataDisplayProps) {
  // const [companyData, setCompanyData] = useState<CompanyData | null>(null);

  console.log("Company Data Display: ", companyData);
  const assets = companyData.facts["us-gaap"].Assets;

  const fiscalQuarterOrder = { Q1: 1, Q2: 2, Q3: 3, Q4: 4, FY: 5 };
  const quarterlyReports = assets.units.USD
    .filter(report => report.form === "10-Q")
    .slice()
    .sort((a, b) => {
      // First, sort by fiscal year (fy)
      if (a.fy !== b.fy) {
        return a.fy - b.fy;
      }

      // Next, sort by fiscal period (fp) using the quarter order
      if (fiscalQuarterOrder[a.fp] !== fiscalQuarterOrder[b.fp]) {
        return fiscalQuarterOrder[a.fp] - fiscalQuarterOrder[b.fp];
      }

      // If both entries are in the same fiscal year and period, prioritize later `end` dates
      const endDateComparison = new Date(a.end).getTime() - new Date(b.end).getTime();
      if (endDateComparison !== 0) {
        return endDateComparison;
      }

      // Finally, entries with a `frame` should come after those without, if all else is equal
      return a.frame ? 1 : -1;
    });

  console.log("Quarterly Reports: ", quarterlyReports);

  const allLabels = quarterlyReports.map(report => report.frame ? `${report.filed} - ${report.frame}` : `${report.filed} - ${report.fp}`);
  const initialData = quarterlyReports.map(report => report.val);

  // State for managing the start index of the 5-month window
  const [startIndex, setStartIndex] = useState(0);

  // Calculate the end index to maintain a 5-month window
  const endIndex = Math.min(startIndex + 5, allLabels.length);

  const data = {
    labels: allLabels.slice(startIndex, endIndex),
    datasets: [
      {
        label: 'My Dataset',
        data: initialData.slice(startIndex, endIndex),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const moveForward = () => {
    if (endIndex < allLabels.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const moveBackward = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const options = {
    scales: {
      x: {
        labels: data.labels,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
      <div style={{ marginTop: '10px' }}>
        <button onClick={moveBackward} disabled={startIndex === 0}>
          Previous
        </button>
        <button onClick={moveForward} disabled={endIndex === allLabels.length}>
          Next
        </button>
      </div>
    </div>
  );
}