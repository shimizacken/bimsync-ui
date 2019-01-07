import { configure } from '@storybook/react';

function loadStories(params) {
    
    require('../stories/index.js');
}

configure(loadStories, module);