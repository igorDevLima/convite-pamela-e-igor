// src/viewmodels/useHomeViewModel.ts
import { useCallback } from "react";
import {
  getEmailURL,
  getIntroText,
  getIntroButtonText,
} from "../models/introSectionModel";

export const useIntroSectionViewModel = () => {
  const introText = getIntroText();
  const introButtonText = getIntroButtonText();

  const emailURL = getEmailURL();

  const openGmail = useCallback(() => {
    window.open(emailURL, "_blank");
  }, [emailURL]);

  return {
    introText,
    introButtonText,
    openGmail,
  };
};
