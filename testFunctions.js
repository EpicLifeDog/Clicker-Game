function localStorageTest(key, len) {
   var value = window.localStorage.getItem(key); 
   value = (value == null)?"":value;
   var numIters = len - value.length;
   while(numIters--) {
       value += "1";
       window.localStorage.setItem(key, value);
       if (window.localStorage.getItem(key) != value) {
           console.log("limit reached at " + (value.length-1).toString() + " bytes");
           break;
       }
   }
   console.log("stored " + value.length + " bytes");
}

var increment = 5000;

function localStorageIncrementalTest(key, len) {
   var value = window.localStorage.getItem(key); 
   value = (value == null)?"":value;
   var numIters = len - value.length;
   var limitReached = false;
   while(numIters--) {
       value += "1";
       window.localStorage.setItem(key, value);
       if (window.localStorage.getItem(key) != value) {
           console.log("limit reached at " + (value.length-1).toString() + " bytes");
           limitReached = true;
           break;
       }
   }
   console.log("stored " + value.length + " bytes");
   if (!limitReached) {
       setTimeout(function() {
           localStorageIncrementalTest(key, len+increment);
       }, 5000);    
   }
}

function testConsoleLog() {
    console.log("Log works");
}