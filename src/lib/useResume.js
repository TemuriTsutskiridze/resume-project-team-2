import { useContext } from "react";
import { ResumeContext } from "../ResumeProvider";

export const useResume = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error(
      "useResume აუცილებლად! გამოყენებული უნდა იყოს ResumeProvider-თან ერთად "
    );
  }
  return context;
};
