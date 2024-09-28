function calculatepoints() {
    let speed = prompt("Input speed");
    speed = parseInt(speed);
    const speedlimit = 70;
    let demeritPointsPerLimitexceeded = 1;
    if (speed < speedlimit){
        return 'Ok'
    }   else {
        const excessSpeed = speed - speedlimit;
        const demeritPoints = Math.floor(excessSpeed / 5) * demeritPointsPerLimitexceeded;
        if ( demeritPoints >= 12){
            return 'Suspend license';}

        return demeritPoints;}
                
        }
        const points = calculatePoints();
        console.log(`Demerit Points for speed violation : ${points}`)
      
   
