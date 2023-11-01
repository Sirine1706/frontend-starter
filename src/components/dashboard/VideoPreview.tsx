import React from "react";
import CloseIcon from "../../components/icons/CloseIcon";

type Props = {
  videoPath: string;
  closeFunction: Function;
  label: string;
};

function VideoPreview(props: Props) {
  const uniqueId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return (
    <div>
      <label htmlFor={uniqueId}>{props.label}</label>
      <div
        id={uniqueId}
        className="
                relative mb-5.5 flex w-full appearance-none rounded border-2 mt-1
                border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5
                 min-h-[150px] justify-center items-center
                "
      >
        <button
          type="button"
          onClick={(e: React.FormEvent) => {
            e.preventDefault();
            props.closeFunction();
          }}
          className="absolute top-2 right-2  shadow dark:shadow-black shadow-primary rounded-full"
          title="recharger"
        >
          <CloseIcon />
        </button>
        <video className="w-full h-full" controls>
          <source src={props.videoPath} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoPreview;
