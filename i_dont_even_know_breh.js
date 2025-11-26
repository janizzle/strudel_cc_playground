const cps = 120/60/4;

samples({
tr: 'triangle.wav',
}, 'https://raw.githubusercontent.com/janizzle/strudel_cc_playground/main/samples/instruments/');
samples({
sample_4: 'smple_4.wav',
}, 'https://raw.githubusercontent.com/janizzle/strudel_cc_playground/main/samples/melodies/');

stack(
  sound("sample_4")
  .loopAt(4)
  .gain(2)
  .room(1, 1)
  ._scope(),
 note("24 24 26 [29 24*3]")
  .add(sound("0,.1"))
  .sound("sine")
  .gain(2)
  .slow(4)
  ._scope(),
  sound(`bd ~ bd*4 ~ ~ bd [bd bd*4] ~`)
  .bank("rolandtr909")
  .gain(0.5)
  .slow(4)
  ._pianoroll(),
  sound(`~ ~ sd*4 ~ ~ ~ [~ sd*4] sd*8`)
  .bank("rolandtr909")
  .gain(0.2)
  .slow(4)
  ._pianoroll(),
  sound(`~ ~ ~ ~ ~ ~ ~ [~*7 tr*8]`)
  .room(1, 1)
  .distort("1:0.8")
  .gain(0.1)
  .slow(4)
  ._pianoroll()
  )