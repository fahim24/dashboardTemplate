"use client";
import { ApexOptions } from "apexcharts";
import React from "react";
import ApexChart from "./ApexCharts";

const BarTeamEfficiencyChart = () => {
	const options = {
		chart: {
			toolbar: {
				show: false,
			},
		},
		colors: ["rgb(20, 184, 166)", "rgb(14, 165, 233)", "rgb(139, 92, 246)"],
		legend: {
			position: "top",
		},
		plotOptions: {
			bar: {
				horizontal: false,
				endingShape: "rounded",
				columnWidth: "55%",
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ["transparent"],
		},
		xaxis: {
			categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
		},
		yaxis: {
			labels: {
				formatter: function (val: string) {
					return val + 70;
				},
			},
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			y: {
				formatter: function (val: string) {
					return val + "hrs";
				},
			},
		},
	};

	const series = [
		{
			name: "Design",
			data: [-26, -15, -13, -14, -9, -12, -7, -10, -4],
		},
		{
			name: "Development",
			data: [6, 15, 31, 28, 17, 35, 21, 44, 24],
		},
		{
			name: "Management",
			data: [-35, -29, -34, -44, -25, -22, -18, -17, -29],
		},
	];

	return <ApexChart options={options} series={series} type="bar" height="250" />;
};
export default BarTeamEfficiencyChart;
