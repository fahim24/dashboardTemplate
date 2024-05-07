import React from "react";
import Link from "next/link";
import Logo from "@/lib/logo/Logo";
import { BaseHeading, BaseMessage, BaseParagraph, BaseThemeToggle } from "@shuriken-ui/react";
import PasswordRecoverForm from "@/lib/forms/PasswordRecoverForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Recover Password",
	description: "For password recovery",
	authors: [{ name: "Fahim" }],
};

const AuthRecover = () => {
	return (
		<div className="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4">
			<div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
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
			<div className="flex w-full items-center justify-center">
				<div className="relative mx-auto w-full max-w-2xl">
					{/* <!--Form--> */}
					<div className="me-auto ms-auto mt-4 w-full">
						<div className="me-auto ms-auto mt-4 w-full max-w-md">
							<div className="text-center">
								<BaseHeading as="h2" size="3xl" weight="medium">
									Recover Password
								</BaseHeading>
								<BaseParagraph size="sm" className="text-muted-400 mb-6">
									Follow the instuctions sent to your email address
								</BaseParagraph>
							</div>
							<PasswordRecoverForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthRecover;
