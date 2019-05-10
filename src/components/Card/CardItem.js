import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ item }) => (
    <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className='card'>
            <img src={item.image} className="card-img-top rounded-circle" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ item.title }</h5>
                <p className="card-text">{ item.description }</p>
                <a href={`#${item.link}`} className="btn btn-primary">Detalhes</a>
            </div>
        </div>
    </div>
);

CardItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CardItem;
