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
          {/* 🍨 Fried Ice Cream Story */}
          <Title level={3} style={{ marginTop: "40px", color: "#8B0000" }}>🍨 Il Delizioso Gelato Fritto</Title>
        <StyledImage src="/Story/history1.jpg" />
        

       
        <Paragraph>
          Il **Gelato Fritto** è un dessert iconico della cucina asiatica.  
          Questa prelibatezza nasce avvolgendo una pallina di gelato in una crosta croccante,  
          che viene fritta rapidamente per creare un contrasto irresistibile tra il caldo e il freddo.  
          Il nostro segreto? La pastella leggera e l'uso di gelato artigianale, che rendono ogni morso una vera sorpresa.
        </Paragraph>
       

        {/* 🍶 Sake Story */}
        <Title level={3} style={{ marginTop: "40px", color: "#8B0000" }}>🍶 La Storia del Sake</Title>
        {/* 📌 Continuation of Main Story */}
        <StyledImage src="/Story/history2.jpg" />
        <Paragraph>
          Il **Sake** è una bevanda alcolica tradizionale giapponese, realizzata attraverso la fermentazione del riso.  
          Sebbene sia più conosciuto in Giappone, il sake ha una lunga storia anche nella cultura cinese,  
          dove è spesso servito durante le celebrazioni e i banchetti imperiali.  
          Alla Grande Muraglia Cinese, offriamo una selezione esclusiva di sake,  
          perfetta per accompagnare i nostri piatti autentici.
        </Paragraph>

      
      </StoryWrapper>
    </Layout>
  );
};

export default Story;
