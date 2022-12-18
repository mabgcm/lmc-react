import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import translate from "../i18n/translate";

const Products = () => {
    return (
        <div>
            <nav>
                <Link to="product1">{translate("Link3")}</Link>
                <Link to="product2">{translate("Link4")}</Link>
                <Link to="product3">{translate("Link5")}</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Products