import { Provider } from "../contexts/Context"
import { Header } from "../components/header"
import { Section } from "../components/section"
import { Menu } from "../components/menu"
import { Footer } from "../components/footer"


function App() {

  return (
    <Provider>
      <Header/>
      <Section/>
      <Menu/>
      <Footer/>
    </Provider>
  )
}

export default App
