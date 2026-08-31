import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  bio: "",
  skills: [],
  projects: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPortfolio: (state, action) => {
      return { ...state, ...action.payload };
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
  },
});

export const { setPortfolio, addSkill, addProject } = portfolioSlice.actions;
export default portfolioSlice.reducer;
