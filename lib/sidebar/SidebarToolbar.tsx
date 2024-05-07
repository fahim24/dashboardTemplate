import React from "react";

import { BaseHeading } from "@shuriken-ui/react";

import { useAppConfig } from "@/lib/hooks/useAppConfig";
import { useSidebar } from "@/lib/hooks/useSidebar";

import SidebarBurger from "./SidebarBurger";
import SidebarTools from "./SidebarTools";

type SidebarToolbarProps = {
	sidebar: boolean;
	horizontalScroll: boolean;
	// children: React.ReactNode;
};

const SidebarToolbar: React.FC<SidebarToolbarProps> = ({ sidebar, horizontalScroll }) => {
	const app = useAppConfig();
	const { hasSubsidebar } = useSidebar();
	const showNavBurger = sidebar && app.app.sidebar?.toolbar?.showNavBurger && hasSubsidebar;
	return (
		<>
			<div
				className={`relative z-50 mb-5 flex h-16 items-center gap-2 ${
					horizontalScroll ? "pe-4 xl:pe-10" : ""
				}`}>
				{showNavBurger && <SidebarBurger />}

				{app.app.sidebar?.toolbar?.showTitle && (
					<BaseHeading
						as="h1"
						size="2xl"
						weight="light"
						className="text-muted-800 hidden dark:text-white md:block">
						{/* <slot name="title">{{ route.meta.title }}</slot> */}
						<span>Title</span>
					</BaseHeading>
				)}

				<div className="ms-auto"></div>
				<SidebarTools />
			</div>
		</>
	);
};

export default SidebarToolbar;
