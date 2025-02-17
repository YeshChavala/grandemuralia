import React from "react";
import { Layout, Typography, Button, Card } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const HomePage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ textAlign: "center", color: "white" }}>

        {/* Background Image */}
        <div
          style={{
            background: `url(${process.env.PUBLIC_URL}/Home/home-banner.jpg) no-repeat center/cover`,
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Overlay for Transparency */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% transparency
            }}
          ></div>

          {/* Text Over Image */}
          <div style={{ position: "relative", zIndex: 2, padding: "20px" }}>
            <Title level={1} style={{ color: "white" }}>
              Benvenuti alla Grande Muraglia Cinese
            </Title>
            <Text style={{ color: "white", fontSize: "1.2rem" }}>
              Scopri l'autentica esperienza culinaria cinese
            </Text>
            <br />
            <Button 
              type="primary" 
            size="large" 
            style={{ 
                marginTop: "20px", 
                backgroundColor: "#FFD700", 
                color: "#8B0000", 
                fontWeight: "bold", 
                transition: "0.3s",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
               }}
             >
             <a href="https://forms.gle/Ys28RXw4UEMHEzGw6" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: "inherit", textDecoration: "none" }}>
                📅 Prenota Online
             </a>
            </Button>

          </div>
        </div>

        {/* Story Section */}
        <div style={{ padding: "50px", backgroundColor: "#FAFAFA" }}>
          <Card style={{ maxWidth: "800px", margin: "0 auto", padding: "30px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
            <Title level={2} style={{ color: "#8B0000", textAlign: "center" }}>
              La Storia della Grande Muraglia Cinese
            </Title>
            <Text style={{ fontSize: "1rem", lineHeight: "1.8" }}>
              "Per essere un bravo cuoco, bisogna conoscere l’armonia di sapori diversi".
              Questo vecchio proverbio sintetizza l’essenza della cucina cinese, poiché il segreto di questa antica arte non sta tanto nel saper applicare le poche tecniche di base, quanto in ciò che si cucina.
            </Text>
            <br />
            <Text style={{ fontSize: "1rem", lineHeight: "1.8" }}>
              Qui troverete ricette gustose adattate in alcuni casi alla cucina occidentale. Provengono dalle quattro principali regioni della Cina:
            </Text>
            <ul style={{ textAlign: "left", fontSize: "1rem", lineHeight: "1.8" }}>
              <li>Al **Nord**, troviamo la cucina **Pechinese**, famosa per l’anatra.</li>
              <li>All’**Est**, la cucina di **Shanghai**, dove prevale l’uso dello zucchero.</li>
              <li>All’**Ovest**, la cucina del **Sichuan**, ricca di spezie e piatti piccanti.</li>
              <li>Al **Sud**, infine, la **Cantonese**, con la sua varietà di piatti.</li>
            </ul>
            <Text style={{ fontSize: "1rem", lineHeight: "1.8" }}>
              Non possiamo che augurarvi di gustare i nostri piatti, ma soprattutto trascorrere con noi magnifiche serate.
            </Text>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
