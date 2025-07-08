import React from 'react'

const PDFModal = ({ link, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl h-[80vh] rounded-lg shadow-xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-sm bg-red-500 text-white px-3 py-1 rounded"
        >
          Close
        </button>
        <iframe src={link} className="w-full h-full" title="PDF Viewer"></iframe>
      </div>
    </div>
  )
}

export default PDFModal
