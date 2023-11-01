import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVideo, IMeta, IConfig } from "../../../types/models";

import videoThunks from "./thunk";
import { showToast } from "../../../utils/toast";

const initialState: {
  status: initialStateStatus;
  error: string | null;
  count: number;
  video: IVideo | null;
  meta: IMeta | null;
  docs: IVideo[] | null;
} = {
  status: "idle",
  error: null,
  video: null,
  meta: null,
  count: 0,
  docs: null,
};

const slice = createSlice({
  name: "global",
  initialState,
  reducers: {
    clearVideo: (state) => {
      state.status = "idle";
      state.error = null;
      state.video = null;
    },
  },
  extraReducers: (builder) => {
    // CREATE VIDEO
    builder.addCase(videoThunks.createVideo.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      videoThunks.createVideo.fulfilled,
      (state, action: PayloadAction<IVideo>) => {
        state.status = "succeeded";
        state.video = action.payload;
        showToast("le vidéo a été cré", "success");
      }
    );
    builder.addCase(
      videoThunks.createVideo.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Échec de la création", "error");
      }
    );
    // GET VIDEO LIST
    builder.addCase(videoThunks.getVideoList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      videoThunks.getVideoList.fulfilled,
      (state, action: PayloadAction<{ meta: IMeta; docs: IVideo[] }>) => {
        state.status = "succeeded";
        state.meta = action.payload.meta;
        state.docs = action.payload.docs;
      }
    );
    builder.addCase(
      videoThunks.getVideoList.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Échec de la récupération", "error");
      }
    );
    // DELETE VIDEO
    builder.addCase(videoThunks.deleteVideo.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      videoThunks.deleteVideo.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.status = "succeeded";
        showToast("le vidéo a été supprimé", "success");
      }
    );
    builder.addCase(
      videoThunks.deleteVideo.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Échec de la suppression", "error");
      }
    );
    // CREATE PLAN
    builder.addCase(videoThunks.createPlan.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(videoThunks.createPlan.fulfilled, (state) => {
      state.status = "succeeded";
      showToast("le vidéo a été cré", "success");
    });
    builder.addCase(
      videoThunks.createPlan.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Échec de la création", "error");
      }
    );
    // GET VIDEO
    builder.addCase(videoThunks.getVideo.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      videoThunks.getVideo.fulfilled,
      (state, action: PayloadAction<IVideo>) => {
        state.status = "succeeded";
        state.video = action.payload;
      }
    );
    builder.addCase(
      videoThunks.getVideo.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Échec de la récupération", "error");
      }
    );
    // UPDATE VIDEO
    builder.addCase(videoThunks.updateVideo.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      videoThunks.updateVideo.fulfilled,
      (state, action: PayloadAction<IVideo>) => {
        state.status = "succeeded";
        state.video = action.payload;
        showToast("le vidéo a été modifié", "success");
      }
    );
    builder.addCase(
      videoThunks.updateVideo.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Échec de la modification", "error");
      }
    );
    // UPDATE PLAN
    builder.addCase(videoThunks.updatePlan.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      videoThunks.updatePlan.fulfilled,
      (state, action: PayloadAction<IVideo>) => {
        state.status = "succeeded";
        state.video = action.payload;
        showToast("le vidéo a été modifié", "success");
      }
    );
    builder.addCase(
      videoThunks.updatePlan.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Échec de la modification", "error");
      }
    );
    // GET ALL SHORT
    builder.addCase(videoThunks.getShortVideoList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      videoThunks.getShortVideoList.fulfilled,
      (state, action: PayloadAction<{ meta: IMeta; docs: IVideo[] }>) => {
        state.status = "succeeded";
        state.meta = action.payload.meta;
        state.docs = action.payload.docs;
      }
    );
    builder.addCase(
      videoThunks.getShortVideoList.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Échec de la récupération", "error");
      }
    );
    // GET ALL LONG
    builder.addCase(videoThunks.getLongVideoList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      videoThunks.getLongVideoList.fulfilled,
      (state, action: PayloadAction<{ meta: IMeta; docs: IVideo[] }>) => {
        state.status = "succeeded";
        state.meta = action.payload.meta;
        state.docs = action.payload.docs;
      }
    );
    builder.addCase(
      videoThunks.getLongVideoList.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
        showToast("Échec de la récupération", "error");
      }
    );
    // COUNT
    builder.addCase(videoThunks.countVideos.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      videoThunks.countVideos.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.status = "succeeded";
        state.count = action.payload;
      }
    );
    builder.addCase(
      videoThunks.countVideos.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      }
    );
  },
});

export const { clearVideo } = slice.actions;
export default slice.reducer;
