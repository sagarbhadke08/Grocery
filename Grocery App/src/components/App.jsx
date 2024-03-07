import '../App.css'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

import AddItem from "./AddItem.jsx"
import ItemList from "./ItemList.jsx"
function App() {


  return (
    <>
      <div>
        <Header />
        <div className='container'>
          <AddItem />
          <ItemList />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App;
