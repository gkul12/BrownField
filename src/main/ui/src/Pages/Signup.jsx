import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import { ColumnFlexBox, ErrorText, FlexBox } from "../helpers/components";
import { useNavigate, Link } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import axios from "axios";
import "yup-phone-lite";
import airplanes from "../images/aeroplane.jpg";
// import "./style.css";
import { margin, padding } from "@mui/system";

const c = dayjs();
YupPassword(Yup);

const initialValues = {
  fisrtName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  gender: "",
  dob: undefined,
};

const validationSchema = Yup.object({
  fisrtName: Yup.string().required("Fisrt Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .phone("IN", "Please enter a valid phone number")
    .required("A phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.date().required("Valid Date of Birth is required"),
});

const onSubmit = (values) => {
  axios
    .post("http://localhost:8080/signup", values)
    .then(function (response) {
      alert(response);
    })
    .catch(function (error) {
      alert(error);
    });
};

const Signup = () => {
  const navigate = useNavigate();

  const onNavigateLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "50px 10%",
            }}
          >
            <div className="w-screen h-screen   bg-gray-900 grid lg:grid-cols-2 ">
              <div className=" p-16">
                <div className=" font-serif text-gray-50 ">
                  <fieldset id="login_head">
                    <h1 className=" text-center text-gray-50 text-5xl  mb-10 font-medium">
                      Sign up
                    </h1>
                  </fieldset>
                  <div className=" grid text-gray-50 lg:grid-cols-2 gap-x-2.5">
                    <div className=" font-serif text-gray-50">
                      <ColumnFlexBox>
                        <FormLabel required>First name</FormLabel>

                        <Field type="text" name="fisrtName">
                          {(props) => (
                            <TextField
                              id="fname"
                              placeholder="Enter your first name"
                              {...props.field}
                            />
                          )}
                        </Field>

                        <ErrorMessage name="fisrtName" component={ErrorText} />
                      </ColumnFlexBox>
                      <ColumnFlexBox>
                        <FormLabel required>Email Address</FormLabel>
                        <Field name="email">
                          {(props) => (
                            <TextField
                              type="email"
                              placeholder="E.g. abc@example.com"
                              {...props.field}
                            />
                          )}
                        </Field>
                        <ErrorMessage name="email" component={ErrorText} />
                      </ColumnFlexBox>
                      <ColumnFlexBox>
                        <FormLabel required>Password</FormLabel>
                        <Field name="password">
                          {(props) => (
                            <TextField
                              type="password"
                              placeholder=""
                              {...props.field}
                            />
                          )}
                        </Field>
                        <ErrorMessage name="password" component={ErrorText} />
                      </ColumnFlexBox>
                      <ColumnFlexBox>
                        <FormLabel required>Gender</FormLabel>
                        <FlexBox style={{ gap: "20px", margin: "20px" }}>
                          <FlexBox>
                            <FormLabel>Male</FormLabel>
                            <Field value="male" type="radio" name="gender">
                              {(props) => <Radio {...props.field} />}
                            </Field>
                          </FlexBox>
                          <FlexBox>
                            <FormLabel>Female</FormLabel>
                            <Field value="female" type="radio" name="gender">
                              {(props) => <Radio {...props.field} />}
                            </Field>
                          </FlexBox>
                          <FlexBox>
                            <FormLabel>Other</FormLabel>
                            <Field value="other" type="radio" name="gender">
                              {(props) => <Radio {...props.field} />}
                            </Field>
                          </FlexBox>
                          <ErrorMessage name="gender" component={ErrorText} />
                        </FlexBox>
                      </ColumnFlexBox>
                    </div>
                    <div className="right">
                      <ColumnFlexBox>
                        <FormLabel required>Last name</FormLabel>
                        <Field type="text" name="lastName">
                          {(props) => (
                            <TextField
                              placeholder="Enter your last name"
                              {...props.field}
                            />
                          )}
                        </Field>
                        <ErrorMessage name="lastName" component={ErrorText} />
                      </ColumnFlexBox>
                      <ColumnFlexBox>
                        <FormLabel required>Phone Number</FormLabel>
                        <Field name="phoneNumber">
                          {(props) => (
                            <TextField
                              type="phone"
                              placeholder="Phone Number"
                              {...props.field}
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="phoneNumber"
                          component={ErrorText}
                        />
                      </ColumnFlexBox>
                      <ColumnFlexBox>
                        <FormLabel required>Re-enter Password</FormLabel>
                        <Field name="confirmPassword">
                          {(props) => (
                            <TextField
                              type="password"
                              placeholder=""
                              {...props.field}
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="confirmPassword"
                          component={ErrorText}
                        />
                      </ColumnFlexBox>

                      <FlexBox style={{ margin: "18px" }}>
                        <FormLabel>Date of Birth</FormLabel>

                        {/* <Field name="dob">
                          {(props) => {
                            const { setFieldValue } = props.form;
                            const { value, onChange } = props.field;

                            return (
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  id="dob"
                                  {...props.field}
                                  onChange={(value) => {
                                    onChange("dob", value);
                                    setFieldValue("dob", value);
                                  }}
                                  value={value}
                                  maxDate={c.subtract(18, "year").toString()}
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </LocalizationProvider>
                            );
                          }}
                        </Field> */}
                        <ErrorMessage name="dob" component={ErrorText} />
                      </FlexBox>
                    </div>
                  </div>
                  <div className="button-signup">
                    <FlexBox style={{ gap: "20px" }}>
                      <Link
                        type="button"
                        to="/login"
                        onClick={onNavigateLoginClick}
                        variant="outlined"
                      >
                        Already a customer? Login
                      </Link>
                      <Button id="btn-signup" type="submit" variant="contained">
                        Sign up
                      </Button>
                    </FlexBox>
                  </div>
                </div>
              </div>
              <div>
                <img src={airplanes} alt="Logo" />;
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Signup;
