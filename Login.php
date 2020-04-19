<?php  session_start(); ?>  

<?php

if(isset($_SESSION['USR_NAME']))   // Checking whether the session is already there or not if 
                              // true then header redirect it to the home page directly 
 {
    header("Location:Home.php"); 
 }

if(isset($_POST['login']))   // it checks whether the user clicked login button or not 
{
      $USR_NAME = $_POST['USR_NAME'];
  $USR_ADDR = $_POST['USR_ADDR'];

  if ($USR_NAME == "" || $USR_NAME == null || $USR_ADDR == "" || $USR_ADDR == null) {
    echo 'Please enter a username';
  }
  else{
     $servername = "trustap-2017.cisgxomlfj5o.eu-west-1.rds.amazonaws.com:3306";
  $username = "Trustap2017";
  $password = "trustap2017";
  $dbname = "Trustap2017";

  // Create connection
  $con = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($con->connect_error) {
      die("Connection failed: " . $con->connect_error);
  } 
  $sql = "Select * from EtherAddress WHERE Address = '$USR_ADDR'";
  $check = mysqli_fetch_array(mysqli_query($con,$sql));
      if(isset($check)){
      $secondSQL = "Select * from EtherAddress WHERE Address = '$USR_ADDR' and Pseudo = '$USR_NAME';";
       $secondCheck = mysqli_fetch_array(mysqli_query($con,$secondSQL));
            if(isset($secondCheck)){
                $_SESSION['use']=$USR_NAME;
                echo '<script type="text/javascript"> window.open("Home.php","_self");</script>';            //  On Successful Login redirects to home.php
           }else{       
                                       // is 1234 by default     
            echo 'Incorrect username';
              }
     }else{       
     $sql = "INSERT INTO EtherAddress (Address, Pseudo) 
     VALUES ('$USR_ADDR', '$USR_NAME')";
     if(mysqli_query($con,$sql)){
     echo 'successfully registered';
     }else{
     echo 'oops! Please try again!';
     }                             // is 1234 by default     
          $_SESSION['use']=$USR_NAME;
         echo '<script type="text/javascript"> window.open("Home.php","_self");</script>';            //  On Successful Login redirects to home.php
        }
}
}
 ?>
<html>
<head>

<title>Login Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
  <link href="./app.css" rel='stylesheet' type='text/css'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="./app.js"></script>

</head>

<body>

<form action="" method="post">

    <table width="200" border="0">
  <tr>
    <td>Ether Address:</td>
    <td> <input type="text" name="USR_ADDR" id="USR_ADDR"> </td>
  </tr>
  <tr>
    <td>Username:</td>
    <td><input type="text" name="USR_NAME" id="USR_NAME"></td>
  </tr>
  <tr>
    <td> <input type="submit" name="login" value="LOGIN"></td>
    <td></td>
  </tr>
</table>
</form>

</body>
<script src="https://cdn.rawgit.com/ethereum/web3.js/develop/dist/web3.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>
<script src="./Login.js"></script>
</html>