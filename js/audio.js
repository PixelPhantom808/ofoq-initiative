/**
 * Mechanical Drilling & Event Sound Engine
 * Synthesizes rotary drilling churn, rock friction, seismic tremor, and oil eruption.
 * (Ambient wind/ocean drone removed per user request).
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.initialized = false;
    this.drillOsc1 = null;
    this.drillOsc2 = null;
    this.drillNoise = null;
    this.drillGain = null;
    this.isDrilling = false;
  }

  init() {
    if (this.initialized && this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return;
    }
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio API blocked or not supported:', e);
    }
  }

  createNoiseBuffer() {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  startDrillingSound(intensity = 0.5) {
    if (!this.ctx) this.init();
    if (!this.ctx || this.isDrilling) return;
    try {
      this.isDrilling = true;
      const now = this.ctx.currentTime;

      this.drillGain = this.ctx.createGain();
      this.drillGain.gain.setValueAtTime(0.01, now);
      this.drillGain.gain.linearRampToValueAtTime(0.28, now + 0.1);

      // Low mechanical motor drone
      this.drillOsc1 = this.ctx.createOscillator();
      this.drillOsc1.type = 'sawtooth';
      this.drillOsc1.frequency.setValueAtTime(65 + intensity * 45, now);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(240 + intensity * 220, now);

      // Secondary rotary teeth clatter
      this.drillOsc2 = this.ctx.createOscillator();
      this.drillOsc2.type = 'square';
      this.drillOsc2.frequency.setValueAtTime(130 + intensity * 70, now);
      const filter2 = this.ctx.createBiquadFilter();
      filter2.type = 'bandpass';
      filter2.frequency.setValueAtTime(460, now);
      filter2.Q.setValueAtTime(4, now);

      // Rock friction noise
      const noiseBuffer = this.createNoiseBuffer();
      if (noiseBuffer) {
        this.drillNoise = this.ctx.createBufferSource();
        this.drillNoise.buffer = noiseBuffer;
        this.drillNoise.loop = true;
        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(800 + intensity * 500, now);
        noiseFilter.Q.setValueAtTime(2.5, now);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.09, now);

        this.drillNoise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.drillGain);
        this.drillNoise.start();
      }

      this.drillOsc1.connect(filter);
      filter.connect(this.drillGain);

      this.drillOsc2.connect(filter2);
      filter2.connect(this.drillGain);

      this.drillGain.connect(this.ctx.destination);

      this.drillOsc1.start();
      this.drillOsc2.start();
    } catch (e) {
      console.warn('Drill audio error:', e);
    }
  }

  updateDrillingDepth(depthRatio) {
    if (!this.ctx || !this.isDrilling) return;
    const now = this.ctx.currentTime;
    if (this.drillOsc1) {
      this.drillOsc1.frequency.setTargetAtTime(65 + depthRatio * 65, now, 0.1);
    }
    if (this.drillOsc2) {
      this.drillOsc2.frequency.setTargetAtTime(130 + depthRatio * 110, now, 0.1);
    }
  }

  stopDrillingSound() {
    if (!this.ctx || !this.isDrilling) return;
    try {
      const now = this.ctx.currentTime;
      if (this.drillGain) {
        this.drillGain.gain.linearRampToValueAtTime(0.001, now + 0.15);
      }
      setTimeout(() => {
        if (this.drillOsc1) {
          try { this.drillOsc1.stop(); this.drillOsc1.disconnect(); } catch (e) {}
          this.drillOsc1 = null;
        }
        if (this.drillOsc2) {
          try { this.drillOsc2.stop(); this.drillOsc2.disconnect(); } catch (e) {}
          this.drillOsc2 = null;
        }
        if (this.drillNoise) {
          try { this.drillNoise.stop(); this.drillNoise.disconnect(); } catch (e) {}
          this.drillNoise = null;
        }
        this.isDrilling = false;
      }, 160);
    } catch (e) {
      this.isDrilling = false;
    }
  }

  playTelegramKey() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(820 + Math.random() * 180, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.045);
    } catch (e) {}
  }

  playClick() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.05);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }

  playWarning() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);
    } catch (e) {}
  }

  playTremor() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(42, now);
      osc.frequency.linearRampToValueAtTime(32, now + 1.2);
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.35, now + 0.2);
      gain.gain.linearRampToValueAtTime(0.01, now + 1.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.25);
    } catch (e) {}
  }

  playOilGush() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const noiseBuffer = this.createNoiseBuffer();
      if (!noiseBuffer) return;
      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(100, now);
      filter.frequency.exponentialRampToValueAtTime(1800, now + 0.8);
      filter.Q.setValueAtTime(4.0, now);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
      noise.stop(now + 2.5);
    } catch (e) {}
  }

  playVictoryFanfare() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    try {
      const notes = [293.66, 311.13, 369.99, 392.00, 440.00, 466.16, 587.33];
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteTime = now + idx * 0.15;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteTime);
        gain.gain.setValueAtTime(0.001, noteTime);
        gain.gain.linearRampToValueAtTime(0.18, noteTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(noteTime);
        osc.stop(noteTime + 1.3);
      });
    } catch (e) {}
  }
}

window.soundEngine = new SoundEngine();
