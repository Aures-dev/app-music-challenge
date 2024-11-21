//stock les infos des utilisateurs dans la session storage
export function sendUser(params) {
    let currentUser = params;
    currentUser.isAuthenticated = true;
    sessionStorage.setItem('user', JSON.stringify(currentUser))
}
//récupère les infos de l'utilisateur
export function recupUser() {
    let receive = sessionStorage.getItem('user');
    return JSON.parse(receive)
}
//supprime les infos de l'utilisateur
export function deleteUser() {
    sessionStorage.removeItem('user')
}