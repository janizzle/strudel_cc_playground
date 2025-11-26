const cps = 30/60/4;

samples({
tr: 'triangle.wav',
}, 'https://raw.githubusercontent.com/janizzle/strudel_cc_playground/main/samples/instruments/');
samples({
sample3: 'sample_3.wav',
}, 'https://raw.githubusercontent.com/janizzle/strudel_cc_playground/main/samples/melodies/');

stack(
  sound("sample3")
  .loopAt(8)
  .unison("8")
  .detune(1)
  .release(1.5)
  .vib("5:0.7")
  .gain(1)
  ._scope()
  ,
note(`36 38 36 41`)
  .sound("sine")
  .gain(0.2)
  .slow(4)
  ._scope(),
note(`24 26 24 29`)
  .sound("sine")
  .gain(1)
  .slow(4)
  ._scope(),
  sound(`[~ hh*8] ~ [~ hh*4] ~`)
  .bank("rolandtr808")
  .vib("10:0.7")
  .slow(4)
  .gain(0.1)
  ._pianoroll()
  
  ,
  sound(`[~ bd*8] ~ [~ bd*2] ~`)
  .bank("rolandtr808")
  .slow(4)
  .gain(1)
  ._pianoroll()
  
)