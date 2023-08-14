import { Buttons } from './FeedbackStyled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <Buttons>
    {options.map(el => {
      return (
        <button type="button" name={el} onClick={onLeaveFeedback}>
          {el}
        </button>
      );
    })}

    {/* <button type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>
      Bad
    </button> */}
  </Buttons>
);
