import React from "react";
import { Layout, Typography, Card } from "antd";
import styled from "styled-components";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const ContactWrapper = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #fafafa;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const ContactCard = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ContactPage = () => {
  return (
    <Layout>
      <Content>
        <ContactWrapper>
          <StyledImage src={`${process.env.PUBLIC_URL}/Contact/contact-banner.jpg`} />

          <ContactCard>
            <Title level={2} style={{ color: "#8B0000" }}>
              Contattaci 📞
            </Title>
            <Paragraph style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              Vieni a trovarci a **La Grande Muraglia Cinese**! Siamo felici di offrirti un'autentica esperienza culinaria cinese.
            </Paragraph>
            <Paragraph>
              📍 **Indirizzo:** Via Pacini, 83, 95129, Catania
              <br />
              📞 **Telefono:** +39 095 123 4567
              <br />
              📧 **Email:** info@grandemuraglia.it
            </Paragraph>
            <Paragraph>
              ⏰ **Orari di Apertura:** <br />
              🕒 Lun-Dom: **12:00 - 15:00 | 19:00 - 23:30**
            </Paragraph>

            <a
              href="https://goo.gl/maps/VU3G6yJX8iP2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.2rem", color: "#8B0000", textDecoration: "underline" }}
            >
              📍 Guarda su Google Maps
            </a>
          </ContactCard>
        </ContactWrapper>
      </Content>
    </Layout>
  );
};

export default ContactPage;
