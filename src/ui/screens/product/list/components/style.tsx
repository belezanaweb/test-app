import { StyleSheet } from "react-native";
import { theme } from "../../../../theme";

export const componentStyle = {
    ProductCard: StyleSheet.create({
        outContainerStyle: {
            margin: 10,
            marginTop: 0
        },
        inContainerStyle: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: 145
        },
        imageStye: {
            width: 108,
            height: 108,
            marginBottom: 16
        },
        skuTextStyle: {
            fontSize: theme.font.size.xxs,
            color: "#C4C4C4",
            textAlign: "center",
            fontFamily: theme.font.family.primary,
            fontWeight: "bold"
        },
        nameTextStyle: {
            fontFamily: theme.font.family.primary,
            fontSize: theme.font.size.xxs,
            color: "#212121"
        },
        maxPriceStyle: {
            fontSize: theme.font.size.xxs,
            fontFamily: theme.font.family.primary,
            textDecorationLine: "line-through",
            color: "#999999"
        },
        priceStyle: {
            fontSize: theme.font.size.sm,
            fontFamily: theme.font.family.primary,
            color: theme.color.primary,
            fontWeight: "bold",
        }
    })
};