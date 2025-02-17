import React from "react";
import { Layout, Typography } from "antd";
import styled from "styled-components";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const StoryWrapper = styled.div`
  text-align: center;
  padding: 50px;
`;

const StyledImage = styled.img`
  max-width: 60%; /* Keeps images from being too large */
  height: auto;
  display: block;
  margin: 20px auto; /* Centers the image */
  border-radius: 10px; /* Soft rounded edges */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Adds a subtle shadow */
  
  @media (max-width: 768px) {
    max-width: 80%; /* Adjusts for mobile screens */
  }
`;

const Story = () => {
  return (
    <Layout>
      <StoryWrapper>
        <Title level={2}>La Storia della Grande Muraglia Cinese</Title>
        <StyledImage src="/Story/history1.jpg" />
        <Paragraph>
          La <strong>Grande Muraglia Cinese</strong> è un ristorante storico a Catania, aperto nel **1989**.  
          Da oltre <strong>35 anni</strong>, deliziamo i nostri clienti con autentici sapori della Cina, 
          mantenendo vive le ricette tradizionali tramandate da generazioni.
        </Paragraph>

        {/* 🍨 Fried Ice Cream Story */}
        <Title level={3} style={{ marginTop: "40px", color: "#8B0000" }}>🍨 Il Delizioso Gelato Fritto</Title>
        <StyledImage src="/Story/fried-ice-cream.jpg" />
        <Paragraph>
          Il **Gelato Fritto** è un dessert iconico della cucina asiatica.  
          Questa prelibatezza nasce avvolgendo una pallina di gelato in una crosta croccante,  
          che viene fritta rapidamente per creare un contrasto irresistibile tra il caldo e il freddo.  
          Il nostro segreto? La pastella leggera e l'uso di gelato artigianale, che rendono ogni morso una vera sorpresa.
        </Paragraph>

        {/* 🍶 Sake Story */}
        <Title level={3} style={{ marginTop: "40px", color: "#8B0000" }}>🍶 La Storia del Sake</Title>
        <StyledImage src="/Story/sake.jpg" />
        <Paragraph>
          Il **Sake** è una bevanda alcolica tradizionale giapponese, realizzata attraverso la fermentazione del riso.  
          Sebbene sia più conosciuto in Giappone, il sake ha una lunga storia anche nella cultura cinese,  
          dove è spesso servito durante le celebrazioni e i banchetti imperiali.  
          Alla Grande Muraglia Cinese, offriamo una selezione esclusiva di sake,  
          perfetta per accompagnare i nostri piatti autentici.
        </Paragraph>

        {/* 📌 Continuation of Main Story */}
        <StyledImage src="/Story/history2.jpg" />
        <Paragraph>
          Oltre alla nostra cucina tradizionale, offriamo **eventi speciali e degustazioni** per far conoscere ai nostri ospiti  
          le sfumature dei sapori cinesi. La nostra missione è quella di portare in tavola **un'autentica esperienza culinaria**,  
          con ingredienti freschi, spezie selezionate e piatti preparati con passione.
        </Paragraph>
      </StoryWrapper>
    </Layout>
  );
};

export default Story;
