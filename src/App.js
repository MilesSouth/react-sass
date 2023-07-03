import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import "./sass/App.scss"
import data from "./data"

function App() {
  return (
    <>
      <Header />
      {data.map((item) => {
        return <Card key={item.id} item={item} />
      })}
      <Footer />
    </>
  )
}

export default App
