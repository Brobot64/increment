import { Metadata } from "next";
import AboutUs from "../src/screens/AboutUs";

export const metadata: Metadata = {
    title: "Increment | Capabilities",
    description: "Next Level Increment",
};

export default function Servicey() {
    return (
        <AboutUs/>
    )
}