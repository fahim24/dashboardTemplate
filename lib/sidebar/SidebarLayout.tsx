"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import useBreakPoint from "@/lib/hooks/useBreakPoint";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import SidebarNavigation from "./SidebarNavigation";
import SidebarToolbar from "./SidebarToolbar";
import SidebarCircularMenu from "./SidebarCircularMenu";
import Panels from "@/lib/sidebar/panels/Panels";
import { useAppConfig } from "@/lib/hooks/useAppConfig";
import useSidebar from "@/lib/hooks/useSidebar";
import { setCurrentSidebarName, setIsSidebarOpen } from "../features/sidebarSlice";

interface SidebarLayoutProps {
	sidebar?: boolean;
	subsidebar?: boolean;
	toolbar?: boolean;
	circularMenu?: boolean;
	condensed?: boolean;
	horizontalScroll?: boolean;
	children?: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
	sidebar = true,
	subsidebar = true,
	toolbar = true,
	circularMenu = true,
	condensed = false,
	horizontalScroll = false,
	children,
}) => {
	const app = useAppConfig();
	const { isLg } = useBreakPoint("lg");
	const dispatch = useAppDispatch();
	const { toggle } = useSidebar();
	const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);
	const [sidebarWidth, setSidebarWidth] = useState(sidebar ? (isSidebarOpen ? 300 : 80) : 0);

	// useEffect(() => {
	// 	setup();
	// 	return () => {
	// 		dispatch(setCurrentSidebarName(""));
	// 		dispatch(setIsSidebarOpen(false));
	// 	};
	// }, [dispatch, setup]);

	useEffect(() => {
		if (!sidebar) {
			return;
		}

		const handleResize = () => {
			if (isLg) {
				setSidebarWidth(isSidebarOpen ? 300 : 80);
			} else {
				setSidebarWidth(0);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [sidebar, isSidebarOpen, isLg]);

	const sidebarEnabled = app.app.sidebar?.navigation?.enabled !== false && sidebar !== false;
	const toolbarEnabled = app.app.sidebar?.toolbar?.enabled !== false && toolbar !== false;
	const circularMenuEnabled =
		app.app.sidebar?.circularMenu?.enabled !== false && circularMenu !== false;
	const navigationLogo = app.app.sidebar?.navigation?.logo;

	const wrapperClass = `bg-muted-100 dark:bg-muted-900  ${
		condensed
			? "relative min-h-screen w-full overflow-x-hidden"
			: `relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 lg:px-10${
					isSidebarOpen
						? " xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]"
						: " xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]"
			  }`
	}`;

	return (
		<>
			<div className="bg-muted-100 dark:bg-muted-900 pb-20">
				{sidebarEnabled && (
					<SidebarNavigation subsidebar={subsidebar}>
						{navigationLogo && (
							<div className="flex h-16 w-full items-center justify-center ">
								<Link href="/" className="flex items-center justify-center">
									<div {...navigationLogo.props}>
										<navigationLogo.component />
									</div>
								</Link>
							</div>
						)}
					</SidebarNavigation>
				)}
				<div
					role="button"
					className={`bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block h-full w-full transition-opacity duration-300 lg:hidden ${
						isSidebarOpen ? "opacity-50 dark:opacity-75" : "opacity-0 pointer-events-none"
					}`}
					onClick={() => toggle}></div>

				<div className={wrapperClass}>
					<div
						className={[
							condensed && !horizontalScroll && "w-full",
							!condensed && horizontalScroll && "mx-auto w-full",
							!condensed && !horizontalScroll && "mx-auto w-full max-w-7xl",
						]
							.filter(Boolean)
							.join(" ")}>
						{toolbarEnabled && (
							<SidebarToolbar sidebar={sidebar} horizontalScroll={horizontalScroll} />
						)}

						<main>{children}</main>
					</div>
				</div>
				<Panels />

				{circularMenuEnabled && <SidebarCircularMenu />}
			</div>
		</>
	);
};

export default SidebarLayout;
