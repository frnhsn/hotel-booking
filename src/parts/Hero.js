import React from 'react';

import ImageHero from 'assets/images/img-hero.jpg';
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/images/icons/icon-cities.svg';
import IconTraveler from 'assets/images/icons/icon-traveler.svg';
import IconTreasure from 'assets/images/icons/icon-treasure.svg';
import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber';

export default function Hero(props) {
    
    const showMostPick = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop -30,
            behavior: 'smooth',
        });
    }

    return (
        <section className="container">
            <div className="row align-center">
                {/* Left part */}
                <div className="col-6 pr-5" style={{width: "530px"}}>
                    <h1 
                        className="font-weight-bold line-height-1 mb3"
                        style={{lineHeight:"130%"}}
                    >
                        Forgot Busy Work,<br/>
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75">
                        We provide what you need to enjoy your holiday with family. Time to 
                        make another  memorable moments.
                    </p>

                    <Button hasShadow isPrimary className={"btn px-5"} onClick={showMostPick}>
                       Show Me Now
                    </Button>

                    <div className="row mt-5">
                        <div className="col-auto">
                            <img 
                                src={IconTraveler} 
                                width={"36px"}
                                height={"36px"}
                                alt={`${props.data.travelers} Travelers`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers) + " "}
                                <span className="text-gray-500 font-weight-light">
                                    Travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img 
                                src={IconCities} 
                                width={"36px"}
                                height={"36px"}
                                alt={`${props.data.travelers} Cities`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities) + " "}
                                <span className="text-gray-500 font-weight-light">
                                    Cities
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img 
                                src={IconTreasure} 
                                width={"36px"}
                                height={"36px"}
                                alt={`${props.data.treasures} Treasure`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures) + " "}
                                <span className="text-gray-500 font-weight-light">
                                    Treasures
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                {/* Right part */}
                <div className="col-6 pl-5">
                    <div className="image-hero">
                        <img 
                            src={ImageHero}
                            alt="Room with couches"
                            className="img-fluid position-absolute pt-3"
                            width="480px"
                            height="auto"
                            style={{margin: "-30px 0 0 -30px", zIndex: 1}}/>
                        <img 
                            src={ImageHeroFrame}
                            alt="Room with couches"
                            className="img-fluid position-absolute pt-3"
                            width="480px"
                            height="auto"
                            style={{margin: "0 -15px -15px 0"}}/>
                    </div>
                </div>

            </div>
        </section>
    )
}
