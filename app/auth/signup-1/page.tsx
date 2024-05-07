import SignupForm from "@/lib/forms/SignupForm";
import Logo from "@/lib/logo/Logo";
import {
	BaseButton,
	BaseHeading,
	BaseParagraph,
	BaseText,
	BaseThemeToggle,
} from "@shuriken-ui/react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
	title: "Signup",
	description: "For authentication and sign up",
	authors: [{ name: "Fahim" }],
};

const SignUp1 = () => {
	return (
		<div className="h-screen md:flex">
			<div className="from-primary-900 to-primary-500 i group relative hidden w-1/2 items-center justify-around overflow-hidden bg-gradient-to-tr md:flex">
				<div className="mx-auto max-w-xs text-center">
					<BaseHeading as="h2" size="3xl" weight="medium" className="text-white">
						Have an Account?
					</BaseHeading>
					<BaseParagraph size="sm" className="text-muted-200 mb-3">
						No need to waste time on this page, let&apos;s take you back to your account
					</BaseParagraph>
					<BaseButton href="/auth" rounded="lg" className="w-full py-2">
						Login to Account
					</BaseButton>
				</div>
				<div className="bg-muted-200/20 absolute -start-6 -top-6 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-72"></div>
				<div className="bg-muted-200/20 absolute -top-12 start-20 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48"></div>
				<div className="bg-muted-200/20 absolute -start-7 top-24 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-40"></div>

				<div className="bg-muted-200/20 absolute -bottom-6 -end-6 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-72"></div>
				<div className="bg-muted-200/20 absolute -bottom-12 end-20 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48"></div>
				<div className="bg-muted-200/20 absolute -end-7 bottom-24 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-40"></div>
			</div>
			<div className="dark:bg-muted-900 flex flex-col items-center justify-between bg-white py-10 md:w-1/2">
				<div className="mx-auto flex w-full max-w-xs items-center justify-between">
					<Link
						href="/dashboards"
						className="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300">
						<div className="h-10 w-10">
							<Logo />
						</div>
					</Link>
					<div>
						<BaseThemeToggle />
					</div>
				</div>
				<SignupForm />

				<div className="text-center text-muted-400">
					<BaseText size="sm">© {new Date().getFullYear()} SiteName. All rights reserved.</BaseText>
				</div>
			</div>
		</div>
	);
};

export default SignUp1;
