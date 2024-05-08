"use client";
import React, { useState } from "react";
import { BaseCheckboxAnimated } from "@shuriken-ui/react";

export default function Page() {
	const [check, setCheck] = useState(false);
	console.log(check);
	return (
		<div>
			<BaseCheckboxAnimated onChange={(e) => setCheck(!check)} value={check} color="primary" />
		</div>
	);
}
