import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HTitle from './index';

describe('<HTitle />', () => {
  it('render HTitle with dumi', () => {
    const msg = 'dumi';

    render(<HTitle title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
