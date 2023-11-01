import React from "react";

import SuccessIllustrator from "../../../components/illustrators/SuccessIllustrator";

type Props = {};

function index({}: Props) {
  return (
    <div className="rounded-sm border min-h-screen flex items-center border-stroke bg-white px-5 py-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:py-20">
      <div className="mx-auto max-w-[490px]">
        <SuccessIllustrator />

        <div className="mt-7.5 text-center">
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
            Confirmation d'inscription réussie - Bienvenue parmi nous !
          </h2>
          <p className="font-medium">
            Nous sommes ravis de vous accueillir officiellement au sein de notre
            communauté ! Nous tenons à vous informer que votre adresse e-mail a
            été confirmée avec succès.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
