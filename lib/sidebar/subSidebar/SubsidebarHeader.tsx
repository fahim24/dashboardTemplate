import { setIsSidebarOpen } from "@/lib/features/sidebarSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useSidebar } from "@/lib/hooks/useSidebar";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const SubsidebarHeader = () => {
	const { current } = useSidebar();
	const dispatch = useAppDispatch();

	return (
		<>
			<div className="flex h-16 w-full items-center px-6">
				{current && (
					<div className="font-heading text-muted-700 text-lg font-light capitalize dark:text-white">
						{current.title}
					</div>
				)}

				<button
					type="button"
					className="text-muted-400 hover:bg-muted-100 hover:text-muted-600 ms-auto flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 xl:hidden"
					onClick={() => dispatch(setIsSidebarOpen(false))}>
					<FaChevronLeft className="h-6 w-6" />
				</button>
			</div>
		</>
	);
};

export default SubsidebarHeader;
