import React from "react";
import useSidebar from "../hooks/useSidebar";
import { useAppSelector } from "../hooks";

const SidebarBurger = () => {
	const { toggle } = useSidebar();
	const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);
	return (
		<div className="-ms-3">
			<button
				type="button"
				className="flex h-10 w-10 items-center justify-center"
				onClick={() => toggle()}>
				<div className={`relative h-5 w-5 ${isSidebarOpen ? "scale-90" : ""}`}>
					<span
						className={`bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 ${
							isSidebarOpen ? "-rotate-45 rtl:rotate-45 max-w-[75%] top-1" : "top-0.5"
						}`}></span>
					<span
						className={`bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300 ${
							isSidebarOpen ? "opacity-0 translate-x-4 rtl:-translate-x-4" : ""
						}`}></span>
					<span
						className={`bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 ${
							isSidebarOpen ? "rotate-45 rtl:-rotate-45 max-w-[75%] bottom-1" : "bottom-0"
						}`}></span>
				</div>
			</button>
		</div>
	);
};

export default SidebarBurger;
