import './App.css'


import Header from './components/header/Header'
import LeftMenu from './components/left-menu/LeftMenu'
import EmailView from './components/email-view/EmailView'

function App() {
  return (
    <div className="app">

      <Header />

      <LeftMenu />

      <EmailView />
      
    </div>
  )
}

export default App
