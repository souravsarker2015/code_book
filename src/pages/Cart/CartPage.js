import {CartList} from "./components/CartList";
import {CartEmpty} from "./components/CartEmpty";
import {UseCart} from "../../context";

export const CartPage = () => {
    const {cartList} = UseCart()
    return (
        <main>
            {cartList.length ? <CartList/> : <CartEmpty/>}
        </main>
    );
};