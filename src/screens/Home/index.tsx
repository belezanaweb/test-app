import React, { useEffect } from 'react';
import { View } from 'react-native';
import Image from '../../../components/atomic/atoms/Image';
import Card from '../../../components/atomic/atoms/Card';
import ProductCode from '../../../components/atomic/molecules/ProductCode';
import ProductDescription from '../../../components/atomic/molecules/ProductDescription';
import { useNavigation } from '@react-navigation/native';
import { products, productsDetail } from '../../services/boticatio.api';
import useBoticario from '../../hooks/useBoticario';
const Home = () => {
  const { productList, setPage, productDetail, setSku } = useBoticario();
  const navigation = useNavigation();
  useEffect(() => {}, [productDetail]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <Image
          type="big"
          uri="https://res.cloudinary.com/beleza-na-web/image/upload/w_297,f_auto,fl_progressive,q_auto:best/v1/imagens/5/carolina-herrera-212-own-the-party-copo-51916-3520948609418638679.jpg"
        />
        <ProductDescription
          title="Descrição do Produto"
          description="Good Girl Velvet Fatale Edição de Colecionador é um perfume Carolina Herrera feminino oriental floral. Good Girl Velvet Fatale tem a mesma fragrância Good Girl Tradicional em um novo "
        />
        <ProductCode name="Good Girl" sku="54417" />
      </Card>
    </View>
  );
};

export default Home;
