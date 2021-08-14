import "./scss/_signUpForm.scss";
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
    formState: { errors, isValid }
  } = useForm({
    mode: "onBlur"
  });

  // State Props //
  const [values, setValues] = useState({
    response: ''
  });

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
      <h3> {values.response.message} </h3>
    )
  }
  return (
    <div className="signUp">      
      <div className="signUp__title">
        <h1>Sign up for email updates</h1>
        <p>*Indicates Required Field</p>
      </div>
      <div className="signUp__formWrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signUp__inputTextWrapper">
            <InputText name="firstName" 
              label="First Name" 
              ariaLabel="first name" 
              validator={register("firstName", {required: true})}
              errors={errors.firstName}
              required
            />
            <InputText name="lastName"
              label="Last Name"
              ariaLabel="last name"
              validator={register("lastName", {required: true})}
              errors={errors.lastName}
              required
            />
            <InputText name="emailAddress"
              label="Email Address"
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
              label="Organization"
              ariaLabel="organization"
              validator={register("organization", {required: false})}
              errors={errors.organization}
            />
          </div>
          <div className="signUp__selectWrapper">
            <SelectDD name="euResident"
              placeholder="SELECT ONE"
              label="EU RESIDENT"
              options={euResidentOptions}
              validator={register("euResident", {required: true})}
              errors={errors.euResident}
              required
            />
          </div>
          <div className="signUp__checkboxWrapper">
            <CheckboxGroup 
              label=""
              options={preferencesOptions}
              validator={register("preferences", {required: true})}
              errors={errors.preferences}
            />
          </div>
          <div className="signUp_buttonWrapper">
            <Button label="SUBMIT" bgColor="#803093" disabled={!isValid} isSubmit/>
            <Button label="RESET" bgColor="#fff" darkLabel/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;