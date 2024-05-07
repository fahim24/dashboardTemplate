import React from "react";
import Subsidebar from "./Subsidebar";
import SubsidebarMenu from "./SubsidebarMenu";
import {
	PiArticleDuotone,
	PiCirclesFourDuotone,
	PiCoinsDuotone,
	PiCreditCardDuotone,
	PiFingerprintDuotone,
	PiGearDuotone,
	PiLeafDuotone,
	PiLightningDuotone,
	PiListBullets,
	PiListChecks,
	PiLockDuotone,
	PiMagicWandDuotone,
	PiMagnifyingGlassDuotone,
	PiNoteDuotone,
	PiNotificationDuotone,
	PiPencilDuotone,
	PiSealCheckDuotone,
	PiSelectionForegroundDuotone,
	PiSkullDuotone,
	PiSquareLogoDuotone,
	PiSquaresFourDuotone,
	PiSuitcaseDuotone,
	PiTableDuotone,
	PiTimerDuotone,
	PiUsersThreeDuotone,
} from "react-icons/pi";

const SubsidebarLayouts = () => {
	const navigation = [
		{
			name: "Lists",
			children: [
				{
					name: "List view V1",
					icon: PiListBullets,
					to: "/layouts",
					exact: true,
				},
				{
					name: "List view V2",
					icon: PiListBullets,
					to: "/layouts/list-view-2",
				},
				{
					name: "List view V3",
					icon: PiListBullets,
					to: "/layouts/list-view-3",
				},
				{
					name: "List view V4",
					icon: PiListBullets,
					to: "/layouts/list-view-4",
				},
			],
		},
		{
			name: "Flex lists",
			children: [
				{
					name: "Flex list V1",
					icon: PiListChecks,
					to: "/layouts/flex-list-1",
				},
				{
					name: "Flex list V2",
					icon: PiListChecks,
					to: "/layouts/flex-list-2",
				},
				{
					name: "Flex list V3",
					icon: PiListChecks,
					to: "/layouts/flex-list-3",
				},
			],
		},
		{
			name: "Table lists",
			children: [
				{
					name: "Table list V1",
					icon: PiTableDuotone,
					to: "/layouts/table-list-1",
				},
				{
					name: "Table list V2",
					icon: PiTableDuotone,
					to: "/layouts/table-list-2",
				},
				{
					name: "Table list V3",
					icon: PiTableDuotone,
					to: "/layouts/table-list-3",
				},
			],
		},
		{
			name: "Form layouts",
			children: [
				{
					name: "Company",
					icon: PiArticleDuotone,
					to: "/layouts/form-1",
				},
				{
					name: "Doctor",
					icon: PiArticleDuotone,
					to: "/layouts/form-2",
				},
				{
					name: "Checkout",
					icon: PiArticleDuotone,
					to: "/layouts/form-3",
				},
				{
					name: "Event",
					icon: PiArticleDuotone,
					to: "/layouts/form-4",
				},
				{
					name: "Password gen",
					icon: PiArticleDuotone,
					to: "/layouts/form-5",
				},
				{
					name: "Meeting",
					icon: PiArticleDuotone,
					to: "/layouts/form-6",
				},
			],
		},
		{
			name: "Placeloads",
			children: [
				{
					name: "Placeload V1",
					icon: PiTimerDuotone,
					to: "/layouts/placeload-1",
				},
				{
					name: "Placeload V2",
					icon: PiTimerDuotone,
					to: "/layouts/placeload-2",
				},
				{
					name: "Placeload V3",
					icon: PiTimerDuotone,
					to: "/layouts/placeload-3",
				},
				{
					name: "Placeload V4",
					icon: PiTimerDuotone,
					to: "/layouts/placeload-4",
				},
			],
		},
		{
			name: "Card grids",
			children: [
				{
					name: "Card grid V1",
					icon: PiCirclesFourDuotone,
					to: "/layouts/card-grid-1",
				},
				{
					name: "Card grid V2",
					icon: PiCirclesFourDuotone,
					to: "/layouts/card-grid-2",
				},
				{
					name: "Card grid V3",
					icon: PiCirclesFourDuotone,
					to: "/layouts/card-grid-3",
				},
				{
					name: "Card grid V4",
					icon: PiCirclesFourDuotone,
					to: "/layouts/card-grid-4",
				},
			],
		},
		{
			name: "Tile grids",
			children: [
				{
					name: "Tile grid V1",
					icon: PiSelectionForegroundDuotone,
					to: "/layouts/tile-grid-1",
				},
				{
					name: "Tile grid V2",
					icon: PiSelectionForegroundDuotone,
					to: "/layouts/tile-grid-2",
				},
				{
					name: "Tile grid V3",
					icon: PiSelectionForegroundDuotone,
					to: "/layouts/tile-grid-3",
				},
			],
		},
		{
			name: "User grids",
			children: [
				{
					name: "User grid V1",
					icon: PiUsersThreeDuotone,
					to: "/layouts/user-grid-1",
				},
				{
					name: "User grid V2",
					icon: PiUsersThreeDuotone,
					to: "/layouts/user-grid-2",
				},
				{
					name: "User grid V3",
					icon: PiUsersThreeDuotone,
					to: "/layouts/user-grid-3",
				},
				{
					name: "User grid V4",
					icon: PiUsersThreeDuotone,
					to: "/layouts/user-grid-4",
				},
			],
		},
		{
			divider: true,
		},
		{
			name: "Projects",
			children: [
				{
					name: "Projects V1",
					icon: PiLeafDuotone,
					to: "/layouts/projects",
					exact: true,
				},
				{
					name: "Projects V2",
					icon: PiLeafDuotone,
					to: "/layouts/projects/project-list-2",
				},
				{
					name: "Projects V3",
					icon: PiLeafDuotone,
					to: "/layouts/projects/project-list-3",
				},
				{
					name: "Project details",
					icon: PiNoteDuotone,
					to: "/layouts/projects/details",
				},
				{
					name: "Kanban board",
					icon: PiSquaresFourDuotone,
					to: "/layouts/projects/board",
				},
			],
		},
		{
			name: "Auth",
			children: [
				{
					name: "Login",
					icon: PiLockDuotone,
					to: "/auth",
					exact: true,
				},
				{
					name: "Login V1",
					icon: PiLockDuotone,
					to: "/auth/login-1",
				},
				{
					name: "Login V2",
					icon: PiLockDuotone,
					to: "/auth/login-2",
				},
				{
					name: "Login V3",
					icon: PiLockDuotone,
					to: "/auth/login-3",
				},
				{
					name: "Signup V1",
					icon: PiMagicWandDuotone,
					to: "/auth/signup-1",
				},
				{
					name: "Signup V2",
					icon: PiMagicWandDuotone,
					to: "/auth/signup-2",
				},
				{
					name: "Signup V3",
					icon: PiMagicWandDuotone,
					to: "/auth/signup-3",
				},
				{
					name: "Forgot password",
					icon: PiFingerprintDuotone,
					to: "/auth/recover",
				},
			],
		},
		{
			name: "Subpages",
			children: [
				{
					name: "Profile",
					icon: PiLockDuotone,
					to: "/layouts/profile",
					exact: true,
				},
				{
					name: "Edit profile",
					icon: PiPencilDuotone,
					to: "/layouts/profile-edit",
				},
				{
					name: "Notifications",
					icon: PiNotificationDuotone,
					to: "/layouts/profile-notifications",
				},
				{
					name: "Settings",
					icon: PiGearDuotone,
					to: "/layouts/profile-settings",
				},
				{
					name: "Search results",
					icon: PiMagnifyingGlassDuotone,
					to: "/layouts/search-results",
				},
				{
					name: "Empty search",
					icon: PiMagnifyingGlassDuotone,
					to: "/layouts/search-empty",
				},
				{
					name: "SaaS billing",
					icon: PiCreditCardDuotone,
					to: "/layouts/utility-billing",
				},
				{
					name: "Action page v1",
					icon: PiLightningDuotone,
					to: "/layouts/utility-action-1",
				},
				{
					name: "Action page v2",
					icon: PiLightningDuotone,
					to: "/layouts/utility-action-2",
				},
			],
		},
		{
			name: "Utility",
			children: [
				{
					name: "Confirm account",
					icon: PiSquareLogoDuotone,
					to: "/layouts/utility-confirm",
				},
				{
					name: "Promotion",
					icon: PiSealCheckDuotone,
					to: "/layouts/utility-promotion",
				},
				{
					name: "Invoice",
					icon: PiNoteDuotone,
					to: "/layouts/utility-invoice",
				},
				{
					name: "Service status",
					icon: PiNotificationDuotone,
					to: "/layouts/utility-status",
				},
				{
					name: "System error",
					icon: PiSkullDuotone,
					to: "/layouts/utility-error",
				},
			],
		},
		{
			name: "Onboarding",
			children: [
				{
					name: "2 Factor",
					icon: PiFingerprintDuotone,
					to: "/layouts/onboarding-1",
				},
				{
					name: "Plan boarding",
					icon: PiCoinsDuotone,
					to: "/layouts/onboarding-2",
				},
				{
					name: "Role selection",
					icon: PiSuitcaseDuotone,
					to: "/layouts/onboarding-3",
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

export default SubsidebarLayouts;
