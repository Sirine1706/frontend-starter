import React from "react";

type Props = {
  closeFunction: Function;
  submitfunction: Function;
  cliseMessage: string;
  submitMessage: string;
  headerContent: string;
  bodyContent: string;
};

function ModalContentWithCTA({
  closeFunction,
  submitfunction,
  cliseMessage = "Annuler",
  submitMessage = "Enregistrer",
  headerContent,
  bodyContent,
}: Props) {
  return (
    <React.Fragment>
      <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
        {headerContent}
      </h3>
      <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
      <p className="mb-10 font-medium">{bodyContent}</p>
      <div className="-mx-3 flex flex-wrap gap-y-4">
        <div className="w-full px-3 2xsm:w-1/2">
          <button
            onClick={() => closeFunction()}
            className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
          >
            {cliseMessage}
          </button>
        </div>
        <div className="w-full px-3 2xsm:w-1/2">
          <button
            onClick={() => submitfunction()}
            className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
          >
            {submitMessage}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalContentWithCTA;
