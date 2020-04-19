var abi = JSON.parse('[ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "ideaStructs", "outputs": [ { "name": "ideaID", "type": "uint256" }, { "name": "ideaText", "type": "string" }, { "name": "ideaOwner", "type": "address" }, { "name": "ownerName", "type": "string" }, { "name": "ideaTime", "type": "uint256" }, { "name": "ideaVotes", "type": "uint256" }, { "name": "isIdea", "type": "bool" }, { "name": "isAgreed", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "commentStructs", "outputs": [ { "name": "ideaID", "type": "uint256" }, { "name": "commentID", "type": "uint256" }, { "name": "commentText", "type": "string" }, { "name": "commentOwner", "type": "address" }, { "name": "ownerName", "type": "string" }, { "name": "commentTime", "type": "uint256" }, { "name": "commentVotes", "type": "uint256" }, { "name": "isComment", "type": "bool" }, { "name": "isAgreed", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "ideaID", "type": "uint256" } ], "name": "isIdeaAgreed", "outputs": [ { "name": "isIndeedAgreed", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "ideaID", "type": "uint256" } ], "name": "isIdea", "outputs": [ { "name": "isIndeed", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "commentID", "type": "uint256" } ], "name": "isCommentAgreed", "outputs": [ { "name": "isIndeedAgreed", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "commentList", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "ideaID", "type": "uint256" } ], "name": "ideaVoteCount", "outputs": [ { "name": "voteCount", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "commentID", "type": "uint256" } ], "name": "commentVoteCount", "outputs": [ { "name": "voteCount", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "ideaList", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getIdeaCount", "outputs": [ { "name": "ideaCount", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getCommentCount", "outputs": [ { "name": "commentCount", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "commentID", "type": "uint256" } ], "name": "isComment", "outputs": [ { "name": "isIndeed", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_ideaID", "type": "uint256" }, { "indexed": true, "name": "_commentID", "type": "uint256" }, { "indexed": false, "name": "_commentText", "type": "string" }, { "indexed": false, "name": "_commentOwner", "type": "address" }, { "indexed": false, "name": "ownerName", "type": "string" }, { "indexed": false, "name": "_commentTime", "type": "uint256" }, { "indexed": false, "name": "_commentVotes", "type": "uint256" }, { "indexed": false, "name": "_isComment", "type": "bool" }, { "indexed": false, "name": "_isAgreed", "type": "bool" } ], "name": "NewComment", "type": "event" }, { "constant": false, "inputs": [ { "name": "ideaID", "type": "uint256" } ], "name": "updateIdeaVotes", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_ideaID", "type": "uint256" }, { "indexed": false, "name": "_ideaText", "type": "string" }, { "indexed": false, "name": "_ideaOwner", "type": "address" }, { "indexed": false, "name": "ownerName", "type": "string" }, { "indexed": false, "name": "_ideaTime", "type": "uint256" }, { "indexed": false, "name": "_ideaVotes", "type": "uint256" }, { "indexed": false, "name": "_isIdea", "type": "bool" }, { "indexed": false, "name": "_isAgreed", "type": "bool" } ], "name": "NewIdea", "type": "event" }, { "constant": false, "inputs": [ { "name": "ideaText", "type": "string" }, { "name": "ownerName", "type": "string" } ], "name": "newIdea", "outputs": [ { "name": "rowNumber", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "ideaID", "type": "uint256" }, { "name": "commentText", "type": "string" }, { "name": "ownerName", "type": "string" } ], "name": "newComment", "outputs": [ { "name": "rowNumber", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "commentID", "type": "uint256" } ], "name": "updateCommentVotes", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]')

MessageContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = MessageContract.at('0xb1ac77520aee6fb1c3f0b4e6335d34b058f0bae5');

var ideaCount;
var commentCount;
var tab, tr, td, td1, td2, td3, td4, td5, tn;
var ideatr, ideatd, ideatd1, ideatd2, ideatd3, ideatd4, ideatd5, ideatn;
var body = document.getElementById('body');

var commentTableHead = new Array();
    commentTableHead.push(["Comment ID:", "Comment:", "Contributor:", "Timestamp:", "Votes:"]);

var commentsTable = document.createElement('table'), th, tr, td, row, cell;
  commentsTable.style.width = '100%';
  commentsTable.setAttribute('border', '1');
  commentsTable.setAttribute("id", "commentsTable");
  commentsTable.setAttribute('class', 'table table-bordered');



