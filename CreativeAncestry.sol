pragma solidity ^0.4.19;
contract Threads {

  struct IdeaStruct {
    uint ideaID;
    string ideaText;
    address ideaOwner;
    string ownerName;
    uint ideaTime;
    uint ideaVotes;
    bool isIdea;
    bool isAgreed;
  }

  struct CommentStruct {
    uint ideaID;
    uint commentID;
    string commentText;
    address commentOwner;
    string ownerName;
    uint commentTime;
    uint commentVotes;
    bool isComment;
    bool isAgreed;
  }

  mapping(uint => IdeaStruct) public ideaStructs;
  mapping(uint => CommentStruct) public commentStructs;

  event NewIdea(uint indexed _ideaID, string _ideaText, address _ideaOwner, string ownerName, uint _ideaTime, uint _ideaVotes, bool _isIdea, bool _isAgreed);
event NewComment(uint indexed _ideaID, uint indexed _commentID, string _commentText, address _commentOwner, string ownerName, uint _commentTime, uint _commentVotes, bool _isComment, bool _isAgreed);

  uint[] public ideaList;
  uint[] public commentList;

  function isIdea(uint ideaID) public constant returns(bool isIndeed) {
      return ideaStructs[ideaID].isIdea;
  }
  
  function ideaVoteCount (uint ideaID) public constant returns(uint voteCount){
      return ideaStructs[ideaID].ideaVotes;
  }
  
  function isIdeaAgreed(uint ideaID) public constant returns(bool isIndeedAgreed) {
      return ideaStructs[ideaID].isAgreed;
  }

  function isComment(uint commentID) public constant returns(bool isIndeed) {
      return commentStructs[commentID].isComment;
  }
  
  function commentVoteCount (uint commentID) public constant returns(uint voteCount){
      return commentStructs[commentID].commentVotes;
  }
  
  function isCommentAgreed(uint commentID) public constant returns(bool isIndeedAgreed) {
      return commentStructs[commentID].isAgreed;
  }

  function getIdeaCount() public constant returns(uint ideaCount) {
    return ideaList.length;
  }

  function getCommentCount() public constant returns(uint commentCount) {
    return commentList.length;
  }

  function newIdea(string ideaText, string ownerName) public returns(uint rowNumber) {
    uint IdeaCount = ideaList.length;
    uint ID = IdeaCount + 1;
    require (!isIdea(ID));
    ideaStructs[ID].ideaID = ID;
    ideaStructs[ID].ideaText = ideaText;
    ideaStructs[ID].ideaOwner = msg.sender;
    ideaStructs[ID].ownerName = ownerName;
    ideaStructs[ID].ideaTime = now;
    ideaStructs[ID].ideaVotes = 0;
    ideaStructs[ID].isIdea = true;
    ideaStructs[ID].isAgreed = false;
    NewIdea(ID, ideaText, msg.sender, ownerName, now, 0, true, false);
    return ideaList.push(ID) - 1;
  }

  function newComment(uint ideaID, string commentText, string ownerName) public returns(uint rowNumber) {
    uint CommentCount = commentList.length;
    uint ID = CommentCount + 1;
    require (!isComment(ID));
    commentStructs[ID].ideaID = ideaID;
    commentStructs[ID].commentID = ID;
    commentStructs[ID].commentText = commentText;
    commentStructs[ID].commentOwner = msg.sender;
    commentStructs[ID].ownerName = ownerName;
    commentStructs[ID].commentTime = now;
    commentStructs[ID].commentVotes = 0;
    commentStructs[ID].isComment = true;
    commentStructs[ID].isAgreed = false;
    NewComment(ideaID,ID, commentText, msg.sender, ownerName, now, 0, true, false);
    return commentList.push(ID) - 1;
  }

  function updateIdeaVotes(uint ideaID) public returns(bool success) {
    require (isIdea(ideaID));
    require (!isIdeaAgreed(ideaID));
    if (ideaVoteCount(ideaID) == 4){
    ideaStructs[ideaID].ideaVotes ++;
    ideaStructs[ideaID].isAgreed = true;
    }
    else{
    ideaStructs[ideaID].ideaVotes ++;
    return true;
  }
  }

  function updateCommentVotes(uint commentID) public returns(bool success) {
    require(isComment(commentID));
    require (!isCommentAgreed(commentID));
    if (commentVoteCount(commentID) == 4){
        commentStructs[commentID].commentVotes ++;
        commentStructs[commentID].isAgreed = true;
    }
    else{
    commentStructs[commentID].commentVotes ++;
    return true;
  }
  }

}