import { css } from "@/styled-system/css"
import { header } from "../recipes/header"
import { grayBox } from "../recipes/gray-box"
import { ButtonContactUs } from "./button-contact-us"

const call = css({
    padding: '90px 0'
})

const callFooter = css({
    display: 'flex',
    justifyContent: 'center',
})

export function Call() {
    return (
        <div className={grayBox()}>
            <div className={call}>
                <h2 className={`${header({ visual: 'center' })} ${css({ mb: 8 })}`}>Less important title</h2>
                <div className={callFooter}>
                    <ButtonContactUs/>
                </div>
            </div>
        </div>
    )
}