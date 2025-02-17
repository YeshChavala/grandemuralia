import React from "react";
import { Layout, Typography, Card } from "antd";
import styled from "styled-components";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const StoryWrapper = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #fafafa;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const StyledImage = styled.img.attrs(props => ({
  src: `${process.env.PUBLIC_URL}${props.src}` // Dynamically setting image src
}))`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const StoryCard = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Story = () => {
  return (
    <Layout>
      <Content>
        <StoryWrapper>
          {/* 🍨 Fried Ice Cream Story */}
          <StoryCard>
            <Title level={2} style={{ color: "#8B0000" }}>🍨 Il Delizioso Gelato Fritto</Title>
            <StyledImage src="/Story/history1.jpg" />
            <Paragraph style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              Il **Gelato Fritto** è un dessert iconico della cucina asiatica.  
              Questa prelibatezza nasce avvolgendo una pallina di gelato in una crosta croccante,  
              che viene fritta rapidamente per creare un contrasto irresistibile tra il caldo e il freddo.  
              Il nostro segreto? La pastella leggera e l'uso di gelato artigianale, che rendono ogni morso una vera sorpresa.
            </Paragraph>
          </StoryCard>

          {/* 🍶 Sake Story */}
          <StoryCard style={{ marginTop: "40px" }}>
            <Title level={2} style={{ color: "#8B0000" }}>🍶 La Storia del Sake</Title>
            <StyledImage src="/Story/history2.jpg" />
            <Paragraph style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              Il **Sake** è una bevanda alcolica tradizionale giapponese, realizzata attraverso la fermentazione del riso.  
              Sebbene sia più conosciuto in Giappone, il sake ha una lunga storia anche nella cultura cinese,  
              dove è spesso servito durante le celebrazioni e i banchetti imperiali.  
              Alla **Grande Muraglia Cinese**, offriamo una selezione esclusiva di sake,  
              perfetta per accompagnare i nostri piatti autentici.
            </Paragraph>
          </StoryCard>
        </StoryWrapper>
      </Content>
    </Layout>
  );
};

export default Story;
