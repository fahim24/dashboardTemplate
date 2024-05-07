"use client";
import React from "react";

import { ApexOptions } from "apexcharts";
import ApexChart from "./ApexCharts";

const AreaCustomerChart = () => {
	const options: ApexOptions = {
		chart: {
			toolbar: {
				show: false,
			},
		},
		colors: ["rgb(139, 92, 246)", "rgb(14, 165, 233)", "rgb(20, 184, 166)"],

		title: {
			text: undefined,
			align: "left",
		},
		legend: {
			show: true,
			position: "top",
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			width: [2, 2, 2],
			curve: "smooth",
		},
		xaxis: {
			type: "datetime",
			categories: [
				"2020-09-19T00:00:00.000Z",
				"2020-09-20T01:30:00.000Z",
				"2020-09-21T02:30:00.000Z",
				"2020-09-22T03:30:00.000Z",
				"2020-09-23T04:30:00.000Z",
				"2020-09-24T05:30:00.000Z",
				"2020-09-25T06:30:00.000Z",
			],
		},
		tooltip: {
			x: {
				format: "dd/MM/yy HH:mm",
			},
		},
	};

	const series = [
		{
			name: "Returning",
			data: [31, 40, 28, 51, 42, 109, 100],
		},
		{
			name: "Newcomers",
			data: [11, 32, 45, 32, 34, 52, 41],
		},
		{
			name: "Abandonned",
			data: [78, 53, 36, 10, 14, 5, 2],
		},
	];

	return <ApexChart options={options} series={series} type="area" height="258" />;
};
export default AreaCustomerChart;
