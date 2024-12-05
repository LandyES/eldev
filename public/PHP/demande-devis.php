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
    require_once(__DIR__ . '/../../vendor/autoload.php');

    // Charger les variables d'environnement depuis le fichier .env
    use Dotenv\Dotenv;
    $dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
    $dotenv->load();

    // Accéder à une variable d'environnement
    $apikey = $_ENV['eldevapikey']; 

    $nomDevis = htmlspecialchars($_POST['nom-devis']);
    $prenomDevis = htmlspecialchars($_POST['prenom-devis']);
    $emailDevis = htmlspecialchars($_POST['email-devis']);
    $telDevis = htmlspecialchars($_POST['tel-devis']);
    $lienDevis = htmlspecialchars($_POST['lien-devis']);
    $messageDevis = htmlspecialchars($_POST['message-devis']);
    $nomsDevis= "$nomDevis $prenomDevis";

    // Configure API key authorization: api-key
    $config = Brevo\Client\Configuration::getDefaultConfiguration()->setApiKey('api-key', $apikey);

    $apiInstance = new Brevo\Client\Api\TransactionalEmailsApi(
        new GuzzleHttp\Client(),
        $config
    );
    $object = "Demande de devis";
    $mail = "contact@elminadev.fr";

    $bodymail= "<!DOCTYPE html>
                <html>
                    <head>
                        <meta charset='utf-8'>
                        <meta name='viewport' content='width=device-width, initial-scale=1'>

                        <!-- BOOTSTRAP V 5.3 -->
                        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>
                        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>

                        <!-- CSS -->
                        <link rel='stylesheet' type='text/css' href='https://elminadev.fr/E-mail/email-structure.css'>
                        <title>Email Structure</title>
                    </head>
                    <body>
                        <header>
                            <p>
                                <span><span style='font-weight: bold;'>Objet:</span>Demande de devis</span><br>
                                <span><span style='font-weight:bold;'>De:</span> $emailDevis</span><br>
                                <span><span style='text-transform: uppercase; font-weight: bold;'>à</span>: contact@elminadev.fr</span>
                            </p>
                        </header>
                        <main class='mt-5'>
                            <div class='bg-img'>
                                <img src='https://elminadev.fr/E-mail/Color logo with background.png'>
                            </div>
                            <div class='mt-5'>
                                <p>$messageDevis</p>
                                <p class='mt-5'>
                                    <span>$nomDevis</span>
                                    <span>$prenomDevis,</span><br>
                                    <span>$telDevis</span><br>
                                    <span>$emailDevis</span>   
                                </p>
                            </div>
                        </main>
                        <footer>
                            <p class='mt-5'>
                                <span style='font-weight: bold; font-size: 18px;'>Contactez-moi :</span><br>
                                <span><span style='font-weight: bold;'>- Par téléphone:</span> +33 7 83 06 56 32</span><br>
                                <span><span style='font-weight: bold;'>- Par e-mail:</span> contact@elminadev.fr</span>
                            </p>
                            <div class='bg-footer'>
                                <a href='https://www.linkedin.com/in/elmina-landy-estimable-68614b236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'>
                                    <img class='linkedin' src='https://elminadev.fr/E-mail/linkedin-text-white.png' alt='linkedin'>
                                </a>
                                <a href='https://www.instagram.com/eldevweb?igsh=czJzbWd5b2F4MDlo' target='blank'>
                                    <img class='insta' src='https://elminadev.fr/E-mail/instagram.png' alt='instagram'>
                                </a>
                            </div>       
                        </footer>    
                    </body>
                </html> ";

    $sendSmtpEmail = new \Brevo\Client\Model\SendSmtpEmail([
         'subject' => $object,
         'sender' => ['name' => $nomsDevis, 'email' => 'contact@elminadev.fr'],
         'to' => [[ 'email' => $mailDevis]],
         //'htmlContent' => '<html><body><h2> {{params.bodyMessage}}</h2></body></html>',
         'htmlContent' => $bodymail,
         //'params' => ['bodyMessage' => $bodymail]
    ]); 

    try {
        $result = $apiInstance->sendTransacEmail($sendSmtpEmail);
        print_r($result);
    } catch (Exception $e) {
        echo 'Exception when calling TransactionalEmailsApi->sendTransacEmail: ', $e->getMessage(), PHP_EOL;
    }

    header('Location: ../index.html?emailSend=1');
?>
<script type="text/javascript" src="JS/web.js"></script>