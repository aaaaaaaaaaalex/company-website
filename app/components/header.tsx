import { css } from "@/styled-system/css";
import { ButtonContactUs } from "./button-contact-us";

const styles = css({
    position: 'sticky',
    padding: '30px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

export function Header() {
    return (
        <header className={styles}>
            <div>Some Company</div>
            <ButtonContactUs/>
        </header>
    )
}