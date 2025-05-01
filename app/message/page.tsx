import { css } from "@/styled-system/css";
import { container } from "../recipes/container";
import { grayBox } from "../recipes/gray-box";
import { header } from "../recipes/header";

const contactUs = css({
    padding: '100px 0'
})

export default function Page() {
    return (
        <div className={grayBox()}>
            <div className={container()}>
                <div className={contactUs}>
                    <h1 className={header({ visual: 'center' })}>Message generated on the server</h1>
                </div>
            </div>
        </div>
    )
}