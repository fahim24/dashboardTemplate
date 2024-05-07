"use client";
import React, { useEffect, useState } from "react";
import { useAppConfig } from "../hooks/useAppConfig";

const SidebarCircularMenu = () => {
	const [isOpened, setIsOpened] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY < 60) {
			setIsOpened(false);
		}
		return setIsScrolled(window.scrollY > 60);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const app = useAppConfig();
	const tools = app.app?.sidebar?.circularMenu?.tools?.slice(0, 4) || [];

	const toolOffsets = [
		"translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
		"translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
		"translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
		"translate-x-[0em] translate-y-[6.5em]",
	] as const;

	return (
		<>
			<div
				className={`after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed end-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-[''] ${
					isOpened ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : ""
				} ${isScrolled ? "" : "-translate-y-24"}
	`}>
				<button
					type="button"
					className="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"
					onClick={() => setIsOpened(!isOpened)}>
					<span
						className={`relative block h-3 w-3 transition-all duration-300 ${
							isOpened ? "scale-90 top-0" : "-top-0.5"
						}`}>
						<span
							className={`bg-muted-50 absolute block h-0.5 w-full transition-all duration-300 ${
								isOpened ? "-rotate-45 top-1" : "top-0.5"
							}`}></span>
						<span
							className={`bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300 ${
								isOpened ? "opacity-0 translate-x-4" : ""
							}`}></span>
						<span
							className={`bg-muted-50 absolute block h-0.5 w-full transition-all duration-300 ${
								isOpened ? "rotate-45 bottom-1.5" : "bottom-0"
							}`}></span>
					</span>
				</button>

				<div>
					{tools.map((tool, idx) => (
						<div
							key={`${tool.component}`}
							className={`absolute end-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300 ${
								isOpened ? toolOffsets[idx] : "translate-x-0 translate-y-0"
							}`}>
							<tool.component />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SidebarCircularMenu;
