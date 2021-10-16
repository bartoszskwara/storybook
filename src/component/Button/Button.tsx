import React, {useContext} from "react";
import { createUseStyles } from "react-jss";
import {ThemeContext, ThemeType} from "../../theme";

const useStyles = createUseStyles(({ color, variant, theme } : { color: string, variant: string, theme: ThemeType }) => ({
    root: {
        color: variant === "contained" ? theme.fontColor[color] : theme.fontColor.contrast,
        background: variant === "contained" ? theme.background[color] : "transparent",
        border: `1px solid ${theme.border[color]}`,
        padding: 10,
        borderRadius: 5,
        fontWeight: 700,
        minWidth: 150,
        "&:hover": {
            cursor: "pointer",
            background: variant === "contained" ? theme.background[`${color}Light`] : "transparent",
        }
    }
}), { name: "button" });

export interface ButtonProps {
    label: string,
    color: "primary" | "secondary",
    variant: "contained" | "outlined"
}

const Button: React.FC<ButtonProps> = ({ label, color = "primary", variant = "contained" }) => {
    const theme = useContext<ThemeType>(ThemeContext);
    const classes = useStyles({ theme: { color, variant, theme } });
    return <button className={classes.root}>{label}</button>
}

export default Button;