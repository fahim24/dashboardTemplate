"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { BaseButton, BaseHeading, BaseParagraph } from "@shuriken-ui/react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { PiFingerprintDuotone, PiAtDuotone, PiLockDuotone, PiCheck } from "react-icons/pi";
import { GoEye, GoEyeClosed } from "react-icons/go";
import PasswordStrength from "@/components/PasswordStrength";

const validationSchema = Yup.object({
	username: Yup.string()
		.min(3, "Username must be at least 3 characters")
		.required("A username is required"),
	email: Yup.string().email("Invalid email address").required("A valid email is required"),
	password: Yup.string()
		.min(6, "Password must contain at least 6 characters")
		.matches(/[a-z]/, "Password must contain at least one lowercase letter")
		.matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
		.matches(/[0-9]/, "Password must contain at least 1 number")
		.matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least 1 special character")
		.required("A password is required")
		.test("password-contains-email", "Password cannot contain your email", function (value) {
			const email = this.parent.email || "";
			if (value && email && value.includes(email)) {
				return false;
			}
			return true;
		}),

	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords do not match")
		.required("Confirm password is required"),
});

type InputValues = {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
};

const SignupForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();
	const formik = useFormik<InputValues>({
		initialValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values, actions) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				actions.setSubmitting(false);
			}, 1000);
			router.push("/dashboards");
		},
	});

	return (
		<>
			<form method="POST" className="mx-auto w-full max-w-xs" onSubmit={formik.handleSubmit}>
				<BaseHeading as="h2" size="3xl" weight="medium">
					Welcome to SiteName
				</BaseHeading>
				<BaseParagraph size="sm" className="text-muted-400 mb-6">
					Let&apos;s start by creating you account
				</BaseParagraph>
				<div className="mb-4 space-y-3">
					{/* Name Input */}

					<div
						className={`nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-lg nui-has-icon ${
							formik.touched.username && formik.errors.username ? "nui-input-error" : ""
						} `}>
						<div className="nui-input-outer">
							<input
								id="username"
								name="username"
								className="nui-input"
								type="text"
								placeholder="Username"
								value={formik.values.username}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<div className="nui-input-icon">
								<PiFingerprintDuotone />
							</div>
						</div>
						{formik.touched.username && formik.errors.username ? (
							<span className="nui-input-help-text text-danger-500">{formik.errors.username}</span>
						) : null}
					</div>
					{/* Email Input */}
					<div
						className={`nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-lg nui-has-icon ${
							formik.touched.email && formik.errors.email ? "nui-input-error" : ""
						} `}>
						<div className="nui-input-outer">
							<input
								id="email"
								name="email"
								className="nui-input"
								type="email"
								placeholder="Email address"
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<div className="nui-input-icon">
								<PiAtDuotone />
							</div>
						</div>
						{formik.touched.email && formik.errors.email ? (
							<span className="nui-input-help-text text-danger-500">{formik.errors.email}</span>
						) : null}
					</div>
					{/* Password Input */}
					<div
						className={`nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-lg nui-has-icon ${
							formik.touched.password && formik.errors.password ? "nui-input-error" : ""
						} `}>
						<div className="nui-input-outer">
							<input
								id="password"
								name="password"
								className="nui-input !pe-12"
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<div className="nui-input-icon">
								<PiLockDuotone />
							</div>
							<button
								className="leading-0 text-muted-400 peer-focus-within:text-primary-500 nui-focus absolute right-0 top-0 flex size-10 items-center justify-center text-center text-xl disabled:cursor-not-allowed [&amp;_.nui-text-button]:rounded-s-xl"
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								data-nui-tooltip={`${showPassword ? "Hide" : "Show"} password`}>
								<div className="relative flex size-full items-center justify-center">
									{showPassword ? <GoEye /> : <GoEyeClosed />}
								</div>
							</button>
						</div>
						{formik.touched.password && formik.errors.password ? (
							<span className="nui-input-help-text text-danger-500">{formik.errors.password}</span>
						) : null}
					</div>
					<PasswordStrength
						value={formik.values.password}
						minLength={6}
						touched={formik.touched.password}
					/>
					{/* Confirm password */}
					<div
						className={`nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-lg nui-has-icon ${
							formik.touched.confirmPassword && formik.errors.confirmPassword
								? "nui-input-error"
								: ""
						} `}>
						<div className="nui-input-outer">
							<input
								id="confirmPassword"
								name="confirmPassword"
								className="nui-input "
								type="password"
								placeholder="Confirm Password"
								value={formik.values.confirmPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<div className="nui-input-icon">
								<PiCheck />
							</div>
						</div>
						{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
							<span className="nui-input-help-text text-danger-500">
								{formik.errors.confirmPassword}
							</span>
						) : null}
					</div>

					{/* Submit */}
					<div className="mt-6">
						<div className="block w-full rounded-md shadow-sm">
							<BaseButton
								disabled={formik.isSubmitting}
								loading={formik.isSubmitting}
								rounded="lg"
								type="submit"
								color="primary"
								className="!h-11 w-full">
								Create Account
							</BaseButton>
						</div>
					</div>

					{/* Create New Link */}
					<p className="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5">
						<span>Have an account?</span>
						<Link
							href="/auth"
							className="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline focus:underline focus:outline-none">
							Login here
						</Link>
					</p>
				</div>
			</form>
		</>
	);
};

export default SignupForm;
