
import './App.css'
import { JobInput } from './components/JobInput/JobInput'
import { Navigator } from './components/Navigator/Navigator'
import { DeleteDuplicate } from "./components/DeleteDuplicate/DeleteDuplicate";
import { JobPreview } from './components/JobPreview/JobPreview';

function App() {

  return (
    <div>
      <p className="text-3xl font-bold underline text-center my-9">Job Post Manager</p>
      <div className="flex">
        <Navigator />
        <JobInput />
        <DeleteDuplicate />
        <JobPreview/>
      </div>
    </div>
  )
}

export default App
