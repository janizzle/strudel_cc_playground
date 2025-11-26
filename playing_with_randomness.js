setcps(0.3)

samples({
tr: 'triangle.wav',
}, 'https://raw.githubusercontent.com/janizzle/strudel_cc_playground/main/samples/instruments/');
samples({
sample_3: 'sample_3.wav',
}, 'https://raw.githubusercontent.com/janizzle/strudel_cc_playground/main/samples/melodies/');




stack(sound("sample_3").loopAt(8).gain(.6),
sound("sbd!4")
  .degradeBy(.3)
  ._pianoroll()
  ._scope()

,
  
  sound("hh:2!8")
  .gain(rand.range(.1, .5))
  .degradeBy(rand.range(.2, .5))
  ._pianoroll()

,

  note("24 24*3 ~ 29")
  .sound("808")
  .distort("1:.5")
  .shape(.7)
  .gain(2)
  ._scope()
)
