function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HPNIDQxKID":
        Script1();
        break;
      case "5qnUwzMFmSN":
        Script2();
        break;
      case "61AoIcw3OI7":
        Script3();
        break;
      case "6XCQ5g33NZ5":
        Script4();
        break;
      case "5iqg5hq6M93":
        Script5();
        break;
      case "6CsCLF73MZ3":
        Script6();
        break;
      case "6os5lT4op3B":
        Script7();
        break;
      case "6NwcMg20A7j":
        Script8();
        break;
      case "5pr3N9pFu6T":
        Script9();
        break;
      case "6YtPoUilrYc":
        Script10();
        break;
      case "6U63lAnRfC0":
        Script11();
        break;
      case "6Cd4zzEE9zW":
        Script12();
        break;
      case "6nUA2fhOVRz":
        Script13();
        break;
      case "6WV3NheqyeV":
        Script14();
        break;
      case "5f1xAdOH7Kx":
        Script15();
        break;
      case "5VH3TCU50l1":
        Script16();
        break;
      case "5dT9aNcMl2E":
        Script17();
        break;
      case "6fnObOA1za2":
        Script18();
        break;
      case "5dnhpFM1x2O":
        Script19();
        break;
      case "6M4Ivhxf40G":
        Script20();
        break;
      case "5uE8XijMfhy":
        Script21();
        break;
      case "64Wz0zOb7QW":
        Script22();
        break;
      case "6g8rl3BNfOv":
        Script23();
        break;
      case "5sBeOWj89qT":
        Script24();
        break;
      case "5ldNYg2a2aa":
        Script25();
        break;
      case "6PRfkphMQKl":
        Script26();
        break;
      case "6CtZZAHGDg3":
        Script27();
        break;
      case "62QltrQLtzz":
        Script28();
        break;
      case "6I8RYaVxOOC":
        Script29();
        break;
      case "5afQJCOeMQw":
        Script30();
        break;
      case "5wOhHDvpRki":
        Script31();
        break;
      case "5iOrco2q3Kg":
        Script32();
        break;
      case "5m3OkkFiOV1":
        Script33();
        break;
      case "6DHgwLm5VB4":
        Script34();
        break;
      case "6Ao43oKbso3":
        Script35();
        break;
      case "696cT15MAHO":
        Script36();
        break;
      case "6cJLzLrybqP":
        Script37();
        break;
      case "6eVBdPX7T3B":
        Script38();
        break;
      case "6rHwCtSGlcY":
        Script39();
        break;
      case "6EvdlMUaZqg":
        Script40();
        break;
      case "6eNjDbmyBO6":
        Script41();
        break;
      case "5sE8autTCaL":
        Script42();
        break;
      case "60nhtYUSemh":
        Script43();
        break;
      case "5kOuwvUlveh":
        Script44();
        break;
      case "628HSym95hg":
        Script45();
        break;
      case "5rEbYuzYfVo":
        Script46();
        break;
      case "6WUGCt8iXJv":
        Script47();
        break;
      case "6cxLdZ1FvOT":
        Script48();
        break;
      case "613iRTCU8DU":
        Script49();
        break;
      case "6n4L4WnHrXV":
        Script50();
        break;
      case "5ejeFF8LDcY":
        Script51();
        break;
      case "61gm4ofKO3W":
        Script52();
        break;
      case "6XspEkOW0nF":
        Script53();
        break;
      case "5xICygLc4NV":
        Script54();
        break;
      case "6MiSit42p1U":
        Script55();
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

function Script44()
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

function Script45()
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

function Script46()
{
  document.exitFullscreen();
}

function Script47()
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

function Script48()
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

function Script49()
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

function Script50()
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

function Script51()
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

function Script52()
{
  document.exitFullscreen();
}

function Script53()
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

function Script54()
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

function Script55()
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

