import React from "react";

import EmailSuccessIllustrator from "../../../components/illustrators/EmailSuccessIllustrator";
import SorryIllustrator from "../../../components/illustrators/sorryIllustrator";

type Props = {};

function index({}: Props) {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 py-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:py-20 min-h-screen flex items-center">
      <div className="mx-auto max-w-[490px]">
        <SorryIllustrator />

        <div className="mt-7.5 text-center">
          <p className="font-medium mt-6">
            Nous vous contactons concernant la confirmation de votre adresse
            e-mail. Malheureusement, la confirmation n'a pas pu être effectuée
            en raison d'un jeton invalide ou expiré.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
