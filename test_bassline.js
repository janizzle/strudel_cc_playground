const cps = 30/60/4;

stack(
note(`
24 26 24 [29*4 ~*4]
`)
  .sound("sine")
  .distort("1:.5")
  .gain(1)
  .slow(4)
  ._scope(),
  
note(`
36 ~ ~ [~*4 42*4]
`)
  .sound("sine")
  .unison("8")
  .distort("1:.5")
  .cutoff(140)
  .gain(1)
  .slow(4)
  ._scope()
)
