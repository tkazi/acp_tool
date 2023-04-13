import {React, useState, useContext, useRef, useEffect}  from 'react'
import {userInputContext} from './App'
import emailjs from 'emailjs-com';

export default function PricingPanel() {
    
    const {userInputs} = useContext(userInputContext)

    // get inputs - name and email
    const inputValuesRef = useRef();

    function send_email(e){
        //e.preventDefault();
        //console.log(e.target);
        const input_values = inputValuesRef.current
        const user_name = `${input_values['user_name'].value}`
        const email = `${input_values['user_email'].value}`

        emailjs.send(
            'service_ryu9a4i',
            'template_d8dr98y',
            {user_name: user_name, user_email: email, panel_base: userInputs.panel_base},
            'user_1w8GfSE8dnJ38TMvG5Y5E'
        ).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })


        //console.log(user_name, email, userInputs)

    }

    // calculate price

    // calculate price based on aluminum price
     
    const default_price = 22;

    const [price, setPrice] = useState(default_price);

    // function for pricing based on coil and panel thickness
    function getSizePrice(userInputs){
        
        var price_temp = default_price

        // 3mm
        if (userInputs.coil_thickness === '0.3mm' & userInputs.panel_thickness === '3mm'){
            price_temp = price_temp - 3
        }
        if (userInputs.coil_thickness === '0.4mm' & userInputs.panel_thickness === '3mm'){
            price_temp = price_temp - 2
        }
        if (userInputs.coil_thickness === '0.5mm' & userInputs.panel_thickness === '3mm'){
            price_temp = default_price
        }

        // 4mm
        if (userInputs.coil_thickness === '0.3mm' & userInputs.panel_thickness === '4mm'){
            price_temp = price_temp - 1
        }
        if (userInputs.coil_thickness === '0.4mm' & userInputs.panel_thickness === '4mm'){
            setPrice(default_price)
        }
        if (userInputs.coil_thickness === '0.5mm' & userInputs.panel_thickness === '4mm'){
            price_temp = price_temp + 2
        }

        // 6mm
        if (userInputs.coil_thickness === '0.3mm' & userInputs.panel_thickness === '6mm'){
            price_temp = price_temp + 3
        }
        if (userInputs.coil_thickness === '0.4mm' & userInputs.panel_thickness === '6mm'){
            price_temp = price_temp + 4
        }
        if (userInputs.coil_thickness === '0.5mm' & userInputs.panel_thickness === '6mm'){
            price_temp = price_temp + 6
        }

        return price_temp

    }

    // function to get price based on panel selection
    function getPanelPrice(p){

        //var price_temp = getBasePrice(userInputs)
        var price_temp = p 

        if (userInputs.panel_base === 'FR-B1'){
            price_temp = p
        }
        if (userInputs.panel_base === 'FR-A2'){
            price_temp = price_temp + 3
            
        }
        if (userInputs.panel_base === 'Non-FR'){
            price_temp = price_temp - 2
            
        }
        if (userInputs.panel_base === 'FR-A1'){
            price_temp = price_temp + 18
        
        }

        return price_temp

    }

    // function to get price based on panel finish
    function getPanelFinishPrice(p){
        var price_temp = p 

        if (userInputs.panel_finish === 'Solid (HDPE)' || userInputs.panel_finish === 'Metallic (HDPE)'){
            price_temp = price_temp - 1
        }
        return price_temp
    }

    // function to get price based on panel effect
    function getPanelEffectPrice(p){
        var price_temp = p 

        if (userInputs.panel_effect === 'Nano' || userInputs.panel_effect === '3-coats'){
            price_temp = price_temp + 3
        } 
        if (userInputs.panel_effect === 'Sparkling'){
            price_temp = price_temp + 0.5
        } 
        if (userInputs.panel_effect === 'High Gloss'){
            price_temp = price_temp + 1.5
        } 

        return price_temp
    }

    
    // function to get price based on panel design
    function getPanelDesignPrice(p){
        
        var price_temp = p 

        if (userInputs.panel_design === 'Wood' || userInputs.panel_design === 'Stone'){
            price_temp = price_temp + 4
        } 
        if (userInputs.panel_design === 'Mirror'){
            price_temp = price_temp + 6
        } 
        if (userInputs.panel_design === 'Prismatic'){
            price_temp = price_temp + 7
        } 
        if (userInputs.panel_design === 'Anodized'){
            price_temp = price_temp + 9
        } 

        return price_temp
    }

    useEffect(() => {

        var price_temp = getSizePrice(userInputs)
        price_temp = getPanelPrice(price_temp)
        price_temp = getPanelFinishPrice(price_temp)
        price_temp = getPanelEffectPrice(price_temp)
        price_temp = getPanelDesignPrice(price_temp)

        setPrice(price_temp)

        console.log(userInputs)
// eslint-disable-next-line
    }, [userInputs])


    return (    
        <div className="left-panel panel">
        
            <div className="logo-container">
                <img src='./logo.png' alt='logo'/>
            </div>
            <div className="pricing-container">
                <p className="price">$ 
                    { userInputs.panel_effect === 'Sparkling' || userInputs.panel_effect === 'High Gloss'  ?  price+'0 / m' : price+'.00 / m' } 
                    <span>2</span></p>
            </div>
            <div className="input-container">
                <form ref={inputValuesRef}>
                <input  name={'user_name'} className="input-name" placeholder="Name"/>
                <input  name={'user_email'} className="input-email" placeholder="Email"/>
                </form>
                <button onClick={send_email}>Request Quote</button>
            </div>
        
        </div>
    )
}
