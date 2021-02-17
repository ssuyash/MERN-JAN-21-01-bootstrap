var stations = [
    {name:"MHOW", dist:0, prev:"", next:"VIKRANT"}, 
    {name:"VIKRANT", dist:2, prev:"MHOW", next:"MITM"}, 
    {name:"MITM", dist:4, prev:"VIKRANT", next:"RAU"}, 
    {name:"RAU", dist:6, prev:"MITM", next:"SILICON"}, 
    {name:"SILICON", dist:9, prev:"RAU", next:"IPS"}, 
    {name:"IPS", dist:14, prev:"SILICON", next:"RAJIVGANDHI"}, 
    {name:"RAJIVGANDHI", dist:16, prev:"IPS", next:"VISHNUPURI"}, 
    {name:"VISHNUPURI", dist:16.5, prev:"RAJIVGANDHI", next:"BHANWARKUA"}, 
    {name:"BHANWARKUA", dist:18, prev:"VISHNUPURI", next:"HOLKAR"}, 
    {name:"HOLKAR", dist:21, prev:"BHANWARKUA", next:"INDIRAPRATIMA"}, 
    {name:"INDIRAPRATIMA", dist:23, prev:"HOLKAR", next:"GEETABHAWAN"}, 
    {name:"GEETABHAWAN", dist:25, prev:"INDIRAPRATIMA", next:"AICTSL"}, 
    {name:"AICTSL", dist:29, prev:"GEETABHAWAN", next:"PALASIA"}, 
    {name:"PALASIA", dist:31, prev:"AICTSL", next:"INDUSTRYHOUSE"}, 
    {name:"INDUSTRYHOUSE", dist:33, prev:"PALASIA", next:"LIG"}, 
    {name:"LIG", dist:35, prev:"INDUSTRYHOUSE", next:"MR9"}, 
    {name:"MR9", dist:36, prev:"LIG", next:"RASOMA"}, 
    {name:"RASOMA", dist:38, prev:"MR9", next:"MR10"}, 
    {name:"MR10", dist:42, prev:"RASOMA", next:"DEWASNAKA"}, 
    {name:"DEWASNAKA", dist:45, prev:"MR10", next:""}, 
]


function isConsicutive(src, dst){
    var consicutive = false
    for(var i=0; i<stations.length; i++){
       if(stations[i]['name'] == src){
           consicutive = (stations[i]['prev'] == dst) || (stations[i]['next'] == dst)
       }
    }

    return consicutive
}


function getDistance(src, dst){
    var srcDst = 0
    var dstDst = 0
    for(var i=0; i<stations.length; i++){
        if(stations[i]['name'] == src){
            srcDst = stations[i]['dist']
        }

        if(stations[i]['name'] == dst){
            dstDst = stations[i]['dist']
        }
    }

    var dist =  dstDst-srcDst

    dist = dist < 0 ? -1*dist : dist

    return dist
}




function getFare(source, destination){

var fare  = 0
    if(isConsicutive(source, destination)){
        fare = 5
    }else{
        var distance = getDistance(source, destination)
        if(distance <= 3){
            fare = 5
        }else if(distance <=6){
            fare = 10
        }else{
            var additionalDist = distance - 6 
            fare = additionalDist*1.5 + 10
        }
    }
    
    
    fare = fare > 30 ? 30 : fare

    return fare
}



function getTimeFare(tripTime){
    if(tripTime <= 10){
        return 0;
    }
    var additionalTime = tripTime - 10

    var additionalFare = (additionalTime - additionalTime%5)/5 + (additionalTime%5 == 0 ? 0 : 1)
    return additionalFare
    //return Math.ceil(additionalTime/5)
}

function getFinalFare(source, destination, time){
   return getFare(source, destination) + getTimeFare(time)
}

var source = "BHANWARKUA"
var destination = "PALASIA"
var journeyTime = 34
console.log(getFinalFare(source, destination, journeyTime) )