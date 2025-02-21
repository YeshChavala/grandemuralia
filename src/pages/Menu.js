import React, { useState } from "react";
import { Layout, Typography, Modal } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const MenuPage = () => {
  // ✅ State for Modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Dynamically load menu images
  const menuItems = Array.from({ length: 23 }, (_, index) => ({
    id: index + 3, // Image files start from 3.jpg
    imageUrl: `${process.env.PUBLIC_URL}/Menu/${index + 3}.jpg`,
  }));

  // ✅ Function to open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <Title level={2}> Il Nostro Menu </Title>

        {/* Grid Layout */}
        <div style={styles.menuGrid}>
          {menuItems.map((item) => (
            <div key={item.id} style={styles.menuItem} onClick={() => openModal(item.imageUrl)}>
              <img src={item.imageUrl} alt="" style={styles.menuImage} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        {/* ✅ Image Popup (Modal) */}
        <Modal
          open={isModalOpen}
          footer={null}
          onCancel={() => setIsModalOpen(false)}
          centered
        >
          <img src={selectedImage} alt="Menu Preview" style={{ width: "100%", borderRadius: "10px" }} />
        </Modal>
      </Content>
    </Layout>
  );
};

// 💡 Styling for Grid Layout
const styles = {
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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
    cursor: "pointer", // ✅ Indicates clickable
    transition: "transform 0.2s ease-in-out",
  },
  menuImage: {
    width: "100%",
    maxHeight: "180px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

export default MenuPage;
