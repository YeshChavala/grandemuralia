import React from "react";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const MenuPage = () => {
  // Generate an array of 23 image file names dynamically
  const menuItems = Array.from({ length: 23 }, (_, index) => ({
    id: index + 3, // Start from 3.jpg
    imageUrl: `${process.env.PUBLIC_URL}/Menu/${index + 3}.jpg`, // Ensures compatibility with GitHub Pages
    name: `Piatto ${index + 3}`,
  }));

  return (
    <Layout>
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <Title level={2}>Il Nostro Menu</Title>

        <div style={styles.menuGrid}>
          {menuItems.map((item) => (
            <div key={item.id} style={styles.menuItem}>
              <img src={item.imageUrl} alt="" style={styles.menuImage} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

// 💡 Styling for Grid Layout
const styles = {
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", // Adjusted min size for better mobile layout
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  menuItem: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  menuImage: {
    width: "100%",
    maxHeight: "180px", // Ensure consistent image height
    objectFit: "cover", // Crop images to fit nicely
    borderRadius: "10px",
  },
};

export default MenuPage;
