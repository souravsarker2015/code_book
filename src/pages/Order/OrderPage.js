import {OrderSuccess} from "./components/OrderSuccess";
import {OrderFail} from "./components/OrderFail";
import {useLocation} from "react-router-dom";
import {UseTitle} from "../../hooks/UseTitle";

export const OrderPage = () => {
    const {state} = useLocation();
    UseTitle("Order Summary");
    return (
        <main>
            {state.status ? (
                <OrderSuccess data={state.data}/>
            ) : (
                <OrderFail/>
            )}

        </main>
    );
};