/**
 * Dammam Well No. 7 Digging Simulator (1938)
 * Handles interactive drilling, geological strata detection, audio synthesis triggers,
 * canvas particle geyser eruption, and dynamic UI transformation into golden-oil theme.
 */

class WellSimulator {
  constructor() {
    this.targetDepth = 1441; // 1441 meters (4,727 ft)
    this.currentDepth = 0;
    this.isDrilling = false;
    this.hasDiscovered = false;
    this.drillInterval = null;
    this.geyserActive = false;

    // Elements
    this.digBtn = document.getElementById('dig-button');
    this.depthMeter = document.getElementById('depth-meter-value');
    this.depthFeet = document.getElementById('depth-feet-value');
    this.progressBar = document.getElementById('drill-progress-fill');
    this.strataName = document.getElementById('current-strata-name');
    this.drillStatusLog = document.getElementById('drill-status-text');
    this.drillBit = document.getElementById('drill-bit-indicator');
    this.drillPipe = document.getElementById('drill-pipe-fill');
    this.shaftTrack = document.getElementById('drill-shaft-track');
    this.strataSection = document.getElementById('earth-cross-section');
    this.geyserCanvas = document.getElementById('geyser-canvas');
    this.climaxBanner = document.getElementById('climax-banner');
    this.resetBtn = document.getElementById('reset-drill-btn');

    this.particles = [];
    this.init();
  }

