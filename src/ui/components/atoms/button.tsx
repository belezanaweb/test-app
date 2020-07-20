import React from "react";
import * as RNE from "react-native-elements";
import { atomStyle } from "./style";

export const Button = (props: IButtonProps) => {
    const buttonStyle = props.isPrimary ? atomStyle.PrimaryButton : atomStyle.SecondaryButton;
    return <RNE.Button title={props.title} {...buttonStyle} onPress={props.onPress} />
};

export interface IButtonProps {
    title: string;
    onPress: () => void;
    isPrimary: boolean;
}