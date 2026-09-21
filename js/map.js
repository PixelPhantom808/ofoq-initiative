/**
 * Interactive Vector Map & Character Profile Engine
 */

const MAP_LOCATIONS = {
  dammam: {
    id: 'dammam',
    nameAr: 'جبل الظهران وبئر الدمام رقم 7',
    nameEn: 'Jabal Dhahran & Dammam Well No. 7',
    tagAr: 'المنطقة الشرقية • مهد النفط',
    tagEn: 'Eastern Province • Birthplace of Oil',
    year: '1935 - 1938',
    isEpicenter: true,
    descAr: 'الموقع التاريخي الذي شهد حفر أولى الآبار الاستكشافية. بعد سنوات من الإحباط في الآبار الست الأولى، تفجر بئر الدمام رقم 7 (بئر الخير) بكميات تجارية هائلة في مارس 1938.',
    descEn: 'The historic site of the first exploratory wells. After years of frustration in Wells 1 through 6, Dammam Well No. 7 ("The Well of Goodness") erupted with commercial oil in March 1938.'
  },
  riyadh: {
    id: 'riyadh',
    nameAr: 'الرياض - قصر المصمك',
    nameEn: 'Riyadh - Al Masmak Fortress',
    tagAr: 'قلب نجد • فجر التوحيد',
    tagEn: 'Heart of Najd • Dawn of Unification',
    year: '1902 / 1932',
    descAr: 'في فجر الخامس من شوال 1319هـ (1902م)، قاد الملك عبدالعزيز بن عبدالرحمن آل سعود ورجاله الـ63 معركة استعادة الرياض وحصن المصمك، معلناً بداية مسيرة توحيد استمرت 30 عاماً وتوجت بإعلان المملكة عام 1932.',
    descEn: 'At dawn in 1902, King Abdulaziz Al Saud and his 63 men led the battle to reclaim Riyadh and Al Masmak Fortress, inaugurating three decades of state-building that culminated in the proclamation of the Kingdom in 1932.'
  },
  jeddah: {
    id: 'jeddah',
    nameAr: 'جدة - قصر خزام',
    nameEn: 'Jeddah - Khuzam Palace',
    tagAr: 'عروس البحر الأحمر • توقيع الامتياز',
    tagEn: 'Red Sea Port • The 1933 Concession',
    year: '1933',
    descAr: 'في 29 مايو 1933، وقّع وزير المالية الشيخ عبدالله السليمان وممثل شركة سوكال السيد لويد هاملتون اتفاقية التنقيب عن النفط، لتبدأ أعظم شراكة صناعية في العالم.',
    descEn: 'On May 29, 1933, Finance Minister Abdullah Al-Sulaiman and SOCAL representative Lloyd Hamilton signed the historic oil concession, inaugurating one of the most successful energy partnerships in modern history.'
  },
  al_ahsa: {
    id: 'al_ahsa',
    nameAr: 'واحة الأحساء',
    nameEn: 'Al-Ahsa Oasis',
    tagAr: 'الواحة التاريخية • مركز الإمداد',
    tagEn: 'Historic Oasis • Logistical Lifeline',
    year: '1933 - 1936',
    descAr: 'أكبر واحة نخيل في العالم، شكلت المركز اللوجستي الحيوي لفرق التنقيب الجيولوجي حيث توفرت ينابيع المياه العذبة والمؤن لقوافل الجيولوجيين والأدلاء قبل انطلاقهم في مجاهل الصحراء.',
    descEn: 'The world\'s largest date-palm oasis served as the vital logistical hub for early geological expeditions, providing freshwater springs and provisions for desert convoys.'
  },
  jubail: {
    id: 'jubail',
    nameAr: 'ميناء الجبيل التاريخي',
    nameEn: 'Historic Port of Jubail',
    tagAr: 'شاطئ الخليج • وصول الرواد',
    tagEn: 'Gulf Coast • Arrival of Pioneers',
    year: '1933',
    descAr: 'في 23 سبتمبر 1933، رست السفينة التي أقلت أول جيولوجيَين أمريكيين (شويلر هنري وبرت ميلر) على رصيف الجبيل، حيث ارتدوا الزي العربي وركبوا الجمال بصحبة المرافقين السعوديين لبدء مسح تلال الظهران.',
    descEn: 'On September 23, 1933, the first American geologists (Schuyler Henry and Bert Miller) landed at Jubail, donning traditional thobes and mounting camels to begin geological mapping of Dhahran dome.'
  },
  rub_al_khali: {
    id: 'rub_al_khali',
    nameAr: 'صحراء الربع الخالي',
    nameEn: 'Rub\' al Khali (The Empty Quarter)',
    tagAr: 'بحر الرمال • مدرسة البدو',
    tagEn: 'The Great Sand Sea • Bedouin Mastery',
    year: '1934 - 1937',
    descAr: 'أعظم مساحة رملية متصلة على وجه الأرض. هنا تجلت عبقرية أدلاء الصحراء مثل خميس بن رمثان الذين اهتدوا بمسالك الرياح وتلال الرمال ومواقع النجوم دون الحاجة لأجهزة ميكانيكية.',
    descEn: 'The world\'s largest contiguous sand desert. It was here that native Bedouin navigators like Khamis Bin Rimthan proved irreplaceable, reading shifting dunes, wind ridges, and celestial constellations.'
  }
};

