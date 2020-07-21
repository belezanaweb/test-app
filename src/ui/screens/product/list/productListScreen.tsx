import React, { useEffect, useState } from "react";
import { ProductCard } from "./components/productCard";
import { productListFetch } from "../../../../api/product/productFetch";
import { ScrollView, Text, View, ActivityIndicator } from "react-native";
import { screenStyle } from "./style";
import { Button } from "../../../components";
import { formatCurrency } from "../../../../global/utils";

export const ProductListScreen = ({ navigation }) => {

    const [productList, setProductList] = useState([]);
    const [listSize, setListSize] = useState(10);
    const [isLoading, setIsLoading] = useState(true);

    const populateProducts = async () => {
        setIsLoading(true);
        setProductList(await productListFetch(listSize));
        setIsLoading(false);
    };

    const navigateToDetails = (sku: string) => {
        navigation.navigate("ProductDetail", { productSKU: sku });
    }

    const renderProductCards = () => {

        return productList.map(p => {
            const imageObject = p.imageObjects.find(i => i.featured === true);

            return (
                <ProductCard
                    key={p.sku}
                    name={p.name}
                    sku={p.sku}
                    maxPrice={formatCurrency(p.priceSpecification.maxPrice)}
                    inventoryQuantity={p.inventory.quantity}
                    price={formatCurrency(p.priceSpecification.price)}
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