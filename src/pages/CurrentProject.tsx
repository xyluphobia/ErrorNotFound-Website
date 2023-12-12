import React from 'react'
import PROJECT_Rougelike from './PROJECT_Rougelike.tsx'

// Current project page, used to forward the current project to main.tsx,
// Doing this keeps main.tsx clear from clutter and is more readable.
function App() {
    return (
      <>
        <React.StrictMode>
            <PROJECT_Rougelike />
        </React.StrictMode>
      </>
    )
  }

  export default App