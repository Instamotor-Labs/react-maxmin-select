jest.unmock('../bundle-test');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import MaxMin from '../bundle-test';

describe('MaxMin', () => {
    it('renders', () => {
        const rangeSlider = TestUtils.renderIntoDocument(
            <div/>
        );
        expect(rangeSlider).toBeDefined();
    });
});
