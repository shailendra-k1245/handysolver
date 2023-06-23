
import './App.css'
import { JobInput } from './components/JobInput/JobInput'
import { Navigator } from './components/Navigator/Navigator'
import { DeleteDuplicate } from "./components/DeleteDuplicate/DeleteDuplicate";

function App() {

  return (
    <div>
      <p className="text-3xl font-bold underline text-center my-9">Job Post Manager</p>
      <div className="flex">
        <Navigator />
        <JobInput />
        <DeleteDuplicate />
      </div>
    </div>
  )
}

export default App
