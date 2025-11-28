const cps = 200/60/4

setcps(cps)


let shaker = sound("shaker_small")
  .lpf(cat(2000, 5000))
  .fast(5)

let bass808 = irand(8)
  .n()
  .struct("x x x x")
  .scale("c1:minor")
  .sound("808")
  .shape(.7)
  .drive(0.25)
  .lp(350)
  .mul(1 + lfo(0.50) * 0.50)
  .decay(2)
  .gain(.2)
  .fast(2)
  .ribbon(7, 1)

let clapLine = stack(sound("bd")
  .struct("x")
  .bank("rolandtr909")
  .gain("<0.5 1>")
  .distort("1:.2")
  .lpf(cat(2000, 5000))
  .shape(.2)
  .fast(4),
/* sound("db")
  .bank("rolandtr626:2")
  .struct("~ x ~ x")
  .gain("<0.5 1>")
  .distort("1:.2")
  .shape(.2)
  .lpf(cat(2000, 5000)) */
)
  

let piano = n(
  irand(8),
  irand(8),
  irand(8)
)
  .struct("x x x x")
  .sound("gm_epiano1")
  .decay(.1)
  .scale("g5:minor")
  .clip(2)
  .lpf(cat(2000, 5000))
  .gain(rand.range(0.3, 0.4))
  .room(1, 1)
  .roomsize(20);


let pianoTrack = seq(
  piano.ribbon(7, 1),
  piano.ribbon(9, 1),
  piano.ribbon(20, 1),
  piano.ribbon(80, 1),
  piano.ribbon(50, 1),
).slow(12);

let kick = sound("sbd")
  .lpf(cat(1000, 5000))
  .fast(4)

let sawtooth = note(irand(8))
  .struct("x x*2 x x")
  .sound("sawtooth")
  .scale("c1:minor")
  .shape(.6)
  .lpf(200)
  .ribbon(7, 1)
  .slow(8)
  .gain(1.2)



//////////////////////////////
// PR: https://github.com/tidalcycles/strudel/issues/670
let binpatn = (dec, len) => seq(
  ...(typeof dec === 'string' ? [1] :
    dec.toString(2)
    .padStart(len, '0')
    .split('')
    .map(Number)
     )
)
// registers a binpat mask with the given length
let maskn = (n) => register('mask'+n, (dec, pat) => 
  pat.mask(
    reify(dec).fmap(v => binpatn(v, n)).squeezeJoin()
  ), false)

let mask2 = maskn(2)
let mask3 = maskn(3)
let mask4 = maskn(4)
//////////////////////////////


stack(
  pianoTrack   .mask4("< x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x >"),
  kick         .mask4("< 0 0 0 x x x x x x x x x x x x x x x x x 0 0 0 0 x x x x x x >"),
  shaker       .mask4("< 0 0 0 x x x x x x x x x x x x x x x x x 0 0 0 0 x x x x x x >"),
  clapLine     .mask4("< 0 0 0 0 x x x x x x x x x x x x x x x x 0 0 0 0 x x x x x x >"),
  /* bass808      .mask4("< 0 0 0 0 x x x x x x x x x x x x x x x x 0 0 0 0 x x x x x x >"), */
  sawtooth     .mask4("< 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 x x x x 0 0 0 0 0 0 >"),
)
