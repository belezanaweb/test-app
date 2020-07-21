import React from "react";
import { Image, Text, View } from "react-native";
import { Button, Card } from "../../../../components";
import { componentStyle } from "./style";

export const ProductCard = (props: IProductCardProps) => {

    const renderPrice = (): JSX.Element => {
        const elements: JSX.Element[] = [];

        if (props.maxPrice > props.price) {
            elements.push(
                <Text key="txtMaxPrice" style={componentStyle.ProductCard.maxPriceStyle}>{props.maxPrice}</Text>
            );
        }
        elements.push(
            <Text
                key="txtPrice"
                style={componentStyle.ProductCard.priceStyle}>{props.price}</Text>
        );
        return <View>{elements}</View>;
    };

    return (
        <View style={componentStyle.ProductCard.outContainerStyle}>
            <Card>
                <View style={componentStyle.ProductCard.inContainerStyle}>
                    <View>
                        <Image
                            style={componentStyle.ProductCard.imageStye}
                            source={{
                                uri: props.imageURI
                            }}
                        />
                        <Text style={componentStyle.ProductCard.skuTextStyle}>{`cod: ${props.sku}`}</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: "space-between" }}>
                        <Text style={componentStyle.ProductCard.nameTextStyle}>{props.name}</Text>
                        <View>
                            {renderPrice()}
                        </View>
                        <Button isPrimary={true} title="ver detalhes" onPress={() => { }} />
                    </View>
                </View>
            </Card>
        </View>
    );
};

export interface IProductCardProps {
    sku: string;
    name: string;
    price: string;
    maxPrice?: string;
    inventoryQuantity: number;
    imageURI: string;
};