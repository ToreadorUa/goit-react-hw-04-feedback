import { Buttons } from './FeedbackStyled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <Buttons>
    {options.map((el, i) => {
      return (
        <button
          key={i}
          type="button"
          name={el}
          onClick={onLeaveFeedback}
          style={{ textTransform: 'capitalize' }}
        >
          {el}
        </button>
      );
    })}
  </Buttons>
);
