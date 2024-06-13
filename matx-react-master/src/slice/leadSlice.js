import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lead: [],
  data: [],
  error: null,
  isLoading: false,
  deleteInfo: {},
  editObj : {}
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
    },
    deleteLeadLoading: (state, actions) => {  
      state.isLoading = true;
    },  
    deleteLeadSuccess: (state, actions) => {  
      state.isLoading = false;
      state.deleteInfo = actions.payload;
    },  
    deleteLeadError: (state, actions) => {      
      state.isLoading = false;
      state.error = actions.payload;
    },  
    editLeadRequest: (state, actions) => {  

      state.isLoading = true;  
  } ,
  editLeadRequestError: (state, actions) => { 

    state.isLoading = false;
    state.error = actions.payload;

  },
  editLeadRequestSuccess: (state, actions) => { 

    state.isLoading = false;
        state.editObj = actions.payload;
      
  }
  }
}

);

export const { leadLoading, leadSuccess, leadError, getLeadLoading,
   getLeadSuccess, getLeadError,deleteLeadLoading,deleteLeadSuccess,deleteLeadError,
   editLeadRequest,editLeadRequestError,editLeadRequestSuccess } = leadSlice.actions;

export default leadSlice.reducer;