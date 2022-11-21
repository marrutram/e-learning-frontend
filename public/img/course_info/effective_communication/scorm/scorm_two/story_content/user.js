function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LAmqkx21UD":
        Script1();
        break;
      case "5zNjSIqJzXn":
        Script2();
        break;
      case "5lsDp6vXIyh":
        Script3();
        break;
      case "6VijQwYfPld":
        Script4();
        break;
      case "5Z0zL45W7vS":
        Script5();
        break;
      case "5i9G8zsJ6S0":
        Script6();
        break;
      case "6cPxaJucbDE":
        Script7();
        break;
      case "6aelqhXy6gb":
        Script8();
        break;
      case "6Fv1QgAwqGC":
        Script9();
        break;
      case "664ot4aK6RE":
        Script10();
        break;
      case "5yUXOyoernE":
        Script11();
        break;
      case "6Dc9L1r6XlD":
        Script12();
        break;
      case "6rPi2AbIEUp":
        Script13();
        break;
      case "5bqkPrmrNgt":
        Script14();
        break;
      case "5tzfUqyPmgY":
        Script15();
        break;
      case "6LmSLF747Z8":
        Script16();
        break;
      case "5Y1tbkd5zcU":
        Script17();
        break;
      case "60k57sezZqE":
        Script18();
        break;
      case "6UQZZGQu0o7":
        Script19();
        break;
      case "5amje7YMtNM":
        Script20();
        break;
      case "68HSvZF2Qt4":
        Script21();
        break;
      case "686X9q7xg0B":
        Script22();
        break;
      case "6PN0JqbK7fC":
        Script23();
        break;
      case "68K5agEwmSn":
        Script24();
        break;
      case "5liBAaRLKBt":
        Script25();
        break;
      case "6r3mk4eBBKN":
        Script26();
        break;
      case "5WTwu1RjL5L":
        Script27();
        break;
      case "661SI4YoQD1":
        Script28();
        break;
      case "6qeHkMZ84cc":
        Script29();
        break;
      case "6mNsDbtPxmH":
        Script30();
        break;
      case "6qGySO45lZr":
        Script31();
        break;
      case "5fwZ7fzVjv9":
        Script32();
        break;
      case "6XFgGTFpUXv":
        Script33();
        break;
      case "6ZV23lL8lbt":
        Script34();
        break;
      case "6IRvL2Km4rG":
        Script35();
        break;
      case "5q09pC6zvX4":
        Script36();
        break;
      case "5jhPoQl403Y":
        Script37();
        break;
      case "5dXCTM3x8Sl":
        Script38();
        break;
      case "6Oj2Gydm8qI":
        Script39();
        break;
      case "5q3XDFTlGjh":
        Script40();
        break;
      case "66iMBp9nOHh":
        Script41();
        break;
      case "5mh1Yc8ZRvm":
        Script42();
        break;
      case "6GSZWpxnh56":
        Script43();
        break;
  }
}

function Script1()
{
   if (!window.alteredCaptions){
 var sheet = document.createElement('style');
 sheet.innerHTML = ".caption{margin-bottom:5% !important;}";
 document.body.appendChild(sheet);
 window.alteredCaptions = true;
 }
  /*
 This will insert a custom style for captions into a Storyline course_info.
 T make it work, it has to be executed by a trigger, that is on the master slide and gets fired at timeline start.
*/


/*First test if the style is already there from another slide */
var test = document.getElementById("MyStyle");

/* Add the style only if it is not there to avoid cluttering the DOM */
if(!test){
 var body = document.querySelector("body");
 /* create the element that will hold the style definition */
 var style = document.createElement('style');
 /* for older browsers it is necessary to give this type information */
 style.type = 'text/css';
 /* The new style element needs an ID so we can use it to test for its existance */
 style.id = 'MyStyle';

 /* The following is the style definition that will be applied */
 style.appendChild(document.createTextNode(".caption p { background: rgba(0,0,0,0.8); color: white; text-decoration: none; text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000; font-weight: normal; font-size: 16px; line-height: 20px; }"));
 /* finally append the element to the "body" of the document. */
 body.appendChild(style);
}
}

function Script2()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script3()
{
  document.exitFullscreen();
}

