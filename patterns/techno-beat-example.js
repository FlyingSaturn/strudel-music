// Simple Techno Beat Example
// Tempo: 128 BPM
// Description: A basic four-on-the-floor techno pattern with bassline

// Kick drum pattern - plays on every beat
const kick = s("bd").bank("RolandTR909");

// Hi-hat pattern - plays on 8th notes
const hihat = s("hh").bank("RolandTR909").fast(2);

// Snare on 2 and 4
const snare = s("~ sd ~ sd").bank("RolandTR909");

// Bassline - simple repeating pattern
const bass = note("c2 c2 eb2 g2")
  .s("sawtooth")
  .lpf(800)
  .lpq(5);

// Stack all patterns and play
stack(
  kick,
  hihat,
  snare,
  bass
).cpm(128/4);
