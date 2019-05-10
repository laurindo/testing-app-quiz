import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

const Card = ({ items }) => (
    <div className='row'>
        {
            items.map((item, index) => (
                <CardItem key={index} item={item} />
            ))
        }
    </div>
);

Card.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Card;
