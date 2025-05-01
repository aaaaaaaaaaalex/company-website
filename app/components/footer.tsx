import { css } from "@/styled-system/css"
import { smallHeader } from "../recipes/small-header"

const footer = css({
    position: 'sticky',
    bottom: '0',
    borderTop: '1px solid gray',
    padding: '60px 0',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
})

export function Footer() {
    return (
        <footer className={footer}>
            <h6 className={smallHeader()}>Some Company 2024</h6>
        </footer>
    )
}