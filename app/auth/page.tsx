import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgArrowLongLeft } from "react-icons/cg";
import { BaseHeading, BaseParagraph, BaseThemeToggle } from "@shuriken-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import LoginForm from "@/lib/forms/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login",
	description: "For authentication and sign in",
	authors: [{ name: "Fahim" }],
};

const Auth = () => {
	return (
		<div className="dark:bg-muted-800 flex min-h-screen bg-white">
			<div className="relative flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none">
				<div className="dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white">
					<div className="flex w-full items-center justify-between">
						<Link
							href="/dashboards"
							className="text-muted-400 hover:text-primary-500 flex items-center gap-2 font-sans font-medium transition-colors duration-300">
							<CgArrowLongLeft className="h-5 w-5" />
							<span>Back to Home</span>
						</Link>
						{/* Theme button */}
						<BaseThemeToggle />
					</div>
					<div>
						<BaseHeading as="h2" size="3xl" lead="relaxed" weight="medium" className="mt-6">
							Welcome back.
						</BaseHeading>
						<BaseParagraph size="sm" className="text-muted-400 mb-6">
							Login with social media or your credentials
						</BaseParagraph>
						{/* Social Sign Up Buttons	 */}
						<div className="flex flex-wrap justify-between gap-4">
							{/* Google button */}
							<button className="dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 nui-focus relative inline-flex grow items-center justify-center gap-2 rounded border bg-white px-6 py-4 dark:text-white">
								<FcGoogle className="h-5 w-5" />
								<div>Login with Google</div>
							</button>
							{/* Twitter button */}
							<button className="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus w-[calc(50%_-_0.5rem)] cursor-pointer rounded px-5 py-4 text-center transition-colors duration-300 md:w-auto">
								<FaTwitter className="mx-auto h-4 w-4" />
							</button>
							{/* Linkedin button */}
							<button className="bg-muted-200 dark:bg-muted-700 hover:bg-muted-100 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus w-[calc(50%_-_0.5rem)] cursor-pointer rounded px-5 py-4 text-center transition-colors duration-300 md:w-auto">
								<FaLinkedinIn className="mx-auto h-4 w-4" />
							</button>
						</div>
						{/* 'or' divider		 */}
						<div className="flex-100 mt-8 flex items-center">
							<hr className="border-muted-200 dark:border-muted-700 flex-auto border-t-2" />
							<span className="text-muted-600 dark:text-muted-300 px-4 font-sans font-light">
								OR
							</span>
							<hr className="border-muted-200 dark:border-muted-700 flex-auto border-t-2" />
						</div>
					</div>
					<LoginForm />
				</div>
			</div>
			<div className="bg-muted-100 dark:bg-muted-900 relative hidden w-0 flex-1 items-center justify-center lg:flex lg:w-3/5">
				<div className="mx-auto w-full max-w-4xl">
					<Image
						className="max-w-md mx-auto"
						src="/img/illustrations/magician.svg"
						alt=""
						width="500"
						height="500"
					/>
				</div>
			</div>
		</div>
	);
};

export default Auth;
