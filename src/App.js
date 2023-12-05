import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Card_info from './Data.js'




function App() {

  const CardItem = Card_info.map(item => {

    return <Card 
    key={item.id}
    item={item}
    />

  })

  return (
    <>
    <div className="App">
      <Navbar/>
      <Hero/>
      {CardItem}
    </div>  
    </>
   

  );
}

export default App;
