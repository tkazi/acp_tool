import React, { Component, useState } from 'react';
import Select from 'react-select';
import ColorPanel
 from './ColorPanel';
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
        { value: '', label: '2mm' },
        { value: '', label: '3mm' },
        { value: '', label: '4mm' },
        { value: '', label: '5mm' },
        { value: '', label: '6mm' }
      ];

    const coil_options = [
        { value: '', label: '0.2mm' },
        { value: '', label: '0.3mm' },
        { value: '', label: '0.4mm' },
        { value: '', label: '0.5mm' }
      ]
    
    // toggle active state
    const [activeClass, setActiveClass] = useState({
        panel_base: 'FR-A2',
        panel_finish: 'Metallic',
        panel_effect: 'None'
    });

    function getValue(e) {
        const val = e.currentTarget.innerHTML;
        if (e.currentTarget.id == 'panel_base'){
            setActiveClass({ ...activeClass, panel_base: val });

        }
        if (e.currentTarget.id == 'panel_finish'){
            setActiveClass({ ...activeClass, panel_finish: val });
        }
        if (e.currentTarget.id == 'panel_effect'){
            setActiveClass({ ...activeClass, panel_effect: val });
        }

        
    };


    return (
        <div className="right-panel-main-container">
            <div className="right-container">
                <div className="dropdown-container">
                    <label id="demo-simple-select-label">Panel Size</label>
                    <Select options={panel_options} />
                </div>
                <div className="dropdown-container">
                    <label id="demo-simple-select-label">Panel Thickness</label>
                    <Select options={thickness_options} />
                </div>
                <div className="dropdown-container">
                    <label id="demo-simple-select-label">Coil Thickness</label>
                    <Select options={coil_options} />
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
                <p id='panel_base' onClick={e => getValue(e)} className={activeClass.panel_base == 'FR-A1' ? 'active' : null}>FR-A1</p>
                <p id='panel_base' onClick={e => getValue(e)} className={activeClass.panel_base == 'FR-A2' ? 'active' : null}>FR-A2</p>
                <p id='panel_base' onClick={e => getValue(e)} className={activeClass.panel_base == 'FR-B1' ? 'active' : null}>FR-B1</p>
                <p id='panel_base' onClick={e => getValue(e)} className={activeClass.panel_base == 'FR-B2' ? 'active' : null}>FR-B2</p>
                <p id='panel_base' onClick={e => getValue(e)} className={activeClass.panel_base == 'Non-FR' ? 'active' : null}>Non-FR</p>
            </div>
        </div>
        <hr></hr>
        
        <ColorPanel/>
        
        <hr></hr>

        <div className="right-input-container">
            <p className="heading">Select Finish</p>
            <div className="panel-container">
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish == 'Solid' ? 'active' : null}>Solid</p>
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish == 'Metallic' ? 'active' : null}>Metallic</p>
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish == 'Stone' ? 'active' : null}>Stone</p>
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish == 'Wood' ? 'active' : null}>Wood</p>
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish == 'Anodized' ? 'active' : null}>Anodized</p>
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish == 'Prismatic' ? 'active' : null}>Prismatic</p>
                <p id='panel_finish' onClick={e => getValue(e)} className={activeClass.panel_finish == 'Mirror' ? 'active' : null}>Mirror</p>
            </div>
        </div>
        <hr></hr>

        <div className="right-input-container">
            <p className="heading">Select Effect</p>
            <div className="panel-container">
                <p id='panel_effect' onClick={e => getValue(e)} className={activeClass.panel_effect == 'None' ? 'active' : null}>None</p>
                <p id='panel_effect' onClick={e => getValue(e)} className={activeClass.panel_effect == 'Nano' ? 'active' : null}>Nano</p>
                <p id='panel_effect' onClick={e => getValue(e)} className={activeClass.panel_effect == 'Sparkling' ? 'active' : null}>Sparkling</p>
                <p id='panel_effect' onClick={e => getValue(e)} className={activeClass.panel_effect == 'High Gloss' ? 'active' : null}>High Gloss</p>
                <p id='panel_effect' onClick={e => getValue(e)} className={activeClass.panel_effect == '3-coats' ? 'active' : null}>3-coats</p>
            </div>
        </div>
        <hr></hr>


        </div>

    )
}
