import React from "react";
import {
  UGABYTE_CONTACT_EMAIL,
  UGABYTE_PHONE,
  UGABYTE_SOCIALS,
} from "../config/ugabyte";
import { UgaByteLogo } from "./UgaByteLogo";
import { Mail, Phone, ExternalLink, Download } from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms" | "cookie" | "refund") => void;
  onOpenInstallGuide: () => void;
  onDownloadApk: () => void;
  onOpenWebApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onOpenInstallGuide,
  onDownloadApk,
  onOpenWebApp,
}) => {
  return (
    <footer className="w-full bg-[#090A0E] border-t border-[#232936] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#232936]/80">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="inline-block hover:brightness-110 transition-all">
              <UgaByteLogo className="h-8" />
            </a>
            <p className="text-xs sm:text-sm text-[#8E98A8] max-w-sm leading-relaxed">
              Your campus. One app. Discover deals, buy &amp; sell with peer trust, attend campus events, and connect with verified student businesses across Kampala.
            </p>
            <div className="pt-2 text-xs text-[#8E98A8] space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#cef11c]" />
                <a
                  href={`mailto:${UGABYTE_CONTACT_EMAIL}`}
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  {UGABYTE_CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#cef11c]" />
                <a
                  href={`tel:${UGABYTE_PHONE}`}
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  {UGABYTE_PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="text-[11px] font-black uppercase tracking-wider text-[#FFFFFF]">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs text-[#8E98A8]">
              <li>
                <a href="#features" className="hover:text-[#cef11c] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#cef11c] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#students" className="hover:text-[#cef11c] transition-colors">
                  For Students
                </a>
              </li>
              <li>
                <a href="#sellers" className="hover:text-[#cef11c] transition-colors">
                  For Businesses
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#cef11c] transition-colors">
                  About Mission
                </a>
              </li>
            </ul>
          </div>

          {/* Product Column */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[11px] font-black uppercase tracking-wider text-[#FFFFFF]">
              Product Access
            </h5>
            <ul className="space-y-2 text-xs text-[#8E98A8]">
              <li>
                <button
                  onClick={onDownloadApk}
                  className="hover:text-[#cef11c] transition-colors flex items-center gap-1.5 focus:outline-none"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Android APK</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWebApp}
                  className="hover:text-[#cef11c] transition-colors flex items-center gap-1.5 focus:outline-none"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Web App (PWA)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenInstallGuide}
                  className="hover:text-[#cef11c] transition-colors focus:outline-none"
                >
                  APK Installation Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Social Column */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[11px] font-black uppercase tracking-wider text-[#FFFFFF]">
              Legal &amp; Connect
            </h5>
            <ul className="space-y-2 text-xs text-[#8E98A8]">
              <li>
                <button
                  onClick={() => onOpenLegal("privacy")}
                  className="hover:text-[#cef11c] transition-colors focus:outline-none"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("terms")}
                  className="hover:text-[#cef11c] transition-colors focus:outline-none"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("cookie")}
                  className="hover:text-[#cef11c] transition-colors focus:outline-none"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("refund")}
                  className="hover:text-[#cef11c] transition-colors focus:outline-none"
                >
                  Refund Policy
                </button>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={UGABYTE_SOCIALS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#8E98A8] hover:text-[#cef11c] transition-colors"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
              <span className="text-[#323B4E]">·</span>
              <a
                href={UGABYTE_SOCIALS.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#8E98A8] hover:text-[#cef11c] transition-colors"
                aria-label="Twitter"
              >
                X / Twitter
              </a>
              <span className="text-[#323B4E]">·</span>
              <a
                href={UGABYTE_SOCIALS.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#8E98A8] hover:text-[#cef11c] transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E98A8]/80 gap-3 text-center sm:text-left">
          <div>
            © 2026 UgaByte Technologies. Built for campus hustlers. All rights reserved.
          </div>
          <div>
            Active in Kampala: Makerere University, MUBS Nakawa &amp; Kyambogo.
          </div>
        </div>
      </div>
    </footer>
  );
};
