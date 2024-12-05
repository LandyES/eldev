<?php
require_once(__DIR__ . '/vendor/autoload.php'); // Chargez Composer

use Sendinblue\Client\Configuration;
use Sendinblue\Client\Api\TransactionalEmailsApi;
use Sendinblue\Client\Model\SendSmtpEmail;

// Configurez votre clé API
$config = Configuration::getDefaultConfiguration()->setApiKey('api-key', '');

// Créez une instance de l'API des emails transactionnels
$apiInstance = new TransactionalEmailsApi(
    new GuzzleHttp\Client(),
    $config
);

// Données du formulaire
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['email'];
$message = $_POST['message'];

// Configurez l'email à envoyer
$sendSmtpEmail = new SendSmtpEmail([
    'to' => [
        ['email' => 'destination@example.com', 'name' => 'Destinataire']
    ],
    'sender' => ['email' => $email, 'name' => $prenom . ' ' . $nom],
    'subject' => 'Nouveau message de contact',
    'htmlContent' => "<html><body><p>{$message}</p></body></html>"
]);

try {
    $result = $apiInstance->sendTransacEmail($sendSmtpEmail);
    print_r($result);
    echo 'Email envoyé avec succès!';
} catch (Exception $e) {
    echo 'Exception lors de l\'envoi de l\'email: ', $e->getMessage(), PHP_EOL;
}
?>
