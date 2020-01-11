export const fetchSpaces = () => (
    $.ajax({
        method: 'GET',
        url: '/api/spaces'
    })
)

export const fetchSpace = spaceId => (
    $ajax({
        method: 'GET',
        url: `/api/spaces/${spaceId}`
    })
)

export const createSpace = spaceForm => (
    $.ajax({
        method: 'POST',
        url: '/api/spaces',
        data: spaceForm,
        contentType: false,
        processData: false
    })
)

export const updateSpace = space => (
    $.ajax({
        method: 'PATCH',
        url: `/api/spaces/${space.id}`,
        data: { space },
        contentType: false,
        processData: false
    })
)

export const deleteSpace = spaceId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/spaces/${spaceId}`
    })
)