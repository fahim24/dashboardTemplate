import { BaseAvatar, BaseButton, BaseCard, BaseHeading, BaseParagraph } from "@shuriken-ui/react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { PiCrownDuotone } from "react-icons/pi";
import Image from "next/image";
import ProjectListCompact from "@/components/List/ProjectListCompact";
import AreaTaskCompletionChart from "@/components/charts/AreaTaskCompletionChart";
import BarTeamEfficiencyChart from "@/components/charts/BarTeamEfficiencyChart";
import TeamListCompact from "@/components/List/TeamListCompact";
import TodoListCompact from "@/components/List/TodoListCompact";

export const metadata: Metadata = {
	title: "My Projects",
	description: "My Dashboard",
};

const page = () => {
	return (
		<div>
			{/* <!-- Grid --> */}
			<div className="grid grid-cols-12 gap-6">
				{/* <!--Grid column--> */}
				<div className="col-span-12">
					{/* <!-- Header --> */}
					<BaseCard className="p-5">
						<div className="flex flex-col items-center md:flex-row">
							<div className="ltablet:flex-row ltablet:items-center flex flex-col items-center gap-4 text-center md:items-start md:text-left lg:flex-row lg:items-center">
								<BaseAvatar
									src="/img/avatars/2.svg"
									size="xl"
									badgeSrc="/img/icons/flags/usa.svg"
								/>
								<div className="text-center md:text-left">
									<BaseHeading
										as="h2"
										size="xl"
										weight="light"
										lead="tight"
										className="text-muted-800 dark:text-white">
										<span>Welcome back, Maya</span>
									</BaseHeading>
									<BaseParagraph>
										<span className="text-muted-400">It&apos;s nice to see you again</span>
									</BaseParagraph>
								</div>
							</div>

							<div className="ltablet:flex-row ltablet:items-center ms-auto flex flex-col gap-6 text-center md:text-left lg:flex-row lg:items-center">
								<div className="flex-1">
									<BaseHeading
										as="h3"
										size="3xl"
										weight="semibold"
										lead="tight"
										className="text-muted-800 dark:text-white">
										<span>
											31
											<small className="text-base font-medium">Tasks</small>
										</span>
									</BaseHeading>
									<BaseParagraph>
										<span className="text-muted-400 text-sm">Are currently pending</span>
									</BaseParagraph>
								</div>
								<BaseCard className="from-primary-600 to-primary-700 shadow-primary-500/20 relative flex flex-1 items-center justify-center bg-gradient-to-br p-5 shadow-xl">
									<div className="relative z-20 flex flex-col gap-3">
										<BaseParagraph size="sm">
											<span className="text-white/80">
												Start using our team and project management tools
											</span>
										</BaseParagraph>
										<Link
											className="font-sans text-sm text-white underline-offset-4 hover:underline"
											href="#">
											Learn More
										</Link>
									</div>
									<div className="absolute bottom-0 end-2 z-10 flex h-14 w-14 items-center justify-center">
										<PiCrownDuotone className="text-primary-900/50 h-10 w-10" />
									</div>
								</BaseCard>
							</div>
						</div>
					</BaseCard>
				</div>
				{/* <!--Grid column--> */}
				<div className="ltablet:col-span-8 col-span-12 lg:col-span-8">
					{/* <!-- Inner grid --> */}
					<div className="flex flex-col gap-6">
						{/* <!-- Project list widget --> */}
						<BaseCard className="p-6">
							<div className="mb-8 flex items-center justify-between">
								<BaseHeading
									as="h3"
									size="md"
									weight="semibold"
									lead="tight"
									className="text-muted-800 dark:text-white">
									<span>Current Projects</span>
								</BaseHeading>
								<Link
									href="#"
									className="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline">
									View All
								</Link>
							</div>
							<ProjectListCompact />
						</BaseCard>
						{/* <!-- Chart --> */}
						<BaseCard className="p-6">
							<div className="mb-6 flex items-center justify-between">
								<BaseHeading
									as="h3"
									size="md"
									weight="semibold"
									lead="tight"
									className="text-muted-800 dark:text-white">
									<span>Completion</span>
								</BaseHeading>
								<Link
									href="#"
									className="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline">
									Reports
								</Link>
							</div>
							<AreaTaskCompletionChart />
						</BaseCard>
						{/* <!-- Chart --> */}
						<BaseCard className="p-6">
							<div className="mb-6 flex items-center justify-between">
								<BaseHeading
									as="h3"
									size="md"
									weight="semibold"
									lead="tight"
									className="text-muted-800 dark:text-white">
									<span>Team Efficiency</span>
								</BaseHeading>
								<Link
									href="#"
									className="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline">
									Reports
								</Link>
							</div>
							<BarTeamEfficiencyChart />
						</BaseCard>
					</div>
				</div>
				{/* <!--Grid column--> */}
				<div className="ltablet:col-span-4 col-span-12 lg:col-span-4">
					{/* <!-- Inner grid --> */}
					<div className="ptablet:grid-cols-2 grid gap-6 lg:flex lg:flex-col">
						{/* <!-- Widget --> */}
						<BaseCard className="p-6">
							{/* <!-- Title --> */}
							<div className="mb-8 flex items-center justify-between">
								<BaseHeading
									as="h3"
									size="md"
									weight="semibold"
									lead="tight"
									className="text-muted-800 dark:text-white">
									<span>My Team</span>
								</BaseHeading>
								<Link
									href="#"
									className="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline">
									View All
								</Link>
							</div>
							<TeamListCompact actions />
						</BaseCard>
						{/* <!-- Widget --> */}
						<BaseCard className="p-6">
							{/* <!-- Title --> */}
							<div className="mb-8 flex items-center justify-between">
								<BaseHeading
									as="h3"
									size="md"
									weight="semibold"
									lead="tight"
									className="text-muted-800 dark:text-white">
									<span>Todo Today</span>
								</BaseHeading>
								<Link
									href="#"
									className="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline">
									View All
								</Link>
							</div>
							<TodoListCompact />
						</BaseCard>
						{/* <!-- Widget --> */}
						<BaseCard className="p-6">
							<div>
								<Image
									src="/img/illustrations/placeholders/flat/chart-guy.svg"
									className="block w-full dark:hidden"
									width={225}
									height={150}
									alt="Placeholder illustration"
								/>
								<Image
									src="/img/illustrations/placeholders/flat/chart-guy-dark.svg"
									className="hidden w-full dark:block"
									width={225}
									height={150}
									alt="Placeholder illustration"
								/>
								<div className="mt-4 text-center">
									<BaseHeading
										as="h4"
										size="lg"
										weight="light"
										lead="tight"
										className="text-muted-800 mb-1 dark:text-white">
										<span>Pro Freatures</span>
									</BaseHeading>
									<BaseParagraph size="sm">
										<span className="text-muted-400">
											Unlock more features and business tools by subscribing to a premium plan
										</span>
									</BaseParagraph>
									<div className="mt-4">
										<BaseButton color="primary" className="w-full nui-button-md">
											<span>Upgrade to Pro</span>
										</BaseButton>
									</div>
								</div>
							</div>
						</BaseCard>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
