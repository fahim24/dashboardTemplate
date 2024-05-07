import React from "react";
import { useSidebar } from "@/lib/hooks/useSidebar";
import { useAppSelector } from "../hooks";
import SidebarNavigationItem from "./SidebarNavigationItem";

type SidebarNavigationProps = {
	subsidebar: boolean;
	// expanded: boolean;
	children: React.ReactNode;
};

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
	subsidebar = true,

	children,
}) => {
	const { current, sidebars } = useSidebar();
	const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);

	const startSidebars = sidebars?.filter(
		(sidebar) => !sidebar.position || sidebar.position === "start"
	);
	const endSidebars = sidebars?.filter((sidebar) => sidebar.position === "end");

	// console.log(current);

	return (
		<>
			<div className="pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10">
				{/* <!-- Icon sidebar --> */}
				<div
					className={`border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-white transition-all duration-300 ${
						isSidebarOpen
							? ""
							: "-translate-x-full rtl:translate-x-full xl:translate-x-0 rtl:xl:-translate-x-0"
					}
		`}>
					{children}

					{/* <!-- Top Menu --> */}
					<div>
						{/* <slot name="top"></slot> */}

						{startSidebars.map((item) => (
							<SidebarNavigationItem sidebar={item} key={item.title} />
						))}
					</div>
					{/* <!-- Bottom Menu --> */}
					<div className="mt-auto">
						{endSidebars.map((item) => (
							<SidebarNavigationItem sidebar={item} key={item.title} />
						))}

						<slot name="end"></slot>
					</div>
				</div>

				{/* <!-- Menu panel --> */}
				{current != undefined && current.subsidebar != undefined && (
					<div
						className={`border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[220px] border-r bg-white transition-all duration-300	${
							isSidebarOpen
								? ""
								: "rtl:translate-x-[calc(100%_+_80px)] translate-x-[calc(-100%_-_80px)]"
						}`}>
						{/* <slot name="subnav"> */}
						{/* <KeepAlive> */}
						<current.subsidebar.component />

						{/* </KeepAlive> */}
						{/* </slot> */}
					</div>
				)}
			</div>
		</>
	);
};

export default SidebarNavigation;
