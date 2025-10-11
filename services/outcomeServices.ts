import { Outcome } from '@/interface/outcome';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import nProgress from 'nprogress';

const API_URL = process.env.NEXT_PUBLIC_APP_BACKEND_URL + '/pengeluaran/' || '';

export const fetchOutcomes = createAsyncThunk(
  'outcome/fetchOutcomes',
  async (_, { rejectWithValue }) => {
    try {
      nProgress.start();
      const response = await axios.get(API_URL, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      nProgress.done();
      return response.data.status_code == 202 ? response.data.data || [] : [];
    } catch (err) {
      nProgress.done();
      return rejectWithValue('Gagal mengambil daftar pengeluaran');
    }
  }
);

export const createOutcome = createAsyncThunk<{message: string}, Outcome>(
  'outcome/createOutcome',
  async (outcome: Outcome, { rejectWithValue }) => {
    try {
      nProgress.start();
      outcome.date = new Date(outcome.date).toISOString().split(".")[0] + "Z";
      const response = await axios.post(
        API_URL,
        outcome,
        {
          headers: { 
            'Content-Type': 'application/json' 
          }
        }
      );
      nProgress.done();

      if(response.data.status_code as number !== 202) return rejectWithValue(response.data.message || 'Gagal menambahkan pengeluaran');
      return { message: response.data.message };
    } catch (err) {
      nProgress.done();
      return rejectWithValue('Terjadi kesalahan dalam menambahkan pengeluaran.');
    }
  }
);