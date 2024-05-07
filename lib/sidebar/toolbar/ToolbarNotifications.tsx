import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiBellDuotone } from "react-icons/pi";

const ToolbarNotifications = () => {
	return (
		<>
			<div className="group inline-flex items-center justify-center text-right">
				<Menu as="div" className="relative h-9 w-9 text-left">
					{({ close, open }) => (
						<>
							<Menu.Button as="div">
								<button
									type="button"
									className="group-hover:ring-muted-200 dark:group-hover:ring-muted-700 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4">
									<span className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex h-9 w-9 items-center justify-center rounded-full border bg-white">
										<PiBellDuotone className="text-muted-400 size-5" />
									</span>
								</button>
							</Menu.Button>

							<Transition
								enter="transition duration-100 ease-out"
								enterFrom="transform scale-95 opacity-0"
								enterTo="transform scale-100 opacity-100"
								leave="transition duration-75 ease-in"
								leaveFrom="transform scale-100 opacity-100"
								leaveTo="transform scale-95 opacity-0">
								<Menu.Items className="divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-72 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none">
									<div className="p-4">
										<div className="relative flex items-center justify-between">
											<h4 className="font-heading text-muted-500 dark:text-muted-200 text-xs uppercase">
												Notifications
											</h4>
											<Link
												href="#"
												className="font-alt text-primary-500 text-sm font-semibold"
												onClick={() => close()}>
												View All
											</Link>
										</div>
									</div>
									<div className="p-4">
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
													<div className="relative inline-flex size-9 items-center justify-center rounded-full">
														<Image
															src="/img/avatars/12.svg"
															className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
															alt=""
															width={40}
															height={40}
														/>
													</div>
													<div className="ms-2">
														<h6 className="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
															Helen Mariakis
															<span className="text-muted-500 dark:text-muted-400 font-normal">
																left a comment
															</span>
														</h6>
														<p className="text-muted-400 font-sans text-xs">1 hour ago</p>
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
													<div className="relative inline-flex size-9 items-center justify-center rounded-full">
														<Image
															src="/img/avatars/19.svg"
															className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
															alt=""
															width={40}
															height={40}
														/>
													</div>
													<div className="ms-2">
														<h6 className="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
															Clarissa Perez
															<span className="text-muted-500 dark:text-muted-400 font-normal">
																uploaded a file
															</span>
														</h6>
														<p className="text-muted-400 font-sans text-xs">2 hours ago</p>
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
													<div className="relative inline-flex size-9 items-center justify-center rounded-full">
														<Image
															src="/img/avatars/3.svg"
															className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
															alt=""
															width={40}
															height={40}
														/>
													</div>
													<div className="ms-2">
														<h6 className="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
															Mike Miller
															<span className="text-muted-500 dark:text-muted-400 font-normal">
																left a comment
															</span>
														</h6>
														<p className="text-muted-400 font-sans text-xs">3 hours ago</p>
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
													<div className="relative inline-flex size-9 items-center justify-center rounded-full">
														<Image
															src="/img/avatars/4.svg"
															className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
															alt=""
															width={40}
															height={40}
														/>
													</div>
													<div className="ms-2">
														<h6 className="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
															Lana Henriks
															<span className="text-muted-500 dark:text-muted-400 font-normal">
																sent you a message
															</span>
														</h6>
														<p className="text-muted-400 font-sans text-xs">Yesterday</p>
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
													<div className="relative inline-flex size-9 items-center justify-center rounded-full">
														<Image
															src="/img/avatars/8.svg"
															className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
															alt=""
															width={40}
															height={40}
														/>
													</div>
													<div className="ms-2">
														<h6 className="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
															Dan Walker
															<span className="text-muted-500 dark:text-muted-400 font-normal">
																left a comment
															</span>
														</h6>
														<p className="text-muted-400 font-sans text-xs">Yesterday</p>
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

export default ToolbarNotifications;
