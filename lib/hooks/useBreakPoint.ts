import { useMediaQuery } from "react-responsive";
import tailwindConfig from "@/tailwind.config"; // Your tailwind config
import resolveConfig from "tailwindcss/resolveConfig";
import { Config } from "tailwindcss/types/config";

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);
const breakpoints = fullConfig?.theme?.screens;

type BreakpointKey = keyof typeof breakpoints;

export default function useBreakPoint<K extends BreakpointKey>(breakpointKey: K) {
	const bool = useMediaQuery({
		query: `(min-width: ${breakpoints[breakpointKey]})`,
	});
	const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
	type Key = `is${Capitalize<K>}`;
	return {
		[`is${capitalizedKey}`]: bool,
	} as Record<Key, boolean>;
}
