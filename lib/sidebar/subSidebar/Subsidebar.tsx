import React from "react";
import SubsidebarHeader from "./SubsidebarHeader";

const Subsidebar = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className="flex h-screen flex-col">
				<SubsidebarHeader />

				{/* <!-- Body --> */}
				<div className="nui-slimscroll relative h-full w-full overflow-y-auto">
					<div className="px-6 pb-8">{children}</div>

					<div className="dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent"></div>
				</div>
			</div>
		</>
	);
};

export default Subsidebar;
