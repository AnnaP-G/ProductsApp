import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    status: statusFilters.all,
  },
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setNameFilter, setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
