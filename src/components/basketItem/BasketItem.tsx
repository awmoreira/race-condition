import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import BasketItemModel from '../../models/BasketItem';
import { incrementItem, decrementItem } from '../../store/basket/basketActions';

import './basketItem.scss';
import DebouncedButton from '../DebounceButton';

interface BasketItemProps {
  basketItem: BasketItemModel
}

function BasketItem({ basketItem }: BasketItemProps) {
  const dispatch = useDispatch();

  const onMinusButtonClick = useCallback(() => {
    dispatch(decrementItem(basketItem))
  }, []);

  const onPlusButtonClick = useCallback(() => {
    dispatch(incrementItem(basketItem))  
  }, []);

  return (
    <div className="basket-item">
      <p className='basket-item--info basket-item__name'>
        Item Name <span>{basketItem.name}</span>
      </p>
      <div className='basket-item--info basket-item__quantity'>
        Quantity
        <div className="basket-item__actions">
          <DebouncedButton
            className='basket-item__button'
            onClick={onMinusButtonClick}
            debounceTime={1000}
          >
            -
          </DebouncedButton>          
          <span>{basketItem.quantity}</span>
          <DebouncedButton
            className='basket-item__button'
            onClick={onPlusButtonClick}
            debounceTime={1000}
          >
            +
          </DebouncedButton>        
        </div>
      </div>
      <p className='basket-item--info basket-item__total'>
        Total <span> {basketItem.itemPrice * basketItem.quantity}</span>
      </p>
    </div>
  )
}

export default BasketItem;