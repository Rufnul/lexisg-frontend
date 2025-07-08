import React, { useState } from 'react'
import QueryInput from './components/QueryInput'
import AnswerCard from './components/AnswerCard'
import PDFModal from './components/PDFModal'

const simulateAnswerAPI = async () => {
  return {
    answer:
      'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.',
    citations: [
      {
        text:
          '“as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)',
        source: 'Dani_Devi_v_Pritam_Singh.pdf',
        link:
          'https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz',
      },
    ],
  }
}

function App() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState('')
  const [citations, setCitations] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const response = await simulateAnswerAPI(query)
    setAnswer(response.answer)
    setCitations(response.citations)
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-blue-600">Lexi Legal Assistant</h1>
        <QueryInput query={query} setQuery={setQuery} loading={loading} onSubmit={handleSubmit} />
        <AnswerCard answer={answer} citations={citations} onCitationClick={() => setShowModal(true)} />
      </div>
      {showModal && (
        <PDFModal link={citations[0]?.link} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default App
