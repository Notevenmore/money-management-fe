import { Income } from "@/interface/income";
import { createIncome, fetchIncomes } from "@/services/incomeServices";
import { createSlice } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
  name: 'income',
  initialState: {
    incomes: null as Income[] | null,
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
      .addCase(fetchIncomes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIncomes.fulfilled, (state, action) => {
        state.loading = false;
        state.incomes = action.payload;
      })
      .addCase(fetchIncomes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(createIncome.pending, (state) => {
        state.loading = true;
      })
      .addCase(createIncome.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(createIncome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
  }
});

export const { clearMessage, clearError } = incomeSlice.actions;
export default incomeSlice.reducer;