import { initializeTimes, bookingTimesReducer } from "./Reservation";

describe("given a initializeTimes function", () => {
  describe("when invoked", () => {
    it("Should return initial values", () => {
      const result = initializeTimes();

      expect(result.availableTimes.length).toBeGreaterThan(0);
    });
  });
});

describe("given a bookingTimesReducer function", () => {
  describe("when invoked with empty state and an action", () => {
    it("Should return a new state", () => {
      const state = {};
      const action = { type: "setDate", payload: "2023-02-02" };

      const newState = bookingTimesReducer(state, action);

      expect(newState.availableTimes.length).toBeGreaterThan(0);
    });
  });
});
