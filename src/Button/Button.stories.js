import React from "react";
import Button from "./Button";
import {action} from '@storybook/addon-actions'

export default {
  // name of this story UIa
  title: "Button",
  argTypes: { onClick: { action: "clicked" } },
};

export const DefaultButton = () => (
    <Button outline onClick={ action('clicked')}>
    howdy!
  </Button>
);
export const OutlineButton = () => <Button outline>I'm outlined.</Button>;
export const SmallButton = () => <Button size="smallBoi">click me!</Button>;
export const LargeButton = () => <Button size="smallBoi">click me!</Button>;
