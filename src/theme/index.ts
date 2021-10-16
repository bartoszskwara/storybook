import React from "react";

export type ThemeType = {
    fontColor: {
        [key: string]: string
    },
    background: {
        [key: string]: string
    },
    border: {
        [key: string]: string
    }
};

export const theme: { [key: string]: ThemeType } = {
    light: {
        fontColor: {
            primary: "#ffffff",
            secondary: "#ffffff",
            accent: "#FFFFFF",
            warning: "#570303"
        },
        background: {
            primary: "#01579b",
            primaryLight: "#4f83cc",
            primaryDark: "#002f6c",
            secondary: "#d81b60",
            secondaryLight: "#ff5c8d",
            secondaryDark: "#a00037",
            accent: "#7e52cc",
            warning: "#f05545"
        },
        border: {
            primary: "#e6e6e6",
            secondary: "#d986a4"
        }
    },
    dark: {
        fontColor: {
            primary: "#FFFFFF",
            secondary: "#212121",
            accent: "#FFFFFF",
            warning: "#ffffff"
        },
        background: {
            primary: "#212121",
            primaryLight: "#484848",
            primaryDark: "#000000",
            secondary: "#3949ab",
            secondaryLight: "#6f74dd",
            secondaryDark: "#00227b",
            accent: "#7e52cc",
            warning: "#7f0000"
        },
        border: {
            primary: "#454545",
            secondary: "#7179a8"
        }
    }
}

export const ThemeContext = React.createContext<ThemeType>(theme.light);