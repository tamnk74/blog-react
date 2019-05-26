import * as alertConstants from '../constants'

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(error) {
    return { type: alertConstants.ERROR, error };
}

function clear() {
    return { type: alertConstants.CLEAR };
}