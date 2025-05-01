import { css } from "@/styled-system/css";

const styles = css({
    backgroundColor: 'black',
    borderRadius: '8px',
    fontSize: '16px',
    padding: '5px 25px',
    color: 'white',
})

export function ButtonContactUs() {
    return (
        <button
            className={styles}
        >
            Contact us
        </button>
    )
}