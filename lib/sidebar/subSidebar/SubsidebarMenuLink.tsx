import React from "react";
import { MenuGroupLink } from "./SubsidebarMenu";
import Link from "next/link";
import useSidebar from "@/lib/hooks/useSidebar";
import useBreakPoint from "@/lib/hooks/useBreakPoint";

const SubsidebarMenuLink = ({ group }: { group: MenuGroupLink }) => {
	const { toggle } = useSidebar();
	const { isLg } = useBreakPoint("lg");

	function onClick() {
		if (isLg) {
			return;
		}

		toggle();
	}
	return (
		<>
			<li className="mb-1 flex min-h-[2rem] items-center">
				<Link
					href={group?.to}
					className="nui-focus text-muted-400 hover:text-primary-500 flex w-full items-center transition-colors duration-300"
					onClick={() => onClick()}>
					<span className="font-sans text-sm">{group.name}</span>
				</Link>
			</li>
		</>
	);
};

export default SubsidebarMenuLink;
