import { Metadata } from "next";
import Service from "../src/screens/Service";

export const metadata: Metadata = {
  title: "Increment | About",
  description: "Next Level Increment",
};

export default function Abouties() {
  return (
    <Service/>
  );
}
