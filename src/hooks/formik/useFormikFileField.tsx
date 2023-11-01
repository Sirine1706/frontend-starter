import React, { useState, useEffect, useRef } from "react";
import ImagePreview from "../../components/dashboard/PreviewImage";
import FormikControlledFileUpload from "../../components/common/form/FormikControllerFileUpload";
import VideoPreview from "../../components/dashboard/VideoPreview";

interface Props {
  name: string;
  label: string;
  id: string;
  placeholder: string;
  accept?: string;
}

type FieldProps = {
  path?: string | null;
};

function useFormikFileField({
  name,
  label,
  id,
  placeholder,
  accept = "image/*",
}: Props) {
  const [filePreview, setFilePreview] = useState("");
  const [showFile, setShowFile] = useState(true);
  const fileUrlRef = useRef<HTMLInputElement>(null);
  const [tempFile, setTempFile] = useState<File | null>(null);

  useEffect(() => {}, [filePreview]);

  const component: React.FC<FieldProps> = (props) => (
    <>
      {(showFile && props.path) || filePreview ? (
        <React.Fragment>
          <div style={accept.includes("image") ? {} : { display: "none" }}>
            <ImagePreview
              backgroundImage={filePreview || (props.path ? props.path : "")}
              closeFunction={() => {
                setShowFile(false);
                setFilePreview("");
              }}
              label={label}
            />
          </div>
          <div style={accept.includes("video") ? {} : { display: "none" }}>
            <VideoPreview
              label="Video"
              closeFunction={() => {
                setShowFile(false);
                setFilePreview("");
              }}
              videoPath={filePreview ? filePreview : (props.path as string)}
            />
          </div>
        </React.Fragment>
      ) : (
        <FormikControlledFileUpload
          name={name}
          label={label}
          id={id}
          ref={fileUrlRef}
          accept={accept}
          placeholder={placeholder}
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            const file = (event.target as HTMLInputElement)?.files?.[0];
            if (file) {
              setTempFile(file);
              setFilePreview(URL.createObjectURL(file));
            }
          }}
        />
      )}
    </>
  );

  return {
    component,
    fileUrlRef,
    tempFile,
  };
}

export default useFormikFileField;
