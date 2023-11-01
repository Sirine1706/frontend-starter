import React, { PropsWithChildren } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import CloseIcon from "../../components/icons/CloseIcon";
import { toggleChoosePlans } from "../../store/slices/global/slice";

type Props = {
  id: string | undefined;
};
const uniqueId = Math.random().toString(36).substring(7);

function index(props: PropsWithChildren<Props>) {
  const dispatch: Function = useAppDispatch();
  const visible = useAppSelector((state) => state.global.openChoosePlans);

  return (
    <div
      id={props.id || uniqueId}
      onClick={() => {
        dispatch(toggleChoosePlans());
      }}
      style={{ display: visible ? "flex" : "none" }}
      className="fixed top-0 left-0 z-[1000] flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 sm:py-12 "
    >
      <div
        onClick={(e: React.FormEvent) => {
          e.stopPropagation();
        }}
        className="w-full h-full overflow-auto overflow-y-auto rounded-lg bg-white py-12 px-8 text-center dark:bg-boxdark md:py-15 md:px-17.5 relative"
      >
        <button
          onClick={() => {
            dispatch(toggleChoosePlans());
          }}
          className="absolute top-2 right-2 z-[10000"
          type="button"
        >
          <CloseIcon />
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default index;
