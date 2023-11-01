import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../../../utils/axios";

export const countVideos = createAsyncThunk("video/countVideos", async () => {
  let data;
  try {
    const response = await axios.get("/videos/all/count");
    data = await response.data.data;
    if (response.status === 200) {
      return data.videos;
    }
    throw new Error(response.statusText);
  } catch (error: any) {
    return Promise.reject(
      error.message ? error.message : "Something went wrong!"
    );
  }
});
