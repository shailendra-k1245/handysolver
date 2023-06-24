import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

const initState = {
    jobs: {
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
    }
}

export const store = createStore(reducer, initState);