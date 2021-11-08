import logo from './logo.svg';
import './App.css';
import PricingPanel from './PricingPanel';
import AttributesPanel from './AttributesPanel';

function App() {
  return (
    <div className="app-container">
      <div class="left-panel panel">
        <PricingPanel/>
      </div>
      
      <div class="right-panel panel">
        <AttributesPanel/>
      </div>
    </div>
  );
}

export default App;
