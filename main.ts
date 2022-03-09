let direction = 0;
let x = 0;
let y = 0;
let max_length = 3;
let snake = [[0, 0]];

input.onButtonPressed(Button.A, function () {
    direction = (direction - 1) % 4
})
input.onButtonPressed(Button.B, function () {
    direction = (direction + 1) % 4
})
loops.everyInterval(500, function () {
    if(direction == 0){
        x += 1;
    }
    else if(direction == 1) {
        y += 1;
    }
    else if(direction == 2){
        x -= 1;
    }
    else if (direction == 3) {
        y -= 1;
    }
    if(x < 0){
        x = 4;
    }
    else if(x > 4){
        x = 0;
    }
    if(y < 0){
        y = 4;
    }
    else if(y > 4){
        y = 0;
    }
    if(snake.length == max_length){
        let end = snake.shift();
        led.unplot(end[0], end[1]);
    }
    snake.push([x, y])
    for(const coordinate of snake){
        led.plot(coordinate[0], coordinate[1]);
    }
    //console.log("x: " + x + " y: " + y)
})
