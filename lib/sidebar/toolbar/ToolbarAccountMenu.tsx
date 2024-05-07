import { Menu, Transition } from "@headlessui/react";
import { BaseButton } from "@shuriken-ui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const ToolbarAccountMenu = () => {
	return (
		<>
			<div className="group inline-flex items-center justify-center text-right">
				<Menu as="div" className="relative h-9 w-9 text-left">
					{({ close, open }) => (
						<>
							<Menu.Button as="div">
								<button
									type="button"
									className="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4">
									<div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full">
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
								<Menu.Items className="divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-64 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none">
									<div className="p-6 text-center">
										<div className="relative mx-auto flex size-20 items-center justify-center rounded-full">
											<Image
												src="/img/avatars/2.svg"
												className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
												alt=""
												width={80}
												height={80}
											/>
										</div>
										<div className="mt-3">
											<h6 className="font-heading text-muted-800 text-sm font-medium dark:text-white">
												Maya Rosselini
											</h6>
											<p className="text-muted-400 mb-4 font-sans text-xs">maya@tairo.io</p>
											<BaseButton
												href="/layouts/profile-edit"
												rounded="lg"
												className="nui-button-md w-full"
												onClick={() => close()}>
												Manage Account
											</BaseButton>
										</div>
									</div>
									<div className="px-6 py-1.5">
										<Menu.Item as="div">
											{({ active }) => (
												<Link
													href="#"
													className={`group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 ${
														active
															? "bg-muted-100 dark:bg-muted-700 text-primary-500"
															: "text-muted-500"
													}`}
													onClick={() => close()}>
													<div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full">
														<Image
															src="/img/avatars/3.svg"
															className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
															alt=""
															width={40}
															height={40}
														/>
													</div>
													<div className="ms-2">
														<h6 className="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white">
															Mike Miller
														</h6>
														<p className="text-muted-400 font-sans text-xs">mike@tairo.io</p>
													</div>
												</Link>
											)}
										</Menu.Item>
										<Menu.Item as="div">
											{({ active }) => (
												<Link
													href="#"
													className={`group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 ${
														active
															? "bg-muted-100 dark:bg-muted-700 text-primary-500"
															: "text-muted-500"
													}`}
													onClick={() => close()}>
													<div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full">
														<Image
															src="/img/avatars/9.svg"
															className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
															alt=""
															width={40}
															height={40}
														/>
													</div>
													<div className="ms-2">
														<h6 className="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white">
															Claire Baker
														</h6>
														<p className="text-muted-400 font-sans text-xs">claire@tairo.io</p>
													</div>
												</Link>
											)}
										</Menu.Item>
										<Menu.Item as="div">
											{({ active }) => (
												<Link
													href="#"
													className={`group flex w-full items-center rounded-md p-2 text-sm transition-colors duration-300 ${
														active
															? "bg-muted-100 dark:bg-muted-700 text-primary-500"
															: "text-muted-500"
													}`}
													onClick={() => close()}>
													<div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full">
														<Image
															src="/img/avatars/14.svg"
															className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
															alt=""
															width={40}
															height={40}
														/>
													</div>
													<div className="ms-2">
														<h6 className="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white">
															Alan Baxter
														</h6>
														<p className="text-muted-400 font-sans text-xs">alan@tairo.io</p>
													</div>
												</Link>
											)}
										</Menu.Item>
									</div>

									<div className="p-6">
										<BaseButton
											onClick={() => close()}
											rounded="lg"
											className="nui-button-md w-full">
											Logout
										</BaseButton>
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

export default ToolbarAccountMenu;
