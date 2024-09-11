import React, { useEffect } from "react";

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

  useEffect(() => {
    // Ce code s'exécute uniquement côté client, `document` est sûr d'être défini ici
  }, []);

  return (
    <div className="btnContainer">
      <button onClick={handleDownload} className="download-btn">
        Télécharger mon CV
      </button>
    </div>
  );
};

export default DownloadCVButton;
