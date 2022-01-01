import React from 'react';
import Header from './components/Header';
import { Layout, Alert, Col } from 'antd';

function App() {
  return (
    <div className="App">
        <Header>Header</Header>

        <Col span="8" offset="8">
        <Alert message="Authentication Failed" type="warning"></Alert>
        </Col>
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://ru.reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

            <a
              className="App-link"
              href="https://ru.reactjs1.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
    </div >
  );
}

export default App;
