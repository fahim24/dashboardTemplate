import SidebarLayout from "@/lib/sidebar/SidebarLayout";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<SidebarLayout>{children} </SidebarLayout>
			{/* {children} */}
		</>
	);
}
