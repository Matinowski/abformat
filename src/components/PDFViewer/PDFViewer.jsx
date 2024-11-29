import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker source to the copied worker in the public directory
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';  // ensure this path is correct
}

function PDFViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      {isLoading && (
        <div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg" />
      )}

      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg" />}
        error={<div className="text-red-500">Error loading PDF. Please try again.</div>}
      >
        <Page 
          pageNumber={pageNumber} 
          className="mb-4"
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>

      {!isLoading && (
        <div className="flex items-center gap-4 mt-4 p-4 bg-white rounded-lg shadow">
          <button
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-gray-100 rounded-md disabled:opacity-50"
          >
            Previous
          </button>

          <span>
            Page {pageNumber} of {numPages}
          </span>

          <button
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-gray-100 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default PDFViewer;
