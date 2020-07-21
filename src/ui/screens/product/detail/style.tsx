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
        nameStyle: {
            fontSize: theme.font.size.xl,
            fontWeight: "500",
            fontFamily: theme.font.family.primary,
            padding: 10,
            paddingTop: 8,
            paddingBottom: 12
        },
        maxPriceStyle: {
            fontFamily: theme.font.family.primary,
            fontSize: theme.font.size.sm,
            color: "#CCCCCC",
            textDecorationLine: "line-through"
        },
        priceStyle: {
            fontFamily: theme.font.family.primary,
            fontSize: theme.font.size.xxl,
            color: theme.color.primary,
            fontWeight: "500"
        },
        installmentStyle: {
            fontFamily: theme.font.family.primary,
            fontSize: theme.font.size.lg,
            color: "#6F6F6F",
        },
        brandStyle: {
            fontFamily: theme.font.family.primary,
            fontSize: theme.font.size.xl,
            color: "#212121",
            fontWeight: "500",
            textAlign: "right"
        },
        skuStyle: {
            fontFamily: theme.font.family.primary,
            fontSize: theme.font.size.sm,
            color: "#C4C4C4",
            textAlign: "right"
        },
        productDescTitleStyle: {
            fontFamily: theme.font.family.primary,
            fontSize: theme.font.size.md,
            color: "#212121",
            fontWeight: "500",
            marginTop: 18
        },
        productDescStyle: {
            fontFamily: theme.font.family.primary,
            fontSize: theme.font.size.xxs,
            color: "#777777"
        }
    })
};