//Lydia Cheng - Take Home Problem for EveryAction Software Engineering Intern Position 3/11/2022
//
const { INSPECT_MAX_BYTES } = require('buffer');
var request = require('request');                                     //request data from v2/Broadcast Emails endpoint
var username = 'apiuser';
var password = 'xxxxxxxxxxxxxxxxxxxxxxx';
var options = {
  url: 'https://api.myngp.com/v2/BroadcastEmails',
  auth: {
    user: username,
    password: password
  }
};

request(options, function (err, res, body) {                          //function to request data from Broadcast Emails endpoint
  if (err) {                                                          //error exception
    console.dir(err);
    return;
  }
  var jsonData = JSON.parse(body);                                    //Read in data from endpoint into JSON Array
  for (let i = 0; i < jsonData.items.length; i++) {                   //Iterate through length of JSON Array
    var counter = jsonData.items[i];                                  //Initialize variable that gets value of an item at position i
    var apos = '\'';                                                  //Initialize variable to create apostrophes
    console.log(counter.emailMessageId, apos, counter.name, apos);    //Print value of emailMessageId and name with apostrophes
  }

console.log("Total:", jsonData.count, "emails");                    //Prints out total count of emails

});