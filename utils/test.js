
map = new LongMap("app");
var point= new LongMap.Point3(114.4712054185026,22.596857503259457,8000)

map.move(point);

layer=new LongMap.Layer();   //创建图层
map.addLayer(layer);              //添加图层

// var maker=new LongMap.Sprite({
// 	// position: new LongMap.Point3(114.02186050762205, 22.694028783381285,20)  //位置
// 	position: new LongMap.Point3(114.47539252402983,22.596239308566947, -0.002641940386928465),                          //位置
// 	scale:100
// });
// layer.addFeature(maker);          //添加

maker=new LongMap.Sprite({
	//url: "./02.jpg",   //图片路径
	url: "http://172.21.112.113:9008/timg.jpg",   //图片路径
	position: new LongMap.Point3(114.41653011579619,22.636206576035732,68.78956285276209),                          //位置
	scale:0.1
});

maker.iid = '123'

layer.addFeature(maker);          //添加




//给地图绑定点击事件
// map.addEventListener('click',function(e){
// 	console.log(e)
// })
let Arr = []
let dom = map.addEventListener('click',function(e){
	// console.log(e)
	//  console.log(e.features)
	// //console.log(e.features[0].url)	
	//  Arr.push(e.features)
	let feature=e.features[0];
	 if(feature&&feature.iid === '123'){
		feature.setScale(2)
	}
	 
})


// Arr.addEventListener('click',function(e){
// 	console.log(123)
// })


let provider=map.addUrlProvider({
	url:'http://172.21.112.113:9008/model/tiles/{z}/{x}/{y}.jpg',
	maximumLevel:19
});

map.reset({
	"position":new LongMap.Point3 (114.41709070444583, 22.63002556616557,  241.7376251724234),
	"roll": 0.00030409223957777884,
	"heading": 0.11951883145548553,
	"pitch": -21.187202597540256

})

// heading: 0.11951883145548553
// height: 241.7376251724234
// pitch: -21.187202597540256
// position: LongMap.Point3 {lon: 114.41709070444583, lat: 22.63002556616557, z: 241.7376251724234, spaceCoordinate: Cartesian3}
// roll: 0.00030409223957777884



 LS = new LongMap.Tileset({
	url:'http://172.21.112.113:9008/model/3dtiles/LS/tileset.json',
	position:new LongMap.Point3(114.41721,22.63856000000002,-22),
	maximumScreenSpaceError:64,
	maximumMemoryUsage:1024,
	skipScreenSpaceErrorFactor:64,
	skipLevelOfDetail:true
});
//添加模型
map.addTileset(LS)


tlayer=new LongMap.Layer();
map.addLayer(tlayer);