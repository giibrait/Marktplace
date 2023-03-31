import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import FloatingCart from '../../components/FloatingCart';

import * as S from './styles';

export default function Catalog() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <S.Container>
      <S.ProductContainer>
        <S.ProductList
          data={products}
          keyExtractor={(item) => item.id}
          listFooterComponent={<View />}
          listFooterComponentStyle={{ height: 80 }}
          contentInset={{ bottom: 60 }}
          renderItem={({ item }) => (
            <S.Product>
              <S.ProductImage source={{ uri: item.image_url }} />
              <S.ProductTitle>{item.title}</S.ProductTitle>
              <S.PriceContainer>
                <S.ProductPrice>{formatValue(item.price)}</S.ProductPrice>
                <S.ProductButton onPress={() => handleAddToCart(item.id)}>
                  <S.ProductButtonText>adicionar</S.ProductButtonText>
                  <FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
                </S.ProductButton>
              </S.PriceContainer>
            </S.Product>
          )}
        />
      </S.ProductContainer>
      <FloatingCart />
    </S.Container>
  );
}
