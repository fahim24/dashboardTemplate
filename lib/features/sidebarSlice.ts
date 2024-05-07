import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SidebarState {
	isSwitcherOpen: boolean;
	isSearchOpen: boolean;
	isSidebarOpen: boolean;
	currentSidebarName: string | undefined;
}

const initialState: SidebarState = {
	isSwitcherOpen: false,
	isSearchOpen: false,
	isSidebarOpen: false,
	currentSidebarName: undefined,
};

export const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		setIsSwitcherOpen: (state, action: PayloadAction<boolean>) => {
			state.isSwitcherOpen = action.payload;
		},
		setIsSearchOpen: (state, action: PayloadAction<boolean>) => {
			state.isSearchOpen = action.payload;
		},
		setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
			state.isSidebarOpen = action.payload;
		},
		setCurrentSidebarName: (state, action: PayloadAction<string | undefined>) => {
			state.currentSidebarName = action.payload;
		},
	},
});

export const { setIsSwitcherOpen, setIsSearchOpen, setIsSidebarOpen, setCurrentSidebarName } =
	sidebarSlice.actions;

export default sidebarSlice.reducer;
