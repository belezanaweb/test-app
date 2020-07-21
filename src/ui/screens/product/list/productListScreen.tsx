import React, { useEffect, useState } from "react";
import { ProductCard } from "./components/productCard";
import { productFetch } from "../../../../api/product/productFetch";
import { ScrollView, Text, View, ActivityIndicator } from "react-native";
import { screenStyle } from "./style";
import { Button } from "../../../components";

export const ProductListScreen = () => {

    const [productList, setProductList] = useState([]);
    const [listSize, setListSize] = useState(10);
    const [isLoading, setIsLoading] = useState(true);

    const populateProducts = async () => {
        setIsLoading(true);
        setProductList(await productFetch(listSize));
        setIsLoading(false);
    };

    const navigateToDetails = (sku: string) => {

    }

    const renderProductCards = () => {

        return productList.map(p => {
            const imageObject = p.imageObjects.find(i => i.featured === true);

            return (
                <ProductCard
                    name={p.name}
                    sku={p.sku}
                    maxPrice={`R$ ${p.priceSpecification.maxPrice}`}
                    inventoryQuantity={p.inventory.quantity}
                    price={`R$ ${p.priceSpecification.price}`}
                    imageURI={imageObject ? imageObject.small : ""}
                    onPressDetail={() => { navigateToDetails(p.sku); }}
                />
            );
        });
    }

    useEffect(() => {
        populateProducts();
    }, []);

    const renderScreen = () => {
        if (isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator />
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Text style={screenStyle.Screen.titleStyle}>LISTA DE PRODUTOS</Text>
                    <ScrollView>
                        {renderProductCards()}
                    </ScrollView>
                    <View style={{ margin: 10, marginTop: 0 }}>
                        <Button isPrimary={false} title="Carregar mais produtos" onPress={() => { setListSize(prev => prev + 10); populateProducts(); }} />
                    </View>
                </View >
            );
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {renderScreen()}
        </View>
    )
};