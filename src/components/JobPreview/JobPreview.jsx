import { useSelector } from "react-redux"

export const JobPreview = () => {
    const jobs = useSelector((store) => store.jobs)
    console.log("jobs", jobs)
    return <div className="flex flex-col gap-9 mx-9">
        {jobs.JobTitle.marked ? <h2>Title: {jobs.JobTitle.data}</h2> : ""}
        {jobs.Introduction.marked ? <p>Introduction: {jobs.Introduction.data}</p> : ""}
        {jobs.Roles.marked ? <p>Roles and Responsibilities: {jobs.Roles.data}</p> : ""}
        {jobs.Experience.marked ? <p>Experience: {(jobs.Experience.data.min)+" to "+ (jobs.Experience.data.max)} years</p> : ""}
        {jobs.Qualifications.marked ? <p>Qualification: {jobs.Qualifications.data}</p> : ""}
        {jobs.SalaryRange.marked ? <p>Salary Range: {jobs.SalaryRange.data}</p> : ""}
        {jobs.CallToAction.marked ? <p>Concluding Statement: {jobs.CallToAction.data}</p> : ""}
        {jobs.Company.marked ? <p>Company: {jobs.Company.data}</p> : ""}
        {jobs.JobLocation.marked ? <p>Location: {jobs.JobLocation.data}</p> : ""}
        {jobs.JobType.marked ? <p>Job Type: {jobs.JobType.data}</p> : ""}
        {jobs.Labels.marked ? <p>Labels: {jobs.Labels.data.map((el)=>(el.name)+" ")}</p> : ""}
        {jobs.Active.marked ? <p>Active :{jobs.Active ? "Yes" : "No"}</p> : ""}
    </div>
}