"use client";
import { ApexOptions } from "apexcharts";
import React from "react";
import ApexChart from "./ApexCharts";

const RadialBarTeamChart = () => {
	const options: ApexOptions = {
		title: {
			text: undefined,
		},
		chart: {
			sparkline: {
				enabled: true,
			},
			toolbar: {
				show: false,
			},
		},
		colors: ["rgb(139, 92, 246)"],
		plotOptions: {
			radialBar: {
				startAngle: -90,
				endAngle: 90,
				track: {
					background: "#e7e7e7",
					strokeWidth: "97%",
					margin: 5, // margin is in pixels
					dropShadow: {
						enabled: false,
						top: 2,
						left: 0,
						color: "#999",
						opacity: 1,
						blur: 2,
					},
				},
				hollow: {
					margin: 0,
					size: "40%",
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						offsetY: -2,
						fontSize: "22px",
					},
				},
			},
		},
		grid: {
			padding: {
				top: 80,
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				shadeIntensity: 0.1,
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 53, 91],
			},
		},
		labels: ["Average Results"],
	};

	const series = [76];

	return <ApexChart options={options} series={series} type="radialBar" height="455" />;
};
export default RadialBarTeamChart;
