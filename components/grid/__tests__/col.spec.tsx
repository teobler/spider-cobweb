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

  it('should render a col with offset in row', () => {
    const layoutJson = renderer
      .create(
        <Row>
          <Col span={12} offset={12} />
        </Row>,
      )
      .toJSON();
    expect(layoutJson).toMatchSnapshot();
  });

  it('should render two col with gutter box', () => {
    const layoutJson = renderer
      .create(
        <Row gutter={16}>
          <Col span={12}>test</Col>
          <Col span={12}>test</Col>
        </Row>,
      )
      .toJSON();
    expect(layoutJson).toMatchSnapshot();
  });

  it('should render two adaptive col with offset', () => {
    const layoutJson = renderer
      .create(
        <Row>
          <Col
            span={1}
            xs={{ span: 24, offset: 1 }}
            sm={{ span: 12, offset: 2 }}
            md={{ span: 10, offset: 3 }}
            lg={{ span: 8, offset: 4 }}
            xl={{ span: 6, offset: 5 }}
            className="spider-col-demo"
          >
            col-test
          </Col>
          <Col
            span={1}
            xs={{ span: 24, offset: 1 }}
            sm={{ span: 12, offset: 2 }}
            md={{ span: 10, offset: 3 }}
            lg={{ span: 8, offset: 4 }}
            xl={{ span: 6, offset: 5 }}
            className="spider-col-demo"
          >
            col-test
          </Col>
        </Row>,
      )
      .toJSON();
    expect(layoutJson).toMatchSnapshot();
  });
});
