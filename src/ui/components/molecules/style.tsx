import { StyleSheet } from "react-native";

export const moleculeStyle = {
    Card: StyleSheet.create({
        containerStyle: {
            padding: 5,
            backgroundColor: "#FFF",
            borderRadius: 4,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4,

            elevation: 4,
        }
    })
};