class InteractiveMap {
  constructor() {
    this.container = document.getElementById('map-container');
    this.infoCard = document.getElementById('map-info-card');
    this.splitModal = document.getElementById('split-screen-modal');
    this.closeModalBtn = document.getElementById('close-modal-btn');
    this.activeLocationId = 'dammam';
    this.init();
  }

  init() {
    if (!this.container) return;

    // Attach click handlers to all map markers
    const markers = this.container.querySelectorAll('.map-marker');
    markers.forEach(marker => {
      marker.addEventListener('click', (e) => {
        e.stopPropagation();
        const locId = marker.getAttribute('data-location');
        this.selectLocation(locId);
      });

      marker.addEventListener('mouseenter', () => {
        if (window.soundEngine) window.soundEngine.playClick();
      });
    });

    // Attach click handlers to location pills (for easy desktop/mobile tapping)
    const pills = document.querySelectorAll('.map-pill-btn');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const locId = pill.getAttribute('data-location');
        this.selectLocation(locId);
      });
    });

    if (this.closeModalBtn) {
      this.closeModalBtn.addEventListener('click', () => {
        this.closeModal();
      });
    }

    if (this.splitModal) {
      this.splitModal.addEventListener('click', (e) => {
        if (e.target === this.splitModal) {
          this.closeModal();
        }
      });
    }

    // Default select Dammam initially
    this.selectLocation('dammam');
  }

  selectLocation(locId) {
    const data = MAP_LOCATIONS[locId];
    if (!data) return;

    this.activeLocationId = locId;

    // Highlight map marker
    const allMarkers = this.container.querySelectorAll('.map-marker');
    allMarkers.forEach(m => m.classList.remove('active'));
    const activeMarker = this.container.querySelector(`.map-marker[data-location="${locId}"]`);
    if (activeMarker) activeMarker.classList.add('active');

    // Highlight pill button
    const allPills = document.querySelectorAll('.map-pill-btn');
    allPills.forEach(p => p.classList.remove('active'));
    const activePill = document.querySelector(`.map-pill-btn[data-location="${locId}"]`);
    if (activePill) activePill.classList.add('active');

    if (window.soundEngine) {
      window.soundEngine.playClick();
    }

    // Render info card without forcefully hijacking screen with a modal
    this.renderInfoCard(data);
  }

  renderInfoCard(data) {
    if (!this.infoCard) return;
    const isAr = document.documentElement.getAttribute('lang') === 'ar';

    const title = isAr ? data.nameAr : data.nameEn;
    const tag = isAr ? data.tagAr : data.tagEn;
    const desc = isAr ? data.descAr : data.descEn;

    this.infoCard.innerHTML = `
      <div class="info-card-header">
        <span class="info-badge">${data.year}</span>
        <span class="info-tag">${tag}</span>
      </div>
      <h3 class="info-title">${title}</h3>
      <p class="info-desc">${desc}</p>
      ${data.isEpicenter ? `
        <button class="btn-spotlight" id="info-open-modal-btn">
          <span>${isAr ? 'عرض ملف: من اكتشف النفط؟' : 'View Profile: Who Discovered Oil?'}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      ` : ''}
    `;

    this.infoCard.classList.add('visible');

    const openBtn = this.infoCard.querySelector('#info-open-modal-btn');
    if (openBtn) {
      openBtn.addEventListener('click', () => this.openSplitModal());
    }
  }

  openSplitModal() {
    if (!this.splitModal) return;
    this.splitModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.soundEngine) {
      window.soundEngine.playClick();
    }
  }

  closeModal() {
    if (!this.splitModal) return;
    this.splitModal.classList.remove('active');
    document.body.style.overflow = '';
    if (window.soundEngine) {
      window.soundEngine.playClick();
    }
  }

  refreshLanguage() {
    if (this.activeLocationId && MAP_LOCATIONS[this.activeLocationId]) {
      this.renderInfoCard(MAP_LOCATIONS[this.activeLocationId]);
    }
  }
}

window.InteractiveMap = InteractiveMap;
