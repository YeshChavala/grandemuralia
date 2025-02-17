import React from "react";
import { Layout, Typography, Row, Col, Card } from "antd";
import StyledImage from "../components/StyledImage"; 

const { Content } = Layout;
const { Title } = Typography;

const menuItems = Array.from({ length: 21 }, (_, index) => ({
  id: index + 3,
  name: `Piatto ${index + 3}`,
  description: "Descrizione del piatto speciale, perfetto per ogni occasione.",
  imageUrl: `/Menu/${index + 3}.jpg`,
}));

const Menu = () => {
  return (
    <Layout>
      <Content style={{ padding: "20px" }}>
        <Title level={2} style={{ textAlign: "center" }}>Il Nostro Menu</Title>
        <Row gutter={[16, 16]} justify="center">
          {menuItems.map((item) => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <Card hoverable style={{ textAlign: "center", padding: "10px" }}>
                <StyledImage src={item.imageUrl} />
                <Title level={4} style={{ fontSize: "16px", marginTop: "5px" }}>{item.name}</Title>
                <p style={{ fontSize: "14px", marginBottom: "5px" }}>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Menu;
