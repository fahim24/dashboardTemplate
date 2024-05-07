"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { BaseButton, BaseMessage } from "@shuriken-ui/react";
import * as Yup from "yup";

const validationSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("A valid email is required"),
});

type InputValues = {
	email: string;
};

const PasswordRecoverForm = () => {
	const [recover, setRecover] = useState(false);

	const formik = useFormik<InputValues>({
		initialValues: {
			email: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values, actions) => {
			setTimeout(() => {
				// alert(JSON.stringify(values, null, 2));
				actions.setSubmitting(false);
				setRecover(true);
			}, 1000);
		},
	});

	return (
		<>
			{recover ? (
				<div className="px-8 py-4">
					<div className="mb-4 space-y-4">
						<BaseMessage>
							<p className="text-base p-2">
								An email has been sent to you with instructions on how to reset your password.
							</p>

							<small className="block p-2">
								If you don&apos;t receive an email, please check your spam folder. If you still
								don&apos;t receive an email, that means you don&apos;t have an account
							</small>
						</BaseMessage>
					</div>
				</div>
			) : (
				<form method="POST" onSubmit={formik.handleSubmit}>
					<div className="mb-4 space-y-4">
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
						{/* Submit Button */}
						<div className="mb-6">
							<BaseButton
								disabled={formik.isSubmitting}
								loading={formik.isSubmitting}
								type="submit"
								color="primary"
								className="!h-12 w-full">
								Recover Password
							</BaseButton>
						</div>
						{/* Back Link */}
						<p className="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5">
							<span>False alert?</span>
							<Link
								href="/auth"
								className="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline">
								Sign in
							</Link>
						</p>
					</div>
				</form>
			)}
		</>
	);
};

export default PasswordRecoverForm;
