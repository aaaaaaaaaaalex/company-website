'use client';

import React from 'react';
import { css } from '@/styled-system/css';
import { Form as AntForm, Input } from 'antd';
import { button } from '../recipes/button';
const { TextArea } = Input;

const styleForm = css({
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: 300,
    margin: '0 auto',
    padding: 4,
})

export function Form() {
    return (
        <div className={styleForm}>
            <AntForm
                layout='vertical'
                size='large'
            >
                <AntForm.Item
                    label="Name"
                    name="name"
                >
                    <Input placeholder="value" />
                </AntForm.Item>
                <AntForm.Item
                    label="Email"
                    name="email"
                >
                    <Input placeholder="value" />
                </AntForm.Item>
                <AntForm.Item
                    label="Message"
                    name="message"
                >
                    <TextArea rows={3} placeholder="value" />
                </AntForm.Item>
                <AntForm.Item>
                    <button className={button({ visual: 'wide' })} type='submit'>Submit</button>
                </AntForm.Item>
            </AntForm>
        </div>
    );
}