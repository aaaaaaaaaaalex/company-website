import { cva } from "../../styled-system/css";

export const smallHeader = cva({
    base: {
        fontSize: '20px',
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
