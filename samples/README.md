# Samples

This directory is for custom audio samples used in Strudel compositions.

## Supported Formats

Strudel typically works with:
- `.wav` files
- `.mp3` files
- `.ogg` files

## Usage in Strudel

To use custom samples in Strudel:

```javascript
// Load a custom sample
samples({
  mysample: '/path/to/your/sample.wav'
})

// Use it in a pattern
s("mysample").n(0)
```

## Organization

Consider organizing samples by type:
- `drums/` - Kick, snare, hihat, etc.
- `melodic/` - Synth sounds, keys, etc.
- `fx/` - Sound effects and transitions
- `vocals/` - Vocal samples and phrases

## Note

Most Strudel compositions use the built-in sample libraries. This directory is optional and only needed if you're using custom audio files.
