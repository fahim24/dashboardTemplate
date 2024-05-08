import { BaseButtonIcon, BaseHeading, BaseParagraph } from "@shuriken-ui/react";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import Image from "next/image";

const TrendingSkills = () => {
	const skills = [
		{
			id: 0,
			name: "Vue JS",
			count: 149,
			icon: "/img/icons/logos/vue.svg",
		},
		{
			id: 1,
			name: "React JS",
			count: 117,
			icon: "/img/icons/logos/react.svg",
		},
		{
			id: 2,
			name: "Nuxt",
			count: 94,
			icon: "/img/icons/logos/nuxt.svg",
		},
		{
			id: 4,
			name: "Tailwind CSS",
			count: 82,
			icon: "/img/icons/logos/tailwindcss.svg",
		},
	];

	return (
		<div className="mb-2 space-y-5">
			{skills.map((skill) => (
				<div key={skill.id} className="flex items-center gap-3">
					<div className="border-muted-200 dark:border-muted-700 flex h-10 w-10 items-center justify-center rounded-full border">
						<Image src={skill.icon} className="h-5 w-5" alt="Icon" width={20} height={20} />
					</div>
					<div>
						<BaseHeading
							as="h4"
							size="sm"
							weight="light"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>{skill.name}</span>
						</BaseHeading>
						<BaseParagraph size="xs">
							<span className="text-muted-400">Used by {skill.count} candidates</span>
						</BaseParagraph>
					</div>
					<div className="ms-auto flex items-center">
						<BaseButtonIcon rounded="lg" color="muted" className="scale-75">
							<LuArrowRight className="h-5 w-5" />
						</BaseButtonIcon>
					</div>
				</div>
			))}
		</div>
	);
};

export default TrendingSkills;
