import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../../../utils/axios";
import { IConfig, IPlan, IVideo } from "../../../../types/models";

export const createVideo = createAsyncThunk(
  "video/createVideo",
  async (payload: IVideo) => {
    let data;
    try {
      const response = await axios.post(`/videos`, payload, {
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

export const createPlan = createAsyncThunk(
  "video/createPlan",
  async (payload: IPlan) => {
    let config: IConfig;
    let video: IVideo;
    try {
      const configResponse = await axios.post(
        `/configs`,
        {
          name: payload.name,
          description: payload.description,
          thumbnail: payload.thumbnail,
          duration: payload.duration,
          durationVersion: payload.durationVersion,
          blur: payload.blur,
          speed: payload.speed,
          transition: payload.transition,
          lens: payload.lens,
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

      // CREATE VIDEO
      const videoResponse = await axios.post(
        `/videos`,
        {
          name: payload.name,
          description: payload.description,
          thumbnail: payload.thumbnail,
          path: payload.path,
          config: config._id,
          durationVersion: payload.durationVersion,
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
