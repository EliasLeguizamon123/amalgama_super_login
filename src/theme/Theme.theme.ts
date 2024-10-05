import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config : ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}
export const Theme = extendTheme(
    { 
        config,
        colors: {
            base: "#363a4f",
            input: "#b8c0e0",
            error: "#ee99a0",
            primary: "#91d7e3",
            secondary: "#a6da95"
        }
    },
)