import { ReactElement } from "react";

const unsecureCopyToClipboard = (input: HTMLInputElement) => {
  input.select();
  try {
    document.execCommand("copy");
  } catch (err) {}
};

export const copyInput = async (input: HTMLInputElement) => {
  try {
    input.select();
    input.setSelectionRange(0, 99999); /* For mobile devices */
    await navigator.clipboard.writeText(input.value);
  } catch (error) {
    unsecureCopyToClipboard(input);
  }
};

export const copyText = async (element: HTMLParagraphElement) => {
  try {
    const text = element.innerHTML.toString();
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);

    copyInput(input);

    document.body.removeChild(input);
  } catch (error) {}
};