  init() {
    if (!this.digBtn) return;

    // Pointer events for press & hold + click
    const startDrill = (e) => {
      e.preventDefault();
      if (this.hasDiscovered) return;
      this.isDrilling = true;
      this.digBtn.classList.add('active');
      if (this.drillBit) this.drillBit.classList.add('drilling-active');
      if (window.soundEngine) {
        window.soundEngine.init();
        window.soundEngine.startDrillingSound(this.currentDepth / this.targetDepth);
      }
      this.loopDrilling();
    };

    const stopDrill = (e) => {
      if (!this.isDrilling) return;
      this.isDrilling = false;
      this.digBtn.classList.remove('active');
      if (this.drillBit) this.drillBit.classList.remove('drilling-active');
      if (window.soundEngine) {
        window.soundEngine.stopDrillingSound();
      }
      if (this.drillInterval) {
        cancelAnimationFrame(this.drillInterval);
        this.drillInterval = null;
      }
    };

    this.digBtn.addEventListener('mousedown', startDrill);
    window.addEventListener('mouseup', stopDrill);

    this.digBtn.addEventListener('touchstart', startDrill, { passive: false });
    window.addEventListener('touchend', stopDrill);
    window.addEventListener('touchcancel', stopDrill);

    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => {
        this.resetDrill();
      });
    }

    this.initGeyserCanvas();
    this.updateUI();
  }

  loopDrilling() {
    if (!this.isDrilling || this.hasDiscovered) return;

    const increment = 3.5 + Math.random() * 2.5;
    this.currentDepth = Math.min(this.targetDepth, this.currentDepth + increment);

    this.updateUI();

    if (window.soundEngine) {
      window.soundEngine.updateDrillingDepth(this.currentDepth / this.targetDepth);
    }

    if (this.currentDepth >= this.targetDepth) {
      this.triggerDiscovery();
    } else {
      this.drillInterval = requestAnimationFrame(() => this.loopDrilling());
    }
  }

  getStrataInfo(depth) {
    const isAr = document.documentElement.getAttribute('lang') === 'ar';
    if (depth < 180) {
      return {
        name: isAr ? 'رمال الصحراء وتكوين النصلة (0 - 180م)' : 'Surface Dune Sand & Gravel (0 - 180m)',
        status: isAr ? 'تثبيت الأنابيب السطحية، اختراق الرمال...' : 'Surface casing set. Penetrating loose sands...',
        class: 'strata-sand'
      };
    } else if (depth < 480) {
      return {
        name: isAr ? 'متكون الروس - طباشير وجبس (180 - 480م)' : 'Rus Formation - Dense Chalk & Gypsum (180 - 480m)',
        status: isAr ? 'دخول متكون الروس؛ احتكاك شديد ومقاومة صخرية.' : 'Entering Rus Formation. Dense gypsum crystals slowing rotation.',
        class: 'strata-rus'
      };
    } else if (depth < 850) {
      return {
        name: isAr ? 'حجر جير الدمام وميدرا (480 - 850م)' : 'Dammam Limestone & Midra Shale (480 - 850m)',
        status: isAr ? 'تآكل في مسننات رأس الحفر، تدفق طين التبريد مستمر.' : 'Heavy drill bit friction in hard limestone. Mud pumps at full load.',
        class: 'strata-dammam'
      };
    } else if (depth < 1250) {
      return {
        name: isAr ? 'متكون الهدرية والطباشيري (850 - 1250م)' : 'Hadriya & Cretaceous Strata (850 - 1250m)',
        status: isAr ? 'ارتفاع ضغط التكوين الجيولوجي! تعديل كثافة الطين.' : 'Formation pressure rising! Geologists logging rock cuttings.',
        class: 'strata-hadriya'
      };
    } else if (depth < 1400) {
      return {
        name: isAr ? 'صخور الهيث الأنهيدريت الحابسة (1250 - 1400م)' : 'Hith Anhydrite Impermeable Caprock (1250 - 1400m)',
        status: isAr ? 'اختراق الغطاء الصخري الصمّام! ظهور فقاعات غازية وشواهد نفط!' : 'Punching through the impermeable seal! Gas kicks and oil odor detected!',
        class: 'strata-hith'
      };
    } else {
      return {
        name: isAr ? 'مكمن العرب (د) الجوراسي المنفذ (1441م)' : 'Arab Zone / Arab-D Porous Reservoir (1,441m)',
        status: isAr ? 'انفجار الضغط الهائل! تدفق الذهب الأسود بقوة عارمة!' : 'MASSIVE PRESSURE SURGE! CRUDE OIL RUSHING UP THE WELLBORE!',
        class: 'strata-arab-zone'
      };
    }
  }

  updateUI() {
    const depthInt = Math.floor(this.currentDepth);
    const feetInt = Math.floor(depthInt * 3.28084);
    const progressPercent = (this.currentDepth / this.targetDepth) * 100;

    if (this.depthMeter) this.depthMeter.textContent = depthInt.toLocaleString();
    if (this.depthFeet) this.depthFeet.textContent = feetInt.toLocaleString();
    if (this.progressBar) this.progressBar.style.width = `${progressPercent}%`;

    // Move drill excavator rig head down its dedicated shaft
    if (this.drillBit) {
      const container = this.shaftTrack || this.strataSection;
      const maxHeight = container ? container.clientHeight - 64 : 450;
      const bitTop = (progressPercent / 100) * maxHeight;
      this.drillBit.style.transform = `translateY(${bitTop}px)`;
      if (this.drillPipe) {
        this.drillPipe.style.height = `${bitTop + 14}px`;
      }
    }

    const strata = this.getStrataInfo(this.currentDepth);
    if (this.strataName) this.strataName.textContent = strata.name;
    if (this.drillStatusLog) this.drillStatusLog.textContent = strata.status;
  }

  triggerDiscovery() {
    if (this.hasDiscovered) return;
    this.hasDiscovered = true;
    this.isDrilling = false;
    this.digBtn.classList.remove('active');
    this.digBtn.disabled = true;
    if (this.drillBit) this.drillBit.classList.remove('drilling-active');

    if (window.soundEngine) {
      window.soundEngine.stopDrillingSound();
      window.soundEngine.playTremor();
      setTimeout(() => {
        window.soundEngine.playOilGush();
      }, 400);
      setTimeout(() => {
        window.soundEngine.playVictoryFanfare();
      }, 1600);
    }

    // Screen Shake
    document.body.classList.add('shake-intense');
    setTimeout(() => {
      document.body.classList.remove('shake-intense');
    }, 1800);

    // Erupt Oil Geyser Particles
    this.startGeyserAnimation();

    // Theme Transformation
    setTimeout(() => {
      document.documentElement.classList.add('oil-discovered');
      document.body.classList.add('oil-discovered');
    }, 800);

    // Reveal Climax Banner
    setTimeout(() => {
      if (this.climaxBanner) {
        this.climaxBanner.classList.add('revealed');
        this.climaxBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1500);
  }

  initGeyserCanvas() {
    if (!this.geyserCanvas) return;
    const canvas = this.geyserCanvas;
    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);
  }

  startGeyserAnimation() {
    if (!this.geyserCanvas) return;
    this.geyserActive = true;
    const canvas = this.geyserCanvas;
    const ctx = canvas.getContext('2d');
    this.particles = [];

    const originX = canvas.width * 0.12; // Erupt directly out of the wellbore shaft
    const originY = canvas.height * 0.92;

    const spawnInterval = setInterval(() => {
      if (!this.geyserActive) return;
      for (let i = 0; i < 28; i++) {
        const speed = 12 + Math.random() * 16;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.42;
        const isGold = Math.random() < 0.28;
        this.particles.push({
          x: originX + (Math.random() - 0.5) * 20,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 2.2 + Math.random() * 4.5,
          color: isGold ? '#fbbf24' : (Math.random() < 0.5 ? '#0b0c10' : '#1a202c'),
          alpha: 1,
          gravity: 0.42,
          decay: 0.008 + Math.random() * 0.012
        });
      }
    }, 40);

    setTimeout(() => {
      clearInterval(spawnInterval);
    }, 5500);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.y > canvas.height + 50) {
          this.particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        if (p.color === '#fbbf24') {
          ctx.shadowColor = '#f59e0b';
          ctx.shadowBlur = 8;
          ctx.fill();
        }
        ctx.restore();
      }

      if (this.geyserActive || this.particles.length > 0) {
        requestAnimationFrame(render);
      }
    };

    render();
  }

  resetDrill() {
    this.currentDepth = 0;
    this.hasDiscovered = false;
    this.isDrilling = false;
    this.geyserActive = false;
    this.particles = [];
    if (this.digBtn) {
      this.digBtn.disabled = false;
      this.digBtn.classList.remove('active');
    }
    if (this.drillBit) {
      this.drillBit.classList.remove('drilling-active');
    }
    if (this.drillPipe) {
      this.drillPipe.style.height = '0px';
    }
    if (this.climaxBanner) {
      this.climaxBanner.classList.remove('revealed');
    }
    document.documentElement.classList.remove('oil-discovered');
    document.body.classList.remove('oil-discovered');
    this.updateUI();
  }
}

window.WellSimulator = WellSimulator;
