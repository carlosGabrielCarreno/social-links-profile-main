import photoProfile from "../assets/images/avatar-jessica.jpeg"
import './App.css'

function App() {

  return (
    <>
      <main className="card">
        <section className="container-img">
          <img src={photoProfile} alt="profile photo" />
        </section>
        <section className="container-titles">
          <h1>Jessica Randall</h1>
          <p className="location-info">London, United Kingdom</p>
          <p className="profetion">"Front-end developer and avid reader."</p>
        </section>
        <section className="container-buttons">
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>Linkedin</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </section>
      </main>
    </>
  )
}

export default App
