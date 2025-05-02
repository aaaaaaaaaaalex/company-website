import { css } from "@/styled-system/css"
import { ButtonContactUs } from "./button-contact-us"
import { header } from "../recipes/header"
import { smallHeader } from "../recipes/small-header"
import { container } from "../recipes/container"

const info = css({
    padding: '40px 0',
})

const grid = css({
    display: 'grid',
    gridTemplateColumns: ['1fr', null, 'repeat(3, 1fr)'],
    gap: '100px'
})

const infoFooter = css({
    margin: '50px 0',
    display: 'flex',
    justifyContent: 'center',
})

const text = css({
    color: 'gray'
})



export function Info() {
    return (
        <div className={info}>
            <div className={container()}>
                <h2 className={`${header({ visual: 'center' })} ${css({ mb: 16 })}`}>Also very important title</h2>
                <div className={grid}>
                    <div>
                        <h6 className={`${smallHeader()} ${css({ mb: 2 })}`}>Title</h6>
                        <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
                    </div>
                    <div>
                        <h6 className={`${smallHeader()} ${css({ mb: 2 })}`}>Title</h6>
                        <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
                    </div>
                    <div>
                        <h6 className={`${smallHeader()} ${css({ mb: 2 })}`}>Title</h6>
                        <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
                    </div>
                    <div>
                        <h6 className={`${smallHeader()} ${css({ mb: 2 })}`}>Title</h6>
                        <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
                    </div>
                    <div>
                        <h6 className={`${smallHeader()} ${css({ mb: 2 })}`}>Title</h6>
                        <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
                    </div>
                    <div>
                        <h6 className={`${smallHeader()} ${css({ mb: 2 })}`}>Title</h6>
                        <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum</p>
                    </div>
                </div>
                <div className={infoFooter}>
                    <ButtonContactUs />
                </div>
            </div>
        </div>
    )
}