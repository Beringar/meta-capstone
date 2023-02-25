import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AlertProvider } from "../context/alertContext";
import ReservationForm from "./ReservationForm";

describe("given a ReservationForm component", () => {
  describe("when instantiated", () => {
    it("Should show 'Reserve a Table' heading", () => {
      const availableBookings = { availableTimes: ["18:00", "19:00"] };
      const changeDateAction = () => {};
      render(
        <BrowserRouter>
          <ChakraProvider>
            <AlertProvider>
              <ReservationForm
                availableBookings={availableBookings}
                changeDateAction={changeDateAction}
              />
            </AlertProvider>
          </ChakraProvider>
        </BrowserRouter>
      );
      const headingElement = screen.getByText("Reserve a Table");
      expect(headingElement).toBeInTheDocument();
    });
    it("Should show 'Occasion' label", () => {
      const availableBookings = { availableTimes: ["18:00", "19:00"] };
      const changeDateAction = () => {};
      render(
        <BrowserRouter>
          <ChakraProvider>
            <AlertProvider>
              <ReservationForm
                availableBookings={availableBookings}
                changeDateAction={changeDateAction}
              />
            </AlertProvider>
          </ChakraProvider>
        </BrowserRouter>
      );
      const occasionLabel = screen.getByLabelText(/occasion/i);
      expect(occasionLabel).toBeInTheDocument();
    });
  });
});
