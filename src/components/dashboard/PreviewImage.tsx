import React from "react";
import CloseIcon from "../../components/icons/CloseIcon";
import EmptyBoxIxon from "../icons/EmptyBoxIxon";

type Props = {
  backgroundImage: string;
  closeFunction: Function;
  label: string;
};

function ImagePreview(props: Props) {
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

        {props.backgroundImage ? (
          <img
            src={props.backgroundImage}
            alt="preview"
            className="object-contain max-w-sm object-center mx-auto"
          />
        ) : (
          <div className="flex flex-col items-center">
            <EmptyBoxIxon />
            <span>Aucune image</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImagePreview;
