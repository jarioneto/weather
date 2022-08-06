import React from 'react';
import { render } from '@testing-library/react';

// Components
import Loader, { SectionLoader } from './Loader';

describe('Loader component', () => {
  test('Should render the SectionLoader component', () => {
    const { container } = render(<SectionLoader />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="weather--c-btMqyH"
        >
          <div
            class="weather--c-kqvlEC"
            role="progressbar"
          >
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    `);
  });

  test('Should render the Loader component', () => {
    const { container } = render(<Loader />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="weather--c-kqvlEC"
          role="progressbar"
        >
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    `);
  });
});
