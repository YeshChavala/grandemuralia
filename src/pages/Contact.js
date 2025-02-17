import React from "react";
import { Layout, Typography, Row, Col, Card } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const ContactPage = () => {
  return (
    <Layout style={{ padding: "50px" }}>
      <Content>
        {/* Contact Header */}
        <Title level={2} style={{ textAlign: "center", color: "#8B0000" }}>
          Contatta la Grande Muraglia Cinese
        </Title>

        {/* Address Section */}
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} lg={8}>
            <Card bordered>
              <Title level={3}>Indirizzo</Title>
              <Text>
                Grande Muraglia Cinese <br />
                Via Pacini 83, Catania, Italia <br />
                📞 Telefono: <a href="tel:+39095312535">+39 095 312535</a>
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Social Media Section */}
        <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
          <Col xs={24} sm={12} lg={8}>
            <Card bordered>
              <Title level={3}>Seguici sui Social</Title>
              <Text>
                <a href="https://www.facebook.com/profile.php?id=61572948896089" target="_blank" rel="noopener noreferrer">
                  🌐 Visita la nostra pagina Facebook
                </a>
              </Text>
            </Card>
          </Col>
        </Row>

        {/* Instagram QR Code */}
        <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
          <Col xs={24} sm={12} lg={8} style={{ textAlign: "center" }}>
            <Title level={3}>Scansiona il codice QR per Instagram</Title>
            <img src="public/Contact/contact-banner.jpg" alt="QR Code Instagram" width="200" />
          </Col>
        </Row>

        {/* Reservation Section */}
        <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
          <Col xs={24} sm={12} lg={8}>
            <Card bordered>
              <Title level={3}>Prenota un Tavolo</Title>
              <Text>
                <a href="https://forms.gle/Ys28RXw4UEMHEzGw6" target="_blank" rel="noopener noreferrer">
                  📅 Prenota online
                </a>
              </Text>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ContactPage;
