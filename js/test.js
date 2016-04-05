//$(document).ready(function(){
            var xName = prompt("Player X: ", "Player X"); // Allow players to enter their names
            var oName = prompt("Player O: ", "Player O");


             var nameX = document.getElementById('plaX');
             var nameO = document.getElementById("plaO");
            console.log(nameX, nameO);
            var nodeX = document.createTextNode(xName + " is Player X.");
            var nodeO = document.createTextNode(oName + " is Player O.");
            console.log(nodeX, nodeO);
             $('#plaX').append(xName);
             $('#plaX').text(nameX);
            $('#plaX').append('xName');
            $('nameO').append(nodeO);
            //nameX.appendChild(nodeX);
            //document.getElementById("plaX").innerHTML = ("HEllo " + xName + " lets play");
//});
