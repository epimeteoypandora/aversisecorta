var fs = require('fs');
global.Common = require("./common/Common");

Common.setAlgorithm(Common.Constants.AlgorithmTypes.CVRP);


var solomon={"elementos":[
{"id":0,"posx":0.00000,"posy":0.00000,"items":0},
{"id":1,"posx":30.00000,"posy":0.00000,"items":10},
{"id":2,"posx":29.63060,"posy":4.69300,"items":30},
{"id":3,"posx":28.53170,"posy":9.27050,"items":30},
{"id":4,"posx":26.73020,"posy":13.61970,"items":10},
{"id":5,"posx":24.27050,"posy":17.63360,"items":10},
{"id":6,"posx":21.21320,"posy":21.21320,"items":30},
{"id":7,"posx":17.63360,"posy":24.27050,"items":30},
{"id":8,"posx":13.61970,"posy":26.73020,"items":10},
{"id":9,"posx":9.27050,"posy":28.53170,"items":10},
{"id":10,"posx":4.69300,"posy":29.63060,"items":30},
{"id":11,"posx":0.00000,"posy":30.00000,"items":30},
{"id":12,"posx":-4.69300,"posy":29.63060,"items":10},
{"id":13,"posx":-9.27050,"posy":28.53170,"items":10},
{"id":14,"posx":-13.61970,"posy":26.73020,"items":30},
{"id":15,"posx":-17.63360,"posy":24.27050,"items":30},
{"id":16,"posx":-21.21320,"posy":21.21320,"items":10},
{"id":17,"posx":-24.27050,"posy":17.63360,"items":10},
{"id":18,"posx":-26.73020,"posy":13.61970,"items":30},
{"id":19,"posx":-28.53170,"posy":9.27050,"items":30},
{"id":20,"posx":-29.63070,"posy":4.69300,"items":10},
{"id":21,"posx":-30.00000,"posy":0.00000,"items":10},
{"id":22,"posx":-29.63060,"posy":-4.69300,"items":30},
{"id":23,"posx":-28.53170,"posy":-9.27050,"items":30},
{"id":24,"posx":-26.73020,"posy":-13.61970,"items":10},
{"id":25,"posx":-24.27050,"posy":-17.63360,"items":10},
{"id":26,"posx":-21.21320,"posy":-21.21320,"items":30},
{"id":27,"posx":-17.63360,"posy":-24.27050,"items":30},
{"id":28,"posx":-13.61970,"posy":-26.73020,"items":10},
{"id":29,"posx":-9.27050,"posy":-28.53170,"items":10},
{"id":30,"posx":-4.69300,"posy":-29.63070,"items":30},
{"id":31,"posx":0.00000,"posy":-30.00000,"items":30},
{"id":32,"posx":4.69300,"posy":-29.63060,"items":10},
{"id":33,"posx":9.27050,"posy":-28.53170,"items":10},
{"id":34,"posx":13.61970,"posy":-26.73020,"items":30},
{"id":35,"posx":17.63360,"posy":-24.27050,"items":30},
{"id":36,"posx":21.21320,"posy":-21.21320,"items":10},
{"id":37,"posx":24.27050,"posy":-17.63360,"items":10},
{"id":38,"posx":26.73020,"posy":-13.61970,"items":30},
{"id":39,"posx":28.53170,"posy":-9.27050,"items":30},
{"id":40,"posx":29.63070,"posy":-4.69300,"items":10},
{"id":41,"posx":60.00000,"posy":0.00000,"items":10},
{"id":42,"posx":59.26130,"posy":9.38610,"items":30},
{"id":43,"posx":57.06340,"posy":18.54100,"items":30},
{"id":44,"posx":53.46040,"posy":27.23940,"items":10},
{"id":45,"posx":48.54100,"posy":35.26710,"items":10},
{"id":46,"posx":42.42640,"posy":42.42640,"items":30},
{"id":47,"posx":35.26710,"posy":48.54100,"items":30},
{"id":48,"posx":27.23940,"posy":53.46040,"items":10},
{"id":49,"posx":18.54100,"posy":57.06340,"items":10},
{"id":50,"posx":9.38610,"posy":59.26130,"items":30},
{"id":51,"posx":0.00000,"posy":60.00000,"items":30},
{"id":52,"posx":-9.38610,"posy":59.26130,"items":10},
{"id":53,"posx":-18.54100,"posy":57.06340,"items":10},
{"id":54,"posx":-27.23940,"posy":53.46040,"items":30},
{"id":55,"posx":-35.26710,"posy":48.54100,"items":30},
{"id":56,"posx":-42.42640,"posy":42.42640,"items":10},
{"id":57,"posx":-48.54100,"posy":35.26710,"items":10},
{"id":58,"posx":-53.46040,"posy":27.23940,"items":30},
{"id":59,"posx":-57.06340,"posy":18.54100,"items":30},
{"id":60,"posx":-59.26130,"posy":9.38610,"items":10},
{"id":61,"posx":-60.00000,"posy":0.00000,"items":10},
{"id":62,"posx":-59.26130,"posy":-9.38610,"items":30},
{"id":63,"posx":-57.06340,"posy":-18.54100,"items":30},
{"id":64,"posx":-53.46040,"posy":-27.23940,"items":10},
{"id":65,"posx":-48.54100,"posy":-35.26710,"items":10},
{"id":66,"posx":-42.42640,"posy":-42.42640,"items":30},
{"id":67,"posx":-35.26710,"posy":-48.54100,"items":30},
{"id":68,"posx":-27.23940,"posy":-53.46040,"items":10},
{"id":69,"posx":-18.54100,"posy":-57.06340,"items":10},
{"id":70,"posx":-9.38610,"posy":-59.26130,"items":30},
{"id":71,"posx":0.00000,"posy":-60.00000,"items":30},
{"id":72,"posx":9.38610,"posy":-59.26130,"items":10},
{"id":73,"posx":18.54100,"posy":-57.06340,"items":10},
{"id":74,"posx":27.23940,"posy":-53.46040,"items":30},
{"id":75,"posx":35.26710,"posy":-48.54100,"items":30},
{"id":76,"posx":42.42640,"posy":-42.42640,"items":10},
{"id":77,"posx":48.54100,"posy":-35.26710,"items":10},
{"id":78,"posx":53.46040,"posy":-27.23940,"items":30},
{"id":79,"posx":57.06340,"posy":-18.54100,"items":30},
{"id":80,"posx":59.26130,"posy":-9.38610,"items":10},
{"id":81,"posx":90.00000,"posy":0.00000,"items":10},
{"id":82,"posx":88.89200,"posy":14.07910,"items":30},
{"id":83,"posx":85.59510,"posy":27.81150,"items":30},
{"id":84,"posx":80.19060,"posy":40.85910,"items":10},
{"id":85,"posx":72.81150,"posy":52.90070,"items":10},
{"id":86,"posx":63.63960,"posy":63.63960,"items":30},
{"id":87,"posx":52.90070,"posy":72.81150,"items":30},
{"id":88,"posx":40.85910,"posy":80.19060,"items":10},
{"id":89,"posx":27.81150,"posy":85.59510,"items":10},
{"id":90,"posx":14.07910,"posy":88.89200,"items":30},
{"id":91,"posx":0.00000,"posy":90.00000,"items":30},
{"id":92,"posx":-14.07910,"posy":88.89200,"items":10},
{"id":93,"posx":-27.81150,"posy":85.59510,"items":10},
{"id":94,"posx":-40.85910,"posy":80.19060,"items":30},
{"id":95,"posx":-52.90070,"posy":72.81150,"items":30},
{"id":96,"posx":-63.63960,"posy":63.63960,"items":10},
{"id":97,"posx":-72.81150,"posy":52.90070,"items":10},
{"id":98,"posx":-80.19060,"posy":40.85910,"items":30},
{"id":99,"posx":-85.59510,"posy":27.81150,"items":30},
{"id":100,"posx":-88.89200,"posy":14.07910,"items":10},
{"id":101,"posx":-90.00000,"posy":0.00000,"items":10},
{"id":102,"posx":-88.89200,"posy":-14.07910,"items":30},
{"id":103,"posx":-85.59510,"posy":-27.81150,"items":30},
{"id":104,"posx":-80.19060,"posy":-40.85920,"items":10},
{"id":105,"posx":-72.81150,"posy":-52.90070,"items":10},
{"id":106,"posx":-63.63960,"posy":-63.63960,"items":30},
{"id":107,"posx":-52.90070,"posy":-72.81150,"items":30},
{"id":108,"posx":-40.85910,"posy":-80.19060,"items":10},
{"id":109,"posx":-27.81150,"posy":-85.59510,"items":10},
{"id":110,"posx":-14.07910,"posy":-88.89200,"items":30},
{"id":111,"posx":0.00000,"posy":-90.00000,"items":30},
{"id":112,"posx":14.07910,"posy":-88.89200,"items":10},
{"id":113,"posx":27.81150,"posy":-85.59510,"items":10},
{"id":114,"posx":40.85920,"posy":-80.19060,"items":30},
{"id":115,"posx":52.90070,"posy":-72.81150,"items":30},
{"id":116,"posx":63.63960,"posy":-63.63960,"items":10},
{"id":117,"posx":72.81150,"posy":-52.90070,"items":10},
{"id":118,"posx":80.19060,"posy":-40.85910,"items":30},
{"id":119,"posx":85.59510,"posy":-27.81150,"items":30},
{"id":120,"posx":88.89200,"posy":-14.07910,"items":10},
{"id":121,"posx":120.00000,"posy":0.00000,"items":10},
{"id":122,"posx":118.52260,"posy":18.77210,"items":30},
{"id":123,"posx":114.12680,"posy":37.08200,"items":30},
{"id":124,"posx":106.92080,"posy":54.47890,"items":10},
{"id":125,"posx":97.08200,"posy":70.53420,"items":10},
{"id":126,"posx":84.85280,"posy":84.85280,"items":30},
{"id":127,"posx":70.53420,"posy":97.08200,"items":30},
{"id":128,"posx":54.47890,"posy":106.92080,"items":10},
{"id":129,"posx":37.08200,"posy":114.12680,"items":10},
{"id":130,"posx":18.77210,"posy":118.52260,"items":30},
{"id":131,"posx":0.00000,"posy":120.00000,"items":30},
{"id":132,"posx":-18.77210,"posy":118.52260,"items":10},
{"id":133,"posx":-37.08200,"posy":114.12680,"items":10},
{"id":134,"posx":-54.47890,"posy":106.92080,"items":30},
{"id":135,"posx":-70.53420,"posy":97.08200,"items":30},
{"id":136,"posx":-84.85280,"posy":84.85280,"items":10},
{"id":137,"posx":-97.08200,"posy":70.53420,"items":10},
{"id":138,"posx":-106.92080,"posy":54.47890,"items":30},
{"id":139,"posx":-114.12680,"posy":37.08200,"items":30},
{"id":140,"posx":-118.52260,"posy":18.77210,"items":10},
{"id":141,"posx":-120.00000,"posy":0.00000,"items":10},
{"id":142,"posx":-118.52260,"posy":-18.77210,"items":30},
{"id":143,"posx":-114.12680,"posy":-37.08210,"items":30},
{"id":144,"posx":-106.92080,"posy":-54.47890,"items":10},
{"id":145,"posx":-97.08200,"posy":-70.53420,"items":10},
{"id":146,"posx":-84.85280,"posy":-84.85280,"items":30},
{"id":147,"posx":-70.53420,"posy":-97.08200,"items":30},
{"id":148,"posx":-54.47880,"posy":-106.92080,"items":10},
{"id":149,"posx":-37.08200,"posy":-114.12680,"items":10},
{"id":150,"posx":-18.77210,"posy":-118.52260,"items":30},
{"id":151,"posx":0.00000,"posy":-120.00000,"items":30},
{"id":152,"posx":18.77220,"posy":-118.52260,"items":10},
{"id":153,"posx":37.08210,"posy":-114.12680,"items":10},
{"id":154,"posx":54.47890,"posy":-106.92080,"items":30},
{"id":155,"posx":70.53420,"posy":-97.08200,"items":30},
{"id":156,"posx":84.85280,"posy":-84.85280,"items":10},
{"id":157,"posx":97.08210,"posy":-70.53420,"items":10},
{"id":158,"posx":106.92080,"posy":-54.47880,"items":30},
{"id":159,"posx":114.12680,"posy":-37.08200,"items":30},
{"id":160,"posx":118.52260,"posy":-18.77210,"items":10},
{"id":161,"posx":150.00000,"posy":0.00000,"items":10},
{"id":162,"posx":148.15320,"posy":23.46520,"items":30},
{"id":163,"posx":142.65849,"posy":46.35260,"items":30},
{"id":164,"posx":133.65100,"posy":68.09860,"items":10},
{"id":165,"posx":121.35250,"posy":88.16780,"items":10},
{"id":166,"posx":106.06600,"posy":106.06600,"items":30},
{"id":167,"posx":88.16780,"posy":121.35260,"items":30},
{"id":168,"posx":68.09860,"posy":133.65100,"items":10},
{"id":169,"posx":46.35250,"posy":142.65849,"items":10},
{"id":170,"posx":23.46520,"posy":148.15331,"items":30},
{"id":171,"posx":0.00000,"posy":150.00000,"items":30},
{"id":172,"posx":-23.46520,"posy":148.15320,"items":10},
{"id":173,"posx":-46.35260,"posy":142.65849,"items":10},
{"id":174,"posx":-68.09860,"posy":133.65100,"items":30},
{"id":175,"posx":-88.16780,"posy":121.35250,"items":30},
{"id":176,"posx":-106.06600,"posy":106.06600,"items":10},
{"id":177,"posx":-121.35260,"posy":88.16780,"items":10},
{"id":178,"posx":-133.65100,"posy":68.09860,"items":30},
{"id":179,"posx":-142.65849,"posy":46.35250,"items":30},
{"id":180,"posx":-148.15331,"posy":23.46520,"items":10},
{"id":181,"posx":-150.00000,"posy":0.00000,"items":10},
{"id":182,"posx":-148.15320,"posy":-23.46520,"items":30},
{"id":183,"posx":-142.65849,"posy":-46.35260,"items":30},
{"id":184,"posx":-133.65100,"posy":-68.09860,"items":10},
{"id":185,"posx":-121.35250,"posy":-88.16780,"items":10},
{"id":186,"posx":-106.06600,"posy":-106.06600,"items":30},
{"id":187,"posx":-88.16780,"posy":-121.35260,"items":30},
{"id":188,"posx":-68.09860,"posy":-133.65100,"items":10},
{"id":189,"posx":-46.35250,"posy":-142.65849,"items":10},
{"id":190,"posx":-23.46520,"posy":-148.15331,"items":30},
{"id":191,"posx":0.00000,"posy":-150.00000,"items":30},
{"id":192,"posx":23.46520,"posy":-148.15320,"items":10},
{"id":193,"posx":46.35260,"posy":-142.65849,"items":10},
{"id":194,"posx":68.09860,"posy":-133.65100,"items":30},
{"id":195,"posx":88.16780,"posy":-121.35250,"items":30},
{"id":196,"posx":106.06600,"posy":-106.06600,"items":10},
{"id":197,"posx":121.35260,"posy":-88.16780,"items":10},
{"id":198,"posx":133.65100,"posy":-68.09860,"items":30},
{"id":199,"posx":142.65849,"posy":-46.35250,"items":30},
{"id":200,"posx":148.15331,"posy":-23.46510,"items":10},
{"id":201,"posx":180.00000,"posy":0.00000,"items":10},
{"id":202,"posx":177.78391,"posy":28.15820,"items":30},
{"id":203,"posx":171.19020,"posy":55.62310,"items":30},
{"id":204,"posx":160.38120,"posy":81.71830,"items":10},
{"id":205,"posx":145.62309,"posy":105.80130,"items":10},
{"id":206,"posx":127.27920,"posy":127.27920,"items":30},
{"id":207,"posx":105.80130,"posy":145.62309,"items":30},
{"id":208,"posx":81.71830,"posy":160.38120,"items":10},
{"id":209,"posx":55.62310,"posy":171.19020,"items":10},
{"id":210,"posx":28.15820,"posy":177.78391,"items":30},
{"id":211,"posx":0.00000,"posy":180.00000,"items":30},
{"id":212,"posx":-28.15820,"posy":177.78391,"items":10},
{"id":213,"posx":-55.62310,"posy":171.19020,"items":10},
{"id":214,"posx":-81.71830,"posy":160.38120,"items":30},
{"id":215,"posx":-105.80140,"posy":145.62300,"items":30},
{"id":216,"posx":-127.27920,"posy":127.27920,"items":10},
{"id":217,"posx":-145.62309,"posy":105.80130,"items":10},
{"id":218,"posx":-160.38120,"posy":81.71830,"items":30},
{"id":219,"posx":-171.19020,"posy":55.62300,"items":30},
{"id":220,"posx":-177.78391,"posy":28.15820,"items":10},
{"id":221,"posx":-180.00000,"posy":0.00000,"items":10},
{"id":222,"posx":-177.78391,"posy":-28.15820,"items":30},
{"id":223,"posx":-171.19020,"posy":-55.62310,"items":30},
{"id":224,"posx":-160.38120,"posy":-81.71830,"items":10},
{"id":225,"posx":-145.62300,"posy":-105.80140,"items":10},
{"id":226,"posx":-127.27920,"posy":-127.27920,"items":30},
{"id":227,"posx":-105.80130,"posy":-145.62309,"items":30},
{"id":228,"posx":-81.71830,"posy":-160.38120,"items":10},
{"id":229,"posx":-55.62300,"posy":-171.19020,"items":10},
{"id":230,"posx":-28.15820,"posy":-177.78391,"items":30},
{"id":231,"posx":0.00000,"posy":-180.00000,"items":30},
{"id":232,"posx":28.15820,"posy":-177.78391,"items":10},
{"id":233,"posx":55.62310,"posy":-171.19020,"items":10},
{"id":234,"posx":81.71830,"posy":-160.38120,"items":30},
{"id":235,"posx":105.80140,"posy":-145.62300,"items":30},
{"id":236,"posx":127.27920,"posy":-127.27920,"items":10},
{"id":237,"posx":145.62309,"posy":-105.80130,"items":10},
{"id":238,"posx":160.38120,"posy":-81.71830,"items":30},
{"id":239,"posx":171.19020,"posy":-55.62300,"items":30},
{"id":240,"posx":177.78391,"posy":-28.15820,"items":10}
]};


