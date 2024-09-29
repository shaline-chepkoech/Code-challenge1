//creates the function object
function calculatepoints() {
    //prompts for input
    let speed = prompt("Input speed");
    //converts non integer to integer
    speed = parseInt(speed);
    //specifies speed limit
    const speedlimit = 70;
    let demeritPointsPerLimitexceeded = 1;
    //tests speed 
    if (speed < speedlimit){
        return 'Ok'
    }   else {
        //calculates excess speed
        const excessSpeed = speed - speedlimit;
        //calculates demerit points
        const demeritPoints = Math.floor(excessSpeed / 5) * demeritPointsPerLimitexceeded;
        //evaluates demerit points for license suspension
        if ( demeritPoints >= 12){
            return 'Suspend license';}
               
            // Displays total demerit points
        return demeritPoints ;}
    }            
        
    
        //calls function
        const points = calculatepoints();
        ////logs message to console
        console.log(`Demerit Points for speed violation : ${points}`);
      
   
