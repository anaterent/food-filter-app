
import { Data } from "../data/Data";
import Carousel from 'react-bootstrap/Carousel';



function Card(props) {
    var poiDatas = Data;

    let fullPrice = ["$", "$$", "$$$", "$$$$"];

    const priceStateLength = props.priceState.length;
    function comparePrices(card) {
        for (let i = 0; i < priceStateLength; i++) {
            if (props.priceState[i] === card.price) {
                return card.price;
            }
        }
    }


    // all filters algorithm
    const filteredData = poiDatas.filter((card) => {
        if (props.input === '') {
            if (props.cuisineState === 'All') {
                // if (props.priceState.every(p => fullPrice.includes(p))) {
                if (props.priceState.toString() === fullPrice.toString()) {
                    return card;
                } else {
                    // return card.price.includes(props.priceState);
                    comparePrices(card)
                }
            } else if (!props.cuisineState.includes('All')) {
                // change to string 
                if (props.priceState.every(p => fullPrice.includes(p))) {
                    return card.cuisine.includes(props.cuisineState);
                } else {
                    card.cuisine.every.includes(props.cuisineState).filter((card) => {
                        return card.price.includes(props.priceState);
                    });
                }
            }
        } else {
            return card.placeName.toLowerCase().includes(props.input);
        }

    });


    return (
        <div className='card-container'>
            {filteredData.map((poidata) => (

                <div className='card' >

                    <Carousel interval={null} indicators={false} >
                        <Carousel.Item>
                            <img
                                className="d-block w-100 card-img"
                                src={poidata.img[0]}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 card-img"
                                src={poidata.img[1]}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 card-img"
                                src={poidata.img[2]}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>



                    <div className='place-name'>{poidata.placeName}</div>
                    <div className='location'>{poidata.location}</div>
                    <div className='filter-tags'>

                        <div className='cuisine'>{poidata.cuisine}</div>
                        <div className='price'>{poidata.price}</div>
                    </div>
                </div>

            ))}
        </div>
    );
}



export default Card;