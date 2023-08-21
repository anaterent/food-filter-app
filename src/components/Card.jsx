
import Carousel from 'react-bootstrap/Carousel';
import Data from "../data/data";




function Card(props) {
    var placesDatas = Data;

    // all filters algorithm
    const filteredData = placesDatas.filter(placeData => {
        if (props.input === '') {
            if (props.cuisineState === 'All') {
                return props.priceState.includes(placeData.price);
            } else {
                // cuisine and price filters
                return (
                    props.priceState.includes(placeData.price) &&
                    placeData.cuisine.includes(props.cuisineState)
                );
            }
        } else {
            return placeData.placeName.toLowerCase().includes(props.input);
        }
        // Add a return statement here if needed
    });


    return (
        <div className='card-container'>
            {filteredData.map((fData) => (
                <div className='card' >
                    <Carousel interval={null} indicators={false}>

                        {fData.img.map((img, index) => {
                            return (
                                <Carousel.Item key={index} >
                                    <img className="d-block w-100 card-img-overload" src={img} alt={`Slide ${index + 1}`} />
                                </Carousel.Item>
                            )
                        })}

                    </Carousel>


                    <div className='place-name'>{fData.placeName}</div>
                    <div className='location'>{fData.location}</div>
                    <div className='filter-tags'>
                        <div className='cuisine'>{fData.cuisine}</div>
                        <div className='price'>{fData.price}</div>
                    </div>

                </div>

            ))}
        </div>

    )

}



export default Card;