import React from "react";
import Image from "next/image";
import usePanels from "@/lib/hooks/usePanels";

const ToolbarLanguage = () => {
	const { open } = usePanels();
	return (
		<>
			<button
				type="button"
				className="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
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

export default ToolbarLanguage;
