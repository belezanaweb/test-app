import React from "react";
import { View, Text } from "react-native";
import { moleculeStyle } from "./style";

export const Card = (props: ICardProps) => {
    return (
        <View style={moleculeStyle.Card.containerStyle}>
            {props.children}
        </View>
    );
};

export interface ICardProps {
    children: any;
};