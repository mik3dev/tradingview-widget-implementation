import { STUDIES } from "./study-list";

export const conver2study = (study: keyof typeof STUDIES) => {
  return STUDIES[study];
};

export const convert2Studies = (studies: string[]) => {
  return studies.map((study) => conver2study(study as keyof typeof STUDIES));
};

export const validateStudy = (study: string) => {
  return study in STUDIES;
};

export const validateStudies = (studies: string[]): string[] => {
  return studies.filter((study) => validateStudy(study));
};