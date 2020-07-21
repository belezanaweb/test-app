import React, { useEffect, useState } from "react";
import { ProductCard } from "./components/productCard";
import { productFetch } from "../../../../api/product/productFetch";
import { ScrollView, Text } from "react-native";
import { screenStyle } from "./style";

export const ProductListScreen = () => {

    const [productList, setProductList] = useState([]);

    const populateProducts = async () => {
        setProductList(await productFetch());
    };

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
                />
            );
        });
    }

    useEffect(() => {
        populateProducts();
    }, []);


    useEffect(() => {

    }, [productList]);

    return (
        <ScrollView>
            <Text style={screenStyle.Screen.titleStyle}>LISTA DE PRODUTOS</Text>
            {renderProductCards()}
        </ScrollView>
    )
};