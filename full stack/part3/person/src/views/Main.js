
import React, {useState} from 'react';
import {Router} from "@reach/router";
import ProductInfo from "../components/Info";
import MainView from "../components/MainPro";
import UpdateProduct from "../components/UpdateProduct";

const Main= () => {

    return (
        <div>
            <Router>
                <MainView path={"/api/product/"}/>
                <ProductInfo path={"/api/product/:id"}/>
                <UpdateProduct path={"/api/product/:id/edit"}/>
            </Router>
        </div>
    )
}
export default Main ;