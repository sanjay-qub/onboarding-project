import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


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


import React from 'react'

function GeneralFormula() {




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
      .test({
        name: 'atLeastOneChip',
        test: function(value) {
          // Ensure that at least one chip is present in the array.
          return value.length >= 1;
        }
      })
      .required("Please add at least one chip.")
   
 
});




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
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-center mb-6">Registration Form</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder=" Username"
              className={`w-full h-10 border ${
                errors.username
                  ? 'border-red-500'
                  : isValid
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
              {...register('username')}
            />
            <p className="text-red-500 mt-1">{errors.username ? errors.username.message : ''}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder=" Email"
              className={`w-full h-10 border ${
                errors.email
                  ? 'border-red-500'
                  : isValid
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
              {...register('email')}
            />
            <p className="text-red-500 mt-1">{errors.email ? errors.email.message : ''}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder=" Password"
              className={`w-full h-10 border ${
                errors.password
                  ? 'border-red-500'
                  : isValid
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
              {...register('password')}
            />
            <p className="text-red-500 mt-1">{errors.password ? errors.password.message : ''}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              placeholder=" Age"
              className={`w-full h-10 border ${
                errors.age
                  ? 'border-red-500'
                  : isValid
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
              {...register('age')}
            />
            <p className="text-red-500 mt-1">{errors.age ? errors.age.message : ''}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              className={`w-full h-10 border ${
                errors.gender
                  ? 'border-red-500'
                  : isValid
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
              {...register('gender')}
            >
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <p className="text-red-500 mt-1">{errors.gender ? errors.gender.message : ''}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              className={`w-full h-10 border ${
                errors.dateOfBirth
                  ? 'border-red-500'
                  : isValid
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
              {...register('dateOfBirth')}
            />
            <p className="text-red-500">{errors.dateOfBirth ? errors.dateOfBirth.message : ''}</p>
          </div>
         

     

         
          <div className="mb-4">
            <label htmlFor="select">Select</label>
            <select
              name="select"
              className={`w-full h-10 border ${
                errors.select
                  ? 'border-red-500'
                  : isValid
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
              {...register('select')}
            >
              <option value="">Select</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
            </select>
            <p className="text-red-500">{errors.select ? errors.select.message : ''}</p>
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
            <label htmlFor="checkbox">Agree</label>
            <input type="checkbox" {...register('checkbox')} />
            <p className="text-red-500">{errors.checkbox ? errors.checkbox.message : ''}</p>
          </div>

          </div>
     
        <div className="mb-4">
          <textarea className="w-full h-32 border" placeholder=" Additional Comments" {...register('comments')} />
        </div>
        <div className="mb-4 text-center">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded${
              !isValid ? 'opacity-50 cursor-not-allowed' : ''
            } mx-auto`}
          >
            Submit
          </button>
      </div>
      </form>
    </div>
  </>
   
  )
}

export default GeneralFormula






