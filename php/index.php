<?php
header('Access-Control-Allow-origin: *');//permet à tous les sites d'accéder à notre page .php


$phrase = (isset($_POST['phrase'])) ? $_POST['phrase'] : 'anonyme';
//si la $phrase existe via post donc elle est égale à 'phrase' sinon elle est anonyme
$resultat = "Bonne lecture et revenez vite!!";
$tableau = ['phrase' => $phrase, 'resultat'=> $resultat ];
echo json_encode($tableau);