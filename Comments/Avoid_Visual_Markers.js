/****************************
 * DEPENDENCIES
 ***************************/

/////////////////////////
// USER CLASS
/////////////////////////
class User {
/////////////////////////
// PROPERTIES
/////////////////////////
    firstName;
    middleName;
    lastName;
}

/****************************
 * ADMIN CLASS
 ***************************/
class AdminUser extends User {
    constructor(){}
}


///////////////////////////////////////
///////////////////////////////////////

//GOOD CODE


//Move to File1 as User
class User {

    firstName;
    middleName;
    lastName;
}

//Move to File2 as Admin
class AdminUser extends User {
    constructor(){}
}
