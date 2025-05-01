import { cva } from "../../styled-system/css";


export const button = cva({
    base: {
        px: 16,
        py: 1,
        borderRadius: 'lg',
        fontWeight: 'medium',
        cursor: 'pointer',
        border: '1px solid black'
    },
    variants: {
        visual: {
            solid: {
                bg: 'black',
                color: 'white',
                _hover: {
                    bg: 'white',
                    color: 'black',
                },
            },
            wide: {
                bg: 'black',
                color: 'white',
                _hover: {
                    bg: 'white',
                    color: 'black',
                },
                width: '100%'
            }
        },
    },
    defaultVariants: {
        visual: 'solid',
    },
})
