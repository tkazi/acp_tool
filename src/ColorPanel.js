import {React, useState} from 'react'
import Select from 'react-select';

export default function ColorPanel() {

    const [selectColor, setSelectColor] = useState('orange');
    const [isActive, setIsActive] = useState({activeIndex:-2});

    const ral_options = [
        { value: 'orange', label: 'Orange (RAL 2010)' },
        { value: 'green', label: 'Green (RAL 6032)' },
        { value: 'grey', label: 'Grey (RAL 7004)' },
        { value: 'brown', label: 'Brown (RAL 8002)' }
      ]
    
    const orange_colors = [
        {ral: 'RAL2000', hex: '#DD7907', name: 'Yellow orange'},
        {ral: 'RAL2001', hex: '#BE4E20', name: 'Red orange'},
        {ral: 'RAL2002', hex: '#C63927', name: 'Vermillion'},
        {ral: 'RAL2003', hex: '#FA842B', name: 'Pastel orange'},
        {ral: 'RAL2004', hex: '#E75B12', name: 'Pure orange'},
        {ral: 'RAL2005', hex: '#FF2300', name: 'Luminous orange'},
        {ral: 'RAL2007', hex: '#FFA421', name: 'Luminous bright orange'},
        {ral: 'RAL2008', hex: '#F3752C', name: 'Bright red orange'},
        {ral: 'RAL2009', hex: '#E15501', name: 'traffic orange'},
        {ral: 'RAL2010', hex: '#D4652F', name: 'Signal orange'},
        {ral: 'RAL2011', hex: '#EC7C25', name: 'Deep orange'},
        {ral: 'RAL2012', hex: '#DB6A50', name: 'Salmon orange'},
        {ral: 'RAL2013', hex: '#954527', name: 'Pearl orange'},
    ]

    const green_colors = [
        {ral: 'RAL6000', hex: '#327662', name: 'Patina green'},
        {ral: 'RAL6001', hex: '#28713E', name: 'Emeral green'},
        {ral: 'RAL6002', hex: '#276235', name: 'Leaf green'},
        {ral: 'RAL6003', hex: '#4B573E', name: 'Olive Green'},
        {ral: 'RAL6004', hex: '#0E4243', name: 'Blue green'},
        {ral: 'RAL6005', hex: '#0F4336', name: 'Moss green'},
        {ral: 'RAL6006', hex: '#40433B', name: 'Grey olive'},
        {ral: 'RAL6007', hex: '#283424', name: 'Bottle green'},
        {ral: 'RAL6008', hex: '#35382E', name: 'Brown green'},
        {ral: 'RAL6009', hex: '#26392F', name: 'Fir green'},
        {ral: 'RAL6010', hex: '#3E753B', name: 'Grass green'},
        {ral: 'RAL6011', hex: '#68825B', name: 'Reseda green'},
        {ral: 'RAL6012', hex: '#31403D', name: 'Black green'},
        {ral: 'RAL6013', hex: '#797C5A', name: 'Reed green'},
        {ral: 'RAL6014', hex: '#444337', name: 'Yellow olive'},
        {ral: 'RAL6015', hex: '#3D403A', name: 'Black olive'},
        {ral: 'RAL6016', hex: '#026A52', name: 'Turquoise green'},
        {ral: 'RAL6017', hex: '#468641', name: 'May green'},
        {ral: 'RAL6018', hex: '#48A43F', name: 'Yellow green'},
        {ral: 'RAL6019', hex: '#B7D9B1', name: 'pastel green'},
        {ral: 'RAL6020', hex: '#354733', name: 'Chrome green'},
        {ral: 'RAL6021', hex: '#86A47C', name: 'Pale green'},
        {ral: 'RAL6022', hex: '#3E3C32', name: 'Brown olive'},
        {ral: 'RAL6024', hex: '#008754', name: 'Traffic green'},
        {ral: 'RAL6025', hex: '#53753C', name: 'Fern green'},
        {ral: 'RAL6026', hex: '#005D52', name: 'Opal green'},
        {ral: 'RAL6027', hex: '#81C0BB', name: 'Light green'},
        {ral: 'RAL6028', hex: '#2D5546', name: 'Pine green'},
        {ral: 'RAL6029', hex: '#007243', name: 'Mint green'},
        {ral: 'RAL6032', hex: '#0F8558', name: 'Signal green'},
        {ral: 'RAL6033', hex: '#478A84', name: 'Mint turquoise'},
        {ral: 'RAL6034', hex: '#7FB0B2', name: 'Pastel turquoise'},
        {ral: 'RAL6035', hex: '#1B542C', name: 'Pearl green'},
        {ral: 'RAL6036', hex: '#005D4C', name: 'Pearl opal green'},
        {ral: 'RAL6037', hex: '#25E712', name: 'Pure green'},
        {ral: 'RAL6038', hex: '#00F700', name: 'Luminous green'}
    ]

    const grey_colors = [
        {ral:'RAL7000', hex: '#7E8B92', name: 'Squirrel grey'},
        {ral:'RAL7001', hex: '#8F999F', name: 'Silver grey'},
        {ral:'RAL7002', hex: '#817F68', name: 'Olive grey'},
        {ral:'RAL7003', hex: '#7A7B6D', name: 'Moss grey'},
        {ral:'RAL7004', hex: '#9EA0A1', name: 'Signal grey'},
        {ral:'RAL7005', hex: '#6B716F', name: 'Mouse grey'},
        {ral:'RAL7006', hex: '#756F61', name: 'Beige grey'},
        {ral:'RAL7008', hex: '#746643', name: 'Khaki grey'},
        {ral:'RAL7009', hex: '#5B6259', name: 'Green grey'},
        {ral:'RAL7010', hex: '#575D57', name: 'Tarpaulin grey'},
        {ral:'RAL7011', hex: '#555D61', name: 'Iron grey'},
        {ral:'RAL7012', hex: '#596163', name: 'Basalt grey'},
        {ral:'RAL7013', hex: '#555548', name: 'Brown-grey'},
        {ral:'RAL7015', hex: '#51565C', name: 'Slate grey'},
        {ral:'RAL7016', hex: '#373F43', name: 'Anthracite grey'},
        {ral:'RAL7021', hex: '#2E3234', name: 'Black grey'},
        {ral:'RAL7022', hex: '#4B4D46', name: 'Umbra grey'},
        {ral:'RAL7023', hex: '#818479', name: 'Concrete grey'},
        {ral:'RAL7024', hex: '#474A50', name: 'Graphite grey'},
        {ral:'RAL7026', hex: '#374447', name: 'Granite grey'},
        {ral:'RAL7030', hex: '#939388', name: 'Stone grey'},
        {ral:'RAL7031', hex: '#5D6970', name: 'Blue grey'},
        {ral:'RAL7032', hex: '#B9B9A8', name: 'Pebble grey'},
        {ral:'RAL7033', hex: '#818979', name: 'Cement grey'},
        {ral:'RAL7034', hex: '#939176', name: 'Yellow grey'},
        {ral:'RAL7035', hex: '#CBD0CC', name: 'Light grey'},
        {ral:'RAL7036', hex: '#9A9697', name: 'Platinum grey'},
        {ral:'RAL7037', hex: '#7C7F7E', name: 'Dusty grey'},
        {ral:'RAL7038', hex: '#B4B8B0', name: 'Agate grey'},
        {ral:'RAL7039', hex: '#6B695F', name: 'Quartz grey'},
        {ral:'RAL7040', hex: '#9DA3A6', name: 'Window grey'},
        {ral:'RAL7042', hex: '#8F9695', name: 'Traffic grey A'},
        {ral:'RAL7043', hex: '#4E5451', name: 'Traffic grey B'},
        {ral:'RAL7044', hex: '#BDBDB2', name: 'Silk grey'},
        {ral:'RAL7045', hex: '#91969A', name: 'Telegrey 1'},
        {ral:'RAL7046', hex: '#82898E', name: 'Telegrey 2'},
        {ral:'RAL7047', hex: '#CFD0CF', name: 'Telegrey 4'},
        {ral:'RAL7048', hex: '#888175', name: 'Pearl mouse grey'}
    ]

    const brown_colors = [
        {ral:'RAL8000', hex: '#887142', name: 'Green brown'},
        {ral:'RAL8001', hex: '#9C6B30', name: 'Ochre brown'},
        {ral:'RAL8002', hex: '#7B5141', name: 'Signal brown'},
        {ral:'RAL8003', hex: '#80542F', name: 'Clay brown'},
        {ral:'RAL8004', hex: '#8F4E35', name: 'Copper brown'},
        {ral:'RAL8007', hex: '#6F4A2F', name: 'Fawn brown'},
        {ral:'RAL8008', hex: '#6F4F28', name: 'Olive brown'},
        {ral:'RAL8011', hex: '#5A3A29', name: 'Nut brown'},
        {ral:'RAL8012', hex: '#673831', name: 'Red brown'},
        {ral:'RAL8014', hex: '#49392D', name: 'Sepia brown'},
        {ral:'RAL8015', hex: '#633A34', name: 'Chestnut brown'},
        {ral:'RAL8016', hex: '#4C2F26', name: 'Mahogany brown'},
        {ral:'RAL8017', hex: '#44322D', name: 'Chocolate brown'},
        {ral:'RAL8019', hex: '#3F3A3A', name: 'Grey brown'},
        {ral:'RAL8022', hex: '#211F20', name: 'Black brown'},
        {ral:'RAL8023', hex: '#A65E2F', name: 'Orange brown'},
        {ral:'RAL8024', hex: '#79553C', name: 'Beige brown'},
        {ral:'RAL8025', hex: '#755C49', name: 'Pale brown'},
        {ral:'RAL8028', hex: '#4E3B31', name: 'Terra brown'},
        {ral:'RAL8029', hex: '#763C28', name: 'Pearl copper'},
    ]


    const styles = {
        option: (styles, state) =>
          console.log(state.isFocused) || {
            ...styles,
            backgroundColor: state.isSelected ? "white" : "white",
            color: "black"
          }
      };


    return (
        <div className="right-input-container">
            <p className="heading">Select Color</p>
            <div className="colors">
                <div className="dropdown-container" id="dropdown-color-container">
                    
                    <Select 
                        options={ral_options} 
                        defaultValue={ral_options[0]}
                        styles={styles}
                        onChange={e => setSelectColor(e.value)}
                    />
                    {/* <p>{selectColor}</p> */}
                </div>
                <div class="color-container">
                     
        


                    { selectColor == 'orange' ?
                        orange_colors.map((color, i) => (
                            <p 
                            className= {i == isActive.activeIndex ? "active" : "inactive"}
                            style={{backgroundColor: color.hex}}
                            onClick = {e => setIsActive({activeIndex: i})}
                            ></p>
                        ))
                    :null}

                    { selectColor == 'green' ?
                        green_colors.map((color, i) => (
                            <p 
                            className= {i == isActive.activeIndex ? "active" : "inactive"}
                            style={{backgroundColor: color.hex}}
                            onClick = {e => setIsActive({activeIndex: i})}
                            ></p>
                        ))
                    :null}

                    { selectColor == 'grey' ?
                        grey_colors.map((color, i) => (
                            <p 
                            className= {i == isActive.activeIndex ? "active" : "inactive"}
                            style={{backgroundColor: color.hex}}
                            onClick = {e => setIsActive({activeIndex: i})}
                            ></p>
                        ))
                    :null}

                    { selectColor == 'brown' ?
                        brown_colors.map((color, i) => (
                            <p 
                            className= {i == isActive.activeIndex ? "active" : "inactive"}
                            style={{backgroundColor: color.hex}}
                            onClick = {e => setIsActive({activeIndex: i})}
                            ></p>
                        ))
                    :null}
                   
                </div>
            </div>
        </div>
    )
}
