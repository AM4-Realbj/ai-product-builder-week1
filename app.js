// dawn4 Interactive Features, Multilingual Engine (KO / EN) & Formspree Integration

const translations = {
  ko: {
    page_title: "dawn4 | 새벽 4시, 당신의 기적이 시작되는 시간",
    meta_desc: "dawn4는 지속 가능한 아침의 몰입과 성장을 이끄는 차세대 미라클 모닝 솔루션을 만듭니다.",
    brand_subtitle: "Miracle Morning Lab",
    nav_vision: "철학과 비전",
    nav_solution: "솔루션 미리보기",
    nav_about: "회사 소개",
    nav_roadmap: "로드맵",
    nav_contact: "문의하기",
    nav_status: "프로덕트 준비 중 (Coming Soon)",
    lang_select_label: "언어 선택:",

    // Hero
    hero_tag: "새로운 미라클 모닝 생태계를 짓고 있습니다",
    hero_title: `세상이 잠든 <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">새벽 4시</span>,<br class="hidden sm:inline" /> 당신의 기적이 시작됩니다`,
    hero_desc: `무리한 알람에 시달리는 고통스러운 기상이 아닙니다.<br class="hidden sm:inline" /> <strong class="text-white font-medium">dawn4</strong>는 온전한 나를 마주하는 새벽의 고요함을<br class="hidden sm:inline" /> 가장 확실한 삶의 성장 동력으로 바꾸는 솔루션을 준비하고 있습니다.`,
    hero_status_title: "솔루션 R&D 개발 진행 중",
    hero_status_desc: `현재 프로덕트의 완성도 높은 경험을 위해 비공개 개발 중입니다.<br class="hidden sm:inline" /> 정식 사전 등록 및 얼리액세스는 추후 본 홈페이지를 통해 안내됩니다.`,
    live_engine_badge: "Live Time Engine",

    // Philosophy
    vision_tag: "Philosophy & Mission",
    vision_title: `왜 사람들은 매번 <br class="sm:hidden" /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">미라클 모닝</span>에 실패할까요?`,
    vision_desc: `문제는 여러분의 '의지력'이 아닙니다.<br class="hidden sm:inline" /> 자극적인 알람과 무작정 일어나는 강박은 뇌와 몸에 피로만 남길 뿐입니다.<br /> dawn4는 과학적 수면 리듬과 자연스러운 몰입 설계로 새로운 기상 패러다임을 만듭니다.`,
    card_tag_problem: "기존의 문제",
    p1_title: "고통스러운 기상 알람",
    p1_desc: "신경을 긁는 굉음 알람은 코르티솔 분비를 촉진해 일어난 직후부터 뇌를 방어적이고 지치게 만듭니다.",
    p1_solution: "dawn4: 뇌파를 깨우는 바이오리듬 페이징",
    p2_title: "일어나서 뭘 할지 모름",
    p2_desc: "겨우 눈을 떠도 스마트폰 SNS를 켜거나 멍하니 시간을 보내다 결국 다시 잠자리에 드는 악순환이 반복됩니다.",
    p2_solution: "dawn4: 첫 60초 자동 몰입 플로우 설계",
    p3_title: "지속되지 않는 외로운 의지",
    p3_desc: "혼자만의 결심은 작심삼일로 끝나기 쉽고, 과도한 인증 카톡방은 피로와 부담을 가중시킵니다.",
    p3_solution: "dawn4: 조용한 연대감의 사일런트 메이트",
    vision_quote: `새벽 4시는 세상의 소음이 잠시 멈추고, <br class="hidden sm:inline" /> 온전히 <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 font-bold">내 삶의 주인공</span>으로 설 수 있는 유일한 시간대입니다.`,
    vision_quote_sub: "주식회사 dawn4가 꿈꾸는 새로운 라이프스타일",

    // Solution
    solution_heading: `dawn4가 준비 중인 <br class="sm:hidden" /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">핵심 솔루션 4가지</span>`,
    solution_heading_desc: "단순 기상 알람 앱을 넘어선, 아침의 시작부터 일상의 몰입까지 관통하는 스마트 모닝 라이프 시스템을 구축하고 있습니다.",
    pillar1_desc: "개인의 렘(REM) 수면과 바이오리듬을 분석하여 수면의 얕은 단계에서 뇌가 거부감 없이 눈을 뜨도록 돕는 감성 사운드 & 조도 엔진.",
    pillar1_f1: "무음부터 점진적으로 차오르는 앰비언트 사운드",
    pillar1_f2: "억지로 끄는 번거로움 대신 자연스러운 의식 회복 유도",
    pillar2_desc: "눈을 뜨자마자 무엇을 해야 할지 고민할 필요 없이, 물 한 잔부터 스트레칭, 독서, 프로젝트 작업까지 매끄럽게 연결되는 모닝 플로우.",
    pillar2_f1: "의사결정 피로를 없애주는 1-Click 루틴 시퀀스",
    pillar2_f2: "스마트폰 방해 요소를 완벽히 차단하는 새벽 몰입 모드",
    pillar3_desc: "말 한마디 오가지 않아도 같은 시각 깨어있는 전 세계 러너들의 등불이 은은하게 켜지며 느껴지는 고요하고 강력한 페이스메이커 연대감.",
    pillar3_f1: "소음과 비교 스트레스 없는 순수 존재 확인형 메이트",
    pillar3_f2: "새벽 4시 실시간 글로벌 라이브 램프 인터랙션",
    pillar4_desc: "단순 달력 체크가 아닌, 아침의 1시간이 하루 전체의 에너지 레벨과 업무 집중도에 미치는 상관관계를 인공지능이 분석해 제안합니다.",
    pillar4_f1: "나만의 바이오리듬 최적 기상 시간 자동 보정",
    pillar4_f2: "성취를 한눈에 보는 월간 모닝 성장 보고서",
    preorder_notice_title: "사전 예약 안내",
    preorder_notice_desc: "프로덕트의 프로토타입 검증 및 클로즈드 알파 테스트가 마무리되는 대로 공식 사전 예약과 얼리버드 혜택을 오픈할 예정입니다. 조금만 기다려 주세요!",

    // About
    about_tag: "About dawn4 Inc.",
    about_title: `우리는 사람의 잠재력이 깨어나는 <br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400">새벽의 힘을 믿습니다</span>`,
    about_desc1: "주식회사 dawn4는 인간의 가장 창의적이고 맑은 에너지가 발현되는 순간을 탐구하는 라이프테크(Life-Tech) 스타트업입니다.",
    about_desc2: "단순히 잠을 줄이라는 비현실적인 갓생을 강요하지 않습니다. 충분한 휴식과 건강한 수면을 전제로, 나만의 소중한 시간을 온전히 확보하여 삶의 주도권을 되찾아 드리는 기술과 문화를 만듭니다.",
    val1_title: "Clarity (명료함)",
    val1_desc: "방해 없는 새벽, 복잡한 생각을 비우고 오늘 하루의 본질에 집중합니다.",
    val2_title: "Sustainability (지속가능성)",
    val2_desc: "무리한 의지가 아닌 몸과 마음에 무리가 없는 라이프 사이클 루틴을 설계합니다.",
    val3_title: "Calm Focus (고요한 몰입)",
    val3_desc: "소음과 자극으로 가득 찬 세상에서 나만의 평화와 깊은 성장을 누립니다.",
    co_name_header: "주식회사 dawn4 (dawn4 Inc.)",
    co_label_name: "회사명",
    co_val_name: "주식회사 dawn4 (dawn4 Inc.)",
    co_label_purpose: "설립 목적",
    co_val_purpose: "미라클 모닝 & 라이프테크 솔루션 연구개발",
    co_label_product: "핵심 프로덕트",
    co_val_product: "dawn4 Miracle Morning Solution (출시 예정)",
    co_label_slogan: "비전 슬로건",
    co_label_status: "현재 상태",
    co_val_status: "프로덕트 기획 및 프로토타입 R&D",
    co_stat_target_label: "Target Morning Hour",
    co_stat_focus_label: "Daily Focus Potential",

    // Roadmap
    roadmap_tag: "Product Journey",
    roadmap_title: "2026 로드맵",
    roadmap_desc: "dawn4가 단계별로 만들어가는 미라클 모닝 생태계의 여정을 공유합니다.",
    step1_title: "dawn4 법인 설립 & 솔루션 코어 설계",
    step1_desc: "브랜드 아이덴티티 확립, 수면 과학 및 기상 심리학 연구, 1차 인터랙티브 프로토타입 검증 단계 진행 중.",
    step2_title: "비공개 클로즈드 알파 & 얼리액세스 오픈",
    step2_desc: "초기 테스터 그룹 대상의 클로즈드 테스트 진행 및 본 사이트를 통한 공식 사전 예약 개시 예정.",
    step3_title: "dawn4 공식 런칭 & 글로벌 모닝 커뮤니티",
    step3_desc: "iOS 및 Android 앱 공식 스토어 출시, 글로벌 사일런트 메이트 네트워크 확장 및 AI 루틴 코칭 고도화.",

    // Partnership Form & Contact (Formspree)
    form_badge: "PARTNERSHIP INQUIRY",
    form_title: "제휴 및 비즈니스 문의",
    form_desc: `dawn4와 함께 새로운 모닝 라이프 생태계를 만들어갈 파트너사를 모십니다.<br class="hidden sm:inline" /> 아래 양식을 작성해 주시면 담당자 검토 후 신속하게 연락드리겠습니다.`,
    form_label_company: "회사 / 기관명",
    form_placeholder_company: "예: (주)새벽연구소",
    form_label_name: "담당자 성함 및 직함",
    form_placeholder_name: "예: 홍길동 팀장",
    form_label_email: "이메일 주소",
    form_label_phone: "연락처 (선택)",
    form_placeholder_phone: "010-1234-5678",
    form_label_category: "제휴 유형",
    form_opt_biz: "비즈니스 및 서비스 협업",
    form_opt_content: "콘텐츠 및 마케팅 제휴",
    form_opt_b2b: "기업 웰니스 / B2B 솔루션 도입",
    form_opt_investment: "투자 및 IR 문의",
    form_opt_other: "기타 제휴 문의",
    form_label_message: "제휴 제안 내용",
    form_placeholder_message: "제휴 목적 및 구체적인 제안 내용을 간략히 적어주세요.",
    form_btn_submit: "제휴 제안 보내기",
    form_btn_sending: "전송 중...",
    form_success_title: "문의가 성공적으로 전달되었습니다!",
    form_success_desc: "소중한 제안 감사드립니다. dawn4 담당자가 검토 후 남겨주신 이메일로 빠르게 회신드리겠습니다.",
    form_error_msg: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도하시거나 contact@dawn4.com으로 직접 메일을 보내주세요.",
    form_alt_contact: "직접 이메일로 문의:",
    btn_copy_email: "이메일 복사",
    btn_copied: "복사 완료!",
    contact_note: "* 사전 예약 및 일반 서비스 신청은 추후 프로덕트 공개 시점에 별도 오픈됩니다.",

    // Footer
    footer_tagline: "The Miracle Morning Life-Tech Company",
    footer_vision: "비전",
    footer_solution: "솔루션",
    footer_about: "회사소개",
    footer_contact: "문의",

    // Quotes
    quotes: [
      "“가장 깊은 새벽은 언제나 가장 밝은 아침을 부릅니다.”",
      "“세상이 깨어나기 전, 오직 나만의 속도로 걷는 시간.”",
      "“새벽 4시의 고요함은 생각을 선명한 비전으로 만듭니다.”",
      "“지속 가능한 아침이 당신의 내일을 바꿉니다.”"
    ],
    clock_golden: "새벽 몰입 골든아워 진행 중 ✨",
    clock_countdown: (h, m) => `(다음 04:00까지 ${h}시간 ${m}분 남음)`
  },

  en: {
    page_title: "dawn4 | Where Your Miracle Begins at 4:00 AM",
    meta_desc: "dawn4 builds next-generation Miracle Morning solutions empowering sustainable focus and personal growth.",
    brand_subtitle: "Miracle Morning Lab",
    nav_vision: "Philosophy & Vision",
    nav_solution: "Solution Preview",
    nav_about: "About Us",
    nav_roadmap: "Roadmap",
    nav_contact: "Contact",
    nav_status: "Product in Development (Coming Soon)",
    lang_select_label: "Language:",

    // Hero
    hero_tag: "Building the next-generation Miracle Morning ecosystem",
    hero_title: `While the world sleeps at <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">4:00 AM</span>,<br class="hidden sm:inline" /> your miracle begins`,
    hero_desc: `Not a painful awakening driven by blaring alarms.<br class="hidden sm:inline" /> <strong class="text-white font-medium">dawn4</strong> transforms the tranquil silence of dawn<br class="hidden sm:inline" /> into your most powerful catalyst for personal growth.`,
    hero_status_title: "Solution R&D in Progress",
    hero_status_desc: `Currently under private development for an uncompromising product experience.<br class="hidden sm:inline" /> Official pre-registration and early access will be announced on this website.`,
    live_engine_badge: "Live Time Engine",

    // Philosophy
    vision_tag: "Philosophy & Mission",
    vision_title: `Why do people repeatedly struggle with <br class="sm:hidden" /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Miracle Morning</span>?`,
    vision_desc: `The issue is never a lack of willpower.<br class="hidden sm:inline" /> Harsh alarms and forced wake-ups only trigger fatigue and burnout.<br /> dawn4 pioneers a new paradigm with circadian science and friction-free focus design.`,
    card_tag_problem: "Conventional Problem",
    p1_title: "Painful Alarm Jolts",
    p1_desc: "Harsh sirens spike cortisol, putting your brain in survival mode and depleting your morning energy instantly.",
    p1_solution: "dawn4: Circadian gentle phase awakening",
    p2_title: "Morning Decision Paralysis",
    p2_desc: "Waking up without a structured flow leads to mindless scrolling, fatigue, and falling back asleep.",
    p2_solution: "dawn4: Instant 60-second frictionless focus flow",
    p3_title: "Unsustainable Solitary Willpower",
    p3_desc: "Relying on sheer grit leads to quick burnout, while noisy group chats create guilt and social exhaustion.",
    p3_solution: "dawn4: Noise-free silent accountability mates",
    vision_quote: `At 4:00 AM, the noise of the world fades, <br class="hidden sm:inline" /> and you can stand as the <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 font-bold">true author of your life</span>.`,
    vision_quote_sub: "The new lifestyle envisioned by dawn4 Inc.",

    // Solution
    solution_heading: `The 4 Core Pillars <br class="sm:hidden" /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Crafted by dawn4</span>`,
    solution_heading_desc: "Beyond a mere alarm app, we are engineering an intelligent morning system that bridges awakening to deep daily immersion.",
    pillar1_desc: "Analyzes individual REM sleep cycles and circadian cues to awaken the mind smoothly at the lightest sleep phase using ambient soundscapes.",
    pillar1_f1: "Subtle ambient soundscapes gradually rising from silence",
    pillar1_f2: "Natural conscious recovery instead of frantic alarm dismissal",
    pillar2_desc: "Eliminates morning friction by guiding you seamlessly from hydration and stretching into reading and deep work.",
    pillar2_f1: "1-Click routine sequence eliminating cognitive fatigue",
    pillar2_f2: "Zero-distraction dawn focus mode shielding your attention",
    pillar3_desc: "A serene yet empowering presence as dawn runners across the globe light up quiet beacons together without social friction.",
    pillar3_f1: "Pure presence confirmation free from chat noise and comparison",
    pillar3_f2: "Real-time 04:00 AM global ambient lantern synchronization",
    pillar4_desc: "Not just a calendar checkmark: AI analyzes how your morning hour correlates with daily energy levels and cognitive output.",
    pillar4_f1: "Personalized auto-calibration of optimal wake windows",
    pillar4_f2: "Comprehensive monthly morning growth and habit reports",
    preorder_notice_title: "Pre-registration Notice",
    preorder_notice_desc: "Official pre-registration and early-bird benefits will open as soon as prototype validation and closed alpha testing conclude. Stay tuned!",

    // About
    about_tag: "About dawn4 Inc.",
    about_title: `We believe in the transformative <br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400">power of dawn</span>`,
    about_desc1: "dawn4 Inc. is a life-tech startup dedicated to unlocking the hours when human clarity and creative vitality peak.",
    about_desc2: "We never advocate sleep deprivation or toxic hustle. Grounded in restorative sleep, we pioneer technology and culture that restore autonomy over your most precious hours.",
    val1_title: "Clarity",
    val1_desc: "In undisturbed dawn, clear mental clutter and focus purely on what matters most.",
    val2_title: "Sustainability",
    val2_desc: "Designing effortless circadian routines rather than relying on brittle willpower.",
    val3_title: "Calm Focus",
    val3_desc: "Cultivating inner peace and profound growth amidst a world saturated with noise.",
    co_name_header: "dawn4 Inc.",
    co_label_name: "Company",
    co_val_name: "dawn4 Inc.",
    co_label_purpose: "Mission",
    co_val_purpose: "Miracle Morning & Life-Tech Solution R&D",
    co_label_product: "Flagship",
    co_val_product: "dawn4 Miracle Morning Solution (Coming Soon)",
    co_label_slogan: "Vision",
    co_label_status: "Status",
    co_val_status: "Product Planning & Prototype R&D",
    co_stat_target_label: "Target Morning Hour",
    co_stat_focus_label: "Daily Focus Potential",

    // Roadmap
    roadmap_tag: "Product Journey",
    roadmap_title: "2026 Roadmap",
    roadmap_desc: "Sharing our milestone journey as dawn4 crafts the Miracle Morning ecosystem.",
    step1_title: "Incorporation & Core Solution Architecture",
    step1_desc: "Brand identity establishment, circadian research, and initial interactive prototype validation in progress.",
    step2_title: "Closed Alpha & Early Access Launch",
    step2_desc: "Closed pilot testing with initial cohorts and official pre-registration kickoff via this website.",
    step3_title: "Official Public Launch & Global Community",
    step3_desc: "Official App Store & Play Store launch, global silent network expansion, and advanced AI routine coaching.",

    // Partnership Form & Contact (Formspree)
    form_badge: "PARTNERSHIP INQUIRY",
    form_title: "Partnership & Business Inquiries",
    form_desc: `We welcome partners ready to pioneer the next morning lifestyle ecosystem with dawn4.<br class="hidden sm:inline" /> Please submit your inquiry below, and our team will get back to you promptly.`,
    form_label_company: "Company / Organization",
    form_placeholder_company: "e.g., Acme Corp",
    form_label_name: "Contact Name & Title",
    form_placeholder_name: "e.g., Jane Doe, Head of Growth",
    form_label_email: "Business Email",
    form_label_phone: "Phone Number (Optional)",
    form_placeholder_phone: "+1 555-0199",
    form_label_category: "Inquiry Type",
    form_opt_biz: "Business & Service Collaboration",
    form_opt_content: "Content & Marketing Partnership",
    form_opt_b2b: "Corporate Wellness / B2B Solution",
    form_opt_investment: "Investment & IR Inquiries",
    form_opt_other: "Other Inquiries",
    form_label_message: "Proposal Details",
    form_placeholder_message: "Please briefly describe your proposal and collaboration ideas.",
    form_btn_submit: "Submit Inquiry",
    form_btn_sending: "Sending...",
    form_success_title: "Inquiry Sent Successfully!",
    form_success_desc: "Thank you for reaching out. The dawn4 team will review your proposal and get back to you promptly.",
    form_error_msg: "An error occurred while sending. Please try again later or contact us directly at contact@dawn4.com.",
    form_alt_contact: "Or contact directly via email:",
    btn_copy_email: "Copy Email",
    btn_copied: "Copied!",
    contact_note: "* Pre-registration and service sign-up forms will open upon product unveiling.",

    // Footer
    footer_tagline: "The Miracle Morning Life-Tech Company",
    footer_vision: "Vision",
    footer_solution: "Solution",
    footer_about: "About",
    footer_contact: "Contact",

    // Quotes
    quotes: [
      "“The deepest dawn always welcomes the brightest morning.”",
      "“Before the world awakens, walk solely at your own pace.”",
      "“The silence of 4:00 AM turns restless thoughts into lucid vision.”",
      "“A sustainable morning transforms all your tomorrows.”"
    ],
    clock_golden: "Dawn Focus Golden Hour in Progress ✨",
    clock_countdown: (h, m) => `(${h}h ${m}m until next 04:00 AM)`
  }
};

