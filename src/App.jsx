import photoProfile from "../assets/images/avatar-jessica.jpeg"
import './App.css'

function App() {

  return (
    <>
      <main>
        <section>
          <img src={photoProfile} alt="profile photo" />
        </section>
        <section>
          <h1>Jessica Randall</h1>
          <p>London, United Kingdom</p>
        </section>
        <section>
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>GitHub</button>
          <button>GitHub</button>
          <button>GitHub</button>
        </section>
      </main>
    </>
  )
}

export default App
