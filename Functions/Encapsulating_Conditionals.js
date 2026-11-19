function getNonPrimaryUsers(user) {
    if(user.isActive === true && user.isPrimaryAccount === true) {
        return user.subMembers;
    } else {
        return new Error('User is not Primary Account Holder.');
    }
}

// If Conditions are greater than two make the conditons as functions 

function getNonPrimaryUsers1(user) {
    if(getIsPrimaryUserActiveAccount(user)) {
        return user.subMembers;
    } else {
        return new Error('User is not Primary Account Holder.');
    }
}

function getIsPrimaryUserActiveAccount(user) {
    const isPrimaryAccount = user.isPrimaryAccount === true;
    const isActive = user.isActive === true;

    return isActive && isPrimaryAccount;
}