function Script4()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script5()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script6()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.025;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.play();


}

function Script7()
{
   if (!window.alteredCaptions){
 var sheet = document.createElement('style');
 sheet.innerHTML = ".caption{margin-bottom:5% !important;}";
 document.body.appendChild(sheet);
 window.alteredCaptions = true;
 }
  /*
 This will insert a custom style for captions into a Storyline course_info.
 T make it work, it has to be executed by a trigger, that is on the master slide and gets fired at timeline start.
*/


/*First test if the style is already there from another slide */
var test = document.getElementById("MyStyle");

/* Add the style only if it is not there to avoid cluttering the DOM */
if(!test){
 var body = document.querySelector("body");
 /* create the element that will hold the style definition */
 var style = document.createElement('style');
 /* for older browsers it is necessary to give this type information */
 style.type = 'text/css';
 /* The new style element needs an ID so we can use it to test for its existance */
 style.id = 'MyStyle';

 /* The following is the style definition that will be applied */
 style.appendChild(document.createTextNode(".caption p { background: rgba(0,0,0,0.8); color: white; text-decoration: none; text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000; font-weight: normal; font-size: 16px; line-height: 20px; }"));
 /* finally append the element to the "body" of the document. */
 body.appendChild(style);
}
}

function Script8()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.025;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.play();


}

function Script9()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script10()
{
  document.exitFullscreen();
}

function Script11()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script12()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script13()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.025;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.play();


}

function Script14()
{
   if (!window.alteredCaptions){
 var sheet = document.createElement('style');
 sheet.innerHTML = ".caption{margin-bottom:5% !important;}";
 document.body.appendChild(sheet);
 window.alteredCaptions = true;
 }
  /*
 This will insert a custom style for captions into a Storyline course_info.
 T make it work, it has to be executed by a trigger, that is on the master slide and gets fired at timeline start.
*/


/*First test if the style is already there from another slide */
var test = document.getElementById("MyStyle");

/* Add the style only if it is not there to avoid cluttering the DOM */
if(!test){
 var body = document.querySelector("body");
 /* create the element that will hold the style definition */
 var style = document.createElement('style');
 /* for older browsers it is necessary to give this type information */
 style.type = 'text/css';
 /* The new style element needs an ID so we can use it to test for its existance */
 style.id = 'MyStyle';

 /* The following is the style definition that will be applied */
 style.appendChild(document.createTextNode(".caption p { background: rgba(0,0,0,0.8); color: white; text-decoration: none; text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000; font-weight: normal; font-size: 16px; line-height: 20px; }"));
 /* finally append the element to the "body" of the document. */
 body.appendChild(style);
}
}

function Script15()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script16()
{
  document.exitFullscreen();
}

function Script17()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script18()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script19()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.025;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.play();


}

function Script20()
{
   if (!window.alteredCaptions){
 var sheet = document.createElement('style');
 sheet.innerHTML = ".caption{margin-bottom:5% !important;}";
 document.body.appendChild(sheet);
 window.alteredCaptions = true;
 }
  /*
 This will insert a custom style for captions into a Storyline course_info.
 T make it work, it has to be executed by a trigger, that is on the master slide and gets fired at timeline start.
*/


/*First test if the style is already there from another slide */
var test = document.getElementById("MyStyle");

/* Add the style only if it is not there to avoid cluttering the DOM */
if(!test){
 var body = document.querySelector("body");
 /* create the element that will hold the style definition */
 var style = document.createElement('style');
 /* for older browsers it is necessary to give this type information */
 style.type = 'text/css';
 /* The new style element needs an ID so we can use it to test for its existance */
 style.id = 'MyStyle';

 /* The following is the style definition that will be applied */
 style.appendChild(document.createTextNode(".caption p { background: rgba(0,0,0,0.8); color: white; text-decoration: none; text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000; font-weight: normal; font-size: 16px; line-height: 20px; }"));
 /* finally append the element to the "body" of the document. */
 body.appendChild(style);
}
}

function Script21()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script22()
{
  document.exitFullscreen();
}

function Script23()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script24()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script25()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.025;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.play();


}

