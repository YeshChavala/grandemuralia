import React from "react";
import { Layout, Typography } from "antd";
import StyledImage from "../components/StyledImage";
import styled from "styled-components";

const { Content } = Layout;
const { Title } = Typography;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const menuItems = Array.from({ length: 21 }, (_, index) => ({
  id: index + 3,
  name: `Piatto ${index + 3}`,
  imageUrl: `/Menu/${index + 3}.jpg`,
}));

const MenuPage = () => {
  return (
    <Layout>
      <Content style={{ textAlign: "center", padding: "50px" }}>
        <Title level={2}>🍽️ Il Nostro Menu</Title>
        <MenuGrid>
          {menuItems.map((item) => (
            <div key={item.id}>
              <StyledImage src={item.imageUrl} />
              <p>{item.name}</p>
            </div>
          ))}
        </MenuGrid>
      </Content>
    </Layout>
  );
};

export default MenuPage;
