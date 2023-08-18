import React from "react";
import { options } from "./cosntants";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    text: "Button",
    color: "primary",
    size: "sm",
    typeSubmit: false
  },
  argTypes: {
    text: {
      description: "Text of the button",
    },
    color: {
      description: "**options:**",
      table: {
        type: {
          summary: options.colors.map((option) => `'${option}'`).join("|"),
        },
      },
      control: "select",
      options: options.colors,
    },
    size: {
      description: "**options:**",
      table: {
        type: {
          summary: options.sizes.map((option) => `'${option}'`).join("|"),
        },
      },
      control: "select",
      options: options.sizes,
    },
    onClickFn: {
      description: "onClick function",
    },
    typeSubmit: {
      description: "typeSubmit={true}, type = 'submit' | typeSubmit={false}, type = 'button'",
      control: "boolean"
    }
  },
};

const Template = (args) => <Button {...args} />;
const ListTemplate = ({ items, ...args }) =>
  items.map((item, index) => <Button key={index} {...args} {...item} />);

export const Default = Template.bind({});

export const Colors = ListTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
