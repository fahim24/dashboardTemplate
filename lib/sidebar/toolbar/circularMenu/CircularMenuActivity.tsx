import React from "react";
import { PiCirclesFourDuotone } from "react-icons/pi";

const CircularMenuActivity = () => {
	return (
		<>
			<button
				type="button"
				className="bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
				// @click="open('activity')"
			>
				<PiCirclesFourDuotone className="size-5 text-white" />
			</button>
		</>
	);
};

export default CircularMenuActivity;
