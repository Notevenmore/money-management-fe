import { Income } from '@/interface/income';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import nProgress from 'nprogress';

const API_URL = process.env.NEXT_PUBLIC_APP_BACKEND_URL + '/pemasukan/' || '';

export const fetchIncomes = createAsyncThunk(
  'income/fetchIncomes',
  async (_, { rejectWithValue }) => {
    try {
      nProgress.start();
      const response = await axios.get(API_URL, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      nProgress.done();
      return response.data.data;
    } catch (err) {
      nProgress.done();
      return rejectWithValue('Gagal mengambil daftar pemasukan');
    }
  }
);

export const createIncome = createAsyncThunk<{message: string}, Income>(
  'incomes/createIncome',
  async (income: Income, { rejectWithValue }) => {
    try {
      nProgress.start();
      income.date = new Date(income.date).toISOString().split(".")[0] + "Z";
      const response = await axios.post(
        API_URL,
        income,
        {
          headers: { 
            'Content-Type': 'application/json' 
          }
        }
      );
      nProgress.done();

      if(response.data.status_code as number !== 202) return rejectWithValue(response.data.message || 'Gagal menambahkan pemasukan');
      return { message: response.data.message };
    } catch (err) {
      nProgress.done();
      return rejectWithValue('Terjadi kesalahan dalam menambahkan pemasukan.');
    }
  }
);