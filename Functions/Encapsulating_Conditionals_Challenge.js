// Clean Code: Encapsulating Conditionals Challenge

function getLoadingState(state) {
    if(userLoadingFinishedSuccessfully(state)) {
        return 'Finished Loading';
    }
    
    if(userLoadingSuccessfully(state)) {
        return 'Loading...';
    }
    
    return 'Error occured';
}

function userLoadingFinishedSuccessfully(state) {
    return !!state.user && state.loading === false && state.hasError === false;
}

function userLoadingSuccessfully(state) {
    return state.user === null && state.loading  === true && state.hasError === false;
}