import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Multiselect from 'multiselect-react-dropdown';

export const JobInput = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const options = [{ name: 'Is Remote', id: 1 }, { name: '5 Day Week', id: 2 }]

  const onSelect = () => { }
  const onRemove = () => { }

  return <div className="flex flex-col gap-2">
    <div className='flex flex-row gap-2 items-center'>
      <Checkbox {...label} />
      <TextField id="outlined-basic" label="Job Post Title" variant="outlined" />
      <p>Active ?</p>
      <Switch defaultChecked inputProps={{ 'aria-label': 'controlled' }} />
    </div>
    <div className='flex flex-row gap-2'>
      <div>
        <Checkbox {...label} />
      </div>
      <div>
        <p className="underline my-1">Introduction</p>
        <TextField id="outlined-basic" label="The ideal candidate is someone ..." variant="outlined" />
      </div>
    </div>
    <div className='flex flex-row gap-2'>
      <div>
        <Checkbox {...label} />
      </div>
      <div>
        <p className="underline my-1">Roles and Resposibilities</p>
        <TextField id="outlined-basic" label="Your job role will include ..." variant="outlined" />
      </div>
    </div>
    <div className='flex flex-row gap-2 items-center'>
      <Checkbox {...label} />
      <p>Experience Range</p>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-label">Min</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          label="Age"
          onChange={''}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-label">Max</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          label="Age"
          onChange={''}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox {...label} />
      <TextField id="outlined-basic" label="Qualifications" variant="outlined" />
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox {...label} />
      <TextField id="outlined-basic" label="Salary range" variant="outlined" />
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox {...label} />
      <TextField id="outlined-basic" label="Call to Action Concluding Statement.
    Ex. You will be involved with creating various exciting features such as
    chat,real time collaboration, interaction with IOT devices etc. to name a
    few. If you are interested let's get talking" variant="outlined" />
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox {...label} />
      <TextField id="outlined-basic" label="Company" variant="outlined" />
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox {...label} />
      <TextField id="outlined-basic" label="Job Location (Map Search)" variant="outlined" />
    </div>
    <div className="flex flex-row gap-2">
      <Checkbox {...label} />
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-label">Full Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          label="Full Time"
          onChange={''}
        >
          <MenuItem value={10}>Part Time</MenuItem>
          <MenuItem value={20}>Contract</MenuItem>
          <MenuItem value={30}>Internship</MenuItem>
        </Select>
      </FormControl>
      <Checkbox {...label} />
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