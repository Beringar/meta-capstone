import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ReservationConfirmed() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  return (
    <div className="container reservation-bg">
      <section id="reservation-details">
        <VStack px={[0, 6, 12]} alignItems="flex-start">
          <h1 className="display-title secondary-color">Reserve a Table</h1>
          <h2 className="subtitle">Order status</h2>
          <Box p={3} rounded="md" w="100%" bg={state ? "lightgrey" : "#ff9e9e"}>
            <h2 className="section-title">
              {state ? `✅ Table Reservation Confirmed` : `❌ Error`}
            </h2>

            {state ? (
              <>
                <h3 className="data-title">Your details:</h3>
                <ul className="reservation-details-list">
                  {Object.entries(state).map(([key, value]) => (
                    <li key={key}>
                      <span className="reservation-key">{`${key}: `}</span>
                      <span className="reservation-value">{value}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p>
                  No data received. Please try again to make a new table
                  reservation.
                </p>
                <button
                  className="btn"
                  onClick={() => {
                    navigate(`/reservation`);
                  }}
                >
                  Reserve a Table
                </button>
              </>
            )}
          </Box>
          <p>
            <Link className="underline" to="/">
              Back to Homepage
            </Link>
          </p>
        </VStack>
      </section>
    </div>
  );
}

export default ReservationConfirmed;
