import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../../../utils/axios";

export const getVideoList = createAsyncThunk(
  "video/getVideoList",
  async (payload: {
    search?: string | undefined;
    page?: number | undefined;
    query?: string;
  }) => {
    const path = payload.page
      ? `/videos/all/paginated?page=${payload.page}`
      : payload.search
      ? `/videos/all/paginated?search=${payload.search}`
      : payload.query
      ? `/videos/all/paginated${payload.query}`
      : "/videos/all/paginated";

    try {
      const response = await axios.get(path);
      const { meta, docs } = await response.data;
      if (response.status === 200) {
        return { meta, docs };
      }
      throw new Error(response.statusText);
    } catch (error: any) {
      return Promise.reject(
        error.message ? error.message : "Something went wrong!"
      );
    }
  }
);

export const getShortVideoList = createAsyncThunk(
  "video/getShortVideoList",
  async () => {
    try {
      const response = await axios.get(
        "/videos/all/paginated?durationVersion=short"
      );
      const { meta, docs } = await response.data;
      if (response.status === 200) {
        return { meta, docs };
      }
      throw new Error(response.statusText);
    } catch (error: any) {
      return Promise.reject(
        error.message ? error.message : "Something went wrong!"
      );
    }
  }
);

export const getLongVideoList = createAsyncThunk(
  "video/getLongVideoList",
  async () => {
    try {
      const response = await axios.get(
        "/videos/all/paginated?durationVersion=long"
      );
      const { meta, docs } = await response.data;
      if (response.status === 200) {
        return { meta, docs };
      }
      throw new Error(response.statusText);
    } catch (error: any) {
      return Promise.reject(
        error.message ? error.message : "Something went wrong!"
      );
    }
  }
);
