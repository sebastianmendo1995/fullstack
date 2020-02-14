import * as ActivityAPIUtil from '../util/activity_api_util';

export const RECEIVE_ALL_ACTIVITIES = 'RECEIVE_ALL_ACTIVITIES';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';

const receiveAllActivities = activities => ({
    type: RECEIVE_ALL_ACTIVITIES,
    activities
})

const receiveActivity = activity => ({
    type: RECEIVE_ACTIVITY,
    activity
})

export const fetchActivities = () => dispatch => (
    ActivityAPIUtil.fetchActivities().then(activities => dispatch(receiveAllActivities(activities)))
)

export const fetchActivity = activityId => dispatch => (
    ActivityAPIUtil.fetchActivity(activityId).then(activity => dispatch(receiveActivity(activity)))
)