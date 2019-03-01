import React from 'react';

const CardItem = () => (
    <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card'>
            <img src="https://imag.malavida.com/mvimgbig/download-fs/clash-of-clans-21501-1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
);

export default CardItem;