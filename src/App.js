import './App.css';
import Header from './components/Header';
import SecondHeader from './components/SecondHeader';
import Card from './components/Card';
import certificationData from './assets/certificationData';

function App() {
  const certList = certificationData.map(cert => 
    <Card key={cert.id} {...cert}/>
  )
  return (
    <div>
      <Header/>
      <SecondHeader/>
      <section className="cards-list">
        {certList}
      </section>
    </div>
  );
}

export default App;
