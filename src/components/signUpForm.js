import "./scss/_signUpForm.scss";
import InputText from "./inputText";
import SelectDD from "./selectDropdown";
import CheckboxGroup from "./checkboxGroup";
import Button from "./button";
import { useForm } from 'react-hook-form';

function SignUp() {
  const { 
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onBlur"
  });
  
  //pre populated element options //
  const selectOptions = ["YES", "NO"];
  const checkGroupOptions = [
    {'label':'ADVANCES', 'value':'pref1'},
    {'label':'ALERTS', 'value':'pref2'},
    {'label':'OTHER COMMUNICATIONS', 'value':'pref3'}
  ];

  // methods //
  const onSubmit = (data) => {
    console.log(data);
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
              options={selectOptions}
              validator={register("euResident", {required: true})}
              errors={errors.euResident}
              required
            />
          </div>
          <div className="signUp__checkboxWrapper">
            <CheckboxGroup 
              label=""
              options={checkGroupOptions}
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