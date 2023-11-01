import { createVideo, createPlan } from "./create";
import { getVideoList, getLongVideoList, getShortVideoList } from "./getAll";
import { deleteVideo } from "./delete";
import { getVideo } from "./get";
import { updateVideo, updatePlan } from "./update";
import { countVideos } from "./countAll";

export default {
  createVideo,
  getVideoList,
  deleteVideo,
  createPlan,
  getVideo,
  updateVideo,
  updatePlan,
  getLongVideoList,
  countVideos,
  getShortVideoList,
};
