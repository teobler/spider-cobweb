import React from 'react';
import renderer from 'react-test-renderer';
import Col from '../col';
import Row from '../row';

describe('<Col />', () => {
  it('should render a full col in row', () => {
    const layoutJson = renderer
      .create(
        <Row>
          <Col span={24} />
        </Row>,
      )
      .toJSON();
    expect(layoutJson).toMatchSnapshot();
  });
});
