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

/*document.addEventListener('DOMContentLoaded', function() {
    const boundaries = document.querySelectorAll('.boundary');

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
});*/

//Exercice3

/*document.addEventListener('DOMContentLoaded', function() {
    const boundaries = document.querySelectorAll('.boundary');
    const end = document.getElementById('end');

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
});*/

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
    const boundaries = document.querySelectorAll('.boundary');
    const end = document.getElementById('end');
    const start = document.getElementById('start');
    const status = document.getElementById('status');
    const maze = document.getElementById('maze');

    boundaries.forEach(boundary => {
        boundary.addEventListener('mouseover', function() {
            if (gameStarted) {
                boundaries.forEach(item => {
                    item.style.backgroundColor = 'red';
                });
                status.textContent = 'You lose!';
                gameStarted = false;
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
            status.textContent = 'You win!';
            gameStarted = false;
        }
    });

    start.addEventListener('click', function() {
        gameStarted = true;
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = '#eeeeee';
        });
        status.textContent = 'Move your mouse over the "S" to begin.';
    });

    maze.addEventListener('mouseleave', function() {
        if (gameStarted) {
            boundaries.forEach(boundary => {
                boundary.style.backgroundColor = 'red';
            });
            status.textContent = 'You lose!';
            gameStarted = false;
        }
    });
});

