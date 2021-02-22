var dob = "05 Nov 1994 00:12:00 GMT"

var dobMillis = Date.parse(dob)
var currentMillis = Date.now()

var miliseconds = currentMillis - dobMillis

var givenSeconds = parseInt(miliseconds / 1000)

var secsInOneYr = 12*30*24*60*60
var secsInOneMnth = 30*24*60*60
var secsInOneDay = 24*60*60
var secsInOneHr = 60*60

var numOfYrs = (givenSeconds - givenSeconds%secsInOneYr)/secsInOneYr
var remainingSecs =  givenSeconds%secsInOneYr

var numOfMnths = (remainingSecs - remainingSecs%secsInOneMnth)/secsInOneMnth
remainingSecs = remainingSecs%secsInOneMnth

var numOfDays = (remainingSecs-remainingSecs%secsInOneDay)/secsInOneDay
remainingSecs %= secsInOneDay


var numOfHrs = (remainingSecs-remainingSecs%secsInOneHr)/secsInOneHr
remainingSecs %= secsInOneHr

var numOfMins =  (remainingSecs-remainingSecs%60)/60
remainingSecs %= 60

console.log(numOfYrs, numOfMnths, numOfDays, numOfHrs, numOfMins, remainingSecs)