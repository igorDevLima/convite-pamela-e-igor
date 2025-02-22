// src/viewmodels/useHomeViewModel.ts
import { useCallback } from "react";
import {
  getEmailURL,
  getIntroText,
  getLocalization,
} from "../models/introSectionModel";

export const useIntroSectionViewModel = () => {
  const introText = getIntroText();
  const localization = getLocalization();

  const emailURL = getEmailURL();

  const openGmail = useCallback(() => {
    window.open(emailURL, "_blank");
  }, [emailURL]);

  return {
    introText,
    localization,
    openGmail,
  };
};
