import React, { useState } from "react";
import { UGABYTE_APP_META, UGABYTE_WEB_APP_URL } from "../config/ugabyte";
import {
  Download,
  Globe,
  Copy,
  Check,
  HelpCircle,
  Smartphone,
  ArrowUpRight,
  ShieldCheck,
  Laptop,
  Zap,
} from "lucide-react";

interface DownloadSectionProps {
  onDownloadApk: () => void;
  onOpenWebApp: () => void;
  onOpenInstallGuide: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  onDownloadApk,
  onOpenWebApp,
  onOpenInstallGuide,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(UGABYTE_APP_META.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download" className="py-20 md:py-28 border-b border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold text-accent mb-2">
            Instant Access
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-ink tracking-tight text-balance">
            Get UgaByte on any device.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Official Android APK */}
          <div className="bg-card border border-subtle rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center text-accent">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-secondary-ink tabular-nums">
                  <span>{UGABYTE_APP_META.version}</span>
                  <span aria-hidden="true">·</span>
                  <span>{UGABYTE_APP_META.fileSize}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary-ink mb-2">
                Android App (APK)
              </h3>
              <p className="text-sm text-secondary-ink leading-relaxed mb-6">
                Lightweight native build optimized for low campus data usage and instant push alerts.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={onDownloadApk}
                className="w-full py-3.5 px-6 rounded-xl btn-primary-lime text-sm font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              >
                <Download className="w-4 h-4 stroke-[2.25]" />
                <span>Download APK ({UGABYTE_APP_META.fileSize})</span>
              </button>

              <div className="pt-3 border-t border-subtle flex items-center justify-between text-xs text-secondary-ink">
                <button
                  onClick={handleCopyHash}
                  className="inline-flex items-center gap-1.5 hover:text-primary-ink transition-colors font-mono focus:outline-none"
                  title="Copy SHA-256 Checksum"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>SHA-256: {UGABYTE_APP_META.sha256.slice(0, 6)}...</span>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-accent" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>

                <button
                  onClick={onOpenInstallGuide}
                  className="inline-flex items-center gap-1 font-semibold text-accent hover:underline focus:outline-none"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Install Guide</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Instant Web App (PWA) */}
          <div className="bg-card border border-subtle rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center text-accent">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs text-secondary-ink font-medium">
                  <span>iOS</span>
                  <span aria-hidden="true">·</span>
                  <span>Desktop</span>
                  <span aria-hidden="true">·</span>
                  <span>Android</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary-ink mb-2">
                UgaByte Web App
              </h3>
              <p className="text-sm text-secondary-ink leading-relaxed mb-6">
                Zero download required. Access the full campus marketplace directly in Safari, Chrome, or desktop browsers.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={UGABYTE_WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenWebApp}
                className="w-full py-3.5 px-6 rounded-xl bg-surface hover:bg-elevated border border-subtle text-primary-ink text-sm font-bold flex items-center justify-center gap-2 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cef11c]"
              >
                <span>Open Web App</span>
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </a>

              <div className="pt-3 border-t border-subtle flex items-center justify-between text-xs text-secondary-ink">
                <span className="inline-flex items-center gap-1.5">
                  <Laptop className="w-3.5 h-3.5 text-accent" />
                  <span>Works on iPhone &amp; PC</span>
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-primary-ink">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  <span>Instant Launch</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
