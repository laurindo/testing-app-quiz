import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Card from '../Card/Card';
import Slide from '../Slide';
import QuizPage from '../QuizPage';
import { SLIDE_CARDS, QUIZ_CARDS } from '../../data/menu-data';

const renderSlide = (match) => {
  if (match.params.id === 'slides') {
    return (
      <div>
        <Card items={SLIDE_CARDS} />
      </div>
    )
  }
  return null;
};

const renderSlideDetail = (match) => {
  if (match.params.id === '01') {
    return (
      <div>
        <Slide />
      </div>
    )
  }
  return null;
};

const renderQuiz = (match) => {
  if (match.params.id === 'quiz') {
    return (
      <div>
        <Card items={QUIZ_CARDS} />
      </div>
    )
  }
  return null;
};

const renderQuizDetail = (match) => {
  if (match.params.quizId === 'quiz-01') {
    return (
      <div>
        <QuizPage />
      </div>
    )
  }
  return null;
};

const Child = ({ match }) => (
  <div>
    <Header />
    { renderSlide(match) }
    { renderQuiz(match) }
    { renderSlideDetail(match) }
    { renderQuizDetail(match) }
  </div>
);

Child.propTypes = {
  match: PropTypes.object,
};

export default Child;
