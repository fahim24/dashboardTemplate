import React from "react";
import { Sidebar } from "../hooks/useSidebar";
import { setCurrentSidebarName, setIsSidebarOpen } from "../features/sidebarSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import Link from "next/link";

const SidebarNavigationItem = ({ sidebar }: { sidebar: Sidebar }) => {
	const dispatch = useAppDispatch();
	const currentSidebarName = useAppSelector((state) => state.sidebar.currentSidebarName);

	function onSidebarItemClick() {
		if (typeof sidebar.click === "function") {
			return sidebar.click();
		}

		dispatch(setCurrentSidebarName(sidebar.title));
		dispatch(setIsSidebarOpen(true));
	}

	return (
		<div className="flex h-16 w-full items-center justify-center">
			{sidebar.component ? (
				<sidebar.component {...sidebar.props} />
			) : sidebar.to && sidebar.icon ? (
				<Link
					href={sidebar.to}
					className="text-muted-400 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300"
					data-nui-tooltip-position="right"
					data-nui-tooltip={sidebar.title}>
					<sidebar.icon.name className={sidebar.icon.class} />
				</Link>
			) : (
				sidebar.icon && (
					<button
						type="button"
						className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${
							currentSidebarName === sidebar.title
								? "bg-primary-100 text-primary-500 dark:bg-primary-500/10"
								: "text-muted-400"
						}`}
						data-nui-tooltip-position="right"
						data-nui-tooltip={sidebar.title}
						onClick={() => onSidebarItemClick()}>
						<sidebar.icon.name className={sidebar.icon.class} />
					</button>
				)
			)}
		</div>
	);
};

export default SidebarNavigationItem;
