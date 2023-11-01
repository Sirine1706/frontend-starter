import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchExample } from "./thunk";
import { removeDuplicates } from "../../../utils/array";

const initialState: {
  visibe: boolean;
  data: any;
  uploadedFiles: (File & { preview: string })[] | null;
  imageUploadedFiles: (File & { preview: string })[] | null;
  videoUploadedFiles: (File & { preview: string })[] | null;
  openModal: boolean;
  openChoosePlans: boolean;
  plansFilterModalIsOpen: boolean;
  scenesFilterModalIsOpen: boolean;
  projectsFilterModalIsOpen: boolean;
} = {
  visibe: false,
  data: null,
  uploadedFiles: null,
  imageUploadedFiles: null,
  videoUploadedFiles: null,
  openModal: false,
  openChoosePlans: false,
  plansFilterModalIsOpen: false,
  scenesFilterModalIsOpen: false,
  projectsFilterModalIsOpen: false,
};

const slice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setVisible(state, action: PayloadAction<boolean>) {
      state.visibe = action.payload;
    },
    toggleVisible(state) {
      state.visibe = !state.visibe;
    },
    toggleChoosePlans(state) {
      state.openChoosePlans = !state.openChoosePlans;
    },
    setUploadedFiles(
      state,
      action: PayloadAction<(File & { preview: string })[] | null>
    ) {
      state.uploadedFiles =
        action.payload && state.uploadedFiles
          ? [...action.payload, ...state.uploadedFiles]
          : state.uploadedFiles && action.payload && action.payload.length > 0
          ? []
          : action.payload;
      state.uploadedFiles = removeDuplicates(state.uploadedFiles as any[]);
    },
    toggleModal(state) {
      state.openModal = !state.openModal;
    },
    setImageUploadedFiles(
      state,
      action: PayloadAction<(File & { preview: string })[] | null>
    ) {
      state.imageUploadedFiles = action.payload;
    },
    setVideoUploadedFiles(
      state,
      action: PayloadAction<(File & { preview: string })[] | null>
    ) {
      state.videoUploadedFiles = action.payload;
    },
    togglePlansFilterModalIsOpen(state) {
      state.plansFilterModalIsOpen = !state.plansFilterModalIsOpen;
    },
    toggleScenesFilterModalIsOpen(state) {
      state.scenesFilterModalIsOpen = !state.scenesFilterModalIsOpen;
    },
    toggleProjectsFilterModalIsOpen(state) {
      state.projectsFilterModalIsOpen = !state.projectsFilterModalIsOpen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExample.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {
  setVisible,
  toggleVisible,
  setUploadedFiles,
  toggleModal,
  setImageUploadedFiles,
  setVideoUploadedFiles,
  toggleChoosePlans,
  togglePlansFilterModalIsOpen,
  toggleScenesFilterModalIsOpen,
  toggleProjectsFilterModalIsOpen,
} = slice.actions;
export default slice.reducer;
