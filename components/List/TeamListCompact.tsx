import { BaseAvatar, BaseButtonIcon, BaseHeading, BaseParagraph } from "@shuriken-ui/react";
import React from "react";
import { PiPhoneDuotone, PiVideoCameraDuotone } from "react-icons/pi";

const TeamListCompact = ({ actions }: { actions: boolean }) => {
	const members = [
		{
			id: 0,
			firstName: "Clarke",
			lastName: "Smith",
			image: "/img/avatars/3.svg",
			text: "EC",
			role: "UI/UX designer",
		},
		{
			id: 1,
			firstName: "Sara",
			lastName: "Connor",
			image: undefined,
			text: "SC",
			role: "Frontend developer",
		},
		{
			id: 2,
			firstName: "Tara",
			lastName: "Svenson",
			image: "/img/avatars/4.svg",
			text: "TS",
			role: "Software architect",
		},
		{
			id: 3,
			firstName: "Naomi",
			lastName: "Liversky",
			image: undefined,
			text: "NL",
			role: "UI/UX designer",
		},
	];
	return (
		<div className="mb-2 space-y-5">
			{members.map((member) => (
				<div key={member.id} className="flex items-center gap-3">
					<BaseAvatar
						src={member.image}
						text={member.text}
						className="bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
					/>
					<div>
						<BaseHeading
							as="h4"
							size="sm"
							weight="light"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>
								{member.firstName} {member.lastName.slice(0, 1)}.
							</span>
						</BaseHeading>
						<BaseParagraph size="xs">
							<span className="text-muted-400">{member.role}</span>
						</BaseParagraph>
					</div>
					{actions && (
						<div className="ms-auto flex items-center">
							<BaseButtonIcon rounded="lg" color="muted" className="scale-75">
								<PiPhoneDuotone className="h-5 w-5" />
							</BaseButtonIcon>
							<BaseButtonIcon rounded="lg" color="muted" className="scale-75">
								<PiVideoCameraDuotone className="h-5 w-5" />
							</BaseButtonIcon>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default TeamListCompact;
