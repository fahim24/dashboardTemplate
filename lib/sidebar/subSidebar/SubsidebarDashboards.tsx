import React from "react";
import Subsidebar from "./Subsidebar";
import SubsidebarMenu from "./SubsidebarMenu";
import {
	PiAirplaneDuotone,
	PiBankDuotone,
	PiBriefcaseDuotone,
	PiBuildingsDuotone,
	PiCactusDuotone,
	PiCalendarBlankDuotone,
	PiChartPieSliceDuotone,
	PiChatCircleDuotone,
	PiCoffeeDuotone,
	PiCoinDuotone,
	PiConfettiDuotone,
	PiCookieDuotone,
	PiCrownDuotone,
	PiEnvelopeDuotone,
	PiGaugeDuotone,
	PiGraduationCapDuotone,
	PiMapPinDuotone,
	PiPenNibDuotone,
	PiPillDuotone,
	PiShoppingCartDuotone,
	PiSoccerBallDuotone,
	PiSquareHalfBottomDuotone,
	PiSquareHalfDuotone,
	PiStorefrontDuotone,
	PiUsersFourDuotone,
	PiVideoCameraDuotone,
} from "react-icons/pi";

const SubsidebarDashboards = () => {
	const navigation = [
		{
			name: "Personal",
			children: [
				{
					name: "Personal V1",
					icon: PiCoffeeDuotone,
					to: "/dashboards",
					exact: true,
				},
				{
					name: "Personal V2",
					icon: PiChartPieSliceDuotone,
					to: "/dashboards/personal-2",
				},
				{
					name: "Personal V3",
					icon: PiCactusDuotone,
					to: "/dashboards/personal-3",
				},
			],
		},
		{
			name: "Finance",
			children: [
				{
					name: "Analytics dashboard",
					icon: PiGaugeDuotone,
					to: "/dashboards/analytics",
				},
				{
					name: "Stock dashboard",
					icon: PiCoinDuotone,
					to: "/dashboards/stocks",
				},
				{
					name: "Sales dashboard",
					icon: PiShoppingCartDuotone,
					to: "/dashboards/sales",
				},
			],
		},
		{
			name: "Banking",
			children: [
				{
					name: "Banking V1",
					icon: PiBankDuotone,
					to: "/dashboards/banking-1",
				},
				{
					name: "Banking V2",
					icon: PiBankDuotone,
					to: "/dashboards/banking-2",
				},
				{
					name: "Banking V3",
					icon: PiBankDuotone,
					to: "/dashboards/banking-3",
				},
			],
		},
		{
			name: "Business",
			children: [
				{
					name: "Flights booking",
					icon: PiAirplaneDuotone,
					to: "/dashboards/flights",
				},
				{
					name: "Company board",
					icon: PiBuildingsDuotone,
					to: "/dashboards/company",
				},
				{
					name: "HR board",
					icon: PiUsersFourDuotone,
					to: "/dashboards/human-resources",
				},
				{
					name: "Course dashboard",
					icon: PiGraduationCapDuotone,
					to: "/dashboards/course",
				},
				{
					name: "Jobs dashboard",
					icon: PiBriefcaseDuotone,
					to: "/dashboards/jobs",
				},
			],
		},
		{
			name: "Lifestyle",
			children: [
				{
					name: "Influencer",
					icon: PiCrownDuotone,
					to: "/dashboards/influencer",
				},
				{
					name: "Hobbies",
					icon: PiConfettiDuotone,
					to: "/dashboards/hobbies",
				},
				{
					name: "Health",
					icon: PiPillDuotone,
					to: "/dashboards/health",
				},
				{
					name: "Writer",
					icon: PiPenNibDuotone,
					to: "/dashboards/writer",
				},
				{
					name: "Video",
					icon: PiVideoCameraDuotone,
					to: "/dashboards/video",
				},
				{
					name: "Soccer",
					icon: PiSoccerBallDuotone,
					to: "/dashboards/soccer",
				},
			],
		},
		{
			name: "Ecommerce",
			children: [
				{
					name: "Ecommerce",
					icon: PiStorefrontDuotone,
					to: "/dashboards/ecommerce",
				},
			],
		},
		{
			name: "Apps",
			children: [
				{
					name: "Calendar",
					icon: PiCalendarBlankDuotone,
					to: "/dashboards/calendar",
				},
				{
					name: "Food delivery",
					icon: PiCookieDuotone,
					to: "/dashboards/delivery",
				},
				{
					name: "Maps v1",
					icon: PiMapPinDuotone,
					to: "/dashboards/map-left",
				},
				{
					name: "Maps v2",
					icon: PiMapPinDuotone,
					to: "/dashboards/map-right",
				},
				{
					name: "Inbox",
					icon: PiEnvelopeDuotone,
					to: "/dashboards/inbox",
				},
				{
					name: "Messaging",
					icon: PiChatCircleDuotone,
					to: "/dashboards/messaging",
				},
			],
		},
		{
			divider: true,
		},
		{
			name: "Wizard",
			to: "/wizard",
		},
		{
			divider: true,
		},
		{
			name: "Charts",
			children: [
				{
					name: "Apex Charts",
					icon: PiChartPieSliceDuotone,
					to: "/dashboards/charts",
				},
			],
		},
		{
			name: "Widgets",
			children: [
				{
					name: "UI Widgets",
					icon: PiSquareHalfDuotone,
					to: "/dashboards/widgets",
					exact: true,
				},
				{
					name: "Creative Widgets",
					icon: PiSquareHalfBottomDuotone,
					to: "/dashboards/widgets/creative",
				},
				{
					name: "List Widgets",
					icon: PiSquareHalfDuotone,
					to: "/dashboards/widgets/list",
				},
			],
		},
	];

	return (
		<>
			<Subsidebar>
				<SubsidebarMenu navigation={navigation} />
			</Subsidebar>
		</>
	);
};

export default SubsidebarDashboards;
