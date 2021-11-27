import { useMediaQuery } from "react-responsive";

import tailwindConfig from "../../tailwind.config";
const resolveConfig = require("tailwindcss/resolveConfig");

const Tailwind = resolveConfig(tailwindConfig);

const useBreakpoint = (breakpoint: string) => {
  return useMediaQuery({
    query: `(min-width: ${Tailwind.theme.screens[breakpoint]})`,
  });
};

export default useBreakpoint;
