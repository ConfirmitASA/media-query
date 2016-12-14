  #MediaQuery 
  
  [API docs](https://ConfirmitASA.github.io/media-query)
  
  `MediaQuery` helps perform actions when CSS query is matched instead of polling the window width, when it's not so important to get exact width, only checking matching the query.
 
  ``` javascript
  function onMatch(matches){
   if(matches){
     // do what you need when the mediaquery is matched
   } else {
      // do what you need when the media query is not matched
   }
 }
 
   var mq = new MediaQuery({query:"max-width:760px"},onMatch,this);
 
   //at any time you may check whether it matches the query:
 
   mq.matches //true or false
  ```
