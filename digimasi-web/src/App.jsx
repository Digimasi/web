import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  Clapperboard,
  Film,
  Mail,
  MessageCircle,
  PlayCircle,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import logoDigimasi from "./assets/logo-digimasi.jpeg";

const BRAND_NAME = "DIGIMASI";
const TAGLINE = "Mengubah materi menjadi visual animasi";
const WHATSAPP_NUMBER = "62895622562022";
const TIKTOK_URL = "https://www.tiktok.com/@digi.masi";
const EMAIL = ""; // Optional. Isi kalau mau pakai email.

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const canvaPackages = [
  {
    id: "paket-1",
    name: "Paket 1",
    subtitle: "Cocok untuk tugas sekolah sederhana",
    price: 30000,
    video: "/videos/PAKET3.mp4",
    desc: "Video animasi seperti PPT, dominan teks, dan satu karakter pembicara.",
    note: "Tidak ada scene/alur cerita.",
    examples: [
  { title: "Contoh Video 1", video: "" },
],
  },
  {
    id: "paket-2",
    name: "Paket 2",
    subtitle: "Cocok untuk tugas kampus yang masih simpel",
    price: 60000,
    video: "/videos/PAKET2.mp4",
    desc: "Video animasi dibuat melalui Canva tanpa aset luar seperti Google atau AI.",
    note: "Karakter pembicara bisa lebih dari 1.",
    examples: [
  { title: "Contoh Video 1", video: "" },
],
  },
  {
    id: "paket-3",
    name: "Paket 3",
    subtitle: "Cocok untuk tugas LATSAR, Edukasi Kesehatan Kompleks",
    price: 90000,
    video: "/videos/PAKET1.mp4",
    desc: "Video animasi membutuhkan aset dari luar Canva.",
    note: "Aset bisa dari AI, Google, atau sumber visual tambahan lain.",
    examples: [
  { title: "Contoh Video 1", video: "" },
],
  },
];

const deadlines = [
  { id: "normal", label: "Normal", duration: "1 minggu", extraPerMinute: 0 },
  { id: "express", label: "Express", duration: "4 hari", extraPerMinute: 15000 },
  { id: "priority", label: "Priority", duration: "2 hari", extraPerMinute: 25000 },
  { id: "urgent", label: "Urgent", duration: "1 hari", extraPerMinute: 40000 },
];

const services = [
  {
    title: "Animasi Edukasi Canva",
    desc: "Animasi edukasi & storytelling visual untuk materi yang lebih mudah dipahami, cocok untuk tugas, presentasi, dan konten pembelajaran.",
    icon: Clapperboard,
  },
  {
    title: "Animasi 3D AI",
    desc: "AI-generated cinematic storytelling untuk konten visual yang modern, unik, dan punya nuansa lebih sinematik.",
    icon: Wand2,
  },
  {
    title: "Short Content Editing",
    desc: "Editing TikTok/Reels modern dengan pacing cepat, subtitle, SFX, dan visual hook agar konten lebih engaging.",
    icon: Film,
  },
];

const designGraphicItems = 
[
  {
    id: "poster",
    label: "Poster",
    priceText: "Start from Rp 35.000",
    examples: [
      { title: "Poster 1", image: "" },
      { title: "Poster 2", image: "" },
      { title: "Poster 3", image: "" },
      { title: "Poster 4", image: "" },
      { title: "Poster 5", image: "" },
    ],
  },
  {
    id: "carousel",
    label: "Carousel",
    priceText: "Start from Rp 70.000",
    examples: [
      { title: "Carousel 1", image: "" },
      { title: "Carousel 2", image: "" },
    ],
  },
  {
    id: "banner",
    label: "Banner",
    priceText: "Start from Rp 35.000",
    examples: [
      { title: "Banner 1", image: "" },
      { title: "Banner 2", image: "" },
      { title: "Banner 3", image: "" },
    ],
  },
  {
    id: "thumbnail",
    label: "Thumbnail",
    priceText: "Start from Rp 25.000",
    examples: [
      { title: "Thumbnail 1", image: "" },
      { title: "Thumbnail 2", image: "" },
      { title: "Thumbnail 3", image: "" },
    ],
  },
];

