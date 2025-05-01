import { cva } from "../../styled-system/css";

export const header = cva({
    base: {
        fontSize: '40px',
        fontWeight: '600'
    },
    variants: {
        visual: {
            center: {
                textAlign: 'center'
            },
        },
    },
})
