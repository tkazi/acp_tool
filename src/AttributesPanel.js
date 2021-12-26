import { React, useState, useContext, useEffect } from 'react';
import Select from 'react-select';
import ColorPanel from './ColorPanel';
import {userInputContext} from './App'
//import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

// colors: https://www.w3schools.com/colors/colors_ral.asp
// https://codesandbox.io/s/xzv62vo8kw?file=/docs/data.js

export default function AttributesPanel() {

        const panel_options = [
            { value: '', label: '1000mm x 3200mm' },
            { value: '', label: '1250mm x 3200mm' },
            { value: '', label: '1500mm x 3200mm' }
          ];
    
        const thickness_options = [
            { value: 'thickness', label: '3mm' },
            { value: 'thickness', label: '4mm' },
            { value: 'thickness', label: '6mm' }
          ];
    
        const coil_options = [
            { value: 'coil', label: '0.3mm' },
            { value: 'coil', label: '0.4mm' },
            { value: 'coil', label: '0.5mm' }
          ]
        
        // toggle active state
        const [activeClass, setActiveClass] = useState({
            panel_base: 'FR-B1',
            panel_thickness: '4mm',
            coil_thickness: '0.4mm',
            panel_finish: '',
            panel_effect: 'None',
            panel_design: 'None'
        });
    
        function getValue(e) {
            const val = e.currentTarget.innerHTML;
            if (e.currentTarget.id === 'panel_base'){
                setActiveClass({ ...activeClass, panel_base: val });
    
            }

            if (e.currentTarget.id === 'panel_finish'){
                setActiveClass({ ...activeClass, panel_finish: val });
            }

            if (e.currentTarget.id === 'panel_effect'){
                setActiveClass({ ...activeClass, panel_effect: val });
            }

            if (e.currentTarget.id === 'panel_design'){
                setActiveClass({ ...activeClass, panel_design: val });
            }
    
            
        };

        function getSize(e){
            
            console.log(e.value, e.label)
            if (e.value === 'thickness') {
                setActiveClass({ ...activeClass, panel_thickness: e.label });
            }
            if (e.value === 'coil') {
                setActiveClass({ ...activeClass, coil_thickness: e.label });
            }
        }

        const {userInputs, setUserInputs} = useContext(userInputContext)

        useEffect(() => {
            
            const panel_base = activeClass['panel_base']
            const panel_thickness = activeClass['panel_thickness']
            const coil_thickness = activeClass['coil_thickness']
            const panel_finish = activeClass['panel_finish']
            const panel_effect = activeClass['panel_effect']
            const panel_design = activeClass['panel_design']
            

            setUserInputs ({
                ...userInputs, 
                panel_base: panel_base, 
                panel_thickness: panel_thickness, 
                coil_thickness: coil_thickness,
                panel_finish: panel_finish,
                panel_effect: panel_effect,
                panel_design: panel_design
            })
            
            //console.log(userInputs)
            
        }, [activeClass])

        const customStyles = {
            option: (provided, state) => ({
                ...provided,
                //borderBottom: '2px dotted green',
                color: state.isSelected ? 'white' : 'black',
                backgroundColor: state.isSelected ? '#538c53' : 'white'
            }),
            control: (provided) => ({
                ...provided,
                marginTop: "5%",
            })
            }
        
    
    
    return (
        <div className="right-panel panel">
       <div className="right-panel-main-container">
            <div className="right-container">
                <div className="dropdown-container">
                    <label id="demo-simple-select-label">Panel Size</label>
                    <Select 
                        id = 'panel-thickness'
                        options={panel_options} 
                        styles = { customStyles }
                        defaultValue={{ value: '1250mm x 3200mm', label: '1250mm x 3200mm' }}                        
                        getOptionValue={option => option.label}                    
                    />
                   
                </div>
                <div className="dropdown-container">
                    <label id="demo-simple-select-label">Panel Thickness</label>
                    <Select 
                        styles = { customStyles }
                        options={thickness_options} 
                        defaultValue={{ value: '4mm', label: '4mm' }}
                        getOptionValue={option => option.label}
                        onChange={getSize}
                    />
                </div>
                <div className="dropdown-container">
                    <label id="demo-simple-select-label">Coil Thickness</label>
                    <Select 
                        styles = { customStyles }
                        options={coil_options} 
                        defaultValue={{ value: '0.4mm', label: '0.4mm'  }}
                        getOptionValue={option => option.label}
                        onChange={getSize}
                    />
                </div>
            </div>
        
        <div className="right-input-container">
            <p className="heading">Select Panel Base</p>
            <div className="panel-select">
                <p>Please select the fire-rated core for your aluminum composite panel. Metal composite panels consist of two layers of metallic skin sandwiching 
                a fire-rated core. If you are interested in other metals such as Stainless Steel, Copper, Zinc or Titanium, please e-mail us your request and 
                we will be happy to send you a quotation</p>
            </div>
            <div className="panel-container">
                <p id='panel_base' onClick={e => getValue(e)} className={activeClass.panel_base === 'FR-A1' ? 'active' : null}>FR-A1</p>
                <p id='panel_base' onClick={e => getValue(e)} className={activeClass.panel_base === 'FR-A2' ? 'active' : null}>FR-A2</p>
                <p id='panel_base' onClick={e => getValue(e)} className={activeClass.panel_base === 'FR-B1' ? 'active' : null}>FR-B1</p>
                {/* <p id='panel_base' onClick={e => getValue(e)} className={activeClass.panel_base === 'FR-B2' ? 'active' : null}>FR-B2</p> */}
                <p id='panel_base' onClick={e => getValue(e)} className={activeClass.panel_base === 'Non-FR' ? 'active' : null}>Non-FR</p>
            </div>
        </div>
        <hr></hr>
        
        <ColorPanel/>
        
        <hr></hr>

        <div className="right-input-container">
            <p className="heading">Select Panel Finish with Coating</p>
            <div className="panel-container">
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish === 'Solid (HDPE)' ? 'active' : null}>Solid (HDPE)</p>
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish === 'Metallic (HDPE)' ? 'active' : null}>Metallic (HDPE)</p>
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish === 'Solid (PVDF)' ? 'active' : null}>Solid (PVDF)</p>
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish === 'Metallic (PVDF)' ? 'active' : null}>Metallic (PVDF)</p>
            </div>
        </div>
        <hr></hr>

        <div className="right-input-container">
            <p className="heading">Select Panel Effect</p>
            <div className="panel-container">
                <p id='panel_effect' onClick={e => getValue(e)} className={activeClass.panel_effect === 'None' ? 'active' : null}>None</p>
                <p id='panel_effect' onClick={e => getValue(e)} className={activeClass.panel_effect === 'Nano' ? 'active' : null}>Nano</p>
                <p id='panel_effect' onClick={e => getValue(e)} className={activeClass.panel_effect === 'Sparkling' ? 'active' : null}>Sparkling</p>
                <p id='panel_effect' onClick={e => getValue(e)} className={activeClass.panel_effect === 'High Gloss' ? 'active' : null}>High Gloss</p>
                <p id='panel_effect' onClick={e => getValue(e)} className={activeClass.panel_effect === '3-coats' ? 'active' : null}>3-coats</p>
            </div>
        </div>
        <hr></hr>
        
        <div className="right-input-container">
            <p className="heading">Select Panel Design</p>
            <div className="panel-container">
            <p id='panel_design' onClick={e => getValue(e)} className={activeClass.panel_design === 'None' ? 'active' : null}>None</p>
                <p id='panel_design' onClick={e => getValue(e)} className={activeClass.panel_design === 'Stone' ? 'active' : null}>Stone</p>
                <p id='panel_design' onClick={e => getValue(e)} className={activeClass.panel_design === 'Wood' ? 'active' : null}>Wood</p>
                <p id='panel_design' onClick={e => getValue(e)} className={activeClass.panel_design === 'Anodized' ? 'active' : null}>Anodized</p>
                <p id='panel_design' onClick={e => getValue(e)} className={activeClass.panel_design === 'Prismatic' ? 'active' : null}>Prismatic</p>
                <p id='panel_design' onClick={e => getValue(e)} className={activeClass.panel_design === 'Mirror' ? 'active' : null}>Mirror</p>
            </div>
        </div>

        </div>
</div>
    )
}

