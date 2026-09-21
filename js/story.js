/**
 * Story Controller, Scroll Triggers, Bilingual Engine & Dilemma Gamification
 */

const I18N = {
  ar: {
    pageTitle: 'مسيرة التوحيد واكتشاف النفط | وثائقي تفاعلي',
    siteTitle: 'مسيرة التوحيد واكتشاف النفط',
    siteSub: 'المملكة العربية السعودية (1902 - 1938)',
    langBtn: 'English',
    heroBadge: '1902 - 1932 • فجر التاريخ المعاصر',
    heroTitle: 'فجر التوحيد: من قصر المصمك إلى إعلان المملكة',
    heroDesc: 'في فجر الخامس من شوال 1319هـ (يناير 1902م)، قاد الملك عبدالعزيز بن عبدالرحمن آل سعود معركة استعادة الرياض بـ 63 فارساً فقط. كانت تلك الشرارة الأولى لمسيرة ثلاثين عاماً من البناء والبطولة، توجت في 23 سبتمبر 1932م بتوحيد أرجاء شبه الجزيرة تحت اسم: المملكة العربية السعودية.',
    heroStat1Val: '63 رجلاً',
    heroStat1Lbl: 'شاركوا في معركة استعادة الرياض',
    heroStat2Val: '30 عاماً',
    heroStat2Lbl: 'من مسيرة التوحيد وإرساء الأمن',
    heroStat3Val: '23 سبتمبر 1932',
    heroStat3Lbl: 'إعلان ميلاد المملكة العربية السعودية',
    scrollHint: 'مرّر لاكتشاف فصول التاريخ',
    transitionQuote: '«ولكن بعد عام واحد فقط من التوحيد، انطلقت رحلة استكشاف جديدة ستغيّر موازين العالم وتكتب تاريخاً جديداً من باطن الأرض...»',
    pioneersBadge: '1933 - 1935 • رحلة البحث عن النفط',
    pioneersTitle: 'رواد الاكتشاف: عبقرية الرمال وعلم الصخور',
    pioneersDesc: 'بعد توقيع اتفاقية الامتياز عام 1933م، بدأت رحلة استكشاف كبرى في مجاهل الصحراء. لم يكن اكتشاف النفط صدفة أو بجهد فردي، بل تحالفاً أسطورياً جمع بين العلم الجيولوجي الحديث وعبقرية البدو في قراءة تضاريس الصحراء والنجوم.',
    splitTitle: 'من اكتشف النفط؟ حقيقة تاريخية لا يعرفها الكثير',
    splitSubtitle: 'النفط لم يكتشفه شخص واحد، بل تحالف أسطوري جمع بين العلم الجيولوجي الحديث وعبقرية البدو في قراءة الصحراء والنجوم.',
    maxName: 'ماكس ستاينكي',
    maxRole: 'كبير الجيولوجيين الأمريكيين (شركة سوكال)',
    maxBio: 'جيولوجي عبقري تخرج من جامعة ستانفورد. تميز بقدرته الفائقة على قراءة الطبقات الجيولوجية تحت رمال الصحراء القاحلة. وعندما أوشكت الشركة على إيقاف المشروع بعد خيبة 6 آبار جافة، أصرّ بصلابة على مواصلة الحفر إلى عمق غير مسبوق في طبقة "العرب".',
    khamisName: 'خميس بن رمثان',
    khamisRole: 'خبير الصحراء والملاح السعودي الفذ (قبيلة آل مرّة)',
    khamisBio: 'دليل الصحراء الأسطوري الذي عيّنه الملك عبدالعزيز لمرافقة الجيولوجيين. كان يقرأ تضاريس الصحراء بالنجوم والرياح ورائحة الرمال كأنها كتاب مفتوح دون بوصلة أو أجهزة. وبدونه، لم يكن للجيولوجيين أن يحددوا قباب الظهران أو يبقوا أحياء في قيظ الرمال.',
    traitStratigraphy: 'علم الطبقات الصخرية',
    traitStanford: 'جامعة ستانفورد',
    traitPersistence: 'الإصرار الميداني',
    traitDeepVision: 'رؤية الجيولوجيا العميقة',
    traitCelestial: 'الملاحة السماوية والنجوم',
    traitMurrah: 'خبير قبيلة آل مرّة',
    traitSandReading: 'قراءة تموجات الرمال',
    traitFounderGuide: 'دليل معتمد من الملك المؤسس',
    synergyTitle: 'تكامل المعرفة: عبقرية الرمال وعلم الصخور',
    synergyDesc: 'خلّد التاريخ هذا التحالف الفريد؛ فأطلقت أرامكو اسم "رمثان" على حقل نفطي، وسمّت إحدى ناقلاتها العملاقة باسم "خميس بن رمثان" تكريماً لعطائه التاريخي.',
    dilemmaBadge: '1937 • ساعة الصفر والقرار المصيري',
    dilemmaTitle: 'معضلة عام 1937: على حافة الإفلاس واليأس',
    dilemmaDesc: 'مرّت خمس سنوات عجاف. أُنفق مئات الآلاف من الدولارات دون قطرة نفط تجاري واحدة. الآبار من 1 إلى 6 باءت بالفشل، ومجلس إدارة الشركة في كاليفورنيا يستعد لإصدار أمر الانسحاب النهائي.',
    telegramHeader: 'برقية عاجلة مشفرة • سان فرانسيسكو إلى الظهران',
    telegramText: '«إلى ماكس ستاينكي وفريق التنقيب: استنزاف مالي حاد، الآبار جافة أو غير اقتصادية. مجلس الإدارة يوصي بوقف التمويل فوراً وإغلاق موقع الظهران ما لم يثبت وجود نفط فوري.»',
    dilemmaPrompt: 'أنت الآن في عام 1937: الخزائن تنفد، والإحباط يخيم على المخيم. ما هو قرارك التاريخي؟',
    btnStop: 'إيقاف المشروع والانسحاب',
    btnDrill: 'مواصلة الحفر أعمق (قرار ستاينكي)',
    drillOutcomeTitle: 'هذا كان قرار ماكس ستاينكي وبن رمثان الصارم!',
    drillOutcomeText: 'رد ستاينكي ببرقية قاطعة: "احفروا أعمق إلى المنطقة العربية الجوراسية!". استمرت الحفارة بالدوران ليلاً ونهاراً نحو أعماق سحيقة لم يسبق سبر غورها في الجزيرة العربية.',
    stopWarningTitle: 'تحذير تاريخي!',
    stopWarningText: 'لو انسحبت الشركة عام 1937، لبقيت أضخم ثروة طاقة في العالم مدفونة تحت الرمال لعقود! لكن الرؤية الثاقبة والعزيمة السعودية قادتهم للرفض ومواصلة الحفر.',
    closeBtn: 'إغلاق النافذة والمحاولة ثانية',
    simulatorBadge: 'مارس 1938 • اللحظة التي هزت العالم',
    simulatorTitle: 'محاكي بئر الدمام رقم 7 (بئر الخير)',
    simulatorDesc: 'اضغط واستمر بالضغط على زر "احفر الآن" لتشغيل الحفارة الميكانيكية والنزول عبر طبقات الأرض حتى عمق 1,441 متراً (4,727 قدماً).',
    digBtnText: 'احفر الآن',
    digBtnSub: 'اضغط واستمر بالحفر للنزول بالحفارة نحو العمق التاريخي',
    depthLabel: 'العمق المنجز:',
    feetLabel: 'القدم:',
    strataLabel: 'الطبقة الصخرية:',
    statusLabel: 'حالة الحفر:',
    strata1: 'رمال الصحراء وتكوين النصلة (0 - 180م)',
    strata2: 'متكون الروس (طباشير وجبس 180 - 480م)',
    strata3: 'حجر جير الدمام وميدرا (480 - 850م)',
    strata4: 'متكون الهدرية والطباشيري (850 - 1250م)',
    strata5: 'صخور الهيث الأنهيدريت الحابسة (1250 - 1400م)',
    strata6: '★ مكمن العرب (د) الجوراسي • الذهب الأسود (1,441م)',
    climaxDate: '4 مارس 1938م (1 محرم 1357هـ)',
    climaxHeadline: 'تفجر النفط بكميات تجارية! تدفق الذهب الأسود!',
    climaxDetail: 'في تمام الساعة التاسعة صباحاً، وعند عمق 1,441 متراً، اندفع النفط الخام بمعدل 1,585 برميلاً يومياً من بئر الدمام رقم 7. أمر الملك عبدالعزيز بتسميته «بئر الخير». وبحلول نهاية الشهر تدفق بمعدل 3,810 براميل يومياً لتبدأ نهضة أمة غيرت مجرى الاقتصاد العالمي.',
    resetBtnText: 'إعادة تجربة المحاكي',
    epilogueBadge: '1939 وما بعدها • من الرمال إلى آفاق العالم',
    epilogueTitle: 'بئر الخير يروي نهضة وطن',
    epilogueDesc: 'في 1 مايو 1939م، أدار الملك عبدالعزيز بيده الكريمة صمام تحميل أول شحنة نفط خام على متن الناقلة "دي جي سكوفيلد" في ميناء رأس تنورة. انطلقت المملكة من قسوة الصحراء إلى مصاف القوى الاقتصادية الكبرى، وتتوج اليوم برؤية السعودية 2030.',
    epilogue1Year: '1939',
    epilogue1Title: 'أول شحنة تصدير',
    epilogue1Desc: 'الملك عبدالعزيز يدير صمام الشحن في رأس تنورة لتدشين تصدير أول شحنة نفط تجارية للعالم على متن الناقلة «دي جي سكوفيلد».',
    epilogue2Year: '1944',
    epilogue2Title: 'ولادة شركة «أرامكو»',
    epilogue2Desc: 'تغيير اسم الشركة إلى شركة الزيت العربية الأمريكية (أرامكو)، لتصبح ركيزة إمدادات الطاقة الكبرى في العالم.',
    epilogue3Year: '1950',
    epilogue3Title: 'خط التابلاين التاريخي',
    epilogue3Desc: 'مد خط أنابيب التابلاين عبر 1,200 كم من المنطقة الشرقية إلى البحر الأبيض المتوسط، في أضخم إنجاز هندسي بزمنه.',
    epilogue4Year: 'رؤية 2030',
    epilogue4Title: 'ريادة الطاقة والنهضة الشاملة',
    epilogue4Desc: 'تحول المملكة إلى قوة استثمارية عالمية وتنويع مصادر الاقتصاد مع الحفاظ على الريادة العالمية للطاقة المستدامة.',
    footerBrand: 'Ofoq Initiative - مبادرة أُفُق',
    footerText: 'مشروع وثائقي تفاعلي • تاريخ توحيد المملكة العربية السعودية واكتشاف النفط'
  },
  en: {
    pageTitle: 'The Path of Unification & Oil Discovery | Interactive Documentary',
    siteTitle: 'The Path of Unification & Oil Discovery',
    siteSub: 'Kingdom of Saudi Arabia (1902 - 1938)',
    langBtn: 'العربية',
    heroBadge: '1902 - 1932 • Dawn of Modern History',
    heroTitle: 'The Dawn of Unity: From Masmak to the Kingdom',
    heroDesc: 'At dawn on January 15, 1902, King Abdulaziz Al Saud led 63 men in the historic battle to reclaim Riyadh and Masmak Fortress. That defining triumph ignited three decades of nation-building, culminating on September 23, 1932, in the official proclamation of the Kingdom of Saudi Arabia.',
    heroStat1Val: '63 Men',
    heroStat1Lbl: 'Fought alongside King Abdulaziz in Riyadh',
    heroStat2Val: '30 Years',
    heroStat2Lbl: 'Of state-building, unification, and peace',
    heroStat3Val: 'Sept 23, 1932',
    heroStat3Lbl: 'Proclamation of modern Saudi Arabia',
    scrollHint: 'Scroll to Explore History',
    transitionQuote: '“Yet just one year after unification, a brand new quest began that would transform the entire world and unearth immense wealth from deep underground...”',
    pioneersBadge: '1933 - 1935 • The Quest for Oil',
    pioneersTitle: 'The Pioneers: Geology Meets Desert Wisdom',
    pioneersDesc: 'Following the 1933 oil concession, an epic expedition began across uncharted sands. Oil discovery was not an accident, but an extraordinary partnership combining modern Western geology with indigenous Bedouin celestial navigation.',
    splitTitle: 'Who Discovered Oil? The Untold Partnership',
    splitSubtitle: 'Oil was not discovered by a lone individual, but through an extraordinary partnership between modern geology and indigenous Bedouin desert genius.',
    maxName: 'Max Steineke',
    maxRole: 'Chief American Geologist (SOCAL)',
    maxBio: 'A brilliant Stanford-trained structural geologist who possessed an unmatched ability to decipher underground strata beneath arid dunes. When SOCAL directors almost abandoned operations following six dry wells, Steineke stood resolute, insisting on drilling deeper into the unproven "Arab Zone".',
    khamisName: 'Khamis Bin Rimthan',
    khamisRole: 'Legendary Saudi Desert Guide & Navigator (Al-Murrah)',
    khamisBio: 'An extraordinary Bedouin navigator officially appointed by King Abdulaziz to lead the geologists. Navigating by celestial constellations, wind patterns, and dune contours without instruments, he guided expeditions safely across blinding sandstorms to map the subterranean dome of Dhahran.',
    traitStratigraphy: 'Stratigraphy & Geology',
    traitStanford: 'Stanford University',
    traitPersistence: 'Unshakable Resolve',
    traitDeepVision: 'Deep Arab-Zone Vision',
    traitCelestial: 'Celestial Navigation & Stars',
    traitMurrah: 'Al-Murrah Tribe Legend',
    traitSandReading: 'Reading Dune Ridges',
    traitFounderGuide: 'Appointed by King Abdulaziz',
    synergyTitle: 'The Fusion of Knowledge: Science & Desert Wisdom',
    synergyDesc: 'History immortalized this alliance: Saudi Aramco named an entire oilfield "Ramthan" and christened a supertanker "Khamis Bin Rimthan" in eternal gratitude for his irreplaceable role.',
    dilemmaBadge: '1937 • The Critical Hour of Decision',
    dilemmaTitle: 'The 1937 Dilemma: On the Brink of Abandonment',
    dilemmaDesc: 'Five grueling years had passed. Hundreds of thousands of dollars spent without a single barrel of commercial oil. Wells 1 through 6 were failures, and the board of directors in California prepared to shut down the entire venture.',
    telegramHeader: 'Urgent Encrypted Cable • San Francisco to Dhahran',
    telegramText: '“To Max Steineke and Field Crew: Financial strain is severe. Wells are dry or non-commercial. Board recommends immediate suspension of funds and shutting down Dhahran operations unless commercial oil is proven immediately.”',
    dilemmaPrompt: 'You are in Dhahran in late 1937: Coffers are dry and pressure is intense. What is your historic decision?',
    btnStop: 'Halt the Project & Pack Up',
    btnDrill: 'Keep Drilling Deeper (Steineke’s Choice)',
    drillOutcomeTitle: 'This was Max Steineke & Bin Rimthan’s bold decision!',
    drillOutcomeText: 'Steineke cabled back with unyielding conviction: "Drill deeper into the Jurassic Arab Zone!" The rotary rig drove day and night into uncharted depths beneath the sands.',
    stopWarningTitle: 'Historical Fact Check!',
    stopWarningText: 'Had they packed up in 1937, the greatest energy reserves on earth would have remained buried for decades. Saudi fortitude and Steineke’s vision saved the venture from collapse.',
    closeBtn: 'Close & Try Again',
    simulatorBadge: 'March 1938 • The World-Changing Moment',
    simulatorTitle: 'Dammam Well No. 7 Simulator (The Well of Goodness)',
    simulatorDesc: 'Press and hold "DIG NOW" to drive the heavy rotary drill rig down through the geological strata until reaching 1,441 meters (4,727 feet).',
    digBtnText: 'DIG NOW',
    digBtnSub: 'Press & hold to drive the heavy drill rig to target depth',
    depthLabel: 'Depth Achieved:',
    feetLabel: 'Feet:',
    strataLabel: 'Rock Formation:',
    statusLabel: 'Drilling Status:',
    strata1: 'Surface Dune Sand & Gravel (0 - 180m)',
    strata2: 'Rus Formation: Chalk & Gypsum (180 - 480m)',
    strata3: 'Dammam Limestone & Midra Shale (480 - 850m)',
    strata4: 'Hadriya & Cretaceous Sandstone (850 - 1,250m)',
    strata5: 'Hith Anhydrite Impermeable Caprock (1,250 - 1,400m)',
    strata6: '★ Arab Zone (Arab-D) Porous Reservoir • Black Gold (1,441m)',
    climaxDate: 'March 4, 1938 (Muharram 1, 1357 AH)',
    climaxHeadline: 'COMMERCIAL OIL DISCOVERED! Black Gold Surges!',
    climaxDetail: 'At 9:00 AM, upon reaching 1,441 meters, high-pressure crude oil surged up Dammam Well No. 7 at 1,585 barrels per day. King Abdulaziz named it "The Well of Goodness" (بئر الخير). By the end of the month, flow exceeded 3,810 barrels daily, launching the modern transformation of Saudi Arabia.',
    resetBtnText: 'Reset Drill Simulator',
    epilogueBadge: '1939 & Beyond • From Desert Sands to Global Horizons',
    epilogueTitle: 'The Well of Goodness Powers a Nation',
    epilogueDesc: 'On May 1, 1939, King Abdulaziz personally turned the valve at Ras Tanura to load the Kingdom’s first crude export onto the tanker D.G. Scofield. From desert hardship to a global economic titan, this legacy continues under Saudi Vision 2030.',
    epilogue1Year: '1939',
    epilogue1Title: 'The First Crude Export',
    epilogue1Desc: 'King Abdulaziz inaugurates Saudi Arabia’s first commercial crude export by loading the tanker D.G. Scofield at Ras Tanura port.',
    epilogue2Year: '1944',
    epilogue2Title: 'Birth of Aramco',
    epilogue2Desc: 'Renamed the Arabian American Oil Company (Aramco), growing into the cornerstone of global energy supply.',
    epilogue3Year: '1950',
    epilogue3Title: 'The Historic Tapline',
    epilogue3Desc: 'Constructing the legendary 1,200 km Trans-Arabian Pipeline, linking the Eastern Province directly to the Mediterranean.',
    epilogue4Year: 'Vision 2030',
    epilogue4Title: 'Energy Leadership & Renaissance',
    epilogue4Desc: 'Pioneering global energy transition, massive economic diversification, and nationwide sustainable innovation.',
    footerBrand: 'Ofoq Initiative - مبادرة أُفُق',
    footerText: 'Interactive Documentary • History of the Unification of Saudi Arabia & Discovery of Oil'
  }
};

