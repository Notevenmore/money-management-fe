import { Asset } from '@/interface/asset';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import nProgress from 'nprogress';

const API_URL = process.env.NEXT_PUBLIC_APP_BACKEND_URL + '/aset/' || '';

export const fetchAssets = createAsyncThunk(
  'asset/fetchAssets',
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
      return rejectWithValue('Gagal mengambil daftar aset');
    }
  }
);

export const createAsset = createAsyncThunk<{message: string}, Asset>(
  'asset/createAsset',
  async (asset: Asset, { rejectWithValue }) => {
    try {
      nProgress.start();
      const response = await axios.post(
        API_URL,
        asset,
        {
          headers: { 
            'Content-Type': 'application/json' 
          }
        }
      );
      nProgress.done();

      if(response.data.status_code as number !== 202) return rejectWithValue(response.data.message || 'Gagal menambahkan aseet');
      return { message: response.data.message };
    } catch (err) {
      nProgress.done();
      return rejectWithValue('Terjadi kesalahan dalam menambahkan aset.');
    }
  }
);