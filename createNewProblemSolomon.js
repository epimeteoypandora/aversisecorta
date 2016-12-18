var fs = require('fs');
global.Common = require("./common/Common");

Common.setAlgorithm(Common.Constants.AlgorithmTypes.CVRP);


var solomon={"elementos":[
{"id":0,"posx":    0,"posy":    0,"items":     0.0000  }
,
{"id":  1,"posx":     30.0000,"posy":      0.0000,"items":     10.0000  }   ,
{"id":  2,"posx":     29.6306,"posy":      4.6930,"items":     30.0000  }   ,
{"id":  3,"posx":     28.5317,"posy":      9.2705,"items":     30.0000  }   ,
{"id":  4,"posx":     26.7302,"posy":     13.6197,"items":     10.0000  }   ,
{"id":  5,"posx":     24.2705,"posy":     17.6336,"items":     10.0000  }   ,
{"id":  6,"posx":     21.2132,"posy":     21.2132,"items":     30.0000  }   ,
{"id":  7,"posx":     17.6336,"posy":     24.2705,"items":     30.0000  }   ,
{"id":  8,"posx":     13.6197,"posy":     26.7302,"items":     10.0000  }   ,
{"id":  9,"posx":      9.2705,"posy":     28.5317,"items":     10.0000  }   ,
{"id": 10,"posx":      4.6930,"posy":     29.6306,"items":     30.0000  }   ,
{"id": 11,"posx":      0.0000,"posy":     30.0000,"items":     30.0000  }   ,
{"id": 12,"posx":     -4.6930,"posy":     29.6306,"items":     10.0000  }   ,
{"id": 13,"posx":     -9.2705,"posy":     28.5317,"items":     10.0000  }   ,
{"id": 14,"posx":    -13.6197,"posy":     26.7302,"items":     30.0000  }   ,
{"id": 15,"posx":    -17.6336,"posy":     24.2705,"items":     30.0000  }   ,
{"id": 16,"posx":    -21.2132,"posy":     21.2132,"items":     10.0000  }   ,
{"id": 17,"posx":    -24.2705,"posy":     17.6336,"items":     10.0000  }   ,
{"id": 18,"posx":    -26.7302,"posy":     13.6197,"items":     30.0000  }   ,
{"id": 19,"posx":    -28.5317,"posy":      9.2705,"items":     30.0000  }   ,
{"id": 20,"posx":    -29.6307,"posy":      4.6930,"items":     10.0000  }   ,
{"id": 21,"posx":    -30.0000,"posy":      0.0000,"items":     10.0000  }   ,
{"id": 22,"posx":    -29.6306,"posy":     -4.6930,"items":     30.0000  }   ,
{"id": 23,"posx":    -28.5317,"posy":     -9.2705,"items":     30.0000  }   ,
{"id": 24,"posx":    -26.7302,"posy":    -13.6197,"items":     10.0000  }   ,
{"id": 25,"posx":    -24.2705,"posy":    -17.6336,"items":     10.0000  }   ,
{"id": 26,"posx":    -21.2132,"posy":    -21.2132,"items":     30.0000  }   ,
{"id": 27,"posx":    -17.6336,"posy":    -24.2705,"items":     30.0000  }   ,
{"id": 28,"posx":    -13.6197,"posy":    -26.7302,"items":     10.0000  }   ,
{"id": 29,"posx":     -9.2705,"posy":    -28.5317,"items":     10.0000  }   ,
{"id": 30,"posx":     -4.6930,"posy":    -29.6307,"items":     30.0000  }   ,
{"id": 31,"posx":      0.0000,"posy":    -30.0000,"items":     30.0000  }   ,
{"id": 32,"posx":      4.6930,"posy":    -29.6306,"items":     10.0000  }   ,
{"id": 33,"posx":      9.2705,"posy":    -28.5317,"items":     10.0000  }   ,
{"id": 34,"posx":     13.6197,"posy":    -26.7302,"items":     30.0000  }   ,
{"id": 35,"posx":     17.6336,"posy":    -24.2705,"items":     30.0000  }   ,
{"id": 36,"posx":     21.2132,"posy":    -21.2132,"items":     10.0000  }   ,
{"id": 37,"posx":     24.2705,"posy":    -17.6336,"items":     10.0000  }   ,
{"id": 38,"posx":     26.7302,"posy":    -13.6197,"items":     30.0000  }   ,
{"id": 39,"posx":     28.5317,"posy":     -9.2705,"items":     30.0000  }   ,
{"id": 40,"posx":     29.6307,"posy":     -4.6930,"items":     10.0000  }   ,
{"id": 41,"posx":     60.0000,"posy":      0.0000,"items":     10.0000  }   ,
{"id": 42,"posx":     59.2613,"posy":      9.3861,"items":     30.0000  }   ,
{"id": 43,"posx":     57.0634,"posy":     18.5410,"items":     30.0000  }   ,
{"id": 44,"posx":     53.4604,"posy":     27.2394,"items":     10.0000  }   ,
{"id": 45,"posx":     48.5410,"posy":     35.2671,"items":     10.0000  }   ,
{"id": 46,"posx":     42.4264,"posy":     42.4264,"items":     30.0000  }   ,
{"id": 47,"posx":     35.2671,"posy":     48.5410,"items":     30.0000  }   ,
{"id": 48,"posx":     27.2394,"posy":     53.4604,"items":     10.0000  }   ,
{"id": 49,"posx":     18.5410,"posy":     57.0634,"items":     10.0000  }   ,
{"id": 50,"posx":      9.3861,"posy":     59.2613,"items":     30.0000  }   ,
{"id": 51,"posx":      0.0000,"posy":     60.0000,"items":     30.0000  }   ,
{"id": 52,"posx":     -9.3861,"posy":     59.2613,"items":     10.0000  }   ,
{"id": 53,"posx":    -18.5410,"posy":     57.0634,"items":     10.0000  }   ,
{"id": 54,"posx":    -27.2394,"posy":     53.4604,"items":     30.0000  }   ,
{"id": 55,"posx":    -35.2671,"posy":     48.5410,"items":     30.0000  }   ,
{"id": 56,"posx":    -42.4264,"posy":     42.4264,"items":     10.0000  }   ,
{"id": 57,"posx":    -48.5410,"posy":     35.2671,"items":     10.0000  }   ,
{"id": 58,"posx":    -53.4604,"posy":     27.2394,"items":     30.0000  }   ,
{"id": 59,"posx":    -57.0634,"posy":     18.5410,"items":     30.0000  }   ,
{"id": 60,"posx":    -59.2613,"posy":      9.3861,"items":     10.0000  }   ,
{"id": 61,"posx":    -60.0000,"posy":      0.0000,"items":     10.0000  }   ,
{"id": 62,"posx":    -59.2613,"posy":     -9.3861,"items":     30.0000  }   ,
{"id": 63,"posx":    -57.0634,"posy":    -18.5410,"items":     30.0000  }   ,
{"id": 64,"posx":    -53.4604,"posy":    -27.2394,"items":     10.0000  }   ,
{"id": 65,"posx":    -48.5410,"posy":    -35.2671,"items":     10.0000  }   ,
{"id": 66,"posx":    -42.4264,"posy":    -42.4264,"items":     30.0000  }   ,
{"id": 67,"posx":    -35.2671,"posy":    -48.5410,"items":     30.0000  }   ,
{"id": 68,"posx":    -27.2394,"posy":    -53.4604,"items":     10.0000  }   ,
{"id": 69,"posx":    -18.5410,"posy":    -57.0634,"items":     10.0000  }   ,
{"id": 70,"posx":     -9.3861,"posy":    -59.2613,"items":     30.0000  }   ,
{"id": 71,"posx":      0.0000,"posy":    -60.0000,"items":     30.0000  }   ,
{"id": 72,"posx":      9.3861,"posy":    -59.2613,"items":     10.0000  }   ,
{"id": 73,"posx":     18.5410,"posy":    -57.0634,"items":     10.0000  }   ,
{"id": 74,"posx":     27.2394,"posy":    -53.4604,"items":     30.0000  }   ,
{"id": 75,"posx":     35.2671,"posy":    -48.5410,"items":     30.0000  }   ,
{"id": 76,"posx":     42.4264,"posy":    -42.4264,"items":     10.0000  }   ,
{"id": 77,"posx":     48.5410,"posy":    -35.2671,"items":     10.0000  }   ,
{"id": 78,"posx":     53.4604,"posy":    -27.2394,"items":     30.0000  }   ,
{"id": 79,"posx":     57.0634,"posy":    -18.5410,"items":     30.0000  }   ,
{"id": 80,"posx":     59.2613,"posy":     -9.3861,"items":     10.0000  }   ,
{"id": 81,"posx":     90.0000,"posy":      0.0000,"items":     10.0000  }   ,
{"id": 82,"posx":     88.8920,"posy":     14.0791,"items":     30.0000  }   ,
{"id": 83,"posx":     85.5951,"posy":     27.8115,"items":     30.0000  }   ,
{"id": 84,"posx":     80.1906,"posy":     40.8591,"items":     10.0000  }   ,
{"id": 85,"posx":     72.8115,"posy":     52.9007,"items":     10.0000  }   ,
{"id": 86,"posx":     63.6396,"posy":     63.6396,"items":     30.0000  }   ,
{"id": 87,"posx":     52.9007,"posy":     72.8115,"items":     30.0000  }   ,
{"id": 88,"posx":     40.8591,"posy":     80.1906,"items":     10.0000  }   ,
{"id": 89,"posx":     27.8115,"posy":     85.5951,"items":     10.0000  }   ,
{"id": 90,"posx":     14.0791,"posy":     88.8920,"items":     30.0000  }   ,
{"id": 91,"posx":      0.0000,"posy":     90.0000,"items":     30.0000  }   ,
{"id": 92,"posx":    -14.0791,"posy":     88.8920,"items":     10.0000  }   ,
{"id": 93,"posx":    -27.8115,"posy":     85.5951,"items":     10.0000  }   ,
{"id": 94,"posx":    -40.8591,"posy":     80.1906,"items":     30.0000  }   ,
{"id": 95,"posx":    -52.9007,"posy":     72.8115,"items":     30.0000  }   ,
{"id": 96,"posx":    -63.6396,"posy":     63.6396,"items":     10.0000  }   ,
{"id": 97,"posx":    -72.8115,"posy":     52.9007,"items":     10.0000  }   ,
{"id": 98,"posx":    -80.1906,"posy":     40.8591,"items":     30.0000  }   ,
{"id": 99,"posx":    -85.5951,"posy":     27.8115,"items":     30.0000  }   ,
{"id":100,"posx":    -88.8920,"posy":     14.0791,"items":     10.0000  }   ,
{"id":101,"posx":    -90.0000,"posy":      0.0000,"items":     10.0000  }   ,
{"id":102,"posx":    -88.8920,"posy":    -14.0791,"items":     30.0000  }   ,
{"id":103,"posx":    -85.5951,"posy":    -27.8115,"items":     30.0000  }   ,
{"id":104,"posx":    -80.1906,"posy":    -40.8592,"items":     10.0000  }   ,
{"id":105,"posx":    -72.8115,"posy":    -52.9007,"items":     10.0000  }   ,
{"id":106,"posx":    -63.6396,"posy":    -63.6396,"items":     30.0000  }   ,
{"id":107,"posx":    -52.9007,"posy":    -72.8115,"items":     30.0000  }   ,
{"id":108,"posx":    -40.8591,"posy":    -80.1906,"items":     10.0000  }   ,
{"id":109,"posx":    -27.8115,"posy":    -85.5951,"items":     10.0000  }   ,
{"id":110,"posx":    -14.0791,"posy":    -88.8920,"items":     30.0000  }   ,
{"id":111,"posx":      0.0000,"posy":    -90.0000,"items":     30.0000  }   ,
{"id":112,"posx":     14.0791,"posy":    -88.8920,"items":     10.0000  }   ,
{"id":113,"posx":     27.8115,"posy":    -85.5951,"items":     10.0000  }   ,
{"id":114,"posx":     40.8592,"posy":    -80.1906,"items":     30.0000  }   ,
{"id":115,"posx":     52.9007,"posy":    -72.8115,"items":     30.0000  }   ,
{"id":116,"posx":     63.6396,"posy":    -63.6396,"items":     10.0000  }   ,
{"id":117,"posx":     72.8115,"posy":    -52.9007,"items":     10.0000  }   ,
{"id":118,"posx":     80.1906,"posy":    -40.8591,"items":     30.0000  }   ,
{"id":119,"posx":     85.5951,"posy":    -27.8115,"items":     30.0000  }   ,
{"id":120,"posx":     88.8920,"posy":    -14.0791,"items":     10.0000  }   ,
{"id":121,"posx":    120.0000,"posy":      0.0000,"items":     10.0000  }   ,
{"id":122,"posx":    118.5226,"posy":     18.7721,"items":     30.0000  }   ,
{"id":123,"posx":    114.1268,"posy":     37.0820,"items":     30.0000  }   ,
{"id":124,"posx":    106.9208,"posy":     54.4789,"items":     10.0000  }   ,
{"id":125,"posx":     97.0820,"posy":     70.5342,"items":     10.0000  }   ,
{"id":126,"posx":     84.8528,"posy":     84.8528,"items":     30.0000  }   ,
{"id":127,"posx":     70.5342,"posy":     97.0820,"items":     30.0000  }   ,
{"id":128,"posx":     54.4789,"posy":    106.9208,"items":     10.0000  }   ,
{"id":129,"posx":     37.0820,"posy":    114.1268,"items":     10.0000  }   ,
{"id":130,"posx":     18.7721,"posy":    118.5226,"items":     30.0000  }   ,
{"id":131,"posx":      0.0000,"posy":    120.0000,"items":     30.0000  }   ,
{"id":132,"posx":    -18.7721,"posy":    118.5226,"items":     10.0000  }   ,
{"id":133,"posx":    -37.0820,"posy":    114.1268,"items":     10.0000  }   ,
{"id":134,"posx":    -54.4789,"posy":    106.9208,"items":     30.0000  }   ,
{"id":135,"posx":    -70.5342,"posy":     97.0820,"items":     30.0000  }   ,
{"id":136,"posx":    -84.8528,"posy":     84.8528,"items":     10.0000  }   ,
{"id":137,"posx":    -97.0820,"posy":     70.5342,"items":     10.0000  }   ,
{"id":138,"posx":   -106.9208,"posy":     54.4789,"items":     30.0000  }   ,
{"id":139,"posx":   -114.1268,"posy":     37.0820,"items":     30.0000  }   ,
{"id":140,"posx":   -118.5226,"posy":     18.7721,"items":     10.0000  }   ,
{"id":141,"posx":   -120.0000,"posy":      0.0000,"items":     10.0000  }   ,
{"id":142,"posx":   -118.5226,"posy":    -18.7721,"items":     30.0000  }   ,
{"id":143,"posx":   -114.1268,"posy":    -37.0821,"items":     30.0000  }   ,
{"id":144,"posx":   -106.9208,"posy":    -54.4789,"items":     10.0000  }   ,
{"id":145,"posx":    -97.0820,"posy":    -70.5342,"items":     10.0000  }   ,
{"id":146,"posx":    -84.8528,"posy":    -84.8528,"items":     30.0000  }   ,
{"id":147,"posx":    -70.5342,"posy":    -97.0820,"items":     30.0000  }   ,
{"id":148,"posx":    -54.4788,"posy":   -106.9208,"items":     10.0000  }   ,
{"id":149,"posx":    -37.0820,"posy":   -114.1268,"items":     10.0000  }   ,
{"id":150,"posx":    -18.7721,"posy":   -118.5226,"items":     30.0000  }   ,
{"id":151,"posx":      0.0000,"posy":   -120.0000,"items":     30.0000  }   ,
{"id":152,"posx":     18.7722,"posy":   -118.5226,"items":     10.0000  }   ,
{"id":153,"posx":     37.0821,"posy":   -114.1268,"items":     10.0000  }   ,
{"id":154,"posx":     54.4789,"posy":   -106.9208,"items":     30.0000  }   ,
{"id":155,"posx":     70.5342,"posy":    -97.0820,"items":     30.0000  }   ,
{"id":156,"posx":     84.8528,"posy":    -84.8528,"items":     10.0000  }   ,
{"id":157,"posx":     97.0821,"posy":    -70.5342,"items":     10.0000  }   ,
{"id":158,"posx":    106.9208,"posy":    -54.4788,"items":     30.0000  }   ,
{"id":159,"posx":    114.1268,"posy":    -37.0820,"items":     30.0000  }   ,
{"id":160,"posx":    118.5226,"posy":    -18.7721,"items":     10.0000  }   ,
{"id":161,"posx":    150.0000,"posy":      0.0000,"items":     10.0000  }   ,
{"id":162,"posx":    148.1532,"posy":     23.4652,"items":     30.0000  }   ,
{"id":163,"posx":    142.6585,"posy":     46.3526,"items":     30.0000  }   ,
{"id":164,"posx":    133.6510,"posy":     68.0986,"items":     10.0000  }   ,
{"id":165,"posx":    121.3525,"posy":     88.1678,"items":     10.0000  }   ,
{"id":166,"posx":    106.0660,"posy":    106.0660,"items":     30.0000  }   ,
{"id":167,"posx":     88.1678,"posy":    121.3526,"items":     30.0000  }   ,
{"id":168,"posx":     68.0986,"posy":    133.6510,"items":     10.0000  }   ,
{"id":169,"posx":     46.3525,"posy":    142.6585,"items":     10.0000  }   ,
{"id":170,"posx":     23.4652,"posy":    148.1533,"items":     30.0000  }   ,
{"id":171,"posx":      0.0000,"posy":    150.0000,"items":     30.0000  }   ,
{"id":172,"posx":    -23.4652,"posy":    148.1532,"items":     10.0000  }   ,
{"id":173,"posx":    -46.3526,"posy":    142.6585,"items":     10.0000  }   ,
{"id":174,"posx":    -68.0986,"posy":    133.6510,"items":     30.0000  }   ,
{"id":175,"posx":    -88.1678,"posy":    121.3525,"items":     30.0000  }   ,
{"id":176,"posx":   -106.0660,"posy":    106.0660,"items":     10.0000  }   ,
{"id":177,"posx":   -121.3526,"posy":     88.1678,"items":     10.0000  }   ,
{"id":178,"posx":   -133.6510,"posy":     68.0986,"items":     30.0000  }   ,
{"id":179,"posx":   -142.6585,"posy":     46.3525,"items":     30.0000  }   ,
{"id":180,"posx":   -148.1533,"posy":     23.4652,"items":     10.0000  }   ,
{"id":181,"posx":   -150.0000,"posy":      0.0000,"items":     10.0000  }   ,
{"id":182,"posx":   -148.1532,"posy":    -23.4652,"items":     30.0000  }   ,
{"id":183,"posx":   -142.6585,"posy":    -46.3526,"items":     30.0000  }   ,
{"id":184,"posx":   -133.6510,"posy":    -68.0986,"items":     10.0000  }   ,
{"id":185,"posx":   -121.3525,"posy":    -88.1678,"items":     10.0000  }   ,
{"id":186,"posx":   -106.0660,"posy":   -106.0660,"items":     30.0000  }   ,
{"id":187,"posx":    -88.1678,"posy":   -121.3526,"items":     30.0000  }   ,
{"id":188,"posx":    -68.0986,"posy":   -133.6510,"items":     10.0000  }   ,
{"id":189,"posx":    -46.3525,"posy":   -142.6585,"items":     10.0000  }   ,
{"id":190,"posx":    -23.4652,"posy":   -148.1533,"items":     30.0000  }   ,
{"id":191,"posx":      0.0000,"posy":   -150.0000,"items":     30.0000  }   ,
{"id":192,"posx":     23.4652,"posy":   -148.1532,"items":     10.0000  }   ,
{"id":193,"posx":     46.3526,"posy":   -142.6585,"items":     10.0000  }   ,
{"id":194,"posx":     68.0986,"posy":   -133.6510,"items":     30.0000  }   ,
{"id":195,"posx":     88.1678,"posy":   -121.3525,"items":     30.0000  }   ,
{"id":196,"posx":    106.0660,"posy":   -106.0660,"items":     10.0000  }   ,
{"id":197,"posx":    121.3526,"posy":    -88.1678,"items":     10.0000  }   ,
{"id":198,"posx":    133.6510,"posy":    -68.0986,"items":     30.0000  }   ,
{"id":199,"posx":    142.6585,"posy":    -46.3525,"items":     30.0000  }   ,
{"id":200,"posx":    148.1533,"posy":    -23.4651,"items":     10.0000  }   ,
{"id":201,"posx":    180.0000,"posy":       0.0000,"items":     10.0000  }   ,
{"id":202,"posx":    177.7839,"posy":     28.1582,"items":     30.0000  }   ,
{"id":203,"posx":    171.1902,"posy":     55.6231,"items":     30.0000  }   ,
{"id":204,"posx":    160.3812,"posy":     81.7183,"items":     10.0000  }   ,
{"id":205,"posx":    145.6231,"posy":    105.8013,"items":     10.0000  }   ,
{"id":206,"posx":    127.2792,"posy":    127.2792,"items":     30.0000  }   ,
{"id":207,"posx":    105.8013,"posy":    145.6231,"items":     30.0000  }   ,
{"id":208,"posx":     81.7183,"posy":    160.3812,"items":     10.0000  }   ,
{"id":209,"posx":     55.6231,"posy":    171.1902,"items":     10.0000  }   ,
{"id":210,"posx":     28.1582,"posy":    177.7839,"items":     30.0000  }   ,
{"id":211,"posx":      0.0000,"posy":    180.0000,"items":     30.0000  }   ,
{"id":212,"posx":    -28.1582,"posy":    177.7839,"items":     10.0000  }   ,
{"id":213,"posx":    -55.6231,"posy":    171.1902,"items":     10.0000  }   ,
{"id":214,"posx":    -81.7183,"posy":    160.3812,"items":     30.0000  }   ,
{"id":215,"posx":   -105.8014,"posy":    145.6230,"items":     30.0000  }   ,
{"id":216,"posx":   -127.2792,"posy":    127.2792,"items":     10.0000  }   ,
{"id":217,"posx":   -145.6231,"posy":    105.8013,"items":     10.0000  }   ,
{"id":218,"posx":   -160.3812,"posy":     81.7183,"items":     30.0000  }   ,
{"id":219,"posx":   -171.1902,"posy":     55.6230,"items":     30.0000  }   ,
{"id":220,"posx":   -177.7839,"posy":     28.1582,"items":     10.0000  }   ,
{"id":221,"posx":   -180.0000,"posy":       0.0000,"items":     10.0000  }   ,
{"id":222,"posx":   -177.7839,"posy":    -28.1582,"items":     30.0000  }   ,
{"id":223,"posx":   -171.1902,"posy":    -55.6231,"items":     30.0000  }   ,
{"id":224,"posx":   -160.3812,"posy":    -81.7183,"items":     10.0000  }   ,
{"id":225,"posx":   -145.6230,"posy":   -105.8014,"items":     10.0000  }   ,
{"id":226,"posx":   -127.2792,"posy":   -127.2792,"items":     30.0000  }   ,
{"id":227,"posx":   -105.8013,"posy":   -145.6231,"items":     30.0000  }   ,
{"id":228,"posx":    -81.7183,"posy":   -160.3812,"items":     10.0000  }   ,
{"id":229,"posx":    -55.6230,"posy":   -171.1902,"items":     10.0000  }   ,
{"id":230,"posx":    -28.1582,"posy":   -177.7839,"items":     30.0000  }   ,
{"id":231,"posx":      0.0000,"posy":   -180.0000,"items":     30.0000  }   ,
{"id":232,"posx":     28.1582,"posy":   -177.7839,"items":     10.0000  }   ,
{"id":233,"posx":     55.6231,"posy":   -171.1902,"items":     10.0000  }   ,
{"id":234,"posx":     81.7183,"posy":   -160.3812,"items":     30.0000  }   ,
{"id":235,"posx":    105.8014,"posy":   -145.6230,"items":     30.0000  }   ,
{"id":236,"posx":    127.2792,"posy":   -127.2792,"items":     10.0000  }   ,
{"id":237,"posx":    145.6231,"posy":   -105.8013,"items":     10.0000  }   ,
{"id":238,"posx":    160.3812,"posy":    -81.7183,"items":     30.0000  }   ,
{"id":239,"posx":    171.1902,"posy":    -55.6230,"items":     30.0000  }   ,
{"id":240,"posx":    177.7839,"posy":    -28.1582,"items":     10.0000  }  
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

var nTrucks = 10;
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