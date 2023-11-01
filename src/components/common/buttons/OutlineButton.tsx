import { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
  children: React.ReactNode | React.ReactNode[] | string;
  type?: "button" | "submit" | "reset";
};

function OutlineButton(props: PropsWithChildren<Props>) {
  return (
    <button
      type={props.type || "button"}
      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default OutlineButton;
