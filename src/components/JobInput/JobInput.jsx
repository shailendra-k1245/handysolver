import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJobs } from '../../Redux/action';

export const JobInput = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const options = [{ name: 'Is Remote', id: 1 }, { name: '5 Day Week', id: 2 }]
  const [inpData, setInpData] = useState({
    JobTitle: {
      data: "",
      marked: true
    },
    Introduction: {
      data: "",
      marked: true
    },
    Roles: {
      data: "",
      marked: true
    },
    Experience: {
      data: {
        min: 0,
        max: 0
      },
      marked: true
    },
    Qualifications: {
      data: "",
      marked: true
    },
    SalaryRange: {
      data: "",
      marked: false
    },
    CallToAction: {
      data: "",
      marked: true
    },
    Company: {
      data: "",
      marked: false
    },
    JobLocation: {
      data: "",
      marked: true
    },
    JobType: {
      data: "Full Time",
      marked: true
    },
    Labels: {
      data: [],
      marked: true
    },
    Active: true
  })
  const dispatch = useDispatch();
  const jobs = useSelector((store) => store.jobs);
  console.log("jobs0red ", jobs)

  const onSelect = (list) => {
    setInpData({ ...inpData, Labels: list })
  }
  const onRemove = (list) => {
    setInpData({ ...inpData, Labels: list })

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...inpData };
    updatedData[name] = { ...updatedData[name], data: value };
    setInpData(updatedData);
  }

  const handleCheckBox = (e) => {
    const { id, checked } = e.target;
    const updatedData = { ...inpData };
    updatedData[id] = { ...updatedData[id], marked: checked }
    setInpData(updatedData);
  }

  const handleSwitch = (e) => {
    setInpData({ ...inpData, Active: e.target.checked });
  }

  const handleSelect = (e) => {
    const { name, value } = e.target;
    if (name === "min" || name === "max") {
      const updatedData = { ...inpData }
      updatedData.Experience.data[name] = value
      setInpData(updatedData);
      console.log(inpData.Experience.data)
      console.log(name, value)
    } else {
      setInpData({ ...inpData, JobType: value });
    }
  }

  useEffect(() => {
    dispatch(addJobs(inpData))
  }, [inpData])

  // console.log("inpdata", inpData);

  return <div className="flex flex-col gap-2">
    <div className='flex flex-row gap-2 items-center'>
      <Checkbox {...label} id="JobTitle" onChange={handleCheckBox} defaultChecked />
      <TextField id="outlined-basic" name="JobTitle" label="Job Post Title" variant="outlined" onChange={handleChange} />
      <p>Active ?</p>
      <Switch defaultChecked inputProps={{ 'aria-label': 'controlled' }}
        onChange={handleSwitch} />
    </div>
    <div className='flex flex-row gap-2'>
      <div>
        <Checkbox {...label} id="Introduction" onChange={handleCheckBox} defaultChecked />
      </div>
      <div>
        <p className="underline my-1">Introduction</p>
        <TextField id="outlined-basic" label="The ideal candidate is someone ..." variant="outlined"
          name="Introduction" onChange={handleChange} />
      </div>
    </div>
    <div className='flex flex-row gap-2'>
      <div>
        <Checkbox {...label} id="Roles" onChange={handleCheckBox} defaultChecked />
      </div>
      <div>
        <p className="underline my-1">Roles and Resposibilities</p>
        <TextField id="outlined-basic" label="Your job role will include ..." variant="outlined"
          name="Roles" onChange={handleChange} />
      </div>
    </div>
    <div className='flex flex-row gap-2 items-center'>
      <Checkbox {...label} id="Experience" onChange={handleCheckBox} defaultChecked />
      <p>Experience Range</p>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-label">Min</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          label="Age"
          name="min"
          onChange={handleSelect}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-label">Max</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          label="Age"
          name="max"
          onChange={handleSelect}
        >
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox id="Qualifications" {...label} onChange={handleCheckBox} defaultChecked />
      <TextField id="outlined-basic" label="Qualifications" name="Qualifications" variant="outlined" onChange={handleChange} />
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox id="SalaryRange" {...label} onChange={handleCheckBox} />
      <TextField id="outlined-basic" label="Salary range" variant="outlined"
        name="SalaryRange" onChange={handleChange} />
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox id="CallToAction" {...label} onChange={handleCheckBox} defaultChecked />
      <TextField id="outlined-basic" label="Call to Action Concluding Statement.
    Ex. You will be involved with creating various exciting features such as
    chat,real time collaboration, interaction with IOT devices etc. to name a
    few. If you are interested let's get talking" variant="outlined"
        name="CallToAction"
        onChange={handleChange} />
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox id="Company" {...label} onChange={handleCheckBox} defaultChecked/>
      <TextField id="outlined-basic" label="Company" variant="outlined" name="Company" onChange={handleChange} />
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox id="JobLocation" {...label} onChange={handleCheckBox} defaultChecked/>
      <TextField id="outlined-basic" label="Job Location (Map Search)" variant="outlined"
        name="JobLocation"
        onChange={handleChange} />
    </div>
    <div className="flex flex-row gap-2 items-center">
      <Checkbox id="JobType" {...label} onChange={handleCheckBox} defaultChecked/>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-label">Full Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          label="Full Time"
          name="JobType"
          onChange={handleSelect}
        >
          <MenuItem value={"Part Time"}>Part Time</MenuItem>
          <MenuItem value={"Contract"}>Contract</MenuItem>
          <MenuItem value={"Internship"}>Internship</MenuItem>
        </Select>
      </FormControl>
      <Checkbox id="Labels" {...label} onChange={handleCheckBox} />
      <Multiselect
        options={options}
        selectedValues={''}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
        className='my-2'
      />

    </div>
  </div>
}