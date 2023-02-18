
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';


function PriceButton(props) {
    const [colorClass, setColorClass] = useState("price-button clicked");
    function changeStyle() {
        if (props.priceState.length !== 1) {
            if (colorClass === "price-button") {
                setColorClass("clicked")
            } else {
                setColorClass("price-button")
            }
            // colorClass === "price-button" ? setColorClass("clicked") : setColorClass("price-button");
        } else {
            setColorClass("clicked")
        }
    };

    function totalPriceClick(p) {
        props.pChangeHandle(p);
        changeStyle();
        props.updatePriceAlertState();
    }

    return (
        <div className="price-btn-container">
            <div className="tooltip-empty">
                <OverlayTrigger
                    placement="bottom"
                    transition={false}
                    overlay={
                        <Tooltip>
                            {props.explanation}
                        </Tooltip>
                    }>

                    <button
                        className={colorClass}
                        type="button"
                        onClick={totalPriceClick} >
                        {props.sign}
                    </button>

                </OverlayTrigger>


            </div>
        </div>
    );

}

export default PriceButton;