import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import ActivityReducer from "./activity_reducer";
import SpaceReducer from "./space_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    spaces: SpaceReducer,
    activities: ActivityReducer
});

export default entitiesReducer;