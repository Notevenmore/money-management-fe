import { Debt } from '@/interface/debt';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import nProgress from 'nprogress';

const API_URL = process.env.NEXT_PUBLIC_APP_BACKEND_URL + '/tagihan/' || '';

export const fetchDebts = createAsyncThunk(
  'debt/fetchDebts',
  async (_, { rejectWithValue }) => {
    try {
      // nProgress.start();
      const response = await axios.get(API_URL, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      // nProgress.done();
      return response.data.data;
    } catch (err) {
      // nProgress.done();
      return rejectWithValue('Gagal mengambil daftar tagihan');
    }
  }
);

export const createDebt = createAsyncThunk<{message: string}, Debt>(
  'debt/createDebt',
  async (debt: Debt, { rejectWithValue }) => {
    try {
      // nProgress.start();
      const response = await axios.post(
        API_URL,
        debt,
        {
          headers: { 
            'Content-Type': 'application/json' 
          }
        }
      );
      // nProgress.done();

      if(response.data.status_code as number !== 202) return rejectWithValue(response.data.message || 'Gagal menambahkan tagihan');
      return { message: response.data.message };
    } catch (err) {
      // nProgress.done();
      return rejectWithValue('Terjadi kesalahan dalam menambahkan tagihan.');
    }
  }
);