import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Card from './components/Card';
import Data from './data.js'




function App(){

  const elements =Data.map(data=>{
      return <Card img={data.coverImg} rating={data.stats.rating} reviewCount={data.stats.reviewCount} country={data.location} title={data.title}
                       price={data.price} key={data.id} openSpots={data.openSpots} />
  })

  return(
  <div>
    <Navbar/>
    <Content/>
    <section  className="cards-list">
    {elements}

    </section>
  </div>)
}


export default App;

{/* <Card
img="katie-zaferes.png"
rating="5.0"
reviewCount={6}
country="USA"
title="Life Lessons with Katie Zaferes"
price={136}
/> */}