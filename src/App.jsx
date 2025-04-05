import { useState } from 'react'
import './index.css'
import Index from './presentation/pages'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index/>
      <Analytics/>
    </>
  )
}

export default App
