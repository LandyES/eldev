<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nom = strip_tags(trim($_POST["nom"]));
    $prenom = strip_tags(trim($_POST["prenom"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telephone = strip_tags(trim($_POST["telephone"]));
    $objet = trim($_POST["objet"]);
    $message = trim($_POST["message"]);

    // Vérification des champs obligatoires
    if (empty($nom) || empty($prenom) || empty($email) || empty($objet) || empty($message)) {
        echo "Tous les champs sont obligatoires.";
        exit;
    }

    // Destinataire de l'e-mail (remplacez par votre adresse e-mail)
    $to = $email;
    $subject = "Formulaire de contact";
    
    // Contenu de l'e-mail
    $email_content = "Nom: $nom\n";
    $email_content .= "Prénom: $prenom\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone: $telephone\n\n";
    $email_content .= "Objet:\n$objet\n";
    $email_content .= "Message:\n$message\n";

    // En-têtes de l'e-mail
    $email_headers = "From: $nom $prenom <$email>";

    // Envoi de l'e-mail
    if (mail($to, $subject, $email_content, $email_headers)) {
        // Succès
        echo "Votre demande a bien été envoyé.";
    } else {
        // Erreur
        echo "Oops! Une erreur s'est produite et votre demande n'a pas pu être envoyé.";
    }
} else {
    // Si ce n'est pas une requête POST, affiche une erreur
    echo "Il y a eu un problème avec votre soumission, veuillez réessayer.";
}
?>
