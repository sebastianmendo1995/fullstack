export const fetchActivities = () => (
    $.ajax({
        method: 'GET',
        url: '/api/activities'
    })
)

export const fetchActivity = activityId => (
    $.ajax({
        method: 'GET',
        url: `/api/activities/${activityId}`
    })
)