let currentLang = 'ko';
let quoteIndex = 0;

// Change language globally
window.changeLanguage = function(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('dawn4_lang', lang);
  document.documentElement.lang = lang;

  // Title & Meta
  const titleEl = document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = translations[lang].page_title;
  const metaEl = document.getElementById('metaDescription');
  if (metaEl) metaEl.setAttribute('content', translations[lang].meta_desc);

  // Text content elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // HTML content elements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update button active states
  updateLangButtonStyles();

  // Update quote immediately
  updateQuote(true);

  // Update clock widget
  updateDawnClock();
};

function updateLangButtonStyles() {
  const isKo = currentLang === 'ko';

  const setBtnState = (btnKo, btnEn) => {
    if (!btnKo || !btnEn) return;
    if (isKo) {
      btnKo.className = 'px-2.5 py-1 rounded-full transition-all text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm';
      btnEn.className = 'px-2.5 py-1 rounded-full transition-all text-slate-400 hover:text-white';
    } else {
      btnEn.className = 'px-2.5 py-1 rounded-full transition-all text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm';
      btnKo.className = 'px-2.5 py-1 rounded-full transition-all text-slate-400 hover:text-white';
    }
  };

  setBtnState(document.getElementById('langKoDesktop'), document.getElementById('langEnDesktop'));
  setBtnState(document.getElementById('langKoMobileNav'), document.getElementById('langEnMobileNav'));
  setBtnState(document.getElementById('langKoDrawer'), document.getElementById('langEnDrawer'));
}

