import { toast } from "react-toastify";

export const showToast = (
  type: "warn" | "success" | "error",
  messaage: string
) => {
  switch (type) {
    case "warn":
      toast.warn(messaage);
      break;
    case "success":
      toast.success(messaage);
      break;
    case "error":
      toast.error(messaage);
  }
};
