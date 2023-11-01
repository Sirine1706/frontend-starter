import React from "react";
import CloseIcon from "../../components/icons/CloseIcon";

type Props = {
  src: string;
  closeFunction: Function;
  label: string;
};

function AudioPreview(props: Props) {
  const uniqueId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return (
    <div>
      <label htmlFor={uniqueId}>{props.label}</label>
      <div
        id={uniqueId}
        className="
                relative mb-5.5 block w-full appearance-none rounded border-2 mt-1
                border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5
          
                "
      >
        <button
          type="button"
          onClick={() => props.closeFunction()}
          className="absolute top-2 right-2 shadow dark:shadow-black shadow-primary rounded-full"
          title="recharger"
        >
          <CloseIcon />
        </button>
        <audio controls className="w-11/12 mx-auto text-primary">
          <source src={props.src} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default AudioPreview;
