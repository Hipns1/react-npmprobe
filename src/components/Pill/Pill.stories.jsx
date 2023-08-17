import React from "react";
import { Pill } from "./Pill";

export default {
    title: 'Pill',
    component: Pill,
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: "select",
            options: ['correct', "warning", "error"]
        }
    }
}

const Template = (args) => <Pill {...args} />

export const Default = Template.bind({})
Default.args = {
    status: "correct"
}