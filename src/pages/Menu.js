import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Layout, Typography } from "antd";
import styled from "styled-components";

const { Content } = Layout;
const { Title } = Typography;

const MenuWrapper = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #fafafa;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FlipbookWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const MenuPage = () => {
  const menuImages = Array.from({ length: 23 }, (_, index) =>
    ${process.env.PUBLIC_URL}/Menu/${index + 1}.jpg
  );

  // 📌 Dynamic width & height based on screen size
  const getBookSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      return { width: 250, height: 320 }; // ✅ Mobile size
    } else if (screenWidth <= 768) {
      return { width: 320, height: 420 }; // ✅ Tablet size
    } else {
      return { width: 400, height: 500 }; // ✅ Desktop size
    }
  };

  return (
    <Layout>
      <Content>
        <MenuWrapper>
          <Title level={2}>📖 Il Nostro Menu - Sfoglia le Pagine</Title>

          <FlipbookWrapper>
            <HTMLFlipBook {...getBookSize()} mobileScrollSupport={true}>
              {menuImages.map((image, index) => (
                <Page key={index}>
                  <img
                    src={image}
                    alt={Menu Page ${index + 1}}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    loading="lazy"
                  />
                </Page>
              ))}
            </HTMLFlipBook>
          </FlipbookWrapper>

        </MenuWrapper>
      </Content>
    </Layout>
  );
};

export default MenuPage;