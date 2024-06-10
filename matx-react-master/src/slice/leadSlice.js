import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lead: [],
  data: [],
  error: null,
  isLoading: false
};

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    leadLoading: (state, actions) => {
      state.isLoading = true;
    },
    leadSuccess: (state, actions) => {
      state.isLoading = false;
      state.lead = actions.payload;
    },
    leadError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },

    getLeadLoading: (state, actions) => {
      state.isLoading = true;
    },
    getLeadSuccess: (state, actions) => {
      state.isLoading = false;
      state.data = actions.payload;
    },
    getLeadError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    }
  }
});

export const { leadLoading, leadSuccess, leadError, getLeadLoading, getLeadSuccess, getLeadError } = leadSlice.actions;

export default leadSlice.reducer;