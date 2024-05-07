"use client";
import React from "react";
import Image from "next/image";
import usePanels from "@/lib/hooks/usePanels";

const CircularMenuLanguage = () => {
	const { open } = usePanels();
	return (
		<>
			<button
				type="button"
				className="bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
				onClick={() => open("language")}>
				<Image
					className="size-7 rounded-full"
					src="/img/icons/flags/usa.svg"
					alt="flag icon"
					width={28}
					height={28}
				/>
			</button>
		</>
	);
};

export default CircularMenuLanguage;
