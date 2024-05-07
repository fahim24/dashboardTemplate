"use client";
// import usePanels from "@/lib/hooks/usePanels";
import Image from "next/image";
import React from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import usePanels from "@/lib/hooks/usePanels";

const PanelLanguage = () => {
	const { close } = usePanels();
	console.log("PanelLanguage");

	return (
		<>
			<div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white">
				<div className="flex h-16 w-full items-center justify-between px-10">
					<h2 className="font-heading text-muted-700 text-lg font-semibold dark:text-white">
						Select language
					</h2>
					<button
						type="button"
						className="text-muted-400 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white"
						onClick={() => close()}>
						<FaChevronRight className="size-6" />
					</button>
				</div>

				<div className="relative h-[calc(100%_-_64px)] w-full px-10">
					<div className="grid grid-cols-3 py-6">
						{/* <!-- Radio box --> */}
						<div className="relative my-4 flex items-center justify-center">
							<div className="relative">
								<input
									type="radio"
									name="language_selection"
									className="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"
									checked
								/>
								<div className="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300">
									<Image
										className="h-10 w-10 rounded-full"
										src="/img/icons/flags/united-states-of-america.svg"
										alt="flag icon"
										width={40}
										height={40}
									/>
								</div>
								<div className="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">
									<FaCheck className="h-3 w-3" />
								</div>
							</div>
						</div>
						{/* <!-- Radio box --> */}
						<div className="relative my-4 flex items-center justify-center">
							<div className="relative">
								<input
									type="radio"
									name="language_selection"
									className="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"
								/>
								<div className="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300">
									<Image
										className="h-10 w-10 rounded-full"
										src="/img/icons/flags/france.svg"
										alt="flag icon"
										width={40}
										height={40}
									/>
								</div>
								<div className="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">
									<FaCheck className="h-3 w-3" />
								</div>
							</div>
						</div>
						{/* <!-- Radio box --> */}
						<div className="relative my-4 flex items-center justify-center">
							<div className="relative">
								<input
									type="radio"
									name="language_selection"
									className="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"
								/>
								<div className="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300">
									<Image
										className="h-10 w-10 rounded-full"
										src="/img/icons/flags/spain.svg"
										alt="flag icon"
										width={40}
										height={40}
									/>
								</div>
								<div className="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">
									<FaCheck className="h-3 w-3" />
								</div>
							</div>
						</div>
						{/* <!-- Radio box --> */}
						<div className="relative my-4 flex items-center justify-center">
							<div className="relative">
								<input
									type="radio"
									name="language_selection"
									className="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"
								/>
								<div className="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300">
									<Image
										className="h-10 w-10 rounded-full"
										src="/img/icons/flags/germany.svg"
										alt="flag icon"
									/>
								</div>
								<div className="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">
									<FaCheck className="h-3 w-3" />
								</div>
							</div>
						</div>
						{/* <!-- Radio box --> */}
						<div className="relative my-4 flex items-center justify-center">
							<div className="relative">
								<input
									type="radio"
									name="language_selection"
									className="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"
								/>
								<div className="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300">
									<Image
										className="h-10 w-10 rounded-full"
										src="/img/icons/flags/mexico.svg"
										alt="flag icon"
										width={40}
										height={40}
									/>
								</div>
								<div className="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">
									<FaCheck className="h-3 w-3" />
								</div>
							</div>
						</div>
						{/* <!-- Radio box --> */}
						<div className="relative my-4 flex items-center justify-center">
							<div className="relative">
								<input
									type="radio"
									name="language_selection"
									className="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"
								/>
								<div className="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300">
									<Image
										className="h-10 w-10 rounded-full"
										src="/img/icons/flags/china.svg"
										alt="flag icon"
										width={40}
										height={40}
									/>
								</div>
								<div className="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">
									<FaCheck className="h-3 w-3" />
								</div>
							</div>
						</div>
					</div>

					<div>
						<Image
							src="/img/illustrations/translation.svg"
							className="mx-auto w-full max-w-[280px] dark:hidden"
							alt="illustration"
						/>
						<Image
							src="/img/illustrations/translation-dark.svg"
							className="mx-auto hidden w-full max-w-[280px] dark:block"
							alt="illustration"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PanelLanguage;
