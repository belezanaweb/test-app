import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const screenStyle = {
    Screen: StyleSheet.create({
        titleStyle: {
            fontSize: theme.font.size.sm,
            color: "#212121",
            textAlign: "center",
            fontFamily: theme.font.family.primary,
            fontWeight: "bold",
            marginTop: 8,
            marginBottom: 9
        },
    })
};