import Data from "../data/data";

import Form from 'react-bootstrap/Form';

import PriceButton from "./PriceButton";

import { useState, useEffect } from 'react';



function Navbar(props) {

    var placeDatas = Data;
    let spreadData = placeDatas.map((placeData) => {
        return placeData.cuisine;
    }
    );

    const uniqueCuisine = [...new Set(spreadData)];


    const prices = [
        {
            sign: "$",
            explanation: "about $17 and you achieve max fullness!"
        },
        {
            sign: "$$",
            explanation: "still cheap enough to go with family!"
        },
        {
            sign: "$$$",
            explanation: "special occasion"
        },
        {
            sign: "$$$$",
            explanation: "once in a life-time visit!?"
        }
    ];


    const [priceAlertState, setPriceAlertState] = useState("price-alert-appear");
    function updatePriceAlertState() {
        if (props.fullPrice.every((element) => props.priceState.includes(element))) {
            setPriceAlertState("price-alert-appear");
        } else {
            setPriceAlertState("price-alert-disappear");
        }
    }
    // re-render on change
    useEffect(() => {
        updatePriceAlertState();
      });


    return (
        <>
            {/* filterbar */}
            <div className="filter-bar" >
                <button className="filter-boxes" onClick={props.cChangeHandle}>All</button>
                {uniqueCuisine.map((cuisine) => (
                    <>
                        <button className="filter-boxes" type="button"
                            onClick={props.cChangeHandle}>
                            {cuisine}
                        </button>
                    </>
                ))}

            </div>

            {/* pricebar */}
            <div className="lower-container">

                <div className={priceAlertState}>All prices selected</div>

                <div id="price-container">
                    {prices.map((price) => (
                        <PriceButton pChangeHandle={props.pChangeHandle} sign={price.sign} explanation={price.explanation} priceState={props.priceState} updatePriceAlertState={updatePriceAlertState} />
                    ))}
                </div>


                {/* visited bar */}
                <div id="visited-container">
                    <Form>
                        <div className="visited-checkbox">
                            <Form.Switch
                                label='Show visited places?'
                                inline
                            />
                        </div>

                    </Form>

                </div>






            </div>



        </>

    );


}
export default Navbar;