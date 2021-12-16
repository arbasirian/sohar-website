import colors from "./colors";
import device, { breakpoints } from "./devices";

const themeVariables = (theme: string, language: string) => {
  return {
    colors: colors(theme),
    device: device,
    breakpoints: breakpoints,
    language: language,
  };
};

export default themeVariables;
