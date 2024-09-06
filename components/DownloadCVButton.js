import React from "react";

const DownloadCVButton = () => {
  const handleDownload = () => {
    const fileUrl = "/cv.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "cv.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="download-btn">
      Télécharger mon CV
    </button>
  );
};

export default DownloadCVButton;
