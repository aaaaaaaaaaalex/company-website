import { css } from "@/styled-system/css";
import { ButtonContactUs } from "./button-contact-us";
import { container } from "../recipes/container";
import { smallHeader } from "../recipes/small-header";

const header = css({
    position: 'sticky',
    top: '0',
    zIndex: '1',
    padding: '25px 0',
    borderBottom: '1px solid gray',
    backgroundColor: 'white'
})

const headerBody = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export function Header() {
    return (
        <header className={header}>
            <div className={container()}>
                <div className={headerBody}>
                    <h6 className={smallHeader()}>Some Company</h6>
                    <ButtonContactUs/>                    
                </div>
            </div>
        </header>
    )
}