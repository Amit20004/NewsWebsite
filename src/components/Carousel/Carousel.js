import React from 'react';

function Carousel() {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide p-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{filter:"brightness(95%)"}}>
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://media.cntravellerme.com/photos/647f5fe0ecefc2b0f9a1dca2/master/w_1920%2Cc_limit/Cappadocia-GettyImages-166186583.jpg" className="d-block w-100 rounded-2" alt="Santorini Greece" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Cappadocia, Turkey</h5>
                            <p>Cappadocia, an area in Turkey where entire cities have been carved into rock, is pretty incredible on its own</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://media.cntravellerme.com/photos/647f5fe8ecefc2b0f9a1dca5/master/w_1920%2Cc_limit/MtFuji-GettyImages-959111140.jpg" className="d-block w-100 rounded-2" alt="Krabi Thailand" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Mount Fuji, Japan</h5>
                            <p>It’s hard to pick the single most beautiful place in Japan, but 12,388-foot Mount Fuji just might take the prize. </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.cntravellerme.com/photos/647f5febecefc2b0f9a1dca6/master/w_1920%2Cc_limit/Salar-de-Uyuni-Bolivia-GettyImages-465844068.jpg" className="d-block w-100 rounded-2" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Salar de Uyuni, Bolivia</h5>
                            <p>Southwest Bolivia’s Salar de Uyuni is the largest salt flat in the world, and is about as surreal as landscapes come. </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousel;
