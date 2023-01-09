import React, { useState } from 'react';

const PdfViewer = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFileChange = (event: any) => {
    // @ts-ignore
    setPdfUrl(URL.createObjectURL(event.target.files[0]));
  }

  return (
      <div>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        { pdfUrl && <iframe src={pdfUrl} /> }
      </div>
  );
};

export default PdfViewer;
