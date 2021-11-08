import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

export default function AttributesPanel() {
    return (
        <div class="right-panel-main-container">
            <div class="right-container">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Panel Size</InputLabel>
                    <Select>
                        <MenuItem value={10}>1000 x 3200</MenuItem>
                        <MenuItem value={20}>1250 x 3200</MenuItem>
                        <MenuItem value={30}>1500 x 3200</MenuItem>
                    </Select>
                </FormControl>
                

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Panel Thickness</InputLabel>
                    <Select>
                        <MenuItem value={10}>2mm</MenuItem>
                        <MenuItem value={20}>3mm</MenuItem>
                        <MenuItem value={30}>4mm</MenuItem>
                        <MenuItem value={30}>5mm</MenuItem>
                        <MenuItem value={30}>6mm</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Coil Thickness</InputLabel>
                    <Select>
                        <MenuItem value={10}>0.2mm</MenuItem>
                        <MenuItem value={20}>0.3mm</MenuItem>
                        <MenuItem value={30}>0.4mm</MenuItem>
                        <MenuItem value={30}>0.5mm</MenuItem>
                    </Select>
                </FormControl>
            </div>
        
        <div class="right-input-container">
            <p class="heading">Select Panel Base</p>
            <div class="panel-container">
                <p>FR-A1</p>
                <p class="active">FR-A2</p>
                <p>FR-B1</p>
                <p>FR-B2</p>
                <p>Non-FR</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat  laboris nisi ut aliquip ex ea commodo</p>
        </div>
        <hr></hr>

        <div class="right-input-container">
            <p class="heading">Select Color</p>
            <div class="colors">
                <p></p>
                <p></p>
            </div>
            
        </div>
        <hr></hr>

        <div class="right-input-container">
            <p class="heading">Select Finish</p>
            <div class="panel-container">
                <p>Solid</p>
                <p class="active">Metallic</p>
                <p>Stone</p>
                <p>Anodized</p>
                <p>Prismatic</p>
                <p>Mirror</p>
            </div>
        </div>
        <hr></hr>

        <div class="right-input-container">
            <p class="heading">Select Effect</p>
            <div class="panel-container">
                <p class="active">None</p>
                <p>Nano</p>
                <p>Sparkling</p>
                <p>High Gloss</p>
                <p>3-coats</p>
            </div>
        </div>
        <hr></hr>


        </div>

    )
}
