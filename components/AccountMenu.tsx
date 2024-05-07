import { Menu, Transition } from "@headlessui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	PiBriefcaseDuotone,
	PiGearSixDuotone,
	PiUserCircleDuotone,
	PiUsersThreeDuotone,
} from "react-icons/pi";

const AccountMenu = () => {
	return (
		<>
			<div className="group inline-flex items-center justify-center text-right">
				<Menu as="div" className="relative h-10 w-10 text-left">
					{({ close, open }) => (
						<>
							<Menu.Button as="div">
								<button
									type="button"
									className="group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4">
									<div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full">
										<Image
											src="/img/avatars/2.svg"
											className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
											alt=""
											width={40}
											height={40}
										/>
									</div>
								</button>
							</Menu.Button>

							<Transition
								enter="transition duration-100 ease-out"
								enterFrom="transform scale-95 opacity-0"
								enterTo="transform scale-100 opacity-100"
								leave="transition duration-75 ease-in"
								leaveFrom="transform scale-100 opacity-100"
								leaveTo="transform scale-95 opacity-0">
								<Menu.Items
									className={`border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute mt-2 w-60 origin-bottom-right rounded-md border bg-white text-left shadow-lg focus:outline-none bottom-0 -end-64
									`}>
									{/* ${horizontal ? "top-10 end-0" : "bottom-0 -end-64"} */}
									<div className="bg-muted-50 dark:bg-muted-700/40 p-6">
										<div className="flex items-center">
											<div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full">
												<Image
													src="/img/avatars/2.svg"
													className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
													alt=""
													width={56}
													height={56}
												/>
											</div>
											<div className="ms-3">
												{/* {() => console.log("AccountMenu")} */}
												<h6 className="font-heading text-muted-800 text-sm font-medium dark:text-white">
													Maya Rosselini
												</h6>
												<p className="text-muted-400 font-sans text-xs">Product Manager</p>
											</div>
										</div>
									</div>
									<div className="p-2">
										<Menu.Item as="div">
											{({ active }) => (
												<Link
													href="/layouts/profile"
													className={`group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300 ${
														active
															? "bg-muted-100 dark:bg-muted-700 text-primary-500"
															: "text-muted-400"
													}`}
													onClick={() => close()}>
													<PiUserCircleDuotone className="h-5 w-5" />
													<div className="ms-3">
														<h6 className="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white">
															Profile
														</h6>
														<p className="text-muted-400 font-sans text-xs">View your profile</p>
													</div>
												</Link>
											)}
										</Menu.Item>
										<Menu.Item as="div">
											{({ active }) => (
												<Link
													href="/layouts/projects"
													className={`group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300 ${
														active
															? "bg-muted-100 dark:bg-muted-700 text-primary-500"
															: "text-muted-400"
													}`}
													onClick={() => close()}>
													<PiBriefcaseDuotone className="h-5 w-5" />
													<div className="ms-3">
														<h6 className="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white">
															Projects
														</h6>
														<p className="text-muted-400 font-sans text-xs">All my projects</p>
													</div>
												</Link>
											)}
										</Menu.Item>
										<Menu.Item as="div">
											{({ active }) => (
												<Link
													href="/layouts/user-grid-4"
													className={`group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300 ${
														active
															? "bg-muted-100 dark:bg-muted-700 text-primary-500"
															: "text-muted-400"
													}`}
													onClick={() => close()}>
													<PiUsersThreeDuotone className="h-5 w-5" />
													<div className="ms-3">
														<h6 className="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white">
															Team
														</h6>
														<p className="text-muted-400 font-sans text-xs">Manage my team</p>
													</div>
												</Link>
											)}
										</Menu.Item>
										<Menu.Item as="div">
											{({ active }) => (
												<Link
													href="/layouts/profile-edit"
													className={`group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300 ${
														active
															? "bg-muted-100 dark:bg-muted-700 text-primary-500"
															: "text-muted-400"
													}`}
													onClick={() => close()}>
													<PiGearSixDuotone className="h-5 w-5" />
													<div className="ms-3">
														<h6 className="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white">
															Settings
														</h6>
														<p className="text-muted-400 font-sans text-xs">Account settings</p>
													</div>
												</Link>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</>
					)}
				</Menu>
			</div>
		</>
	);
};

export default AccountMenu;
