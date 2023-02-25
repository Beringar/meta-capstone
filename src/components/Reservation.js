import { useReducer } from "react";
import ReservationForm from "./ReservationForm";
import { fetchAPI } from "../api/bookingApi";

export const initializeTimes = () => ({ availableTimes: fetchAPI(new Date()) });

export const bookingTimesReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "setDate":
      const date = new Date(action.payload);
      newState = { ...state, availableTimes: fetchAPI(date) };
      break;
    default:
      throw new Error();
  }
  return newState;
};

function Reservation() {
  const [availableBookings, dispatch] = useReducer(
    bookingTimesReducer,
    initializeTimes()
  );

  return (
    <div className="container">
      <section>
        <ReservationForm
          availableBookings={availableBookings}
          changeDateAction={dispatch}
        />
      </section>
    </div>
  );
}

export default Reservation;
