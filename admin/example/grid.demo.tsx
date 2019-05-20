import React, { ReactElement } from 'react';
import Col from '../../components/grid/col';
import Row from '../../components/grid/row';
import './grid.demo.scss';

const GridDemo: React.FunctionComponent = (): ReactElement => {
  return (
    <div>
      <Row className="spider-row-demo-basic">
        <Col span={12} className="spider-col-demo">
          col-12
        </Col>
        <Col span={12} className="spider-col-demo">
          col-12
        </Col>
      </Row>
      <Row className="spider-row-demo-basic">
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
      <Row className="spider-row-demo-basic">
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
  );
};

export default GridDemo;
