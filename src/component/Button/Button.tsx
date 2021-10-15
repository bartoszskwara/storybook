import React, {useContext} from "react";
import { createUseStyles, useTheme } from "react-jss";
import {ThemeContext, ThemeType} from "../../theme";

const useStyles = createUseStyles(({ variant, theme } : { variant: string, theme: ThemeType }) => ({
    root: {
        color: variant === "primary" ? theme.fontColor.primary : theme.fontColor.secondary,
        background: variant === "primary" ? theme.background.primary : theme.background.secondary,
        border: theme.border.primary,
        padding: 10,
        borderRadius: 5,
        fontWeight: 700,
        "&:hover": {
            cursor: "pointer",
            background: theme.background.accent,
        }
    }
}), { name: "button" });

export interface ButtonProps {
    label: string,
    variant: "primary" | "secondary"
}

const Button: React.FC<ButtonProps> = ({ label, variant = "primary" }) => {
    const theme = useContext<ThemeType>(ThemeContext);
    const classes = useStyles({ theme: { variant, theme } });
    return <button className={classes.root}>{label}</button>
}

export default Button;