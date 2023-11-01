import React, { PropsWithChildren } from "react";
import CloseIcon from "../../components/icons/CloseIcon";

type Props = {
  id: string | undefined;
  visible: boolean;
  togglevisible: Function | (() => void);
  fullscreen?: boolean;
};
const uniqueId = Math.random().toString(36).substring(7);

function index(props: PropsWithChildren<Props>) {
  return (
    <div
      id={props.id || uniqueId}
      onClick={() => props.togglevisible()}
      style={{ display: props.visible ? "flex" : "none" }}
      className="fixed top-0 left-0 z-[1000] flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 sm:py-12 "
    >
      <div
        onClick={(e: React.FormEvent) => {
          e.stopPropagation();
        }}
        className={`${
          props.fullscreen ? "w-full h-full" : "w-auto h-auto"
        } overflow-auto overflow-y-auto rounded-lg bg-white py-12 px-8 text-center dark:bg-boxdark md:py-15 md:px-17.5 relative`}
      >
        <button
          type="button"
          onClick={() => props.togglevisible()}
          className="absolute top-2 right-2 z-[10000"
        >
          <CloseIcon />
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default index;
