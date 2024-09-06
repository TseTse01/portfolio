import React, { useEffect, useState } from "react";

const DownloadCVButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ce code s'exécute uniquement côté client
    setIsClient(true);
  }, []);

  const handleDownload = () => {
    if (isClient) {
      const fileUrl = "/cv.pdf";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "cv.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button onClick={handleDownload} className="download-btn">
      Télécharger mon CV
    </button>
  );
};

export default DownloadCVButton;
