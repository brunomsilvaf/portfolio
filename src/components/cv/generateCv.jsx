import React from 'react';
import { pdf } from '@react-pdf/renderer';
import CvDocument from './CvDocument';

// Renders the CV document to a PDF blob and triggers a browser download.
// Imported dynamically so the (heavy) PDF library is only loaded on demand.
export default async function generateAndDownloadCv(data, filename) {
  const blob = await pdf(<CvDocument data={data} />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
