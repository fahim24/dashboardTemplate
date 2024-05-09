import React from "react";

import {
	BaseAvatar,
	BaseButton,
	BaseCard,
	BaseHeading,
	BaseIconBox,
	BaseParagraph,
} from "@shuriken-ui/react";
import Link from "next/link";
import {
	PiBankDuotone,
	PiCrownDuotone,
	PiHandshakeDuotone,
	PiNutDuotone,
	PiSketchLogoDuotone,
} from "react-icons/pi";
import AreaCustomerChart from "@/components/charts/AreaCustomerChart";
import RadialBarTeamChart from "@/components/charts/RadialBarTeam";
import BarProfitChart from "@/components/charts/BarProfitChart";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Activity",
	description: "My Dashboard",
};

const Dashboards = () => {
	return (
		<div>
			{/* <!-- Header --> */}
			<div className="mb-8 flex flex-col justify-between md:flex-row md:items-center">
				<div className="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full">
					<BaseAvatar src="/img/avatars/2.svg" size="lg" />
					<div>
						<BaseHeading
							as="h2"
							size="xl"
							weight="light"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>Welcome back, Maya</span>
						</BaseHeading>
						<BaseParagraph>
							<span className="text-muted-500">Happy to see you again on your dashboard.</span>
						</BaseParagraph>
					</div>
				</div>
				<div className="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">
					<BaseButton type="button" className="nui-button-md">
						<span>View Reports</span>
					</BaseButton>
					<BaseButton className="nui-button-md" type="button" color="primary">
						<span>Manage Store</span>
					</BaseButton>
				</div>
			</div>
			{/* <!-- Grid --> */}
			<div className="grid grid-cols-12 gap-6">
				{/* <!-- Quick stats --> */}
				<div className="ltablet:col-span-6 col-span-12 lg:col-span-6">
					<BaseCard className="p-6">
						<div className="mb-6">
							<BaseHeading
								as="h3"
								size="md"
								weight="semibold"
								lead="tight"
								className="text-muted-800 dark:text-white">
								<span>Your Quick Stats</span>
							</BaseHeading>
						</div>
						<div className="grid gap-4 md:grid-cols-2">
							{/* <!-- Grid item --> */}
							<div className="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10">
								<BaseIconBox
									rounded="full"
									size="md"
									color="none"
									className="bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2">
									<PiNutDuotone className="size-5" />
								</BaseIconBox>
								<div>
									<BaseHeading
										as="h2"
										size="md"
										weight="semibold"
										lead="tight"
										className="text-muted-800 dark:text-white">
										<span>2,870</span>
									</BaseHeading>
									<BaseParagraph size="sm">
										<span className="text-muted-500 dark:text-muted-400">Sales this month</span>
									</BaseParagraph>
								</div>
							</div>
							{/* <!-- Grid item --> */}
							<div className="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10">
								<BaseIconBox
									rounded="full"
									size="md"
									color="none"
									className="bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400">
									<PiHandshakeDuotone className="size-5" />
								</BaseIconBox>
								<div>
									<BaseHeading
										as="h2"
										size="md"
										weight="semibold"
										lead="tight"
										className="text-muted-800 dark:text-white">
										<span>159</span>
									</BaseHeading>
									<BaseParagraph size="sm">
										<span className="text-muted-500 dark:text-muted-400">New users</span>
									</BaseParagraph>
								</div>
							</div>
							{/* <!-- Grid item --> */}
							<div className="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10">
								<BaseIconBox
									size="md"
									color="none"
									className="bg-green-100 text-green-500 dark:border-2 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400"
									rounded="full">
									<PiSketchLogoDuotone className="size-5" />
								</BaseIconBox>
								<div>
									<BaseHeading
										as="h2"
										size="md"
										weight="semibold"
										lead="tight"
										className="text-muted-800 dark:text-white">
										<span>$429.18</span>
									</BaseHeading>
									<BaseParagraph size="sm">
										<span className="text-muted-500 dark:text-muted-400">Earned today</span>
									</BaseParagraph>
								</div>
							</div>
							{/* <!-- Grid item --> */}
							<div className="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10">
								<BaseIconBox
									size="md"
									className="bg-indigo-100 text-indigo-500 dark:border-2 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400"
									rounded="full"
									color="none">
									<PiBankDuotone className="size-5" />
								</BaseIconBox>
								<div>
									<BaseHeading
										as="h2"
										size="md"
										weight="semibold"
										lead="tight"
										className="text-muted-800 dark:text-white">
										<span>$6816.32</span>
									</BaseHeading>
									<BaseParagraph size="sm">
										<span className="text-muted-500 dark:text-muted-400">Total balance</span>
									</BaseParagraph>
								</div>
							</div>
						</div>
					</BaseCard>
				</div>
				{/* <!-- Area Chart card --> */}
				<div className="ltablet:col-span-6 col-span-12 lg:col-span-6">
					<BaseCard className="p-6">
						{/* <!-- Title --> */}
						<div className="mb-6">
							<BaseHeading
								as="h3"
								size="md"
								weight="semibold"
								lead="tight"
								className="text-muted-800 dark:text-white">
								<span>Customers</span>
							</BaseHeading>
						</div>

						<AreaCustomerChart />
						{/* <AddonApexcharts v-bind="areaCustomers" className="-ms-4" /> */}
					</BaseCard>
				</div>
				{/* <!-- CTA card --> */}
				<div className="ptablet:col-span-6 ltablet:col-span-4 col-span-12 lg:col-span-4">
					<BaseCard className="from-primary-600 to-primary-700 relative flex h-full items-center justify-center bg-gradient-to-br p-6">
						<div className="relative z-20 flex flex-col gap-3 py-10 text-center">
							<BaseHeading as="h4" size="lg" weight="semibold" lead="tight" className="text-white">
								<span>Hey Maya, you&apos;re doing great.</span>
							</BaseHeading>
							<BaseParagraph size="md" className="mx-auto max-w-[280px]">
								<span className="text-white/80">
									Start using our team and project management tools
								</span>
							</BaseParagraph>
							<Link className="font-sans text-white underline-offset-4 hover:underline" href="#">
								Learn More
							</Link>
						</div>
						<div className="absolute bottom-4 end-4 z-10 flex h-14 w-14 items-center justify-center">
							<PiCrownDuotone className="text-primary-900/50 size-14" />
						</div>
					</BaseCard>
				</div>
				{/* <!-- Radial Bar card --> */}
				<div className="ptablet:col-span-6 ltablet:col-span-4 col-span-12 lg:col-span-4">
					<BaseCard className="relative p-6">
						<div className="mb-6">
							<BaseHeading
								as="h3"
								size="md"
								weight="semibold"
								lead="tight"
								className="text-muted-800 dark:text-white">
								<span>Team Efficiency</span>
							</BaseHeading>
						</div>
						<div className="absolute inset-x-0 top-24 flex items-center justify-center gap-4">
							<BaseAvatar src="/img/avatars/4.svg" />
							<BaseAvatar
								text="H"
								className="bg-yellow-100 text-yellow-500 dark:bg-yellow-500 dark:text-white"
							/>
							<BaseAvatar src="/img/avatars/3.svg" />
						</div>
						<RadialBarTeamChart />
					</BaseCard>
				</div>
				{/* <!-- Bar chart card --> */}
				<div className="ltablet:col-span-4 col-span-12 lg:col-span-4">
					<BaseCard className="relative p-6">
						<div className="mb-6">
							<BaseHeading
								as="h3"
								size="md"
								weight="semibold"
								lead="tight"
								className="text-muted-800 dark:text-white">
								<span>Profit Evolution</span>
							</BaseHeading>
						</div>
						<BarProfitChart />
					</BaseCard>
				</div>
			</div>
		</div>
	);
};

export default Dashboards;
