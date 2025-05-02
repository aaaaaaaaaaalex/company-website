'use client';

import { useRouter } from 'next/navigation'
import { button } from "../recipes/button";

export function ButtonContactUs() {
    const router = useRouter()

    return (
        <button
            className={button()}
            onClick={() => router.push('/contact-us')}
        >
            Contact us
        </button>
    )
}