import {Routes, Route} from "react-router-dom";
import {CartPage, HomePage, Login, ProductDetail, ProductsList, Register} from "../pages";
import {ProtectedRoute} from "./ProtectedRoute";
import {OrderPage} from "../pages/Order/OrderPage";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'products'} element={<ProductsList/>}/>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Route path={'products/:id'} element={<ProductDetail/>}/>

                <Route path={'login'} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>

                <Route path={'cart'} element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
                <Route path={'order-summary'} element={<ProtectedRoute><OrderPage/></ProtectedRoute>}/>
            </Routes>
        </>
    );
};