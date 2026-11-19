// Proper Spacing and Returns
// https://eslint.org/docs/rules/padding-line-between-statements
// function addUser(user) {
//     const userData = {...user, type: 'Admin'};
//     if(userData){}
//     return userData;
// }
// // Standardization of Naming
// function retrieveAdminById(id) {
//     //  gets admin
// }
// function getUserById(id) {
//     switch (id) {
//     case 1:
//         addUser(1);
//         break;
//     case 2:
//     case 3:
//         addUser(2);
//         break;
//     default:
//         addUser(3);
//     }
// }


function addUser(user) {
    const userData = {...user, type: 'Admin'};

    if(userData) {

    }

    return userData;
}

function retrieveAdminById(id) {

}

function getUserById(id) {
    switch (id) {
    case 1:
        addUser(1);
        break;

    case 2:
    case 3:
        addUser(2);
        break;

    default:
        addUser(3);
    }
}