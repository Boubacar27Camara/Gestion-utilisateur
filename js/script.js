const users = [
                { 
                id: 1,
                nom:'Jean',
                prenom: 'Pierre', 
                age: 25
                }];
const validateButton = document.getElementById('valider') // on a recuperer notre boutton qui se trouve dans doc html

validateButton.addEventListener('click', addUser); // utilisateur va cliker .detecter l'evenement clicker sur button,2e parame il faut specifier la function qui va etre appeller lorsque l'utilisateur click sur le bouton
showAllUser();
updateOrDeleteUser();
//  une arrau function const addUser = () =>{};
function updateOrDeleteUser(){
    const deleteButtons = document.querySelector('.Supprimer'); // va recuperer toutes les boutons de chaque class.
    const editButtons = document.querySelector('.Modifier');

    deleteButtons.forEach((button) => 
        button.addEventListener('click', () => deleteUser)); // dans la devainte listener
}
editButtons.forEach((button) => 
     button.addEventListener('click', () => editUser));  

//Fonctionnalites
function addUser(e){
    e.preventDefault();
    const enterdUsersData = {
    id: users.length !== 0 ? users[users.length - 1].id + 1 : 1,
    nom: document.getElementById('nom').value,
    prenom: document.getElementById('prenom').value,
    age: document.getElementById('age').value,
};
if(enterdUsersData.nom !== '' && 
   enterdUsersData.prenom !== '' && 
   enterdUsersData.age !== ''
   )
   {
    users.push(enterdUsersData); // ajouter un utilisateur
    showAllUser();
   }
}

function showAllUser() {
    document.getElementById('allUsers').innerHTML = ''; // innerHTML pour recuperer le code html de cette div. // reinitialser de contenu de la div a fin de lui attribuer des nouvelles valeurs.
    users.forEach((user) =>{
        const newInputs = {
            Nom: document.createElement('input'),
            Prenom: document.createElement('input'),
            Age: document.createElement('input'),
        };
        const newDiv = document.createElement('div');
        const newButtons = {
            Supprimer: document.createElement('input'),
            Modifier: document.createElement('input'),
        };

        for(const [key, value] of Object.entries(newInputs)){
           value.setAttribute('type', 'text');
           value.setAttribute('id', '${key}OfUser${user.id}');

           key == 'Nom' && value.setAttribute('value', user.nom);
           key == 'Prenom' && value.setAttribute('value', user.prenom);
           key == 'Age' && value.setAttribute('value', user.age);

           newDiv.appendChild(value); // ajouter un nouvel enfant.
           document.getElementById('allUsers').appendChild(newDiv);

        }
        for(const [key, value] of Object.entries(newButtons)){
            value.setAttribute('type', 'button');
            value.setAttribute('class', key);
            value.setAttribute('id', user.id);
            value.setAttribute('value', key);
            newDiv.appendChild(value);
        }

    });
    // updateOrDeleteUser();
}
function deleteUser(id){
    // on va parcourir userforeach pour chaque element de notre table users 
    //on va passer en parametre user chaque utilisateur . c'est de creer une 
    //variable que vous allez appeler userPositonInArray qui va nous permettent de recuperer la position l'utilisateur
    // dans son tableau pour ensite supprimer l'utiliateur qui possede cette position la 
    users.forEach((user) =>{ 
        const userPositionInArray = users.indexOf(user); // position l'utilisateur 
        user.id === parseInt(id) && users.splice(userPositionInArray, 1)  // splice c'est supprimer
    });
    showAllUser();
}
function editUser(id){
    const newInputs = {
        nom: document.getElementById('NomOfUser${id}').value,
        prenom: document.getElementById('PrenomOfUser${id}').value,
        age: document.getElementById('AgeOfUser${id}').value,
        
    };
    users.forEach((user) => {
     if(user.id === parseInt(id)){
        user.nom = newInputs.nom; // nom le nom qui a ete saisie par l'utiliateur
        user.prenom = newInputs.prenom;
        user.age = newInputs.age;
     }       
    });
    console.log(users);
}
