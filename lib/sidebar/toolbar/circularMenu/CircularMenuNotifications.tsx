import Link from "next/link";
import React from "react";
import { PiBellDuotone } from "react-icons/pi";

const CircularMenuNotifications = () => {
	return (
		<>
			<Link
				href="#"
				className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300">
				<span className="bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full">
					<PiBellDuotone className="size-5 text-white" />
				</span>
			</Link>
		</>
	);
};

export default CircularMenuNotifications;