function updateQuote(immediate = false) {
  const quoteEl = document.getElementById('dawnQuoteText');
  if (!quoteEl) return;
  const quotes = translations[currentLang].quotes;

  if (immediate) {
    quoteEl.textContent = quotes[quoteIndex % quotes.length];
    return;
  }

  quoteEl.style.opacity = '0';
  setTimeout(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteEl.textContent = quotes[quoteIndex];
    quoteEl.style.opacity = '1';
  }, 300);
}

function updateDawnClock() {
  const liveClockDisplay = document.getElementById('liveClockDisplay');
  if (!liveClockDisplay) return;

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Target 04:00:00
  const target = new Date(now);
  target.setHours(4, 0, 0, 0);

  if (now >= target) {
    target.setDate(target.getDate() + 1);
  }

  const diffMs = target.getTime() - now.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);

  const pad = (n) => String(n).padStart(2, '0');
  const currentTimeStr = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  if (hours >= 4 && hours < 6) {
    liveClockDisplay.innerHTML = `<span class="text-white">${currentTimeStr}</span> <span class="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-sans ml-1">${translations[currentLang].clock_golden}</span>`;
  } else {
    liveClockDisplay.innerHTML = `<span class="text-white">${currentTimeStr}</span> <span class="text-xs text-slate-400 font-sans ml-1">${translations[currentLang].clock_countdown(diffHours, diffMins)}</span>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Footer year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Detect language: localStorage or browser language
  const savedLang = localStorage.getItem('dawn4_lang');
  if (savedLang && (savedLang === 'ko' || savedLang === 'en')) {
    changeLanguage(savedLang);
  } else {
    const browserLang = navigator.language && navigator.language.startsWith('en') ? 'en' : 'ko';
    changeLanguage(browserLang);
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Navbar scroll background effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('bg-dawn-950/95', 'shadow-lg', 'shadow-black/40');
    } else {
      navbar.classList.remove('bg-dawn-950/95', 'shadow-lg', 'shadow-black/40');
    }
  });

  // Quote rotation interval
  setInterval(() => {
    updateQuote(false);
  }, 7000);

  // Clock updates every second
  updateDawnClock();
  setInterval(updateDawnClock, 1000);

  // Formspree Partnership Form Handling (AJAX)
  const partnershipForm = document.getElementById('partnershipForm');
  const formSubmitBtn = document.getElementById('formSubmitBtn');
  const submitBtnText = document.getElementById('submitBtnText');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const formErrorAlert = document.getElementById('formErrorAlert');

  if (partnershipForm && formSubmitBtn && submitBtnText) {
    partnershipForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // UI state: submitting
      formSubmitBtn.disabled = true;
      formSubmitBtn.classList.add('opacity-75', 'cursor-not-allowed');
      submitBtnText.textContent = translations[currentLang].form_btn_sending;

      if (formSuccessAlert) formSuccessAlert.classList.add('hidden');
      if (formErrorAlert) formErrorAlert.classList.add('hidden');

      try {
        const formData = new FormData(partnershipForm);
        const response = await fetch(partnershipForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          partnershipForm.reset();
          if (formSuccessAlert) {
            formSuccessAlert.classList.remove('hidden');
            formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          if (window.lucide) {
            window.lucide.createIcons();
          }
        } else {
          if (formErrorAlert) {
            formErrorAlert.classList.remove('hidden');
          }
        }
      } catch (err) {
        if (formErrorAlert) {
          formErrorAlert.classList.remove('hidden');
        }
      } finally {
        formSubmitBtn.disabled = false;
        formSubmitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        submitBtnText.textContent = translations[currentLang].form_btn_submit;
      }
    });
  }

  // Copy Email Functionality
  const copyBtn = document.getElementById('copyEmailBtn');
  const contactEmail = document.getElementById('contactEmail');
  const copyBtnText = document.getElementById('copyBtnText');

  if (copyBtn && contactEmail && copyBtnText) {
    copyBtn.addEventListener('click', async () => {
      const email = contactEmail.textContent.trim();
      const currentSuccessText = translations[currentLang].btn_copied;
      const originalText = translations[currentLang].btn_copy_email;

      const triggerCopiedUI = () => {
        copyBtnText.textContent = currentSuccessText;
        copyBtn.classList.add('from-emerald-500', 'to-teal-500');
        setTimeout(() => {
          copyBtnText.textContent = originalText;
          copyBtn.classList.remove('from-emerald-500', 'to-teal-500');
        }, 2000);
      };

      try {
        await navigator.clipboard.writeText(email);
        triggerCopiedUI();
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        triggerCopiedUI();
      }
    });
  }
});
