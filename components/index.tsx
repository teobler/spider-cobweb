import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/index';

const fn = (e: React.MouseEvent) => {console.log(e.currentTarget)};
ReactDOM.render(<Icon name="wechat" onClick={fn} className='test-name'/>, document.getElementById('root'));
