import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as React from "react";

import Navigation from "./Navigation";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Checkbox from '@mui/material/Checkbox';


import {Controller } from "react-hook-form";


import  { useState } from "react";

import ChipInput from "material-ui-chip-input";

import Treeview from "../surephase/Treeview";










const label = { inputProps: { "aria-label": "Checkbox demo" } };

const schema = yup.object({
  username: yup.string().required().max(50),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  age: yup.number().required().positive().integer(),
  gender: yup.string().required(),
  dateOfBirth: yup.date().required().max(new Date()),
  select: yup.string().required(),
  checkbox: yup.boolean().oneOf([true], "Please check this field"),
  chips: yup
    .array()
    .of(yup.string().max(50).min(1))
    .required("Please add at least one chip."),
});


function FormValidation() {
 

 



  function handleChanges(event) {
    setValue(event.target.value);
}


  

const [value, setValue] = useState("");
const [chips, setChips] = useState([]);


  
const {
  handleSubmit,
  register,
  formState: { errors, isValid },
  control,
} = useForm({
  resolver: yupResolver(schema),
  mode: "onChange",
});

const formSubmit = (data) => {
  console.log(data);
};

const handleChipAdd = (chip) => {
  setChips([...chips, chip]);
};

const handleChipDelete = (chipToDelete) => {
  const updatedChips = chips.filter((chip) => chip !== chipToDelete);
  setChips(updatedChips);
};




  return (
    <>
    
    
 
      

      <div className="">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Registration Form
        </h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mx-auto grid w-[1200px] lg:grid-cols-3 px-5">
            <div className="mb-4 ">
              <label className="mt-0" htmlFor="username">
                Username
              </label>{" "}
              <br />
              <input
                id="outlined-basic username"
                type="text"
                name="username"
                placeholder="  Username"
                className={`w-1/2 h-8  shadow appearance-noneshadow appearance-none border rounded w-65 focus:shadow-outline ${
                  errors.username
                    ? "border-red-500 custom-error-class"
                    : isValid
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                {...register("username")}
              />
              <p className="text-red-500 mt-1">
                {errors.username ? errors.username.message : ""}
              </p>
            </div>
            <div className="mb-4  ">
              <label className=" " htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                id="outlined-basic email"
                type="email"
                name="email"
                placeholder="  Email"
                className={`w-1/2 h-8  shadow appearance-noneshadow appearance-none border rounded w-65 focus:shadow-outline ${
                  errors.email
                    ? "border-red-500"
                    : isValid
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                {...register("email")}
              />
              <p className="text-red-500 mt-1">
                {errors.email ? errors.email.message : ""}
              </p>
            </div>
            <div className="mb-4">
              <label className=" " htmlFor="password">
                Password
              </label>{" "}
              <br />
              <input
                id="outlined-basic password"
                type="password"
                name="password"
                placeholder="  Password"
                className={`w-1/2 h-8  shadow appearance-noneshadow appearance-none border rounded w-65 focus:shadow-outline ${
                  errors.password
                    ? "border-red-500"
                    : isValid
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                {...register("password")}
              />
              <p className="text-red-500 mt-1">
                {errors.password ? errors.password.message : ""}
              </p>
            </div>
            <div className="mb-4">
              <label className=" mb-1" htmlFor="age">
                Age
              </label>{" "}
              <br />
              <input
                id="outlined-basic age"
                type="number"
                name="age"
                placeholder="  Age"
                className={`w-1/2 h-8  shadow appearance-noneshadow appearance-none border rounded w-65 focus:shadow-outline ${
                  errors.age
                    ? "border-red-500"
                    : isValid
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                {...register("age")}
              />
              <p className="text-red-500 mt-1">
                {errors.age ? errors.age.message : ""}
              </p>
            </div>


         <div>
  <FormControl >
    
    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
    <RadioGroup 
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="gender"
      value={value}
      onChange={handleChanges}
    >
      <FormControlLabel
        value="female"
        control={<Radio />}
        label="Female"
        {...register("gender")} // Add this line to register the "gender" field with react-hook-form
      />
      <FormControlLabel
        value="male"
        control={<Radio />}
        label="Male"
        {...register("gender")} // Add this line to register the "gender" field with react-hook-form
      />
    </RadioGroup>
  </FormControl>
  <p className="text-red-500 mt-1">
    {errors.gender ? errors.gender.message : ""}
  </p>
</div>




            <div className="mb-4">
              <label className=" " htmlFor="dateOfBirth">
                Date of Birth
              </label>{" "}
              <br />
              <input
                id="outlined-basic age option dateOfBirth"
                type="date"
                name="dateOfBirth"
                className={`w-1/2 h-8  shadow appearance-noneshadow appearance-none border rounded w-65 focus:shadow-outline${
                  errors.dateOfBirth
                    ? "border-red-500"
                    : isValid
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                {...register("dateOfBirth")}
              />
              <p className="text-red-500 ">
                {errors.dateOfBirth ? errors.dateOfBirth.message : ""}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="">select</label> <br />
              <select
                id="select"
                name="select"
                className={`w-1/2 h-8  shadow appearance-noneshadow appearance-none border rounded w-65 focus:shadow-outline${
                  errors.chipset
                    ? "border-red-500"
                    : isValid
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                {...register("select")}
              >
                <option value="">Select </option>
                <option value="Mr"> Mr</option>
                <option value="Ms">Ms</option>
              </select>
              <p className="text-red-500 ">
                {errors.select ? errors.select.message : ""}
              </p>
            </div>
          






          
            <div className="mb-4">
              <label htmlFor="">chips</label> <br />
              <Controller
                   {...register("chips")}
                name="chips"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <ChipInput
             
                    {...field}
                    label="Chips"
                    fullWidth
                    value={chips}
                    onAdd={(chip) => {
                      
                      handleChipAdd(chip);
                      field.onChange([...field.value, chip]);
                    }}
                    onDelete={(chip, index) => {
                      handleChipDelete(chip);
                      const newValue = [...field.value];
                      newValue.splice(index, 1);
                      field.onChange(newValue);
                    }}
                    error={!!errors.chips}
                    helperText={errors.chips ? errors.chips.message : ""}
                  />
                )}
              />
            </div>

  

            <div className="mb-4">
              <label htmlFor="">Agree</label> <br />
      <Checkbox {...label}    {...register("checkbox")} />
      <p className="text-red-500 ">
                {errors.checkbox ? errors.checkbox.message : ""}
              </p>
    </div>




          </div>

          <div className="mb-4 w-full">
         <input type="textarea" className="w-full" />

          </div>


          <div className="mb-4 text-center"> 
  <button
    type="submit"
    className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded${
      !isValid ? "opacity-50 cursor-not-allowed" : ""
    } mx-auto`} 
  >
    Submit
  </button>
</div>

        
        </form>
      </div>
    </>
  );
}

export default FormValidation;
