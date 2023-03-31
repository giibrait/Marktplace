import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import * as S from './styles';
import formatValue from '../../utils/formatValue';

export default function FloatingCart() {
  const navigation = useNavigation();

  const products = useSelector(({ cart }) => cart);

  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((acc, product) => {
      const totalPrice = acc + product.price * product.amount;
      return totalPrice;
    }, 0);
    return formatValue(cartAmount);
  });

  return (
    <S.Container>
      <S.CartButton onPress={() => navigation.navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
        <S.CartButtonText>
          {cartSize} {cartSize === 1 ? 'item' : 'itens'}
        </S.CartButtonText>

        <S.CartPricing>
          <S.CartTotalPrice>{cartTotal}</S.CartTotalPrice>
        </S.CartPricing>

        <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
      </S.CartButton>
    </S.Container>
  );
}
