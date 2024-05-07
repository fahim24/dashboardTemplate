import React from "react";
import { PiCirclesFourDuotone } from "react-icons/pi";

const ToolbarActivity = () => {
	return (
		<>
			<button
				type="button"
				className="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
				// @click="open('activity')"
			>
				<PiCirclesFourDuotone className="text-muted-400 size-5" />
			</button>
		</>
	);
};

export default ToolbarActivity;
