const leadPattern1 = irand(8)
  .n()
  .struct("1 0 1 0 <0 1> 1*2 [1 0] 0")
  .scale("F5:major")
  .sound("gm_blown_bottle:2")
  .degradeBy(.2)
  .room(.5, .5)
  .roomsize(4)
  .vib("10:.2");

$: seq(
  leadPattern1
   .ribbon(850, 1),
  leadPattern1
   .ribbon(521, 1),
  leadPattern1
   .ribbon(590, 2)
  )
  .slow(4)
  .gain(0.3)
  ._pianoroll()



$: 
  sound("bd")
    .struct("1 0 1 0 <0 1> 1*2 [1 0] 0")
  .degradeBy(.2)
  .rib(660, 1)
    .bank("tr909")
    ._punchcard()
    .slow(4)

$: note("26")
  .struct("1 0 1 0 <0 1> 1*2 [1 0] 0")
  .rib(660, 1)
  .sound("sine")
  .shape(0.6)
  .drive(0.6)
  .lpf(200)
  .gain(1)
  .slow(4)
  ._scope()._punchcard()
