import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRandomGreeting = createAsyncThunk('greeting/fetchRandomGreeting', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/messages/random_greeting', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGreeting.fulfilled, (state, action) => {
      const newState = { ...state, greeting: action.payload };
      return newState;
    });
  },
});

export default greetingSlice.reducer;
