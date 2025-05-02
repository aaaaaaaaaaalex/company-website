'use client';

import { css } from "@/styled-system/css";
import { container } from "../recipes/container";
import { grayBox } from "../recipes/gray-box";
import { header } from "../recipes/header";
import { Form } from "../components/form";
import { contactAction, State } from "../lib/actions";
import { useActionState } from "react";

const contactUs = css({
    padding: '100px 0'
})

export default function Page() {
    const initialState: State = { message: null };
    const [state, formAction, isPending] = useActionState(contactAction, initialState);

    return (
        <div className={grayBox()}>
            <div className={container()}>
                <div className={contactUs}>
                    {state.message ?
                        <h1 className={`${header({ visual: 'center' })} ${css({ mb: 5 })}`}>
                            {state.message}.
                            We will contact you shortly
                        </h1>
                        :
                        <>
                            <h1 className={`${header({ visual: 'center' })} ${css({ mb: 5 })}`}>Only CTA on the page</h1>
                            <Form
                                state={state}
                                formAction={formAction}
                                isPending={isPending}
                            />
                        </>
                    }
                </div>
            </div>
        </div>
    )
}