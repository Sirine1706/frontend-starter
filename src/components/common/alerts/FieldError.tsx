import React from "react";

type Props = {
  error: string;
};

function FieldError({ error }: Props) {
  return (
    <div className="flex my-1 text-xs sm:text-sm w-full border-l-4 border-[#F87171] bg-[#F87171] bg-opacity-[15%] py-1 px-4 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30">
      <div className="w-full">
        <h5 className=" text-[#B45454]">{error}</h5>
      </div>
    </div>
  );
}

export default FieldError;
