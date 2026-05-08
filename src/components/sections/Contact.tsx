"use client";

import { useState, useRef } from "react";
import { WHATSAPP_BASE, SITE_CONFIG } from "@/lib/constants";
import type { FormState } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

const EMPTY_FORM: FormState = { name: "", phone: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleReset = () => {
    setSubmitted(false);
    setForm(EMPTY_FORM);
  };

  const buildWaLink = (f: FormState) => {
    const text = `Olá! Me chamo ${f.name}${f.phone ? ` (${f.phone})` : ""}.\n\n${f.message}`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  };

  const isValid = form.name.trim().length > 0 && form.message.trim().length > 0;

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Fale Conosco"
          title="Contato"
          subtitle="Entre em contato para solicitar atendimento, tirar dúvidas ou fazer seu pedido. Respondemos rapidamente!"
        />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div className="flex flex-col gap-4">
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white rounded-2xl p-5 flex items-center gap-4 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-widest text-green-200 mb-0.5">WhatsApp — Contato Rápido</div>
                <div className="text-xl font-extrabold">(15) 99771-9681</div>
                <div className="text-green-200 text-sm">Clique para conversar agora</div>
              </div>
            </a>

            <a href={`mailto:${SITE_CONFIG.email}`} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4 hover:border-blue-200 transition-colors">
              <span className="text-2xl">✉️</span>
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest">E-mail</div>
                <div className="font-semibold text-blue-700 text-sm">{SITE_CONFIG.email}</div>
              </div>
            </a>

            <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest">Localização</div>
                <div className="font-semibold text-blue-700 text-sm">{SITE_CONFIG.location}</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-700 rounded-full inline-block" />
              Enviar Mensagem via WhatsApp
            </h3>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="font-bold text-blue-800 text-lg mb-2">Mensagem enviada!</h4>
                <p className="text-gray-500 text-sm">Você foi redirecionado ao WhatsApp. Aguarde nosso retorno em breve.</p>
                <button type="button" onClick={handleReset} className="mt-6 text-blue-600 hover:underline text-sm font-medium">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="text-xs font-semibold text-gray-500 mb-1 block">Nome completo *</label>
                    <input
                      id="name" type="text" name="name" value={form.name}
                      onChange={handleChange} placeholder="Seu nome" required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold text-gray-500 mb-1 block">Telefone / WhatsApp</label>
                    <input
                      id="phone" type="tel" name="phone" value={form.phone}
                      onChange={handleChange} placeholder="(15) 99771-9681"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-500 mb-1 block">Mensagem *</label>
                  <textarea
                    id="message" name="message" value={form.message}
                    onChange={handleChange} rows={5} required
                    placeholder="Descreva o instrumento ou produto que você procura..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  {/* Link oculto acionado pelo botão — funciona em mobile */}
                  <a
                    ref={linkRef}
                    href={buildWaLink(form)}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    disabled={!isValid}
                    onClick={() => {
                      if (!isValid) return;
                      linkRef.current?.setAttribute("href", buildWaLink(form));
                      linkRef.current?.click();
                      setSubmitted(true);
                    }}
                    className={`w-full font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm text-white ${
                      isValid ? "bg-green-500 hover:bg-green-600" : "bg-green-300 cursor-not-allowed"
                    }`}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {isValid ? "Enviar via WhatsApp" : "Preencha nome e mensagem"}
                  </button>
                  <a
                    href={WHATSAPP_BASE}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    Abrir WhatsApp Direto
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}