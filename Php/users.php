<?php

require_once 'index.php';

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    $result = mysqli_query($conn, 'SELECT * FROM users');
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
      $items[] = $row;
    }
    sendResponse(200, $items);
    break;

  case 'POST':
    $data = json_decode(file_get_contents('php://input'), true);
    $name = mysqli_real_escape_string($conn, $data['name']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $number = mysqli_real_escape_string($conn, $data['number']);
    $result = mysqli_query($conn, "INSERT INTO `users` (`name`, `email`, `mobile`) VALUES ('$name', '$email', '$number')");
    if ($result) {
      sendResponse(201, array('name' => $name,'email' => $email, 'mobile' => $number));
    } else {
      sendResponse(500, array('message' => 'Failed to create item.'));
    }
    break;

  case 'PUT':
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    $name = mysqli_real_escape_string($conn, $data['name']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $mobile = mysqli_real_escape_string($conn, $data['mobile']);
    $result = mysqli_query($conn, "UPDATE users SET name='$name', email='$email', mobile='$mobile', updated_at=NOW() WHERE id=$id");
    if ($result) {
      sendResponse(200, array('id' => $id, 'name' => $name, 'email' =>$email, 'mobile' => $mobile));
    } else {
      sendResponse(500, array('message' => 'Failed to update item.'));
    }
    break;

  case 'DELETE':
    $id = $_GET['id'];
    $result = mysqli_query($conn, "DELETE FROM users WHERE id=$id");
    if ($result) {
      sendResponse(
      200, array('id' => $id));
    } else {
      sendResponse(500, array('message' => 'Failed to delete item.'));
    }
    break;
}
