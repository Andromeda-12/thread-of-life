import React, { Suspense } from 'react';
import DefayultLayout from './layouts/DefaultLayout'
import { Route, Routes } from 'react-router-dom'
import { setTheme } from './shared/theme'
import Spiner from './components/Spiner';
const Main = React.lazy(() => import('./pages/Main'));
const Settings = React.lazy(() => import('./pages/Settings'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const NoMatch = React.lazy(() => import('./pages/NoMatch'));

class App extends React.Component {
  componentDidMount() {
    setTheme()
  }

  render() {
    return (
      <div className="App">
        <DefayultLayout>
          <Suspense fallback={<Spiner />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/settings" element={<Settings />}/>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Suspense>
        </DefayultLayout>
      </div >
    )
  }
}

export default App;