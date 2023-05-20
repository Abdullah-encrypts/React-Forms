import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput(value => value.trim() !== '');
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInput(value => value.trim() !== '');
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(value => value.includes('@'));

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");

  // const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
  // const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  // const [emailIsTouched, setEmailIsTouched] = useState(false);

  // let firstNameIsValid = firstName.trim() !== "";
  // let lastNameIsValid = lastName.trim() !== "";
  // let emailIsValid = email.includes("@");

  // const firstNameHasError = !firstNameIsValid && firstNameIsTouched;
  // const lastNameHasError = !lastNameIsValid && lastNameIsTouched;
  // const emailHasError = !emailIsValid && emailIsTouched;

  // const firstNameChangeHandler = (event) => {
  //   setFirstName(event.target.value);
  // };
  // const lastNameChangeHandler = (event) => {
  //   setLastName(event.target.value);
  // };
  // const emailChangeHandler = (event) => {
  //   setEmail(event.target.value);
  // };

  // const firstNameBlurHandler = () => {
  //   setFirstNameIsTouched(true);
  // };

  // const lastNameBlurHandler = () => {
  //   setLastNameIsTouched(true);
  // };

  // const emailBlurHandler = () => {
  //   setEmailIsTouched(true);
  // };

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    firstNameReset();
    lastNameReset();
    emailReset();
   };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
            value={firstNameValue}
          />
        </div>
        {firstNameHasError && <p className="error-text">Enter a valid name!</p>}
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
            value={lastNameValue}
          />
        </div>
        {lastNameHasError && <p className="error-text">Enter a valid name!</p>}
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={emailValue}
        />
      </div>
      {emailHasError && <p className="error-text">Enter a valid Email!</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
