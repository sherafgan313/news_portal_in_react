
import './App.css';

// import React, { Component } from 'react'
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API

  // state = {
  //   progress: 0
  // }

  const [progress, setProgress] = useState(0)

  // setProgress = (progress) => {
  //   setState({ progress: progress })
  // }

  // render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="us" category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country="us" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country="us" category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country="us" category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country="us" category="technology" />} />

            <Route path="/" element={<Navigate to="/general" />} />
          </Routes>
        </Router>
      </div>
    )
  // }
// }
    }

export default App;