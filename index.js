// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if(someValue>=42){
    return (someValue-42)}
    //returns the number of blocks given a value
    else if(someValue<42){
        return(42-someValue)
    }
  }
  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    if(someValue>=42){
        return (someValue-42)*264}
        else if(someValue<42){
            return(42-someValue)*264
        }   
     // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(start>=destination){
        return((start-destination)*264)
    }
    else if(destination>start){
        return((destination-start)*264)
    }
  }
  function calculatesFarePrice(start, destination) {
        //returns the fare for the customer
    if(start>=destination){
               if (((start-destination)*264) <=400){
            return(0)
                    }
                    else if(((start-destination)*264) <=2000){
                        return ((((start-destination)*264)-400)*0.02)
                    }
                    else if(((start-destination)*264) <=2500){
                        return(25)
                    }
                    else if(((start-destination)*264) >2500){
                        return ('cannot travel that far')
                    }
    }
    else if(destination>start){
                if (((destination-start)*264) <=400){
            return(0)
                    }
                    else if(((destination-start)*264) <=2000){
                        return ((((destination-start)*264)-400)*0.02)
                    }
                    else if(((destination-start)*264) <=2500){
                        return(25)
                    }
                    else if(((destination-start)*264) >2500){
                        return ('cannot travel that far')
    }

}  }