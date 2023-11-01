import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../../../utils/axios";

export const getVideo = createAsyncThunk(
  "video/getVideo",
  async (id: string) => {
    let data;
    try {
      const response = await axios.get(`/videos/${id}`);
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
