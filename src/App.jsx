import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className="logo-box">
        <img src="./logo.png" alt="twitter-logo"className='logo'/>
        <h2>Sign In to Twitter</h2>
        <button>
          <img src="./gLogo.png" alt=""  className='gLogo'/>
          Sign In with Google
        </button>
        <button className='ttn'>
          <img src="./appleLogo.png" alt=""  className='gLogo'/>
          Sign In with Apple Id
        </button>
        <hr />
        <span>Or</span>
        <form>
          <input type="text" placeholder='Phone email or username'/>
          <button>Next</button>
        </form>

        <button className='dlTone'>Forgot Password?</button>

        <a href="#">Dont have an account? Sign up</a>
      </div>
    </div>
  )
}

export default App