const showcase = [
  {
    title: "Animasi Edukasi Canva",
    label: "Explainer Animation",
    gradient: "from-[#16a34a] to-[#86efac]",
  },
  {
    title: "Animasi 3D AI",
    label: "Cinematic Storytelling",
    gradient: "from-[#14532d] to-[#22c55e]",
  },
  {
    title: "Content Editing",
    label: "TikTok / Reels",
    gradient: "from-[#84cc16] to-[#22c55e]",
  },
];

const servicePricing = {
  motion: {
    label: "Animasi Edukasi Canva",
    unit: "per menit",
    quantityLabel: "Durasi video (menit)",
    addons: [
      { id: "script", label: "Script Writing", price: 50000 },
      { id: "voice-ai", label: "Voice Over AI", price: 15000 },
      { id: "sfx", label: "SFX", price: 15000 },
      { id: "subtitle", label: "Subtitle", price: 10000 },
      { id: "custom-character", label: "Custom Character", price: 15000 },
    ],
  },
  ai: {
    label: "Animasi 3D AI",
    base: 45000,
    unit: "menit",
    quantityLabel: "Durasi menit",
    addons: [
      { id: "script", label: "Script Writing", price: 30000 },
      { id: "subtitle", label: "Subtitle", price: 10000 },
      { id: "custom-character", label: "Custom Character", price: 15000 },
      { id: "extra-revision", label: "Extra Revision", price: 50000 },
    ],
  },
  short: {
    label: "Short Content Editing",
    base: 45000,
    unit: "menit",
    quantityLabel: "Durasi menit",
    addons: [
      { id: "subtitle", label: "Subtitle", price: 10000 },
      { id: "sfx", label: "SFX", price: 15000 },
      { id: "thumbnail", label: "Thumbnail Cover", price: 25000 },
    ],
  },
};

const orderSteps = [
  "Pilih layanan",
  "Hubungi via WhatsApp",
  "Kirim brief",
  "Payment DP 50%",
  "Pengerjaan",
  "Admin memberi screenshot bahwa project sudah selesai",
  "Pelunasan",
  "Admin memberikan desain/animasi/video",
  "Revisi jika ada",
];

