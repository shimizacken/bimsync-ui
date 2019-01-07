import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello button!</Button>
    ))
    .add('with some emoji', () => (
        <Button>
            <span>😀 😎 👍 💯</span>
        </Button>
    ));