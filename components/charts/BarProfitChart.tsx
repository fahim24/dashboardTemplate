"use client";
import { ApexOptions } from "apexcharts";
import React from "react";
import ApexChart from "./ApexCharts";

const BarProfitChart = () => {
	const options: ApexOptions = {
		chart: {
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				dataLabels: {
					position: "top", // top, center, bottom
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val: string) {
				return val + "%";
			},
			offsetY: -20,
			style: {
				fontSize: "12px",
				colors: ["#304758"],
			},
		},
		xaxis: {
			categories: ["May", "Jun", "Jul", "Aug", "Sep"],
			position: "top",
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				fill: {
					type: "gradient",
					gradient: {
						colorFrom: "#D8E3F0",
						colorTo: "#BED1E6",
						stops: [0, 100],
						opacityFrom: 0.4,
						opacityTo: 0.5,
					},
				},
			},
			tooltip: {
				enabled: true,
			},
		},
		yaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				show: false,
				formatter: function (val: number) {
					return val + "%";
				},
			},
		},
		colors: ["rgb(139, 92, 246)"],
		title: {
			text: undefined,
			align: "left",
		},
	};

	const series = [
		{
			name: "Ratio",
			data: [2.3, 3.1, 4.0, 10.1, 4.0],
		},
	];

	return <ApexChart options={options} series={series} type="bar" height="255" />;
};
export default BarProfitChart;
