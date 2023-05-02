<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

$host = "localhost";
$user = "root";
$password = "";
$database = "react-crud";

$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
  die('Connection failed: ' . mysqli_connect_error());
}

function sendResponse($status, $body = '')
{
  http_response_code($status);
  header('Content-Type: application/json');
  echo json_encode($body);
}