var matrixCost=[];

for (var i=0;i<241;i++){
  var fila=[];
    for (var k=0;k<241;k++){
    fila.push(calculateDistance(solomon.elementos[i],solomon.elementos[k]));
  }
  matrixCost.push(fila);
}



















var maxSteps=50;
var popSize1 = 50;
var popSize2 = 100;
var popSize3 = 150;

var nTrucks = 9;
var truckCapacity=550;
var truckTime = 650;
var penalCap = 1000;
var penalTime = 1000;

var probCross= 0.8;
var probMut = 0.01;
var probLS = 0.1;


var totalElements=240;
var random1 = null;
var random2 = null;





var max=20;


var arrayCustomers = [];
for (var i=0;i<totalElements;i++){  
    arrayCustomers.push( new Common.Elements.Customer(solomon.elementos[i+1].items,0) );
}














var problemData={};
problemData["nTrucks"]=nTrucks;

problemData["crossProb"]=probCross;
problemData["mutateProb"]=probMut;
problemData["LSProb"]=probLS;

problemData["maxSteps"]=maxSteps;

saveProblemPopulation(popSize1,()=>{
    saveProblemPopulation(popSize2,()=>{
        saveProblemPopulation(popSize3,()=>{
            console.log("TODOS GUARDADOS")
        });
    });
});

