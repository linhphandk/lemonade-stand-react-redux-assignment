import React, {FC} from 'react';
import {connect} from 'react-redux';
import {ISellBannerProps} from './SellBanner.interface';
import {IDecreaseStorage} from '../ducks/storage.interface';
import {StorageActions} from '../ducks/storage';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
const StorageBanner: FC<ISellBannerProps> = (props) => {
  const [price] = useState<number>(4);

  return (
    <div>
      <Button onClick={() => {
        props.storage > 0 ?
          props.decreaseStorage(1, price) :
          console.warn('storage is empty');
      }}>Sell</Button>
      <span>Revenue: {props.revenue}</span>
    </div>
  );
};

const mapStateToProps = (state:any) => ({
  revenue: state.revenue,
  storage: state.storage,
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
  storage: PropTypes.number.isRequired,
  decreaseStorage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToPros)(StorageBanner);
