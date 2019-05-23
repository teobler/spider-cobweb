import React, { ReactElement } from 'react';
import Col from '../../components/grid/col';
import Row from '../../components/grid/row';
import './grid.demo.scss';

const GridDemo: React.FunctionComponent = (): ReactElement => {
  return (
    <div>
      <div className="spider-grid-demo-basic">
        <Row className="spider-row-demo">
          <Col span={12} className="spider-col-demo">
            col-12
          </Col>
          <Col span={12} className="spider-col-demo">
            col-12
          </Col>
        </Row>
        <Row className="spider-row-demo">
          <Col span={8} className="spider-col-demo">
            col-8
          </Col>
          <Col span={8} className="spider-col-demo">
            col-8
          </Col>
          <Col span={8} className="spider-col-demo">
            col-8
          </Col>
        </Row>
        <Row className="spider-row-demo">
          <Col span={6} className="spider-col-demo">
            col-6
          </Col>
          <Col span={6} className="spider-col-demo">
            col-6
          </Col>
          <Col span={6} className="spider-col-demo">
            col-6
          </Col>
          <Col span={6} className="spider-col-demo">
            col-6
          </Col>
        </Row>
      </div>

      <div className="spider-grid-demo-gutter">
        <Row gutter={16}>
          <Col span={6} className="spider-col-demo">
            col-6
          </Col>
          <Col span={6} className="spider-col-demo">
            col-6
          </Col>
          <Col span={6} className="spider-col-demo">
            col-6
          </Col>
          <Col span={6} className="spider-col-demo">
            col-6
          </Col>
        </Row>
      </div>

      <div className="spider-grid-demo-offset">
        <Row className="spider-row-demo">
          <Col span={8} className="spider-col-demo">
            col-8
          </Col>
          <Col span={8} offset={8} className="spider-col-demo">
            col-8 col-offset-8
          </Col>
        </Row>
        <Row className="spider-row-demo">
          <Col span={6} offset={6} className="spider-col-demo">
            col-6 col-offset-6
          </Col>
          <Col span={6} offset={6} className="spider-col-demo">
            col-6 col-offset-6
          </Col>
        </Row>
        <Row className="spider-row-demo">
          <Col span={12} offset={6} className="spider-col-demo">
            col-12 col-offset-6
          </Col>
        </Row>
      </div>

      <div className="spider-grid-demo-adaptive">
        <Row className="spider-row-demo">
          <Col
            span={1}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 10 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            className="spider-col-demo"
          >
            col-adaptive
          </Col>
          <Col
            span={1}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 10 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            className="spider-col-demo"
          >
            col-adaptive
          </Col>
          <Col
            span={1}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 10 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            className="spider-col-demo"
          >
            col-adaptive
          </Col>
          <Col
            span={1}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 10 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            className="spider-col-demo"
          >
            col-adaptive
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GridDemo;
