import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const atomStyle = {
    PrimaryButton: StyleSheet.create({
        buttonStyle: {
            backgroundColor: theme.color.primary,
        },
        containerStyle: {
            borderRadius: 4,
        },
        titleStyle:{
            color: theme.color.onPrimary,
            fontFamily: theme.font.family.primary,
            fontWeight: "bold",
            fontSize: theme.font.size.sm,
            textTransform: "uppercase"
        }
    }),

    SecondaryButton: StyleSheet.create({
        buttonStyle: {
            backgroundColor: theme.color.secondary,
        },
        containerStyle: {
            borderRadius: 4,
            borderWidth: 2, 
            borderColor: theme.color.onSecondary
        },
        titleStyle:{
            color: theme.color.onSecondary,
            fontFamily: theme.font.family.secondary,
            fontWeight: "bold",
            fontSize: theme.font.size.sm,
            textTransform: "uppercase"
        }
    })
};