export default function DigimasiLandingPage() {
  const [selectedService, setSelectedService] = useState("motion");
  const [selectedPackage, setSelectedPackage] = useState("paket-3");
  const [selectedDeadline, setSelectedDeadline] = useState("normal");
  const [selectedDesign, setSelectedDesign] = useState("poster");
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const currentDesign =
    designGraphicItems.find((item) => item.id === selectedDesign) ||
    designGraphicItems[0];

  const currentService = servicePricing[selectedService];
  const currentPackage = canvaPackages.find((item) => item.id === selectedPackage) || canvaPackages[0];
  const currentDeadline = deadlines.find((item) => item.id === selectedDeadline) || deadlines[0];

  const basePrice = selectedService === "motion" ? currentPackage.price : currentService.base;

  const estimatedPrice = useMemo(() => {
    const safeQuantity = Math.max(1, Number(quantity) || 1);
    const deadlineExtra =
      selectedService === "motion" ? currentDeadline.extraPerMinute * safeQuantity : 0;

    const addonsTotal = currentService.addons
      .filter((addon) => selectedAddons.includes(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0);

    return basePrice * safeQuantity + deadlineExtra + addonsTotal;
  }, [basePrice, currentDeadline, currentService, quantity, selectedAddons, selectedService]);

  const selectedAddonLabels = currentService.addons
    .filter((addon) => selectedAddons.includes(addon.id))
    .map((addon) => addon.label)
    .join(", ");

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleServiceChange = (value) => {
    setSelectedService(value);
    setSelectedAddons([]);
    setQuantity(1);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Digimasi, aku mau order ${currentService.label}.\n${
      selectedService === "motion" ? `Paket: ${currentPackage.name}\n` : ""
    }${currentService.quantityLabel}: ${quantity}\nDeadline: ${
      selectedService === "motion" ? `${currentDeadline.label} (${currentDeadline.duration})` : "Normal"
    }\nAdd-on: ${selectedAddonLabels || "Tidak ada"}\nEstimasi harga: ${formatRupiah(
      estimatedPrice
    )}\nBoleh info detailnya?`
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ec] text-[#244536]">
      <section className="relative px-5 py-6 md:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[#f7f4ec]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f4ec] to-transparent" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-[2rem] border border-[#e7ddc8] bg-white/80 px-5 py-4 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <img
              src={logoDigimasi}
              alt="Logo Digimasi"
              className="h-16 w-16 rounded-2xl object-cover"
            />
            <span className="text-xl font-bold tracking-[0.16em] text-[#244536]">
              {BRAND_NAME}
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-bold text-[#244536]/75 md:flex">
            <a href="#showcase" className="transition hover:text-[#17c95b]">Paket & Portfolio</a>
            <a href="#estimator" className="transition hover:text-[#17c95b]">Kalkulator Harga</a>
            <a href="#contact" className="transition hover:text-[#17c95b]">Contact</a>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            className="rounded-full bg-[#17df64] px-6 py-3 text-sm font-bold text-[#244536] shadow-xl shadow-green-300/40 transition hover:scale-[1.03] hover:bg-[#13d45d]"
          >
            Pesan Sekarang
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 py-14 text-center lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-4 py-2 text-sm font-bold text-[#244536] shadow-sm">
              <Zap size={15} className="text-[#17c95b]" /> Animasi Canva • Animasi 3D AI • Short Content
            </div>

            <h1 className="max-w-3xl text-1xl font-bold leading-[1.35] tracking-tight md:text-3xl lg:text-6xl">
              Mengubah{" "}
              <span className="relative inline-block px-1 text-transparent [-webkit-text-stroke:2px_#244536]">
                <span className="relative z-10">Materi</span>
                <span className="pointer-events-none absolute inset-0 z-0 flex flex-wrap items-center justify-center gap-x-2 overflow-hidden rounded-2xl opacity-0">
                  {["materi", "materi", "materi", "materi", "materi", "materi"].map((word, index) => (
                    <span key={index} className="text-[19px] font-bold leading-none text-[#17df64]">
                      {word}
                    </span>
                  ))}
                </span>
              </span>
              <br />
              Menjadi Visual{" "}
              <span className="inline-flex text-[#17df64]">
                {"animasi".split("").map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    className="inline-block"
                    animate={{
                      y: [0, -5, 0, 3, 0],
                      rotate: [0, -3, 3, -2, 0],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.08,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>


<p className="mx-auto mt-4 max-w-2xl text-lg leading-9 text-[#244536]/60">
  Digimasi membantu mengubah isi materi menjadi visual yang lebih menarik,
  mudah dipahami, dan enak dilihat.
</p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#showcase"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#244536] px-7 py-4 font-bold text-white shadow-lg transition hover:scale-[1.03]"
              >
                <PlayCircle size={20} /> Lihat Portofolio
              </a>
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#17df64] px-7 py-4 font-bold text-[#244536] shadow-xl shadow-green-300/40 transition hover:scale-[1.03]"
              >
                Hitung Harga <Calculator size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#17df64]/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-[#e7ddc8] bg-white/80 p-3 shadow-2xl shadow-green-900/10 backdrop-blur-xl">
              <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#244536] via-[#2c6b4b] to-[#17df64]">
                <video
                  src="/videos/hero-showcase.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="showcase" className="px-5 py-14 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#17c95b]">Paket & Portfolio</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#244536] md:text-6xl">Paket Animasi Canva</h2>
            </div>
            <p className="max-w-md text-[#244536]/60">
              Pilih paket sesuai kebutuhan visual dan tingkat detail animasi.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {canvaPackages.map((item) => (
              <div key={item.id} className="rounded-[2rem] border border-[#e7ddc8] bg-white/80 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10">
                <div className="mb-5 inline-flex rounded-full bg-[#17df64]/15 px-4 py-2 text-sm font-bold text-[#159447]">
                  {formatRupiah(item.price)} / menit
                </div>
                <h3 className="text-3xl font-bold text-[#244536]">{item.name}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-[#17c95b]">
                  {item.subtitle}
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl">
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="aspect-video w-full object-cover"
                  />
                </div>
                <p className="mt-4 leading-7 text-[#244536]/65">{item.desc}</p>
                <p className="mt-4 rounded-2xl bg-[#f7f4ec] p-4 text-sm font-bold leading-6 text-[#244536]/65">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {showcase.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group overflow-hidden rounded-[2rem] border border-[#e7ddc8] bg-white/80 p-3 shadow-sm"
              >
                <div className={`grid aspect-video place-items-center rounded-[1.4rem] bg-gradient-to-br ${item.gradient} transition duration-300 group-hover:scale-[1.02]`}>
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white/25 text-white backdrop-blur">
                    <PlayCircle size={34} />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-lg font-bold text-[#244536]">{item.title}</p>
                  <p className="mt-1 text-sm text-[#244536]/55">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-14 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#17c95b]">
              Services
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#244536] md:text-6xl">
              Layanan Digimasi
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-[#e7ddc8] bg-white/80 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
                >
                  <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-[#17df64] text-[#244536] shadow-lg shadow-green-300/30">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#244536]">{service.title}</h3>
                  <p className="mt-4 leading-7 text-[#244536]/60">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-[2rem] border border-[#e7ddc8] bg-white/80 p-6 shadow-sm">
            <p className="mb-4 font-bold text-[#244536]">Desain Grafis</p>

            <div className="flex flex-wrap gap-3">
              {designGraphicItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedDesign(item.id)}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                    selectedDesign === item.id
                      ? "bg-[#17df64] text-[#244536] shadow-lg shadow-green-200/40"
                      : "bg-[#f7f4ec] text-[#244536]/65 hover:bg-[#17df64]/20"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-4 flex flex-col gap-2">
                <p className="text-sm font-bold text-[#244536]/70">
                  Contoh {currentDesign.label}
                </p>

                <span className="w-fit rounded-full bg-[#17df64]/15 px-4 py-2 text-sm font-bold text-[#159447]">
                  {currentDesign.priceText}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {currentDesign.examples.map((example, index) => (
                  <div
                    key={`${currentDesign.id}-${index}`}
                    className="overflow-hidden rounded-2xl border border-[#e7ddc8] bg-[#f7f4ec]"
                  >
                    <div className="grid aspect-[4/3] place-items-center bg-gradient-to-br from-[#244536] to-[#17df64] text-white">
                      {example.image ? (
                        <img
                          src={example.image}
                          alt={example.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <p className="text-lg font-bold">{example.title}</p>
                          <p className="mt-1 text-xs text-white/70">Preview belum ditambahkan</p>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <p className="font-bold text-[#244536]">{example.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="estimator" className="px-5 py-14 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] border border-[#e7ddc8] bg-white/80 p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#17c95b]">Kalkulator Harga</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#244536] md:text-5xl">Hitung estimasi project.</h2>

            <label className="mt-8 block text-sm font-bold text-[#244536]/75">Pilih layanan</label>
            <select
              value={selectedService}
              onChange={(event) => handleServiceChange(event.target.value)}
              className="mt-3 w-full rounded-2xl border border-[#e7ddc8] bg-[#fffdf7] px-4 py-4 font-bold text-[#244536] outline-none focus:border-[#17df64]"
            >
              <option value="motion">Animasi Edukasi Canva</option>
              <option value="ai">Animasi 3D AI</option>
              <option value="short">Short Content Editing</option>
            </select>

            {selectedService === "motion" && (
              <div className="mt-8">
                <p className="mb-3 text-sm font-bold text-[#244536]/75">Pilih paket Animasi Canva</p>
                <div className="grid gap-3 md:grid-cols-3">
                  {canvaPackages.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedPackage(item.id)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        selectedPackage === item.id
                          ? "border-[#17df64] bg-[#17df64]/15 shadow-lg shadow-green-200/40"
                          : "border-[#e7ddc8] bg-[#fffdf7] hover:border-[#17df64]/60"
                      }`}
                    >
                      <p className="font-bold text-[#244536]">{item.name}</p>
                      <p className="mt-1 text-sm font-bold text-[#159447]">{formatRupiah(item.price)} / menit</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <label className="mt-6 block text-sm font-bold text-[#244536]/75">{currentService.quantityLabel}</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              className="mt-3 w-full rounded-2xl border border-[#e7ddc8] bg-[#fffdf7] px-4 py-4 font-bold text-[#244536] outline-none focus:border-[#17df64]"
            />

            {selectedService === "motion" && (
              <div className="mt-8">
                <p className="mb-3 text-sm font-bold text-[#244536]/75">Deadline</p>
                <div className="grid gap-3 md:grid-cols-2">
                  {deadlines.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setSelectedDeadline(item.id)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        selectedDeadline === item.id
                          ? "border-[#17df64] bg-[#17df64]/15 shadow-lg shadow-green-200/40"
                          : "border-[#e7ddc8] bg-[#fffdf7] hover:border-[#17df64]/60"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-bold text-[#244536]">{item.label}</p>
                        <p className="text-sm font-bold text-[#159447]">
                          {item.extraPerMinute === 0 ? "Free" : `+${formatRupiah(item.extraPerMinute)}/menit`}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-[#244536]/55">{item.duration}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <p className="mb-3 text-sm font-bold text-[#244536]/75">Add-on sesuai layanan</p>
              <div className="grid gap-3 md:grid-cols-2">
                {currentService.addons.map((addon) => (
                  <button
                    type="button"
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      selectedAddons.includes(addon.id)
                        ? "border-[#17df64] bg-[#17df64]/15 shadow-lg shadow-green-200/40"
                        : "border-[#e7ddc8] bg-[#fffdf7] hover:border-[#17df64]/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-bold text-[#244536]">{addon.label}</span>
                      <span className="text-sm font-bold text-[#159447]">+{formatRupiah(addon.price)}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="h-fit rounded-[2rem] border border-[#e7ddc8] bg-[#244536] p-6 text-white shadow-2xl shadow-green-900/20 md:p-8">
            <div className="flex items-center gap-3">
              <BadgeCheck size={24} className="text-[#17df64]" />
              <h3 className="text-2xl font-bold">Estimated Price</h3>
            </div>
            <p className="mt-6 text-sm text-white/55">Layanan</p>
            <p className="text-xl font-bold">{currentService.label}</p>

            {selectedService === "motion" && (
              <>
                <p className="mt-4 text-sm text-white/55">Paket</p>
                <p className="font-bold">{currentPackage.name}</p>
                <p className="mt-4 text-sm text-white/55">Deadline</p>
                <p className="font-bold">
                  {currentDeadline.label} • {currentDeadline.duration}
                </p>
              </>
            )}

            <p className="mt-4 text-sm text-white/55">Base price</p>
            <p className="font-bold">{formatRupiah(basePrice)} / {currentService.unit}</p>
            <div className="my-7 border-t border-white/15" />
            <p className="text-sm text-white/55">Estimasi total</p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-[#17df64]">{formatRupiah(estimatedPrice)}</p>
            <p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-white/70">
              Harga bersifat estimasi. Harga final menyesuaikan brief, durasi, tingkat detail visual, dan deadline.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#17df64] px-6 py-4 font-bold text-[#244536] shadow-xl shadow-green-300/20 transition hover:scale-[1.02]"
            >
              <MessageCircle size={19} /> Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#e7ddc8] bg-white/80 p-7 shadow-sm md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#17c95b]">Order Information</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#244536]">Alur Pemesanan</h2>
            <div className="mt-8 grid gap-3">
              {orderSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl bg-[#fffdf7] p-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#17df64] text-sm font-bold text-[#244536]">
                    {index + 1}
                  </div>
                  <p className="font-bold text-[#244536]/75">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e7ddc8] bg-white/80 p-7 shadow-sm md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#17c95b]">Terms</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#244536]">Revisi & Pembayaran</h2>
            <div className="mt-8 space-y-4 text-[#244536]/65">
              <div className="rounded-2xl bg-[#fffdf7] p-5">
                <b className="text-[#244536]">Revisi:</b> maksimal 2x revisi minor.
              </div>
              <div className="rounded-2xl bg-[#fffdf7] p-5">
                <b className="text-[#244536]">DP:</b> minimal 50% sebelum project dikerjakan.
              </div>
              <div className="rounded-2xl bg-[#fffdf7] p-5">
                <b className="text-[#244536]">Pelunasan:</b> dilakukan sebelum file final dikirim.
              </div>
              <div className="rounded-2xl bg-[#fffdf7] p-5">
                <b className="text-[#244536]">Deadline:</b> Normal 1 minggu, Express 4 hari, Priority 2 hari, Urgent 1 hari.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-14 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#e7ddc8] bg-[#244536] p-8 text-center text-white shadow-2xl shadow-green-900/20 md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#17df64]">Contact</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Siap bikin materi kamu bergerak?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Diskusi project, kirim brief, atau tanya estimasi harga langsung lewat kontak Digimasi.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#17df64] px-6 py-4 font-bold text-[#244536]"
            >
              <MessageCircle size={19} /> WhatsApp
            </a>
            <a
              href={TIKTOK_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-bold text-white"
            >
              TikTok
            </a>
            {EMAIL && (
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-bold text-white"
              >
                <Mail size={19} /> Email
              </a>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e7ddc8] px-5 py-8 text-center text-sm font-bold text-[#244536]/45">
        © 2026 DIGIMASI. Mengubah materi menjadi visual animasi
      </footer>
    </main>
  );
}
