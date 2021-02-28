const pinterest = require("pinterest-node-api");
const pinterestCredentials = require("../../CREDENTIALS/pinterest.json");
async function robot() {
  /*Search user's boards*/
  /* Search the logged in user's Boards */

  pinterest.setUserToken(pinterestCredentials.userToken);
  var data = {
    query: "board 1",
    fields: "counts,id,name,url",
  };
  try {
    var response = pinterest.users.searchUserBoards(data);
  } catch (error) {
    return;
  }
  /*-------------------------------------------------------------------------------------
Search user's pins*/
  /* Search the logged in user's Pins */

  pinterest.setUserToken(userToken);
  var data = {
    query: "test",
    fields: "id,board,link,note,url",
  };
  try {
    var response = pinterest.users.searchUserPins(data);
  } catch (error) {
    return;
  }
}

module.exports = robot;
