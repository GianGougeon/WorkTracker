import React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

const LeftHeader = ({ children }) => {
  return (
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        {children}
      </Sider>
    </Layout>
  );
};

export default LeftHeader;
