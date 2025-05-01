import { Info } from "./components/info";
import { Intro } from "./components/intro";
import { Call } from "./components/call";

export default function Home() {
    return (
        <>
            <Intro/>
            <Info/>
            <Call/>
        </>
    )
}