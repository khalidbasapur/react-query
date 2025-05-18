import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import PostWithUseEffect from './components/PostWithUseEffect'
import PostWithQuery from './components/PostWithQuery'

function App() {
  return (
    <div className="container">
      <nav>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/with-useeffect">With useEffect</Link>
          </li>
          <li>
            <Link to="/with-query">With Query</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/with-useeffect" element={<PostWithUseEffect />} />
        <Route path="/with-query" element={<PostWithQuery />} />
      </Routes>
    </div>
  )
}

export default App
