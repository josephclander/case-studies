import './App.css';
import { useState } from 'react';
import { Birthday } from './pages/birthday';
import { DaysUntil } from './pages/daysUntil';

// the 'types' for
type InfoState = {
  fullName: string;
  day: number;
  month: number;
  daysUntil: number;
};

const App: React.FC = () => {
  const [info, setInfo] = useState<InfoState>({
    fullName: '',
    day: 1,
    month: 0,
    daysUntil: 0,
  });
  const [result, setResult] = useState<boolean>(false);

  const changeHandler = (
    // a react change event: either input or select coming back
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInfo((prevValue) => ({
      ...prevValue,
      // day could be empty string or NaN
      [name]: name === 'day' || name === 'month' ? parseInt(value) || 0 : value,
    }));
  };

  // this is from a form event returning a form element
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const { day, month } = info;
    const dayToday = new Date().getDate();
    const monthToday = new Date().getMonth();
    console.log({ dayToday, monthToday });

    setResult(() => day === dayToday && month === monthToday);
  };

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <form onSubmit={submitHandler}>
        <h2>Who are you?</h2>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={info.fullName}
          onChange={(event) => changeHandler(event)}
        />
        <h2>When is your birthday?</h2>
        <label htmlFor="day">Day</label>
        <input
          type="number"
          name="day"
          id="day"
          value={info.day}
          onChange={(event) => changeHandler(event)}
        />
        <label htmlFor="month">Month</label>
        <select
          name="month"
          id="month"
          value={info.month}
          onChange={(event) => changeHandler(event)}
        >
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
        <button type="submit" className="submit">
          Go!
        </button>
      </form>
      {result ? <Birthday {...info} /> : <DaysUntil {...info} />}
    </div>
  );
};

export default App;
