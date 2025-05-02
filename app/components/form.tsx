'use client';

import React from 'react';
import { css } from '@/styled-system/css';
import { button } from '../recipes/button';
import { State } from '../lib/actions';
import { Box, TextField } from '@mui/material';

const styleForm = css({
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: 300,
    margin: '0 auto',
    padding: 4,
})

export function Form(
    {
        state,
        formAction,
        isPending
    }: {
        state: State,
        formAction: (payload: FormData) => void,
        isPending: boolean,
    }
) {
    return (
        <div className={styleForm}>
            <Box
                component="form"
                action={formAction}
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}
            >
                <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    error={!!state.errors?.name}
                    helperText={state.errors?.name}
                />

                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    error={!!state.errors?.email}
                    helperText={state.errors?.email}
                />

                <TextField
                    label="Message"
                    name="message"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!state.errors?.message}
                    helperText={state.errors?.message}
                />

                <button className={button({ visual: "wide" })}>
                    {isPending ? 'Отправка...' : 'Отправить'}
                </button>
            </Box>
        </div>
    );
}