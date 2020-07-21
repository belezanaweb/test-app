import React, { useEffect, useState } from "react";
import { Image, Text, View, ActivityIndicator, Alert, AlertButton } from "react-native";
import Modal from "react-native-modal";
import { productFetch } from "../../../../api/product/productFetch";
import { formatCurrency } from "../../../../global/utils";
import { Button, Card } from "../../../components";
import { screenStyle } from "./style";
import { Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProduct {
    sku?: string;
    name?: string;
    imageObjects?: Array<{ featured: boolean, medium: string }>;
    priceSpecification?: { maxPrice: number, price: number; installments: { numberOfPayments: number, monthlyPayment: number } };
    brand?: { name: string };
    inventory?: { quantity: number };
    details?: { description: string };
}

export const ProductDetailScreen = ({ route, navigation }) => {

    const { productSKU } = route.params;
    const [product, setProduct] = useState<IProduct>({});
    const [isLoading, setIsLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const fetchProduct = async () => {
        setIsLoading(true);
        setProduct(await productFetch(productSKU));
        setIsLoading(false);
    }

    useEffect(() => { fetchProduct() }, []);

    const renderImage = (): JSX.Element => {
        if (!product.imageObjects) {
            return;
        }
        const image = product.imageObjects.find(i => i.featured === true);
        if (image && image.medium) {
            return (
                <View style={{ width: "100%", alignItems: "center", marginBottom: 21 }}>
                    <Image style={{ width: 163, height: 163 }} source={{ uri: image.medium }} />
                </View>
            );
        }
    };

    const renderPrice = (): JSX.Element => {
        const elements: JSX.Element[] = [];

        if (product.priceSpecification) {
            if (product.priceSpecification.maxPrice > product.priceSpecification.price) {
                elements.push(<Text key="txtMaxPrice" style={screenStyle.Screen.maxPriceStyle}>{formatCurrency(product.priceSpecification.maxPrice)}</Text>);
            }
            elements.push(<Text key="txtPrice" style={screenStyle.Screen.priceStyle}>{formatCurrency(product.priceSpecification.price)}</Text>);
            elements.push(<Text key="txtMaxInstallment" style={screenStyle.Screen.installmentStyle}>{`${product.priceSpecification.installments.numberOfPayments}x de ${formatCurrency(product.priceSpecification.installments.monthlyPayment)}`}</Text>);
        }
        return <View>{elements}</View>
    };

    const renderButton = () => {
        if (product.inventory.quantity > 0) {
            const buttons: AlertButton[] = [{ text: "Sim" }, { text: "Não" }];
            return <Button isPrimary={true} title="Compre" onPress={() => { Alert.alert("Comprar", "Deseja comprar o produto?", buttons) }} />;
        } else {
            return <Button isPrimary={false} title="Avise-me" onPress={() => { setIsModalVisible(true) }} />;
        }
    };

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
                    <Text style={screenStyle.Screen.titleStyle}>DETALHES DO PRODUTO</Text>
                    <View style={{ flex: 1, margin: 10 }}>
                        <Card>
                            <View
                                style={{ flexDirection: "column", width: "100%", height: "100%", justifyContent: "space-between" }}>
                                <Text style={screenStyle.Screen.nameStyle}>{product.name}</Text>
                                {renderImage()}
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 22 }}>
                                    {renderPrice()}
                                    <View style={{ justifyContent: "flex-end" }}>
                                        <Text style={screenStyle.Screen.brandStyle}>{product.brand.name}</Text>
                                        <Text style={screenStyle.Screen.skuStyle}>{`cod: ${product.sku}`}</Text>
                                    </View>
                                </View>
                                {renderButton()}
                                <Text style={screenStyle.Screen.productDescTitleStyle}>Descrição do Produto</Text>
                                <Text style={screenStyle.Screen.productDescStyle}>{product.details.description}</Text>
                            </View>
                        </Card>
                    </View>
                    <Modal isVisible={isModalVisible}>
                        <View style={{ backgroundColor: "#FFF", height: 200, padding: 5 }}>
                            <Text>Informe seu nome e e-mail:</Text>
                            <Input placeholder="Nome" />
                            <Input placeholder="E-mail" />
                            <View style={{ alignItems: "flex-end", paddingRight: 5 }}>
                                <TouchableOpacity onPress={() => { setIsModalVisible(false) }}><Text>OK</Text></TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            )
        }
    };

    return renderScreen();

};
