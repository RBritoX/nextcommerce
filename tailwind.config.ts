import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
      },
      gridTemplateRows: {
        app: "min-content max-content",
      },
      colors: {
        primary: { ...colors.blue, DEFAULT: colors.blue[500] },
      },
      height: {
        // @ts-ignore
        screen: ["100vh", "100dvh"],
      },
      minHeight: {
        // @ts-ignore
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        // @ts-ignore
        screen: ["100vh", "100dvh"],
      },
    },
  },
  plugins: [],
};
export default config;
