import React from 'react';
import { Route } from "react-router-dom";
import Overview from "../../components/collections-overview/overview";

const ShopPage = () => {
    return (
      <div className='shop-page'>
        <Route exact='' />
        <Overview />
      </div>
    );
}


export default ShopPage;
