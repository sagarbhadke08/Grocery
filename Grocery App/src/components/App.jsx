


import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import  '../App.css'
import AddItem from "./AddItem.jsx"
import ItemList from "./ItemList.jsx"
function App() {
  

  return (
    <>
    <div className='container'>
      <Header/>
      <AddItem/>
      <ItemList/>
      <Footer/>
    </div>
      
    </>
  )
}

export default App
