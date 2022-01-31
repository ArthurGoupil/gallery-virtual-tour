import React from "react";

const GoupilGallery: React.FC = () => {
  const [open, setIsOpen] = React.useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        style={{ width: "100%", height: "100%" }}
        src="/galleries/goupil2/index.htm"
      />
      {open && (
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "400px",
            height: "400px",
            backgroundColor: "red",
          }}
        >
          yoooo
        </div>
      )}
    </div>
  );
};

export default GoupilGallery;
