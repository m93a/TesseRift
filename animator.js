window.addEventListener('load',function(){

return;

var encoder = new GIFEncoder();
encoder.setRepeat(0);
encoder.start();

encoder.setDelay(1000);
encoder.addFrame(viewport.context);
encoder.setDelay(100);

var i = 30;
while(i--){
  shape.rotations.xz += .05;
  redraw();
  encoder.addFrame(viewport.context);
}

encoder.finish();
location.href = "data:image/gif;base64,"+btoa( encoder.stream().getData() );


});