import { css } from "@/styled-system/css";

export default function Home() {
    return (
        // <div className={css({ fontSize: "2xl", fontWeight: 'bold', color: 'blue.300' })}>Hello 🐼!</div>
        <>
            <Header/>
            <Intro/>
            <Info/>
            <Call/>
            <Footer/>
        </>
    )
}