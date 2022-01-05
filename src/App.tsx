import React from 'react';
import Header from './components/Header';
import Container from '@mui/material/Container';
import Main from './pages/Main';
import Settings from './pages/Settings';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer'
import { Route, Routes, Link } from 'react-router-dom'
import { setTheme } from './shared/theme'
import './pages/Main.scss'

class App extends React.Component {
  componentDidMount() {
    setTheme()
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Header></Header>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>

          <Footer />
        </Container>
      </div >
    )
  }
}

export default App;