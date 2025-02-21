import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Layout, Typography } from "antd";
import styled from "styled-components";

const { Content } = Layout;
const { Title } = Typography;

// Styled Flipbook Container
const FlipbookWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const MenuPage = () => {
  // Generate an array of 23 image file names dynamically
  const menuItems = Array.from({ length: 23 }, (_, index) => ({
    id: index + 3, // Start from 3.jpg
    imageUrl: `${process.env.PUBLIC_URL}/Menu/${index + 3}.jpg`,
  }));

  return (
    <Layout>
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <Title level={2}>Il Nostro Menu 📖</Title>

        {/* Flipbook Container */}
        <FlipbookWrapper>
          <HTMLFlipBook width={400} height={550} showCover={true}>
            {menuItems.map((item) => (
              <div key={item.id} className="page">
                <img
                  src={item.imageUrl}
                  alt={`Menu Item ${item.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            ))}
          </HTMLFlipBook>
        </FlipbookWrapper>
      </Content>
    </Layout>
  );
};

export default MenuPage;
