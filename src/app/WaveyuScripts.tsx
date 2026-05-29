"use client";

import { useEffect } from "react";

const scripts = [
  "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=697a02e6f32a15a9f2b4adfc",
  "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js",
  "https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js",
  "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js",
  "https://cdn.prod.website-files.com/gsap/3.15.0/CustomEase.min.js",
  "https://cdn.prod.website-files.com/gsap/3.15.0/CustomWiggle.min.js",
  "https://cdn.prod.website-files.com/697a02e6f32a15a9f2b4adfc/js/webflow.85a1c9ed.d7f63c770377a12f.js",
] as const;

type WebflowWindow = Window & {
  Webflow?: {
    destroy?: () => void;
    ready?: () => void;
    require?: (module: string) => { init?: () => void };
  };
};

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${src}"]`,
    );

    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }

    const script = existing ?? document.createElement("script");
    script.src = src;
    script.async = false;
    script.type = "text/javascript";
    script.dataset.waveyuRuntime = "true";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));

    if (!existing) {
      document.body.appendChild(script);
    }
  });
}

export default function WaveyuScripts() {
  useEffect(() => {
    let cancelled = false;

    const boot = async () => {
      for (const script of scripts) {
        await loadScript(script);
      }

      if (cancelled) {
        return;
      }

      const webflow = (window as WebflowWindow).Webflow;
      webflow?.destroy?.();
      webflow?.ready?.();
      webflow?.require?.("ix2")?.init?.();
    };

    boot().catch((error) => {
      console.error(error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