class StoryController {
  constructor() {
    this.currentLang = 'ar';
    this.initLangSwitcher();
    this.initDesertParticles();
    this.initScrollStory();
    this.initDilemmaGamification();
  }

  initLangSwitcher() {
    const langBtn = document.getElementById('lang-switch-btn');
    if (!langBtn) return;

    langBtn.addEventListener('click', () => {
      this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
      this.applyLanguage(this.currentLang);
      if (window.soundEngine) window.soundEngine.playClick();
    });

    this.applyLanguage(this.currentLang);
  }

  applyLanguage(lang) {
    const strings = I18N[lang];
    if (!strings) return;

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) {
        el.textContent = strings[key];
      }
    });

    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
      const label = langBtn.querySelector('.lang-label');
      if (label) label.textContent = strings.langBtn;
    }

    if (window.wellSimulatorInstance) {
      window.wellSimulatorInstance.updateUI();
    }
  }

  initDesertParticles() {
    const canvas = document.getElementById('hero-sand-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    const particles = [];
    const count = 75;

    const resize = () => {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0.4 + Math.random() * 1.1,
        vy: -0.1 + (Math.random() - 0.5) * 0.35,
        size: 1 + Math.random() * 2.5,
        alpha: 0.15 + Math.random() * 0.4,
        hue: 35 + Math.random() * 10
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `hsla(${p.hue}, 55%, 72%, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };

    animate();
  }

  initScrollStory() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));

    const progressFill = document.getElementById('global-scroll-progress');
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressFill) {
        progressFill.style.width = `${scrollPercent}%`;
      }
    });
  }

  initDilemmaGamification() {
    const btnStop = document.getElementById('dilemma-btn-stop');
    const btnDrill = document.getElementById('dilemma-btn-drill');
    const outcomeBox = document.getElementById('dilemma-outcome');
    const warningModal = document.getElementById('dilemma-warning-modal');
    const closeWarningBtn = document.getElementById('close-warning-btn');

    if (btnDrill) {
      btnDrill.addEventListener('click', () => {
        if (window.soundEngine) {
          window.soundEngine.playVictoryFanfare();
        }
        if (outcomeBox) {
          outcomeBox.classList.add('active');
          outcomeBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        btnDrill.classList.add('selected');
        if (btnStop) btnStop.disabled = true;
      });
    }

    if (btnStop) {
      btnStop.addEventListener('click', () => {
        if (window.soundEngine) {
          window.soundEngine.playWarning();
        }
        if (warningModal) {
          warningModal.classList.add('active');
        }
      });
    }

    if (closeWarningBtn && warningModal) {
      closeWarningBtn.addEventListener('click', () => {
        warningModal.classList.remove('active');
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }
  }
}

window.StoryController = StoryController;
