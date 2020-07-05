<template>
  <div id="views">
   <router-view/>
  </div>
</template>

<script>

export default {
name:'views',
mounted() {
  this.init();
},
methods: {
  // init() {
  //   const LongMap = window.LongMap;
  //   const map = new LongMap("app");
  //   var point= new LongMap.Point3(114.4712054185026,22.596857503259457,800)
  //   map.move(point);

  //   map.addUrlProvider({
  //     url:'http://172.21.112.113:9008/model/tiles/{z}/{x}/{y}.jpg',
  //     maximumlevel:19
  //   });

  //   const tlayer =new LongMap.Layer();
  //   map.addLayer(tlayer);
  // }
  init(){
    const LongMap = window.LongMap;
    const map = new LongMap("views");
    const point= new LongMap.Point3(114.4712054185026,22.596857503259457,8000)
    map.move(point);
    // const layer=new LongMap.Layer();   //创建图层
    // map.addLayer(layer);              //添加图层
    // const maker=new LongMap.Sprite({
    //   //url: "./02.jpg",   //图片路径
    //   url: "http://172.21.112.113:9008/timg.jpg",   //图片路径
    //   position: new LongMap.Point3(114.41653011579619,22.636206576035732,68.78956285276209),                          //位置
    //   scale:0.1
    // });
    // maker.iid = '123'
    // layer.addFeature(maker);          //添加



    // let Arr = []
    // let dom = map.addEventListener('click',function(e){
    //   let feature=e.features[0];
    //   if(feature&&feature.iid === '123'){
    //     feature.setScale(2)
    //   }
    // })
    map.addUrlProvider({
      url:'http://172.21.112.113:9008/model/tiles/{z}/{x}/{y}.jpg',
      maximumLevel:19
    });

    map.reset({
      "position":new LongMap.Point3 (114.41709070444583, 22.63002556616557,  241.7376251724234),
      "roll": 0.00030409223957777884,
      "heading": 0.11951883145548553,
      "pitch": -21.187202597540256

    })
    const LS = new LongMap.Tileset({
      url:'http://172.21.112.113:9008/model/3dtiles/LS/tileset.json',
      position:new LongMap.Point3(114.41721,22.63856000000002,-22),
      maximumScreenSpaceError:64,
      maximumMemoryUsage:1024,
      skipScreenSpaceErrorFactor:64,
      skipLevelOfDetail:true
    });
    //添加模型
    map.addTileset(LS)
    const tlayer=new LongMap.Layer();
    map.addLayer(tlayer);
      }
    }
}
</script>
<style>
 .views{
   height:100%;
   background: url('../assets/images/transparent.png');
   background-size: 100% 100%;
   position: relative;
 }
</style>
