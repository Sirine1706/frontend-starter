import React from "react";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  id?: string;
  textarea?: boolean;
  state: any;
  setState: Function;
};

function LabelInput(props: Props) {
  return (
    <div className="flex flex-col">
      <label
        className="mb-3 block text-sm font-medium text-black dark:text-white"
        htmlFor="emailAddress"
      >
        {props.label}
      </label>
      <div className="relative">
        <input
          className="w-full rounded border border-stroke bg-gray py-3 px-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
          type={props.type || "text"}
          name={props.name || "name"}
          id={props.id || "id"}
          placeholder={props.placeholder || "placeholder"}
          value={props.state || ""}
          onChange={(e) => props.setState(e.target.value)}
        />
      </div>
    </div>
  );
}

export default LabelInput;
