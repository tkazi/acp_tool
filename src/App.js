// import logo from './logo.svg';
import {React, createContext, useState} from 'react'
import './App.css';
import PricingPanel from './PricingPanel';
import AttributesPanel from './AttributesPanel';

export const userInputContext = createContext({
  panel_base: 'test',
  panel_thickness: '',
  color: {'ral':'','hex':'','name':''}
})

export default function App() {

    const [userInputs, setUserInputs] = useState(
      {
        panel_base: '',
        panel_thickness: '',
        coil_thickness: '',
        panel_finish:'',
        panel_effect:'',
        panel_design:'',
        color: {'ral':'','hex':'','name':''}
      }
    );

      return (
        <div className="app-container">
          <userInputContext.Provider value={{userInputs, setUserInputs}}>
            <PricingPanel/>
            <AttributesPanel/>
          </userInputContext.Provider>
        </div>
      );
  }


