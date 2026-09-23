/**
 * dawn4 - Reusable Web Components Module
 * 중복 HTML 코드 방지 및 전역 참조용 웹 컴포넌트 정의
 * 
 * 제공 컴포넌트:
 * 1. <site-header current="blog|insights|privacy|terms|calculator|home"></site-header>
 * 2. <site-footer current="..."></site-footer>
 * 3. <author-box></author-box>
 */

// 1. 공통 헤더 컴포넌트 (<site-header>)
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const current = (this.getAttribute('current') || '').toLowerCase();

    const isBlog = current === 'blog';
    const isHome = current === 'home';
    const isCalc = current === 'calculator';
    const isInsights = current === 'insights';
    const isLegal = current === 'privacy' || current === 'terms';

    this.innerHTML = `
      <header class="border-b border-white/[0.08] bg-dawn-950/90 backdrop-blur-md sticky top-0 z-50">
        <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="index.html" class="flex items-center gap-3 group">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 p-[1.5px] shadow-lg shadow-orange-500/20">
              <div class="w-full h-full bg-dawn-950 rounded-[10px] flex items-center justify-center">
                <span class="text-transparent bg-clip-text bg-gradient-to-tr from-amber-400 to-rose-400 font-bold text-sm">d4</span>
              </div>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">dawn4</span>
              <span class="text-[10px] tracking-widest text-slate-400 font-medium uppercase">Miracle Morning Lab</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="index.html" class="${isHome ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'} transition-colors">홈 (Home)</a>
            <a href="blog.html" class="${isBlog ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'} transition-colors flex items-center gap-1.5">
              <span>블로그 (Blog)</span>
              <span class="px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">10 Posts</span>
            </a>
            <a href="index.html#calculator" class="${isCalc ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'} transition-colors">수면 계산기</a>
            <a href="index.html#contact" class="hover:text-amber-400 transition-colors">제휴 문의</a>
          </nav>

          <!-- Mobile Hamburger Toggle -->
          <div class="md:hidden flex items-center gap-2">
            <a href="index.html#calculator" class="text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">수면 계산기</a>
            <button type="button" class="site-mobile-toggle p-2 text-slate-400 hover:text-white focus:outline-none" aria-label="메뉴 열기">
              <i data-lucide="menu" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <div class="site-mobile-drawer hidden md:hidden border-t border-white/[0.08] bg-dawn-900/95 px-6 py-4 space-y-3">
          <a href="index.html" class="block text-sm py-1.5 ${isHome ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}">홈 (Home)</a>
          <a href="blog.html" class="block text-sm py-1.5 ${isBlog ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'} flex items-center justify-between">
            <span>블로그 (Blog)</span>
            <span class="px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">10 Posts</span>
          </a>
          <a href="index.html#calculator" class="block text-sm py-1.5 text-slate-300 hover:text-white">수면 계산기</a>
          <a href="index.html#contact" class="block text-sm py-1.5 text-slate-300 hover:text-white">제휴 문의</a>
        </div>
      </header>
    `;

    // Mobile Toggle Logic
    const toggleBtn = this.querySelector('.site-mobile-toggle');
    const drawer = this.querySelector('.site-mobile-drawer');
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        drawer.classList.toggle('hidden');
      });
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}
customElements.define('site-header', SiteHeader);

// 2. 공통 푸터 컴포넌트 (<site-footer>)
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const currentYear = new Date().getFullYear();
    const current = (this.getAttribute('current') || '').toLowerCase();
    const isBlog = current === 'blog';

    this.innerHTML = `
      <footer class="py-12 px-6 border-t border-white/[0.06] bg-dawn-950 text-slate-500 text-xs">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <span class="text-slate-300 font-bold">dawn4 Inc.</span>
            <span>|</span>
            <span>The Miracle Morning Life-Tech Company</span>
          </div>
          <div class="flex flex-wrap items-center gap-6">
            <a href="index.html" class="hover:text-slate-300 transition-colors">홈</a>
            <a href="blog.html" class="${isBlog ? 'text-amber-400 font-medium' : 'hover:text-slate-300'} transition-colors">블로그</a>
            <a href="index.html#calculator" class="hover:text-slate-300 transition-colors">수면 계산기</a>
            <a href="privacy.html" class="hover:text-slate-300 transition-colors">개인정보처리방침</a>
            <a href="terms.html" class="hover:text-slate-300 transition-colors">이용약관</a>
          </div>
          <p>&copy; ${currentYear} dawn4 Inc. All rights reserved.</p>
        </div>
      </footer>
    `;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}
customElements.define('site-footer', SiteFooter);

// 3. E-E-A-T 공통 저자 및 연구팀 인증 프로필 박스 (<author-box>)
class AuthorBox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="my-10 p-6 rounded-2xl bg-dawn-900/60 border border-white/[0.08] flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg shadow-orange-500/20">
          d4
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h4 class="text-sm font-bold text-white">dawn4 수면신경과학 & 행동분석 연구팀</h4>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">Verified E-E-A-T</span>
          </div>
          <p class="text-xs text-slate-400 mt-1 leading-relaxed">
            인간의 서카디언 리듬 생물학과 수면 의학, 행동경제학 논문을 기반으로 일상에서 검증 가능한 최적의 기상·수면 루틴 프로토콜을 연구하고 보급합니다.
          </p>
        </div>
      </div>
    `;
  }
}
customElements.define('author-box', AuthorBox);
