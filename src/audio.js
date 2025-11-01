/**
 * AudioManager - Comprehensive sound management system for the portfolio
 * Handles volume controls, cross-browser compatibility, and sound synchronization
 */
class AudioManager {
  constructor() {
    this.sounds = {};
    this.volume = 0.3; // Default volume (30%)
    this.muted = false;
    this.audioContext = null;
    this.masterGainNode = null;
    this.enabled = true;
    this.initialized = false;
    this.soundsLoaded = 0;
    this.totalSounds = 0;
    this.onReadyCallback = null;

    // Sound categories for better organization
    this.soundCategories = {
      ui: ['click', 'hover', 'toggle', 'notification'],
      animation: ['scroll', 'reveal', 'transition'],
      interaction: ['chatbot', 'form', 'submit']
    };

    this.init();
  }

  /**
   * Initialize the audio system with cross-browser compatibility
   */
  async init() {
    try {
      // Create audio context with cross-browser support
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioContext = new AudioContext();
        this.masterGainNode = this.audioContext.createGain();
        this.masterGainNode.connect(this.audioContext.destination);
        this.masterGainNode.gain.value = this.volume;
      }

      // Check if user has interacted with the page (required for audio autoplay)
      this.setupUserInteractionHandling();

      // Create synthetic sounds using Web Audio API
      this.createSyntheticSounds();

      this.initialized = true;
      console.log('AudioManager initialized successfully');
    } catch (error) {
      console.warn('AudioManager initialization failed:', error);
      this.enabled = false;
    }
  }

  /**
   * Handle user interaction requirement for audio playback
   */
  setupUserInteractionHandling() {
    const handleFirstInteraction = () => {
      if (this.audioContext && this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
  }

  /**
   * Create synthetic sounds using Web Audio API for better performance
   * and to avoid external file dependencies
   */
  createSyntheticSounds() {
    if (!this.audioContext) return;

    // Create different types of synthetic sounds
    this.sounds = {
      // UI Sounds
      click: this.createClickSound(),
      hover: this.createHoverSound(),
      toggle: this.createToggleSound(),
      notification: this.createNotificationSound(),

      // Animation Sounds
      scroll: this.createScrollSound(),
      reveal: this.createRevealSound(),
      transition: this.createTransitionSound(),

      // Interaction Sounds
      chatbot: this.createChatbotSound(),
      form: this.createFormSound(),
      submit: this.createSubmitSound(),

      // Ambient/Background
      ambient: this.createAmbientSound()
    };

    this.totalSounds = Object.keys(this.sounds).length;
    this.soundsLoaded = this.totalSounds;
  }

  /**
   * Create a subtle click sound
   */
  createClickSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.1);
    };
  }

  /**
   * Create a subtle hover sound
   */
  createHoverSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      oscillator.frequency.setValueAtTime(1200, this.audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.15);
    };
  }

  /**
   * Create a toggle/transition sound
   */
  createToggleSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.2);

      gainNode.gain.setValueAtTime(0.08, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.2);
    };
  }

  /**
   * Create a notification sound
   */
  createNotificationSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime);
      oscillator.frequency.setValueAtTime(1200, this.audioContext.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime + 0.2);

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + 0.3);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.3);
    };
  }

  /**
   * Create a scroll sound
   */
  createScrollSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();

      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.audioContext.currentTime);

      oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.15);

      gainNode.gain.setValueAtTime(0.03, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.15);
    };
  }

  /**
   * Create a reveal sound
   */
  createRevealSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.3);

      gainNode.gain.setValueAtTime(0.06, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.3);
    };
  }

  /**
   * Create a transition sound
   */
  createTransitionSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      oscillator.frequency.setValueAtTime(500, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1000, this.audioContext.currentTime + 0.25);

      gainNode.gain.setValueAtTime(0.07, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.25);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.25);
    };
  }

  /**
   * Create a chatbot sound
   */
  createChatbotSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      oscillator.frequency.setValueAtTime(900, this.audioContext.currentTime);
      oscillator.type = 'triangle';

      gainNode.gain.setValueAtTime(0.08, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.1);
    };
  }

  /**
   * Create a form interaction sound
   */
  createFormSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      oscillator.frequency.setValueAtTime(1100, this.audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.04, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.08);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.08);
    };
  }

  /**
   * Create a submit/success sound
   */
  createSubmitSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      // Create a more complex success sound with multiple tones
      const oscillator1 = this.audioContext.createOscillator();
      const oscillator2 = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      oscillator1.frequency.setValueAtTime(800, this.audioContext.currentTime);
      oscillator2.frequency.setValueAtTime(1200, this.audioContext.currentTime);

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);

      oscillator1.start(this.audioContext.currentTime);
      oscillator2.start(this.audioContext.currentTime);
      oscillator1.stop(this.audioContext.currentTime + 0.4);
      oscillator2.stop(this.audioContext.currentTime + 0.4);
    };
  }

  /**
   * Create ambient background sound (very subtle)
   */
  createAmbientSound() {
    return () => {
      if (!this.enabled || this.muted) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();

      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.masterGainNode);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, this.audioContext.currentTime);

      oscillator.frequency.setValueAtTime(60, this.audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.01, this.audioContext.currentTime);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 2);
    };
  }

  /**
   * Play a sound by name
   */
  play(soundName, options = {}) {
    if (!this.enabled || this.muted || !this.sounds[soundName]) return;

    try {
      // Add slight randomization to prevent repetitive sounds
      const delay = options.delay || 0;
      const volume = options.volume !== undefined ? options.volume : 1;

      if (delay > 0) {
        setTimeout(() => {
          if (this.sounds[soundName]) {
            this.sounds[soundName]();
          }
        }, delay);
      } else {
        this.sounds[soundName]();
      }
    } catch (error) {
      console.warn(`Failed to play sound: ${soundName}`, error);
    }
  }

  /**
   * Set master volume (0-1)
   */
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.masterGainNode) {
      this.masterGainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
    }
    localStorage.setItem('audioVolume', this.volume);
  }

  /**
   * Toggle mute state
   */
  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('audioMuted', this.muted);
    return this.muted;
  }

  /**
   * Enable/disable audio system
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    localStorage.setItem('audioEnabled', this.enabled);
  }

  /**
   * Get current audio state
   */
  getState() {
    return {
      volume: this.volume,
      muted: this.muted,
      enabled: this.enabled,
      initialized: this.initialized
    };
  }

  /**
   * Load saved audio settings
   */
  loadSettings() {
    const savedVolume = localStorage.getItem('audioVolume');
    const savedMuted = localStorage.getItem('audioMuted');
    const savedEnabled = localStorage.getItem('audioEnabled');

    if (savedVolume !== null) {
      this.setVolume(parseFloat(savedVolume));
    }
    if (savedMuted !== null) {
      this.muted = savedMuted === 'true';
    }
    if (savedEnabled !== null) {
      this.enabled = savedEnabled === 'true';
    }
  }

  /**
   * Check if audio is supported
   */
  isSupported() {
    return !!(window.AudioContext || window.webkitAudioContext);
  }

  /**
   * Get available sound names
   */
  getSoundNames() {
    return Object.keys(this.sounds);
  }

  /**
   * Play sound with category filtering
   */
  playCategory(category, options = {}) {
    const sounds = this.soundCategories[category];
    if (sounds && sounds.length > 0) {
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      this.play(randomSound, options);
    }
  }
}

// Create global audio manager instance
const audioManager = new AudioManager();
