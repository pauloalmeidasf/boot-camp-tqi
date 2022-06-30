const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id , displayName}){
    return `ID: ${id}. Usuário: ${displayName}`;
}

function getFullName({fullName: {firstName, lastName}}){
    return `${firstName} ${lastName}`;
}

console.log(userId(user));
console.log("Nome completo: " + getFullName(user));