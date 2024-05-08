"use client";
import { BaseCheckboxAnimated, BaseHeading, BaseParagraph } from "@shuriken-ui/react";
import React, { useState } from "react";

const TodoListCompact = () => {
	const todos = [
		{
			id: 0,
			title: "Call Mr. Markstrom",
			description: "Review the project initial wireframes",
			completed: true,
		},
		{
			id: 1,
			title: "Finish wireframes",
			description: "Make all requested changes and publish",
			completed: false,
		},
		{
			id: 2,
			title: "Update timesheets",
			description: "Update all the team timesheets",
			completed: false,
		},
		{
			id: 3,
			title: "Request payout",
			description: "Send project invoice to client",
			completed: false,
		},
		{
			id: 4,
			title: "Approve components",
			description: "Review complete design system",
			completed: true,
		},
	];
	const [tasks, setTasks] = useState(["Option 0", "Option 1", "Option 2"]);
	const handleCheckboxChange = (id: number) => {
		const taskId = `Option ${id}`;
		if (!tasks.includes(taskId)) {
			setTasks([...tasks, taskId]);
		} else {
			setTasks(tasks.filter((taskId) => taskId !== `Option ${id}`));
		}
	};
	return (
		<div className="mb-2 space-y-6">
			{todos.map((task) => (
				<div key={task.id} className="flex items-center gap-3">
					<BaseCheckboxAnimated
						modelValue={tasks}
						color="success"
						value={`Option ${task.id}`}
						onChange={() => handleCheckboxChange(task.id)}
					/>
					<div>
						<BaseHeading
							as="h4"
							size="sm"
							weight="light"
							lead="tight"
							className="text-muted-800 dark:text-white">
							<span>{task.title}</span>
						</BaseHeading>
						<BaseParagraph size="xs">
							<span className="text-muted-400">{task.description}</span>
						</BaseParagraph>
					</div>
				</div>
			))}
		</div>
	);
};

export default TodoListCompact;
