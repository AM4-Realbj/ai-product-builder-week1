// dawn4 interactive features

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

  // Live Dawn Time Engine
  const liveClockDisplay = document.getElementById('liveClockDisplay');
  const dawnQuoteText = document.getElementById('dawnQuoteText');

  const quotes = [
    "“가장 깊은 새벽은 언제나 가장 밝은 아침을 부릅니다.”",
    "“세상이 깨어나기 전, 오직 나만의 속도로 걷는 시간.”",
    "“새벽 4시의 고요함은 생각을 선명한 비전으로 만듭니다.”",
    "“지속 가능한 아침이 당신의 내일을 바꿉니다.”"
  ];

  let quoteIndex = 0;
  setInterval(() => {
    if (dawnQuoteText) {
      dawnQuoteText.style.opacity = '0';
      setTimeout(() => {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        dawnQuoteText.textContent = quotes[quoteIndex];
        dawnQuoteText.style.opacity = '1';
      }, 300);
    }
  }, 7000);

  function updateDawnClock() {
    if (!liveClockDisplay) return;

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Target 04:00:00
    const target = new Date(now);
    target.setHours(4, 0, 0, 0);

    // If already past 4am today, target is tomorrow 4am
    if (now >= target) {
      target.setDate(target.getDate() + 1);
    }

    const diffMs = target.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');
    const currentTimeStr = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    // Special message if currently between 04:00 and 06:00
    if (hours >= 4 && hours < 6) {
      liveClockDisplay.innerHTML = `<span class="text-white">${currentTimeStr}</span> <span class="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-sans ml-1">새벽 몰입 골든아워 진행 중 ✨</span>`;
    } else {
      liveClockDisplay.innerHTML = `<span class="text-white">${currentTimeStr}</span> <span class="text-xs text-slate-400 font-sans ml-1">(다음 04:00까지 ${diffHours}시간 ${diffMins}분 남음)</span>`;
    }
  }

  updateDawnClock();
  setInterval(updateDawnClock, 1000);

  // Copy Email Functionality
  const copyBtn = document.getElementById('copyEmailBtn');
  const contactEmail = document.getElementById('contactEmail');
  const copyBtnText = document.getElementById('copyBtnText');

  if (copyBtn && contactEmail) {
    copyBtn.addEventListener('click', async () => {
      const email = contactEmail.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        copyBtnText.textContent = '복사 완료!';
        copyBtn.classList.add('from-emerald-500', 'to-teal-500');
        setTimeout(() => {
          copyBtnText.textContent = '이메일 복사';
          copyBtn.classList.remove('from-emerald-500', 'to-teal-500');
        }, 2000);
      } catch (err) {
        // Fallback for codespace / iframe permissions
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copyBtnText.textContent = '복사 완료!';
        setTimeout(() => {
          copyBtnText.textContent = '이메일 복사';
        }, 2000);
      }
    });
  }
});
