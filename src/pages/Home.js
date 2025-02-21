import React from "react";
import { Layout, Typography, Button, Card } from "antd";
import styled from "styled-components";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const BannerWrapper = styled.div`
  background: url(${process.env.PUBLIC_URL}/Home/home-banner.jpg) no-repeat center/cover;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    height: 300px; /* ✅ Smaller height for mobile */
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* ✅ 50% transparency */
`;

const BannerText = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px;

  h1 {
    color: white;
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 1.8rem; /* ✅ Adjust heading for mobile */
    }
  }

  p {
    color: white;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  background-color: #ffd700;
  color: #8b0000;
  font-weight: bold;
  transition: 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
  padding: 10px 20px;

  &:hover {
    background-color: #f0c000;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const StorySection = styled.div`
  padding: 50px;
  background-color: #fafafa;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const StoryCard = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 10px;
  }
`;

const StyledQR = styled.img`
  width: 200px; /* ✅ Adjusted QR size */
  height: auto;
  display: block;
  margin: 20px auto;

  @media (max-width: 768px) {
    width: 150px; /* ✅ Smaller on mobile */
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <Content>
        {/* 🎯 Hero Banner */}
        <BannerWrapper>
          <Overlay />
          <BannerText>
            <Title level={1}>Benvenuti alla Grande Muraglia Cinese</Title>
            <Text>Scopri l'autentica esperienza culinaria cinese</Text>
            <br />
            <StyledButton>
              <a href="https://forms.gle/Ys28RXw4UEMHEzGw6" target="_blank" rel="noopener noreferrer">
                📅 Prenota Online
              </a>
            </StyledButton>
          </BannerText>
        </BannerWrapper>

        {/* 📌 Story Section */}
        <StorySection>
          <StoryCard>
            <Title level={2} style={{ color: "#8B0000" }}>La Storia della Grande Muraglia Cinese</Title>
            <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              "Per essere un bravo cuoco, bisogna conoscere l’armonia di sapori diversi".
              Questo vecchio proverbio sintetizza l’essenza della cucina cinese, poiché il segreto di questa antica arte
              non sta tanto nel saper applicare le poche tecniche di base, quanto in ciò che si cucina.
            </Paragraph>
            <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Qui troverete ricette gustose adattate in alcuni casi alla cucina occidentale. Provengono dalle quattro
              principali regioni della Cina:
            </Paragraph>
            <ul style={{ textAlign: "left", fontSize: "1.1rem", lineHeight: "1.8" }}>
              <li><strong>Nord:</strong> Cucina Pechinese, famosa per l’anatra.</li>
              <li><strong>Est:</strong> Cucina di Shanghai, dove prevale l’uso dello zucchero.</li>
              <li><strong>Ovest:</strong> Cucina del Sichuan, ricca di spezie e piatti piccanti.</li>
              <li><strong>Sud:</strong> Cucina Cantonese, con una grande varietà di piatti.</li>
            </ul>
            <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Non possiamo che augurarvi di gustare i nostri piatti e trascorrere con noi magnifiche serate.
            </Paragraph>
          </StoryCard>        </StorySection>
      </Content>
    </Layout>
  );
};

export default HomePage;
