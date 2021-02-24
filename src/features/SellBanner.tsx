import React, {FC} from 'react';
import {connect} from 'react-redux';
import {ISellBannerProps} from './SellBanner.interface';
import {IDecreaseStorage} from '../ducks/storage.interface';
import {StorageActions} from '../ducks/storage';
import PropTypes from 'prop-types';
import {useState} from 'react';
const StorageBanner: FC<ISellBannerProps> = (props) => {
  const [price] = useState<number>(4);

  return (
    <div>
      {props.revenue}
      <button onClick={() => {
        props.decreaseStorage(1, price);
      }}>Increase storage</button>
      <span>Storage: {props.revenue}</span>
    </div>
  );
};

const mapStateToProps = (state:any) => ({
  revenue: state.revenue,
});

const mapDispatchToPros = (dispatch: any) => ({

  decreaseStorage: (amount: number, price: number) => {
    const decreaseStorageAction: IDecreaseStorage = {
      type: StorageActions.DECREASE_STORAGE,
      amount: amount,
      price: price,
    };
    dispatch(decreaseStorageAction);
  },
});

StorageBanner.propTypes = {
  revenue: PropTypes.number.isRequired,
  decreaseStorage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToPros)(StorageBanner);
