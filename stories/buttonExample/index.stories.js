import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonExample } from '../../src/components/buttonExample';

storiesOf('Button Example', module)
    .add('with text', () => (
        <ButtonExample>Hello button!</ButtonExample>
    ))
    .add('with some emoji', () => (
        <ButtonExample>
            <span>😀 😎 👍 💯</span>
        </ButtonExample>
    ));