import React from 'react';
import { Layout, Typography, Row, Col, Card, Button, ConfigProvider, theme } from 'antd';
import { DatabaseOutlined, UserOutlined, GlobalOutlined, LineChartOutlined, ArrowRightOutlined } from '@ant-design/icons';

/**
 * DigiTwin Landing Page (Ant Design)
 *
 * How to use in a Vite React app:
 * 1) npm i antd @ant-design/icons
 * 2) Add this component to your routes (e.g., src/App.jsx) and render <DigiTwinHome />
 * 3) Optionally pass custom links via props
 */

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const panelData = ({
  databaseHref = '/database',
  digitalTwinHref = '/digital-twin',
  infraHref = '/infrastructure',
  analysisHref = '/analysis',
} = {}) => ([
  {
    key: 'db',
    title: 'Database',
    description: 'Browse, search, and inspect the source data powering your twin.',
    icon: <DatabaseOutlined />,
    href: databaseHref,
    color: 'linear-gradient(135deg, rgba(24,144,255,0.15), rgba(24,144,255,0.05))',
  },
  {
    key: 'twin',
    title: 'Digital Twin',
    description: 'Interact with your virtual representation: state, KPIs, and scenarios.',
    icon: <UserOutlined />,
    href: digitalTwinHref,
    color: 'linear-gradient(135deg, rgba(82,196,26,0.15), rgba(82,196,26,0.05))',
  },
  {
    key: 'infra',
    title: 'Infrastructure Resources',
    description: 'Explore infrastructure assets and resources across global regions.',
    icon: <GlobalOutlined />,
    href: infraHref,
    color: 'linear-gradient(135deg, rgba(250,173,20,0.15), rgba(250,173,20,0.05))',
  },
  {
    key: 'analysis',
    title: 'Analysis',
    description: 'Run analytics, visualize insights, and export reports from the dataset.',
    icon: <LineChartOutlined />,
    href: analysisHref,
    color: 'linear-gradient(135deg, rgba(245,34,45,0.15), rgba(245,34,45,0.05))',
  },
]);

export default function DigiTwinHome(props) {
  const data = panelData(props);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 14,
          fontSize: 16,
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: 'transparent', padding: '16px 24px' }}>
          <Text style={{ fontSize: 14, opacity: 0.8 }}>DigiTwin</Text>
        </Header>

        <Content style={{ padding: '24px' }}>
          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <Title style={{ marginBottom: 0, fontSize: 56, lineHeight: 1.1 }}>DigiTwin</Title>
            <Paragraph style={{ fontSize: 20, marginTop: 8, color: 'rgba(0,0,0,0.65)' }}>
              One shop for all
            </Paragraph>
            <Paragraph style={{ maxWidth: 720, margin: '8px auto 40px', color: 'rgba(0,0,0,0.55)' }}>
              Navigate your data, interact with your digital twin, explore global infrastructure, and run analysis —
              all from a single, elegant hub built with Ant Design.
            </Paragraph>

            <Row gutter={[24, 24]}>
              {data.map((item) => (
                <Col xs={24} sm={12} md={12} lg={12} xl={12} key={item.key}>
                  <Card
                    hoverable
                    styles={{ body: { padding: 24 } }}
                    style={{
                      height: '100%',
                      background: item.color,
                      border: '1px solid rgba(0,0,0,0.06)',
                      boxShadow: '0 6px 22px rgba(0,0,0,0.06)',
                      backdropFilter: 'blur(2px)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                      <div
                        style={{
                          fontSize: 28,
                          lineHeight: 1,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: 'rgba(255,255,255,0.7)'
                        }}
                        aria-hidden
                      >
                        {item.icon}
                      </div>
                      <div style={{ textAlign: 'left', flex: 1 }}>
                        <Title level={3} style={{ marginTop: 0, marginBottom: 8 }}>{item.title}</Title>
                        <Paragraph style={{ marginBottom: 16, color: 'rgba(0,0,0,0.65)' }}>
                          {item.description}
                        </Paragraph>
                        <Button type="primary" size="large" href={item.href}>
                          Open <ArrowRightOutlined />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center', opacity: 0.7 }}>
          © {new Date().getFullYear()} DigiTwin — All rights reserved
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
