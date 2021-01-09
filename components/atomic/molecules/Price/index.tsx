import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Text from '../../atoms/Text';

type props = {
  current: number;
  old?: number;
  split?: number;
  type?: 'big' | 'medium';
};

const Price: React.FC<props> = ({
  current,
  old,
  split = 1,
  type = 'medium',
}): JSX.Element => {
  const [currentPrice, setCurrentPrice] = useState<string>();
  const [oldPrice, setOldPrice] = useState<string>();
  const [quota, setQuota] = useState<number>(current / split);
  const [paymentInfo, setPaymentInfo] = useState<string>();
  const sizeByType = {
    big: {
      old: 20,
      current: 32,
      quote: 17,
    },
    medium: {
      old: 15,
      current: 25,
      quote: 12,
    },
  };
  useEffect(() => {
    setCurrentPrice(
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(current)
    );
    if (old) {
      setOldPrice(
        new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(old)
      );
    }
  }, [current, old]);

  useEffect(() => {
    setQuota(current / split);
    if (current != quota) {
      const quotaFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(quota);
      setPaymentInfo(`${split}x de ${quotaFormatted}`);
    }
  }, [split, quota]);

  return (
    <View style={{ alignItems: 'flex-start' }}>
      {old && (
        <Text color="#CCCCCC" size={sizeByType[type].old} lineThrough>
          {oldPrice}
        </Text>
      )}
      <Text size={sizeByType[type].current} color="#E66100" fontWeight="700">
        {currentPrice}
      </Text>
      {split && (
        <Text color="#6F6F6F" fontWeight="400" size={sizeByType[type].quote}>
          {paymentInfo}
        </Text>
      )}
    </View>
  );
};

export default Price;
