setcps(180/60/4)

let pianoStruct = irand(8).n()
  .sound("gm_epiano1")
  .struct("{ 1 1 0 1 0 0 1 0 }%4")

$: sound("sbd!2")

$: seq(
pianoStruct.scale("a#:minor")
  .rib(7, 2)
  ._pianoroll(), pianoStruct.scale("c4:minor")
  .rib(7, 2)
  ._pianoroll())
