import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../utils/axios";
import { IConfig, IVideo } from "../../../../types/models";

export const updateVideo = createAsyncThunk(
  "video/updateVideo",
  async (payload: { id: string; data: any }) => {
    let data;
    try {
      const response = await axios.put(`/videos/${payload.id}`, payload.data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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

export const updatePlan = createAsyncThunk(
  "plan/updatePlan",
  async (payload: { id: string; data: IConfig & IVideo }) => {
    let config: IConfig;
    let video: IVideo;

    const configResponse = await axios.put(
      `/configs/${payload.data.config._id}`,
      {
        name: payload.data.name,
        description: payload.data.description,
        thumbnail: payload.data.thumbnail,
        duration: payload.data.duration,
        durationVersion: payload.data.durationVersion,
        blur: payload.data.blur,
        speed: payload.data.speed,
        transition: payload.data.transition,
        lens: payload.data.lens,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (configResponse.status !== 200) {
      throw new Error(configResponse.statusText);
    }
    config = await configResponse.data.data;

    try {
      const videoResponse = await axios.patch(
        `/videos/${payload.id}`,
        {
          name: payload.data.name,
          description: payload.data.description,
          thumbnail: payload.data.thumbnail,
          path: payload.data.path,
          config: config._id,
          durationVersion: payload.data.durationVersion,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      video = await videoResponse.data.data;
      if (videoResponse.status === 200) {
        return video;
      }
      throw new Error(videoResponse.statusText);
    } catch (error: any) {
      return Promise.reject(
        error.message ? error.message : "Something went wrong"
      );
    }
  }
);
