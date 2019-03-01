import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

const Card = ({ items }) => (
    <div className='card-wrapper row'>
        {
            items.map((item, index) => (
                <CardItem key={index} />
            ))
        }
    </div>
);

Card.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Card;