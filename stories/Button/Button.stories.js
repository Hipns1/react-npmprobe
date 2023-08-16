import { options } from "yargs";
import Button from "./Button";

export default {
    title: 'Button',
    component: Button
}

export const Default = () => <Button />

export const Colors = () => options.color.map((color, index) => {
    return <Button key={index} color={color} />
})

export const Sizes = () => options.sizes.map((size, index) => {
    return <Button key={index} size={size} />
})