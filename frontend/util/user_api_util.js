export const updateUser = (userId, userForm) => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'PATCH',
        data: userForm,
        contentType: false,
        processData: false
    })
)