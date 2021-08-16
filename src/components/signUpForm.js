import InputText from "./inputText";
import SelectDD from "./selectDropdown";
import CheckboxGroup from "./checkboxGroup";
import Button from "./button";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { postSubscribeForm } from "../utils/dataService";
import { euResidentOptions, preferencesOptions } from "../constants/controlOptions"

const SignUp = () => {
  // Hook Forms Config //
  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: "onBlur"
  });

  // State Props //
  const [values, setValues] = useState({
    response: '',
  });

  // A11Y //
  const a11yErrors = Object.keys(errors); 

  // Methods //
  const onSubmit = async(data) => {
    if(!isValid) return;
    const params = encodeValues(data);
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    try {
      const res = await postSubscribeForm(params, config);
      setValues({...values, 'response': JSON.parse(res)});
    } catch(error) {
      console.log(error);
    }
  };

  const onReset = () => {
    reset();
  }

  const listAccessibilityErrors = () => {
    return a11yErrors.map(
      (el) => 
        <li key={el}>
          error in {el} field, error type is {errors[el].type}
        </li>
    );
  }

  const encodeValues = (data) => {
    const params = new URLSearchParams();
    for (const prop in data) {
      params.append(prop, data[prop]);
    }
    return params;
  };

  // Conditional Rendering //
  if(values.response.status === 'success' || values.response.status === 'error') {
    return (
      <h3 className="status-message" role="alert">{values.response.message}</h3>
    )
  }
  return (
    <div className="signup">
      <div className="signup__title">
        <h2>Sign up for email updates</h2>
        <p className="signup__required-title">*Indicates Required Field</p>
      </div>
      <div className="signup__form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} id="signup-form">
          <div className="signup__inputtext-wrapper">
            <InputText name="firstName" 
              label="FIRST NAME" 
              ariaLabel="first name" 
              validator={register("firstName", {required: true})}
              errors={errors.firstName}
              required
            />
            <InputText name="lastName"
              label="LAST NAME"
              ariaLabel="last name"
              validator={register("lastName", {required: true})}
              errors={errors.lastName}
              required
            />
            <InputText name="emailAddress"
              label="EMAIL ADDRESS"
              ariaLabel="email address"
              validator={register("emailAddress",
              {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              errors={errors.emailAddress}
              required
            />
            <InputText name="organization" 
              label="ORGANIZATION"
              ariaLabel="organization"
              validator={register("organization", {required: false})}
              errors={errors.organization}
            />
          </div>
          <div className="signup__selectdd-wrapper">
            <SelectDD name="euResident"
              placeholder="- SELECT ONE -"
              label="EU RESIDENT"
              options={euResidentOptions}
              validator={register("euResident", {required: true})}
              errors={errors.euResident}
              required
            />
          </div>
          <div className="signup__checkbox-wrapper">
            <CheckboxGroup 
              label="subscription preferences"
              options={preferencesOptions}
              validator={register("preferences", {required: true})}
              errors={errors.preferences}
            />
          </div>
          <div className="signup__button-wrapper">
            <Button label="SUBMIT" bgColor="#803093" disabled={!isValid} isSubmit/>
            <Button label="RESET" bgColor="#fff" onClick={onReset} darkLabel/>
          </div>
        </form>
      </div>
      <div role="alert" className="screen-read-only">
        <h4>There are {Object.keys(errors).length} errors in this form</h4>
        <ul>
          {
            listAccessibilityErrors()
          }
        </ul>
      </div>
    </div>
  );
}

export default SignUp;