function searchComments(_ideaID, callback) {
  displayCommentDiv = document.getElementById('displayCommentDiv');
  var cols = 5;

//Add the header row.
    var row = commentsTable.insertRow(-1);
    for (var i = 0; i < cols; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = commentTableHead[0][i];
        row.appendChild(headerCell);
    }

  for (var i = 0; i <= commentCount; i++) {
  //CommentID = $("#CommentID").val();
  showCommentIdeaID = document.getElementById('commentIdeaID');
  showCommentID = document.getElementById('commentID');
  showCommentText = document.getElementById('commentText');
  showCommentOwner = document.getElementById('commentOwner');
  showCommentTime = document.getElementById('commentTime');
  showCommentVotes = document.getElementById('commentVotes');

  contractInstance.commentStructs.call(i, function(error, result){
     if(!error){
        commentTime = timeConverter(result[5]);

        makeJSON(_ideaID, result, commentTime);
        }
     else{
         console.error(error);
       }
 });

}
 displayCommentDiv.appendChild(commentsTable);
 var commentRows = document.getElementById("commentsTable").rows.length;
}

function makeJSON(ideaID, _result, commentTime) { 
  var displayCommentDiv = document.getElementById('displayCommentDiv');
  var json;
  var t = document.createTextNode("Vote");

   json = {     "ideaID": _result[0].toLocaleString(), 
                "commentID": _result[1].toLocaleString(), 
                "commentText":_result[2], 
                "commentOwner":_result[4], 
                "commentTime": commentTime, 
                "commentVotes":_result[6].toLocaleString() };

    if(json.ideaID === ideaID) {
      //If result =5 then display, otherwise, no consensus was reached so
      //Might not display anything if 
      if (json.commentVotes >= 2) {
      tr = document.createElement('tr');
      td = document.createElement('td');
      td1 = document.createElement('td');
      td2 = document.createElement('td');
      td3 = document.createElement('td');
      td4 = document.createElement('td');
      td5 = document.createElement('td');

      
      tn = document.createTextNode(json.commentID);
      tn1 = document.createTextNode(json.commentText);
      tn2 = document.createTextNode(json.commentOwner);
      tn3 = document.createTextNode(json.commentTime);
      tn4 = document.createTextNode(json.commentVotes);

      td.appendChild(tn);
      td1.appendChild(tn1);
      td2.appendChild(tn2);
      td3.appendChild(tn3);
      td4.appendChild(tn4);

      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      commentsTable.appendChild(tr);
      $("commentsTable").addClass("table table-bordered");
    }  
    }                
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
  return time;
}

function displayIdeaCount() {
 contractInstance.getIdeaCount(function(error, result){
     if(!error){
         ideaCount = result.toLocaleString();
         console.log(ideaCount);
         showAllThreads();
       }
     else{
         console.error(error);
       }
 });
}

function displayCommentCount() {
 contractInstance.getCommentCount(function(error, result){
     if(!error){
         commentCount = result.toLocaleString();
         console.log(commentCount);
       }
     else{
         console.error(error);
       }
 });
}

function showAllThreads() {
  if (ideaCount >=1 ) {
  for (var counter = 1; counter <= ideaCount; counter++) {

  contractInstance.ideaStructs.call(counter, function(error, result){
     if(!error){
        ideaTitle = result[1];
        ideaID = result[0];

        makeButton(ideaTitle, ideaID);
        }
     else{
         console.error(error);
       }
 });

}
} else{
  return;
}

}

function makeButton(_ideaTitle, _ideaID) {  
  var btnThread = document.createElement("button");
  btnThread.type = "button";
  btnThread.className = "btn btn-primary";
  btnThread.innerHTML = _ideaTitle;
  btnThread.value = _ideaID;
  btnThread.addEventListener ("click", function() {

  showIdeaID = document.getElementById('ideaID');
  showIdeaText = document.getElementById('ideaText');
  showIdeaOwner = document.getElementById('ideaOwner');
  showIdeaTime = document.getElementById('ideaTime');
  //showIdeaVotes = document.getElementById('ideaVotes');

  contractInstance.ideaStructs.call(btnThread.value, function(error, result){
     if(!error){
        ideaTime = timeConverter(result[4]);

      showIdeaID.innerHTML = result[0];
      showIdeaText.innerHTML = result[1];
      showIdeaOwner.innerHTML = result[3];
      showIdeaTime.innerHTML = ideaTime;
     // showIdeaVotes.innerHTML = result[5];
        }
     else{
         console.error(error);
       }
         if (result[5] >= 2) {
  return;
}
else{
  body.removeChild(displayThreadDiv); 
  searchComments(btnThread.value);
}
 });

});
   
     threadButtonsDiv = document.getElementById('threadButtonsDiv'); 
     threadButtonsDiv.appendChild(btnThread);             
}

$(document).ready(function() {
  displayIdeaCount();
  displayCommentCount();

});