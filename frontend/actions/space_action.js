import * as SpaceAPIUtil from '../util/space_api_util';

export const RECEIVE_ALL_SPACES = 'RECEIVE_ALL_SPACES';
export const RECEIVE_SPACE = 'RECEIVE_SPACE';
export const REMOVE_SPACE = 'REMOVE_SPACE';


const receiveAllSpaces = spaces => ({
    type: RECEIVE_ALL_SPACES,
    spaces
})

const receiveSpace = space => ({
    type: RECEIVE_SPACE,
    space
})

const removeSpace = spaceId => ({
    type: REMOVE_SPACE,
    spaceId
})

export const fetchSpaces = () => dispatch => (
    SpaceAPIUtil.fetchSpaces().then(spaces => dispatch(receiveAllSpaces(spaces)))
)

export const fetchSpace = spaceId => dispatch => (
    SpaceAPIUtil.fetchSpace(spaceId).then(space => dispatch(receiveSpace(space)))
)

export const createSpace = space => dispatch => (
    SpaceAPIUtil.createSpace(space).then(space => dispatch(receiveSpace(space)))
)

export const updateSpace = space => dispatch => (
    SpaceAPIUtil.updateSpace(space).then(space => dispatch(receiveSpace(space)))
)

export const deleteSpace = spaceId => dispatch => (
    SpaceAPIUtil.deleteSpace(spaceId).then( dispatch(removeSpace(spaceId)))
)