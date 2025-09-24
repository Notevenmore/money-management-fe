import { Outcome } from "@/interface/outcome";
import { createOutcome, fetchOutcomes } from "@/services/outcomeServices";
import { createSlice } from "@reduxjs/toolkit";


const outcomeSlice = createSlice({
  name: 'outcome',
  initialState: {
    outcomes: null as Outcome[] | null,
    loading: false,
    error: null as string | null,
    message: null as string | null
  },
  reducers: {
    clearMessage(state) {
      state.message = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOutcomes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOutcomes.fulfilled, (state, action) => {
        state.loading = false;
        state.outcomes = action.payload;
      })
      .addCase(fetchOutcomes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(createOutcome.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOutcome.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(createOutcome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
  }
});

export const { clearMessage, clearError } = outcomeSlice.actions;
export default outcomeSlice.reducer;