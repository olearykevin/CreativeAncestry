<?php   session_start();  ?>
<html>
  <head>
       <title>Group Collaboration</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
  <link href="./app.css" rel='stylesheet' type='text/css'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <!-- <script src="./Home.js"></script>  -->
  </head>
  <body id="body">
<?php
      if(!isset($_SESSION['use'])) // If session is not set then redirect to Login Page
       {
           header("Location:Login.php");  
       }
?>

<br/>

<div class="table threadOptions" id="threadButtonsDiv"> 
<h4>Welcome <?php echo $_SESSION['use'];?></h4>
<button onclick="location.href='logout.php'"  class="btn btn-primary">Logout</button><br/>
<h4>Check Thread Results Below:</h4>
</div> 
<div class="table result" id="result">
  <img style="float: left" src="./PNGPIX-COM-State-Street-Logo-PNG-Transparent-1-500x177.png"/>
  <img style="float: right"  src="./CUBS_Logo_Col.jpg"/>
</div>

<div class="table content" id="displayThreadDiv"> 
  <h1>Thread Results</h1>
    <table class="table table-bordered" id="threadTable">
      <thead>
        <tr>
          <th>Thread ID</th>
          <th>Thread Description</th>
          <th>Creator</th>
          <th>Time Posted</th>
         <!--  <th>Likes</th> -->
        </tr>
      </thead>
      <tbody>
        <tr id="ideaRow">
          <td id="ideaID"></td>
          <td id="ideaText"></td>
          <td id="ideaOwner"></td>
          <td id="ideaTime"></td>
         <!--  <td id="ideaVotes"></td> -->
        </tr>
      </tbody>
    </table>
    </div> 
    <br>
    <div class="table content" id="displayCommentDiv"> 

    </div> 
</body>
<script src="./Results.js"></script> 
<script src="https://cdn.rawgit.com/ethereum/web3.js/develop/dist/web3.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>

</html>