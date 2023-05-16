import {Hero} from "./components/Hero";
import {FeatureProducts} from "./components/FeatureProducts";
import {Testimonials} from "./components/Testimonials";
import {Faq} from "./components/Faq";
import {UseTitle} from "../../hooks/UseTitle";

export const HomePage = () => {
    UseTitle("Access Latest Books")
    return (

        <main>
            <Hero/>
            <FeatureProducts/>
            <Testimonials/>
            <Faq/>

        </main>
    );
};