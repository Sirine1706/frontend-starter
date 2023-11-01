import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center bg-dark">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-danger"></div>
    </div>
  );
}
