"use client";
import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { BaseButton } from "@shuriken-ui/react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("A valid email is required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("A password is required"),
	trustDevice: Yup.boolean(),
});

type InputValues = {
	email: string;
	password: string;
	trustDevice: boolean;
};

const LoginForm = () => {
	const router = useRouter();
	const formik = useFormik<InputValues>({
		initialValues: {
			email: "",
			password: "",
			trustDevice: false,
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
		<div>
			<form method="POST" onSubmit={formik.handleSubmit}>
				<div className="mt-5">
					<div>
						<div className="space-y-4">
							{/* Email Input */}
							<div
								className={`nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm ${
									formik.touched.email && formik.errors.email ? "nui-input-error" : ""
								} `}>
								<label className="nui-input-label" htmlFor="email">
									Email
								</label>
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
								</div>
								{formik.touched.email && formik.errors.email ? (
									<span className="nui-input-help-text text-danger-500">{formik.errors.email}</span>
								) : null}
							</div>
							{/* Password Input */}

							<div
								className={`nui-input-wrapper nui-input-default nui-input-md nui-input-rounded-sm ${
									formik.touched.password && formik.errors.password ? "nui-input-error" : ""
								} `}>
								<label className="nui-input-label" htmlFor="password">
									Password
								</label>
								<div className="nui-input-outer">
									<input
										id="password"
										name="password"
										className="nui-input"
										type="password"
										placeholder="Password"
										value={formik.values.password}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								{formik.touched.password && formik.errors.password ? (
									<span className="nui-input-help-text text-danger-500">
										{formik.errors.password}
									</span>
								) : null}
							</div>
						</div>

						<div className="mt-6 flex items-center justify-between">
							<div className="nui-checkbox nui-checkbox-rounded-sm nui-checkbox-primary">
								<div className="nui-checkbox-outer">
									<input
										type="checkbox"
										id="trustDevice"
										name="trustDevice"
										className="nui-checkbox-input"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									<div className="nui-checkbox-inner"></div>
									<svg className="nui-icon-check" aria-hidden="true" viewBox="0 0 17 12">
										<path
											fill="currentColor"
											d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"></path>
									</svg>
								</div>
								<div className="nui-checkbox-label-wrapper">
									<label htmlFor="trustDevice" className="nui-checkbox-label-text">
										Trust for 60 days
									</label>
								</div>
							</div>

							<div className="text-xs leading-5">
								<Link
									href="/auth/recover"
									className="text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline">
									Forgot your password?
								</Link>
							</div>
						</div>

						{/* Submit */}
						<div className="mt-6">
							<div className="block w-full rounded-md shadow-sm">
								<BaseButton
									disabled={formik.isSubmitting}
									loading={formik.isSubmitting}
									type="submit"
									color="primary"
									className="!h-11 w-full">
									Sign in
								</BaseButton>
							</div>
						</div>
					</div>
					{/* Create New Link */}
					<p className="text-muted-400 mt-4 flex justify-between font-sans text-xs leading-5">
						<span>Don&apos;t have an account?</span>
						<Link
							href="/auth/signup-1"
							className="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline">
							start your 14-day free trial
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