function Script26()
{
   if (!window.alteredCaptions){
 var sheet = document.createElement('style');
 sheet.innerHTML = ".caption{margin-bottom:5% !important;}";
 document.body.appendChild(sheet);
 window.alteredCaptions = true;
 }
  /*
 This will insert a custom style for captions into a Storyline course_info.
 T make it work, it has to be executed by a trigger, that is on the master slide and gets fired at timeline start.
*/


/*First test if the style is already there from another slide */
var test = document.getElementById("MyStyle");

/* Add the style only if it is not there to avoid cluttering the DOM */
if(!test){
 var body = document.querySelector("body");
 /* create the element that will hold the style definition */
 var style = document.createElement('style');
 /* for older browsers it is necessary to give this type information */
 style.type = 'text/css';
 /* The new style element needs an ID so we can use it to test for its existance */
 style.id = 'MyStyle';

 /* The following is the style definition that will be applied */
 style.appendChild(document.createTextNode(".caption p { background: rgba(0,0,0,0.8); color: white; text-decoration: none; text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000; font-weight: normal; font-size: 16px; line-height: 20px; }"));
 /* finally append the element to the "body" of the document. */
 body.appendChild(style);
}
}

function Script27()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script28()
{
  document.exitFullscreen();
}

function Script29()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script30()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script31()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.025;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.play();


}

function Script32()
{
   if (!window.alteredCaptions){
 var sheet = document.createElement('style');
 sheet.innerHTML = ".caption{margin-bottom:5% !important;}";
 document.body.appendChild(sheet);
 window.alteredCaptions = true;
 }
  /*
 This will insert a custom style for captions into a Storyline course_info.
 T make it work, it has to be executed by a trigger, that is on the master slide and gets fired at timeline start.
*/


/*First test if the style is already there from another slide */
var test = document.getElementById("MyStyle");

/* Add the style only if it is not there to avoid cluttering the DOM */
if(!test){
 var body = document.querySelector("body");
 /* create the element that will hold the style definition */
 var style = document.createElement('style');
 /* for older browsers it is necessary to give this type information */
 style.type = 'text/css';
 /* The new style element needs an ID so we can use it to test for its existance */
 style.id = 'MyStyle';

 /* The following is the style definition that will be applied */
 style.appendChild(document.createTextNode(".caption p { background: rgba(0,0,0,0.8); color: white; text-decoration: none; text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000; font-weight: normal; font-size: 16px; line-height: 20px; }"));
 /* finally append the element to the "body" of the document. */
 body.appendChild(style);
}
}

function Script33()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script34()
{
  document.exitFullscreen();
}

function Script35()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script36()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script37()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.025;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.play();


}

function Script38()
{
   if (!window.alteredCaptions){
 var sheet = document.createElement('style');
 sheet.innerHTML = ".caption{margin-bottom:5% !important;}";
 document.body.appendChild(sheet);
 window.alteredCaptions = true;
 }
  /*
 This will insert a custom style for captions into a Storyline course_info.
 T make it work, it has to be executed by a trigger, that is on the master slide and gets fired at timeline start.
*/


/*First test if the style is already there from another slide */
var test = document.getElementById("MyStyle");

/* Add the style only if it is not there to avoid cluttering the DOM */
if(!test){
 var body = document.querySelector("body");
 /* create the element that will hold the style definition */
 var style = document.createElement('style');
 /* for older browsers it is necessary to give this type information */
 style.type = 'text/css';
 /* The new style element needs an ID so we can use it to test for its existance */
 style.id = 'MyStyle';

 /* The following is the style definition that will be applied */
 style.appendChild(document.createTextNode(".caption p { background: rgba(0,0,0,0.8); color: white; text-decoration: none; text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000; font-weight: normal; font-size: 16px; line-height: 20px; }"));
 /* finally append the element to the "body" of the document. */
 body.appendChild(style);
}
}

function Script39()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script40()
{
  document.exitFullscreen();
}

function Script41()
{
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
}

function Script42()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.pause();


}

function Script43()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.025;
}

var player = GetPlayer();
this.Location= "story_content/WebObjects/5ayB2uqxp3P/01.wav";

var audio = document.getElementById('bgSong');
audio.src = Location;
audio.load();
audio.play();


}

