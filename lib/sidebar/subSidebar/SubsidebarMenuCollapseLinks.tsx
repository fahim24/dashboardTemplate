import React, { useEffect, useRef, useState } from "react";
import { MenuGroupCollapse, MenuGroupCollapseLink } from "./SubsidebarMenu";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useSidebar } from "@/lib/hooks/useSidebar";
import useBreakPoint from "@/lib/hooks/useBreakPoint";
import { usePathname } from "next/navigation";

const SubsidebarMenuCollapseLinks = ({ group }: { group: MenuGroupCollapse }) => {
	const [open, setOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { toggle } = useSidebar();
	const { isLg } = useBreakPoint("lg");
	const pathName = usePathname();

	function onDropClick() {
		setOpen(!open);
		if (!open) {
			buttonRef?.current?.blur();
		}
	}

	function onLinkClick() {
		if (isLg) {
			return;
		}

		toggle();
	}

	const hasActiveChild =
		group?.children.some((item) => {
			if (item.exact === true) {
				return pathName === item.to;
			}

			return pathName.startsWith(item.to);
		}) || false;

	function isChildActive(link: MenuGroupCollapseLink) {
		return (link.exact && pathName === link.to) || (!link.exact && pathName.startsWith(link.to));
	}

	useEffect(() => {
		if (hasActiveChild) {
			setOpen(true);
		}
	}, [hasActiveChild]);

	//

	return (
		<>
			<li className="group mb-1 min-h-[2rem]">
				<button
					ref={buttonRef}
					className="nui-focus relative top-0.5 flex items-center w-full"
					onClick={() => onDropClick()}>
					<span className="text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300">
						{hasActiveChild && (
							<span className="bg-primary-500 absolute -start-3 top-2 h-1 w-1 rounded-full"></span>
						)}

						<span>{group.name}</span>
					</span>
					<FaChevronDown
						className={`text-muted-400 ms-auto block h-4 w-4 transition-transform duration-300 ${
							open ? "rotate-180" : "group-focus-within:rotate-180"
						}`}
					/>
				</button>

				<div
					className={`transition-all duration-150 ${
						open
							? "max-h-max opacity-100"
							: "max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100"
					}`}>
					{group?.children && (
						<ul className="py-2">
							{group.children.map((link) => (
								<li key={link.to} className="flex h-8 w-full items-center">
									<Link
										href={link.to}
										className={`nui-focus hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300 ${
											isChildActive(link) ? "text-primary-500" : "text-muted-400"
										}`}
										onClick={() => onLinkClick()}>
										<link.icon className="me-2 h-5 w-5" />
										<span className="font-sans text-xs">{link.name}</span>
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</li>
		</>
	);
};

export default SubsidebarMenuCollapseLinks;
