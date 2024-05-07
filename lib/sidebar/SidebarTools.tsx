import React from "react";
import { useAppConfig } from "../hooks/useAppConfig";

const SidebarTools = () => {
	const app = useAppConfig();
	const tools = app.app.sidebar?.toolbar?.tools;

	return (
		<div className="flex items-center h-16 gap-2">
			{tools.map((tool) => (
				<tool.component key={`${tool.component}`} />
			))}
		</div>
	);
};

export default SidebarTools;
