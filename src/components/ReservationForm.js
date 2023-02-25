import React, { useEffect } from "react";
import { useFormik } from "formik";
import parse from "date-fns/parse";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ReservationForm = ({ availableBookings, changeDateAction }) => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      date: "",
      dinners: "",
      time: "",
      occasion: "",
      email: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://littlelemonrestaurant.com/api/reservation/", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      date: Yup.date()
        .transform(function (value, originalValue) {
          if (this.isType(value)) {
            return value;
          }
          const result = parse(originalValue, "T", new Date());
          return result;
        })
        .typeError("please enter a valid date")
        .required("Date required")
        .min(
          new Date().setHours(0, 0, 0, 0),
          "You can not reserve a date in the past!"
        ),
      time: Yup.string().ensure().required("Please select a time slot!"),
      dinners: Yup.number()
        .typeError("Please enter a valid number")
        .required("Please set the number of dinners")
        .min(1, "Minimum number of dinners is 1")
        .max(10, "Maximum dinners allowed is 10"),
      occasion: Yup.string().ensure().required("Please select an Occasion!"),
      comment: Yup.string().max(255, "Max length is 255 characters!"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <VStack px={12} alignItems="flex-start">
      <h1 className="display-title secondary-color">Reserve a Table</h1>
      <Box rounded="md" w="100%">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.firstName && formik.touched.firstName}
            >
              <FormLabel fontWeight={700} htmlFor="firstName">
                Name
              </FormLabel>
              <Input
                id="firstName"
                name="firstName"
                {...formik.getFieldProps("firstName")}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.date && formik.touched.date}
            >
              <FormLabel fontWeight={700} htmlFor="date">
                Date
              </FormLabel>
              <Input
                id="date"
                name="date"
                type="date"
                {...formik.getFieldProps("date")}
                onChange={(e) => {
                  changeDateAction({
                    type: "setDate",
                    payload: e.currentTarget.value,
                  });
                  formik.handleChange(e);
                }}
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.time && formik.touched.time}
            >
              <FormLabel fontWeight={700} htmlFor="time">
                Time
              </FormLabel>
              <Select
                id="time"
                name="time"
                placeholder="Select a Time slot..."
                {...formik.getFieldProps("time")}
              >
                {availableBookings.availableTimes.map((bookingTime) => (
                  <option key={bookingTime} value={bookingTime}>
                    {bookingTime}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.dinners && formik.touched.dinners}
            >
              <FormLabel fontWeight={700} htmlFor="dinners">
                Number of dinners
              </FormLabel>
              <Input
                id="dinners"
                name="dinners"
                type="number"
                placeholder="Set the number of dinners..."
                {...formik.getFieldProps("dinners")}
              />
              <FormErrorMessage>{formik.errors.dinners}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.email && formik.touched.email}
            >
              <FormLabel fontWeight={700} htmlFor="email">
                Email Address
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.occasion && formik.touched.occasion}
            >
              <FormLabel fontWeight={700} htmlFor="occasion">
                Occasion
              </FormLabel>
              <Select
                id="occasion"
                name="occasion"
                placeholder="Select an occasion..."
                {...formik.getFieldProps("occasion")}
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </Select>
              <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={!!formik.errors.comment && formik.touched.comment}
            >
              <FormLabel fontWeight={700} htmlFor="comment">
                Additional information
              </FormLabel>
              <Textarea
                id="comment"
                name="comment"
                height={6}
                {...formik.getFieldProps("comment")}
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              <FormHelperText>
                This field is optional. If you would like to communicate any
                special requirements for your table reservation, please let us
                know.
              </FormHelperText>
            </FormControl>
            <Button
              type="submit"
              bgColor="#f4ce14"
              width="full"
              isLoading={isLoading}
              loadingText="Submitting"
              isDisabled={!(formik.dirty && formik.isValid)}
            >
              Submit Reservation
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default ReservationForm;
