
// Initialisation d'EmailJS avec votre User ID
emailjs.init('send_mail'); // Remplacez par votre User ID EmailJS

// Fonction pour envoyer l'e-mail
function sendEmail(e) {
    e.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Collecte des données du formulaire
    let formData = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        objet: document.getElementById('objet').value,
        message: document.getElementById('message').value
    };

    // Envoi de l'e-mail via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
            console.log('E-mail envoyé avec succès!', response.status, response.text);
            alert('Votre demande a été envoyé avec succès!');
        }, function(error) {
            console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
            alert('Une erreur est survenue, veuillez réessayer plus tard.');
        });
}

// Ajoutez un écouteur d'événement pour le formulaire
document.getElementById('contact-form').addEventListener('submit', sendEmail);

