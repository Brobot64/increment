import { Metadata } from "next";
import ContactUs from "../src/screens/ContactUs";


export const metadata: Metadata = {
    title: "Increment | Contact",
    description: "Next Level Increment",
};

export default function Contact() {
  return (
    <ContactUs/>
  );
}
