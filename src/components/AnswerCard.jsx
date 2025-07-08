import React from 'react'

const AnswerCard = ({ answer, citations, onCitationClick }) => {
  if (!answer) return null

  return (
    <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 space-y-3">
      <p className="text-gray-800 whitespace-pre-line">{answer}</p>
      {citations.length > 0 && (
        <div className="text-sm text-gray-700">
          <p className="font-semibold">Citation:</p>
          <p className="mt-1 italic">"{citations[0].text}"</p>
          <button
            onClick={onCitationClick}
            className="mt-2 underline text-blue-600 hover:text-blue-800"
          >
            View PDF (Scrolls to Para 7)
          </button>
        </div>
      )}
    </div>
  )
}

export default AnswerCard
