import React, { forwardRef, useState } from "react";
import { Field } from "formik";

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  id: string;
  accept?: string;
};

const FormikFileUpload = forwardRef<HTMLInputElement, Props>(
  (props: Props, ref) => {
    const [file, setFile] = useState<File | undefined>(undefined);
    return (
      <div className="my-2">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          {props.label || "Pièce jointe"}
        </label>
        <Field
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            if (target.files) {
              setFile(target.files[0]);
            }
          }}
          as="input"
          innerRef={ref}
          type="file"
          name={props.name}
          id={props.id}
          accept={props.accept || "image/*"}
          placeholder={props.placeholder || "Choose a file"}
          className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
        />
      </div>
    );
  }
);

export default FormikFileUpload;
