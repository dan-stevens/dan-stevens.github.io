import React from 'react';


let i = 0;	
const lineBreak = document.createElement("Br");

const updateMonitor = (updateText) => {
	setTimeout(function () {
      document.getElementById('gizmo-updates-screen').innerHTML += updateText.charAt(i);    
      i++;
      if (i < updateText.length) {
        updateMonitor(updateText);
      }
      else {
        document.getElementById('gizmo-updates-screen').append(lineBreak);   
        i = 0;
      }
   }, 30)
}

export default updateMonitor;