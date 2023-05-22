import {CartList} from "./components/CartList";
import {CartEmpty} from "./components/CartEmpty";
import {UseCart} from "../../context";
import {UseTitle} from "../../hooks/UseTitle";

export const CartPage = () => {
    const {cartList} = UseCart();
    UseTitle(`Cart(${cartList.length})`);
    return (
        <main>
            {cartList.length ? <CartList/> : <CartEmpty/>}
        </main>
    );
};