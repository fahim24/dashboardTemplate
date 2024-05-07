import React from "react";
import SubsidebarMenuDivider from "./SubsidebarMenuDivider";
import SubsidebarMenuLink from "./SubsidebarMenuLink";
import SubsidebarMenuCollapseLinks from "./SubsidebarMenuCollapseLinks";
import { IconType } from "react-icons";

interface MenuGroupSeparator {
	divider: boolean;
}

export interface MenuGroupLink {
	name: string;
	to: string;
}

export interface MenuGroupCollapseLink {
	name: string;
	to: string;
	icon: IconType;
	exact?: boolean;
}
export interface MenuGroupCollapse {
	name: string;
	children: MenuGroupCollapseLink[];
}
export type MenuItem = MenuGroupSeparator | MenuGroupLink | MenuGroupCollapse;

const SubsidebarMenu: React.FC<{ navigation: MenuItem[] }> = ({ navigation }) => {
	return (
		<>
			<ul>
				{navigation.map((group, index) =>
					group && "divider" in group ? (
						<SubsidebarMenuDivider key={`${index}-divider`} />
					) : group && "to" in group ? (
						<SubsidebarMenuLink group={group} key={`${index}-link`} />
					) : (
						<SubsidebarMenuCollapseLinks group={group} key={`${index}-collapse`} />
					)
				)}
			</ul>
		</>
	);
};

export default SubsidebarMenu;
