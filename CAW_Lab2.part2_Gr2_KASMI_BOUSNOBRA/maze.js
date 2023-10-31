// document.addEventListener("DOMContentLoaded",function(){
//   var boundaries = document.querySelectorAll(".boundary");
//   var maze = document.getElementById("maze");
//   var end = document.getElementById("end");
//   var start = document.getElementById("start");
//   var GameOver = 0;
//     maze.addEventListener("mouseover", function() {
//     for (var i = 0; i < boundaries.length; i++) {
//       boundaries[i].style.backgroundColor = "red";
//       GameOver =1;
//     }
//     });
//     if (GameOver === 0){
//     end.addEventListener("mouseover", function() {
//         alert("you win ")
//          });
//         }
//         start.addEventListener("mousevor",function(){
//             for (var i = 0; i < boundaries.length; i++) {
//                 boundaries[i].style.backgroundColor = "white";
//                 GameOver=0;
//               }
           
//         }
//         )
    
//   });
//Exercice1
/*document.addEventListener('DOMContentLoaded', function() {
    const boundaries = document.querySelectorAll('.boundary');

    boundaries.forEach(boundary => {
        boundary.addEventListener('mouseover', function() {
            boundary.style.backgroundColor = 'red';
        });

        boundary.addEventListener('mouseout', function() {
            boundary.style.backgroundColor = '#eeeeee';
        });
    });
});
*/


//Exercice2

// document.addEventListener('DOMContentLoaded', function() {
//     const boundaries = document.querySelectorAll('.boundary');

//     boundaries.forEach(boundary => {
//         boundary.addEventListener('mouseover', function() {
//             boundaries.forEach(item => {
//                 item.style.backgroundColor = 'red';
//             });
//         });

//         boundary.addEventListener('mouseout', function() {
//             boundaries.forEach(item => {
//                 item.style.backgroundColor = '#eeeeee';
//             });
//         });
//     });
// });

//Exercice3

// document.addEventListener('DOMContentLoaded', function() {
//     const boundaries = document.querySelectorAll('.boundary');
//     const end = document.getElementById('end');

//     boundaries.forEach(boundary => {
//         boundary.addEventListener('mouseover', function() {
//             boundaries.forEach(item => {
//                 item.style.backgroundColor = 'red';
//             });
//         });

//         boundary.addEventListener('mouseout', function() {
//             boundaries.forEach(item => {
//                 item.style.backgroundColor = '#eeeeee';
//             });
//         });
//     });

//     end.addEventListener('mouseover', function() {
//         alert('You win!');
//     });
// });

//Exercice4

/*document.addEventListener('DOMContentLoaded', function() {
    const boundaries = document.querySelectorAll('.boundary');
    const end = document.getElementById('end');
    const start = document.getElementById('start');

    boundaries.forEach(boundary => {
        boundary.addEventListener('mouseover', function() {
            boundaries.forEach(item => {
                item.style.backgroundColor = 'red';
            });
        });

        boundary.addEventListener('mouseout', function() {
            boundaries.forEach(item => {
                item.style.backgroundColor = '#eeeeee';
            });
        });
    });

    end.addEventListener('mouseover', function() {
        alert('You win!');
    });

    start.addEventListener('click', function() {
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = '#eeeeee';
        });
    });
});
*/


//Exercice6
/*document.addEventListener('DOMContentLoaded', function() {
    const boundaries = document.querySelectorAll('.boundary');
    const end = document.getElementById('end');
    const start = document.getElementById('start');
    const status = document.getElementById('status');

    boundaries.forEach(boundary => {
        boundary.addEventListener('mouseover', function() {
            boundaries.forEach(item => {
                item.style.backgroundColor = 'red';
            });
            status.textContent = 'You lose!';
        });

        boundary.addEventListener('mouseout', function() {
            boundaries.forEach(item => {
                item.style.backgroundColor = '#eeeeee';
            });
            status.textContent = 'Move your mouse over the "S" to begin.';
        });
    });

    end.addEventListener('mouseover', function() {
        status.textContent = 'You win!';
    });

    start.addEventListener('click', function() {
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = '#eeeeee';
        });
        status.textContent = 'Move your mouse over the "S" to begin.';
    });
});*/

//Exercice7
document.addEventListener('DOMContentLoaded', function() {
    let gameStarted = false;
    let wonCount = 0;
    let lostCount = 0;
    let bestTime = null;
    let startTime = null;
    let endTime = null;
    const boundaries = document.querySelectorAll('.boundary');
    const end = document.getElementById('end');
    const start = document.getElementById('start');
    const status = document.getElementById('status');
    const maze = document.getElementById('maze');
    const winCountDisplay = document.getElementById('winCount');
    const lostCountDisplay = document.getElementById('lostCount');
    const timeDisplay = document.getElementById('timeDisplay');
    const progressDisplay = document.getElementById('progressBar'); 

    boundaries.forEach(boundary => {
        boundary.addEventListener('mouseover', function() {
            if (gameStarted) {
                boundaries.forEach(item => {
                    item.style.backgroundColor = 'red';
                });
                status.textContent = 'You lose!';
                gameStarted = false;
                lostCount++;
                lostCountDisplay.textContent = lostCount;
            }
        });

        boundary.addEventListener('mouseout', function() {
            boundaries.forEach(item => {
                item.style.backgroundColor = '#eeeeee';
            });
            status.textContent = 'Move your mouse over the "S" to begin.';
        });
    });

    end.addEventListener('mouseover', function() {
        if (gameStarted) {
            endTime = new Date();
            const timeSpent = (endTime - startTime) / 1000;
            if (bestTime === null || timeSpent < bestTime) {
                bestTime = timeSpent;
                timeDisplay.textContent = `Best Time: ${bestTime} seconds`;
            }
            status.textContent = 'You win!';
            gameStarted = false;
            wonCount++;
            winCountDisplay.textContent = wonCount;
        }
    });

    start.addEventListener('click', function() {
        gameStarted = true;
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = '#eeeeee';
        });
        status.textContent = 'Move your mouse over the "S" to begin.';
        startTime = new Date();
    });

    maze.addEventListener('mouseleave', function() {
        if (gameStarted) {
            boundaries.forEach(boundary => {
                boundary.style.backgroundColor = 'red';
            });
            status.textContent = 'You lose!';
            gameStarted = false;
            lostCount++;
            lostCountDisplay.textContent = lostCount;
        }
    });

    maze.addEventListener('mousemove', function(e) {
        if (gameStarted) {
            const mazeRect = maze.getBoundingClientRect();
            const mouseX = e.clientX;
            const percentage = ((mouseX - mazeRect.left) / mazeRect.width) * 110;
            progressDisplay.style.width = percentage + '%'; 
        }
    });
});




