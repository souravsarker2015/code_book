import {DashboardCart} from "./components/DashboardCart";
import {DashboardEmpty} from "./components/DashboardEmpty";
import {useEffect, useState} from "react";
import {getUserOrders} from "../../services";
import {UseTitle} from "../../hooks/UseTitle";

export const DashboardPage = () => {
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        async function fetchOrders() {
            const data = await getUserOrders();
            setOrders(data);
        }

        fetchOrders();
    }, []);

    UseTitle("Dashboard");

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
            </section>

            <section>
                {
                    orders.length && orders.map((order) => (
                            <DashboardCart key={order.id} order={order}/>
                        )
                    )

                }
            </section>

            <section>
                {!orders.length && (
                    <DashboardEmpty/>
                )}
            </section>

        </main>
    )
};