/**
 * dawn4 - Google Analytics 4 (gtag.js) Integration
 * Measurement ID: G-8EEQN8DFFL
 * 사이트 전역 구글 통계 및 분석 스크립트 모듈
 */
(function() {
  const GA_MEASUREMENT_ID = 'G-8EEQN8DFFL';

  // 1. dataLayer 초기화 및 전역 gtag 함수 등록
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;

  // 2. 기본 구성 설정 (페이지 뷰 자동 전송)
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_location: window.location.href,
    page_title: document.title,
    send_page_view: true
  });

  // 3. HTML 내에 구글 태그 매니저 스크립트가 없을 경우 비동기 자동 로드
  if (!document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }
})();
