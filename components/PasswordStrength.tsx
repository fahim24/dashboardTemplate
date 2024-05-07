import React from "react";
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";

type PasswordStrengthProps = {
	value: string;
	minLength: number;
	touched: boolean | undefined;
};

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ value, minLength, touched }) => {
	const hasUpperChar = () => /[A-Z]/.test(value) ?? false;
	const hasLowerChar = () => /[a-z]/.test(value) ?? false;
	const hasSpecialChar = () => /[!"#$%&\'()*+,-.\/:;<=>?@[\\\]\^_`{\|}~]/.test(value) ?? false;
	const hasNumberChar = () => /[0-9]/.test(value) ?? false;
	const hasMinLength = () => value.length >= minLength ?? false;

	const checks = [
		{
			label: `Contains minimum ${minLength} characters`,
			valid: hasMinLength(),
		},
		{
			label: "Contains lowercase characters",
			valid: hasLowerChar(),
		},
		{
			label: "Contains uppercase characters",
			valid: hasUpperChar(),
		},
		{
			label: "Contains numbers",
			valid: hasNumberChar(),
		},
		{
			label: "Contains special characters",
			valid: hasSpecialChar(),
		},
	];
	return (
		<>
			<div className="group/password-strength relative cursor-pointer">
				<div className="border-muted-200 dark:border-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 dark:bg-muted-800 pointer-events-none absolute left-0 top-4 z-20 rounded-lg border bg-white p-6 opacity-0 shadow-xl transition-opacity duration-300 group-hover/password-strength:pointer-events-auto group-hover/password-strength:opacity-100">
					<ul className="flex flex-col gap-4">
						{checks.map((check) => (
							<li key={check.label} className="flex items-center justify-between gap-6">
								<span
									className={`${
										check.valid ? "dark:text-slate-200" : "dark:text-slate-350 font-semibold"
									} grow text-xs dark:text-slate-400`}>
									{check.label}
								</span>
								<span className="w-7">
									{check.valid ? (
										<IoIosCheckmarkCircleOutline className="text-success-400 dark:text-success-500 h-4 w-4" />
									) : (
										<IoIosCloseCircleOutline className="text-danger-400 dark:text-danger-500 h-4 w-4" />
									)}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className="-mx-1 flex">
					{checks.map((check) => (
						<div key={check.label} className="w-1/5 px-1">
							<div
								className={`${
									touched
										? check.valid
											? "bg-success-500"
											: "bg-danger-500"
										: "bg-muted-200 dark:bg-muted-700"
								} h-2 rounded-xl transition-colors`}
								data-nui-tooltip={check.label.replace("Contains", "")}></div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default PasswordStrength;
