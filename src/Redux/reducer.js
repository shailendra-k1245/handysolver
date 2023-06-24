import { ADD_JOBS } from "./action";

export const reducer = (store, { type, payload }) => {
    switch (type) {
        case ADD_JOBS:
            return {...store,jobs:payload};
        default:
            return store;
    }
}