import { useParams, useNavigate } from "react-router-dom";
import React from "react";

import EmailSuccessIllustrator from "../../../components/illustrators/EmailSuccessIllustrator";
import useAuth from "../../../hooks/useAuth";

type Props = {};

function index({}: Props) {
  const navigate = useNavigate();
  const token = useParams<{ token: string }>().token as string;
  const { confirmEmail } = useAuth();

  const handleclick = async () => {
    confirmEmail(token)
      .then((response: any) => {
        if (response?.status === 200) {
          navigate("/email/confirm/success");
        } else {
          navigate("/email/confirm/failed");
        }
      })
      .catch((error) => {
        navigate("/email/confirm/failed");
      });
  };

  return (
    <div className="rounded-sm border min-h-screen flex items-center border-stroke bg-white px-5 py-10 shadow-default dark:border-strokedark dark:bg-boxdark sm:py-20">
      <div className="mx-auto max-w-[490px]">
        <EmailSuccessIllustrator />

        <div className="mt-7.5 text-center">
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
            Confirmation d'inscription - Veuillez confirmer votre compte
          </h2>
          <p className="font-medium">
            Nous sommes ravis que vous ayez décidé de vous inscrire à notre
            service ! Avant de commencer, nous avons besoin que vous confirmiez
            votre compte en cliquant sur le lien ci-dessous :
          </p>
          <button
            onClick={handleclick}
            className="mt-7.5 inline-flex items-center gap-2 rounded-md bg-primary py-3 px-6 font-medium text-white hover:bg-opacity-90"
          >
            <span>Confirmer</span>
          </button>
          <p className="font-medium mt-6">
            En confirmant votre compte, vous aurez accès à toutes les
            fonctionnalités de notre plateforme et pourrez profiter pleinement
            de notre service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
