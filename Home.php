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
<button onclick="location.href='logout.php'"  class="btn logout">Logout</button><br/>
<button onclick="viewResults()"  class="btn btn-primary">View Results</button><br/>
<button onclick="viewHighResults()"  class="btn btn-primary">View Highlighted Results</button><br/>
<h4 style="float: center">Browse Existing Threads Below:</h4>
</div> 
<div class="table result" id="result">
  <img style="float: left" src="./PNGPIX-COM-State-Street-Logo-PNG-Transparent-1-500x177.png"/>
  <img style="float: right"  src="./CUBS_Logo_Col.jpg"/>
</div>
<!--  <div class="table content" id="threadDiv"> 
  <h1>Add New Discussion Thread</h1>
    <table class="table-bordered">
      <thead>
        <tr>
          <th>Discussion Topic</th>
          <th>Submit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
           <td><input type="text" id="enterIdeaText" placeholder="Enter a Brief Description For This Thread" /></td> 
           <td><button onclick="addIdeas()" id="addIdeasBtn" class="btn btn-primary" value="<?php echo $_SESSION['use'];?>">Add Thread</button>   
          </td>
        </tr>
      </tbody>
    </table>
  </div>  -->
   
  <div class="table content" id="displayThreadDiv"> 
  <h1>Thread Details</h1>
 <!-- <div class="table-responsive" id="threadDiv">  -->
    <table class="table table-bordered" id="threadTable">
      <thead>
        <tr>
          <th>Thread ID</th>
          <th>Thread Description</th>
          <th>Creator</th>
          <th>Time Posted</th>
          <!-- <th>Likes</th> -->
          <!-- <th>Submit Your Vote</th> -->
          <th>Make a Recommendation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="ideaID"></td>
          <td id="ideaText"></td>
          <td id="ideaOwner"></td>
          <td id="ideaTime"></td>
          <!-- <td id="ideaVotes"></td> -->
          <!-- <td><button id="voteIdea" onclick="voteIdea()" class="btn btn-primary">Like</button></td> -->
              
          <td><button id="addComment" value="<?php echo $_SESSION['use'];?>" onclick="addComment()" class="btn btn-primary">Make Recommendation</button></td>
        </tr>
      </tbody>
    </table>
    </div> 
    <br>
    <div class="table content" id="displayCommentDiv"> 

    </div> 
</body>
<script src="./Home.js"></script> 
<script src="https://cdn.rawgit.com/ethereum/web3.js/develop/dist/web3.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>

</html>