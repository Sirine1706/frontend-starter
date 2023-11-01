import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../../../utils/axios";

export const deleteVideo = createAsyncThunk(
  "video/deleteVideo",
  async (id: string) => {
    try {
      const response = await axios.delete(`/videos/${id}`);
      await response.data.data;
      if (response.status === 200) {
        return id;
      }
      throw new Error(response.statusText);
    } catch (error: any) {
      return Promise.reject(
        error.message ? error.message : "Something went wrong"
      );
    }
  }
);
