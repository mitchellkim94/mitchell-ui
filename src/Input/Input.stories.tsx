import { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import React from 'react'

export default {
    title: 'Design System/Input',
    component: Input,
} as Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const InputWithLabel: Story = {
    name: 'Input with label',
    args: {
        label: 'Label',
    },
    render: (args) => (
        <>
            <Input {...args} />
        </>
    ),
}

export const DefaultInput: Story = {
    name: 'Default Input',
    render: (args) => (
        <>
            <Input {...args} />
        </>
    ),
}
