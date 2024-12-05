<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- GOOGLE TAG ANALYTICS -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PPT9Y8JR6Z"></script>

    <title></title>
</head>                     

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $tel = htmlspecialchars($_POST['tel']);
    $message = htmlspecialchars($_POST['message']);

    $to = "contact@eldev.fr";
    $subject = "Nouveau message de $prenom $nom";
    $body = "Nom: $nom\nPrénom: $prenom\nEmail: $email\nTéléphone: $tel\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Une erreur est survenue, veuillez réessayer.";
    }
}
?>

<script type="text/javascript" src="JS/web.js"></script>