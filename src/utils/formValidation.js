export default function formValidation(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "I need your Email address =(";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "That's an invalid Email";
  }

  return errors;
}
