import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../../utils/axios";

export const fetchExample = createAsyncThunk(
  "example/fetch",
  async (payload: { data: any; id: string }) => {
    let data;
    try {
      const response = await axios.put(`/examples/${payload.id}`, payload.data);
      data = await response.data.data;
      if (response.status === 200) {
        return data;
      }

      throw new Error(response.statusText);
    } catch (error: any) {
      return Promise.reject(error.message ? error.message : data?.message);
    }
  }
);
