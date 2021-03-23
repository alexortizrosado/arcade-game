// Our Initial State
let gameState = {

    canvas:[
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    ]


};


let snake = {
    body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],

    // 10, 4     10,5  ...
    // 10, 3     10,4 ...
    nextDirection: [0, -1],
    apple: [10, 5]
}


function buildInitialState() {
    renderState()
    buildSnake()
}





// Render the State
function renderState() {
    const canvasElement = $('#canvas')
    canvasElement.empty()
    gameState.canvas.forEach(function (row, rowIndex) {
        row.forEach(function (segment, segmentIndex) {
            const segmentElement = $(`<div class="segment" data-x="${rowIndex}" data-y="${segmentIndex}" ></div>`)
            canvasElement.append(segmentElement)
        })
    })
}

function buildSnake() {

    $('.segment').removeClass('snake')

    const snakeHead = snake.body[0]
    const snakeHeadX = snakeHead[0]
    const snakeHeadY = snakeHead[1]

    const newSnakeHeadX = snakeHeadX + snake.nextDirection[0]
    const newSnakeHeadY = snakeHeadY + snake.nextDirection[1]
    const newSnakeHead = [newSnakeHeadX, newSnakeHeadY]

    snake.body.unshift(newSnakeHead)
    snake.body.pop() 
    
    snake.body.forEach(function(coordinates) {
        const coordinateX = coordinates[0]
        const coordinateY = coordinates[1]


        const segmentElement = $(`[data-x="${coordinateX}"][data-y="${coordinateY}"]`)
        segmentElement.addClass('snake')
    })
    
}




// Listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState(); // show the user the new state
}

$(".board").on("click", onBoardClick); // etc



setInterval(tick, 150)


// Refresh the screen in an interval
function tick() {
    console.log('tick')
  buildSnake();
}

$(window).on("keydown", function (event) {
    console.log(event.keyCode)
    if (event.keyCode === 37) {
        snake.nextDirection = [0, -1]
    }
    if (event.keyCode === 39) {
        snake.nextDirection = [0, 1]
    }
});

buildInitialState()
