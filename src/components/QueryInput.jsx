import React from 'react'

const QueryInput = ({ query, setQuery, loading, onSubmit }) => {
  return (
    <div className="space-y-2">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
        rows="4"
        placeholder="Enter your legal query..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></textarea>
      <button
        onClick={onSubmit}
        disabled={loading}
        className={`w-full py-2 text-white rounded-lg ${
          loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Generating...' : 'Submit'}
      </button>
    </div>
  )
}

export default QueryInput
