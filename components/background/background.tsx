import Script from 'next/script';

export default function BackgroundComponent({children}: {children: React.ReactNode}) {
  return (
    <div className="canvas-wrap">
      <div className="canvas-content">
        {children}
      </div>
    <div id="canvas"></div>
      {/* Load scripts */}
      <Script src="/js/three.min.js" strategy="afterInteractive" />
      <Script src="/js/projector.js" strategy="afterInteractive" />
      <Script src="/js/canvas-renderer.js" strategy="afterInteractive" />
      <Script src="/js/3d-lines-animation.js" strategy="afterInteractive" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script src="/js/color.js" strategy="afterInteractive" />
    </div>
  );
}