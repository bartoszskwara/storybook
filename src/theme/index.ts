import React from "react";

export type ThemeType = {
    fontColor: {
        primary: string,
        secondary: string,
        accent: string,
        warning: string
    },
    background: {
        primary: string,
        secondary: string,
        accent: string,
        warning: string
    },
    border: {
        primary: string
    }
};

export const theme = {
    light: {
        fontColor: {
            primary: "#FFFFFF",
            secondary: "#212121",
            accent: "#FFFFFF",
            warning: "#570303"
        },
        background: {
            primary: "#103d85",
            secondary: "#8a8a8a",
            accent: "#7e52cc",
            warning: "#de5757"
        },
        border: {
            primary: "#e6e6e6"
        }
    },
    dark: {
        fontColor: {
            primary: "#FFFFFF",
            secondary: "#212121",
            accent: "#FFFFFF",
            warning: "#570303"
        },
        background: {
            primary: "#103d85",
            secondary: "#8a8a8a",
            accent: "#7e52cc",
            warning: "#de5757"
        },
        border: {
            primary: "#e6e6e6"
        }
    }
}

export const ThemeContext = React.createContext<ThemeType>(theme.light);