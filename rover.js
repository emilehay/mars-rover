const rover = {

    x: 0,
    y: 0,
    dir: '',
    init: (initX, initY, initDir) => {
        rover.x = initX;
        rover.y = initY;
        rover.dir = initDir;
    },
    move: () => {
        switch(rover.dir){
            case 'N': {
                (rover.y > 0) && rover.y--;
                break;
            }
            case 'E': {
                (rover.x < board.width) && rover.x++;
                break;
            }
            case 'S': {
                (rover.y < board.height) && rover.y++;
                break;
            }
            case 'W': {
                (rover.x > 0) && rover.x--;
                break;
            }
            default:
                break;
        }
        console.log('Move!', rover.x, rover.y, rover.dir);
    },
    turn: (turnDir) => {
        switch(rover.dir){
            case 'N': {
                (turnDir === 'L') ? rover.dir = 'W' : rover.dir = 'E';
                break;
            }
            case 'E': {
                (turnDir === 'L') ? rover.dir = 'N' : rover.dir = 'S';
                break;
            }
            case 'S': {
                (turnDir === 'L') ? rover.dir = 'E' : rover.dir = 'W';
                break;
            }
            case 'W': {
                (turnDir === 'L') ? rover.dir = 'S' : rover.dir = 'N';
                break;
            }
            default:
                break;
        }
        console.log('Turn!', rover.x, rover.y, rover.dir);
    },
    executeCommands: (commandsStr) => {

        console.log('Orders received. The rover is currently at ' + rover.x + ',' + rover.y + ' facing ' + rover.dir);
        
        for(let i = 0; i < commandsStr.length; i++){
            switch(commandsStr[i]){
                case 'M': {
                    rover.move();
                    break;
                }
                case 'L': {
                    rover.turn('L');
                    break;
                }
                case 'R': {
                    rover.turn('R');
                    break;
                }
                default:
                    break;
            }
        }

        console.log('Job\'s done! The rover is at ' + rover.x + ',' + rover.y + ' facing ' + rover.dir);

    }

};

const board = {

    height: 0,
    width: 0,
    setBounds: (x, y) => {
        board.height = x;
        board.width = y;
    }

};

const init = () => {
    
    //Collect user input
    const boardSize = prompt('What is the width and height of this suspiciously uniform section of Mars?', '88');
    const roverPosition = prompt('What is the rover\'s initial location and orientation?', '12 E');
    const roverCommands = prompt('What is the list of commands the rover is meant to perform?', 'MMLMRMMRRMML');

    //Set the bounds of the board
    board.setBounds(boardSize[0], boardSize[1]);

    //Initialize the rover position
    rover.init(roverPosition[0], roverPosition[1], roverPosition[3]);   

    //Send commands to the rover!
    rover.executeCommands(roverCommands);
}

init();