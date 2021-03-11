import React, {FC} from 'react';
import {connect} from 'react-redux';
import {IStorageBannerProps} from './StorageBanner.interface';
import {IAddStorage} from '../ducks/storage.interface';
import {StorageActions} from '../ducks/storage';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
const StorageBanner: FC<IStorageBannerProps> = (props) => (
  <div>
    <Button onClick={() => {
      props.increaseStorage(1);
    }}>Increase storage</Button>
    <span>Storage: {props.storage}</span>
  </div>
);

const mapStateToProps = (state:any) => ({
  storage: state.storage,
});

const mapDispatchToPros = (dispatch:any) => ({
  increaseStorage: (amount: number) => {
    const increaseAmountAction: IAddStorage = {
      type: StorageActions.INCREASE_STORAGE,
      amount: amount,
    };
    dispatch(increaseAmountAction);
  },
});

StorageBanner.propTypes = {
  storage: PropTypes.number.isRequired,
  increaseStorage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToPros)(StorageBanner);
