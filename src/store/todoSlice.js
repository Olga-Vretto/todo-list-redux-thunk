import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('todo/fetchData', async () => {
  const response = await axios.get('https://64713f696a9370d5a41a46f1.mockapi.io/tasks/tasklist');
  return response.data;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: { taskName: '', taskList: [], taskId: 1, status: 'idle' },
  reducers: {
    setTaskName: (state, action) => {
      state.taskName = action.payload;
    },
    addTask: (state) => {
      state.taskList.push({ task: state.taskName, id: state.taskId, isDone: false });
      state.taskName = '';
      state.taskId++;
    },
    toggleTask: (state, action) => {
      const task = state.taskList.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.taskList = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setTaskName, addTask, toggleTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
