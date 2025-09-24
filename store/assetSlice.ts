import { Asset } from "@/interface/asset";
import { createAsset, fetchAssets } from "@/services/assetServices";
import { createSlice } from "@reduxjs/toolkit";

const assetSlice = createSlice({
  name: 'asset',
  initialState: {
    assets: null as Asset[] | null,
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
      .addCase(fetchAssets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAssets.fulfilled, (state, action) => {
        state.loading = false;
        state.assets = action.payload;
      })
      .addCase(fetchAssets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(createAsset.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(createAsset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
  }
});

export const { clearMessage, clearError } = assetSlice.actions;
export default assetSlice.reducer;