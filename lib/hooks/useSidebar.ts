"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { setCurrentSidebarName, setIsSidebarOpen } from "../features/sidebarSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useAppConfig } from "./useAppConfig";
import useBreakPoint from "./useBreakPoint";
import { useEffect } from "react";
import { IconType } from "react-icons";

export type Sidebar = {
	title?: string;
	icon?: {
		name: IconType;
		class?: string;
	};
	subsidebar?: {
		component: () => JSX.Element;
	};
	activePath?: string;
	to?: string;
	click?: () => void;
	position?: string;
	component?: () => JSX.Element;
	props?: any;
};

export function useSidebar() {
	const app = useAppConfig();
	const dispatch = useAppDispatch();
	const pathName = usePathname();
	// const searchParams = useSearchParams();
	const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);
	const currentSidebarName = useAppSelector((state) => state.sidebar.currentSidebarName);
	const { isLg } = useBreakPoint("lg");
	// const url = `${pathName}?${searchParams}`;

	const getSidebars = (): Sidebar[] => {
		if (
			app.app.sidebar?.navigation?.enabled === false ||
			app.app.sidebar?.navigation?.items?.length === 0
		) {
			return [];
		}
		return app.app.sidebar?.navigation?.items;
	};
	const sidebars = getSidebars();

	const hasSubsidebar = sidebars?.some((sidebar) => sidebar?.subsidebar?.component);

	const current = sidebars?.find(({ title }) => title === currentSidebarName);

	function toggle() {
		// If no sidebar item is selected, open the first one
		if (!currentSidebarName && !isSidebarOpen) {
			if (!sidebars?.[0]?.title) {
				// No sidebar items defined
				return;
			}

			// Select the first sidebar item by default
			dispatch(setCurrentSidebarName(sidebars[0].title));
		}

		dispatch(setIsSidebarOpen(!isSidebarOpen));
	}

	function close(unselect = false) {
		dispatch(setIsSidebarOpen(false));

		if (unselect) {
			dispatch(setCurrentSidebarName(""));
		}
	}

	function open(name: string) {
		dispatch(setCurrentSidebarName(name));
		dispatch(setIsSidebarOpen(true));
	}

	function detect() {
		if (!app.app.sidebar?.navigation?.startOpen) {
			dispatch(setIsSidebarOpen(false));

			return;
		}

		const item = sidebars?.find((bar) => bar?.activePath && pathName.startsWith(bar.activePath));
		if (item) {
			dispatch(setCurrentSidebarName(item.title));
			if (typeof window === "undefined") {
				dispatch(setIsSidebarOpen(Boolean(currentSidebarName)));
			} else {
				dispatch(setIsSidebarOpen(Boolean(currentSidebarName) && isLg));
			}
		}
		return;
	}

	function useSetup() {
		useEffect(() => {
			if (!isLg) {
				dispatch(setIsSidebarOpen(false));
			}
		}, []);

		useEffect(() => {
			function handleSidebar(value: string | undefined) {
				if (value) {
					if (!isLg) {
						dispatch(setIsSidebarOpen(true));
					}
				} else {
					dispatch(setIsSidebarOpen(false));
				}
			}

			handleSidebar(currentSidebarName);
		}, []);

		detect();
		return;
	}

	return {
		sidebars,
		hasSubsidebar,
		current,
		toggle,
		close,
		open,
		detect,
		useSetup,
	};
}
