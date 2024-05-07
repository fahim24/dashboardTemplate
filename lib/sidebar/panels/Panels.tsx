"use client";
import usePanels from "@/lib/hooks/usePanels";
import { Transition } from "@headlessui/react";
import React, { useEffect } from "react";

const Panels = () => {
	const { current, currentProps, showOverlay, close, transitionFrom } = usePanels();
	useEffect(() => {
		// console.log("current", current);
	}, [current]);

	return (
		<>
			<div>
				<Transition
					show={true}
					enter="transition-transform duration-300 ease-out"
					enterFrom={
						transitionFrom === "left"
							? "-translate-x-full rtl:translate-x-full"
							: "translate-x-full rtl:-translate-x-full"
					}
					leave="transition-transform duration-300 ease-in"
					leaveTo={
						transitionFrom === "left"
							? "-translate-x-full rtl:translate-x-full"
							: "translate-x-full rtl:-translate-x-full"
					}>
					{current && (
						<div
							className={`fixed top-0 z-[100] h-full w-96 ${
								current.position === "left" ? "start-0" : "end-0"
							}`}>
							<current.component {...currentProps} />
						</div>
					)}
				</Transition>

				<div
					className={`bg-muted-800/60 fixed start-0 top-0 z-[99] h-full w-full cursor-pointer transition-opacity duration-300 ${
						current && showOverlay
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					}`}
					onClick={() => close()}
				/>
			</div>
		</>
	);
};

export default Panels;