function saveProblemPopulation(popSize,callback){
    var problem = new Common.Elements.Problem();
    problem.initialize(matrixCost, arrayCustomers, truckCapacity, truckTime, penalCap,penalTime);
    problem.targetFitness=0;    
    problemData["problem"]=problem;
    
    var algorithm = new Common.Elements.AlgorithmCVRP(problem, probCross,probMut,probLS, maxSteps);
    algorithm.initialize(popSize,arrayCustomers.length+nTrucks-1);    

    var population = algorithm.getPopulation()    
    problemData["population"]=population;
    fs.open("./dataProbSolomon_"+totalElements+"_"+population.getSize()+".txt", "wx", function (err, fd) {
        fs.writeFile("./dataProbSolomon_"+totalElements+"_"+population.getSize()+".txt",JSON.stringify(problemData), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
            callback();
        }); 
    }); 
}








function calculateDistanceArray(array){
   var total = 0;
   for (var i=0;i<array.length-1;i++){
       total+=calculateDistance(solomon.elementos[array[i]],solomon.elementos[array[i+1]])
   }
   return total;
}

function calculateDistance(p1,p2){
    var distX=Math.pow( p1.posx-p2.posx,2);
    var distY=Math.pow( p1.posy-p2.posy,2);
    var sol = Math.pow( distX+distY,0.5 )
    return sol;
    //return parseFloat(sol.toFixed(0))
}