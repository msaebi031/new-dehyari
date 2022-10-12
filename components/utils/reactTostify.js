import { toast } from "react-toastify";

export const successTost = (text) =>
  toast.success(text, {
    position: "bottom-right",
  });

export const warningTost = (text) =>
  toast.warning(text, {
    position: "bottom-right",
  });

export const errorTost = (text) =>
  toast.error(text, {
    position: "bottom-right",
  });
