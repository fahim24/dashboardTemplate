"use Client";
import React, { useState } from "react";
import { useAppConfig } from "./useAppConfig";
import defu from "defu";

const usePanels = () => {
	const app = useAppConfig();

	const [currentName, setCurrentName] = useState<string>("");
	const [transitionFrom, setTransitionFrom] = useState<"left" | "right">("left");
	const [showOverlay, setShowOverlay] = useState<boolean>(true);
	const [currentProps, setCurrentProps] = useState<Record<string, any>>({});

	const panels =
		app.app?.panels?.map((panel) => ({
			...panel,
			position: (panel as any).position ?? "left",
			overlay: (panel as any)?.overlay ?? true,
		})) ?? [];

	const [current, setCurrent] = useState(
		panels.find((panel: { name: string }) => panel.name === currentName) || undefined
	);

	const open = (pname: string, props?: any) => {
		const panel = panels.find(({ name }) => name === pname);

		if (panel) {
			setCurrent(panel);
			setTransitionFrom(panel.position);
			setCurrentName(panel.name);
			setShowOverlay(panel.overlay);
			// merge props from the panel config and the props passed to the function
			setCurrentProps(defu(props ?? {}, (panel as any).props ?? {}));
		}
	};

	const close = () => {
		setCurrentName("");
	};
	return { panels, current, transitionFrom, currentProps, showOverlay, open, close };
};

export default usePanels;
