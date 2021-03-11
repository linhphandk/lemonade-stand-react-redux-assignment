import React, {FC} from 'react';
import SellBanner from '../features/SellBanner';
import StorageBanner from '../features/StorageBanner';

const Homepage: FC = ()=>(
  <>
    <StorageBanner />
    <SellBanner />
  </>
);

export default Homepage;
