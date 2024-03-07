//Villa, Charles Henrico
//UV2L
import {v4 as uuidv4} from 'uuid';
import {default as validator} from 'validator/validator.js';
import { openSync, closeSync, appendFileSync } from 'node:fs';

function generateUnique(fname, lname){
  let lfname = fname.toLowerCase();
  let llname = lname.toLowerCase();
  var name = "";
  const uuid = uuidv4().substring(0,8);
  name= lfname[0] + llname + uuid;     
  return name;
}

let fname = "Alan";
let lname = "Turing";    

function addAccount(array){
  let length = array.length;
  const email = array[2];

  if (length != 4) {
    return false
  }

  if (!(array[0] && array[1] && array[2] != "")){
    return false
  }

  if (array[3] < 18){
    return false
  }

  return validator.isEmail(email)
}

var array =["Alan", "Turing", "aturing@w3c.com", 58]

var id = generateUnique(fname,lname);
var checker = addAccount(array);

if(checker == true){
  var text = array + "," +id +"\n";
  let fd;
  try {
    fd = openSync('users.txt', 'a');
    appendFileSync(fd, text);
  } catch (err) {
    console.log("Error")
  } finally {
    if (fd !== undefined)
      closeSync(fd);
  } 

}
