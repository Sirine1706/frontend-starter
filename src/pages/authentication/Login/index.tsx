import { Fragment } from "react";

import Breadcrumb from "../../../components/dashboard/Breadcrumb";
import LoginLeftSide from "./LoginLeftSide";
import LoginForm from "./LoginForm";

const SignIn = () => {
  return (
    <Fragment>
      <div className="rounded-sm w-11/12 mx-auto border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark flex items-center justify-center">
        <div className="flex flex-wrap items-center">
          <LoginLeftSide />
          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium"></span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Se connecter à Immoceros
              </h2>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
