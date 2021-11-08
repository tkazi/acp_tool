import React from 'react'

export default function PricingPanel() {
    return (
        <div>
            <div class="logo-container">
                <img src='./logo.png'/>
            </div>
            <div class="pricing-container">
                <p class="price">$ 27.00 / m <span>2</span></p>
            </div>
            <div class="input-container">
                <input class="input-name" placeholder="Name"/>
                <input class="input-email" placeholder="Email"/>
                <button>Request Quote</button>
            </div>
        </div>
    )
}
