const cps = 120/60/4;
const lenSec = 12;
const factor = lenSec * cps;

// sliders (applies at next cycle interval)
const lpfSampleSlider = slider(2000, 200, 2000, 1);
const volume808 = slider(1, 0, 1, 1);
const volumeHats = slider(1, 0, 1, 1);
const volumeKicks = slider(1, 0, 1, 1);

setcps(cps)

samples({
tr: 'triangle.wav',
}, 'https://raw.githubusercontent.com/janizzle/strudel_cc_playground/main/samples/instruments/');
samples({
vecfx: 'sample_2.wav',
}, 'https://raw.githubusercontent.com/janizzle/strudel_cc_playground/main/samples/melodies/');

stack(
  // VCE sample
  sound("vecfx")
  .loopAt(8)
  .unison("10")
  .detune(1)
  .crush(14)
  .vib("10:0.7")
  .room(1, 1)
  .lpf(lpfSampleSlider)
  .distort("2:0.8")
  .gain(0.3)
  ._scope(),

  // bassline
 note("<f1 f1 c2 b0>")
  .add(note("0,.1"))
  .sound("808")
  .cutoff(140)
  .gain(2)
  .room(0.7, 1)
  ._scope(),
  sound("~ hh ~ ~  ~ hh ~ ~  ~ hh ~ ~  ~ hh ~ hh*8")
  .slow(4)
  .gain(volumeHats)
  ._pianoroll(),
  sound("~ bd ~ ~  ~ bd ~ ~  ~ bd ~ ~  ~ bd ~ bd*8")
  .bank("RolandTR909")
  .slow(4)
  .gain(volumeKicks)
  ._pianoroll(),
 sound("~ ~ sd ~")
  .bank("RolandTR909")
  .gain(1)
  .detune(1)
  .crush(10)
  .room(1, 1)
  .distort("1:0.8")
  .gain(0.8)
  .clip(0.3)
  .sustain(1)
  .attack(0)
  .decay(0.5)
  ._pianoroll() , 
  
  sound("~ ~ tr ~ ~ ~ tr ~ ~ ~ tr ~ ~ ~ tr*8 ~")
  .room(1, 1)
  .distort("1:0.8")
  .slow(4)
  .gain(0.4)
  ._pianoroll(),
)
