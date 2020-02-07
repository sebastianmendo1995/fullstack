// export const fetchSpaces = ( { page, bounds, maxCapacity, maxPrice} ) => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/spaces?page=${page}&bounds=${bounds}&maxCapacity=${maxCapacity}&maxPrice=${maxPrice}`
//     })
// )

export const fetchSpaces = data => (
    $.ajax({
        method: 'GET',
        url: `/api/spaces`,
        data
    })
)

export const fetchSpace = spaceId => (
    $.ajax({
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
        data: space
    })
)

export const deleteSpace = spaceId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/spaces/${spaceId}`
    })
)