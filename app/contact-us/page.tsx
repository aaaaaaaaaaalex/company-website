import { css } from "@/styled-system/css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { container } from "../recipes/container";
import { grayBox } from "../recipes/gray-box";
import { header } from "../recipes/header";
import { Form } from "../components/form";

const contactUs = css({
    padding: '100px 0'
})

export default function ContactUs() {
    return (
        <>
            <Header/>
            <div className={grayBox()}>
                <div className={container()}>
                    <div className={contactUs}>
                        <h1 className={`${header({ visual: 'center' })} ${css({ mb: 3 })}`}>Only CTA on the page</h1>
                        <Form/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}