// Euclidean Rhythm Experiment
// Exploring euclidean rhythm generation in Strudel

// Test different euclidean patterns
// euclid(pulses, steps) creates rhythms based on Euclidean algorithm

// Classic 3/8 pattern (common in many musical traditions)
s("bd").euclid(3, 8).bank("RolandTR808");

// Try uncommenting these to experiment:
// s("sd").euclid(5, 8).bank("RolandTR808");
// s("hh").euclid(7, 16).bank("RolandTR808");

// Combine multiple euclidean patterns:
// stack(
//   s("bd").euclid(3, 8),
//   s("sd").euclid(5, 8).late(0.125),
//   s("hh").euclid(7, 16)
// ).bank("RolandTR808");
