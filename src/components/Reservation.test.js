import { initializeTimes, bookingTimesReducer } from "./Reservation";

describe("given a initializeTimes function", () => {
  describe("when invoked", () => {
    it("Should return initial values", () => {
      const initialValues = {
        availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      };

      const result = initializeTimes();

      expect(result).toEqual(initialValues);
    });
  });
});

describe("given a bookingTimesReducer function", () => {
  describe("when invoked with empty state and an action", () => {
    it("Should a new state", () => {
      const initialValues = {
        availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      };
      const state = {};
      const action = { type: "setDate", payload: "2023-02-02" };

      const newState = bookingTimesReducer(state, action);

      expect(newState).toEqual(initialValues);
    });
  });
});
