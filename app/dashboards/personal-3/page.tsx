import AreaInterviewsChart from "@/components/charts/AreaInterviewsChart";
import TrendingSkills from "@/components/TrendingSkills";
import {
	BaseAvatar,
	BaseAvatarGroup,
	BaseButton,
	BaseButtonIcon,
	BaseCard,
	BaseHeading,
	BaseIconBox,
	BaseParagraph,
} from "@shuriken-ui/react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import {
	PiBroadcastDuotone,
	PiDoorDuotone,
	PiTimerDuotone,
	PiUserPlusDuotone,
} from "react-icons/pi";

export const metadata: Metadata = {
	title: "Interviews",
	description: "My Dashboard",
};

const page = () => {
	const candidates = [
		{
			id: 0,
			tooltip: "Adam Wrangler",
			src: "/img/avatars/15.svg",
			text: "EC",
			role: "UI/UX designer",
		},
		{
			id: 1,
			tooltip: "Jennifer Miller",
			src: "/img/avatars/5.svg",
			text: "JM",
			role: "Frontend developer",
		},
		{
			id: 2,
			tooltip: "Tara Svenson",
			src: "/img/avatars/4.svg",
			text: "TS",
			role: "Software architect",
		},
		{
			id: 3,
			tooltip: "Naomi Liversky",
			src: "",
			text: "NL",
			role: "UI/UX designer",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 gap-6">
			{/* <!--Grid item--> */}
			<div>
				<BaseCard className="bg-muted-200 flex h-full flex-col border-0 p-8" rounded="lg">
					<div className="mb-5">
						<BaseHeading
							as="h2"
							size="3xl"
							weight="light"
							lead="tight"
							className="text-muted-800 mb-2 dark:text-white">
							<span>Hi, Maya R.</span>
						</BaseHeading>
						<BaseParagraph size="sm">
							<span className="text-muted-400">
								You have 6 interviews to conduct during this week. Your current progress is great.
								Check your schedule and don&apos;t miss any activity.
							</span>
						</BaseParagraph>
					</div>
					<div className="mb-4 mt-auto flex items-center gap-2">
						<div className="text-4xl">
							<span>🎉</span>
						</div>
						<div>
							<BaseParagraph size="xs">
								<span className="text-muted-400 mb-2">Your Progress</span>
							</BaseParagraph>
							<BaseHeading
								as="h4"
								size="md"
								weight="light"
								lead="tight"
								className="text-muted-800 dark:text-white">
								<span>Outstanding</span>
							</BaseHeading>
						</div>
					</div>
					<div>
						<BaseButton color="primary" rounded="lg" className="h-11 w-full">
							<span>View Schedule</span>
						</BaseButton>
					</div>
				</BaseCard>
			</div>
			{/* <!--Grid item--> */}
			<div className="grid grid-cols-2 gap-4">
				{/* <!-- Inner item --> */}
				<BaseCard rounded="lg" className="flex items-center gap-2 p-3">
					<BaseIconBox
						size="sm"
						color="none"
						className="bg-info-100 text-info-500 dark:bg-info-500/20 dark:text-info-400 dark:border-info-500 dark:border-2"
						rounded="full">
						<PiTimerDuotone className="h-5 w-5" />
					</BaseIconBox>
					<div>
						<BaseHeading
							as="h2"
							size="sm"
							weight="semibold"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>62K</span>
						</BaseHeading>
						<BaseParagraph size="xs">
							<span className="text-muted-500 dark:text-muted-400">Minutes</span>
						</BaseParagraph>
					</div>
				</BaseCard>
				{/* <!-- Inner item --> */}
				<BaseCard rounded="lg" className="flex items-center gap-2 p-3">
					<BaseIconBox
						size="sm"
						color="none"
						className="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2"
						rounded="full">
						<PiBroadcastDuotone className="h-5 w-5" />
					</BaseIconBox>
					<div>
						<BaseHeading
							as="h2"
							size="sm"
							weight="semibold"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>263</span>
						</BaseHeading>
						<BaseParagraph size="xs">
							<span className="text-muted-500 dark:text-muted-400">Interviews</span>
						</BaseParagraph>
					</div>
				</BaseCard>
				{/* <!-- Inner item --> */}
				<BaseCard rounded="lg" className="flex items-center gap-2 p-3">
					<BaseIconBox
						size="sm"
						color="none"
						className="bg-lime-100 text-lime-500 dark:border-2 dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-400"
						rounded="full">
						<PiUserPlusDuotone className="h-5 w-5" />
					</BaseIconBox>
					<div>
						<BaseHeading
							as="h2"
							size="sm"
							weight="semibold"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>49</span>
						</BaseHeading>
						<BaseParagraph size="xs">
							<span className="text-muted-500 dark:text-muted-400">Approved</span>
						</BaseParagraph>
					</div>
				</BaseCard>
				{/* <!-- Inner item --> */}
				<BaseCard rounded="lg" className="flex items-center gap-2 p-3">
					<BaseIconBox
						size="sm"
						color="none"
						className="bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400"
						rounded="full">
						<PiDoorDuotone className="h-5 w-5" />
					</BaseIconBox>
					<div>
						<BaseHeading
							as="h2"
							size="sm"
							weight="semibold"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>214</span>
						</BaseHeading>
						<BaseParagraph size="xs">
							<span className="text-muted-500 dark:text-muted-400">Rejected</span>
						</BaseParagraph>
					</div>
				</BaseCard>
				{/* <!-- Inner item --> */}
				<div className="col-span-2">
					<div className="mt-auto flex h-full items-end justify-between pb-4">
						<div>
							<BaseHeading
								as="h2"
								size="md"
								weight="semibold"
								lead="tight"
								className="text-muted-800 dark:text-white">
								<span>Total Interviews</span>
							</BaseHeading>
							<BaseParagraph size="xs">
								<span className="text-muted-500 dark:text-muted-400">23 interviews this month</span>
							</BaseParagraph>
						</div>
						<div>
							<BaseAvatarGroup avatars={candidates} size="sm" limit={3} />
						</div>
					</div>
				</div>
			</div>
			{/* <!--Grid item--> */}
			<div>
				<BaseCard className="p-4" rounded="lg">
					<span>Calendar</span>
					{/* <Calendar
        :attributes="[
          {
            key: 'today',
            dot: true,
            bar: false,
            content: 'Today',
            customData: {},
            event: {},
            hashcode: 'today',
            highlight: false,
            order: 0,
            pinPage: false,
            popover: {},
            dates: [new Date()],
          },
        ]"
        title-position="left"
        expanded
        borderless
        transparent
        trim-weeks
        className="max-w-full rounded-xl"
      /> */}
				</BaseCard>
			</div>
			{/* <!--Grid item--> */}
			<div>
				<BaseCard className="p-6" rounded="lg">
					{/* <!-- Title --> */}
					<div className="mb-8 flex items-center justify-between">
						<BaseHeading
							as="h3"
							size="md"
							weight="semibold"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>Trending skills</span>
						</BaseHeading>
						<Link
							href="#"
							className="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline">
							View All
						</Link>
					</div>
					<TrendingSkills />
				</BaseCard>
			</div>
			{/* <!-- Grid item --> */}
			<div>
				{/* <!-- Chart --> */}
				<BaseCard rounded="lg" className="p-6">
					<div className="mb-6 flex items-center justify-between">
						<BaseHeading
							as="h3"
							size="md"
							weight="semibold"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>Interviews</span>
						</BaseHeading>
						<Link
							href="#"
							className="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline">
							Reports
						</Link>
					</div>
					<AreaInterviewsChart />
				</BaseCard>
			</div>
			{/* <!-- Grid item --> */}
			<div className="flex flex-col gap-4">
				{/* <!-- Card --> */}
				<BaseCard rounded="lg" className="flex items-center gap-3 p-4">
					<BaseAvatar src="/img/avatars/11.svg" size="md" />
					<div>
						<BaseHeading
							as="h4"
							size="sm"
							weight="light"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>Jonathan K.</span>
						</BaseHeading>
						<BaseParagraph size="xs">
							<span className="text-muted-400">8:00 am — 9:00 am</span>
						</BaseParagraph>
					</div>
					<div className="ms-auto flex items-center">
						<BaseButtonIcon rounded="lg" color="muted" className="scale-75">
							<LuArrowRight className="h-5 w-5" />
						</BaseButtonIcon>
					</div>
				</BaseCard>
				{/* <!-- Card --> */}
				<BaseCard rounded="lg" className="flex items-center gap-3 p-4">
					<BaseAvatar src="/img/avatars/16.svg" size="md" />
					<div>
						<BaseHeading
							as="h4"
							size="sm"
							weight="light"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>Erwin S.</span>
						</BaseHeading>
						<BaseParagraph size="xs">
							<span className="text-muted-400">10:30 am — 11:30 am</span>
						</BaseParagraph>
					</div>
					<div className="ms-auto flex items-center">
						<BaseButtonIcon rounded="lg" color="muted" className="scale-75">
							<LuArrowRight className="h-5 w-5" />
						</BaseButtonIcon>
					</div>
				</BaseCard>
				{/* <!-- Card --> */}
				<BaseCard rounded="lg" className="flex items-center gap-3 p-4">
					<BaseAvatar src="/img/avatars/5.svg" size="md" />
					<div>
						<BaseHeading
							as="h4"
							size="sm"
							weight="light"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>Jennifer M.</span>
						</BaseHeading>
						<BaseParagraph size="xs">
							<span className="text-muted-400">2:00 pm — 3:00 pm</span>
						</BaseParagraph>
					</div>
					<div className="ms-auto flex items-center">
						<BaseButtonIcon rounded="lg" color="muted" className="scale-75">
							<LuArrowRight className="h-5 w-5" />
						</BaseButtonIcon>
					</div>
				</BaseCard>
			</div>
		</div>
	);
};

export default page;
