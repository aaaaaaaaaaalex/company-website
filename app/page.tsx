import { Header } from "./components/header";
import { Info } from "./components/info";
import { Intro } from "./components/intro";
import { Call } from "./components/call";
import { Footer } from "./components/footer";

export default function Home() {
    return (
        <>
            <Header/>
            <Intro/>
            <Info/>
            <Call/>
            <Footer/>
        </>
    )
}