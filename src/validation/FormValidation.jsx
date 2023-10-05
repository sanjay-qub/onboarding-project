import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as React from 'react';


import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


const schema = yup.object({
  username: yup.string().required().max(50),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  age: yup.number().required().positive().integer(),
  gender: yup.string().required(),
  dateOfBirth: yup.date().required().max(new Date()),

  select: yup.string().required(),
  selects: yup.array().required()
});


function FormValidation() {
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



  const names = [
    "react js",
    "node js",
    "angular",
    "mongodb"
  ];
  

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


  


  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", 
  });
  

  const formSubmit = (data) => {
    console.log(data);
  };
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [selects, setSelects] = React.useState("");
  

  const handleChange = (event) => {

    const {
      target: { value },
    } = event;
    setPersonName(

      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Registration Form</h1>

      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className={`w-full px-3 py-2 border rounded  ${
              errors.username
                ? "border-red-500"
                : isValid? "border-green-500"
                : "border-gray-300"
            }`}
            {...register("username")}
          />
          <p className="text-red-500 mt-1">
            {errors.username ? errors.username.message : ""}
          </p>
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={`w-full px-3 py-2 border rounded ${
              errors.email ? "border-red-500" : isValid? "border-green-500" : "border-gray-300"
            }`}
            {...register("email")}
          />
          <p className="text-red-500 mt-1">
            {errors.email ? errors.email.message : ""}
          </p>
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={`w-full px-3 py-2 border rounded ${
              errors.password ? "border-red-500" : isValid? "border-green-500" : "border-gray-300"
            }`}
            {...register("password")}
          />
          <p className="text-red-500 mt-1">
            {errors.password ? errors.password.message : ""}
          </p>
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Age"
            className={`w-full px-3 py-2 border rounded ${
              errors.age ? "border-red-500" : isValid? "border-green-500" : "border-gray-300"
            }`}
            {...register("age")}
          />
          <p className="text-red-500 mt-1">
            {errors.age ? errors.age.message : ""}
          </p>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Gender</label>
          <div className="flex space-x-4">
            <label htmlFor="option1">
              <input
                type="radio"
                id="option"
                name="radioOption"
                value="male"
                {...register("gender")}
              />
              male
            </label>
            <label htmlFor="option2">
              <input
                type="radio"
                id="option"
                name="radioOption"
                value="female"
                {...register("gender")}
              />
           female
            </label>
          </div>
          <p className="text-red-500 mt-1">
            {errors.gender ? errors.gender.message : ""}
          </p>
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="dateOfBirth">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className={`w-full px-3 py-2 border rounded ${
              errors.dateOfBirth ? "border-red-500" : isValid? "border-green-500" : "border-gray-300"
            }`}
            {...register("dateOfBirth")}
          />
          <p className="text-red-500 mt-1">
            {errors.dateOfBirth ? errors.dateOfBirth.message : ""}
          </p>
        </div>

     

        <div className="mb-5">
         
          <select
            id="select"
            name="select"
            className={`w-full px-3 py-2 border rounded ${
              errors.chipset ? "border-red-500" : isValid? "border-green-500" : "border-gray-300"
            }`}
            {...register("select")}
          >
            <option value="">Select </option>
            <option value="Mr"> Mr</option>
            <option value="Ms">Ms</option>
          </select>
          <p className="text-red-500 mt-1">
            {errors.select ? errors.select.message : ""}
          </p>
        
          
          <FormControl  sx={{ m: 1, width: '100%' }} >
        <InputLabel id="demo-multiple-chip-label">chips</InputLabel> 
        <Select
        className={` ${
          errors.selects ? "border-red-500 " : isValid? "border-green-500" : "border-gray-300"
        }`}
        {...register("selects")}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p className="text-red-500 mt-1">
            {errors.selects ? errors.selects.message : ""}
          </p>

        </div>

        <button
  type="submit"
  className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded ${
    !isValid ? "opacity-50 cursor-not-allowed" : ""
  }`}
  enabled={!isValid}
>
  Submit
</button>
      </form>
    </div>
  );
}

export default FormValidation;




