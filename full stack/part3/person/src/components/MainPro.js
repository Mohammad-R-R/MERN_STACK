import React, {useState} from 'react';
import PersonForm from "./ProductForm";
import ProductsList from "./List";
import MyContext from "./Refresh";

const MainView = (props) => {

    const [refresh, setRefresh] = useState(false)
    return(
        <MyContext.Provider value={{refresh, setRefresh}}>
            <h1>Add a Product</h1>
            <PersonForm/>
            <hr/>
            <h1>All Products:</h1>
            <ProductsList/>
        </MyContext.Provider>
    )

};

export default MainView;