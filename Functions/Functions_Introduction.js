//  Limit Params - BAD
function getUsersFullName(first, middle, last, nickName) {
    return `${first} ${middle} ${last} - AKA: ${nickName}`
}

//  Limit Params - GOOD
function getUsersFullName(userName) {
    return `${userName.first} ${userName.middle} ${userName.last} - AKA: ${userName.nickName}`
}
