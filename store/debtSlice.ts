import { Debt } from "@/interface/debt";
import { createDebt, fetchDebts } from "@/services/debtServices";
import { createSlice } from "@reduxjs/toolkit";

const debtSlice = createSlice({
  name: 'debt',
  initialState: {
    debts: null as Debt[] | null,
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
      .addCase(fetchDebts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDebts.fulfilled, (state, action) => {
        state.loading = false;
        state.debts = action.payload;
      })
      .addCase(fetchDebts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(createDebt.pending, (state) => {
        state.loading = true;
      })
      .addCase(createDebt.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(createDebt.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
  }
});

export const { clearMessage, clearError } = debtSlice.actions;
export default debtSlice.reducer;