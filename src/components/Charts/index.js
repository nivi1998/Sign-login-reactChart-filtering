import React from 'react';
import LineChart from './LineChart';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';

Chart.register(CategoryScale);

const index = () => {
	return (
		<div>
			<div className="chart">
				<span className="headText">Line Chart</span>
				<LineChart />
				<span className="headText">Bar Chart</span>
				<BarChart />
				<span className="headText">Doughnut Chart</span>
				<DoughnutChart />
			</div>
		</div>
	);
};

export default index;
