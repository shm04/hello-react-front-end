import { setGreeting } from '../reducers/greetingReducer';

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/api/messages');
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomMessage = data[randomIndex].message;

    dispatch(setGreeting(randomMessage));
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};

export default fetchRandomGreeting;
