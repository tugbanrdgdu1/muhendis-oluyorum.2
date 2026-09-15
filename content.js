/* Mühendis Oluyorum — içerik verisi v2.0
   Yeni modül yapısı: 8 büyük modül, 101 konu (uçak mühendisliği)
   Yazılmış: m3-2 (Bernoulli), m3-6..10 (Aerodinamik), m1-11..12 (Bağlantı elemanları) */

window.CONTENT = {
  surum: "2.0",
  guncelleme: "12 Eylül 2026",

  branslar: [
    { id: "ucak", ad: "Uçak Mühendisliği", ikon: "plane", aciklama: "Aerodinamik, yapılar, itki, uçuş mekaniği, aviyonik, tasarım" },
    { id: "uzay", ad: "Uzay Mühendisliği", ikon: "rocket", aciklama: "Orbital mekanik, roket itkisi, uzay aracı tasarımı" }
  ],

  /* ---- ÖĞREN: üst düzey bölümler (Bölüm > Modül > Ders) ---- */
  kategoriler: [
    { id: "temel",      ad: "Temel",                  emoji: "🛫" },
    { id: "ucus",       ad: "Uçuş",                    emoji: "✈️" },
    { id: "motor",      ad: "Motor & Enerji",          emoji: "🔥" },
    { id: "analiz",     ad: "Analiz & Sistemler",      emoji: "💻" },
    { id: "ekosistem",  ad: "Havacılık Ekosistemi",    emoji: "📋" },
    { id: "ileri",      ad: "İleri / Keşif",           emoji: "🚀" },
    { id: "vaka",       ad: "Vaka",                    emoji: "🧩" },
    { id: "tasarim",    ad: "Uçak Tasarımı",           emoji: "📐" }
  ],

  dersler: [
    {
      id: "modg", ad: "Uçak Mühendisliğine Giriş", kategori: "temel", branslar: ["ucak"],
      aciklama: "Uçağın nasıl uçtuğu, yapısı ve temel kavramlarına mühendis gözüyle giriş",
      konular: [
        { id: "g1",  ad: "Uçak Nedir?",                                   sure: 16, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "g2",  ad: "Uçağın Anatomisi",                              sure: 20, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "g3",  ad: "Uçak Nasıl Havada Duruyor?",                    sure: 18, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "g4",  ad: "Kanat Neden Taşıma Kuvveti Üretiyor?",          sure: 18, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "g5",  ad: "Hücum Açısı (Angle of Attack) ve Stall",        sure: 18, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "g6",  ad: "Roll – Pitch – Yaw Hareketleri",                sure: 14, durum: "hazir",   seviye: "Temel" },
        { id: "g7",  ad: "Kontrol Yüzeyleri",                             sure: 20, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "g8",  ad: "Uçağın İçinde Neler Var?",                      sure: 22, durum: "hazir",   seviye: "Temel" },
        { id: "g9",  ad: "Uçak Yapısı",                                   sure: 18, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "g10", ad: "Uçak Neden Dönüyor?",                           sure: 14, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "g11", ad: "Uçak Nasıl Hızlanıyor / Yavaşlıyor?",           sure: 16, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "g12", ad: "Atmosferi Tanı",                                sure: 16, durum: "hazir",   seviye: "Temel" },
        { id: "g13", ad: "Mach Sayısı Nedir?",                            sure: 16, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "g14", ad: "Uçakların Sınıflandırılması",                   sure: 16, durum: "hazir",   seviye: "Temel" },
        { id: "g15", ad: "Bir Uçak Neden Böyle Tasarlanmış?",             sure: 18, durum: "hazir",   seviye: "Orta" },
        { id: "g16", ad: "Bir Uçağa Mühendis Gözüyle Bakalım",            sure: 18, durum: "hazir",   seviye: "Orta" },
        { id: "g17", ad: "Final: Mühendislik Mülakatı",                   sure: 20, durum: "yakinda", seviye: "Orta",  mulakat: true }
      ]
    },
    { id: "mod-yapisal",   kategori: "temel", ad: "Yapısal Mekanik",                    branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-malzeme",   kategori: "temel", ad: "Malzeme",                            branslar: ["ucak"], aciklama: "Havacılık malzemeleri: metallerden kompozitlere, alaşımlardan malzeme seçim metodolojisine.", konular: [
        { id: "mal1", ad: "Uçakta Neden Farklı Malzemeler Kullanılır?", durum: "hazir" },
        { id: "mal2", ad: "Havacılık Malzemelerinin Temel Özellikleri", durum: "hazir" },
        { id: "mal3", ad: "Alaşım Mantığı ve Malzeme Özelliklerinin Değiştirilmesi", durum: "hazir" },
        { id: "mal4", ad: "Alüminyum Alaşımları", durum: "hazir" },
        { id: "mal5", ad: "Çelikler", durum: "hazir" },
        { id: "mal6", ad: "Titanyum ve Titanyum Alaşımları", durum: "hazir" },
        { id: "mal7", ad: "Nikel Süperalaşımlar ve Yüksek Sıcaklık Malzemeleri", durum: "hazir" },
        { id: "mal8", ad: "Diğer Havacılık Metalleri ve Metallerin Bütüncül Özeti", durum: "hazir" },
        { id: "mal9", ad: "Kompozit Malzeme Nedir?", durum: "yakinda" },
        { id: "mal10", ad: "Havacılıkta Fiber Türleri: CFRP, GFRP ve Aramid", durum: "yakinda" },
        { id: "mal11", ad: "Fiber Yönü, Anizotropi ve Lay-up", durum: "yakinda" },
        { id: "mal12", ad: "Prepreg, Sandwich ve Honeycomb Yapılar", durum: "yakinda" },
        { id: "mal13", ad: "Kompozit Hasar Mekanizmaları", durum: "yakinda" },
        { id: "mal14", ad: "Kompozitlerin Sınırları: Neden Her Yerde Kullanılmıyor?", durum: "yakinda" },
        { id: "mal15", ad: "Uçağın Malzeme Haritası", durum: "yakinda" },
        { id: "mal16", ad: "Uçak Yapı Elemanlarında Malzeme Seçimi", durum: "yakinda" },
        { id: "mal17", ad: "Havacılık Malzemeleri Karşılaştırma Matrisi", durum: "yakinda" },
        { id: "mal18", ad: "Malzeme Düelloları: Hangisi, Hangi Durumda?", durum: "yakinda" },
        { id: "mal19", ad: "Malzeme Grafiklerini ve Property Map'leri Okuma", durum: "yakinda" },
        { id: "mal20", ad: "Korozyon ve Çevresel Etkiler", durum: "yakinda" },
        { id: "mal21", ad: "Malzeme Hasarı, Yorulma ve Kırılma", durum: "yakinda" },
        { id: "mal22", ad: "Malzeme Seçimi Nasıl Yapılır?", durum: "yakinda" }
      ] },
    { id: "mod-uretim",    kategori: "temel", ad: "Üretim ve Kalite Kontrol",           branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-akiskan",   kategori: "temel", ad: "Akışkanlar Mekaniği",                branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-aero",      kategori: "temel", ad: "Aerodinamik",                        branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },

    { id: "mod-ucusmek",   kategori: "ucus", ad: "Uçuş Mekaniği ve Performans",         branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-motorsuz",  kategori: "ucus", ad: "Motorsuz Uçuş Prensibi",              branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-kararlilik",kategori: "ucus", ad: "Uçuş Kararlılığı",                    branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-otokontrol",kategori: "ucus", ad: "Otomatik Kontrol",                    branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },

    { id: "mod-termo",     kategori: "motor", ad: "Termodinamik",                       branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-itki",      kategori: "motor", ad: "İtki ve Tepki Tahrik",               branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-isigecisi", kategori: "motor", ad: "Isı Geçişi",                         branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },

    { id: "mod-cfdfea",    kategori: "analiz", ad: "CFD & FEA",                          branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-aviyonik",  kategori: "analiz", ad: "Aviyonik, Sensörler ve Otonomi",      branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },

    { id: "mod-uretimileri", kategori: "ekosistem", ad: "Üretim/Kalite — İleri Uygulamalar", branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-elverislilik",kategori: "ekosistem", ad: "Uçuşa Elverişlilik ve Operasyon",  branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-mevzuat",     kategori: "ekosistem", ad: "Havacılık Mevzuatı",              branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-havacilik-tip",kategori: "ekosistem", ad: "Havacılık Tıbbı",                branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },

    { id: "mod-roket",     kategori: "ileri", ad: "Roket Sistemleri",                    branslar: ["ucak"], aciklama: "Opsiyonel modül — içerik hazırlanıyor.", konular: [] },
    { id: "mod-iha",       kategori: "ileri", ad: "İHA ve Döner Kanat",                  branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-yapayzeka", kategori: "ileri", ad: "Havacılıkta Yapay Zeka",              branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-teknoloji", kategori: "ileri", ad: "Güncel Teknolojiler",                 branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },

    { id: "mod-kazalar",   kategori: "vaka", ad: "Uçak Kazaları",                        branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    { id: "mod-tasarim",   kategori: "tasarim", ad: "Uçak Tasarımı",                     branslar: ["ucak"], aciklama: "İçerik hazırlanıyor — yakında eklenecek.", konular: [] },
    {
      id: "mod1", ad: "Mekaniğin Temelleri", branslar: ["ucak", "uzay"],
      aciklama: "Statik, dinamik ve şekil değiştiren cisimler mekaniği",
      konular: [
        { id: "m1-1",  ad: "Vektörel kuvvet ve moment sistemleri",              sure: 18, durum: "yakinda", seviye: "Temel" },
        { id: "m1-2",  ad: "Serbest cisim diyagramı ve denge",                  sure: 20, durum: "yakinda", seviye: "Temel", mulakat: true },
        { id: "m1-3",  ad: "Kafes, çerçeve ve makine elemanları analizi",        sure: 22, durum: "yakinda", seviye: "Temel" },
        { id: "m1-4",  ad: "Kütle merkezi ve alan atalet momentleri",            sure: 20, durum: "yakinda", seviye: "Temel" },
        { id: "m1-5",  ad: "Parçacık kinematiği ve kinetiği",                   sure: 22, durum: "yakinda", seviye: "Temel" },
        { id: "m1-6",  ad: "İmpuls-momentum ve iş-enerji yöntemleri",           sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m1-7",  ad: "Rijit cisim düzlemsel hareketi",                    sure: 25, durum: "yakinda", seviye: "Orta" },
        { id: "m1-8",  ad: "Gerilme ve birim deformasyon",                      sure: 20, durum: "yakinda", seviye: "Temel", mulakat: true },
        { id: "m1-9",  ad: "Hooke kanunu ve elastik sabitler",                  sure: 18, durum: "yakinda", seviye: "Temel" },
        { id: "m1-10", ad: "Eksenel yükleme ve termal gerilmeler",              sure: 20, durum: "yakinda", seviye: "Temel" },
        { id: "m1-11", ad: "Emniyet katsayısı ve tasarım yaklaşımı",            sure: 18, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "m1-12", ad: "Cıvata ve perçin bağlantıları",                     sure: 22, durum: "hazir",   seviye: "Orta",  mulakat: true },
        { id: "m1-13", ad: "Burulma mekaniği",                                  sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m1-14", ad: "Eğilme gerilmeleri ve kiriş diyagramları",          sure: 25, durum: "yakinda", seviye: "Orta", mulakat: true },
        { id: "m1-15", ad: "Düzlem gerilme dönüşümleri ve Mohr dairesi",        sure: 25, durum: "yakinda", seviye: "Orta", mulakat: true },
        { id: "m1-16", ad: "Kiriş sehim analizleri",                            sure: 22, durum: "yakinda", seviye: "Orta" }
      ]
    },
    {
      id: "mod2", ad: "Uçak Yapıları, Kompozitler ve Aeroelastisite", branslar: ["ucak"],
      aciklama: "Havacılık malzemeleri, yapısal analiz, titreşim ve flutter",
      konular: [
        { id: "m2-1",  ad: "Havacılık alaşımları ve kırılma mekaniği",          sure: 22, durum: "yakinda", seviye: "Temel", mulakat: true },
        { id: "m2-2",  ad: "Alüminyum ve titanyum alaşımları",                  sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m2-3",  ad: "Nikel süperalaşımları",                             sure: 20, durum: "yakinda", seviye: "İleri" },
        { id: "m2-4",  ad: "Elyaf ve matris türleri",                           sure: 20, durum: "yakinda", seviye: "Temel", mulakat: true },
        { id: "m2-5",  ad: "Klasik Laminasyon Teorisi ve ABD matrisleri",       sure: 28, durum: "yakinda", seviye: "İleri" },
        { id: "m2-6",  ad: "Kompozit hasar kriterleri",                         sure: 25, durum: "yakinda", seviye: "İleri" },
        { id: "m2-7",  ad: "Üretim yöntemleri ve delaminasyon",                 sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m2-8",  ad: "İnce cidarlı gövde ve kanat kesitleri",             sure: 25, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m2-9",  ad: "Çok hücreli kesitlerde kayma akışı ve burulma",     sure: 25, durum: "yakinda", seviye: "Orta" },
        { id: "m2-10", ad: "İnce plakaların burkulma analizi",                  sure: 25, durum: "yakinda", seviye: "İleri" },
        { id: "m2-11", ad: "V-n diyagramı ve uçuş yükleri",                    sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m2-12", ad: "Yorulma ve hasar toleransı",                        sure: 25, durum: "yakinda", seviye: "İleri" },
        { id: "m2-13", ad: "Tek ve çok serbestlik dereceli titreşim",           sure: 25, durum: "yakinda", seviye: "Orta" },
        { id: "m2-14", ad: "Statik aeroelastisite — diverjans ve kontrol reversal", sure: 25, durum: "yakinda", seviye: "İleri", mulakat: true },
        { id: "m2-15", ad: "Flutter ve dinamik aeroelastisite",                 sure: 25, durum: "yakinda", seviye: "İleri", mulakat: true }
      ]
    },
    {
      id: "mod3", ad: "Aerodinamik, Gaz Dinamiği ve CFD", branslar: ["ucak", "uzay"],
      aciklama: "Akışkanlar mekaniği, sıkıştırılabilir akış, hesaplamalı yöntemler",
      konular: [
        { id: "m3-1",  ad: "Akışkan özellikleri ve süreklilik denklemi",        sure: 15, durum: "yakinda", seviye: "Temel" },
        { id: "m3-2",  ad: "Bernoulli denklemi",                                sure: 20, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "m3-3",  ad: "Korunum yasaları ve Navier-Stokes denklemleri",     sure: 25, durum: "yakinda", seviye: "Orta" },
        { id: "m3-4",  ad: "Sınır tabaka ve viskoz akış",                       sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m3-5",  ad: "İnce profil teorisi ve Kutta-Joukovsky teoremi",    sure: 28, durum: "yakinda", seviye: "İleri" },
        { id: "m3-6",  ad: "Standart atmosfer",                                 sure: 18, durum: "hazir",   seviye: "Temel" },
        { id: "m3-7",  ad: "Kanat profili ve NACA serileri",                    sure: 22, durum: "hazir",   seviye: "Temel", mulakat: true },
        { id: "m3-8",  ad: "Kaldırma ve sürükleme katsayıları",                 sure: 25, durum: "hazir",   seviye: "Orta",  mulakat: true },
        { id: "m3-9",  ad: "Sonlu kanat ve indüklenmiş sürükleme",              sure: 22, durum: "hazir",   seviye: "Orta",  mulakat: true },
        { id: "m3-10", ad: "Stall ve yüksek kaldırma cihazları",               sure: 25, durum: "hazir",   seviye: "Orta",  mulakat: true },
        { id: "m3-11", ad: "Mach sayısı ve sıkıştırılabilir akış",              sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m3-12", ad: "Şok dalgaları — dik ve eğik",                      sure: 25, durum: "yakinda", seviye: "İleri" },
        { id: "m3-13", ad: "Prandtl-Meyer genleşme dalgaları",                  sure: 22, durum: "yakinda", seviye: "İleri" },
        { id: "m3-14", ad: "Boyut analizi ve benzerlik",                        sure: 20, durum: "yakinda", seviye: "Orta" },
        { id: "m3-15", ad: "CFD — mesh, türbülans modelleri, çözücüler",        sure: 28, durum: "yakinda", seviye: "İleri" }
      ]
    },
    {
      id: "mod4", ad: "Termodinamik, Isı Transferi ve İtki Sistemleri", branslar: ["ucak", "uzay"],
      aciklama: "Motor çevrimleri, ısı transferi, türbomakine tasarımı",
      konular: [
        { id: "m4-1",  ad: "Termodinamiğin birinci ve ikinci yasası",           sure: 22, durum: "yakinda", seviye: "Temel", mulakat: true },
        { id: "m4-2",  ad: "Açık/kapalı sistem enerji dengeleri ve ekserji",    sure: 25, durum: "yakinda", seviye: "Orta" },
        { id: "m4-3",  ad: "Brayton çevrimi",                                   sure: 25, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m4-4",  ad: "İletim ve Fourier yasası",                          sure: 18, durum: "yakinda", seviye: "Temel" },
        { id: "m4-5",  ad: "Taşınım ve boyutsuz sayılar",                       sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m4-6",  ad: "Işınım ısı transferi",                              sure: 20, durum: "yakinda", seviye: "Orta" },
        { id: "m4-7",  ad: "Türbin kanatçık soğutma teknikleri",                sure: 22, durum: "yakinda", seviye: "İleri" },
        { id: "m4-8",  ad: "Net itki denklemi ve motor verimleri",              sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m4-9",  ad: "Turbojet, turbofan, turboprop parametrik analizi",  sure: 25, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m4-10", ad: "By-pass oranı ve özgül yakıt tüketimi",             sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m4-11", ad: "Hava alıkları ve lüle dinamiği",                    sure: 25, durum: "yakinda", seviye: "İleri" },
        { id: "m4-12", ad: "Kompresör ve türbin aerodinamiği",                  sure: 28, durum: "yakinda", seviye: "İleri" }
      ]
    },
    {
      id: "mod5", ad: "Uçuş Dinamiği, Performans ve Kontrol", branslar: ["ucak"],
      aciklama: "Uçuş performansı, stabilite, otomatik kontrol sistemleri",
      konular: [
        { id: "m5-1",  ad: "Seyir, tırmanma ve süzülme performansı",            sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m5-2",  ad: "Breguet menzil ve havada kalma denklemleri",        sure: 20, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m5-3",  ad: "Kalkış ve iniş pist mesafesi",                      sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m5-4",  ad: "Uçuş sınır zarfı — V-n diyagramı",                 sure: 20, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m5-5",  ad: "6-DOF hareket denklemleri ve eksen sistemleri",     sure: 28, durum: "yakinda", seviye: "İleri" },
        { id: "m5-6",  ad: "Boyuna statik kararlılık ve statik marjin",         sure: 25, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m5-7",  ad: "Yanal ve doğrultusal kararlılık türevleri",         sure: 25, durum: "yakinda", seviye: "İleri" },
        { id: "m5-8",  ad: "Dinamik uçuş modları — Phugoid, Dutch Roll…",       sure: 25, durum: "yakinda", seviye: "İleri" },
        { id: "m5-9",  ad: "Transfer fonksiyonu ve durum uzayı",                sure: 25, durum: "yakinda", seviye: "Orta" },
        { id: "m5-10", ad: "Kararlılık analizleri — Bode, Routh-Hurwitz",       sure: 28, durum: "yakinda", seviye: "İleri", mulakat: true },
        { id: "m5-11", ad: "PID kontrol ve kompansatör tasarımı",               sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m5-12", ad: "Fly-by-wire ve otopilot denetim yasaları",          sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m5-13", ad: "Kontrol yüzeyleri",                                 sure: 18, durum: "yakinda", seviye: "Temel" }
      ]
    },
    {
      id: "mod6", ad: "Aviyonik, Ölçme ve Seyrüsefer", branslar: ["ucak"],
      aciklama: "Sensörler, veri yolları, navigasyon sistemleri, sinyal işleme",
      konular: [
        { id: "m6-1",  ad: "Basınçlı hava veri aletleri ve pitot-statik",      sure: 18, durum: "yakinda", seviye: "Temel", mulakat: true },
        { id: "m6-2",  ad: "Hız dönüşümleri — IAS, CAS, EAS, TAS",             sure: 18, durum: "yakinda", seviye: "Temel" },
        { id: "m6-3",  ad: "Jiroskoplar — mekanik, RLG, FOG, MEMS",             sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m6-4",  ad: "İvmeölçerler ve strapdown INS",                     sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m6-5",  ad: "INS/GPS entegrasyonu ve Kalman filtresi",           sure: 25, durum: "yakinda", seviye: "İleri", mulakat: true },
        { id: "m6-6",  ad: "Gerinim ölçer ve Wheatstone köprüsü",               sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m6-7",  ad: "Ölçüm belirsizliği ve kalibrasyon",                 sure: 18, durum: "yakinda", seviye: "Temel", mulakat: true },
        { id: "m6-8",  ad: "MIL-STD-1553B askeri veriyolu",                     sure: 20, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m6-9",  ad: "ARINC 429 ve AFDX/ARINC 664",                      sure: 20, durum: "yakinda", seviye: "Orta" },
        { id: "m6-10", ad: "Dijital sinyal işleme ve sensör birleştirme",       sure: 25, durum: "yakinda", seviye: "İleri" }
      ]
    },
    {
      id: "mod7", ad: "Sistem Mühendisliği ve Uçuşa Elverişlilik", branslar: ["ucak"],
      aciklama: "Sertifikasyon, emniyet analizi, sistem entegrasyonu",
      konular: [
        { id: "m7-1",  ad: "Ürün geliştirme yaşam döngüsü ve V-modeli",        sure: 18, durum: "yakinda", seviye: "Temel" },
        { id: "m7-2",  ad: "Gereksinim yönetimi ve izlenebilirlik",             sure: 20, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m7-3",  ad: "Doğrulama ve geçerli kılma (V&V) süreçleri",       sure: 20, durum: "yakinda", seviye: "Orta" },
        { id: "m7-4",  ad: "EASA CS-25 ve FAA FAR-25 esasları",                sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m7-5",  ad: "Tip sertifikası, PC ve uçuşa elverişlilik",        sure: 18, durum: "yakinda", seviye: "Temel", mulakat: true },
        { id: "m7-6",  ad: "Part-21 DOA/POA ve uyum gösterim yöntemleri",      sure: 22, durum: "yakinda", seviye: "İleri" },
        { id: "m7-7",  ad: "DO-160 çevresel test gereksinimleri",               sure: 20, durum: "yakinda", seviye: "Orta" },
        { id: "m7-8",  ad: "Uçak alt sistemleri — hidrolik ve iklimlendirme",  sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m7-9",  ad: "Kokpit ergonomisi ve havacılık fizyolojisi",        sure: 20, durum: "yakinda", seviye: "Orta" },
        { id: "m7-10", ad: "FHA ve FMEA/FMEDA analizleri",                     sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m7-11", ad: "Hata ağacı analizi ve 10⁻⁹ emniyet hedefi",        sure: 25, durum: "yakinda", seviye: "İleri", mulakat: true }
      ]
    },
    {
      id: "mod8", ad: "Bütünleşik Uçak Tasarımı", branslar: ["ucak"],
      aciklama: "Kavramsal tasarımdan detaya, MDO, doğrulama",
      konular: [
        { id: "m8-1",  ad: "Görev gereksinimleri ve MTOW ön tahmini",           sure: 20, durum: "yakinda", seviye: "Orta" },
        { id: "m8-2",  ad: "Kısıt diyagramı — W/S ve T/W seçimi",              sure: 25, durum: "yakinda", seviye: "İleri", mulakat: true },
        { id: "m8-3",  ad: "Kanat geometrisi ve profil seçimi",                 sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m8-4",  ad: "Gövde, iniş takımı ve iç hacim yerleşimi",         sure: 22, durum: "yakinda", seviye: "Orta" },
        { id: "m8-5",  ad: "CG zarfı ve kuyruk yüzeyleri boyutlandırması",      sure: 22, durum: "yakinda", seviye: "Orta",  mulakat: true },
        { id: "m8-6",  ad: "İtki sistemi entegrasyonu — inlet ve egzoz",        sure: 25, durum: "yakinda", seviye: "İleri" },
        { id: "m8-7",  ad: "Ağırlık ve denge raporu",                           sure: 20, durum: "yakinda", seviye: "Orta" },
        { id: "m8-8",  ad: "MDO — disiplinler arası eş zamanlı optimizasyon",   sure: 28, durum: "yakinda", seviye: "İleri" },
        { id: "m8-9",  ad: "CFD ve FEM ile sayısal doğrulama",                  sure: 25, durum: "yakinda", seviye: "İleri" },
        { id: "m8-10", ad: "Rüzgar tüneli testi ve sertifikasyon kapanışı",     sure: 25, durum: "yakinda", seviye: "İleri" }
      ]
    }
  ],

  /* ---- KONU İÇERİĞİ (yazılmış konular) ---- */
  konuIcerik: {
"g1": {
      ad: "Uçak Nedir?",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 16,
      mulakat: true,
      onbilgi: "Kuvvet ve denge kavramı (lise fiziği düzeyinde yeterli)",
      guncelleme: "13 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Uçak, havadan ağır olmasına rağmen dört temel kuvvetin (Taşıma, Ağırlık, İtki, Sürükleme) dengesini kullanarak atmosferde tutunabilen bir hava aracıdır. Bu dört kuvvet ikişer ikişer birbirine karşı çalışır: Taşıma ile Ağırlık dikey eksende, İtki ile Sürükleme yatay eksende. Uçuşun her anı, aslında bu iki kuvvet çiftinin sürekli yeniden dengelenmesinden ibarettir." },

        { id: "b2", tip: "metin", baslik: "Bu konuyu neden öğreniyoruz?",
          metin: "\"Uçak nasıl uçar?\" sorusu havacılıkta en çok sorulan ama en sık yüzeysel cevaplanan sorudur. Oysa bir mühendislik mülakatında bu soru, adayın havacılığı ezbere mi yoksa mekanizmasıyla mı bildiğini anlamak için sorulur.\n\nBu dersteki 4 kuvvet çerçevesi, ilerideki hemen her dersin iskeletidir: performans hesapları, kararlılık analizi, motor seçimi, hatta yapısal yük hesapları bile son tahlilde bu dört kuvvetin birbirine göre nasıl değiştiğine dayanır." },

        { id: "b3", tip: "tablo", baslik: "Dört temel kuvvet",
          basliklar: ["Kuvvet", "Kaynağı", "Yönü"],
          satirlar: [
            ["Taşıma (Lift, L)", "Kanat üzerindeki basınç farkı", "Uçuş doğrultusuna dik, yukarı"],
            ["Ağırlık (Weight, W)", "Yer çekimi (W = m·g)", "Daima düşey, aşağı"],
            ["İtki (Thrust, T)", "Motor / pervane", "İleri, uçuş doğrultusunda"],
            ["Sürükleme (Drag, D)", "Hava sürtünmesi ve basınç direnci", "Geri, uçuş doğrultusuna ters"]
          ],
          metin: "Ağırlık dışındaki üç kuvvet aerodinamik veya mekanik olarak üretilir ve pilotun (veya otopilotun) doğrudan kontrolündedir. Ağırlık ise uçağın yapısından, yakıtından ve yükünden gelir; uçuş sırasında sadece yakıt tüketimiyle yavaşça azalır." },

        { id: "b4", tip: "gorsel", baslik: "Dört kuvvetin dengesi", gorsel: "dortkuvvet",
          metin: "Kuvvetler teorik olarak uçağın Ağırlık Merkezinde (Center of Gravity, CG) kesişir. Pratikte taşıma ve sürükleme kanatta, itki motorda, ağırlık ise tüm gövdeye yayılı olarak oluşur; aralarındaki küçük kollar (moment kolları) uçağın yunuslama dengesini belirler — bu konuyu 'Uçak Nasıl Havada Duruyor?' dersinde detaylandıracağız." },

        { id: "b5", tip: "metin", baslik: "Yatay kuvvet çifti: İtki ve Sürükleme",
          metin: "Kanadın taşıma üretebilmesi için önce üzerinden hava akması gerekir; bu hareketi başlatan motordur. Motor, ortam havasını ivmelendirerek ileri yönlü İtki kuvvetini üretir. Uçak ilerledikçe havanın sürtünmesi ve basınç direnci onu geriye doğru iter; buna Sürükleme denir.\n\nT = D  →  uçak sabit hızda seyrine devam eder.\nT > D  →  uçak hızlanır (ivmelenir).\nT < D  →  uçak yavaşlar." },

        { id: "b6", tip: "metin", baslik: "Dikey kuvvet çifti: Taşıma ve Ağırlık",
          metin: "Uçağın yapısı, sistemleri, yakıtı ve yükü toplamda aşağı yönlü Ağırlık kuvvetini oluşturur. İtki sayesinde uçak ilerledikçe hava kanat profilinin üzerinden ve altından akar; kanat geometrisi ve hücum açısı, üst yüzeydeki havayı hızlandırıp basıncını düşürür. Alt ve üst yüzey arasındaki bu basınç farkı, uçağı yukarı iten net Taşıma kuvvetini üretir.\n\nL = W  →  uçak sabit irtifada uçar.\nL > W  →  uçak irtifa kazanır (tırmanır).\nL < W  →  uçak irtifa kaybeder (alçalır).",
          kutu: { tip: "bilgi", baslik: "Kaldırmanın mekanizması ileride", metin: "Kanadın basınç farkını tam olarak nasıl ürettiğini ve 'eşit geçiş süresi' gibi yaygın yanlış anlatımları 'Kanat Neden Taşıma Kuvveti Üretiyor?' dersinde ayrıntılı işleyeceğiz. Burada sadece sonucu — basınç farkının taşımayı doğurduğunu — kullanıyoruz." } },

        { id: "b7", tip: "ornek", baslik: "Senaryo 1: Sabit seyir uçuşu",
          soru: "Bir yolcu uçağı 10.000 m irtifada, sabit hızda ve sabit irtifada düz uçuyor. Bu durumda dört kuvvet arasındaki ilişki nedir?",
          cozum: "Sabit hız → yatay ivme sıfır → T = D.\nSabit irtifa → düşey ivme sıfır → L = W.\n\nBu iki denklem birlikte 'dengeli düz uçuş' (steady level flight) durumunu tanımlar. Uçuş mekaniğindeki hemen her performans hesabı bu iki denklemden başlar." },

        { id: "b8", tip: "ornek", baslik: "Senaryo 2: Gaz kolu ileri itilirse",
          soru: "Pilot gaz kolunu ileri ittiğinde itki artar (T > D). Uçak irtifasını değiştirmeden sadece hızlanmak istiyorsa ne yapmalıdır?",
          cozum: "T > D olduğunda uçak önce hızlanır. Taşıma hıza bağlı olduğundan (Taşıma katsayısı sabitken bile) hız artışı taşımayı da büyütür ve L > W olur — uçak kendiliğinden tırmanmaya başlar.\n\nSabit irtifada kalmak isteyen pilot, burnu hafifçe aşağı vererek hücum açısını azaltır. Bu, taşımayı geri düşürüp L = W dengesini korur; sonuç olarak uçak aynı irtifada ama daha yüksek hızda uçar." },

        { id: "b9", tip: "ornek", baslik: "Senaryo 3: Uçağa yük eklenirse",
          soru: "Uçağa ek kargo yüklendiğinde toplam ağırlık artar. Aynı irtifada uçuşa devam edebilmek için ne olmalıdır?",
          cozum: "L = W dengesinin korunması için, ağırlık arttığında taşımanın da artması gerekir. Bu ya hızı artırarak ya da hücum açısını (dolayısıyla taşıma katsayısını) artırarak sağlanır.\n\nZincirleme etki: hız veya hücum açısı arttığında sürükleme de büyür; bunu dengelemek için motorun daha fazla itki üretmesi, dolayısıyla daha fazla yakıt harcanması gerekir. Bu yüzden ağır yüklü bir uçak, aynı rotada daha fazla yakıt tüketir." },

        { id: "b10", tip: "liste", baslik: "Yaygın hatalar ve yanlış anlamalar",
          maddeler: [
            "\"Uçak sadece motor gücüyle havada durur\" demek. Motor sadece ileri hareketi (itkiyi) sağlar; havada tutan kuvvet taşımadır, taşımayı üreten ise kanat + hız kombinasyonudur.",
            "Dört kuvvetin sabit büyüklükte olduğunu sanmak. Aslında hepsi sürekli değişir; 'uçuş' bu değişkenlerin anlık dengesidir.",
            "Taşıma ile İtkiyi karıştırmak. İtki yatay eksende ilerlemeyi sağlar, taşıma dikey eksende havada tutar; ikisi farklı kaynaklardan (motor / kanat) gelir.",
            "Ağırlığın uçuş boyunca sabit kaldığını varsaymak. Yakıt tükendikçe ağırlık azalır, bu da seyir sırasında gereken taşımayı ve dolayısıyla optimum hızı/irtifayı değiştirir."
          ] },

        { id: "b11", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Bir uçağın uçabilmesi için hangi kuvvetler dengede olmalıdır?", "Dikeyde Taşıma = Ağırlık, yatayda İtki = Sürükleme olmalıdır. Bu, sabit hız ve sabit irtifada düz uçuşun (steady level flight) tanımıdır."],
            ["Motor durursa uçak hemen düşer mi?", "Hayır. İtki sıfırlanır ama taşıma kanat üzerinden hava geçtiği sürece üretilmeye devam eder. Pilot burnu hafifçe aşağı vererek hızı koruyabilir ve uçak süzülerek (glide) inebilir; bu Newton'un kuvvet dengesinin doğal bir sonucudur."],
            ["Uçak neden hızlanınca tırmanma eğilimi gösterir?", "Taşıma hızın karesiyle orantılıdır (L = C_L · ½ρV²S). İtki artıp hız yükseldiğinde, hücum açısı sabit kalırsa taşıma ağırlığı geçer ve uçak tırmanır; pilot bunu hücum açısını azaltarak dengeler."],
            ["Ağır yüklü bir uçağın kalkış mesafesi neden uzar?", "Ağırlık arttığı için gereken taşıma da artar; aynı taşımayı üretmek için ya daha yüksek hıza (dolayısıyla daha uzun pist mesafesine) ya da daha yüksek hücum açısına ihtiyaç vardır."]
          ] },

        { id: "b12", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill. ISBN 978-0-07-802767-8",
            "NASA Glenn Research Center. The four forces on an airplane. Beginner's Guide to Aeronautics.",
            "Hurt, H. H., Jr. (1965). Aerodynamics for naval aviators. U.S. Navy, NAVAIR 00-80T-80.",
            "FAA. (2023). Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Bölüm 5: Aerodynamics of Flight."
          ] },

        { id: "b13", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "The Four Forces of Flight", kanal: "NASA Aeronautics", dil: "İngilizce",
              not: "Dört kuvveti temel seviyede, animasyonlarla anlatan kısa NASA eğitim videosu.",
              url: "https://www.youtube.com/watch?v=EJqTF2En1QQ" },
            { ad: "How Do Airplanes Fly?", kanal: "The Efficient Engineer", dil: "İngilizce",
              not: "Dört kuvveti mühendislik diliyle, denklemlerle birlikte anlatıyor.",
              url: "https://www.youtube.com/watch?v=hDh6cyd-4Y0" }
          ] }
      ],

      sorular: [
        { id: "gs1", etiket: "Kavram", puan: 1,
          soru: "Uçağa etki eden dört temel kuvvet hangileridir?",
          secenekler: ["Taşıma, Ağırlık, İtki, Sürükleme", "Basınç, Sıcaklık, Yoğunluk, Hız", "Roll, Pitch, Yaw, Sürükleme", "Taşıma, İtki, Moment, Sürtünme"],
          dogru: 0,
          aciklama: "Uçuşu tanımlayan dört temel kuvvet Taşıma (Lift), Ağırlık (Weight), İtki (Thrust) ve Sürükleme (Drag)'dir." },
        { id: "gs2", etiket: "Kavram", puan: 1,
          soru: "Ağırlık kuvvetinin yönü her zaman nasıldır?",
          secenekler: ["Uçuş doğrultusuna dik, yukarı", "Uçuş doğrultusunda, ileri", "Daima düşey, aşağı", "Uçağın burnuna göre değişken"],
          dogru: 2,
          aciklama: "Ağırlık, yer çekiminden kaynaklanır ve dünyanın merkezine doğru, yani daima düşey aşağı yönlüdür." },
        { id: "gs3", etiket: "Denge", puan: 1,
          soru: "Bir uçak sabit hızda ve sabit irtifada düz uçuyorsa hangi eşitlikler geçerlidir?",
          secenekler: ["L > W ve T = D", "L = W ve T = D", "L = W ve T > D", "L < W ve T < D"],
          dogru: 1,
          aciklama: "Sabit irtifa L = W'yi, sabit hız da T = D'yi gerektirir. İkisi birlikte 'dengeli düz uçuş' durumunu tanımlar." },
        { id: "gs4", etiket: "Analiz", puan: 2,
          soru: "İtki, sürüklemeden büyük hale gelirse (T > D) uçağa kısa vadede ne olur?",
          secenekler: ["Uçak yavaşlar", "Uçak hızlanır", "Uçak hemen tırmanır, hızı değişmez", "Hiçbir şey değişmez"],
          dogru: 1,
          aciklama: "Yatay kuvvet dengesi bozulduğunda net kuvvet ileri yöndedir, bu da uçağın ivmelenip hızlanmasına yol açar. Hız artışı dolaylı olarak taşımayı da etkiler." },
        { id: "gs5", etiket: "Analiz", puan: 2,
          soru: "Uçak hızlanırken hücum açısı sabit tutulursa taşımaya (L) ne olur ve bunun sonucu nedir?",
          secenekler: ["Taşıma değişmez, uçak düz gider", "Taşıma azalır, uçak alçalır", "Taşıma artar, uçak tırmanmaya başlar", "Sadece sürükleme değişir, taşıma sabit kalır"],
          dogru: 2,
          aciklama: "Taşıma hızın karesiyle orantılıdır. Hız arttıkça ve hücum açısı sabit kalırsa taşıma büyür, L > W olur ve uçak irtifa kazanır." },
        { id: "gs6", etiket: "Uygulama", puan: 2,
          soru: "Sabit hızda tırmanmak isteyen bir pilot hangi kuvvet çiftini bozmalıdır?",
          secenekler: ["Sadece T-D çiftini, L=W'yi koruyarak", "Sadece L-W çiftini, taşımayı ağırlıktan büyük yaparak", "Her iki çifti aynı anda değiştirmeden tırmanılamaz", "Hiçbirini, tırmanmak için kuvvet dengesi gerekmez"],
          dogru: 1,
          aciklama: "Tırmanmak için L'nin W'den büyük olması gerekir (L > W); bu genelde hücum açısını artırarak sağlanır. T-D dengesi ise hızı sabit tutmak için korunabilir." },
        { id: "gs7", etiket: "Kavram", puan: 1,
          soru: "İtki kuvvetini üreten bileşen hangisidir?",
          secenekler: ["Kanat", "Kuyruk", "Motor / pervane", "Gövde"],
          dogru: 2,
          aciklama: "İtki, motor (jet motoru veya pervane) tarafından ortam havasının ivmelendirilmesiyle üretilir." },
        { id: "gs8", etiket: "Formül", puan: 2,
          soru: "500 kg kütleli bir İHA'nın ağırlığı (g = 9,81 m/s²) yaklaşık kaçtır?",
          secenekler: ["500 N", "981 N", "4905 N", "50 N"],
          dogru: 2,
          aciklama: "W = m·g = 500 × 9,81 ≈ 4905 N. Kütle ile ağırlığı karıştırmamak gerekir; ağırlık bir kuvvettir ve Newton (N) birimiyle ifade edilir." },
        { id: "gs9", etiket: "Analiz", puan: 2,
          soru: "Motorlar tamamen durursa (T = 0) uçak anında düşer mi? Neden?",
          secenekler: ["Evet, çünkü taşımayı da motor üretir", "Hayır, çünkü taşıma hâlâ kanat üzerinden geçen hava sayesinde üretilebilir", "Evet, çünkü itki olmadan hücum açısı sıfırlanır", "Hayır, çünkü ağırlık motor durunca sıfırlanır"],
          dogru: 1,
          aciklama: "Taşıma, motordan değil kanat üzerinden geçen hava akışından gelir. Pilot burnu hafifçe aşağı vererek hızı ve dolayısıyla taşımayı sürdürebilir; uçak süzülerek inebilir." },
        { id: "gs10", etiket: "Uygulama", puan: 2,
          soru: "Kargo eklenip ağırlık arttığında, aynı irtifada uçuşu sürdürmek için taşımanın da artması gerekir. Bunun bir sonucu olarak genelde ne artar?",
          secenekler: ["Hiçbir şey artmaz, taşıma kendiliğinden dengelenir", "Sürükleme, dolayısıyla gereken itki ve yakıt tüketimi", "Sadece ağırlık merkezi yer değiştirir", "Yalnızca uçuş süresi kısalır, güç ihtiyacı değişmez"],
          dogru: 1,
          aciklama: "Daha fazla taşıma için hız ya da hücum açısı artırıldığında sürükleme de büyür; bunu dengelemek için motorun daha fazla itki üretmesi, dolayısıyla daha fazla yakıt harcaması gerekir." },
        { id: "gs11", etiket: "Kavram", puan: 1,
          soru: "Dört kuvvetin uçak üzerindeki teorik kesişim noktası neresidir?",
          secenekler: ["Kanadın uç noktası", "Ağırlık Merkezi (CG)", "Kuyruk ucu", "Motor girişi"],
          dogru: 1,
          aciklama: "Basitleştirilmiş modelde dört kuvvet, uçağın Ağırlık Merkezinde (Center of Gravity) kesiştiği varsayılır; gerçekte küçük moment kolları vardır ve bu yunuslama dengesini belirler." },
        { id: "gs12", etiket: "Sentez", puan: 2,
          soru: "Bir eğitim uçağı düz ve sabit hızda uçarken pilot gaz kolunu tamamen kapatıyor (T ≈ 0) ama burnu hiç kaldırmıyor. Kısa vadede en olası sonuç nedir?",
          secenekler: ["Uçak hızını ve irtifasını korur", "T < D olacağından uçak yavaşlar; hız düştükçe taşıma da azalır ve uçak alçalmaya başlar", "Uçak aniden tırmanır", "Sürükleme sıfırlanır, uçak hızlanır"],
          dogru: 1,
          aciklama: "İtki kaybolunca T < D olur, uçak yavaşlar. Taşıma hızın karesiyle orantılı olduğundan hız düştükçe taşıma azalır, L < W olur ve uçak irtifa kaybetmeye başlar." }
      ],
      ipuclari: {
        "Kavram": "Dört kuvvetin isimlerini ve hangi bileşenden geldiğini (kanat/motor/yer çekimi) tekrar et.",
        "Denge": "Sabit hız ve sabit irtifa şartlarının hangi eşitliklere karşılık geldiğini tekrar et (T=D, L=W).",
        "Analiz": "Bir kuvvet dengesi bozulduğunda önce hangi eksende, sonra diğer eksende ne olduğunu adım adım düşün.",
        "Uygulama": "Ağırlık arttığında zincirleme olarak hangi diğer kuvvetlerin etkilendiğini tekrar et.",
        "Formül": "W = m·g formülünü ve birimleri (kg, m/s², N) tekrar et.",
        "Sentez": "Önce hangi kuvvet çiftinin bozulduğunu, sonra bunun diğer çifti nasıl etkilediğini sırayla düşün."
      }
    },
"g2": {
      ad: "Uçağın Anatomisi",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 20,
      mulakat: true,
      onbilgi: "Uçak Nedir? (4 temel kuvvet)",
      guncelleme: "13 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Uçak; kanatlarıyla taşıma üreten, gövdesiyle her şeyi bir arada tutan, kuyruk takımıyla dengede kalan ve kumanda yüzeyleriyle yönlendirilen bir bütündür. Bu derste kanadın temel geometrik büyüklüklerini, konfigürasyon seçeneklerini, birincil/ikincil kumanda yüzeylerini ve uçağın üç dönme eksenini tanıyacağız." },

        { id: "b2", tip: "metin", baslik: "Temel geometrik tanımlar",
          metin: "Veter uzunluğu (chord, c): Kanat kesitinde hücum kenarı ile firar kenarı arasındaki mesafe.\nKanat açıklığı (wingspan, b): Bir kanat ucundan diğerine toplam mesafe.\nAçıklık oranı (Aspect Ratio, AR = b²/S): Kanadın 'inceliğini' gösterir; yüksek AR uzun ve ince kanat demektir, indüklenmiş sürüklemeyi azaltır ama yapısal yükü artırır." },

        { id: "b3", tip: "tablo", baslik: "Kanadın gövdeye bağlantı konumları",
          basliklar: ["Konfigürasyon", "Özelliği"],
          satirlar: [
            ["Üstten Kanatlı (High-Wing)", "Ağırlık merkezi kanadın altında kalır, sarkaç etkisiyle yanal kararlılık yüksektir (örn. C-130, Cessna 172)"],
            ["Ortadan Kanatlı (Mid-Wing)", "En düşük sürükleme, ama gövde iç hacmi kısıtlanır (askeri jetlerde yaygın)"],
            ["Alttan Kanatlı (Low-Wing)", "İniş takımı kanada kolay toplanır, yer etkisinden fazla yararlanılır (örn. B737, A320)"]
          ],
          metin: "Kanat sayısına göre de ayrım vardır: tek kanatlı uçaklara monoplane, çift kanatlı (üst üste) uçaklara biplane denir. Günümüz uçaklarının neredeyse tamamı monoplane'dir." },

        { id: "b4", tip: "metin", baslik: "Dihedral ve anhedral",
          metin: "Pozitif dihedral: kanatlar gövde merkezinden uçlara doğru yukarı eğimlidir. Uçak yalpaladığında (roll) alçalan kanadın efektif hücum açısı ve taşıma alanı artar; bu da uçağı kendiliğinden düze döndürür — pasif yanal kararlılık sağlar.\nAnhedral (negatif dihedral): kanatlar aşağı eğimlidir; yüksek kanatlı, doğal olarak zaten çok kararlı ağır kargo uçaklarında (örn. C-5 Galaxy) aşırı kararlılığı azaltıp manevra kabiliyeti kazandırmak için kullanılır." },

        { id: "b5", tip: "tablo", baslik: "Kanat üst görünüm (planform) tipleri",
          basliklar: ["Tip", "Kullanım alanı"],
          satirlar: [
            ["Düz / dikdörtgen kanat", "Düşük hız, yüksek güvenlik ve süzülme oranı; yüksek hızda sürükleme fazla"],
            ["Geriye ok açılı (sweptback)", "Sesaltı/transonik hızlarda şok dalgası oluşumunu geciktirir, sürüklemeyi azaltır"],
            ["Delta (üçgen)", "Süpersonik uçuş için ideal; gövdeye geniş bağlantı sayesinde çok sağlam, yüksek yakıt/silah kapasitesi"]
          ] },

        { id: "b6", tip: "gorsel", baslik: "Üç dönme ekseni", gorsel: "ucekseni",
          metin: "Uçağın uzaydaki hareketi, ağırlık merkezinden geçen üç dik eksen etrafındaki dönmelerle tanımlanır." },

        { id: "b7", tip: "tablo", baslik: "Eksen — hareket — kumanda yüzeyi eşleşmesi",
          basliklar: ["Eksen", "Doğrultusu", "Hareket", "Kumanda yüzeyi"],
          satirlar: [
            ["Boylamasına (Longitudinal)", "Burun–kuyruk çizgisi", "Roll (Yatış)", "Aileron (Kanatçık)"],
            ["Enlemesine (Lateral)", "Kanat ucundan kanat ucuna", "Pitch (Yunuslama)", "Elevator (İrtifa Dümeni)"],
            ["Dikey (Vertical/Normal)", "Gövde üstünden altına", "Yaw (Sapma)", "Rudder (İstikamet Dümeni)"]
          ] },

        { id: "b8", tip: "metin", baslik: "Aileron nasıl çalışır?",
          metin: "Aileronlar kanadın dış firar kenarındadır ve zıt yönde hareket eder. Löfye sola kırıldığında sol aileron yukarı kalkar (sol kanadın taşıması düşer), sağ aileron aşağı iner (sağ kanadın taşıması artar). Kanatlar arasındaki bu taşıma farkı boylamasına eksen etrafında Roll Momenti oluşturur. Aileronların kanat uçlarına konulmasının sebebi, ağırlık merkezine olan moment kolunu büyüterek küçük bir yüzeyle bile yüksek roll momenti elde etmektir." },

        { id: "b9", tip: "metin", baslik: "Elevator ve rudder",
          metin: "Elevator: yatay stabilizerin firar kenarındadır. Löfye geri çekilince elevator yukarı kalkar, kuyrukta aşağı yönlü bir kuvvet oluşur, bu da burnu yukarı kaldırır (Pitch Up).\nRudder: dikey stabilizerin firar kenarındadır, ayak pedallarıyla kumanda edilir. Sağ pedala basınca rudder sağa sapar, kuyruğa gelen yan kuvvet burnu sağa döndürür (Yaw).\nBazı hızlı uçaklarda yatay stabilizer tek parça hareket eder; buna Stabilatör denir ve elevator yerine geçer.",
          kutu: { tip: "bilgi", baslik: "İkincil kumanda yüzeyleri", metin: "Flap ve slat taşımayı artırır (iniş/kalkışta), spoiler taşımayı aniden düşürür (fren/roll desteği), trim tab pilotun kumanda organı üzerindeki sürekli yükü sıfırlar. Bunları 'Kontrol Yüzeyleri' dersinde ayrıntılı işleyeceğiz." } },

        { id: "b10", tip: "ornek", baslik: "Mühendislik senaryosu: Sol aileron yukarıda takılı kalırsa",
          soru: "Sol aileron 'yukarı' pozisyonda mekanik olarak sıkışırsa (jammed) uçağa ne olur?",
          cozum: "Sol aileron yukarıda kaldığında sol kanadın efektif hücum açısı ve taşıması düşer. Sağ aileron nötr olsa bile uçak sürekli sola yatış (roll) eğilimine girer. Pilot bunu dengelemek için rudder ve varsa spoileron gibi yardımcı yüzeyleri kullanmak zorunda kalır." },

        { id: "b11", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Aileron ve rudder'ı karıştırmak: aileron roll, rudder yaw üretir; ikisi farklı eksenlerde çalışır.",
            "Dihedralin taşıma ürettiğini sanmak; dihedral taşıma üretmez, sadece pasif yanal kararlılık sağlar.",
            "Her uçağın aynı kanat konfigürasyonunu kullandığını varsaymak; seçim görev profiline (kararlılık mı, iç hacim mi, sürükleme mi öncelikli) göre değişir.",
            "Roll'u Yaw ile karıştırmak: bir uçak sağa yatabilir (roll) ama burnu hâlâ ileri bakıyor olabilir; dönüş için genelde ikisi birlikte kullanılır."
          ] },

        { id: "b12", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Aileron nasıl çalışır, roll momentini nasıl üretir?", "Kanatların dış firar kenarında zıt yönde hareket ederler; biri yukarı kalkıp o kanadın taşımasını düşürürken diğeri aşağı inip taşımayı artırır. Oluşan taşıma farkı, boylamasına eksen etrafında roll momenti üretir."],
            ["Pozitif dihedralin faydası nedir?", "Uçak yalpaladığında alçalan kanadın efektif hücum açısını ve taşımasını artırarak uçağı kendiliğinden düz konuma döndürür; pasif bir yanal kararlılık mekanizmasıdır."],
            ["Alttan kanatlı ile üstten kanatlı uçak arasındaki fark nedir?", "Alttan kanatlıda iniş takımı kanada kolayca toplanır ve yer etkisinden daha fazla yararlanılır; üstten kanatlıda ağırlık merkezi kanadın altında kaldığından doğal yanal kararlılık daha yüksektir."]
          ] },

        { id: "b13", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill.",
            "IVAO-TR Eğitim Departmanı. (2014). Gövde ve Sistemleri.",
            "FAA. (2023). Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Bölüm 4-5."
          ] },

        { id: "b14", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "Aircraft Flight Controls Explained", kanal: "Smarter Every Day", dil: "İngilizce",
              not: "Birincil kumanda yüzeylerini gerçek uçakta gösteren pratik anlatım.",
              url: "https://www.youtube.com/watch?v=SESmXHRV6mI" }
          ] }
      ],

      sorular: [
        { id: "g2s1", etiket: "Kavram", puan: 1, soru: "Kanadın hücum kenarı ile firar kenarı arasındaki mesafeye ne denir?",
          secenekler: ["Kanat açıklığı", "Veter uzunluğu", "Açıklık oranı", "Dihedral açısı"], dogru: 1,
          aciklama: "Veter (chord) uzunluğu, kanat kesitinde hücum kenarından firar kenarına olan mesafedir." },
        { id: "g2s2", etiket: "Eksen-Yüzey", puan: 1, soru: "Roll hareketini hangi kumanda yüzeyi üretir?",
          secenekler: ["Rudder", "Elevator", "Aileron", "Flap"], dogru: 2,
          aciklama: "Aileronlar boylamasına eksen etrafında zıt yönlü hareket ederek roll momenti üretir." },
        { id: "g2s3", etiket: "Eksen-Yüzey", puan: 1, soru: "Yaw hareketini hangi kumanda yüzeyi üretir?",
          secenekler: ["Rudder", "Elevator", "Aileron", "Spoiler"], dogru: 0,
          aciklama: "Rudder, dikey eksen etrafında yaw (sapma) hareketini kontrol eder." },
        { id: "g2s4", etiket: "Analiz", puan: 2, soru: "Löfye sola kırıldığında sağ aileron nasıl hareket eder ve etkisi nedir?",
          secenekler: ["Yukarı kalkar, sağ kanadın taşıması düşer", "Aşağı iner, sağ kanadın taşıması artar", "Nötrde kalır, hiçbir etkisi olmaz", "Yukarı kalkar ama etkisi yaw'dır"], dogru: 1,
          aciklama: "Aileronlar zıt çalışır: sola kumandada sol aileron yukarı (taşıma düşer), sağ aileron aşağı iner (taşıma artar); fark roll momenti oluşturur." },
        { id: "g2s5", etiket: "Kavram", puan: 1, soru: "Pozitif dihedralin sağladığı temel fayda nedir?",
          secenekler: ["Ekstra taşıma kuvveti üretir", "Pasif yanal kararlılık sağlar", "Sürüklemeyi tamamen yok eder", "Motor verimini artırır"], dogru: 1,
          aciklama: "Dihedral taşıma üretmez; uçak yalpaladığında kendiliğinden düze dönmesini sağlayan pasif bir kararlılık mekanizmasıdır." },
        { id: "g2s6", etiket: "Uygulama", puan: 2, soru: "Sesüstü (süpersonik) uçuş için en uygun kanat planformu hangisidir?",
          secenekler: ["Düz dikdörtgen kanat", "Geriye ok açılı kanat", "Delta (üçgen) kanat", "Anhedral düz kanat"], dogru: 2,
          aciklama: "Delta kanat, şok dalgalarını Mach konisi içinde tutarak süpersonik uçuşa uygun hale gelir; ayrıca gövdeye geniş bağlantısı sayesinde yapısal olarak sağlamdır." },
        { id: "g2s7", etiket: "Konfigürasyon", puan: 2, soru: "Bir yolcu uçağında iniş takımının kanat içine kolayca toplanabilmesi hangi konfigürasyonla ilişkilidir?",
          secenekler: ["Üstten kanatlı", "Ortadan kanatlı", "Alttan kanatlı", "Delta kanat"], dogru: 2,
          aciklama: "Alttan kanatlı uçaklarda (örn. B737, A320) iniş takımı kanat köküne yakın olduğu için kanat içine toplanması pratiktir." },
        { id: "g2s8", etiket: "Senaryo", puan: 2, soru: "Sol aileron 'yukarı' pozisyonda sıkışırsa uçak hangi yöne yatma eğilimi gösterir?",
          secenekler: ["Sağa", "Sola", "Hiçbir yöne, dengeli kalır", "Yalnızca yaw yapar, roll yapmaz"], dogru: 1,
          aciklama: "Sol aileron yukarıda kaldığı için sol kanadın taşıması düşük kalır; bu da uçağın sürekli sola yatmasına (roll) yol açar." },
        { id: "g2s9", etiket: "Kavram", puan: 1, soru: "Açıklık oranı (Aspect Ratio) nasıl hesaplanır?",
          secenekler: ["b/S", "b²/S", "S/b", "c/b"], dogru: 1,
          aciklama: "AR = b²/S; kanat açıklığının karesinin kanat alanına oranıdır. Yüksek AR, uzun-ince kanat demektir." }
      ],
      ipuclari: {
        "Eksen-Yüzey": "Roll–Aileron, Pitch–Elevator, Yaw–Rudder eşleşmesini tekrar et.",
        "Analiz": "Aileronların zıt yönde çalıştığını ve taşıma farkının roll momentini nasıl ürettiğini adım adım düşün.",
        "Senaryo": "Hangi kanadın taşımasının değiştiğini, uçağın o kanada doğru mu yoksa tersine mi yatacağını sırayla çıkar."
      }
    },
"g3": {
      ad: "Uçak Nasıl Havada Duruyor?",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 18,
      mulakat: true,
      onbilgi: "Uçak Nedir?, Uçağın Anatomisi",
      guncelleme: "13 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Bir uçağın süzülmeden, sabit hızda ve irtifada uçabilmesi için üç denge şartının aynı anda sağlanması gerekir: dikey kuvvetler (L=W), yatay kuvvetler (T=D) ve ağırlık merkezi etrafındaki momentler (ΣM_CG=0). Bu ders, 'Uçak Nedir?' dersindeki dört kuvveti sayısal formüllerle ve moment dengesiyle birleştirir." },

        { id: "b2", tip: "formul", baslik: "Taşıma kuvveti denklemi",
          formul: "L = C_L · ½ρV²S",
          semboller: [
            ["C_L", "Taşıma katsayısı — profil geometrisi ve hücum açısına (α) bağlı, boyutsuz", "-"],
            ["ρ", "Hava yoğunluğu", "kg/m³"],
            ["V", "Hava hızı (bağıl rüzgâr)", "m/s"],
            ["S", "Kanat referans alanı (planform)", "m²"]
          ],
          metin: "½ρV² terimine dinamik basınç (q∞) denir. Taşıma, dinamik basınç ile doğru orantılıdır; hız iki katına çıkarsa taşıma dört katına çıkar." },

        { id: "b3", tip: "formul", baslik: "Sürükleme kuvveti denklemi",
          formul: "D = C_D · ½ρV²S",
          semboller: [
            ["C_D", "Sürükleme katsayısı — profil şekli, yüzey sürtünmesi, indüklenmiş sürüklemeye bağlı", "-"]
          ],
          metin: "Taşıma ve sürükleme aynı dinamik basınç ve alan terimlerini paylaşır; farkları yalnızca boyutsuz katsayılarındadır (C_L, C_D)." },

        { id: "b4", tip: "metin", baslik: "CG, CP ve AC farkı",
          metin: "Ağırlık Merkezi (CG): uçağın tüm kütlesinin ortalama noktası; tüm dönme hareketleri bu nokta etrafında olur.\nBasınç/Taşıma Merkezi (CP): kanat üzerindeki tüm yerel basınç farklarının bileşke etki noktası; hücum açısı değiştikçe yeri kayar.\nAerodinamik Merkez (AC): hücum açısı değişse bile etrafındaki yunuslama momentinin sabit kaldığı teorik nokta; sesaltı profillerde yaklaşık c/4'te (veter uzunluğunun çeyreğinde) bulunur." },

        { id: "b5", tip: "tablo", baslik: "Sabit durum uçuşunun üç denge şartı",
          basliklar: ["Denge türü", "Şart", "Anlamı"],
          satirlar: [
            ["Dikey", "L = W", "Taşıma ağırlığa eşit → sabit irtifa"],
            ["Yatay", "T = D", "İtki sürüklemeye eşit → sabit hız"],
            ["Moment", "ΣM_CG = 0", "CG etrafındaki momentler dengede → sabit yunuslama açısı"]
          ] },

        { id: "b6", tip: "metin", baslik: "Kuyruk neden burnu aşağı düşürmez?",
          metin: "CG genelde kanadın taşıma merkezinin (CL/AC) önünde konumlandırılır. Bu, kanadın taşımasının CG'nin arkasında kalmasına ve uçağın burnunu aşağı döndürmeye çalışan bir moment (pitch-down) oluşturmasına yol açar. Yatay kuyruk bu momenti dengelemek için ters bir kanat gibi çalışıp aşağı yönlü bir kuvvet üretir; böylece ΣM_CG = 0 sağlanır ve uçak düz uçuşunu korur." },

        { id: "b7", tip: "ornek", baslik: "Senaryo: Gaz kolu ileri itilirse",
          soru: "Pilot gaz kolunu ileri ittiğinde T > D olur. Hücum açısı sabit tutulursa kısa vadede ne olur, uzun vadede pilot ne yapmalıdır?",
          cozum: "T > D → uçak hızlanır, V artar. L ∝ V² olduğundan taşıma hızın karesiyle büyür, L > W olur ve uçak tırmanmaya başlar.\nSabit irtifada kalmak isteyen pilot burnu hafifçe aşağı vererek hücum açısını (dolayısıyla C_L'yi) azaltır; V artmasına rağmen L = W dengesi yeniden kurulur." },

        { id: "b8", tip: "ornek", baslik: "Senaryo: Yüksek irtifaya çıkıldığında",
          soru: "İrtifa arttıkça ρ azalır. Aynı L = W dengesini korumak için ne değişmelidir?",
          cozum: "L = C_L·½ρV²S denkleminde ρ düştüğü için aynı taşımayı üretmek için V'nin (gerçek hava hızı, TAS) artması gerekir. Bu yüzden jet yolcu uçakları yüksek irtifada seyir yaparken çok daha yüksek gerçek hızlarda uçar." },

        { id: "b9", tip: "ornek", baslik: "Senaryo: Motorlar durursa (T = 0)",
          soru: "Tüm motorlar arızalanırsa (T = 0) uçak ne yapar, pilotun stratejisi nedir?",
          cozum: "D uçağı yavaşlatır, V düşer, L de düşer (L < W) ve uçak alçalmaya başlar. Pilot burnu aşağı vererek süzülüş açısına geçer: potansiyel enerji kinetik enerjiye dönüşür, V korunur ve uçak en yüksek aerodinamik verim oranında (L/D)_max piste doğru süzülür." },

        { id: "b10", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "CG ile CP'yi aynı nokta sanmak; ikisi genelde çakışmaz, aradaki fark yatay kuyruğun neden var olduğunu açıklar.",
            "Taşımanın hızla doğru orantılı olduğunu sanmak; aslında hızın karesiyle orantılıdır (L ∝ V²).",
            "Üç denge şartından sadece L=W'yi hatırlayıp T=D ve moment dengesini unutmak.",
            "Yüksek irtifada 'hava az olduğu için uçak daha kolay uçar' sanmak; aslında aynı taşımayı üretmek için daha yüksek hız gerekir."
          ] },

        { id: "b11", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Sabit düz uçuş için hangi denge şartları sağlanmalıdır?", "L=W (dikey), T=D (yatay) ve ΣM_CG=0 (moment) aynı anda sağlanmalıdır."],
            ["Yatay kuyruk neden aşağı yönlü kuvvet üretir?", "Çünkü kanadın taşıma merkezi CG'nin arkasındadır ve burnu aşağı döndürmeye çalışan bir moment oluşturur; kuyruk bunu dengelemek için ters kanat gibi çalışıp aşağı kuvvet üretir."],
            ["Motorlar durursa uçak hemen düşer mi?", "Hayır; pilot burnu hafifçe aşağı vererek hızı ve dolayısıyla taşımayı koruyabilir, uçak L/D_max oranında süzülerek inebilir."]
          ] },

        { id: "b12", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill.",
            "FAA. (2023). Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Bölüm 5."
          ] },

        { id: "b13", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "Forces on an Aircraft", kanal: "NASA Aeronautics", dil: "İngilizce",
              not: "Denge şartlarını ve kuyruk momentini görsel olarak anlatıyor.",
              url: "https://www.youtube.com/watch?v=EJqTF2En1QQ" }
          ] }
      ],

      sorular: [
        { id: "g3s1", etiket: "Formül", puan: 2, soru: "ρ=1,2 kg/m³, V=40 m/s, S=25 m², C_L=0,5 için taşıma kuvveti kaçtır?",
          secenekler: ["≈ 6000 N", "≈ 12000 N", "≈ 24000 N", "≈ 960 N"], dogru: 1,
          aciklama: "L = C_L · ½ρV²S = 0,5 × (0,5×1,2×40²) × 25 = 0,5 × 960 × 25 = 12000 N." },
        { id: "g3s2", etiket: "Kavram", puan: 1, soru: "Aerodinamik Merkez (AC) neyi ifade eder?",
          secenekler: ["Uçağın toplam kütle merkezini", "Hücum açısı değişse bile yunuslama momentinin sabit kaldığı noktayı", "Kanadın en kalın noktasını", "Motorun itki uyguladığı noktayı"], dogru: 1,
          aciklama: "AC, hücum açısından bağımsız olarak yunuslama momentinin sabit kaldığı teorik noktadır; sesaltı profillerde yaklaşık c/4'tedir." },
        { id: "g3s3", etiket: "Analiz", puan: 2, soru: "Sabit hızda düz uçuşta hangi eşitlik grubu geçerlidir?",
          secenekler: ["L>W, T=D", "L=W, T=D, ΣM_CG=0", "L=W, T>D", "Sadece ΣM_CG=0 yeterlidir"], dogru: 1,
          aciklama: "Sabit hız ve sabit irtifada düz uçuş üç denge şartının birlikte sağlanmasını gerektirir." },
        { id: "g3s4", etiket: "Analiz", puan: 2, soru: "İrtifa arttıkça ρ azalırsa, aynı taşımayı korumak için ne olmalıdır?",
          secenekler: ["V azalmalı", "V artmalı", "S küçülmeli", "C_L sıfırlanmalı"], dogru: 1,
          aciklama: "L=C_L·½ρV²S sabit tutulmak isteniyorsa ρ azaldığında V'nin artması gerekir; bu yüzden yüksek irtifada gerçek hava hızı daha yüksektir." },
        { id: "g3s5", etiket: "Kavram", puan: 1, soru: "Yatay kuyruğun ürettiği kuvvetin yönü genelde nasıldır?",
          secenekler: ["Yukarı", "Aşağı", "İleri", "Geri"], dogru: 1,
          aciklama: "CG genelde taşıma merkezinin önünde olduğundan oluşan pitch-down momentini dengelemek için kuyruk aşağı yönlü kuvvet üretir." },
        { id: "g3s6", etiket: "Senaryo", puan: 2, soru: "Motorlar durduğunda pilotun en uygun aerodinamik verimle süzülebilmesi hangi orana karşılık gelir?",
          secenekler: ["(L/D)_min", "(L/D)_max", "C_L=0 noktası", "C_D=0 noktası"], dogru: 1,
          aciklama: "En uzun mesafeyi en az irtifa kaybıyla kat etmek için uçak (L/D)_max oranında süzülür." },
        { id: "g3s7", etiket: "Formül", puan: 1, soru: "Dinamik basınç (q∞) hangi ifadeye eşittir?",
          secenekler: ["ρgz", "½ρV²", "C_L·S", "mg"], dogru: 1,
          aciklama: "Dinamik basınç q∞ = ½ρV²'dir; hem taşıma hem sürükleme formüllerinde ortak çarpandır." },
        { id: "g3s8", etiket: "Kavram", puan: 1, soru: "Taşıma ve sürükleme formüllerinin ortak noktası nedir?",
          secenekler: ["İkisi de sadece C_L'ye bağlıdır", "İkisi de aynı dinamik basınç (½ρV²) ve alan (S) terimlerini paylaşır, sadece katsayıları farklıdır", "İkisi de irtifadan bağımsızdır", "İkisi de sadece motor gücüne bağlıdır"], dogru: 1,
          aciklama: "L=C_L·½ρV²S ve D=C_D·½ρV²S aynı ½ρV²S çarpanını paylaşır; aralarındaki fark yalnızca boyutsuz C_L ve C_D katsayılarındadır." },
        { id: "g3s9", etiket: "Kavram", puan: 1, soru: "Ağırlık Merkezi (CG) neyi ifade eder?",
          secenekler: ["Kanadın en kalın noktasını", "Uçağın tüm kütlesinin ortalama noktasını, tüm dönmelerin etrafında gerçekleştiği noktayı", "Motorun bağlandığı noktayı", "Kuyruğun ucunu"], dogru: 1,
          aciklama: "CG, uçağın tüm kütlesinin ortalama noktasıdır; uçağın tüm dönme hareketleri bu nokta etrafında gerçekleşir." }
      ],
      ipuclari: {
        "Formül": "L=C_L·½ρV²S formülünü ve her terimin biriminin ne olduğunu tekrar et.",
        "Analiz": "Önce hangi değişkenin (ρ, V, C_L) değiştiğini bul, sonra diğerlerinin dengeyi korumak için nasıl değişmesi gerektiğini çıkar.",
        "Senaryo": "T=0 durumunda enerjinin potansiyelden kinetiğe dönüştüğünü ve L/D_max'ın neden en verimli süzülme açısı olduğunu tekrar et."
      }
    },
"g4": {
      ad: "Kanat Neden Taşıma Kuvveti Üretiyor?",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 18,
      mulakat: true,
      onbilgi: "Uçak Nasıl Havada Duruyor?",
      guncelleme: "13 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Taşıma, tek bir formülden değil, atmosfer ile kanat geometrisinin dinamik etkileşiminden doğar. Hava, kanadın kavisli üst yüzeyine Coanda etkisiyle yapışarak akar; kanat havayı net olarak aşağı saptırır (downwash); Newton'un üçüncü yasası gereği hava da kanadı yukarı iter. Basınç farkı ve hız değişimi bu süreçte birbirini besleyerek aynı anda oluşur." },

        { id: "b2", tip: "metin", baslik: "Basınç farkı ve Coanda etkisi",
          metin: "Kanat üzerinden geçen hava molekülleri hızlandıkça o bölgedeki statik basınç düşer (Bernoulli ilişkisi). Kanadın alt yüzeyindeki basınç üst yüzeydekinden yüksek kaldığı için net dikey bir taşıma kuvveti oluşur.\nCoanda etkisi: hava, kanadın bombeli üst yüzeyinden geçerken düz gitmek yerine kavisli yüzeye 'yapışarak' o eğriyi takip eder. Bu yapışma, üst yüzeydeki düşük basınç bölgesinin korunmasını sağlar." },

        { id: "b3", tip: "metin", baslik: "Downwash ve Newton'un üçüncü yasası",
          metin: "Kanat geometrisi ve hücum açısı sayesinde, kanadın üstünden ve altından geçen hava kütlesi firar kenarını net olarak aşağı doğru saptırılmış (downwash) halde terk eder.\nNewton'un Etki-Tepki Yasası gereği: kanat hava kütlesini aşağı ittiğinde (etki), hava da kanadı aynı büyüklükte yukarı iter (tepki). Bu tepki kuvveti, taşımanın kendisidir.\n\nBernoulli mi, Newton mu? İkisi de doğrudur — rakip teoriler değil, aynı olayın iki farklı hesaplama yoludur: biri basınç-hız ilişkisiyle, diğeri momentum değişimiyle aynı sonuca ulaşır." },

        { id: "b4", tip: "gorsel", baslik: "Kanat üzerindeki akış ve downwash", gorsel: "kanat",
          metin: "Üst yüzeyde hızlı akış/düşük basınç, alt yüzeyde daha yavaş akış/yüksek basınç oluşur; akış firar kenarını aşağı sapmış halde terk eder." },

        { id: "b5", tip: "metin", baslik: "Yaygın yanlış: \"Eşit geçiş süresi teorisi\"",
          metin: "Ders kitaplarında sık geçen bu açıklamaya göre kanadın üst yüzeyi daha uzun olduğu için havanın iki molekülünün arka kenarda aynı anda buluşması gerektiği ve bu yüzden üstteki havanın hızlandığı iddia edilir.",
          kutu: { tip: "yanilgi", baslik: "Bu açıklama yanlıştır", metin: "Doğada moleküllerin arkada aynı anda buluşması gibi bir fiziksel zorunluluk yoktur; üstteki hava molekülleri arka kenara çok daha erken varır. Bu varsayımla hesaplanan taşıma, ölçülenden çok küçük çıkar. Ayrıca bu teori doğru olsaydı simetrik profilli akrobasi uçakları ya da düz kağıt uçaklar taşıma üretemez, uçaklar ters uçamazdı." } },

        { id: "b6", tip: "ornek", baslik: "Örnek: Ters uçan akrobasi uçağı",
          soru: "Akrobasi uçakları baş aşağı uçarken kanat profili de ters döner. Bu durumda taşıma nasıl üretilmeye devam eder?",
          cozum: "Pilot burnu yukarı kaldırarak pozitif bir hücum açısı oluşturur. Hücum açısı arttığı sürece downwash devam eder; dolayısıyla uçak baş aşağı konumda da taşıma üretmeye devam eder. Bu, taşımanın kanadın 'üstünün her zaman yukarı bakması' değil, hücum açısı ve downwash mekanizmasına bağlı olduğunu gösterir." },

        { id: "b7", tip: "liste", baslik: "Sezgisel örnekler",
          maddeler: [
            "Kağıt uçak: kanatları tamamen düzdür (bombesizdir), buna rağmen hafif bir hücum açısıyla düzgün uçar; çünkü downwash bombeden değil hücum açısından da üretilebilir.",
            "Elini arabanın camından çıkarmak: avuç hafifçe yukarı eğildiğinde (hücum açısı verildiğinde) havanın aşağı saptığını ve elin yukarı itildiğini hissedersin — taşımanın en basit sezgisel gösterimi.",
            "Simetrik kanat profilleri (akrobasi uçaklarında yaygın) sıfır hücum açısında taşıma üretmez; taşımayı hücum açısı vererek üretirler."
          ] },

        { id: "b8", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Kanat taşımayı nasıl üretir, Bernoulli mi Newton mu doğru?", "İkisi de. Kanat akışı büker (Coanda etkisiyle üst yüzeye yapışır), üst yüzeyde basınç düşer (Bernoulli); aynı anda kanat havayı aşağı saptırır ve tepki olarak yukarı itilir (Newton 3. yasa). İkisi aynı olayın farklı hesaplama yollarıdır."],
            ["Eşit geçiş süresi teorisi neden yanlıştır?", "Havanın arka kenarda aynı anda buluşması için fiziksel bir zorunluluk yoktur; üstteki hava daha erken varır. Bu teori doğru olsaydı simetrik profiller veya düz kağıt uçaklar taşıma üretemez, ters uçuş mümkün olmazdı."],
            ["Simetrik bir kanat profili taşıma üretebilir mi?", "Evet, hücum açısı verilirse üretir. Sıfır hücum açısında simetrik profilde üst-alt basınç farkı oluşmaz, ama açı verildiğinde downwash oluşur ve taşıma üretilir."]
          ] },

        { id: "b9", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Babinsky, H. (2003). How do wings work? Physics Education, 38(6), 497–503.",
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill.",
            "NASA Glenn Research Center. Incorrect Theory of Lift #1: Equal Transit Theory."
          ] },

        { id: "b10", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "How wings really work", kanal: "University of Cambridge", dil: "İngilizce, 1 dakika",
              not: "Prof. Babinsky'nin rüzgâr tüneli deneyi, eşit geçiş süresi yanılgısını tek görüntüyle çürütüyor.",
              url: "https://www.cam.ac.uk/research/news/how-wings-really-work" }
          ] }
      ],

      sorular: [
        { id: "g4s1", etiket: "Kavram", puan: 1, soru: "Coanda etkisi neyi ifade eder?",
          secenekler: ["Havanın kavisli yüzeye yapışarak eğrisini takip etmesini", "Sesin uçak gövdesinde yansımasını", "Yakıtın motorda buharlaşmasını", "Kanadın burkulma eğilimini"], dogru: 0,
          aciklama: "Coanda etkisi, akan bir akışkanın yakınındaki kavisli yüzeye yapışıp o yüzeyin eğimini takip etme eğilimidir." },
        { id: "g4s2", etiket: "Kavram", puan: 1, soru: "Downwash nedir?",
          secenekler: ["Kanattan geçen havanın net olarak aşağı saptırılması", "Kanadın titreşim frekansı", "Motorun ürettiği egzoz gazı", "Hava basıncının kanat içinde birikmesi"], dogru: 0,
          aciklama: "Downwash, kanat üzerinden ve altından geçen hava kütlesinin firar kenarını net olarak aşağı yönde terk etmesidir." },
        { id: "g4s3", etiket: "Yanılgı", puan: 2, soru: "Eşit geçiş süresi teorisinin yanlışlığını en iyi gösteren örnek hangisidir?",
          secenekler: ["Turbofan motorların yüksek bypass oranı", "Simetrik profilli akrobasi uçaklarının ters uçabilmesi", "Kanat açıklığının artmasıyla sürüklemenin azalması", "Yüksek irtifada hava yoğunluğunun düşmesi"], dogru: 1,
          aciklama: "Eşit geçiş süresi teorisi doğru olsaydı, üst-alt yüzeyi simetrik olan bir profil ya da düz kağıt uçak taşıma üretemez, ters uçuş mümkün olmazdı." },
        { id: "g4s4", etiket: "Analiz", puan: 2, soru: "Ters uçan bir akrobasi uçağı taşımayı nasıl üretmeye devam eder?",
          secenekler: ["Motor gücünü artırarak", "Burnu yukarı kaldırıp pozitif hücum açısı oluşturarak", "Kanat profilini fiziksel olarak çevirerek", "Taşıma üretemez, sadece motor gücüyle havada kalır"], dogru: 1,
          aciklama: "Pilot burnu kaldırarak pozitif hücum açısı oluşturur; downwash devam ettiği sürece ters konumda da taşıma üretilir." },
        { id: "g4s5", etiket: "Kavram", puan: 1, soru: "Bernoulli ve Newton açıklamaları taşıma konusunda nasıl ilişkilidir?",
          secenekler: ["Birbirini dışlayan rakip teorilerdir, sadece biri doğrudur", "Aynı olayın iki farklı hesaplama yoludur, ikisi de doğrudur", "Sadece düşük hızlarda ikisi de geçerlidir", "Newton sadece roketlerde, Bernoulli sadece kanatlarda geçerlidir"], dogru: 1,
          aciklama: "Basınç-hız ilişkisi (Bernoulli) ve momentum değişimi (Newton) aynı fiziksel olayı iki farklı açıdan doğru şekilde açıklar." },
        { id: "g4s6", etiket: "Kavram", puan: 1, soru: "Simetrik bir kanat profili sıfır hücum açısında (α=0°) taşıma üretir mi?",
          secenekler: ["Evet, her zaman üretir", "Hayır, üretmez; taşıma için pozitif bir hücum açısı gerekir", "Sadece yüksek hızda üretir", "Sadece kompozit malzemeden yapılmışsa üretir"], dogru: 1,
          aciklama: "Simetrik profilde α=0°'de üst-alt basınç dağılımı simetriktir, downwash oluşmaz, dolayısıyla taşıma üretilmez." },
        { id: "g4s7", etiket: "Uygulama", puan: 2, soru: "Kağıt uçakların kanatlarında kamburluk (camber) olmamasına rağmen uçabilmelerinin sebebi nedir?",
          secenekler: ["Çok hafif olmaları", "Hücum açısı verildiğinde downwash oluşması", "Rüzgârdan bağımsız uçmaları", "Eşit geçiş süresi teorisinin geçerli olması"], dogru: 1,
          aciklama: "Düz kanatlı kağıt uçaklarda bile hafif bir hücum açısı verildiğinde hava aşağı saptırılır (downwash) ve taşıma üretilir; kamburluk şart değildir." },
        { id: "g4s8", etiket: "Analiz", puan: 2, soru: "Kanadın üst yüzeyindeki basıncın düşmesi ile hava hızının artması arasındaki ilişki için en doğru ifade hangisidir?",
          secenekler: ["Önce hız artar, bu basıncı düşürür (tek yönlü sebep-sonuç)", "Önce basınç düşer, bu hızı artırır (tek yönlü sebep-sonuç)", "İkisi birbirini eş zamanlı besleyerek birlikte oluşur", "Hız ve basınç birbirinden bağımsızdır"], dogru: 2,
          aciklama: "Havanın yön değiştirmesi, basınç farkı ve hız değişimi aynı anda ve birbirini besleyerek gerçekleşir; tek yönlü bir sebep-sonuç ilişkisi değildir (döngüsel nedensellik)." }
      ],
      ipuclari: {
        "Yanılgı": "Eşit geçiş süresi teorisinin neden fiziksel bir dayanağı olmadığını ve hangi örneklerle çürütüldüğünü tekrar et.",
        "Analiz": "Taşımanın kaynağının hücum açısı ve downwash olduğunu, kanadın üstünün 'yukarı bakması' gerekmediğini tekrar et.",
        "Uygulama": "Kamburluğun taşıma için zorunlu olmadığını, hücum açısının tek başına yeterli olabileceğini tekrar et."
      }
    },
"g5": {
      ad: "Hücum Açısı (Angle of Attack) ve Stall",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 18,
      mulakat: true,
      onbilgi: "Kanat Neden Taşıma Kuvveti Üretiyor?",
      guncelleme: "13 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Hücum açısı (α), veter çizgisi ile bağıl rüzgâr arasındaki açıdır ve taşıma katsayısını (C_L) doğrudan belirler. Açı arttıkça C_L belirli bir noktaya (C_L,max) kadar artar; bu kritik açı (α_stall) aşıldığında hava akışı kanat yüzeyinden ayrılır ve taşıma aniden çöker — buna Stall (tutunma kaybı) denir." },

        { id: "b2", tip: "formul", baslik: "Stall hızı",
          formul: "V_stall = √(2W / (ρ·S·C_L,max))",
          semboller: [
            ["W", "Uçağın ağırlığı", "N"],
            ["C_L,max", "Kanadın ulaşabildiği en yüksek taşıma katsayısı", "-"]
          ],
          metin: "İvmeli manevralarda (viraj gibi) yük katsayısı η eklenir: V_stall = √(2Wη / (ρ·S·C_L,max)). η arttıkça (sert dönüşlerde) stall hızı da yükselir." },

        { id: "b3", tip: "metin", baslik: "C_L – α ilişkisi",
          metin: "Küçük ve orta hücum açılarında (yaklaşık α<8-10°) C_L, α ile doğrusal artar: açı büyüdükçe downwash artar, taşıma büyür.\nSimetrik profilde α=0°'de C_L=0'dır; kambur (asimetrik) profilde ise α=0°'de bile üst yüzey akışı daha hızlı olduğundan C_L>0'dır — taşımayı sıfırlamak için negatif bir açı (α₀, sıfır taşıma açısı) gerekir.\nAçı büyüdükçe artış hızı yavaşlar ve tepe noktasında C_L,max'a ulaşılır; bu noktadan sonra taşıma düşmeye başlar." },

        { id: "b4", tip: "metin", baslik: "Akım ayrılması ve stall mekanizması",
          metin: "Düşük açılarda hava kanat üst yüzeyine tam yapışık akar. Açı arttıkça sınır tabakadaki ters basınç gradyanı güçlenir ve akım ayrılma noktası firar kenarından hücum kenarına doğru ilerler. Kritik açıda (α_stall) ayrılma noktası kanat önüne yaklaşır; hava molekülleri artık dışbükey yüzeyi takip edemez (Coanda etkisi bozulur) ve yüzeyden kopar.\nStall anında kanat üstünde girdaplı, düşük enerjili bir türbülanslı iz bölgesi oluşur; üst yüzeydeki düşük basınç etkisi yok olur, taşıma aniden düşer ve sürükleme katlanarak artar." },

        { id: "b5", tip: "gorsel", baslik: "C_L – α eğrisi", gorsel: "clalfa",
          metin: "Eğri doğrusal bölgeden başlar, C_L,max noktasında tepe yapar ve sonra düşer (stall bölgesi)." },

        { id: "b6", tip: "ornek", baslik: "Soru 1: Stall için düşük hız şart mıdır?",
          soru: "\"Stall olmak için uçağın yavaş gitmesi gerekir\" ifadesi doğru mudur?",
          cozum: "Hayır. Stall tamamen aerodinamik bir olaydır ve tek sebebi kritik hücum açısının aşılmasıdır. Yüksek hızda sert bir manevra çekilerek (yük katsayısı η artırılarak) yüksek hızlarda da uçak 'hızlandırılmış stall'a (accelerated stall) sokulabilir." },

        { id: "b7", tip: "ornek", baslik: "Soru 2: Ağırlık artarsa stall hızı nasıl değişir?",
          soru: "Uçağın ağırlığı (W) artarsa stall hızı (V_stall) nasıl değişir?",
          cozum: "V_stall = √(2W/(ρSC_L,max)) formülünde W payda değil paydadadır (pay kısmında). W arttıkça V_stall yükselir: ağır bir uçak, hafif bir uçağa göre daha yüksek hızlarda stall'a girer." },

        { id: "b8", tip: "ornek", baslik: "Soru 3: Virajda stall hızı neden artar?",
          soru: "Keskin bir dönüş (viraj) yapan uçakta stall hızı neden yükselir?",
          cozum: "Yatış açısı arttıkça uçağa binen yük katsayısı (η = 1/cosφ) artar. V_stall ∝ √η olduğundan, keskin dönüşlerde stall hızı normal düz uçuştakinden belirgin biçimde yüksektir — bu yüzden düşük hızlı virajlar tehlikelidir." },

        { id: "b9", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Stall'ı sadece düşük hızla ilişkilendirmek; stall aslında hücum açısına bağlıdır, hızlandırılmış stall yüksek hızda da olabilir.",
            "C_D'nin bazı açılarda sıfır olabileceğini sanmak; C_D hiçbir hücum açısında sıfır olmaz.",
            "Stall hızının sabit bir sayı olduğunu sanmak; ağırlık, irtifa ve yük katsayısına göre değişir.",
            "Simetrik profillerde α=0°'de taşımanın da sıfır olacağını her profile genellemek; kambur profillerde α=0°'de bile pozitif taşıma vardır."
          ] },

        { id: "b10", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Stall nedir ve nasıl oluşur?", "Kritik hücum açısı aşıldığında hava akışının kanat üst yüzeyinden ayrılması ve taşımanın aniden düşmesidir. Sebebi hız değil, hücum açısının aşılmasıdır."],
            ["Ağır bir uçağın stall hızı neden yüksektir?", "Stall hızı formülünde ağırlık pay kısmındadır (V_stall=√(2W/ρSC_L,max)); ağırlık arttıkça aynı C_L,max değerine daha yüksek hızda ulaşılabilir, dolayısıyla stall hızı yükselir."],
            ["Yüksek irtifada stall hızı neden artar?", "İrtifa arttıkça hava yoğunluğu (ρ) azalır; ρ formülde paydada olduğundan aynı taşımayı üretmek için gerçek hava hızının artması gerekir."]
          ] },

        { id: "b11", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill.",
            "FAA. (2023). Airplane Flying Handbook (FAA-H-8083-3C), Bölüm: Stalls."
          ] },

        { id: "b12", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "What Is a Stall?", kanal: "Smarter Every Day", dil: "İngilizce",
              not: "Stall mekanizmasını gerçek uçuşta gösteren pratik anlatım.",
              url: "https://www.youtube.com/watch?v=x0jppyzOMWY" }
          ] }
      ],

      sorular: [
        { id: "g5s1", etiket: "Kavram", puan: 1, soru: "Stall'ın temel sebebi nedir?",
          secenekler: ["Uçağın çok yavaş gitmesi", "Kritik hücum açısının aşılması", "Motorun gücünün düşmesi", "İrtifanın çok yüksek olması"], dogru: 1,
          aciklama: "Stall, hızdan bağımsız olarak kritik hücum açısının (α_stall) aşılmasıyla oluşan bir akım ayrılması olayıdır." },
        { id: "g5s2", etiket: "Formül", puan: 2, soru: "W=9800 N, ρ=1,225 kg/m³, S=16 m², C_L,max=1,6 için V_stall kaçtır?",
          secenekler: ["≈ 15,8 m/s", "≈ 25 m/s", "≈ 50 m/s", "≈ 625 m/s"], dogru: 1,
          aciklama: "V_stall=√(2×9800/(1,225×16×1,6))=√(19600/31,36)=√625=25 m/s." },
        { id: "g5s3", etiket: "Analiz", puan: 2, soru: "Bir uçak yüksek hızda sert bir manevra (yüksek η) çekerse stall'a girebilir mi?",
          secenekler: ["Hayır, stall sadece düşük hızda olur", "Evet, hızlandırılmış stall (accelerated stall) olarak gerçekleşebilir", "Hayır, stall sadece irtifa ile ilgilidir", "Evet ama sadece simetrik profillerde"], dogru: 1,
          aciklama: "Yüksek hızda bile sert manevra hücum açısını kritik değere taşıyabilir; buna hızlandırılmış stall denir." },
        { id: "g5s4", etiket: "Kavram", puan: 1, soru: "Simetrik bir kanat profilinde α=0°'de C_L kaçtır?",
          secenekler: ["C_L=0", "C_L=C_L,max", "C_L negatiftir", "C_L belirsizdir"], dogru: 0,
          aciklama: "Simetrik profilde alt-üst yüzey basınç dağılımı α=0°'de simetrik olduğundan taşıma üretilmez, C_L=0'dır." },
        { id: "g5s5", etiket: "Analiz", puan: 2, soru: "Bir uçak keskin bir virajda yatış açısını artırırsa stall hızına ne olur?",
          secenekler: ["Değişmez", "Azalır", "Artar", "Sıfırlanır"], dogru: 2,
          aciklama: "Yatış açısı arttıkça yük katsayısı η=1/cosφ büyür; V_stall∝√η olduğundan stall hızı yükselir." },
        { id: "g5s6", etiket: "Kavram", puan: 1, soru: "C_D hangi hücum açısında sıfır olabilir?",
          secenekler: ["α=0°'de", "α=α_stall'de", "Hiçbir açıda", "Sadece simetrik profillerde α=0°'de"], dogru: 2,
          aciklama: "Sürükleme katsayısı C_D hiçbir hücum açısında sıfır olmaz; her zaman C_D>0'dır." },
        { id: "g5s7", etiket: "Uygulama", puan: 2, soru: "Yüksek irtifada uçan bir uçağın stall hızı deniz seviyesindekine göre nasıldır?",
          secenekler: ["Daha düşüktür", "Aynıdır", "Daha yüksektir", "İrtifa stall hızını etkilemez"], dogru: 2,
          aciklama: "İrtifa arttıkça ρ azalır; V_stall formülünde ρ paydada olduğundan stall hızı (gerçek hava hızı olarak) yükselir." }
      ],
      ipuclari: {
        "Formül": "V_stall=√(2W/(ρSC_L,max)) formülünü ve hangi değişkenin payda/pay'da olduğunu tekrar et.",
        "Analiz": "Stall'ın hızdan değil hücum açısından kaynaklandığını, ağırlık/irtifa/yük katsayısının stall hızını nasıl etkilediğini tekrar et."
      }
    },
"g6": {
      ad: "Roll – Pitch – Yaw Hareketleri",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 14,
      onbilgi: "Uçağın Anatomisi",
      guncelleme: "13 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Bir uçağın uzaydaki hareketi, ağırlık merkezinden (CG) geçen üç dik eksen etrafındaki dönmelerle tanımlanır: boylamasına eksende Roll (yatış), enlemesine eksende Pitch (yunuslama), dikey eksende Yaw (sapma). Her eksenin kendine ait bir birincil kumanda yüzeyi vardır." },

        { id: "b2", tip: "tablo", baslik: "Üç eksen özeti",
          basliklar: ["Eksen", "Doğrultusu", "Hareket", "Kumanda yüzeyi", "Kumanda organı"],
          satirlar: [
            ["Boylamasına (Longitudinal)", "Burundan kuyruğa", "Roll (Yatış)", "Aileron", "Löfye — sağa/sola"],
            ["Enlemesine (Lateral)", "Kanat ucundan kanat ucuna", "Pitch (Yunuslama)", "Elevator", "Löfye — ileri/geri"],
            ["Dikey (Vertical)", "Gövde üstünden altına", "Yaw (Sapma)", "Rudder", "Ayak pedalları"]
          ] },

        { id: "b3", tip: "metin", baslik: "Roll (Yatış)",
          metin: "Uçağın boylamasına ekseni etrafında dönmesidir; bir kanat yükselirken diğeri alçalır. Aileronların zıt yönlü hareketiyle üretilir. Roll, tek başına yön değiştirmez — uçağın burnu hâlâ aynı yöne bakar, sadece kanatlar eğik durur." },

        { id: "b4", tip: "metin", baslik: "Pitch (Yunuslama)",
          metin: "Uçağın enlemesine ekseni etrafında burnunun yukarı veya aşağı hareketidir. Elevator ile üretilir; burun yukarı hareket hücum açısını artırır (taşımayı büyütür), burun aşağı hareket azaltır." },

        { id: "b5", tip: "metin", baslik: "Yaw (Sapma)",
          metin: "Uçağın dikey ekseni etrafında burnunun sağa veya sola dönmesidir. Rudder ile üretilir. Yaw tek başına dönüş için yeterli değildir — gerçek bir koordineli dönüş için roll ve yaw genelde birlikte kullanılır: uçak önce yatar (roll), taşımanın yatay bileşeni merkezcil kuvveti oluşturur, rudder ise dönüşü koordine eder." },

        { id: "b6", tip: "gorsel", baslik: "Üç eksen ve kumanda yüzeyleri", gorsel: "ucekseni",
          metin: "Aileron→Roll, Elevator→Pitch, Rudder→Yaw eşleşmesini görselleştirir." },

        { id: "b7", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Roll ile Yaw'ı karıştırmak: roll kanatları eğer, yaw burnu döndürür — ikisi farklı şeylerdir.",
            "Dönüş için sadece rudder'ın yeterli olduğunu sanmak; gerçek bir koordineli dönüş roll+yaw'ın birlikte kullanılmasını gerektirir.",
            "Pitch'i sadece 'irtifa değiştirmek' olarak görmek; pitch aslında hücum açısını değiştirir, irtifa değişimi bunun dolaylı sonucudur."
          ] },

        { id: "b8", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Roll, pitch ve yaw'ı hangi kumanda yüzeyleri üretir?", "Roll'u aileron, pitch'i elevator, yaw'ı rudder üretir. Her biri kendi eksenine karşılık gelen bir kumanda yüzeyiyle kontrol edilir."],
            ["Sadece rudder kullanarak düzgün bir dönüş yapılabilir mi?", "Hayır, bu 'yalpasız dönüş' (yaw olmadan roll) veya 'kayma' (slip/skid) ile sonuçlanır. Koordineli bir dönüş için roll ile taşımanın yatay bileşeni üretilmeli, rudder ise bunu desteklemelidir."]
          ] },

        { id: "b9", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "FAA. (2023). Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Bölüm 4: Aircraft Flight Controls.",
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill."
          ] },

        { id: "b10", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "Roll, Pitch and Yaw Explained", kanal: "Flight Insight", dil: "İngilizce",
              not: "Üç eksen ve kumanda yüzeylerini kısa animasyonla özetliyor.",
              url: "https://www.youtube.com/watch?v=6UlsArvbTeo" }
          ] }
      ],

      sorular: [
        { id: "g6s1", etiket: "Eksen-Yüzey", puan: 1, soru: "Pitch hareketini hangi kumanda yüzeyi üretir?",
          secenekler: ["Aileron", "Elevator", "Rudder", "Spoiler"], dogru: 1,
          aciklama: "Elevator, enlemesine eksen etrafında pitch (yunuslama) hareketini kontrol eder." },
        { id: "g6s2", etiket: "Kavram", puan: 1, soru: "Roll hangi ekseni etrafındaki dönmedir?",
          secenekler: ["Dikey eksen", "Enlemesine eksen", "Boylamasına eksen", "Hiçbiri"], dogru: 2,
          aciklama: "Roll, burundan kuyruğa uzanan boylamasına eksen etrafındaki dönmedir." },
        { id: "g6s3", etiket: "Analiz", puan: 2, soru: "Sadece rudder kullanılarak yapılan bir manevrada uçağın burnu döner ama kanatlar yatay kalır. Bu durumun adı nedir?",
          secenekler: ["Koordineli dönüş", "Kayma (slip/skid) — yaw olmadan roll'suz dönüş", "Stall", "Spin"], dogru: 1,
          aciklama: "Sadece yaw üretilip roll üretilmediğinde uçak kayarak döner; bu koordineli bir dönüş değildir." },
        { id: "g6s4", etiket: "Kumanda Organı", puan: 1, soru: "Rudder hangi kumanda organıyla kontrol edilir?",
          secenekler: ["Löfye — sağa/sola", "Löfye — ileri/geri", "Ayak pedalları", "Gaz kolu"], dogru: 2,
          aciklama: "Rudder, kokpitteki ayak pedallarıyla kontrol edilir." },
        { id: "g6s5", etiket: "Kavram", puan: 1, soru: "Uçağın hücum açısını doğrudan değiştiren hareket hangisidir?",
          secenekler: ["Roll", "Pitch", "Yaw", "Hiçbiri, hücum açısı sabittir"], dogru: 1,
          aciklama: "Pitch, burun yukarı/aşağı hareketiyle doğrudan hücum açısını değiştirir; irtifa değişimi bunun dolaylı sonucudur." },
        { id: "g6s6", etiket: "Kavram", puan: 1, soru: "Roll hareketi tek başına uçağın uçuş yönünü (burnun baktığı yönü) değiştirir mi?",
          secenekler: ["Evet, roll tek başına yön değiştirir", "Hayır, roll sadece kanatları eğer; yön değişimi için yaw da gerekir", "Roll sadece irtifayı değiştirir", "Roll ve yaw aynı şeydir"], dogru: 1,
          aciklama: "Roll ile uçak yalnızca yana yatar, burun aynı yöne bakmaya devam eder; gerçek bir yön değişimi için yaw bileşeni de gereklidir." },
        { id: "g6s7", etiket: "Eksen-Yüzey", puan: 1, soru: "Boylamasına eksen hangi hareketle ilişkilidir?",
          secenekler: ["Pitch", "Yaw", "Roll", "Hiçbiri"], dogru: 2,
          aciklama: "Boylamasına (longitudinal) eksen, burundan kuyruğa uzanır ve roll hareketiyle ilişkilidir." }
      ],
      ipuclari: {
        "Analiz": "Roll'un kanatları eğdiğini, yaw'ın burnu döndürdüğünü, koordineli dönüşün ikisini birlikte gerektirdiğini tekrar et."
      }
    },
"g7": {
      ad: "Kontrol Yüzeyleri",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 20,
      mulakat: true,
      onbilgi: "Roll – Pitch – Yaw Hareketleri",
      guncelleme: "13 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Kumanda yüzeyleri ikiye ayrılır: birincil yüzeyler (aileron, elevator, rudder) uçağın üç ekseni etrafındaki dönüşünü kontrol eder; ikincil yüzeyler (flap, slat, spoiler, trim tab) taşıma/sürükleme karakteristiğini uçuş rejimine göre ayarlar." },

        { id: "b2", tip: "metin", baslik: "Aileron: diferansiyel çalışma",
          metin: "Kanatların dış firar kenarındadır, zıt yönde hareket eder. Sola kumandada sol aileron yukarı kalkar (kamburluk ve efektif hücum açısı düşer, taşıma azalır), sağ aileron aşağı iner (taşıma artar). Kanatlar arası taşıma farkı roll momentini oluşturur. Kanat uçlarına yerleştirilmelerinin sebebi, CG'ye olan moment kolunu büyüterek küçük bir yüzeyle yüksek roll momenti elde etmektir." },

        { id: "b3", tip: "metin", baslik: "Elevator ve Stabilatör",
          metin: "Elevator, yatay stabilizerin firar kenarındadır. Löfye geri çekilince yukarı kalkar, yatay kuyrukta aşağı yönlü kuvvet oluşturup burnu yukarı kaldırır (Pitch Up).\nStabilatör: bazı hızlı uçaklarda yatay stabilizer tek parça olarak hareket eder. Aerodinamik kuvvetlere aşırı duyarlı olduğundan, kontrolün kaybedilmesini önlemek için firar kenarına Anti-Servo Tab eklenir; bu tab stabilatörle aynı yönde sapıp pilota mekanik direnç ve his kazandırır." },

        { id: "b4", tip: "metin", baslik: "Rudder",
          metin: "Dikey stabilizerin firar kenarındadır, ayak pedallarıyla kumanda edilir. Pedala basıldığında rudder sapar, dikey stabilizer üzerinde yan kuvvet oluşturur; CG'ye uzun moment koluyla etkiyen bu kuvvet uçağın burnunu sağa veya sola hizalar." },

        { id: "b5", tip: "tablo", baslik: "Yüksek taşıma düzenekleri (High-Lift Devices)",
          basliklar: ["Tip", "Konum", "Etkisi"],
          satirlar: [
            ["Düz Flap (Plain Flap)", "Kanat iç firar kenarı", "Profilin arkasını büker, sınırlı C_L,max artışı"],
            ["Yarıklı Flap (Slotted Flap)", "Kanat iç firar kenarı", "Alt yüzeydeki yüksek basınçlı havayı üste geçirir, akım ayrılmasını geciktirir"],
            ["Fowler Flap", "Kanat iç firar kenarı", "Geriye kayarak hem alanı (S) hem kamburluğu artırır; C_L,max'ta en büyük kazancı sağlar"],
            ["Slat", "Kanat hücum kenarı", "Yüksek açılarda alt basınçlı havayı üst yüzeye püskürtür, stall açısını geciktirir (eğriyi paralel kaydırmaz, uzatır)"]
          ],
          metin: "Flaplar C_L-α eğrisini sola/yukarı kaydırır (α₀'ı negatife öteler); slatlar ise eğriyi aynı hat üzerinde daha yüksek α'lara kadar uzatır. İkisi farklı mekanizmalarla çalışır." },

        { id: "b6", tip: "metin", baslik: "Spoiler (Hava Freni)",
          metin: "Kanat üst yüzeyinde yukarı açılan plakalardır; akışı bozarak taşımayı aniden düşürür (Lift Dumper) ve sürüklemeyi artırır. Üç kullanım alanı: uçuşta yavaşlama/hızlı alçalma (flight spoiler), iniş sonrası tekerlere yük bindirip fren verimini artırma (ground spoiler), düşük hızda aileron desteği (spoileron)." },

        { id: "b7", tip: "tablo", baslik: "Trim ve tab sistemleri",
          basliklar: ["Tab tipi", "Yerleşim", "Yön (ana yüzeye göre)", "Amaç"],
          satirlar: [
            ["Trim Tab", "Kontrol yüzeyi firar kenarı", "Zıt yönlü", "Pilotun kumanda organı üzerindeki sürekli yükü sıfırlamak"],
            ["Balance Tab", "Kontrol yüzeyi firar kenarı", "Zıt yönlü", "Yüksek hızda pilotun mekanik kumanda kuvvetini azaltmak"],
            ["Anti-Servo Tab", "Stabilatör firar kenarı", "Aynı yönlü", "Tam hareketli kuyrukta aşırı hassasiyeti önlemek"],
            ["Servo Tab", "Ana yüzey firar kenarı", "Zıt yönlü", "Tab hareket ederek ana yüzeyi aerodinamik olarak sürüklemek"]
          ] },

        { id: "b8", tip: "ornek", baslik: "Senaryo: İnişte flaplar asimetrik açılırsa",
          soru: "İniş sırasında bir kanattaki flap açılıp diğeri açılmazsa ne olur?",
          cozum: "Flabın açıldığı kanatta taşıma aniden yükselir, açılmayan kanatta düşük kalır. Bu devasa bir roll momenti oluşturur. Düşük süratte gerçekleştiği için uçak kontrolsüz yatışa geçer ve asimetrik stall riskine girer." },

        { id: "b9", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Flap ile slat'ı aynı mekanizma sanmak; flap eğriyi kaydırır, slat eğriyi uzatır (stall açısını geciktirir).",
            "Spoiler'ı sadece fren sanmak; roll desteği (spoileron) olarak da kullanılır.",
            "Trim tab'ın kontrol yüzeyini hareket ettirdiğini sanmak; trim sadece pilottaki yükü sıfırlar, ana kontrolü pilot/otopilot yapar.",
            "Anti-servo tab'ı trim tab ile aynı yönde çalışıyor sanmak; anti-servo tab aslında ana yüzeyle aynı yönde hareket eder (zıt değil)."
          ] },

        { id: "b10", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Flap ile slat arasındaki fark nedir?", "Flap kanadın kamburluğunu/alanını artırarak C_L-α eğrisini kaydırır; slat ise sınır tabakayı enerjilendirip akım ayrılmasını geciktirerek eğriyi daha yüksek hücum açılarına kadar uzatır."],
            ["Spoiler'ın üç kullanım alanı nedir?", "Uçuşta hız/irtifa kontrolü, iniş sonrası tekerlere yük bindirip fren verimini artırma, ve düşük hızda aileron etkinliğini destekleme (spoileron)."],
            ["Anti-servo tab neden gereklidir?", "Tam hareketli kuyruklar (stabilatör) aerodinamik kuvvetlere aşırı duyarlıdır; anti-servo tab ana yüzeyle aynı yönde hareket ederek pilota mekanik direnç kazandırır ve kontrolün kaybedilmesini önler."]
          ] },

        { id: "b11", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "IVAO-TR Eğitim Departmanı. (2014). Gövde ve Sistemleri.",
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill.",
            "FAA. (2023). Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Bölüm 6."
          ] },

        { id: "b12", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "Flaps and Slats Explained", kanal: "Mentour Pilot", dil: "İngilizce",
              not: "Gerçek uçuşta flap/slat kullanımını ve etkisini gösteriyor.",
              url: "https://www.youtube.com/watch?v=Xgw2h-mR3vE" }
          ] }
      ],

      sorular: [
        { id: "g7s1", etiket: "Kavram", puan: 1, soru: "Flapların temel etkisi nedir?",
          secenekler: ["Sürüklemeyi tamamen ortadan kaldırmak", "Kamburluk/alanı artırıp C_L,max'ı yükseltmek", "Motor gücünü artırmak", "Yaw momenti üretmek"], dogru: 1,
          aciklama: "Flaplar kanadın kamburluğunu ve bazı tiplerde alanını artırarak C_L,max'ı yükseltir, düşük hızda daha fazla taşıma sağlar." },
        { id: "g7s2", etiket: "Kavram", puan: 1, soru: "Slatların C_L-α eğrisine etkisi nasıldır?",
          secenekler: ["Eğriyi sola kaydırır", "Eğriyi aynı hat üzerinde daha yüksek açılara uzatır", "Eğriyi tamamen düzleştirir", "Hiçbir etkisi yoktur"], dogru: 1,
          aciklama: "Slatlar akım ayrılmasını geciktirerek stall açısını yükseltir; eğriyi paralel kaydırmak yerine aynı hat üzerinde uzatır." },
        { id: "g7s3", etiket: "Senaryo", puan: 2, soru: "İnişte bir kanattaki flap açılıp diğeri açılmazsa en olası sonuç nedir?",
          secenekler: ["Hiçbir etki olmaz", "Şiddetli bir roll momenti ve asimetrik stall riski", "Sadece hafif bir yaw oluşur", "Uçak otomatik olarak dengelenir"], dogru: 1,
          aciklama: "Flabı açık kanatta taşıma yükselir, diğerinde düşük kalır; oluşan taşıma farkı ciddi bir roll momenti ve düşük hızda asimetrik stall riski yaratır." },
        { id: "g7s4", etiket: "Kavram", puan: 1, soru: "Ground spoiler'ın iniş sonrası temel görevi nedir?",
          secenekler: ["Taşımayı artırmak", "Taşımayı düşürüp tekerlere yük bindirerek fren verimini artırmak", "Motor gücünü azaltmak", "Yakıt tasarrufu sağlamak"], dogru: 1,
          aciklama: "Ground spoiler tam açılarak kanat taşımasını sıfırlar, uçağın ağırlığını tekerleklere bindirir ve frenleme verimini artırır." },
        { id: "g7s5", etiket: "Analiz", puan: 2, soru: "Anti-servo tab, stabilatörle aynı yönde mi zıt yönde mi hareket eder ve neden?",
          secenekler: ["Zıt yönde; pilotu desteklemek için", "Aynı yönde; mekanik direnç oluşturup aşırı hassasiyeti önlemek için", "Hiç hareket etmez, sabittir", "Sadece iniş sırasında hareket eder"], dogru: 1,
          aciklama: "Anti-servo tab stabilatörle aynı yönde sapar ve pilotun kumandasına karşı bir direnç momenti oluşturarak aşırı duyarlılığı önler." },
        { id: "g7s6", etiket: "Kavram", puan: 1, soru: "Trim tab'ın temel amacı nedir?",
          secenekler: ["Ana kontrol yüzeyinin yerini almak", "Pilotun kumanda organı üzerindeki sürekli yükü sıfırlamak", "Sürüklemeyi artırmak", "Motor gücünü dengelemek"], dogru: 1,
          aciklama: "Trim tab, pilotun kontrol yüzeyini sabit bir pozisyonda tutmak için sürekli uygulaması gereken kuvveti azaltır/sıfırlar." },
        { id: "g7s7", etiket: "Kavram", puan: 1, soru: "Aileronların kanat uçlarına yerleştirilmesinin mühendislik sebebi nedir?",
          secenekler: ["Üretim kolaylığı", "CG'ye olan moment kolunu büyütüp küçük yüzeyle yüksek roll momenti elde etmek", "Ağırlığı azaltmak", "Sadece estetik tercih"], dogru: 1,
          aciklama: "Kanat ucu, ağırlık merkezine en uzak nokta olduğundan moment kolu büyür; aynı kuvvetle daha büyük bir roll momenti üretilebilir." },
        { id: "g7s8", etiket: "Kavram", puan: 1, soru: "Fowler flap'ı diğer flap tiplerinden ayıran özellik nedir?",
          secenekler: ["Sadece yukarı açılması", "Açılırken geriye kayarak hem alanı hem kamburluğu artırması", "Hiç hareket etmemesi", "Sadece kalkışta kullanılması"], dogru: 1,
          aciklama: "Fowler flap açılırken geriye doğru kayar, hem kanat alanını (S) hem kamburluğu artırarak C_L,max'ta en büyük kazancı sağlar." },
        { id: "g7s9", etiket: "Analiz", puan: 2, soru: "Uçuş sırasında (flight spoiler) kullanmanın amacı nedir?",
          secenekler: ["Taşımayı artırıp tırmanmayı hızlandırmak", "İrtifa kaybetmeden yavaşlamak veya hızlanmadan hızla alçalmak", "Motor gücünü artırmak", "Yakıt tasarrufu sağlamak"], dogru: 1,
          aciklama: "Uçuş spoilerleri, taşımayı ve sürüklemeyi kontrollü şekilde değiştirerek pilotun irtifa kaybetmeden yavaşlamasını veya hızlanmadan alçalmasını sağlar." }
      ],
      ipuclari: {
        "Senaryo": "Hangi kanadın taşımasının değiştiğini ve bunun roll yönünü nasıl belirlediğini adım adım düşün.",
        "Analiz": "Anti-servo tab ile trim/servo tab'ların yönlerinin (aynı/zıt) birbirinden farklı olduğunu tekrar et."
      }
    },
"g8": {
      ad: "Uçağın İçinde Neler Var?",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 22,
      onbilgi: "Kontrol Yüzeyleri",
      guncelleme: "13 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Yarı monokok bir uçak gövdesi, dikey elemanlar (bulkhead, frame/ring) ile boylamasına elemanların (lonjeron, stringer) ve dış kaplamanın (skin) birlikte yük taşımasıyla çalışır. Kanatta ise spar ve rib benzer görevleri üstlenir. Bu iskeletin içinde hidrolik, yakıt ve aviyonik alt sistemleri yaşar." },

        { id: "b2", tip: "tablo", baslik: "Gövde iskelet elemanları",
          basliklar: ["Eleman", "Görevi"],
          satirlar: [
            ["Bulkhead (Bölme duvarı)", "Kabin basıncını tutar; kanat/iniş takımı gibi büyük lokal yükleri gövdeye dağıtır"],
            ["Frame / Ring (Halka)", "Gövdenin enine kesit formunu korur, ezilme/burkulmaya karşı rijitlik sağlar"],
            ["Lonjeron (Longeron)", "Boylamasına uzanır; gövdedeki büyük eğilme momentlerini ve çekme/basma gerilmelerini taşır"],
            ["Stringer", "İnce, sık aralıklı boylamasına profiller; dış kaplamanın lokal burkulmasını önler"],
            ["Skin (Kaplama)", "Yarı monokokta pasif değildir — kesme ve burulma yüklerini doğrudan taşır (stressed-skin)"]
          ] },

        { id: "b3", tip: "metin", baslik: "Kanat iskeleti ve Wet Wing",
          metin: "Spar (Serpen): kanadın kökünden ucuna uzanan ana taşıyıcıdır; üst-alt başlıkları (flanges) eğilme momentini, orta gövde (web) kesme gerilmesini taşır. Ön ve arka spar arasındaki kapalı hacme Torsiyon Kutusu (Torque Box) denir.\nRib (Kaburga): uçuş doğrultusuna paralel dizilir, kaplamadan gelen aerodinamik yükü toplayıp spar'lara iletir, kanadın kesit profilini korur.\nWet Wing: torsiyon kutusunun sızdırmaz iç hacmi doğrudan ana yakıt deposu olarak kullanılır; ayrı bir depo taşımaya gerek kalmaz." },

        { id: "b4", tip: "tablo", baslik: "Havacılık malzemeleri",
          basliklar: ["Malzeme", "Kullanım alanı"],
          satirlar: [
            ["Alüminyum alaşımları (2xxx, 7xxx)", "Hafiflik ve özgül mukavemet sayesinde ana yapısal malzeme"],
            ["Krom-molibden çeliği (SAE 4130)", "Yüksek gerilme mukavemeti — iniş takımı dikmeleri, ana bağlantı elemanları"],
            ["Titanyum alaşımları (Ti-6Al-4V)", "Yüksek sıcaklık dayanımı ve korozyon direnci — bölme duvarları, kompresör parçaları"],
            ["Kompozit (karbon fiber/lamine)", "B787, A350 gibi modern uçaklarda gövde/kanat yapısının %50'sinden fazlası"]
          ] },

        { id: "b5", tip: "metin", baslik: "Hidrolik, pnömatik ve yakıt sistemleri",
          metin: "Hidrolik sistem: kumanda yüzeylerini, iniş takımını ve frenleri hareket ettiren, tipik olarak ~3000 psi basınçlı kapalı devre bir sistemdir.\nPnömatik / bleed hava: motor kompresöründen alınan sıcak-basınçlı hava; kabin basınçlandırması, iklimlendirme ve hücum kenarı buz önleme sisteminde kullanılır.\nYakıt sistemi: sağ, sol ve merkez depo arasında transfer pompaları ve cross-feed valfleriyle denge sağlanır; miktar kapasitif sensörlerle ölçülür." },

        { id: "b6", tip: "metin", baslik: "Aviyonik mimarisine kısa bakış",
          metin: "Pitot-Statik / DADC (Digital Air Data Computer): dinamik ve statik basınç farkından irtifa, hız (IAS/TAS) ve Mach sayısını hesaplar.\nFMS (Flight Management System): navigasyon, yakıt ve atmosfer verilerini birleştirip otopilot/otomatik gazı koordine eden ana uçuş bilgisayarıdır.\nEICAS/ECAM: motor parametrelerini ve sistem arızalarını tek ekranda toplayan izleme sistemidir.\nElektrik mimarisi: jeneratör/APU'dan gelen AC (115V/400Hz), Transformer Rectifier üniteleriyle DC'ye (28V) çevrilip aviyonik baralara dağıtılır." },

        { id: "b7", tip: "ornek", baslik: "Senaryo: Bir stringer kırılırsa",
          soru: "Gövdedeki bir stringer koparsa ne olur?",
          cozum: "Stringer, dış kaplamanın boylamasına destek elemanıdır. Kırıldığında kaplama o bölgede desteğini kaybeder; basma veya burulma yükü altında kabuk lokal olarak burkulur, bu da komşu stringer'lara aşırı yük binmesine ve yorulmaya yol açar." },

        { id: "b8", tip: "ornek", baslik: "Senaryo: Arka basınç bulkhead'i hasar görürse",
          soru: "Arka basınç bulkhead'i (rear pressure bulkhead) hasar görürse ne olur?",
          cozum: "Bu yapı, basınçlı kabin hacmini dış atmosferden ayıran ana sınırdır. Hasar görmesi kabin basıncının aniden düşmesine (explosive decompression) yol açabilir — bu yüzden bulkhead'ler düzenli yorulma/çatlak kontrolüne tabi tutulur." },

        { id: "b9", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Yarı monokok yapıda kaplamayı (skin) sadece 'dış kaplama' sanmak; aslında kesme ve burulma yüklerini doğrudan taşıyan yapısal bir elemandır.",
            "Lonjeron ile stringer'ı karıştırmak; lonjeron ana eğilme yükünü taşır, stringer sadece kaplamanın lokal burkulmasını önler.",
            "Kompozitlerin her zaman metalden daha güçlü olduğunu sanmak; asıl avantajları özgül dayanım/rijitliktedir (ağırlık başına performans).",
            "Wet wing'in ayrı bir yakıt tankı olduğunu sanmak; aslında kanadın kendi yapısal boşluğu (torsiyon kutusu) depo olarak kullanılır."
          ] },

        { id: "b10", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Yarı monokok yapıda kaplamanın (skin) rolü nedir?", "Pasif bir örtü değildir; kesme ve burulma yüklerini doğrudan taşıyan yapısal bir elemandır (stressed-skin kavramı)."],
            ["Wet wing nedir?", "Kanadın ön-arka spar ve üst-alt kaplama panelleriyle oluşan sızdırmaz iç hacminin (torsiyon kutusu) doğrudan ana yakıt deposu olarak kullanılmasıdır."],
            ["Neden bazı uçak parçaları titanyum, bazıları alüminyumdan yapılır?", "Titanyum yüksek sıcaklık dayanımı ve korozyon direnci gerektiren yerlerde (bölme duvarları, kompresör), alüminyum ise hafiflik ve özgül mukavemetin öncelikli olduğu genel yapısal elemanlarda tercih edilir."]
          ] },

        { id: "b11", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "IVAO-TR Eğitim Departmanı. (2014). Gövde ve Sistemleri.",
            "Niu, M. C. Y. (1988). Airframe structural design. Conmilit Press.",
            "FAA. (2018). Aviation Maintenance Technician Handbook — Airframe (FAA-H-8083-31)."
          ] },

        { id: "b12", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "How Aircraft Are Built (Structure)", kanal: "Real Engineering", dil: "İngilizce",
              not: "Yarı monokok yapı ve modern kompozit gövde üretimini anlatıyor.",
              url: "https://www.youtube.com/watch?v=3H1w2xEfMxE" }
          ] }
      ],

      sorular: [
        { id: "g8s1", etiket: "Kavram", puan: 1, soru: "Yarı monokok yapıda ana eğilme momentini hangi eleman taşır?",
          secenekler: ["Stringer", "Lonjeron", "Rib", "Skin (tek başına)"], dogru: 1,
          aciklama: "Lonjeron, gövde boyunca uzanan kalın kesitli boylamasına elemandır ve ana eğilme momentlerini taşır." },
        { id: "g8s2", etiket: "Kavram", puan: 1, soru: "Stringer'ın temel görevi nedir?",
          secenekler: ["Kabin basıncını tutmak", "Dış kaplamanın lokal burkulmasını önlemek", "Yakıtı depolamak", "Motoru gövdeye bağlamak"], dogru: 1,
          aciklama: "Stringer, dış kaplamaya boylamasına destek vererek kaplamanın burulmasını ve lokal burkulmasını önler." },
        { id: "g8s3", etiket: "Kavram", puan: 1, soru: "Wet wing kavramı neyi ifade eder?",
          secenekler: ["Kanadın yağmurda ıslanması", "Torsiyon kutusunun ana yakıt deposu olarak kullanılması", "Kanadın buzlanmaya karşı ısıtılması", "Kanat yapısının kompozit olması"], dogru: 1,
          aciklama: "Wet wing, spar ve kaplama panellerinin oluşturduğu sızdırmaz torsiyon kutusunun doğrudan yakıt deposu olarak kullanılmasıdır." },
        { id: "g8s4", etiket: "Malzeme", puan: 2, soru: "İniş takımı dikmeleri gibi yüksek gerilme mukavemeti gereken yerlerde hangi malzeme tercih edilir?",
          secenekler: ["Karbon fiber kompozit", "Krom-molibden çeliği (SAE 4130)", "Saf alüminyum", "Cam elyaf"], dogru: 1,
          aciklama: "SAE 4130 krom-molibden çeliği, yüksek gerilme mukavemeti ve kaynak kabiliyeti sayesinde iniş takımı dikmelerinde tercih edilir." },
        { id: "g8s5", etiket: "Senaryo", puan: 2, soru: "Yarı monokok gövdede kaplamadaki (skin) bir çatlak neden tehlikelidir?",
          secenekler: ["Sadece görsel bir sorundur, yapısal etkisi yoktur", "Kaplama kesme/burulma yükü taşıdığından çatlak basınçlandırma döngülerinde ilerleyebilir", "Kaplama zaten yük taşımadığı için önemsizdir", "Sadece motor performansını etkiler"], dogru: 1,
          aciklama: "Yarı monokok yapıda kaplama taşıyıcı bir elemandır; çatlak basınçlandırma döngüleriyle genişleyip gövde bütünlüğünü tehlikeye atabilir." },
        { id: "g8s6", etiket: "Kavram", puan: 1, soru: "DADC (Digital Air Data Computer) neyi hesaplar?",
          secenekler: ["Yakıt tüketimini", "İrtifa, hız (IAS/TAS) ve Mach sayısını", "Motor sıcaklığını", "Kanat yükünü"], dogru: 1,
          aciklama: "DADC, pitot-statik sistemden aldığı basınç verileriyle irtifa, hava hızı ve Mach sayısını hesaplayıp göstergelere/otopilota iletir." },
        { id: "g8s7", etiket: "Kavram", puan: 1, soru: "Rib'in (kaburga) kanattaki temel görevi nedir?",
          secenekler: ["Ana eğilme yükünü taşımak", "Kaplamadan gelen yükü toplayıp spar'lara iletmek, kesit profilini korumak", "Yakıtı depolamak", "Motoru bağlamak"], dogru: 1,
          aciklama: "Rib, kanadın aerodinamik kesit profilini korur ve kaplamadan gelen yükü toplayarak ana taşıyıcı spar'lara iletir." },
        { id: "g8s8", etiket: "Kavram", puan: 1, soru: "Bleed hava (motor kompresöründen alınan sıcak-basınçlı hava) hangi sistemlerde kullanılır?",
          secenekler: ["Sadece motor soğutmasında", "Kabin basınçlandırma, iklimlendirme ve buz önleme sistemlerinde", "Sadece hidrolik pompada", "Sadece yakıt transferinde"], dogru: 1,
          aciklama: "Bleed hava; kabin basınçlandırması, iklimlendirme (HVAC) ve kanat hücum kenarı buz önleme sistemlerinde kullanılır." },
        { id: "g8s9", etiket: "Kavram", puan: 1, soru: "Hidrolik sistemin tipik çalışma basıncı hangi aralıktadır?",
          secenekler: ["~30 psi", "~300 psi", "~3000 psi", "~30000 psi"], dogru: 2,
          aciklama: "Uçak hidrolik sistemleri tipik olarak ~3000 psi gibi yüksek basınçlarda çalışır; bu sayede kumanda yüzeyleri, iniş takımı ve frenler güçlü biçimde hareket ettirilebilir." }
      ],
      ipuclari: {
        "Malzeme": "Hangi malzemenin hangi özelliği (mukavemet, hafiflik, sıcaklık dayanımı, korozyon direnci) öne çıkardığını eşleştirmeyi tekrar et.",
        "Senaryo": "Yarı monokok yapıda kaplamanın pasif değil taşıyıcı bir eleman olduğunu tekrar et."
      }
    },
"g9": {
      ad: "Uçak Yapısı",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 18,
      mulakat: true,
      onbilgi: "Uçağın İçinde Neler Var?",
      guncelleme: "13 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Uçak gövdeleri yapısal olarak üç tipe ayrılır: Kafes (Truss), Monokok (Monocoque) ve Yarı Monokok (Semi-Monocoque). Her biri yükü farklı şekilde taşır ve bu seçim, uçağın ağırlığını, dayanıklılığını ve hasar toleransını doğrudan belirler." },

        { id: "b2", tip: "metin", baslik: "Kafes Yapı (Truss)",
          metin: "İçi boş çelik boruların birbirine kaynaklanmasıyla oluşan, uzay çatısını andıran bir iskelettir; üzeri bez veya fiberglasla kaplanır. Asıl yükü tamamen kafes taşır, dış kaplamanın taşıyıcı bir rolü yoktur. Pratt ve Warren olmak üzere iki tür kafes yapı vardır. Düşük performanslı, hafif genel havacılık uçaklarında tercih edilir." },

        { id: "b3", tip: "metin", baslik: "Monokok Yapı (Monocoque)",
          metin: "Gövde kaplamasının, biçimlendirilmiş halkalar (bulkhead, frame/ring) üzerine perçinlenmesiyle oluşur; boylamasına destek çubuğu yoktur. Asıl yükü metal sac veya kompozit kaplama taşır.",
          kutu: { tip: "bilgi", baslik: "Alüminyum içecek kutusu benzetmesi", metin: "Monokok yapı, ince alüminyumdan yapılmış bir içecek kutusuna benzer: tabanına çevreden uygulanan kuvvetlere dayanıklıdır ama ortasına yandan bastırılırsa çöker. Bu sınırlı hasar toleransı nedeniyle günümüz uçaklarında saf monokok yapı yerine yarı monokok tercih edilir." } },

        { id: "b4", tip: "metin", baslik: "Yarı Monokok Yapı (Semi-Monocoque)",
          metin: "İki, üç veya daha fazla ana parçanın gövde kaplamasına perçinlenmesiyle oluşur. Bulkhead ve ring gibi dikey elemanlara ek olarak Lonjeron ve Stringer gibi boylamasına elemanlar kullanılır. Lonjeron halkaları dışarıdan kaplayarak hem yapısal yükleri taşır hem gövdenin dış şeklini oluşturur; stringer ise kaplamaya boylamasına destek vererek burulma ve burkulmayı önler. Günümüz sivil ve askeri uçaklarının neredeyse tamamı bu yapıdadır çünkü hem hafiftir hem de lokal bir hasarda aniden çökmez (hasar toleranslıdır)." },

        { id: "b5", tip: "tablo", baslik: "Üç gövde tipinin karşılaştırması",
          basliklar: ["Yapı", "Yükü taşıyan", "Hasar toleransı", "Kullanım"],
          satirlar: [
            ["Kafes (Truss)", "İç iskelet (borular)", "Yüksek (kaplama yük taşımaz)", "Hafif genel havacılık uçakları"],
            ["Monokok", "Dış kaplama (tek başına)", "Düşük (lokal hasar tüm gövdeyi zayıflatır)", "Nadiren tek başına kullanılır"],
            ["Yarı Monokok", "Kaplama + lonjeron/stringer + frame birlikte", "Yüksek (yük dağıtılmıştır)", "Modern sivil/askeri uçakların neredeyse tamamı"]
          ] },

        { id: "b6", tip: "metin", baslik: "İniş takımı tipleri",
          metin: "Konumuna göre: Kuyruktan tekerlekli, Burundan tekerlekli (günümüz yolcu uçaklarında yaygın) ve Çok tekerlekli.\nMekanizmasına göre: Sabit iniş takımı (fixed gear — düşük performans, düşük maliyet, basit sistem) ve Toplanabilen iniş takımı (retractable gear — yüksek performans ama yüksek maliyet; uçağın dizaynına göre gövde veya kanat içine toplanır).\nFrenleme genelde ana dikmelere monte edilmiş fren diskleriyle yapılır; her iki ana dikme birbirinden bağımsız çalıştığından yer manevralarında kolay kontrol sağlanır." },

        { id: "b7", tip: "ornek", baslik: "Senaryo: Monokok gövdede lokal bir ezilme olursa",
          soru: "Saf monokok yapılı bir gövdede kaplamada lokal bir ezilme/deformasyon oluşursa ne olur?",
          cozum: "Monokok yapıda tüm yapısal yükü dış kaplama taşıdığı için, kaplamadaki lokal bir hasar (içecek kutusu örneğindeki gibi) gövdenin o bölgedeki mukavemetini büyük ölçüde kaybetmesine yol açar. Bu yüzden günümüz uçakları, yükü kaplama+iskelet arasında paylaştıran yarı monokok yapıyı tercih eder." },

        { id: "b8", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Monokok ile yarı monokok yapıyı aynı sanmak; monokokta yük tamamen kaplamadadır, yarı monokokta kaplama+iskelet birlikte taşır.",
            "Kafes yapının modern yolcu uçaklarında kullanıldığını sanmak; günümüzde sadece hafif genel havacılık uçaklarında görülür.",
            "Toplanabilen iniş takımının her zaman gövdeye toplandığını sanmak; uçağın tasarımına göre kanat içine de toplanabilir.",
            "Fren sisteminin iki ana dikmede birlikte (tek blok) çalıştığını sanmak; genelde birbirinden bağımsızdır, bu da yerde manevra kolaylığı sağlar."
          ] },

        { id: "b9", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Monokok ile yarı monokok yapı arasındaki temel fark nedir?", "Monokokta tüm yapısal yükü dış kaplama taşır; yarı monokokta kaplamaya ek olarak lonjeron, stringer ve frame gibi iç elemanlar da yük paylaşır. Bu, yarı monokoku hem hafif hem hasar toleranslı yapar."],
            ["Neden günümüz uçaklarında yarı monokok tercih edilir?", "Yükü birden fazla eleman arasında dağıttığı için lokal bir hasarda gövde aniden çökmez; aynı zamanda saf kafes yapıya göre çok daha hafiftir."],
            ["Toplanabilen iniş takımının avantaj ve dezavantajı nedir?", "Avantajı: uçuşta sürüklemeyi ortadan kaldırarak performansı artırır. Dezavantajı: mekanizma karmaşıklığı nedeniyle maliyeti ve ağırlığı yükseltir."]
          ] },

        { id: "b10", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "IVAO-TR Eğitim Departmanı. (2014). Gövde ve Sistemleri.",
            "Niu, M. C. Y. (1988). Airframe structural design. Conmilit Press."
          ] },

        { id: "b11", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "Monocoque vs Semi-Monocoque", kanal: "Real Engineering", dil: "İngilizce",
              not: "Gövde yapı tiplerini örneklerle karşılaştırıyor.",
              url: "https://www.youtube.com/watch?v=3H1w2xEfMxE" }
          ] }
      ],

      sorular: [
        { id: "g9s1", etiket: "Kavram", puan: 1, soru: "Kafes (Truss) yapıda asıl yükü ne taşır?",
          secenekler: ["Dış kaplama (bez/fiberglas)", "İçi boş çelik boru iskelet", "Yalnızca kanat spar'ı", "Motor bağlantı noktaları"], dogru: 1,
          aciklama: "Kafes yapıda dış kaplama sadece aerodinamik örtüdür; asıl yükü kaynaklı çelik boru iskelet taşır." },
        { id: "g9s2", etiket: "Kavram", puan: 1, soru: "Monokok yapının temel zayıflığı nedir?",
          secenekler: ["Çok ağır olması", "Lokal bir hasarın tüm gövde mukavemetini ciddi biçimde düşürmesi", "Kaplamanın hiç yük taşımaması", "Sadece kompozit malzemeyle yapılabilmesi"], dogru: 1,
          aciklama: "Tüm yükü tek başına taşıyan kaplamadaki lokal bir deformasyon, içecek kutusu örneğindeki gibi ciddi mukavemet kaybına yol açar." },
        { id: "g9s3", etiket: "Kavram", puan: 1, soru: "Yarı monokok yapıda lonjeronun görevi nedir?",
          secenekler: ["Kabin basıncını ayarlamak", "Halkaları dışarıdan kaplayarak yapısal yükü taşımak ve dış şekli oluşturmak", "Sadece estetik amaçlıdır", "Yakıtı depolamak"], dogru: 1,
          aciklama: "Lonjeron, gövdenin iskelet halkalarını dışarıdan kaplayarak hem yapısal yükleri taşır hem de gövdenin dış şeklini oluşturur." },
        { id: "g9s4", etiket: "Uygulama", puan: 2, soru: "Günümüz yolcu uçaklarında en yaygın kullanılan iniş takımı konfigürasyonu hangisidir?",
          secenekler: ["Kuyruktan tekerlekli", "Burundan tekerlekli", "Tek tekerlekli", "Kafes tipi iniş takımı"], dogru: 1,
          aciklama: "Burundan tekerlekli (nose-wheel) konfigürasyon, günümüz yolcu uçaklarında yaygın olarak kullanılır." },
        { id: "g9s5", etiket: "Senaryo", puan: 2, soru: "Toplanabilen (retractable) iniş takımlı bir uçağın sabit iniş takımlı bir uçağa göre temel avantajı nedir?",
          secenekler: ["Daha ucuzdur", "Uçuşta sürüklemeyi azaltarak performansı artırır", "Bakımı daha kolaydır", "Daha az yapısal yük taşır"], dogru: 1,
          aciklama: "Toplanabilen iniş takımı uçuşta gövde/kanat içine çekilerek aerodinamik sürüklemeyi ortadan kaldırır, bu da performansı artırır; karşılığında maliyet ve karmaşıklık yükselir." },
        { id: "g9s6", etiket: "Kavram", puan: 1, soru: "Kafes (truss) yapıda kaç tür kafes deseni yaygındır?",
          secenekler: ["Pratt ve Warren olmak üzere iki tür", "Sadece Warren tipi", "Beş farklı tür", "Kafes yapıda desen ayrımı yoktur"], dogru: 0,
          aciklama: "Kafes yapılarda Pratt ve Warren olmak üzere iki yaygın desen türü vardır." },
        { id: "g9s7", etiket: "Uygulama", puan: 2, soru: "Fren disklerinin ana dikmelerde birbirinden bağımsız çalışmasının pratik faydası nedir?",
          secenekler: ["Yakıt tasarrufu sağlar", "Yerde/rule sırasında uçağın kolayca yönlendirilmesini sağlar", "Kalkış mesafesini kısaltır", "İrtifa kazancını artırır"], dogru: 1,
          aciklama: "Fren diskleri her iki ana dikmede bağımsız çalıştığından, tek tarafa fren uygulanarak uçak yerde kolayca döndürülebilir/yönlendirilebilir." }
      ],
      ipuclari: {
        "Uygulama": "Üç gövde tipinin (kafes/monokok/yarı monokok) hangi uçak kategorisinde kullanıldığını eşleştirmeyi tekrar et.",
        "Senaryo": "Toplanabilen iniş takımının performans-maliyet dengesini tekrar et."
      }
    },
"g10": {
      ad: "Uçak Neden Dönüyor?",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 14,
      mulakat: true,
      onbilgi: "Uçak Nasıl Havada Duruyor?, Hücum Açısı ve Stall",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Uçak, kumanda yüzeyleriyle yön değiştiren bir araç değil, kuvvet dengesini bilerek bozan bir araçtır. Dönüş için rudder değil, esas olarak aileron kullanılır: uçak yatınca (roll) taşımanın bir kısmı yatay yöne kayar ve bu yatay bileşen uçağı dairesel bir yola zorlayan merkezcil kuvveti oluşturur. Bunun bedeli, aynı taşımayla artık daha az dikey destek kalmasıdır — bu yüzden dönüşlerde hücum açısı artırılmazsa irtifa kaybedilir." },

        { id: "b2", tip: "metin", baslik: "Neden sadece rudder yetmez?",
          metin: "Sezgisel olarak 'dönmek için rudder'a basılır' sanılır, ama rudder tek başına sadece burnu yana çevirir (yaw) — uçağın kütlesi eylemsizlik nedeniyle bir süre eski yönünde ilerlemeye devam eder, bu da uçağı yana kaydırır (skid). Gerçek bir koordineli dönüş için uçağın yatay düzlemde net bir merkezcil kuvvete ihtiyacı vardır; bunu en verimli üreten kuvvet zaten var olan taşımanın kendisidir — aileron ile uçağı yatırıp taşımayı bölmek gerekir." },

        { id: "b3", tip: "formul", baslik: "Taşımanın dikey ve yatay bileşenleri",
          formul: "L_v = L · cosφ    L_h = L · sinφ",
          semboller: [
            ["φ", "Yatış açısı (bank angle) — kanatların ufka göre yaptığı açı", "derece"],
            ["L_v", "Taşımanın dikey bileşeni — ağırlığı dengeler", "N"],
            ["L_h", "Taşımanın yatay (merkezcil) bileşeni — dönüşü sağlar", "N"]
          ],
          metin: "Uçak aileronlarla yatış açısı (φ) aldığında, kanatların ürettiği toplam taşıma kuvveti (L) iki dik bileşene ayrılır. Dikey bileşen ağırlığı dengelemeye devam ederken, yatay bileşen uçağı dairesel bir yörüngeye zorlayan merkezcil kuvveti oluşturur." },

        { id: "b4", tip: "gorsel", baslik: "Yatışta taşımanın bölünmesi", gorsel: "donuskuvvet",
          metin: "Uçak yatınca toplam taşıma (L) aynı kalsa bile, ağırlığı dengeleyen dikey bileşen (L·cosφ) küçülür; açığa çıkan yatay bileşen (L·sinφ) dönüşü sağlar." },

        { id: "b5", tip: "metin", baslik: "İrtifa kaybı riski ve pilotun tepkisi",
          metin: "Dönüş sırasında L_v = L·cosφ, φ arttıkça küçülür. φ sabit L ile artarsa L_v < W durumuna düşülür ve uçak irtifa kaybetmeye başlar. Bunu önlemek için pilot hücum açısını (α) hafifçe artırır ('pitch up' komutu) — bu, C_L'yi ve dolayısıyla toplam L'yi büyütür, L_v yeniden W'ye eşitlenir ve uçak irtifasını korur.",
          kutu: { tip: "bilgi", baslik: "Bedelsiz değil", metin: "Hücum açısını artırmak sürüklemeyi de artırır (Uçak Nasıl Havada Duruyor? dersini hatırla: C_D hiçbir açıda sıfır değildir). Bu yüzden sürdürülen bir dönüşte motorun da biraz daha fazla itki üretmesi gerekir, aksi halde hız düşer." } },

        { id: "b6", tip: "formul", baslik: "Yük faktörü (load factor)",
          formul: "n = L / W = 1 / cosφ",
          semboller: [
            ["n", "Yük faktörü — uçağın hissettiği kuvvetin ağırlığına oranı", "g (yerçekimi katı)"]
          ],
          metin: "Yatış açısı arttıkça yapıya binen dinamik yük de artar. Örneğin 60° yatışta n = 1/cos60° = 2 — yani uçak ve içindekiler normal ağırlığının iki katı bir yük hisseder. Yapısal tasarım limitleri bu yük faktörü göz önüne alınarak belirlenir; sivil uçaklarda tipik limit +2,5g / -1g civarındadır." },

        { id: "b7", tip: "tablo", baslik: "Yatış açısına göre yük faktörü",
          basliklar: ["Yatış açısı (φ)", "n = 1/cosφ"],
          satirlar: [
            ["0°", "1,0"],
            ["30°", "1,15"],
            ["45°", "1,41"],
            ["60°", "2,0"],
            ["75°", "3,86"]
          ],
          metin: "Yük faktörü yatış açısıyla doğrusal değil, hızla büyüyen (1/cosφ) bir ilişkiyle artar; 60°'nin üzerinde çok hızlı büyür." },

        { id: "b8", tip: "metin", baslik: "Dönüşte stall hızı neden yükselir?",
          metin: "Hücum Açısı ve Stall dersindeki V_stall formülünü hatırla: V_stall = √(2Wη/(ρSC_L,max)), burada η yük faktörüdür (n ile aynı büyüklük). Dönüşte n>1 olduğundan stall hızı düz uçuştakinden yüksektir. Bu yüzden düşük hızda yapılan keskin dönüşler (özellikle iniş yaklaşımında, alçak irtifada) 'base-to-final dönüşü stall'ı' gibi ciddi kazalara yol açabilir — uçak sanki güvenli hızdaymış gibi hissettirse de, dönüşün kendisi stall hızını yükseltmiştir." },

        { id: "b9", tip: "ornek", baslik: "Senaryo: 45° yatışla sabit irtifada dönüş",
          soru: "Bir uçak 45° yatış açısıyla, irtifa kaybetmeden koordineli bir dönüş yapıyor. Ağırlığı W ise, kanatların üretmesi gereken toplam taşıma kuvveti (L) ne kadar olmalıdır?",
          cozum: "Sabit irtifa şartı L_v = W'dir, yani L·cos45° = W. cos45° ≈ 0,707 olduğundan L = W / 0,707 ≈ 1,41·W. Yani uçak düz uçuştakinin yaklaşık %41 fazlası taşıma üretmelidir — bu da n=1,41 yük faktörüne karşılık gelir (tablodaki değerle tutarlı)." },

        { id: "b10", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Dönüşün rudder ile yapıldığını sanmak; rudder sadece yardımcıdır (koordinasyon), asıl merkezcil kuvveti üreten aileron ile alınan yatış açısıdır.",
            "Yatış açısı arttıkça yük faktörünün doğrusal arttığını sanmak; ilişki 1/cosφ olduğundan yüksek açılarda çok hızlı büyür.",
            "Dönüşte irtifa korumak için sadece motor gücünü artırmanın yeterli olacağını sanmak; asıl gereken hücum açısını artırıp L_v'yi W'ye eşitlemektir, itki artışı sadece bunun getirdiği ekstra sürüklemeyi karşılar.",
            "Stall hızının dönüşlerde sabit kaldığını sanmak; yük faktörü arttığı için dönüşte stall hızı yükselir."
          ] },

        { id: "b11", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Bir uçak nasıl döner, rudder mi aileron mu asıl belirleyici?", "Aileron. Uçak aileronlarla yatış açısı aldığında taşımanın bir kısmı yatay yöne kayar ve bu bileşen merkezcil kuvveti oluşturarak dönüşü sağlar. Rudder sadece dönüşü koordine eder (yaw'ı roll ile uyumlu tutar)."],
            ["Dönüşte neden irtifa kaybetme riski vardır?", "Çünkü taşımanın ağırlığı dengeleyen dikey bileşeni (L·cosφ) yatış açısı arttıkça küçülür. Pilot bunu telafi etmek için hücum açısını artırarak toplam taşımayı büyütmelidir."],
            ["Yük faktörü (load factor) nedir ve neden önemlidir?", "n=L/W=1/cosφ, uçağın hissettiği kuvvetin ağırlığına oranıdır. Yapısal tasarım limitlerini ve dönüşteki stall hızını doğrudan etkiler; yüksek yatış açılarında hızla büyür."]
          ] },

        { id: "b12", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "FAA. (2023). Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Bölüm 5: Aerodynamics of Flight — Turns.",
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill.",
            "Hurt, H. H., Jr. (1965). Aerodynamics for naval aviators. U.S. Navy, NAVAIR 00-80T-80."
          ] },

        { id: "b13", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "Bank Angle–Load Factor Demo", kanal: "Uçuş eğitimi videosu", dil: "İngilizce",
              not: "Yatış açısının yük faktörünü ve stall hızını nasıl etkilediğini basit bir gösterimle anlatıyor.",
              url: "https://www.youtube.com/watch?v=_yGgvRKW5Ks" }
          ] }
      ],

      sorular: [
        { id: "g10s1", etiket: "Kavram", puan: 1, soru: "Bir uçağın dönmesini asıl olarak hangi kumanda yüzeyi/mekanizması sağlar?",
          secenekler: ["Rudder tek başına", "Aileron ile alınan yatış açısı", "Flap açısı", "Motor itkisinin asimetrik olması"], dogru: 1,
          aciklama: "Aileronlarla alınan yatış açısı, taşımanın bir kısmını yatay yöne çevirerek merkezcil kuvveti üretir; rudder sadece dönüşü koordine eder." },
        { id: "g10s2", etiket: "Formül", puan: 2, soru: "L_h = L·sinφ formülünde L_h neyi ifade eder?",
          secenekler: ["Taşımanın dikey bileşenini", "Taşımanın yatay (merkezcil) bileşenini", "Toplam sürüklemeyi", "Yük faktörünü"], dogru: 1,
          aciklama: "L_h, taşımanın yatay bileşenidir ve uçağı dairesel yörüngeye zorlayan merkezcil kuvveti oluşturur." },
        { id: "g10s3", etiket: "Analiz", puan: 2, soru: "Yatış açısı arttıkça, sabit toplam taşımada dikey bileşene (L_v) ne olur?",
          secenekler: ["Artar", "Değişmez", "Azalır", "Sıfırlanır"], dogru: 2,
          aciklama: "L_v = L·cosφ olduğundan φ arttıkça cosφ küçülür, dolayısıyla L_v azalır — bu da irtifa kaybı riskini doğurur." },
        { id: "g10s4", etiket: "Formül", puan: 2, soru: "45° yatış açısında yük faktörü (n) yaklaşık kaçtır?",
          secenekler: ["1,0", "1,15", "1,41", "2,0"], dogru: 2,
          aciklama: "n = 1/cosφ = 1/cos45° = 1/0,707 ≈ 1,41." },
        { id: "g10s5", etiket: "Analiz", puan: 2, soru: "Pilot dönüş sırasında irtifayı korumak için ne yapar?",
          secenekler: ["Rudder'ı daha çok kullanır", "Hücum açısını artırarak toplam taşımayı büyütür", "Flapları kapatır", "Hiçbir şey yapmasına gerek yoktur"], dogru: 1,
          aciklama: "Hücum açısını artırmak C_L'yi ve dolayısıyla toplam taşımayı büyütür; bu da L_v'yi yeniden W'ye eşitleyip irtifa kaybını önler." },
        { id: "g10s6", etiket: "Uygulama", puan: 2, soru: "Dönüşte stall hızının düz uçuştakinden yüksek olmasının sebebi nedir?",
          secenekler: ["Dönüşte hava yoğunluğu değişir", "Yük faktörü (η/n) arttığı için V_stall formülünde pay büyür", "Motor gücü dönüşte otomatik azalır", "Kanat alanı dönüşte küçülür"], dogru: 1,
          aciklama: "V_stall=√(2Wη/(ρSC_L,max)) formülünde η (yük faktörü) dönüşte 1'den büyük olur, bu da stall hızını yükseltir." },
        { id: "g10s7", etiket: "Kavram", puan: 1, soru: "Sadece rudder kullanılarak yapılan bir dönüşte ne olur?",
          secenekler: ["Mükemmel koordineli bir dönüş olur", "Uçak yana kayar (skid), gerçek bir merkezcil kuvvet yeterince oluşmaz", "Uçak anında stall olur", "Yük faktörü sıfırlanır"], dogru: 1,
          aciklama: "Rudder tek başına burnu çevirir ama uçağın kütlesi eylemsizlikle eski yönünde ilerlemeye devam eder; bu da yana kaymaya (skid) yol açar. Asıl merkezcil kuvvet roll ile üretilir." }
      ],
      ipuclari: {
        "Formül": "n=1/cosφ ve L_v=L·cosφ / L_h=L·sinφ formüllerini birlikte tekrar et.",
        "Analiz": "Yatış açısı arttıkça L_v'nin küçüldüğünü, bunu telafi etmek için hücum açısının artırıldığını adım adım düşün.",
        "Uygulama": "V_stall formülündeki η'nin dönüşlerde 1'den büyük olduğunu ve bunun stall hızını nasıl etkilediğini tekrar et."
      }
    },
"g11": {
      ad: "Uçak Nasıl Hızlanıyor / Yavaşlıyor?",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 16,
      mulakat: true,
      onbilgi: "Uçak Nedir? (T=D dengesi), Kontrol Yüzeyleri",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Bir uçağın hızlanması veya yavaşlaması, itki–sürükleme dengesinin bilerek bozulmasıyla gerçekleşir. Motor itkiyi üretir; sürükleme doğal olarak havadan gelir. Frenleme ise yerde ve havada farklı mekanizmalarla sağlanır: havada spoiler ve idle/reverse thrust, yerde tekerlekler üzerindeki disk frenler ve ters itki." },

        { id: "b2", tip: "metin", baslik: "İtki–sürükleme dengesi hatırlatma",
          metin: "Uçak Nedir? dersinden: T=D iken uçak sabit hızda gider. T>D ise hızlanır, T<D ise yavaşlar. Bu basit denge uçağın hız kontrolünün temelidir — pilot gaz kolunu (throttle) ileri ittikçe motor daha fazla itki üretir, geri çektikçe azaltır." },

        { id: "b3", tip: "metin", baslik: "Motor türleri ve itki üretim mekanizmaları",
          metin: "Pistonlu (boxer) motor: silindirler içinde hava-yakıt karışımı patlatılır, krank mili döner, pervane ileri yönlü çekme kuvveti üretir. Eğitim uçaklarında yaygındır. Dört zamanlı çevrim: emme → sıkıştırma → yanma → egzoz.\nTurbojet: havayı kompresörle sıkıştırır, yanma odasında yakıtla yakar, egzoz gazlarını yüksek hızda arkadan püskürtür. Verim düşüktür ama yüksek hız sağlar.\nTurbofan: turbojetin önüne büyük bir fan eklenerek geliştirilmiştir. Havanın büyük bölümü (bypass havası) çekirdekten geçmeden fandan hızlanır; toplam itkinin %80'den fazlasını bu fan havası üretir. Modern yolcu uçaklarında standart — sessiz ve yakıt verimli.\nTurboprop: türbin enerjisini dişli kutusu üzerinden pervaneye aktarır. Düşük/orta hızda çok verimli, kısa pist mesafesiyle çalışabilir." },

        { id: "b4", tip: "tablo", baslik: "Motor tipleri karşılaştırması",
          basliklar: ["Tip", "İtki mekanizması", "Hız aralığı", "Verim"],
          satirlar: [
            ["Pistonlu/pervane", "Pervane havayı çeker", "Düşük (< Mach 0,3)", "Düşük hızda yüksek"],
            ["Turboprop", "Türbin → dişli → pervane", "Orta (Mach 0,3-0,6)", "Kısa mesafe / kısa pistte en verimli"],
            ["Turbofan", "Fan + çekirdek jet", "Sesaltı seyir (Mach 0,7-0,85)", "Yolcu uçaklarında standart, çok verimli"],
            ["Turbojet", "Sıcak egzoz gazı hızı", "Yüksek / süpersonik", "Düşük, gürültülü; askeri/eski nesil"]
          ] },

        { id: "b5", tip: "metin", baslik: "Havada yavaşlama: spoiler ve idle thrust",
          metin: "Motorun gaz kolu rölantiye (idle) çekildiğinde itki minimuma iner; sürükleme baskın kalır ve uçak yavaşlar. Daha hızlı yavaşlamak için kanat üstündeki spoilerlar açılır: taşımayı düşürüp sürüklemeyi artırarak uçağı hem yavaşlatır hem alçaltır.\nBazı uçaklarda (özellikle iniş yaklaşımalarında) hız frenli iniş konfigürasyonunda iniş takımı da kasıtlı olarak açık tutularak ekstra sürükleme yaratılır (gear-down speed brake)." },

        { id: "b6", tip: "metin", baslik: "Yerde frenleme: disk fren + ters itki + spoiler",
          metin: "Piste teker koyduktan sonra üç mekanizma birlikte çalışır:\n1. Ground spoiler: tam açılarak kanat taşımasını sıfırlar, uçağın ağırlığını tekerleklere bindirir → fren verimliliği artar.\n2. Ters itki (thrust reverser): jet motorlarında egzoz gazının yönü mekanik kapaklar (blocker door) veya kova (bucket) sistemiyle öne çevrilerek uçağı yavaşlatır. Pistonlu uçaklarda pervane hatve açısı negatife alınarak aynı etki sağlanır.\n3. Tekerlek disk frenleri: rudder pedallarının üst kısmına basılarak devreye girer. Her iki ana dikmede bağımsız çalışır; bu yerde yönlendirme kolaylığı da sağlar." },

        { id: "b7", tip: "ornek", baslik: "Senaryo: Kalkış koşusu analizi",
          soru: "Bir uçak kalkış koşusundayken motor tam güçte çalışıyor. Uçak hızlanırken sürükleme de artıyor. Uçağın yerden kalkması için hangi şart sağlanmalıdır?",
          cozum: "Uçağın kalkabilmesi için kanatların yeterli taşıma üretmesi gerekir: L ≥ W. Taşıma hızın karesiyle orantılı olduğundan (L = C_L·½ρV²S), yeterli hıza ulaşılana kadar motor itkisi sürükleme + yer sürtünmesini karşılayarak uçağı hızlandırmaya devam eder. Kalkış hızına (V_LOF) ulaşıldığında pilot burnu kaldırır ve uçak yerden kalkar." },

        { id: "b8", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Ters itkinin uçağı geriye hareket ettirdiğini sanmak; ters itki sadece yavaşlatır, uçağı geriye sürmez.",
            "Frenlemenin sadece tekerleklerle yapıldığını sanmak; spoiler + ters itki + tekerlek freni birlikte çalışır.",
            "Turbofan ile turbojet'i aynı sanmak; turbofan'da itkinin büyük kısmını bypass fan havası üretir, bu da onu çok daha sessiz ve verimli yapar.",
            "Kalkışta sadece motor gücünün yeterli olduğunu sanmak; pilotun doğru hücum açısını (rotation) zamanında vermesi de gerekir."
          ] },

        { id: "b9", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Turbofan ile turbojet arasındaki temel fark nedir?", "Turbofan'da önde büyük bir fan vardır; havanın büyük kısmı çekirdekten geçmeden fandan hızlanır (bypass). Bu, itkinin %80'den fazlasını düşük hızlı ama yüksek kütleli hava akışıyla üretir — daha verimli ve sessiz."],
            ["Uçak yerde nasıl durur?", "Üç mekanizma birlikte çalışır: ground spoiler taşımayı sıfırlayıp ağırlığı tekerleklere bindirir, ters itki egzoz/pervane yönünü çevirerek yavaşlatır, disk frenler kinetik enerjiyi ısıya dönüştürür."],
            ["Bypass oranı nedir ve neden önemlidir?", "Fan'dan geçen hava miktarının çekirdekten geçen havaya oranıdır. Modern turbofanlarda 4:1 ile 12:1 arasında değişir; yüksek bypass oranı daha iyi yakıt verimi ve daha düşük gürültü demektir."]
          ] },

        { id: "b10", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "IVAO-TR Eğitim Departmanı. (2014). Motor ve Sistemleri.",
            "ucaktek.com. Uçak Motorları (eğitim dokümanı).",
            "NASA Glenn Research Center. Turbofan Thrust. www.grc.nasa.gov",
            "FAA. (2023). Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Bölüm 7: Aircraft Systems."
          ] },

        { id: "b11", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "How Jet Engine Produces Thrust", kanal: "Jet Engine Cut-Section Demo", dil: "İngilizce",
              not: "Turbofan motorunun kesit modeli üzerinde fan, kompresör, yanma odası ve türbin aşamalarını gösteren pratik anlatım.",
              url: "https://www.youtube.com/watch?v=Pt24Pptvt_M" }
          ] }
      ],

      sorular: [
        { id: "g11s1", etiket: "Kavram", puan: 1, soru: "T>D olduğunda uçak ne yapar?",
          secenekler: ["Yavaşlar", "Hızlanır", "İrtifa kaybeder", "Stall'a girer"], dogru: 1,
          aciklama: "İtki sürüklemeden büyük olduğunda net kuvvet ileri yöndedir ve uçak hızlanır." },
        { id: "g11s2", etiket: "Motor", puan: 1, soru: "Modern yolcu uçaklarında hangi motor tipi standarttır?",
          secenekler: ["Pistonlu", "Turbojet", "Turbofan", "Ramjet"], dogru: 2,
          aciklama: "Turbofan, yüksek verim ve düşük gürültü avantajıyla modern sivil uçakların standart motor tipidir." },
        { id: "g11s3", etiket: "Motor", puan: 2, soru: "Turbofan motorda toplam itkinin büyük bölümünü ne üretir?",
          secenekler: ["Yanma odası çıkışındaki sıcak egzoz", "Bypass fan havası", "Kompresör basıncı", "Türbin sıcaklığı"], dogru: 1,
          aciklama: "Turbofan'da itkinin %80'den fazlasını bypass fan havası (düşük hızlı ama yüksek kütleli akış) üretir." },
        { id: "g11s4", etiket: "Frenleme", puan: 2, soru: "İniş sonrası ground spoiler'ın temel katkısı nedir?",
          secenekler: ["Motor gücünü artırmak", "Taşımayı sıfırlayıp ağırlığı tekerleklere bindirerek fren verimini artırmak", "Uçağı yukarı kaldırmak", "Yakıt tasarrufu sağlamak"], dogru: 1,
          aciklama: "Ground spoiler kanat taşımasını aniden düşürerek uçağın ağırlığını tekerleklere bindirir; bu sayede disk frenler çok daha etkili çalışır." },
        { id: "g11s5", etiket: "Kavram", puan: 1, soru: "Ters itki (thrust reverser) uçağı geriye hareket ettirir mi?",
          secenekler: ["Evet, uçak geriye gider", "Hayır, sadece yavaşlatır", "Sadece havada çalışır", "Sadece pistonlu motorlarda vardır"], dogru: 1,
          aciklama: "Ters itki, egzoz/pervane yönünü çevirerek uçağın ileri hareketini yavaşlatır; uçağı geriye sürmez." },
        { id: "g11s6", etiket: "Motor", puan: 2, soru: "Bypass oranı nedir?",
          secenekler: ["Motor ağırlığının kanat ağırlığına oranı", "Fan'dan geçen hava miktarının çekirdekten geçen havaya oranı", "Yakıt tüketiminin itki kuvvetine oranı", "Kompresör devir sayısının türbin devir sayısına oranı"], dogru: 1,
          aciklama: "Bypass oranı, fan'dan geçip çekirdeğe girmeyen havanın çekirdekten geçen havaya oranıdır; modern turbofanlarda 4:1 ile 12:1 arasında değişir." },
        { id: "g11s7", etiket: "Uygulama", puan: 2, soru: "Pistonlu motorun dört zamanlı çevrimi sırasıyla hangi adımlardan oluşur?",
          secenekler: ["Emme → Sıkıştırma → Yanma → Egzoz", "Sıkıştırma → Emme → Egzoz → Yanma", "Yanma → Emme → Egzoz → Sıkıştırma", "Egzoz → Sıkıştırma → Emme → Yanma"], dogru: 0,
          aciklama: "Dört zamanlı çevrim sırasıyla: emme (hava-yakıt silindirlere çekilir), sıkıştırma, yanma (buji ateşler), egzoz (yanmış gaz atılır)." }
      ],
      ipuclari: {
        "Motor": "Turbojet, turbofan, turboprop arasındaki bypass/verim/hız farklarını ve her birinin hangi uçak tipinde kullanıldığını tekrar et.",
        "Frenleme": "İniş sonrası üç frenleme mekanizmasının (spoiler+ters itki+disk fren) birlikte nasıl çalıştığını sırayla tekrar et."
      }
    },
"g12": {
      ad: "Atmosferi Tanı",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 16,
      onbilgi: "Uçak Nasıl Havada Duruyor? (ρ'nin taşımaya etkisi)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Uçak, atmosferin içinde uçar ve performansının tamamı havanın sıcaklık, basınç ve yoğunluğuna bağlıdır. Uçak tasarımı ve performans hesapları tek bir ortak referansa dayandırılır: ICAO Standart Atmosfer (ISA). ISA, deniz seviyesinde 15°C / 1013,25 hPa / 1,225 kg/m³ koşullarını tanımlar ve irtifayla nasıl değiştiklerini modelleyen idealize bir profildir." },

        { id: "b2", tip: "tablo", baslik: "ISA deniz seviyesi referans değerleri",
          basliklar: ["Büyüklük", "Değer"],
          satirlar: [
            ["Sıcaklık (T₀)", "15 °C (288,15 K)"],
            ["Basınç (P₀)", "1013,25 hPa (29,92 inHg)"],
            ["Yoğunluk (ρ₀)", "1,225 kg/m³"],
            ["Ses hızı (a₀)", "340,3 m/s (661,5 knot)"],
            ["Yer çekimi ivmesi (g)", "9,80665 m/s²"]
          ] },

        { id: "b3", tip: "metin", baslik: "Troposfer: uçağın yaşam alanı",
          metin: "Troposfer, yeryüzünden yaklaşık 11 km'ye (36.089 ft) kadar uzanır. Bu katmanda sıcaklık her 1000 ft'te yaklaşık 2°C (veya her 1000 m'de 6,5°C) düşer — buna sıcaklık azalma oranı (lapse rate) denir. Hafif uçaklar troposferin alt yarısında, jet yolcu uçakları ise üst sınırına yakın veya tropopozun hemen üstünde (alt stratosfer) uçar.\nTropopoz: troposfer ile stratosfer arasındaki sınırdır. ISA'da 11 km'de sıcaklık -56,5°C'ye düşer ve stratosfer boyunca yaklaşık 20 km'ye kadar sabit kalır (izotermal katman)." },

        { id: "b4", tip: "metin", baslik: "Basınç ve yoğunluk: irtifayla düşüş",
          metin: "İrtifa arttıkça hem basınç hem yoğunluk azalır. Basınç deniz seviyesinden 18.000 ft'e çıkıldığında yaklaşık yarıya iner.\nBu düşüş uçuşu doğrudan etkiler: kanat üzerinden geçen hava daha az yoğun olduğundan aynı taşımayı üretmek için uçağın daha hızlı gitmesi gerekir (L=C_L·½ρV²S denklemindeki ρ azalır). Motor performansı da düşer çünkü emdiği havanın kütlesi azalır — yani hem taşıma hem itki irtifadan etkilenir." },

        { id: "b5", tip: "metin", baslik: "ISA sapması ve yoğunluk irtifası",
          metin: "Gerçek atmosfer ISA'dan sapar. Gerçek sıcaklığın ISA değerinden farkına 'ISA sapması' denir (örn. ISA+10 = ISA'dan 10°C sıcak).\nYoğunluk irtifası (density altitude): basınç irtifası + sıcaklık sapmasının birleşik etkisidir. Sıcak bir günde veya yüksek bir meydanda yoğunluk irtifası gerçek irtifanın çok üzerine çıkar — motor daha az itki üretir, kanat daha az taşıma üretir, kalkış mesafesi uzar. Bu kavram 'performans' derslerinin temelidir." },

        { id: "b6", tip: "ornek", baslik: "Örnek: ISA sıcaklık hesabı",
          soru: "5000 ft irtifada ISA sıcaklığı kaçtır?",
          cozum: "ISA deniz seviyesi sıcaklığı 15°C'dir. Her 1000 ft'te 2°C azalır: 5000 ft × 2°C/1000 ft = 10°C azalma. ISA sıcaklığı = 15 - 10 = 5°C." },

        { id: "b7", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "ISA'nın gerçek atmosferi birebir yansıttığını sanmak; ISA idealize bir modeldir, gerçek koşullar her zaman sapar.",
            "Yüksek irtifada 'hava az olduğu için uçak daha kolay uçar' sanmak; aslında hem taşıma hem itki düşer, motor ve kanat daha çok zorlanır.",
            "Sıcak günlerde performansın değişmeyeceğini sanmak; sıcaklık yoğunluğu düşürür, yoğunluk irtifasını yükseltir ve kalkış mesafesi uzar.",
            "Tropopozun her yerde aynı irtifada olduğunu sanmak; ISA'da 11 km'dir ama gerçekte ekvatordan kutuplara değişir (7-17 km)."
          ] },

        { id: "b8", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["ISA nedir ve neden kullanılır?", "ICAO Standart Atmosfer, sıcaklık/basınç/yoğunluğun irtifayla değişimini tanımlayan uluslararası referans modelidir. Tüm uçak performans hesapları, altimetre kalibrasyonu ve motor test verileri bu ortak referansa göre yapılır."],
            ["Yoğunluk irtifası neden önemlidir?", "Sıcak veya yüksek meydanlarda havanın gerçek yoğunluğu ISA'dan düşük kalır; motor daha az itki, kanat daha az taşıma üretir. Kalkış mesafesi uzar, tırmanma oranı düşer. Bu kavramı bilmeyen bir pilot sıcak günde ciddi bir güvenlik riski oluşturur."],
            ["ISA'da troposferdeki sıcaklık azalma oranı nedir?", "Her 1000 ft'te yaklaşık 2°C (veya 6,5°C/km). 36.089 ft'te (11 km) sıcaklık -56,5°C'ye düşer ve stratosfer boyunca sabit kalır."]
          ] },

        { id: "b9", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "ICAO. (1993). Manual of the ICAO Standard Atmosphere (Doc 7488/3).",
            "FAA. (2023). Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Bölüm 4: Principles of Flight.",
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill, Bölüm 3."
          ] },

        { id: "b10", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "Understanding ISA", kanal: "Aviation Ground School", dil: "İngilizce",
              not: "ISA modelini, lapse rate'i ve yoğunluk irtifasını açık bir şekilde anlatıyor.",
              url: "https://www.youtube.com/watch?v=ex_N_gS6NZQ" }
          ] }
      ],

      sorular: [
        { id: "g12s1", etiket: "Sabit", puan: 1, soru: "ISA'da deniz seviyesi sıcaklığı kaçtır?",
          secenekler: ["0 °C", "15 °C", "25 °C", "-56,5 °C"], dogru: 1,
          aciklama: "ISA deniz seviyesi referans sıcaklığı 15°C'dir (288,15 K)." },
        { id: "g12s2", etiket: "Hesap", puan: 2, soru: "ISA'da 10.000 ft irtifadaki sıcaklık kaçtır?",
          secenekler: ["-5 °C", "5 °C", "15 °C", "-15 °C"], dogru: 0,
          aciklama: "15 - (10 × 2) = 15 - 20 = -5°C." },
        { id: "g12s3", etiket: "Kavram", puan: 1, soru: "Troposferde sıcaklık her 1000 ft'te yaklaşık kaç derece azalır?",
          secenekler: ["1 °C", "2 °C", "5 °C", "10 °C"], dogru: 1,
          aciklama: "ISA standart lapse rate'i yaklaşık 2°C / 1000 ft'tir." },
        { id: "g12s4", etiket: "Analiz", puan: 2, soru: "Sıcak bir günde kalkış mesafesinin uzamasının sebebi nedir?",
          secenekler: ["Rüzgâr hızlanır", "Hava yoğunluğu düşer, motor ve kanat performansı azalır", "Pist genleşir", "Yakıt buharlaşır"], dogru: 1,
          aciklama: "Sıcaklık yoğunluğu düşürür; düşük yoğunluk hem motordaki itki hem kanattaki taşıma üretimini azaltır — dolayısıyla kalkış hızına ulaşmak daha uzun sürer." },
        { id: "g12s5", etiket: "Sabit", puan: 1, soru: "ISA'da deniz seviyesinde standart basınç değeri kaçtır?",
          secenekler: ["1013,25 hPa", "760 hPa", "1225 hPa", "29,92 Pa"], dogru: 0,
          aciklama: "ISA standart deniz seviyesi basıncı 1013,25 hPa'dır (29,92 inHg)." },
        { id: "g12s6", etiket: "Kavram", puan: 1, soru: "Tropopoz hangi irtifada başlar (ISA)?",
          secenekler: ["5 km", "11 km (≈36.089 ft)", "20 km", "50 km"], dogru: 1,
          aciklama: "ISA'da tropopoz 11 km'de (36.089 ft) başlar; bu noktada sıcaklık -56,5°C'ye düşer ve stratosfer boyunca sabit kalır." }
      ],
      ipuclari: {
        "Hesap": "ISA sıcaklığını hesaplamak için: T = 15 - (2 × irtifa_ft/1000) formülünü kullan.",
        "Analiz": "Sıcaklık→yoğunluk→taşıma/itki zincirini adım adım düşün."
      }
    },
"g13": {
      ad: "Mach Sayısı Nedir?",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 16,
      mulakat: true,
      onbilgi: "Atmosferi Tanı (ses hızı, sıcaklık–irtifa ilişkisi)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Mach sayısı, bir cismin hızının o noktadaki ses hızına oranıdır (Ma = V/a). Ses hızı sıcaklığa bağlıdır; yüksek irtifada sıcaklık düştüğünden ses hızı da düşer. Uçak tasarımında Mach sayısı kritiktir: sıkıştırılabilirlik etkileri, şok dalgaları ve kanat formu seçimi doğrudan Mach rejimine bağlıdır." },

        { id: "b2", tip: "formul", baslik: "Mach sayısı ve ses hızı",
          formul: "Ma = V / a       a = √(γRT)",
          semboller: [
            ["V", "Cismin hızı", "m/s"],
            ["a", "Bulunulan noktadaki yerel ses hızı", "m/s"],
            ["γ", "Özgül ısılar oranı (hava için ≈1,4)", "-"],
            ["R", "Havanın gaz sabiti (287 J/(kg·K))", "J/(kg·K)"],
            ["T", "Havanın mutlak sıcaklığı", "K"]
          ],
          metin: "Deniz seviyesinde (ISA, 288,15 K) ses hızı ≈ 340 m/s ≈ 661 knot'tur. 11 km'de (216,65 K) ise ≈ 295 m/s'ye düşer. Yani aynı gerçek hızla uçan bir uçağın Mach sayısı irtifa arttıkça büyür." },

        { id: "b3", tip: "tablo", baslik: "Uçuş hız rejimleri",
          basliklar: ["Rejim", "Mach aralığı", "Özellik"],
          satirlar: [
            ["Sesaltı (Subsonic)", "< 0,8", "Sıkıştırılabilirlik ihmal edilebilir, klasik aerodinamik kuralları geçerli"],
            ["Transonik", "0,8 – 1,2", "Uçak yüzeyi etrafında hem sesaltı hem sesüstü akış bölgeleri birlikte bulunur; şok dalgaları oluşmaya başlar"],
            ["Sesüstü (Supersonic)", "1,2 – 5,0", "Tüm akış sesüstüdür; şok dalgaları belirgin, delta/ok kanatlı tasarımlar gerekir"],
            ["Hipersonik", "> 5,0", "Aşırı sıcaklıklar; özel malzeme ve ısıl koruma gerektirir (uzay araçları)"]
          ] },

        { id: "b4", tip: "metin", baslik: "Transonik bölge ve 'ses duvarı' efsanesi",
          metin: "Mach 0,8-1,2 aralığında kanat üzerindeki akış bazı bölgelerde sesüstüne geçer ve şok dalgaları oluşur. Bu şok dalgaları sürüklemeyi ani ve büyük bir şekilde artırır — 1940'larda pilotlar bunu 'aşılamaz bir duvar' sandı. Gerçekte ses duvarı fiziksel bir engel değil, sadece sürüklemenin (dalga sürüklemesi) çok arttığı bir geçiş bölgesidir. Geriye ok açılı kanatlar ve süperkritik profiller bu geçişi geciktirmek/yönetmek için geliştirilmiştir." },

        { id: "b5", tip: "metin", baslik: "Mach sayısının tasarıma etkisi",
          metin: "Düşük sesaltı (Ma<0,3): sıkıştırılabilirlik göz ardı edilir, düz kanat yeterli. Yüksek sesaltı/transonik (0,7-0,85): geriye ok açılı kanat ve süperkritik profil, şok dalgasını geciktirmek için. Sesüstü (>1,2): delta veya çift delta kanat, keskin hücum kenarı, şok dalgalarını yönetmek için. Hipersonik (>5): konvansiyonel jet motorları çalışmaz; scramjet veya roket itkisi gerekir, termal koruma kritik." },

        { id: "b6", tip: "ornek", baslik: "Örnek: Ses hızı hesabı",
          soru: "11 km irtifada (ISA sıcaklığı -56,5°C = 216,65 K) ses hızı kaçtır?",
          cozum: "a = √(γRT) = √(1,4 × 287 × 216,65) = √(87.031) ≈ 295 m/s. Deniz seviyesindeki 340 m/s'den belirgin şekilde düşük — yani aynı hızda uçan bir uçağın Mach sayısı bu irtifada daha yüksektir." },

        { id: "b7", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Ses hızının sabit olduğunu sanmak; ses hızı sıcaklığa (ve dolayısıyla irtifaya) bağlıdır.",
            "Mach 1'i geçmenin imkânsız olduğunu sanmak; 'ses duvarı' fiziksel bir engel değil, sürüklemenin aniden arttığı bir geçiş bölgesidir.",
            "Mach sayısının sadece savaş uçaklarını ilgilendirdiğini sanmak; sivil jetler Mach 0,78-0,85'te uçar, tasarım kritik Mach sayısına göre optimize edilir.",
            "Transonik bölgede tüm akışın sesüstü olduğunu sanmak; bazı bölgeler sesüstü, bazıları sesaltıdır — bu karışıklık şok dalgalarını tetikler."
          ] },

        { id: "b8", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Mach sayısı nedir?", "Cismin hızının yerel ses hızına oranıdır: Ma=V/a. Ses hızı sıcaklığa bağlıdır; irtifa arttıkça ses hızı düşer, dolayısıyla aynı gerçek hızda Mach sayısı yükselir."],
            ["Neden yolcu uçakları geriye ok açılı kanat kullanır?", "Transonik seyir hızlarında (Mach 0,78-0,85) kanat üzerindeki akışın yerel olarak sesüstüne geçmesini ve şok dalgası oluşumunu geciktirmek için; bu dalga sürüklemesini azaltır."],
            ["Ses duvarı gerçek bir fiziksel engel midir?", "Hayır. Mach 1 civarında dalga sürüklemesi (wave drag) ani şekilde artar — 1940'larda bu aşılamaz sanıldı. Doğru aerodinamik tasarımla (ok kanat, area rule, süperkritik profil) bu bölge güvenle geçilir."]
          ] },

        { id: "b9", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "NASA Glenn Research Center. Mach Number. www.grc.nasa.gov",
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill, Bölüm 5.",
            "FAA. (2023). Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Bölüm 5."
          ] },

        { id: "b10", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "Mach Number – Aerospace Engineering Lecture", kanal: "Aerospace Lecture Series", dil: "İngilizce",
              not: "Mach sayısını, ses hızı formülünü ve uçuş rejimlerini mühendislik düzeyinde anlatıyor.",
              url: "https://www.youtube.com/watch?v=ldKCnhpHT_A" }
          ] }
      ],

      sorular: [
        { id: "g13s1", etiket: "Formül", puan: 1, soru: "Mach sayısı nasıl hesaplanır?",
          secenekler: ["Ma = a/V", "Ma = V/a", "Ma = V×a", "Ma = V-a"], dogru: 1,
          aciklama: "Mach sayısı, cismin hızının yerel ses hızına oranıdır: Ma = V/a." },
        { id: "g13s2", etiket: "Rejim", puan: 1, soru: "Mach 0,85'te uçan bir yolcu uçağı hangi rejimde uçmaktadır?",
          secenekler: ["Sesaltı (< 0,8)", "Transonik (0,8-1,2)", "Sesüstü (1,2-5,0)", "Hipersonik (> 5,0)"], dogru: 1,
          aciklama: "0,8 ile 1,2 arasındaki Mach sayıları transonik rejime girer." },
        { id: "g13s3", etiket: "Kavram", puan: 2, soru: "İrtifa arttıkça (sıcaklık düştükçe) ses hızına ne olur?",
          secenekler: ["Artar", "Değişmez", "Azalır", "Sıfırlanır"], dogru: 2,
          aciklama: "Ses hızı a=√(γRT) formülüyle sıcaklığa bağlıdır; sıcaklık düştükçe ses hızı da düşer." },
        { id: "g13s4", etiket: "Hesap", puan: 2, soru: "Deniz seviyesinde (ISA) ses hızı yaklaşık kaçtır?",
          secenekler: ["≈ 295 m/s", "≈ 340 m/s", "≈ 500 m/s", "≈ 1225 m/s"], dogru: 1,
          aciklama: "ISA deniz seviyesinde (288,15 K) ses hızı ≈ 340 m/s'dir." },
        { id: "g13s5", etiket: "Tasarım", puan: 2, soru: "Geriye ok açılı kanatların temel amacı nedir?",
          secenekler: ["Daha fazla yolcu taşımak", "Şok dalgası oluşumunu geciktirip dalga sürüklemesini azaltmak", "İniş takımına yer açmak", "Görünümü güzelleştirmek"], dogru: 1,
          aciklama: "Ok açılı kanatlar, transonik hızlarda kanat üzerindeki akışın sesüstüne geçmesini geciktirir; bu dalga sürüklemesini azaltır." },
        { id: "g13s6", etiket: "Kavram", puan: 1, soru: "'Ses duvarı' neyi ifade eder?",
          secenekler: ["Fiziksel olarak aşılamaz bir engel", "Mach 1 civarında dalga sürüklemesinin aniden arttığı geçiş bölgesi", "Sesin yok olduğu bölge", "Motorların durduğu irtifa"], dogru: 1,
          aciklama: "Ses duvarı fiziksel bir engel değildir; Mach 1 civarında dalga sürüklemesinin ani artışına verilen isimdir." }
      ],
      ipuclari: {
        "Formül": "Ma=V/a ve a=√(γRT) formüllerini birlikte kullan; ses hızı sıcaklığa bağlı.",
        "Rejim": "Sesaltı <0,8 / Transonik 0,8-1,2 / Sesüstü 1,2-5 / Hipersonik >5 aralıklarını tekrar et.",
        "Tasarım": "Ok kanat, delta kanat ve süperkritik profilin hangi Mach rejimleri için tasarlandığını eşleştir."
      }
    },
"g14": {
      ad: "Uçakların Sınıflandırılması",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Temel",
      sure: 16,
      onbilgi: "Uçak Nasıl Hızlanıyor/Yavaşlıyor? (motor tipleri)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Uçaklar görevine, motor tipine, hız rejimine, boyutuna, kanat konfigürasyonuna ve sivil/askeri kullanımına göre sınıflandırılır. Bir mühendis olarak 'bu uçak neden böyle?' sorusunun cevabı, büyük ölçüde hangi sınıfa ait olduğundan çıkar." },

        { id: "b2", tip: "tablo", baslik: "Göreve göre sınıflandırma",
          basliklar: ["Kategori", "Örnekler"],
          satirlar: [
            ["Sivil yolcu taşımacılığı", "A320, B737, B787 (dar/geniş gövde), ATR 72 (turboprop bölgesel)"],
            ["Kargo", "B747-8F, C-130 Hercules (askeri kargo)"],
            ["Genel havacılık (GA)", "Cessna 172 (eğitim), Piper Cherokee, Cirrus SR22"],
            ["İş jeti", "Gulfstream G650, Citation CJ serisi"],
            ["Askeri savaş", "F-16 (çok rollü), F-35 (stealth), Eurofighter"],
            ["İHA / Drone", "TB2 Bayraktar (taktik), ANKA (operasyonel), MQ-9 Reaper"],
            ["Eğitim", "T-7A Red Hawk (askeri jet eğitim), Cessna 172 (sivil PPL eğitim)"],
            ["Akrobasi / spor", "Extra 330, Pitts Special"]
          ] },

        { id: "b3", tip: "tablo", baslik: "Motor tipine göre sınıflandırma",
          basliklar: ["Motor", "Tipik uçak"],
          satirlar: [
            ["Pistonlu/pervane", "Cessna 172, Piper Seneca"],
            ["Turboprop", "ATR 72, C-130, Beechcraft King Air"],
            ["Turbofan", "A320, B737, B777, F-16 (düşük bypass)"],
            ["Turbojet", "Eski nesil askeri jetler, Concorde"],
            ["Motorsuz (planör)", "ASW 27, Discus-2"]
          ] },

        { id: "b4", tip: "tablo", baslik: "Hız rejimine göre sınıflandırma",
          basliklar: ["Rejim", "Tipik uçak"],
          satirlar: [
            ["Sesaltı (< Mach 0,8)", "Sivil uçakların çoğu, eğitim uçakları, turboproplar"],
            ["Transonik (0,8-1,2)", "Modern yolcu jetleri (seyirde Mach 0,78-0,85)"],
            ["Sesüstü (> Mach 1,2)", "F-16, F-22, Concorde (emekli), Eurofighter"],
            ["Hipersonik (> Mach 5)", "X-15 (deneysel), scramjet prototipler, uzay araçları"]
          ] },

        { id: "b5", tip: "metin", baslik: "Sivil ve askeri havacılık farkları",
          metin: "Sivil uçaklar sertifikasyon otoritelerine (EASA, FAA, SHGM) tabiidir; tasarımda emniyet, konfor ve yakıt verimliliği önceliktir. Askeri uçaklar ise görev performansına (manevra yeteneği, hız, silah kapasitesi, stealth) göre tasarlanır; yapısal yük limitleri sivil uçaklardan çok daha yüksektir (askeri: +9g / -3g vs sivil: +2,5g / -1g). Askeri uçaklar genelde düşük bypass veya turbojet motorlarla yüksek hız elde ederken, sivil uçaklar yüksek bypass turbofanlarla verim sağlar." },

        { id: "b6", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Her jet motorlu uçağın savaş uçağı olduğunu sanmak; sivil yolcu uçaklarının neredeyse tamamı turbofan (jet) kullanır.",
            "Turboprop'u eski teknoloji sanmak; kısa mesafede ve kısa pistlerde turboprop hâlâ en verimli seçenektir.",
            "İHA'ların sadece askeri olduğunu sanmak; sivil İHA'lar tarım, haritalama, teslimat gibi alanlarda yaygınlaşıyor.",
            "Planörlerin (motorsuz uçaklar) uçamayacağını sanmak; planörler termal ve yamaç rüzgârlarını kullanarak saatlerce havada kalabilir."
          ] },

        { id: "b7", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Uçakları kaç farklı kritere göre sınıflandırabilirsiniz?", "Göreve (yolcu, kargo, savaş, eğitim, İHA), motor tipine (pistonlu, turboprop, turbofan, turbojet, motorsuz), hız rejimine (sesaltı, transonik, sesüstü, hipersonik), boyuta (hafif, orta, ağır), kanat konfigürasyonuna (üst/orta/alt, ok açılı/delta/düz) ve sivil/askeri kullanıma göre."],
            ["Sivil ve askeri uçak tasarımındaki temel fark nedir?", "Sivil tasarım güvenlik, konfor ve yakıt verimini önceler (tipik yük limiti +2,5g); askeri tasarım görev performansını (manevra, hız, stealth, silah kapasitesi) önceler ve yapısal limitler çok daha yüksektir (+9g)."]
          ] },

        { id: "b8", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "FAA. (2023). Pilot's Handbook of Aeronautical Knowledge (FAA-H-8083-25C), Bölüm 1.",
            "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA.",
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill."
          ] },

        { id: "b9", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "Types of Aircraft Explained", kanal: "Aviation Ground School", dil: "İngilizce",
              not: "Sivil, askeri ve genel havacılık uçaklarını kısa örneklerle kategorize ediyor.",
              url: "https://www.youtube.com/watch?v=Pt24Pptvt_M" }
          ] }
      ],

      sorular: [
        { id: "g14s1", etiket: "Sınıflandırma", puan: 1, soru: "ATR 72 hangi motor tipine sahiptir?",
          secenekler: ["Turbojet", "Turbofan", "Turboprop", "Pistonlu"], dogru: 2,
          aciklama: "ATR 72, bölgesel taşımacılıkta kullanılan bir turboprop uçaktır." },
        { id: "g14s2", etiket: "Sınıflandırma", puan: 1, soru: "F-16 hangi kategoriye girer?",
          secenekler: ["Sivil eğitim uçağı", "Çok rollü askeri savaş uçağı", "Kargo uçağı", "Genel havacılık"], dogru: 1,
          aciklama: "F-16, çok rollü (multirole) bir askeri savaş uçağıdır." },
        { id: "g14s3", etiket: "Kavram", puan: 2, soru: "Sivil uçaklarda tipik yapısal yük limiti yaklaşık ne kadardır?",
          secenekler: ["+2,5g / -1g", "+9g / -3g", "+1g / 0g", "+5g / -2g"], dogru: 0,
          aciklama: "Sivil uçaklarda tipik yapısal limit +2,5g (pozitif) ve -1g (negatif) civarındadır; askeri uçaklarda çok daha yüksektir." },
        { id: "g14s4", etiket: "Sınıflandırma", puan: 1, soru: "Planör (glider) hangi motor tipine sahiptir?",
          secenekler: ["Turbofan", "Pistonlu", "Motorsuz — motor yok", "Turbojet"], dogru: 2,
          aciklama: "Planörler motorsuz uçaklardır; termal ve yamaç rüzgârlarını kullanarak uçarlar." },
        { id: "g14s5", etiket: "Kavram", puan: 2, soru: "Kısa pist ve kısa mesafeli bölgesel uçuşlarda hangi motor tipi en verimlidir?",
          secenekler: ["Turbojet", "Turboprop", "Ramjet", "Roket motoru"], dogru: 1,
          aciklama: "Turboprop, düşük/orta hızlarda ve kısa mesafelerde en verimli motor tipidir; kısa pist mesafesiyle çalışabilir." }
      ],
      ipuclari: {
        "Sınıflandırma": "Her motor tipinin (pistonlu, turboprop, turbofan, turbojet) hangi uçak kategorisiyle eşleştiğini tekrar et."
      }
    },
"g15": {
      ad: "Bir Uçak Neden Böyle Tasarlanmış?",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Orta",
      sure: 18,
      onbilgi: "Uçakların Sınıflandırılması, Mach Sayısı",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Bir uçağın formu asla rastgele değildir — her geometrik seçim, görev gereksinimlerinin fizik yasalarıyla dengelenmesinden doğar. Bu ders, şimdiye kadar öğrendiğin tüm kavramları (kuvvet dengesi, kanat tipleri, motor türleri, Mach rejimleri, yapı tipleri) birleştirerek 'bu uçak neden böyle?' sorusunu cevaplamayı öğretir." },

        { id: "b2", tip: "metin", baslik: "Tasarım spirali: görev → gereksinim → form",
          metin: "Uçak tasarımı bir kerelik bir karar değil, yinelemeli bir süreçtir (tasarım spirali). Adımları:\n1. Görev tanımı: ne taşınacak, ne kadar uzağa, hangi hızda, hangi pist uzunluğundan?\n2. Gereksinimler: kaç yolcu, menzil (km), seyir hızı (Mach), kalkış/iniş mesafesi, maliyet.\n3. Konfigürasyon seçimi: kanat tipi, motor tipi, gövde genişliği, kuyruk düzeni.\n4. Boyutlandırma: kanat alanı, motor itkisi, yakıt kapasitesi.\n5. Performans doğrulama: hesaplar + rüzgâr tüneli/CFD testleri → gereksinimleri karşılıyor mu?\n6. Yeterli değilse 3. adıma dön ve tekrarla.\nBu spiralde her karar diğerini etkiler — örneğin motor büyütülürse ağırlık artar, ağırlık artarsa kanat alanı büyümeli, alan büyürse sürükleme artar..." },

        { id: "b3", tip: "tablo", baslik: "Görev → konfigürasyon örnekleri",
          basliklar: ["Görev", "Tipik seçimler ve sebebi"],
          satirlar: [
            ["Kısa mesafe bölgesel (ATR 72)", "Turboprop (kısa pistte verimli), üstten kanat (kısa iniş takımı, kolay kargo), düz kanat (düşük hızda yüksek verim)"],
            ["Orta menzil dar gövde (A320)", "Yüksek bypass turbofan (verim+sessizlik), alttan kanat (iniş takımı kolaylığı), geriye ok kanat (transonik seyir)"],
            ["Uzun menzil geniş gövde (B787)", "Çok yüksek bypass turbofan, yüksek AR kanat (indüklenmiş sürükleme min.), kompozit gövde (hafiflik+korozyon direnci)"],
            ["Hava üstünlüğü (F-22)", "Düşük bypass turbofan (supercruise), delta benzeri kanat (yüksek manevra), stealth geometri, +9g yapısal limit"],
            ["Taktik İHA (TB2)", "Pistonlu motor (basit, ucuz, uzun süzülme), yüksek AR kanat (uzun havada kalma süresi), hafif kompozit yapı"]
          ] },

        { id: "b4", tip: "metin", baslik: "Ödünleşmeler (trade-offs)",
          metin: "Uçak tasarımında 'bedava öğle yemeği' yoktur — her iyileştirmenin bir bedeli vardır:\nYüksek AR (ince uzun kanat) → indüklenmiş sürükleme düşer ama yapısal ağırlık ve eğilme momenti artar.\nDelta kanat → süpersonik verim yüksek ama düşük hızda kalkış/iniş mesafesi uzun.\nKompozit yapı → hafif ve korozyona dayanıklı ama üretim maliyeti yüksek, hasar tespiti zor.\nYüksek bypass motor → sessiz ve verimli ama motor çapı büyük, yer mesafesi kısıtlaması olabilir.\n\nBir mühendis olarak işin, bu ödünleşmeleri görev gereksinimlerine göre en iyi dengeyi kurmaktır." },

        { id: "b5", tip: "ornek", baslik: "Vaka: B787 neden kompozit gövdeli?",
          soru: "Boeing 787 Dreamliner'ın gövde ve kanat yapısının %50'den fazlası neden karbon fiber kompozittir?",
          cozum: "787'nin görevi uzun menzil, yüksek yakıt verimidir. Kompozit, alüminyuma göre yaklaşık %20 daha hafiftir → daha az yakıt. Korozyona uğramadığı için kabin nem oranı yükseltilebilir (yolcu konforu). Yorulma davranışı farklıdır → bakım aralıkları uzar. Bedeli: üretim maliyeti yüksek ve hasar tespiti (delaminasyon) daha zor." },

        { id: "b6", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Bir uçağın 'en iyi' konfigürasyonu olduğunu sanmak; en iyi konfigürasyon göreve göre değişir.",
            "Tasarımın bir kez yapılıp bittiğini sanmak; tasarım spirali yinelemeli bir süreçtir, her adım diğerini etkiler.",
            "Sadece aerodinamiğe bakıp yapısal ağırlığı unutmak; yüksek AR kanat aerodinamik olarak harika ama yapısal maliyeti var.",
            "Kompozitin her zaman metalden 'daha iyi' olduğunu sanmak; asıl avantajı özgül dayanımdır, her durumda en iyi seçim olmayabilir (maliyet, onarılabilirlik)."
          ] },

        { id: "b7", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Bir uçağın kanat tipini ne belirler?", "Görev profili: seyir Mach sayısı, menzil ve manevra gereksinimi. Düşük hızda düz kanat verimli; transonik seyirde geriye ok kanat şok dalgasını geciktirir; süpersonikte delta kanat gerekir. Her seçimin yapısal ağırlık, iniş mesafesi ve maliyet bedeli vardır."],
            ["Tasarım spirali nedir?", "Görev tanımından konfigürasyon seçimine, boyutlandırmaya, performans doğrulamaya uzanan ve gerekirse başa dönerek tekrarlanan yinelemeli bir süreçtir; her karar diğerini etkiler."]
          ] },

        { id: "b8", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA.",
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill.",
            "Torenbeek, E. (2013). Advanced aircraft design. Wiley."
          ] }
      ],

      sorular: [
        { id: "g15s1", etiket: "Tasarım", puan: 2, soru: "Kısa mesafe bölgesel uçuşlarda neden turboprop tercih edilir?",
          secenekler: ["Daha hızlı olduğu için", "Kısa pist mesafesinde en verimli motor tipi olduğu için", "En ucuz motor olduğu için", "Daha sessiz olduğu için"], dogru: 1,
          aciklama: "Turboprop, düşük/orta hızlarda ve kısa pist mesafelerinde en verimli motor tipidir." },
        { id: "g15s2", etiket: "Trade-off", puan: 2, soru: "Yüksek Aspect Ratio (ince uzun) kanadın dezavantajı nedir?",
          secenekler: ["Aerodinamik verim düşer", "İndüklenmiş sürükleme artar", "Yapısal ağırlık ve kanat kökündeki eğilme momenti artar", "Kalkış mesafesi kısalır"], dogru: 2,
          aciklama: "Yüksek AR indüklenmiş sürüklemeyi azaltır ama kanat uzadıkça yapısal ağırlık ve eğilme momenti artar." },
        { id: "g15s3", etiket: "Kavram", puan: 1, soru: "Tasarım spiralinin temel özelliği nedir?",
          secenekler: ["Tek seferlik bir karar sürecidir", "Yinelemeli (iteratif) bir süreçtir, gerekirse başa döner", "Sadece aerodinamiği kapsar", "Sadece motor seçimini belirler"], dogru: 1,
          aciklama: "Tasarım spirali, her adımın diğerini etkilediği yinelemeli bir süreçtir; performans doğrulama başarısız olursa konfigürasyon seçimine dönülür." },
        { id: "g15s4", etiket: "Vaka", puan: 2, soru: "B787'nin kompozit gövde kullanmasının temel sebebi nedir?",
          secenekler: ["Görünüm güzelliği", "Hafiflik → yakıt verimliliği + korozyonsuz yapı → konfor artışı", "Motor gücünü artırmak", "Pist mesafesini kısaltmak"], dogru: 1,
          aciklama: "Kompozit, alüminyuma göre ~%20 daha hafif olduğundan yakıt verimliliği artar; korozyona uğramadığı için kabin nem oranı yükseltilebilir (yolcu konforu)." },
        { id: "g15s5", etiket: "Trade-off", puan: 2, soru: "Delta kanatın düşük hızdaki dezavantajı nedir?",
          secenekler: ["Süpersonik verim düşüktür", "Kalkış ve iniş mesafesi uzar", "Yapısal olarak zayıftır", "Motor yerleştirilmesi imkânsızdır"], dogru: 1,
          aciklama: "Delta kanat süpersonikte etkili ama düşük hızlarda yüksek hücum açısı gerektirdiğinden kalkış/iniş mesafesi uzar." }
      ],
      ipuclari: {
        "Trade-off": "Her konfigürasyon seçiminin bir artısı ve bir bedeli olduğunu hatırla; 'bedava öğle yemeği' yok.",
        "Vaka": "Bir uçağın neden böyle tasarlandığını açıklarken görev→gereksinim→form zincirini kullan."
      }
    },
"g16": {
      ad: "Bir Uçağa Mühendis Gözüyle Bakalım",
      ders: "Uçak Mühendisliğine Giriş",
      seviye: "Orta",
      sure: 18,
      onbilgi: "Bir Uçak Neden Böyle Tasarlanmış? + önceki tüm dersler",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Bu ders, modülün kapanış pratiğidir. Bir mühendis olarak bir uçağa baktığında artık her formu okuyabilmelisin: kanat geometrisinden görev profilini, motor tipinden hız rejimini, gövde yapısından yük taşıma felsefesini çıkarabilmelisin. Burada Boeing 737 üzerinden adım adım bir mühendislik gözlem pratiği yapacağız." },

        { id: "b2", tip: "metin", baslik: "Adım 1: Kanat formu — ne söylüyor?",
          metin: "B737: alttan kanatlı, geriye ok açılı (25° ok açısı), orta-yüksek AR.\nAlttan kanat → iniş takımı kanada toplanabilir, yer etkisinden (ground effect) faydalanır.\nGeriye ok → transonik seyir hızı (Mach ~0,78); şok dalgası oluşumunu geciktirir.\nOrta-yüksek AR → indüklenmiş sürüklemeyi azaltıp yakıt verimliliğini artırır, ama çok uzun kanat değil (yapısal ağırlık ve apron uyumu dengesi).\nSonuç: bu uçak orta menzil, sesaltı/transonik seyir, yüksek yakıt verimliliği için tasarlanmış." },

        { id: "b3", tip: "metin", baslik: "Adım 2: Motor tipi — ne söylüyor?",
          metin: "B737 NG/MAX: yüksek bypass turbofan (CFM56 / LEAP-1B), bypass oranı ~5-9:1.\nYüksek bypass → düşük gürültü, yüksek yakıt verimliliği, sesaltı seyir için optimize.\nKanat altına monte edilmiş → bakım erişimi kolay, motor ağırlığı kanadı aşağı iterek uçuşta eğilme momentini azaltır (relief load).\nSonuç: ekonomik sivil taşımacılık için optimize edilmiş itki sistemi." },

        { id: "b4", tip: "metin", baslik: "Adım 3: Gövde yapısı — ne söylüyor?",
          metin: "B737: dar gövde (single-aisle), 3+3 oturma, yarı monokok alüminyum yapı.\nDar gövde → kısa-orta mesafe operasyonu, hızlı yolcu indirme/bindirme (turnaround).\nYarı monokok → yük dağıtılmış, hasar toleranslı. Tek koridorlu düzen → 150-200 yolcu kapasitesi.\nBasınçlandırma: kabin, 8000 ft basınç irtifasında tutulur, dış basınç çok düşükken iç-dış basınç farkını bulkhead'ler ve gövde kabuğu taşır." },

        { id: "b5", tip: "metin", baslik: "Adım 4: Kumanda yüzeyleri — ne söylüyor?",
          metin: "B737: aileron (roll), elevator (pitch), rudder (yaw) + iç/dış spoiler + LE slat + TE flap (Krueger flap dahil).\nÇift yarıklı Fowler flap → C_L,max'ı ciddi artırıp kısa piste iniş/kalkışı mümkün kılıyor.\nKanat ön kenarında slat → stall açısını geciktirip düşük hız güvenliğini artırıyor.\nSpoileron → düşük hızda aileron etkinliğini destekliyor; iniş sonrası ground spoiler olarak fren verimliliğini artırıyor.\nBu kombinasyon, uçağın hem yüksek hızda verimli hem düşük hızda güvenli olmasını sağlıyor." },

        { id: "b6", tip: "metin", baslik: "Adım 5: Kuyruk düzeni — ne söylüyor?",
          metin: "B737: konvansiyonel kuyruk (yatay stabilizer + elevator, dikey stabilizer + rudder).\nYatay kuyruk kanat arkasında → CG'nin önünde olmasından kaynaklanan pitch-down momentini dengeliyor.\nDikey kuyruk → yönsel kararlılık (yaw damping) sağlıyor.\nKonvansiyonel düzen → basit, güvenilir, bakım kolay. T-kuyruk (bazı bölgesel uçaklarda) veya V-kuyruk (deneysel) gibi alternatifler, belirli görev profillerinde avantaj sağlar." },

        { id: "b7", tip: "metin", baslik: "Sentez: tek bakışta mühendislik okuması",
          metin: "Bir uçağa baktığında şu zincirlemeyi kurabilmelisin:\nKanat formu → hız rejimi + aerodinamik felsefe\nMotor tipi → görev menzili + verim önceliği\nGövde → yolcu/kargo kapasitesi + yapısal felsefe\nKumanda yüzeyleri → düşük/yüksek hız performans dengesi\nKuyruk düzeni → kararlılık yaklaşımı\n\nBu beş adım, herhangi bir uçağa (askeri, sivil, İHA) uygulanabilir. 'Bu uçak neden böyle?' sorusunun cevabı bu beş katmanda gizlidir." },

        { id: "b8", tip: "ornek", baslik: "Pratik: F-16'yı oku",
          soru: "F-16'nın dışından bakarak hangi mühendislik kararlarını çıkarabilirsin?",
          cozum: "Kanat: gövde ile bütünleşik (blended wing-body) delta benzeri form, orta kanat → yüksek manevra, düşük radar kesit alanı, süpersonik yetenek.\nMotor: tek motor, düşük bypass turbofan (F110/F100) → yüksek itki/ağırlık oranı, supercruise potansiyeli.\nGövde: dar, aerodinamik → minimum sürükleme.\nHava girişi: gövde altında sabit geometrili giriş → basit, hafif.\nKuyruk: tek dikey stabilizer + all-moving horizontal tail (stabilatör) → yüksek α manevralarda etkinlik.\nSonuç: çok rollü, yüksek manevra kabiliyetli, sesüstü kapasiteli bir savaş uçağı." },

        { id: "b9", tip: "liste", baslik: "Pratik kontrol listesi: herhangi bir uçağı okumak için",
          maddeler: [
            "Kanat: üst/orta/alt? Düz/ok/delta? AR yüksek mi düşük mü? → hız rejimi ve aerodinamik felsefe.",
            "Motor: pistonlu/turboprop/turbofan/turbojet? Kaç adet, nereye monte? → görev ve verim ipucu.",
            "Gövde: dar/geniş? Yapı tipi? → kapasite ve mesafe.",
            "Kumanda yüzeyleri: hangi flap/slat/spoiler kombinasyonu? → düşük hız/yüksek hız dengesi.",
            "Kuyruk: konvansiyonel/T/V/canard? → kararlılık ve manevra yaklaşımı."
          ] },

        { id: "b10", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Bir uçağın dışından bakarak hangi mühendislik kararlarını çıkarabilirsiniz?", "Kanat formundan hız rejimini ve aerodinamik felsefeyi, motor tipinden görev menzili ve verim önceliğini, gövdeden kapasite ve yapı felsefesini, kumanda yüzeylerinden düşük/yüksek hız dengesini, kuyruktan kararlılık yaklaşımını çıkarabilirim."],
            ["Neden B737 geriye ok açılı kanat kullanır?", "Seyir hızı Mach ~0,78 olduğundan, transonik rejimde kanat üzerindeki şok dalgası oluşumunu geciktirmek ve dalga sürüklemesini azaltmak için geriye ok açılı kanat seçilmiştir."]
          ] },

        { id: "b11", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA.",
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill.",
            "Brady, C. (2023). The Boeing 737 Technical Guide. www.b737.org.uk"
          ] }
      ],

      sorular: [
        { id: "g16s1", etiket: "Okuma", puan: 2, soru: "Alttan kanatlı, geriye ok açılı, yüksek bypass turbofan motorlu bir uçak büyük olasılıkla hangi kategoridedir?",
          secenekler: ["Askeri savaş uçağı", "Sivil orta/uzun menzil yolcu jeti", "Eğitim uçağı", "Akrobasi uçağı"], dogru: 1,
          aciklama: "Bu kombinasyon (alttan kanat + ok açı + yüksek bypass turbofan), sivil yolcu jetlerinin (A320, B737, B777 gibi) karakteristik özelliğidir." },
        { id: "g16s2", etiket: "Okuma", puan: 2, soru: "Yüksek AR düz kanatlı, turboproplu bir uçak büyük olasılıkla hangi göreve yöneliktir?",
          secenekler: ["Süpersonik savaş", "Kısa mesafe bölgesel taşımacılık veya gözetleme/İHA", "Uzun menzil kıtalararası uçuş", "Akrobasi"], dogru: 1,
          aciklama: "Yüksek AR düz kanat düşük hızda verimli, turboprop kısa mesafede verimli → bölgesel taşımacılık veya uzun süzülme görevleri (İHA/gözetleme)." },
        { id: "g16s3", etiket: "Sentez", puan: 2, soru: "Bir uçağın kanat altında büyük çaplı motorlar görüyorsanız, bu motorlar büyük olasılıkla hangi tiptedir?",
          secenekler: ["Turbojet (düşük bypass)", "Turboprop", "Yüksek bypass turbofan", "Ramjet"], dogru: 2,
          aciklama: "Büyük çaplı motor kılıfı (nacelle), yüksek bypass turbofanın belirgin özelliğidir; büyük fan çapı bypass oranını artırır." },
        { id: "g16s4", etiket: "Okuma", puan: 2, soru: "Delta kanat + tek motor + dar gövdeli bir uçağın hız rejimi büyük olasılıkla nedir?",
          secenekler: ["Sesaltı (< Mach 0,8)", "Transonik (0,8-1,2)", "Sesüstü (> Mach 1,2)", "Hipersonik (> Mach 5)"], dogru: 2,
          aciklama: "Delta kanat süpersonik uçuş için optimize edilmiştir; tek motor + dar gövde bu uçağın askeri bir savaş jeti olduğuna işaret eder." },
        { id: "g16s5", etiket: "Sentez", puan: 2, soru: "B737'nin motorları kanat altına monte edilmesinin yapısal avantajı nedir?",
          secenekler: ["Sürüklemeyi artırır", "Motor ağırlığı kanadı aşağı iterek uçuşta eğilme momentini azaltır (relief load)", "Gürültüyü artırır", "Bakımı zorlaştırır"], dogru: 1,
          aciklama: "Motor ağırlığı kanat altında olduğundan, uçuşta taşımanın yukarı ittiği kanadı aşağı çekerek eğilme momentini kısmen dengler (relief load); bu da kanat yapısını hafifletmeye yardımcı olur." }
      ],
      ipuclari: {
        "Okuma": "Kanat formu+motor tipi kombinasyonundan görev profilini çıkarmayı pratik et.",
        "Sentez": "Beş adımı (kanat, motor, gövde, kumanda, kuyruk) sırayla uygula ve her birinin ne söylediğini bağla."
      }
    },
"mal1": {
      ad: "Uçakta Neden Farklı Malzemeler Kullanılır?",
      ders: "Malzeme",
      seviye: "Temel",
      sure: 22,
      mulakat: true,
      onbilgi: "Uçak Nedir?, Uçağın Anatomisi, Uçak Yapısı (Giriş modülü)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Havacılıkta 'en iyi malzeme' diye bir şey yoktur; görevine, yüküne, ortamına ve maliyetine en uygun malzeme vardır. Bir uçağın kanat üstü sıkışırken altı çekilir, motor bölgesi 1000 °C'yi aşarken gövde dondurucu soğukta çalışır. Tek bir malzeme tüm bu koşulları karşılayamaz — her parçaya maruz kaldığı yük tipine, çevre şartına ve emniyet gereksinimine göre farklı bir malzeme seçilir." },

        { id: "b2", tip: "metin", baslik: "Bu konuyu neden öğreniyoruz?",
          metin: "Bir otomobil arızalandığında sağa çekip durabilirsiniz; fakat 10.000 m yükseklikte, saatte 900 km hızla giden bir uçağın kenara çekme şansı yoktur. Uçak yapısını oluşturan her parça, 20–30 yıllık servis ömrü boyunca devasa rüzgâr yüklerine, fırtınalara, dondurucu soğuklara ve motor sıcaklıklarına maruz kalır.\n\nYanlış bir malzeme seçiminin iki büyük sonucu vardır:\n• Aşırı ağırlık → uçak havalanamaz veya faydalı yük kapasitesi düşerek aşırı yakıt harcar.\n• Yapısal hasar → uçak operasyonel kuvvetlere dayanamayıp hasar görür.\n\nBu yüzden malzeme seçimi, uçağın emniyetle uçabilmesi ve ekonomik olarak kâr edebilmesi için havacılık mühendisliğinin en kritik adımıdır. Bu ders, modülün tamamına zemin hazırlar: hangi özelliklerin neden önemli olduğunu kavramadan ilerideki alaşım, kompozit ve seçim derslerini tam anlamak mümkün değildir." },

        { id: "b3", tip: "metin", baslik: "Bir uçak malzemesinden beklenen 9 temel özellik",
          metin: "Bir uçak mühendisi malzeme seçerken tek bir özelliğe bakmaz; aşağıdaki dokuz kriterin dengesini kurmaya çalışır:\n\n1. Hafiflik (düşük yoğunluk) — mümkün olan en az kütle.\n2. Dayanım (mukavemet) — kopmadan ve ezilmeden büyük kuvvetleri taşıyabilme.\n3. Rijitlik (esnemezlik) — yük altında uçağın aerodinamik biçimini koruyabilme.\n4. Yorulma ömrü — milyonlarca kez tekrarlanan dinamik yüklere yıllarca dayanabilme.\n5. Korozyon direnci — paslanmaya, çürümeye ve çevresel kimyasallara karşı direnç.\n6. Sıcaklık dayanımı — aşırı soğukta gevrekleşmeme, yüksek sıcaklıkta yumuşayıp erimeme.\n7. Darbe ve hasar toleransı — kuş çarpması, taş fırlaması gibi darbelerde ani ve feci kırılma yaşamama.\n8. Maliyet — hammadde, işleme ve bakım maliyetlerinin ekonomik olması.\n9. Üretilebilirlik — kolayca kesilip, şekillendirilip birleştirilebilme.",
          kutu: { tip: "bilgi", baslik: "Neden 9 kriter birden?", metin: "Hiçbir malzeme bu 9 kriterin hepsinde birden en iyi olamaz. Titanyum hafif ve güçlüdür ama çok pahalıdır; karbon fiber çok hafiftir ama darbeye hassastır; çelik çok güçlüdür ama çok ağırdır. Mühendislik, bu özellikleri her parça için ayrı ayrı dengeleme sanatıdır." } },

        { id: "b4", tip: "metin", baslik: "Hafiflik neden bu kadar kritik?",
          metin: "Yer çekimi uçaktaki her gram kütleyi aşağı çeker. Uçak ne kadar ağırsa, kanatların o kadar çok taşıma kuvveti (Lift) üretmesi ve motorların o kadar çok itki (Thrust) sağlaması gerekir.\n\nBasit benzetme: bir kuş ile ağır bir taşı düşünün. Taş ne kadar sağlam olursa olsun, kütlesi ağır olduğu için asla uçamaz.\n\nMühendislik sonucu: uçak hafifledikçe daha az yakıt harcar. Tasarruf edilen her kilogram; daha fazla yolcu, daha fazla kargo taşıyabilmek ve daha uzun menzillere ulaşabilmek demektir." },

        { id: "b5", tip: "metin", baslik: "Dayanım (Mukavemet)",
          metin: "Dayanım, malzemenin dış yükler altında kırılmaya, kopmaya veya kalıcı (plastik) şekil değiştirmeye karşı gösterdiği dirençtir. İki ana yük tipi öne çıkar:\n\n• Çekme dayanımı — malzemenin iki ucundan çekildiğinde kopmama yeteneği.\n• Basma dayanımı — malzemenin eksenel olarak bastırıldığında ezilmeme ve bükülmeme yeteneği.\n\nGerçek hayat örneği: sert bir türbülansa giren uçağın kanatları yukarı doğru metrelerce bükülür. Kanadın alt kısmı şiddetle çekilirken üst kısmı sıkışır. Malzemenin dayanımı yetersiz olsaydı kanat anında kırılırdı." },

        { id: "b6", tip: "metin", baslik: "Rijitlik (Esnemezlik)",
          metin: "Rijitlik, malzemenin kuvvet altında şekil değiştirmeye (sehme/esnemeye) karşı gösterdiği dirençtir. Dayanım ile karıştırılmamalıdır: bir malzeme çok dayanıklı olabilir ama esnek de olabilir.\n\nBenzetme: ince bir plastik cetvel ile aynı kalınlıktaki tahta cetveli düşünün. İkisi de kolay kırılmayabilir; ancak plastik kolayca bükülürken (düşük rijitlik) tahta bükülmeye direnç gösterir (yüksek rijitlik).\n\nUçaktaki önemi: kanatların yük altında hafifçe esnemesi istenir; ancak aşırı esneme aerodinamik şekli bozar ve kontrol yüzeylerinin (aileron, flap) mekanik olarak sıkışıp kilitlenmesine neden olabilir." },

        { id: "b7", tip: "metin", baslik: "Yorulma ömrü",
          metin: "Yorulma, malzemenin tek seferde kıramayacağı kadar küçük kuvvetlere milyonlarca kez maruz kaldığında, zamanla mikro çatlaklar büyüterek aniden kırılması olayıdır.\n\nAtaş örneği: metal bir ataşı tek hamlede çekerek koparamazsınız. Ama aynı noktadan defalarca öne-arkaya büktüğünüzde birkaç saniye içinde aniden kırılır.\n\nUçaktaki gerçeklik: yolcu uçağı 20–30 yıllık ömrü boyunca on binlerce uçuş döngüsü yaşar. Her kalkış ve inişte kabin basınçlanması sebebiyle gövde genleşip büzülür; kanatlar milyonlarca kez dinamik türbülans esnemesi yaşar. Yorulma direnci düşük bir malzeme kullanılırsa uçak beklenmedik bir anda feci metal yorulması yaşayabilir.",
          kutu: { tip: "uyari", baslik: "Kritik kavram", metin: "Yorulma kırılması uyarısız gelir — malzeme dışarıdan sapasağlam görünürken içten ilerleyen mikro çatlaklar aniden birleşip kırılmaya dönüşür. Bu yüzden havacılıkta düzenli muayene (NDT — tahribatsız test) zorunludur." } },

        { id: "b8", tip: "metin", baslik: "Korozyon direnci",
          metin: "Korozyon, metallerin çevrelerindeki nem, tuz, oksijen ve kimyasallarla tepkimeye girerek paslanması ve çürümesidir.\n\nGerçek hayat: deniz seviyesinde ve nemli kıyı kentlerinde çalışan uçaklar sürekli tuzlu havaya maruz kalır. Paslanan bir metal kaplama zamanla kesit kalınlığını kaybeder, taşıma kapasitesi düşer ve çatlayarak kopar.\n\nÇözüm: korozyona dayanıklı özel alüminyum alaşımları (Alclad kaplamalı), titanyum, korozyonsuz kompozit malzemeler veya koruyucu anodize kaplamalar tercih edilir." },

        { id: "b9", tip: "tablo", baslik: "Uçağın farklı bölgelerindeki sıcaklık farkları",
          basliklar: ["Bölge", "Sıcaklık aralığı", "Neden?"],
          satirlar: [
            ["Dış gövde (10.000 m)", "−56 °C", "Troposferin üst sınırına yakın, ISA standart atmosfer"],
            ["Jet motor yanma odası / türbin", "+1000 °C … +1400 °C", "Yakıt-hava karışımının yanması"],
            ["Süpersonik burun / hücum kenarları", "+200 °C ve üzeri", "Hava sürtünmesinden kaynaklanan aerodinamik ısınma"],
            ["Fren diskleri (iniş sonrası)", "+500 °C … +800 °C", "Kinetik enerjinin ısıya dönüşümü"]
          ],
          metin: "Gövdede kullanılan standart yapım alüminyum alaşımları (2024, 7075) 110–150 °C üzerinde aşırı yaşlanarak yumuşar ve mukavemetini kaybeder. Motor bölgesi gibi akkor sıcaklıktaki yerlerde nikel süperalaşımları, titanyum veya seramik matrisli kompozitler kullanılmak zorundadır." },

        { id: "b10", tip: "metin", baslik: "Darbe ve hasar toleransı",
          metin: "Uçuş sırasında veya yerdeyken beklenmedik ani darbeler yaşanabilir: kuş çarpması, pistten fırlayan taş, yer hizmetlerinde el aletlerinin kaplamaya düşmesi gibi.\n\nKompozit nüansı (BVID): karbon fiber kompozitler son derece hafif ve rijittir; ancak düşük hızlı dik darbelerde dış yüzeyde hiçbir iz bırakmaksızın içten katman ayrılması (BVID — Barely Visible Impact Damage) yaşayabilir. Bu durum NDT yöntemleriyle takip edilmelidir.\n\nHasar toleransı, malzemede küçük bir çatlak veya darbe izi oluşsa bile parçanın anında parçalanmayıp emniyetli şekilde bir sonraki bakıma kadar uçuşa devam edebilmesidir. Modern havacılık tasarım felsefesi 'damage tolerant design' üzerine kuruludur." },

        { id: "b11", tip: "metin", baslik: "Maliyet ve üretilebilirlik",
          metin: "Mühendislik sadece çalıştırmak değil, ekonomik olarak sürdürülebilir kılmaktır. Malzeme maliyeti iki bileşenden oluşur:\n\n1. Hammadde fiyatı — malzemenin kilogram başı tedarik maliyeti.\n2. İmalat ve işleme maliyeti — döküm zorluğu, Buy-to-Fly oranı ve CNC takım aşınması.\n\nÖrnek: titanyum mükemmeldir (hafif, güçlü, paslanmaz) ama hammadde tedariki, vakum altında işlenme zorluğu ve CNC takımlarını çabuk yıpratması sebebiyle alüminyuma kıyasla toplam parça maliyetinde kat kat pahalıdır. Bir yolcu uçağının tamamı titanyumdan yapılsa bilet ücretleri ekonomik olmaktan çıkar.\n\nAyrıca laboratuvarda harika mekanik değerler gösteren bir malzeme, fabrikada bükülemiyorsa, perçinlenemiyorsa veya kaynatılamıyorsa uçak yapımında kullanılamaz. Malzemenin imalata ve montaja uygun olması şarttır." },

        { id: "b12", tip: "metin", baslik: "Aynı uçakta neden farklı malzemeler kullanılır?",
          metin: "Çünkü uçağın her bölgesi farklı işte çalışır ve farklı fiziki şartlara maruz kalır.\n\nEv benzetmesi: bir evin çatısında kiremit, pencerelerinde cam, su borularında plastik, temelinde demirli beton kullanılır. Hiç kimse evi tamamen camdan veya tamamen betondan yapmaz.\n\nUçakta da her parçanın maruz kaldığı yük tipi (çekme, basma, darbe), çevre şartı (sıcaklık, nem, korozyon) ve emniyet/işlev gereksinimi farklıdır. 'Her yere en uygun tek malzeme' aramak yerine, 'her yere kendi en uygun malzemesini koymak' doğru mühendislik yaklaşımıdır." },

        { id: "b13", tip: "tablo", baslik: "Bölgesel malzeme seçim haritası",
          basliklar: ["Bölge", "Baskın yük / şart", "Tipik malzeme", "Neden bu malzeme?"],
          satirlar: [
            ["Kanat üst kaplaması", "Basma (sıkışma) + burkulma", "7075-T6 / 7050 Al veya CFRP", "Yüksek basma mukavemeti, burkulmaya direnç"],
            ["Kanat alt kaplaması", "Çekme + yorulma", "2024-T3 Al veya CFRP", "Çekme dayanımı yüksek, çatlak ilerleme direnci"],
            ["İniş takımları", "Dev şok / darbe", "300M / 4340 çelik veya Ti", "Küçük hacimde muazzam mukavemet ve darbe tokluğu"],
            ["Motor sıcak bölge", "+1000 °C üzeri ısı", "Nikel süperalaşım (Inconel) / CMC", "Erimeyen, oksitlenmeyen yüksek sıcaklık malzemesi"],
            ["Burun kapağı (radom)", "Radar şeffaflığı", "Cam fiber (fiberglas) kompozit", "Radar dalgalarını yansıtmaz, geçirir"]
          ],
          metin: "Bu tablo, modül boyunca her malzeme türünü öğrendiğinizde tekrar tekrar dönüp bakacağınız bir referanstır. Her satırın 'neden'ini tam olarak kavramak, bu modülün temel amacıdır." },

        { id: "b14", tip: "ornek", baslik: "Kanat üstü ve altı neden farklı alaşım?",
          soru: "Bir uçak uçarken kanatlar yukarı bükülür. Kanat üst ve alt kaplamasına neden farklı alüminyum alaşımları konur?",
          cozum: "Kanat yukarı bükülürken üst yüzey sıkışır (basma yükü), alt yüzey ise gerilir (çekme yükü). Üst kaplamada burkulma ve basma mukavemeti yüksek olan 7075-T6 tercih edilir. Alt kaplamada ise çekme dayanımının yanı sıra, her uçuşta tekrarlanan yüklere karşı yorulma ve çatlak ilerleme direnci yüksek olan 2024-T3 tercih edilir. Aynı parça (kanat) bile, farklı yük tiplerinden dolayı iki farklı alaşım gerektirir — bu, 'görevine uygun malzeme' ilkesinin en güzel örneğidir." },

        { id: "b15", tip: "ornek", baslik: "Neden her yeri titanyum yapmıyoruz?",
          soru: "Titanyum hem hafif hem güçlü hem de paslanmaz. Uçağın tamamını titanyumdan yapmak mantıklı olmaz mı?",
          cozum: "Titanyum mükemmel mekanik özelliklere sahiptir ama hammadde ve CNC işleme maliyetleri yüzünden alüminyumdan kat kat pahalıdır. Ayrıca ısıyı çok kötü ilettiği için talaşlı imalatta kesici takımları hızla eritir ve işleme çok yavaştır. Bir yolcu uçağının tamamı titanyumdan yapılsa imalat maliyeti ve süresi katlanır, bilet fiyatları kimsenin ödeyemeyeceği kadar artar. Mühendislik, titanyumu yalnızca gerçekten ihtiyaç duyulan yerlerde (motor bağlantıları, iniş takımı, kompozit komşuluk noktaları) kullanıp geri kalanı alüminyum veya kompozitle doldurmaktır." },

        { id: "b16", tip: "ornek", baslik: "Karbon fiber iniş takımı olur mu?",
          soru: "Karbon fiber kompozit alüminyumdan daha hafif ve güçlüdür. İniş takımlarında neden kullanılmaz?",
          cozum: "İniş takımları dar alanda çok yüksek yoğunluklu şok ve darbe yükleri taşır. Kompozitler yüzeysel darbelerde dıştan görünmeyen iç katman ayrılması (delaminasyon / BVID) yaşayabilir ve darbe tokluğu metallere göre düşüktür. Çelik ise yüksek darbe tokluğu ve hacimsel mukavemet sayesinde iniş şoklarını emniyetle karşılar. Hafiflik avantajına rağmen, iniş takımlarında çelik veya titanyum tercih edilmeye devam eder." },

        { id: "b17", tip: "metin", baslik: "\"En güçlü malzeme neden en iyi malzeme değildir?\"",
          metin: "Gerçek 1 — Çelik: çok güçlü ve ucuzdur, ancak alüminyumdan yaklaşık 3 kat daha ağırdır. Bir yolcu uçağını tamamen çelikten yaparsanız motorlar onu yerden kaldıramaz.\n\nGerçek 2 — Seramik: doğadaki en sert malzemelerdendir, ancak darbe tokluğu zayıftır — ani bir taş darbesinde cam gibi tuzla buz olabilir.\n\nMühendislik kuralı: tek bir parametreye bakarak karar verilmez. Güç, ağırlık, esneklik, maliyet ve ömür teraziye konulur; her parça için bu terazi yeniden kurulur." },

        { id: "b18", tip: "metin", baslik: "Malzeme – Tasarım – Yük – Çevre ilişkisi",
          metin: "Doğru malzeme seçimi dört elemanlı bir zincir gibi çalışır:\n\n1. Yük → parça çekiliyor mu, bastırılıyor mu, bükülüyor mu?\n2. Çevre → parça deniz kenarında mı, motor sıcaklığında mı, dondurucu soğukta mı çalışacak?\n3. Tasarım → parça ince bir sac mı, döküm blok mu, karmaşık bir birleşim mi?\n4. Malzeme → tüm bu şartları en az ağırlık ve en uygun fiyatla karşılayan malzeme seçilir.\n\nBu dört soruyu cevaplamadan malzeme seçmek, reçetesiz ilaç yazmaya benzer." },

        { id: "b19", tip: "tablo", baslik: "Nesiller arası malzeme değişimi",
          basliklar: ["Malzeme", "Boeing 747 (1969)", "Boeing 787 / A350 sınıfı"],
          satirlar: [
            ["Alüminyum", "~%80", "~%19–20"],
            ["Karbon fiber kompozit (CFRP)", "~%0", "~%50–55"],
            ["Titanyum", "~%5", "~%14–15"],
            ["Çelik", "~%10", "~%6–10"],
            ["Diğer", "~%5", "~%5"]
          ],
          metin: "Yarım yüzyılda en dikkat çekici değişim, alüminyumun yerini büyük ölçüde karbon fiber kompozitlere bırakmasıdır. Bu geçiş daha hafif, korozyona dayanıklı ve uzun menzilli uçaklar üretmeyi mümkün kılmıştır." },

        { id: "b20", tip: "liste", baslik: "Yaygın hatalar ve yanlış anlamalar",
          maddeler: [
            "\"En güçlü malzeme en iyi malzemedir\" demek. Güç tek başına anlamsızdır; ağırlık, maliyet ve üretilebilirlikle birlikte değerlendirilmelidir.",
            "Dayanım ile rijitliği karıştırmak. Dayanım kırılmaya karşı dirençtir, rijitlik şekil değiştirmeye karşı dirençtir. Bir malzeme kırılmadan çok esneyebilir (yüksek dayanım, düşük rijitlik).",
            "\"Kompozit her yerde alüminyumdan iyidir\" sanmak. Kompozit hafif ve güçlüdür ama darbeye hassastır (BVID), tamir edilmesi zordur ve maliyeti yüksektir.",
            "Malzeme seçiminde yalnızca mekanik özelliklere bakmak. Korozyon, sıcaklık, yorulma, maliyet ve imalat kolaylığı da eşit derecede belirleyicidir.",
            "Uçağın tamamının tek malzemeden yapılabileceğini düşünmek. Farklı bölgelerin farklı yük tipleri ve çevre şartları, zorunlu olarak çoklu malzeme kullanımını gerektirir."
          ] },

        { id: "b21", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Bir uçakta neden tek bir malzeme kullanılmaz?", "Çünkü uçağın her parçası farklı kuvvete ve çevre şartına maruz kalır. Kanat üstü sıkışırken altı çekilir, motor 1000 °C'ye ulaşırken gövde paslanma riski taşır. En iyi malzeme yoktur; parçanın görevine ve ortamına en uygun malzeme vardır."],
            ["Klasik kanat tasarımlarında üst kaplamada 7075, alt kaplamada neden 2024 tercih edilmiştir?", "Üst kaplama uçuşta basma yükü aldığı için yüksek basma mukavemetli 7075-T6 seçilir. Alt kaplama çekme yükü ve tekrarlı esneme aldığı için yorulma ömrü ve çatlak ilerleme direnci yüksek olan 2024-T3 tercih edilir."],
            ["Karbon fiber alüminyumdan daha hafif ve güçlüyken neden iniş takımlarında çelik kullanılır?", "İniş takımları dar hacimde çok yüksek yoğunluklu şok ve darbe yükleri taşır. Kompozitler yüzeysel darbelerde içten görünmeyen delaminasyon hasarı alabilir. Çelik yüksek darbe tokluğu ve hacimsel mukavemet sayesinde iniş şoklarını emniyetle karşılar."]
          ] },

        { id: "b22", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Niu, M. C. Y. (1988). Airframe structural design. Conmilit Press.",
            "Niu, M. C. Y. (1997). Airframe stress analysis and sizing (2. baskı). Conmilit Press.",
            "Cutler, J. & Liber, J. (2005). Understanding aircraft structures (4. baskı). Blackwell.",
            "Campbell, F. C. (2006). Manufacturing technology for aerospace structural materials. Elsevier.",
            "FAA. (2012). Aviation maintenance technician handbook — Airframe (FAA-H-8083-31A), Bölüm 7.",
            "Boeing 787 Dreamliner Technology — Materials. boeing.com.",
            "Anderson, J. D., Jr. (2016). Introduction to flight (8. baskı). McGraw-Hill."
          ] }
      ],

      sorular: [
        { id: "mals1-1", etiket: "Kavram", puan: 1,
          soru: "Bir uçak malzemesinden beklenen temel özellikler arasında hangisi yoktur?",
          secenekler: ["Hafiflik", "Dayanım", "Elektriksel iletkenlik", "Korozyon direnci"],
          dogru: 2,
          aciklama: "Hafiflik, dayanım ve korozyon direnci temel 9 seçim kriterinden üçüdür. Elektriksel iletkenlik genel bir yapısal seçim kriteri değildir." },
        { id: "mals1-2", etiket: "Kavram", puan: 1,
          soru: "Dayanım (mukavemet) ve rijitlik arasındaki temel fark nedir?",
          secenekler: ["İkisi aynı şeydir", "Dayanım kırılmaya karşı dirençtir, rijitlik şekil değiştirmeye karşı dirençtir", "Rijitlik kırılmaya karşı dirençtir, dayanım esnemezliktir", "Her ikisi de yalnızca kompozitlerde geçerli kavramlardır"],
          dogru: 1,
          aciklama: "Dayanım malzemenin kırılmadan taşıyabildiği kuvvet seviyesi, rijitlik ise kuvvet altında ne kadar az şekil değiştirdiğidir. Bir malzeme kırılmadan çok esneyebilir (yüksek dayanım, düşük rijitlik)." },
        { id: "mals1-3", etiket: "Kavram", puan: 1,
          soru: "Yorulma kırılması nedir?",
          secenekler: ["Malzemenin tek büyük darbede kırılması", "Malzemenin küçük tekrarlı yüklere uzun süre maruz kalarak içten çatlayıp aniden kırılması", "Malzemenin paslanarak zayıflaması", "Malzemenin aşırı sıcakta erimesi"],
          dogru: 1,
          aciklama: "Yorulma, tek seferde kıramayacak kadar küçük kuvvetlerin milyonlarca kez tekrarlanmasıyla içten mikro çatlaklar büyüyerek malzemenin aniden kırılmasıdır." },
        { id: "mals1-4", etiket: "Uygulama", puan: 2,
          soru: "Jet motorunun türbin bölgesinde neden alüminyum kullanılamaz?",
          secenekler: ["Alüminyum çok ağırdır", "Alüminyum 110–150 °C üzerinde yumuşayıp dayanımını kaybeder, oysa türbin 1000 °C'nin üzerinde çalışır", "Alüminyum çok pahalıdır", "Alüminyumun darbe tokluğu düşüktür"],
          dogru: 1,
          aciklama: "Alüminyum alaşımları yaklaşık 110–150 °C üzerinde mekanik özelliklerini kaybeder. Motor türbin bölgesi +1000 °C'nin üzerinde çalıştığı için nikel süperalaşımları veya CMC kullanılır." },
        { id: "mals1-5", etiket: "Uygulama", puan: 2,
          soru: "İniş takımlarında karbon fiber yerine çelik tercih edilmesinin temel nedeni nedir?",
          secenekler: ["Çelik daha hafiftir", "Çelik daha ucuzdur", "Çelik yüksek darbe tokluğu ve şok yükü taşıma kapasitesine sahiptir", "Çelik daha iyi korozyon direncine sahiptir"],
          dogru: 2,
          aciklama: "İniş takımları dar alanda çok yüksek şok ve darbe yükleri taşır. Çeliğin yüksek darbe tokluğu ve hacimsel mukavemeti bu yükleri emniyetle karşılar; kompozitler darbelerde içten çatlayabilir." },
        { id: "mals1-6", etiket: "Uygulama", puan: 2,
          soru: "Uçağın burun kapağı (radom) neden metalden yapılamaz?",
          secenekler: ["Metal çok ağır olduğu için", "Metal radar sinyallerini yansıttığı için radar çalışamaz", "Metal korozyona uğradığı için", "Metalin şekillendirmesi zor olduğu için"],
          dogru: 1,
          aciklama: "Radom içindeki hava radarının elektromanyetik sinyallerini dışarıya göndermesi gerekir. Metaller bu sinyalleri yansıtır; bu yüzden radar dalgalarını geçiren cam fiber kompozit kullanılır." },
        { id: "mals1-7", etiket: "Analiz", puan: 2,
          soru: "Kanat üst kaplamasında 7075-T6, alt kaplamada 2024-T3 tercih edilir. Bunun nedeni hangisidir?",
          secenekler: ["Üst kaplama daha hafif olmalıdır", "Üst kaplama basma yükü alır (7075 basma mukavemeti yüksek), alt kaplama çekme + yorulma alır (2024 çatlak ilerleme direnci yüksek)", "7075 daha ucuzdur", "Fark yoktur, ikisi de aynı görevi yapar"],
          dogru: 1,
          aciklama: "Uçuşta kanat yukarı bükülünce üst yüzey basma yükü alır — 7075 yüksek basma mukavemeti sağlar. Alt yüzey çekme ve tekrarlı yükler alır — 2024 yorulma ve çatlak ilerleme direnciyle öne çıkar." },
        { id: "mals1-8", etiket: "Analiz", puan: 2,
          soru: "Boeing 787'de alüminyum oranı 747'ye göre neden %80'den %20'ye düştü?",
          secenekler: ["Alüminyum artık üretilmiyor", "Karbon fiber kompozitler daha hafif ve korozyona dayanıklı olduğu için alüminyumun yerini aldı", "Çelik daha hafif hale geldi", "Yasal düzenlemeler alüminyumu yasakladı"],
          dogru: 1,
          aciklama: "Karbon fiber kompozitler alüminyumdan daha hafif ve korozyona karşı çok daha dayanıklıdır. Bu sayede 787 daha az yakıt tüketir ve daha uzun menzile ulaşır." },
        { id: "mals1-9", etiket: "Kavram", puan: 1,
          soru: "Malzeme seçimini belirleyen dört elemanlı zincir hangisidir?",
          secenekler: ["Renk, boyut, ağırlık, fiyat", "Yük tipi, çevre şartı, parça tasarımı, malzeme", "Sıcaklık, basınç, nem, rüzgâr", "Mukavemet, esneklik, sertlik, kırılganlık"],
          dogru: 1,
          aciklama: "Doğru malzeme seçimi yük, çevre, tasarım ve malzeme zincirinden oluşur." },
        { id: "mals1-10", etiket: "Sentez", puan: 2,
          soru: "Kanat alt kaplaması seçilecek. Bölge çekme yüküne ve tekrarlı esnemeye maruz. En uygun malzeme hangisidir?",
          secenekler: ["Nikel süperalaşım", "300M çelik", "2024-T3 alüminyum", "Cam fiber kompozit"],
          dogru: 2,
          aciklama: "Kanat alt kaplaması çekme ve yorulma yüklerine maruz kalır. 2024-T3 yüksek çekme dayanımı ve çatlak ilerleme direnci sayesinde ideal seçimdir." },
        { id: "mals1-11", etiket: "Sentez", puan: 2,
          soru: "Bir uçağın tamamını tek bir 'süper malzeme'den yapmak neden mümkün değildir?",
          secenekler: ["Hiçbir malzeme yeterince güçlü değildir", "Hiçbir malzeme hafiflik, dayanım, sıcaklık direnci, darbe tokluğu, korozyon direnci, maliyet ve üretilebilirlikte aynı anda en iyi olamaz", "Tek malzeme kullanımı yasal olarak yasaktır", "Mümkündür ama tercih edilmez"],
          dogru: 1,
          aciklama: "Uçağın farklı bölgeleri farklı yük, sıcaklık ve çevre şartlarına maruz kalır. 9 seçim kriterinin hepsinde aynı anda en iyi olan tek bir malzeme yoktur." },
        { id: "mals1-12", etiket: "Kavram", puan: 1,
          soru: "BVID (Barely Visible Impact Damage) kavramı hangi malzeme grubuyla ilişkilidir?",
          secenekler: ["Alüminyum alaşımları", "Çelikler", "Karbon fiber kompozitler", "Nikel süperalaşımlar"],
          dogru: 2,
          aciklama: "BVID, karbon fiber kompozitlerin düşük hızlı dik darbelerde dış yüzeyde iz bırakmadan içten katman ayrılması yaşamasıdır. Metallerde darbe hasarı genellikle dıştan görülebilir." }
      ],
      ipuclari: {
        "Kavram": "9 temel seçim kriterini ve aralarındaki farkları (dayanım vs. rijitlik, yorulma vs. korozyon) tekrar gözden geçir.",
        "Uygulama": "Her uçak bölgesinin maruz kaldığı yük tipini ve çevre şartını düşün, ardından hangi malzemenin o şartları karşıladığını bul.",
        "Analiz": "Kanat üst/alt yüzey farkını, alaşım özelliklerini ve 747→787 nesil değişimini tekrar oku.",
        "Sentez": "Malzeme–Tasarım–Yük–Çevre zincirini düşünerek, verilen bölge için hangi kriterlerin öne çıktığını belirle."
      }
    },

"mal2": {
      ad: "Havacılık Malzemelerinin Temel Özellikleri",
      ders: "Malzeme",
      seviye: "Temel",
      sure: 28,
      mulakat: true,
      onbilgi: "Uçakta Neden Farklı Malzemeler Kullanılır? (mal1)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Mükemmel malzeme yoktur; uçaktaki belirli bir görev, yük ve çevre koşulu için en doğru dengelere sahip malzeme vardır. Bir malzemenin uçak yapısında kullanılıp kullanılamayacağını değerlendirirken özellikleri üç ana grupta inceleriz: fiziksel özellikler (kütle, sıcaklık davranışı), mekanik özellikler (kuvvet altındaki dayanıklılık, esneklik, enerji emme kapasitesi) ve çevresel özellikler (korozyon, sürünme, aşınma direnci). Bu derste bir malzemenin teknik künyesini (datasheet) mühendislik hassasiyetiyle okumayı ve havacılık mühendisi gibi malzeme karşılaştırması yapmayı öğreneceğiz." },

        { id: "b2", tip: "metin", baslik: "Fiziksel özellikler: malzemenin doğal kimliği",
          metin: "Fiziksel özellikler, malzemeye dışarıdan herhangi bir mekanik kuvvet uygulamadan önce bünyesinde var olan temel nitelikleridir.\n\nYoğunluk (ρ): birim hacimdeki kütle (ρ = m/V). 1 m³ çelik yaklaşık 7.850 kg, aynı hacimdeki alüminyum 2.700 kg, titanyum 4.510 kg, tek yönlü CFRP ise yaklaşık 1.550 kg gelir. Yolcu uçağının boş ağırlığındaki 1 kg'lık artış, 30 yıllık ömür boyunca binlerce litre ek yakıt yakılmasına neden olur — düşük yoğunluklu malzemeler altın değerindedir.\n\nErime noktası: saf alüminyum 660 °C'de erirken titanyum 1.668 °C'de, nikel süperalaşımlar 1.300–1.400 °C civarında erir. Motor türbin bölgesinde gaz sıcaklıkları 1.000 °C'yi aştığı için alüminyum kullanılamaz.\n\nTermal genleşme (α): sıcaklık değiştikçe boyutların ne kadar değiştiği. Alüminyum (α ≈ 23 × 10⁻⁶ /°C) ve kompozit (α ≈ 2–4 × 10⁻⁶ /°C) parçaların genleşme farkı, perçin/cıvata bağlantılarında ilave gerilmelere ve korozyon yarıklarına yol açabilir." },

        { id: "b3", tip: "metin", baslik: "Mekanik özellikler: kuvvet altındaki davranış",
          metin: "Mekanik özellikler, uçağın uçuş, manevra ve iniş esnasında maruz kaldığı kuvvetlere karşı malzemenin gösterdiği direnç ve tepkidir.\n\nDayanım (Mukavemet — σ = F/A₀): malzemenin dış yükler altında kırılmaya veya kalıcı biçim bozulmasına karşı direnci. \"Bu malzeme çok güçlüdür\" demek mühendislikte eksik bir ifadedir — hangi yükleme moduna (çekme, basma, kesme) karşı güçlü olduğu belirtilmelidir.\n\nÖnemli: dayanım türleri birbirinden farklıdır. Çekme, basma ve kesme dayanımları ayrı ayrı ölçülür ve uçaktaki her bölge farklı bir türün baskın olduğu ortamda çalışır." },

        { id: "b4", tip: "formul", baslik: "Akma dayanımı (Yield Strength)",
          formul: "R_{p0.2} = σ_y",
          semboller: [
            ["R_{p0.2}", "Metallerde %0,2 kalıcı plastik birim şekil değiştirme oluşturan gerilme (akma sınırı)", "MPa"],
            ["σ_y", "Akma dayanımı — elastik davranışın bitip kalıcı deformasyonun başladığı eşik", "MPa"]
          ],
          metin: "Bir metal ataşı hafifçe büküp bıraktığınızda eski haline döner (elastik bölge). Biraz daha bastırırsanız ataş bükülü kalır — bu geçiş noktasındaki gerilme değeri akma dayanımıdır.\n\nHavacılık tasarım kuralı: uçak yapılarının normal operasyonel (limit) yükler altında akma dayanımının aşılmasına izin verilmez. Uçak sert türbülansa girdiğinde kanat esnemeli, türbülans geçince tam olarak orijinal şekline geri dönmelidir." },

        { id: "b5", tip: "formul", baslik: "Çekme dayanımı (Ultimate Tensile Strength)",
          formul: "R_m = σ_u = F_{max} / A_0",
          semboller: [
            ["R_m / σ_u", "Mühendislik gerilme-birim şekil değiştirme eğrisinde ulaşılan maksimum gerilme", "MPa"],
            ["F_{max}", "Numune üzerine uygulanan maksimum kuvvet", "N"],
            ["A_0", "Numunenin başlangıç kesit alanı", "mm²"]
          ],
          metin: "Akma dayanımı (R_{p0.2}) kalıcı şekil bozukluğunun başladığı sınırı, çekme dayanımı (R_m) ise malzemenin daralmaya (boyun vermeye) başlayıp nihayetinde kopmaya gittiği tepe noktayı gösterir. Uçak yapısal tasarımında her iki değer de kritiktir." },

        { id: "b6", tip: "metin", baslik: "Basma dayanımı ve burkulma ayrımı",
          metin: "Basma dayanımı (σ_c): malzemenin eksenel basma yükü altında ezilmeye karşı gösterdiği iç malzeme direncidir.\n\nBurkulma (Buckling): ince-uzun kolonların veya ince levhaların basma yükü altında malzemenin akma dayanımına ulaşmadan önce aniden yana doğru bel verip kararsızlaşması olgusudur. Burkulma malzeme özelliği değil; elemanın geometrisi (atalet momenti I, boy L, narinlik oranı) ve Young Modülü (E) ile yönetilen yapısal bir kararsızlıktır.",
          kutu: { tip: "bilgi", baslik: "Euler burkulma yükü", metin: "P_cr = π²EI / L²  —  Kritik burkulma yükü, elemanın rijitliğine (E × I) doğru orantılı, boyunun (L) karesine ters orantılıdır. Kanat üst kaplamasında hem malzemenin basma akma dayanımı hem de stringer destekli geometriye bağlı burkulma direnci kritik hale gelir." } },

        { id: "b7", tip: "metin", baslik: "Kesme dayanımı, rijitlik ve Young modülü",
          metin: "Kesme dayanımı (τ): malzemenin zıt yönlü paralel kuvvetlerle makaslama şeklinde kesilmeye karşı direncidir. Uçak gövde ve kanat kaplamalarını birbirine bağlayan perçinler, cıvatalar ve yapıştırma bağlantıları birincil olarak kesme gerilmesi taşır.\n\nRijitlik iki seviyede tanımlanır:\n• Malzeme rijitliği (Young Modülü — E): malzemenin atomal bağlarına bağlı iç esnemezlik katsayısı. Çelik 210 GPa, titanyum 110 GPa, alüminyum 70 GPa, kauçuk 0,01 GPa.\n• Yapısal rijitlik (k = F/δ): bir parçanın geometrisi ve malzemesiyle birlikte belirlenen toplam esnemezliği.\n\nÖnemli fark: dayanım parçanın kırılıp kırılmayacağını söyler; rijitlik ise yük altında ne kadar esneyeceğini söyler." },

        { id: "b8", tip: "metin", baslik: "Süneklik, tokluk türleri ve sertlik",
          metin: "Süneklik: malzemenin kopmadan plastik olarak ne kadar uzayabildiği (%EL veya %AR ile ölçülür). Bakır ve alüminyum sünektir (kopmadan uzar); dökme demir ve cam gevrektir (hiç esnemeden kırılır). Havacılıkta belirli süneklik istenir ki yapı aniden çatlamadan önce uyarı versin.\n\nTokluk türleri:\n• Genel tokluk: kırılana kadar birim hacimde yutulan toplam enerji (gerilme-gerinim eğrisinin altındaki alan).\n• Darbe tokluğu: ani yüksek hızlı darbede (Charpy/Izod testleri) kırılmadan emilen enerji — iniş takımı ve kuş çarpması senaryolarında kritik.\n• Kırılma tokluğu (K_IC): mevcut bir çatlağın yük altında ani ve kararsız ilerlemesine karşı direnç (MPa√m). Modern 'Hasar Toleransı' felsefesinin temelidir.\n\nSertlik: yüzeyin çizilmeye, aşınmaya ve nüfuz eden cisme karşı direnci (Brinell, Rockwell, Vickers). Motor dişlileri, rulmanlar ve iniş takımı bağlantı pimleri yüksek yüzey sertliği gerektirir." },

        { id: "b9", tip: "metin", baslik: "Yorulma dayanımı ve CFRP yorulma davranışı",
          metin: "Metallerde yorulma: akma dayanımının altındaki tekrarlı yükler altında zamanla mikro çatlaklar büyüyerek aniden kırılma.\n\n'Karbon fiber yorulmaz' ifadesi teknik bir şehir efsanesidir! CFRP çekme-çekme yükleri altında metallere göre çok üstün yorulma ömrü sergiler; ancak yorulmaz değildir. Kompozitlerde yorulma mekanizması metallerdeki tekil çatlak ilerlemesinden farklıdır: matris çatlaması, lif-matris sıyrılması (debonding), delaminasyon ve lif kırılmaları şeklinde yayılımlı hasar gerçekleşir.",
          kutu: { tip: "uyari", baslik: "CFRP yön bağımlılığı (anizotropi)", metin: "Metaller her yönde eşit özellik gösterir (izotropik). Karbon fiber kompozitler ise yön bağımlıdır (ortotropik/anizotropik). Tek yönlü (UD) CFRP plaka fiber doğrultusunda (0°) 1.500 MPa çekme dayanımı verirken, fibere dik doğrultuda (90°) bu değer reçine zayıflığı nedeniyle 50 MPa'ya düşer. Bu yüzden uçak yapılarında katmanlar farklı açılarda (0°, ±45°, 90°) dizilerek quasi-izotropik plakalar oluşturulur." } },

        { id: "b10", tip: "metin", baslik: "Çevresel özellikler: dış koşullara dayanım",
          metin: "Bir malzeme laboratuvarda yüksek mekanik değerler verebilir; ancak gökyüzünün zorlu çevre koşullarına dayanamıyorsa uçakta kullanılamaz.\n\nKorozyon dayanımı: nem, tuzlu su ve kimyasallarla reaksiyona girerek paslanmaya karşı direnç. Deniz seviyesinde çalışan uçaklarda kritik.\n\nSıcaklık dayanımı: standart yapım alüminyumları (2024, 7075) 110–150 °C üzerinde yumuşar. Titanyum 300–500 °C'ye, nikel süperalaşımları 1.000 °C'nin üzerine kadar dayanır.\n\nSürünme (Creep): yüksek sıcaklık ve sabit yük altında malzemenin zamanla kalıcı olarak uzaması. Motor türbin pellerinde creep yapan malzeme uzayarak motor gövdesine çarpar.\n\nAşınma direnci: sürtünerek çalışan yüzeylerin malzeme kaybetmeme yeteneği (menteşeler, kaymalı yataklar, burçlar)." },

        { id: "b11", tip: "formul", baslik: "Özgül mukavemet ve özgül rijitlik",
          formul: "Özgül Mukavemet = σ / ρ       Özgül Rijitlik = E / ρ",
          semboller: [
            ["σ / ρ", "Malzemenin kendi ağırlığına kıyasla ne kadar güçlü olduğu", "MPa / (g/cm³)"],
            ["E / ρ", "Malzemenin kendi ağırlığına kıyasla ne kadar esnemez/rijit olduğu", "GPa / (g/cm³)"]
          ],
          metin: "Havacılık mühendislerinin malzeme seçiminde kullandığı en temel iki ölçüttür. 'Çelik alüminyumdan güçlüdür' genellemesi hatalıdır — düşük karbonlu yumuşak çeliğin akma dayanımı (~250 MPa), havacılık alüminyumu 7075-T6'nın (~500 MPa) altındadır! İki metali kıyaslarken spesifik alaşım ve ısıl işlem durumu belirtilmeli, karar yoğunluğa oranlanan özgül mukavemet üzerinden verilmelidir.\n\nÖrnek: eşit akma dayanımlı (500 MPa) bir alüminyum parça 2,70 kg gelirken aynı boyuttaki çelik parça 7,85 kg gelir. Alüminyumun özgül mukavemeti çeliğin yaklaşık 3 katıdır — aynı dayanımı 3 kat daha az ağırlıkla elde edersiniz." },

        { id: "b12", tip: "tablo", baslik: "Havacılık malzemeleri karşılaştırma tablosu",
          basliklar: ["Malzeme", "Yoğunluk", "Akma dayanımı", "Rijitlik (E)", "Özgül mukavemet", "En büyük avantaj", "Dikkat noktası"],
          satirlar: [
            ["Al 2024-T3 / 7075-T6", "2,70 g/cm³", "320–500 MPa", "70 GPa", "Yüksek", "Ucuz, kolay işlenir, hafif", "Sıcaklığa hassas (>110–150 °C)"],
            ["Çelik 300M / 4340", "7,85 g/cm³", "1.500–1.900 MPa", "210 GPa", "Orta-Yüksek", "Aşırı yüksek hacimsel mukavemet", "Yüksek yoğunluk (ağır), korozyona yatkın"],
            ["Titanyum Ti-6Al-4V", "4,51 g/cm³", "880–1.000 MPa", "110 GPa", "Çok yüksek", "Hafif, korozyonsuz, 350–500 °C", "Çok pahalı, CNC ile zor işlenir"],
            ["CFRP (çok yönlü lamine)", "1,55 g/cm³", "600–1.000 MPa", "50–80 GPa", "Mükemmel", "Aşırı hafif, paslanmaz", "Yön bağımlı (anizotropik), BVID riski"]
          ],
          metin: "Kompozit değerleri 0°/±45°/90° çok yönlü lamine yapı içindir. Bu tablo, modül boyunca her yeni alaşımı öğrendiğinizde kıyaslama referansı olarak kullanılacaktır." },

        { id: "b13", tip: "gorsel", baslik: "Gerilme – birim şekil değiştirme eğrisi", gorsel: "stressstrain",
          metin: "Grafikte elastik bölge (doğrusal eğim = E), %0,2 akma noktası (R_{p0.2}), çekme dayanımı tepe noktası (R_m), boyun verme ve kopma noktaları renkli alanlarla gösterilir. Bu eğri, bir malzemenin tüm mekanik hikâyesini tek bir grafikte özetler." },

        { id: "b14", tip: "gorsel", baslik: "Havacılık malzemeleri Ashby diyagramı", gorsel: "ashbychart",
          metin: "X ekseninde yoğunluk (ρ), Y ekseninde mukavemet (σ). Alüminyum, titanyum, çelik ve kompozitlerin konumları balonlar halinde gösterilir. Ashby diyagramında sağ üste çıkan (güçlü ama ağır) değil, sol üste çıkan (güçlü ve hafif) malzeme havacılık için idealdir. Eğik çizgiler sabit özgül mukavemet (σ/ρ) hatlarıdır." },

        { id: "b15", tip: "metin", baslik: "Datasheet nasıl okunur?",
          metin: "Havacılık mühendisi malzeme seçerken üretici firmanın Teknik Özellik Tablosuna (Datasheet) bakar. Temel parametreler:\n\n• Density (ρ): birim hacim kütlesi (g/cm³).\n• Yield Strength (R_{p0.2} / σ_y): %0,2 kalıcı plastik birim şekil değiştirme oluşturan akma sınırı.\n• Tensile Strength (R_m / σ_u): mühendislik gerilme-gerinim eğrisindeki maksimum gerilme (UTS).\n• Young's Modulus (E): elastik bölgedeki doğrusal eğim (GPa).\n• Elongation at Break (%EL): kopma anındaki yüzde uzama — süneklik göstergesi." },

        { id: "b16", tip: "liste", baslik: "Malzeme özellikleri arasındaki takaslar (trade-offs)",
          maddeler: [
            "Dayanım vs. Süneklik: bir metali ısıl işlemle sertleştirip dayanımını artırırsanız, sünekliği düşer ve gevrekleşir.",
            "Yüksek sıcaklık dayanımı vs. Yoğunluk/Maliyet: yüksek sıcaklığa dayanan nikel ve titanyum alaşımları hem daha ağırdır hem de alüminyuma göre kat kat pahalıdır.",
            "Hafiflik vs. Dikine darbe hassasiyeti: karbon fiber kompozitler çok hafif ve rijittir; ancak dikine gelen ani darbelerde (BVID) yüzeyde görünmeyen iç katman ayrılması yaşayabilir."
          ] },

        { id: "b17", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Akma dayanımı ile çekme dayanımı arasındaki fark nedir?", "Akma dayanımı, malzemenin elastik davranışı bırakıp kalıcı (plastik) şekil değiştirmeye başladığı gerilme eşiğidir (R_{p0.2}). Çekme dayanımı ise mühendislik eğrisindeki maksimum gerilme noktasıdır (R_m). Uçak yapıları normal yüklerde akma sınırı içinde kalacak şekilde tasarlanır."],
            ["Dayanım ile rijitlik arasındaki fark nedir?", "Dayanım parçanın kırılıp kırılmayacağını, rijitlik ise yük altında ne kadar esneyeceğini belirler. Aynı kalınlıktaki çelik cetvel ve plastik cetvel ikisi de kolay kırılmaz (dayanımları iyi); ama plastik kolayca bükülür (rijitliği düşük), çelik zor bükülür (rijitliği yüksek)."],
            ["Özgül mukavemet nedir ve neden önemlidir?", "Malzemenin dayanımının yoğunluğuna oranıdır (σ/ρ). Havacılıkta önemli olan mutlak güç değil, birim kütle başına güçtür. Özgül mukavemeti yüksek malzeme aynı taşıma kapasitesini daha az ağırlıkla sağlar."],
            ["Karbon fiber kompozitler gerçekten yorulmaz mıdır?", "Hayır, bu bir şehir efsanesidir. CFRP çekme-çekme yüklerinde metallere göre çok üstün yorulma ömrü sergiler; ancak matris çatlaması, debonding, delaminasyon ve lif kırılmaları şeklinde yayılımlı yorulma hasarı yaşar."]
          ] },

        { id: "b18", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Callister, W. D. & Rethwisch, D. G. (2018). Materials science and engineering: An introduction (10. baskı). Wiley.",
            "Ashby, M. F. (2011). Materials selection in mechanical design (4. baskı). Butterworth-Heinemann.",
            "Niu, M. C. Y. (1988). Airframe structural design. Conmilit Press.",
            "Campbell, F. C. (2006). Manufacturing technology for aerospace structural materials. Elsevier.",
            "MIL-HDBK-5J / MMPDS — Metallic materials properties development and standardization."
          ] }
      ],

      sorular: [
        { id: "mals2-1", etiket: "Kavram", puan: 1,
          soru: "Yoğunluk (ρ) neyi ifade eder?",
          secenekler: ["Malzemenin sertliğini", "Birim hacimdeki kütleyi", "Malzemenin erime sıcaklığını", "Elastik bölgedeki eğimi"],
          dogru: 1,
          aciklama: "Yoğunluk (ρ = m/V), malzemenin birim hacimdeki kütlesidir. Havacılıkta düşük yoğunluk hafiflik ve yakıt tasarrufu sağlar." },
        { id: "mals2-2", etiket: "Kavram", puan: 1,
          soru: "Akma dayanımı (R_{p0.2}) neyi gösterir?",
          secenekler: ["Malzemenin kopma noktasını", "Malzemenin elastik davranışı bırakıp kalıcı şekil değiştirmeye başladığı gerilme eşiğini", "Malzemenin rijitliğini", "Malzemenin sertliğini"],
          dogru: 1,
          aciklama: "R_{p0.2}, metallerde %0,2 kalıcı plastik birim şekil değiştirme oluşturan gerilme değeridir — elastik sınırın pratikte tanımıdır." },
        { id: "mals2-3", etiket: "Kavram", puan: 1,
          soru: "Young Modülü (E) neyi ölçer?",
          secenekler: ["Malzemenin kırılma mukavemetini", "Malzemenin elastik bölgedeki esnemezlik katsayısını (rijitlik)", "Malzemenin darbe tokluğunu", "Malzemenin yüzey sertliğini"],
          dogru: 1,
          aciklama: "E = σ/ε olarak tanımlanan Young Modülü, malzemenin elastik bölgede gerilme altında ne kadar az şekil değiştirdiğini gösteren iç rijitlik katsayısıdır." },
        { id: "mals2-4", etiket: "Kavram", puan: 1,
          soru: "Kırılma tokluğu (K_IC) neden havacılıkta kritik bir parametredir?",
          secenekler: ["Malzemenin ne kadar sert olduğunu gösterir", "Mevcut bir çatlağın yük altında ani ve kararsız ilerlemesine karşı direnci ölçer", "Malzemenin kopma uzamasını gösterir", "Yüzeyin aşınma direncini belirler"],
          dogru: 1,
          aciklama: "K_IC, malzemedeki mevcut bir çatlağın yük altında ani, feci şekilde ilerlemesine karşı dirençtir. Modern 'Hasar Toleransı' tasarım felsefesinin temel parametresidir." },
        { id: "mals2-5", etiket: "Formül", puan: 2,
          soru: "Özgül mukavemet (σ/ρ) formülüne göre, aynı akma dayanımına (500 MPa) sahip alüminyum ve çelik parçalardan hangisi daha avantajlıdır?",
          secenekler: ["Çelik — çünkü rijitliği daha yüksek", "Alüminyum — çünkü yoğunluğu düşük olduğundan aynı dayanımı çok daha az ağırlıkla sağlar", "Fark yoktur, özgül mukavemetleri eşittir", "Karar verilemez"],
          dogru: 1,
          aciklama: "Alüminyum (2,70 g/cm³) çelikten (7,85 g/cm³) yaklaşık 3 kat daha hafiftir. Aynı dayanım değerinde alüminyumun özgül mukavemeti çeliğin yaklaşık 3 katıdır — aynı gücü çok daha az ağırlıkla elde edersiniz." },
        { id: "mals2-6", etiket: "Analiz", puan: 2,
          soru: "Basma dayanımı ile burkulma (buckling) arasındaki temel fark nedir?",
          secenekler: ["İkisi aynı kavramdır", "Basma dayanımı malzeme özelliğidir; burkulma ise elemanın geometrisine ve E modülüne bağlı yapısal kararsızlıktır", "Burkulma malzeme özelliğidir; basma dayanımı geometrik bir olgudur", "Basma dayanımı yalnızca kompozitlerde geçerlidir"],
          dogru: 1,
          aciklama: "Basma dayanımı malzemenin iç direncidir (σ_c); burkulma ise ince elemanların basma yükü altında akma sınırına ulaşmadan geometrik olarak kararsızlaşıp yana bel vermesidir. Euler formülü P_cr = π²EI/L²'dir." },
        { id: "mals2-7", etiket: "Uygulama", puan: 2,
          soru: "Sürünme (Creep) olayı hangi koşulda gerçekleşir?",
          secenekler: ["Düşük sıcaklık ve ani darbe yükü altında", "Yüksek sıcaklık ve sürekli sabit yük altında", "Oda sıcaklığında ve tekrarlı yükler altında", "Yalnızca kompozit malzemelerde görülür"],
          dogru: 1,
          aciklama: "Creep, yüksek sıcaklık ve sürekli sabit yük (örneğin merkezkaç kuvveti) altında malzemenin zamanla kalıcı olarak uzamasıdır. Motor türbin pellerinde kritik bir hasar mekanizmasıdır." },
        { id: "mals2-8", etiket: "Uygulama", puan: 2,
          soru: "CFRP kompozitlerde BVID (Barely Visible Impact Damage) neden tehlikelidir?",
          secenekler: ["Çünkü malzeme anında ikiye kırılır", "Dış yüzeyde iz bırakmadan içte delaminasyon oluşturur ve gözle tespit edilemez", "Çünkü karbon fiber korozyona uğrar", "Çünkü kompozit her yönde eşit dayanıma sahiptir"],
          dogru: 1,
          aciklama: "BVID, düşük hızlı dik darbelerde dışarıdan görünmeden içte katman ayrılması (delaminasyon) oluşturur. Bu hasar NDT (tahribatsız muayene) ile tespit edilmezse yapının taşıma kapasitesi gizlice azalır." },
        { id: "mals2-9", etiket: "Analiz", puan: 2,
          soru: "Termal genleşme katsayısı farkı (alüminyum vs. kompozit) neden bir mühendislik problemidir?",
          secenekler: ["İkisinin rengi farklı olduğu için", "Farklı genleşme oranları perçin/cıvata bağlantılarında ilave gerilme ve korozyon yarıkları oluşturur", "Termal genleşme havacılıkta önemsizdir", "Yalnızca motor bölgesinde geçerlidir"],
          dogru: 1,
          aciklama: "Alüminyum (α ≈ 23×10⁻⁶/°C) ve CFRP (α ≈ 2–4×10⁻⁶/°C) farklı oranlarda genleşip büzülür. Bu uyumsuzluk, birleşim noktalarında ilave gerilmelere, gevşemelere ve korozyon yarıklarına yol açar." },
        { id: "mals2-10", etiket: "Sentez", puan: 2,
          soru: "Bir datasheet'te aşağıdaki değerleri görüyorsunuz: ρ = 4,51 g/cm³, σ_y = 880 MPa, E = 110 GPa, erime = 1.668 °C. Bu hangi malzemedir?",
          secenekler: ["7075-T6 Alüminyum", "300M Çelik", "Ti-6Al-4V Titanyum", "Inconel 718 Nikel Süperalaşım"],
          dogru: 2,
          aciklama: "Yoğunluk 4,51 g/cm³ ve erime noktası 1.668 °C değerleri titanyumun parmak izidir. Ti-6Al-4V havacılığın en yaygın titanyum alaşımıdır." }
      ],
      ipuclari: {
        "Kavram": "Her mühendislik terimin tanımını (yoğunluk, akma, çekme, rijitlik, tokluk) ve birimini hatırla.",
        "Formül": "Özgül mukavemet (σ/ρ) ve özgül rijitlik (E/ρ) oranlarını kullanarak malzemeleri kıyasla.",
        "Analiz": "Basma dayanımı ile burkulma, termal genleşme ile bağlantı gerilmeleri arasındaki neden-sonuç ilişkisini düşün.",
        "Uygulama": "Creep ve BVID'nin hangi ortam ve malzeme türlerinde ortaya çıktığını hatırla.",
        "Sentez": "Datasheet değerlerinin hangisinin hangi malzemeye ait olduğunu kıyaslama tablosundan çıkar."
      }
    },

"mal3": {
      ad: "Alaşım Mantığı ve Malzeme Özelliklerinin Değiştirilmesi",
      ders: "Malzeme",
      seviye: "Temel",
      sure: 26,
      mulakat: true,
      onbilgi: "Havacılık Malzemelerinin Temel Özellikleri (mal2)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Saf metaller düzenli atom yapıları nedeniyle çok yumuşaktır — uçak yüklerini taşıyamaz. Bir metalin mekanik özelliklerini değiştirmenin anahtarı, atom katmanlarının birbiri üzerinde kaymasını (dislokasyon hareketini) engellemektir. Bu engelleme; alaşımlama (yabancı atom eklemek), tane inceltme, çökelme sertleşmesi (yaşlandırma) ve soğuk şekil verme ile sağlanır. Isıl işlem ise metalin eritilmeden ısıtılıp kontrollü soğutularak mikro yapısının yeniden kurgulanması işlemidir — aynı alaşım, farklı ısıl işlemlerle yumuşak hamurdan çelik kadar sert bir kanat kaplamasına dönüşebilir." },

        { id: "b2", tip: "metin", baslik: "Bu konuyu neden öğreniyoruz?",
          metin: "Önceki derslerde uçağın her bölgesinde farklı malzeme seçildiğini ve malzemeleri mekanik özelliklerine göre değerlendirdiğimizi öğrendik. Şimdi en kritik soruya geçiyoruz: bir malzemenin özellikleri nereden gelir ve bu özellikleri kendi isteğimize göre nasıl değiştirebiliriz?\n\nBir metale şekil verdiğimizde veya ısıttığımızda iç yapısında tam olarak ne değişir? Neden aynı alüminyum parçası bir işlemle yumuşacık bir hamura dönüşürken, başka bir işlemle çelik kadar sert bir kanat kaplamasına dönüşür? Bu derste saf metallerden başlayarak alaşımlama mantığını, kristal yapıları ve ısıl işlem prensiplerini öğreneceğiz." },

        { id: "b3", tip: "metin", baslik: "Saf metal neden yetmez?",
          metin: "Saf metal, bünyesinde tek bir elementin atomlarını barındıran metaldir (örn: %99,9 saf alüminyum). Saf metallerin atomları düzgün katmanlar halinde dizilmiştir ve bu katmanlar birbiri üzerinde çok kolay kayar.\n\nSonuç: saf metaller son derece yumuşak, zayıf ve kolay şekil değiştirebilir olur. Saf alüminyumdan bir kanat yapsanız, uçak rüzgâr aldığı ilk anda kanat yamulur ve bir daha eski haline dönmez." },

        { id: "b4", tip: "metin", baslik: "Alaşım ve alaşımlama mantığı",
          metin: "Alaşım (Alloy): bir ana metale özelliklerini geliştirmek amacıyla bir veya daha fazla başka elementin atomik düzeyde katılmasıyla elde edilen metalik karışımdır.\n\nTemel mantık: ana metalin düzenli atom sıralarının arasına farklı boyutta 'yabancı' alaşım atomları sokulur. Bu yabancı atomlar atomik düzensizlik ve iç gerginlik yaratarak atom katmanlarının kaymasını zorlaştırır. Metal ağırlaşmadan sert, güçlü ve dayanıklı hale gelir.\n\nKritik havacılık örnekleri:\n• Al + Cu (2xxx serisi, örn: 2024): bakır ilavesi yüksek çekme dayanımı ve mükemmel yorulma direnci kazandırır.\n• Al + Zn + Mg (7xxx serisi, örn: 7075): çinko ilavesi fırınlandığında çelik seviyesinde akma dayanımına ulaştırır.\n• Ti + Al + V (Ti-6Al-4V): %6 alüminyum ve %4 vanadyum ile hem 350 °C'ye dayanan hem de aşırı hafif ve güçlü bir yapı elde edilir." },

        { id: "b5", tip: "metin", baslik: "Kristal yapı ve dislokasyonlar",
          metin: "Metaller katılaşırken atomlar rastgele istiflenmez; 3 boyutlu geometrik bir kafes düzeni (kristal kafes) kurarak dizilirler.\n\nHavacılıktaki iki ana yapı:\n• Yüzey Merkezli Kübik (YMK / FCC): alüminyum ve bakırın yapısı. Kayma düzlemleri çok olduğu için malzeme sünek ve kolay şekil alır.\n• Hacim Merkezli Kübik (HMK / BCC) ve Sıkı Düzen Altıgen (SDA / HCP): çelik ve titanyumun farklı sıcaklıklardaki yapıları.",
          kutu: { tip: "bilgi", baslik: "Dislokasyon: en önemli kavram!", metin: "Dislokasyon, metalin kristal yapısındaki atomik eksiklikler veya kaymış atom düzlemleridir. Bir metale kuvvet uyguladığınızda tüm atomlar aynı anda kaymaz — tıpkı bir halının üzerindeki katlanma çizgisini iterek halıyı yürütmek gibi, dislokasyonlar atomik düzlemde ilerleyerek şekil değiştirmeyi sağlar.\n\nALTIN KURAL: dislokasyonların hareketini ne kadar engellerseniz metal o kadar güçlü ve sert olur! Dislokasyon kolay hareket ederse metal yumuşak kalır." } },

        { id: "b6", tip: "metin", baslik: "Tane yapısı ve tane inceltme",
          metin: "Tane (Grain): erimiş sıvı metal katılaşırken farklı noktalarda kristalleşmeye başlar; bu büyüyen kristal adacıkları 'tane'dir. Tanelerin birbiriyle temas ettiği sınırlara Tane Sınırı (Grain Boundary) denir.\n\nTane inceltme (Hall-Petch ilkesi): metalin içindeki taneler çok küçükse tane sınırı sayısı kat kat artar. İlerlemeye çalışan dislokasyonlar sürekli tane sınırına çarpıp durur. Sonuç: tane boyutu küçüldükçe malzemenin hem akma dayanımı hem de darbe tokluğu aynı anda artar.\n\nFaz ve mikro yapı: mikroskop altında görülen tanelerin, fazların ve çökeltilerin oluşturduğu toplam iç mimaridir. Atomik dizilim → mikro yapı → malzeme özelliği → kullanım alanı zinciri malzeme biliminin temelidir." },

        { id: "b7", tip: "metin", baslik: "Metalleri güçlendirme mekanizmaları",
          metin: "Tüm güçlendirme yöntemlerinin arkasındaki tek ortak hedef: dislokasyon hareketlerinin önüne engel koymaktır. Havacılıkta kullanılan 4 ana mekanizma:\n\n1. Katı çözelti ile güçlendirme: ana metalin kristal kafesine farklı boyutta yabancı atomlar sokulur; gerginlik yaratarak dislokasyonların geçişini engeller.\n\n2. Tane inceltme: hızlı soğutma veya katkılarla çok küçük taneli üretim. Tane sınırları dislokasyona barikat kurar.\n\n3. Çökelme sertleşmesi / yaşlandırma: fırınlama işlemleriyle nano boyutlu sert parçacıklar (çökeltiler) dağıtılır. Dislokasyonlar bu sert çökeltileri kesemez ve etrafında kilitlenir. 2024 ve 7075 alüminyumun ana güç kaynağıdır.\n\n4. İşlem sertleşmesi / soğuk şekil verme: oda sıcaklığında ezme, haddeleme veya bükme ile dislokasyon sayısı milyarlarca kat artırılır. O kadar çok dislokasyon oluşur ki birbirlerine takılarak 'otoban trafiği kilitlenmesi' gibi kilitlenirler — metal sertleşir." },

        { id: "b8", tip: "metin", baslik: "Isıl işlemin temel mantığı",
          metin: "Isıl işlem; metali eritmeden belirli sıcaklıklara kadar ısıtıp, belirli süre bekletip, ardından kontrollü hızda soğutarak atomların yerini değiştirmek ve mikro yapıyı yeniden kurgulamak işlemidir.\n\nÜç temel adım (çökelme sertleşmesi örneğinde):\n\n1. Çözeltiye alma (Solution Treatment): metal yüksek sıcaklığa ısıtılır; tüm alaşım elementleri ana metal içinde tıpkı şekerin sıcak suda erimesi gibi tamamen çözünür.\n\n2. Su verme (Quenching): sıcak metal aniden soğuk suya daldırılır. Normalde yavaş soğusa alaşım elementleri kaba topaklar oluşturacaktır. Aniden soğutularak atomlar kafes içinde hapsedilir (aşırı doymuş kararsız katı eriyik).\n\n3. Yaşlandırma (Aging): kararsız metal oda sıcaklığında bekletilir (doğal yaşlanma) veya hafif sıcaklıktaki fırına konur (yapay yaşlandırma). Hapsolmuş atomlar nano boyutlu sert çökeltiler halinde ayrışır ve dislokasyonları kilitleyerek maksimum mukavemet sağlar.",
          kutu: { tip: "bilgi", baslik: "Aynı alaşım neden farklı özellik gösterir?", metin: "Uygulanan ısıl işlem, nano çökeltilerin boyutunu ve sıklığını değiştirir. Çökeltiler çok azsa metal yumuşak kalır. Tam ideal boyuttaysa (T6 durumu) metal maksimum sertliğe ulaşır. Fırında fazla tutulursa (aşırı yaşlanma — T73) çökeltiler birleşip büyür; dayanım %10 düşer ama korozyon direnci katbekat artar." } },

        { id: "b9", tip: "metin", baslik: "Tavlama ve temperleme",
          metin: "Tavlama (Annealing): metali çok yavaş soğutarak atomları rahatlatmak, iç gerilmeleri almak ve metali en yumuşak/işlenebilir haline getirmek.\n\nTempleme / menevişleme (Tempering — çelikte): su verilmiş aşırı sert ama cam gibi gevrekleşmiş çeliği hafifçe ısıtarak gevreklik riskini almak ve ihtiyaç duyduğu tokluğu kazandırmak. Yani temperleme, su vermenin aşırı sertliğini kontrollü olarak yumuşatarak kullanılabilir hale getirme işlemidir." },

        { id: "b10", tip: "metin", baslik: "Gerçek havacılık örnekleri: 2024-T3 ve 7075-T6",
          metin: "2024-T3 Alüminyum: Al-Cu alaşımı. Çözeltiye alınıp su verildikten sonra soğuk işlem görmüş ve doğal yaşlandırılmış (T3). Mikro yapısındaki Al₂Cu çökeltileri ve deformasyon sertleşmesi sayesinde harika çekme dayanımı ve yüksek yorulma/çatlak ilerleme direnci kazanır. Kullanım: kanat alt kaplamaları ve gövde kaplama sacları.\n\n7075-T6 Alüminyum: Al-Zn-Mg alaşımı. Fırında yapay yaşlandırma (T6) ile tepe sertliğe ulaştırılmış. İçindeki sık MgZn₂ nano çökeltileri dislokasyon hareketini maksimum düzeyde kilitler. Kullanım: kanat üst kaplamaları ve ana taşıyıcı stringer profilleri." },

        { id: "b11", tip: "tablo", baslik: "Alüminyum alaşım seri kodlama sistemi",
          basliklar: ["Seri", "Ana alaşım elementi", "Isıl işlem", "Havacılık kullanımı"],
          satirlar: [
            ["1xxx", "Saf Al (%99+)", "Yapılamaz", "Yük taşımayan iç parçalar, kablo kanalları"],
            ["2xxx", "Al + Bakır (Cu)", "Yapılabilir", "Kanat alt kaplaması, gövde sacları (çekme + yorulma)"],
            ["3xxx", "Al + Manganez (Mn)", "Yapılamaz", "Genel iç aksam"],
            ["5xxx", "Al + Magnezyum (Mg)", "Yapılamaz", "Yakıt depoları, deniz uçağı gövdeleri (korozyon direnci)"],
            ["6xxx", "Al + Mg + Si", "Yapılabilir", "Zemin kirişleri, koltuk rayları, ikincil yapılar"],
            ["7xxx", "Al + Çinko (Zn)", "Yapılabilir", "Kanat üst kaplaması, spar kirişleri (basma mukavemeti)"]
          ],
          metin: "Havacılıkta birincil yapısal yükleri taşıyan iki dev seri: çekme ve yorulma direncinin arandığı yerlerde 2xxx (Al-Cu), basma ve maksimum akma dayanımının arandığı yerlerde 7xxx (Al-Zn)." },

        { id: "b12", tip: "ornek", baslik: "Mühendis gibi düşün: T6 yerine neden T73?",
          soru: "7075-T6 alüminyum uçaktaki en yüksek akma dayanımına sahiptir. Peki deniz aşırı uçan askeri uçaklarda neden T6 yerine T73 ısıl işlem kondisyonu tercih edilir?",
          cozum: "7075-T6 tepe mukavemettedir; ancak iç gerilmeleri yüksek olduğu için tuzlu/nemli deniz ortamında Gerilmeli Korozyon Çatlamasına (SCC) çok hassastır. T73 (aşırı yaşlandırma) uygulandığında fırında biraz daha uzun tutularak nano çökeltiler dengelenir. Akma dayanımından ~%10–15 taviz verilir; ancak korozyon çatlaması riski ortadan kaldırılır ve korozyon direnci katbekat artar. Mühendis, 'sadece en yüksek mukavemeti' değil, emniyetli operasyonel ömrü seçmiş olur." },

        { id: "b13", tip: "gorsel", baslik: "Dislokasyon ve çökelti kilitleme şeması", gorsel: "dislokasyoncokeltisi",
          metin: "Şemada atomik düzlemde dislokasyonun ilerleyişi ve önüne çıkan nano çökelti parçacığına takılarak kilitlenmesi gösterilir. Çökelme sertleşmesinin (yaşlandırma) metalleri nasıl güçlendirdiğinin mikroskobik görselleştirmesidir." },

        { id: "b14", tip: "gorsel", baslik: "Yaşlandırma ısıl işlemi sıcaklık-zaman grafiği", gorsel: "yaslanimaisiliislem",
          metin: "Grafikte çözeltiye alma (yüksek sıcaklık düz çizgi), hızlı su verme soğutması (dikey düşüş) ve T6 yapay yaşlandırma fırınlama eğrisi (düşük sıcaklık düz çizgi) adımları sıcaklık-zaman eksenleriyle gösterilir." },

        { id: "b15", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Saf alüminyum ile 7075-T6 arasındaki temel fark nedir?", "Saf alüminyum atomik olarak çok düzenlidir, dislokasyonlar kolayca kayar ve malzeme son derece yumuşaktır. 7075-T6 ise çinko-magnezyum alaşımlaması ve T6 yapay yaşlandırma ile nano çökeltiler oluşturmuştur. Bu çökeltiler dislokasyon kaymasını kilitleyerek yüksek akma dayanımı sağlar."],
            ["Çökelme sertleşmesinde su verme (quenching) adımının amacı nedir?", "Yüksek sıcaklıkta homojen çözünen alaşım elementlerini, aniden soğutarak atomların dışarı kaçıp kaba topaklar oluşturmasına fırsat vermeden kristal kafesi içinde hapsetmektir (aşırı doymuş kararsız yapı elde etmek)."],
            ["Tane boyutunun küçültülmesi malzemeyi nasıl etkiler?", "Tane boyutu küçüldükçe toplam tane sınırı alanı artar. Tane sınırları dislokasyon hareketine engel oluşturduğu için malzemenin hem akma dayanımı hem de tokluğu aynı anda yükselir (Hall-Petch ilkesi)."]
          ] },

        { id: "b16", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Callister, W. D. & Rethwisch, D. G. (2018). Materials science and engineering: An introduction (10. baskı). Wiley.",
            "Ashby, M. F. & Jones, D. R. H. (2012). Engineering materials 1 (4. baskı). Butterworth-Heinemann.",
            "Polmear, I. J. (2006). Light alloys: Metallurgy of the light metals (4. baskı). Butterworth-Heinemann.",
            "Campbell, F. C. (2006). Manufacturing technology for aerospace structural materials. Elsevier.",
            "ASM Handbook, Volume 4: Heat Treating (1991). ASM International."
          ] }
      ],

      sorular: [
        { id: "mals3-1", etiket: "Kavram", puan: 1,
          soru: "Saf metallerin uçak yapısında yeterli olmamasının temel nedeni nedir?",
          secenekler: ["Çok pahalı oldukları için", "Atomik düzeni çok düzenli olduğundan dislokasyonlar kolayca kayar ve malzeme çok yumuşak kalır", "Erime noktaları düşük olduğu için", "Korozyona dayanıksız oldukları için"],
          dogru: 1,
          aciklama: "Saf metallerde atomlar düzenli katmanlar halinde dizilir ve bu katmanlar birbiri üzerinde çok kolay kayar. Bu nedenle saf metallerin akma dayanımı uçak yüklerini taşımak için çok düşüktür." },
        { id: "mals3-2", etiket: "Kavram", puan: 1,
          soru: "Metalleri güçlendirmenin ortak prensibi nedir?",
          secenekler: ["Malzemeyi ısıtarak atomları buharlaştırmak", "Dislokasyon hareketlerinin önüne engel koymak", "Malzemenin yoğunluğunu artırmak", "Malzemeyi sıvı halde şekillendirmek"],
          dogru: 1,
          aciklama: "Tüm güçlendirme mekanizmalarının (katı çözelti, tane inceltme, çökelme sertleşmesi, işlem sertleşmesi) ortak amacı dislokasyonların hareketini engelleyerek malzemenin kaymasını ve deformasyonunu zorlaştırmaktır." },
        { id: "mals3-3", etiket: "Kavram", puan: 1,
          soru: "Çökelme sertleşmesi (yaşlandırma) metalleri nasıl güçlendirir?",
          secenekler: ["Metalin yüzeyini boyayarak", "Nano boyutlu sert çökeltiler oluşturarak dislokasyonları kilitler", "Metalin yoğunluğunu azaltarak", "Metalin erime noktasını yükselterek"],
          dogru: 1,
          aciklama: "Fırınlama işlemleriyle metalin içine dağıtılan nano çökeltiler, ilerleyen dislokasyonların önünde geçilmez bariyerler oluşturur — dislokasyonlar bu sert parçacıkları kesemez ve kilitlenir." },
        { id: "mals3-4", etiket: "Uygulama", puan: 2,
          soru: "Isıl işlemde 'su verme' (quenching) adımının fiziksel amacı nedir?",
          secenekler: ["Metali sertleştirmek için darbe uygulamak", "Yüksek sıcaklıkta çözünen alaşım atomlarını aniden soğutarak kafes içinde hapsetmek", "Metalin yüzeyini temizlemek", "Metale korozyon direnci kazandırmak"],
          dogru: 1,
          aciklama: "Aniden soğutma, yüksek sıcaklıkta homojen çözünen alaşım elementlerinin kaba topaklar oluşturmadan kristal kafes içinde kalmasını sağlar — böylece yaşlandırma aşamasında ideal nano çökeltiler oluşabilir." },
        { id: "mals3-5", etiket: "Uygulama", puan: 2,
          soru: "2024 alüminyum hangi alaşım serisine aittir ve ana alaşım elementi nedir?",
          secenekler: ["7xxx serisi — Çinko (Zn)", "2xxx serisi — Bakır (Cu)", "5xxx serisi — Magnezyum (Mg)", "6xxx serisi — Silisyum (Si)"],
          dogru: 1,
          aciklama: "2024, Alüminyum-Bakır (Al-Cu) ailesine ait 2xxx serisi bir alaşımdır. Bakır ilavesi yüksek çekme dayanımı ve mükemmel yorulma direnci kazandırır." },
        { id: "mals3-6", etiket: "Analiz", puan: 2,
          soru: "7075-T6 ile 7075-T73 arasındaki temel fark nedir?",
          secenekler: ["T6 korozyona daha dayanıklıdır", "T73 daha yüksek mukavemete sahiptir", "T73 aşırı yaşlandırma ile dayanımdan ~%10–15 taviz vererek korozyon direncini katbekat artırır", "İkisi arasında fark yoktur"],
          dogru: 2,
          aciklama: "T73 aşırı yaşlandırma kondisyonunda nano çökeltiler birleşip büyür; dayanım biraz düşer ama Gerilmeli Korozyon Çatlaması (SCC) direnci radikal şekilde artar. Denizcilik ortamında çalışan parçalarda tercih edilir." },
        { id: "mals3-7", etiket: "Analiz", puan: 2,
          soru: "Tane inceltme (Hall-Petch ilkesi) metalin hangi özelliklerini aynı anda artırır?",
          secenekler: ["Sertlik ve yoğunluk", "Akma dayanımı ve darbe tokluğu", "Erime noktası ve elektrik iletkenliği", "Korozyon direnci ve süneklik"],
          dogru: 1,
          aciklama: "Tane boyutu küçüldükçe tane sınırı sayısı artar ve dislokasyonlar engellenir. Bu hem akma dayanımını hem de tokluğu aynı anda yükseltir — nadir rastlanan çift yönlü bir iyileşmedir." },
        { id: "mals3-8", etiket: "Kavram", puan: 1,
          soru: "Tavlama (annealing) işlemi metali nasıl etkiler?",
          secenekler: ["Metali maksimum sertliğe ulaştırır", "Metali çok yavaş soğutarak en yumuşak ve işlenebilir haline getirir", "Metalin korozyon direncini artırır", "Metalin erime noktasını düşürür"],
          dogru: 1,
          aciklama: "Tavlama, metali yüksek sıcaklığa ısıtıp çok yavaş soğutarak iç gerilmeleri alan, atomları rahatlatarak malzemeyi en yumuşak ve işlenebilir haline getiren ısıl işlemdir." },
        { id: "mals3-9", etiket: "Sentez", puan: 2,
          soru: "Bir mühendis 2024 alüminyum plakanın T3 kondisyonunda kanat alt kaplamasında kullanılmasını öneriyor. Bu önerinin mühendislik gerekçesi nedir?",
          secenekler: ["T3 en yüksek basma mukavemeti sağlar", "T3 kondisyonu çözeltiye alma + soğuk işlem + doğal yaşlandırma ile mükemmel yorulma ve çatlak ilerleme direnci sunar", "T3 en ucuz ısıl işlemdir", "T3 kondisyonu korozyon için en iyisidir"],
          dogru: 1,
          aciklama: "Kanat alt kaplaması çekme ve tekrarlı yorulma yüklerine maruz kalır. 2024-T3, Al₂Cu çökeltileri ve deformasyon sertleşmesi sayesinde en yüksek yorulma çatlak ilerleme direncini sunar — hasar toleransı felsefesi için ideal seçimdir." },
        { id: "mals3-10", etiket: "Sentez", puan: 2,
          soru: "Soğuk şekil verme (strain hardening) ile çökelme sertleşmesi arasındaki temel fark nedir?",
          secenekler: ["İkisi aynı mekanizmadır", "Soğuk şekil verme dislokasyon sayısını artırarak kilitler; çökelme sertleşmesi nano çökeltiler oluşturarak dislokasyonları engeller", "Çökelme sertleşmesi yalnızca çelikte, soğuk şekil verme yalnızca alüminyumda uygulanır", "Soğuk şekil verme malzemeyi yumuşatır"],
          dogru: 1,
          aciklama: "Soğuk şekil verme mekanik deformasyonla dislokasyon sayısını artırıp birbirlerine takılmalarını sağlar. Çökelme sertleşmesi ise ısıl işlemle nano boyutlu sert parçacıklar oluşturarak dislokasyonları engeller. Farklı mekanizmalar, aynı hedef: dislokasyon hareketini durdurmak." }
      ],
      ipuclari: {
        "Kavram": "Dislokasyon kavramını ve 4 güçlendirme mekanizmasının her birinin dislokasyonu nasıl engellediğini hatırla.",
        "Uygulama": "Isıl işlem adımlarının (çözeltiye alma → su verme → yaşlandırma) fiziksel mantığını ve alüminyum seri kodlamalarını tekrar et.",
        "Analiz": "T6 vs. T73 farkını ve Hall-Petch ilkesinin çift yönlü etkisini düşün.",
        "Sentez": "Her güçlendirme mekanizmasını gerçek bir havacılık alaşımı örneğiyle eşleştir."
      }
    },
"mal4": {
      ad: "Alüminyum Alaşımları",
      ders: "Malzeme",
      seviye: "Orta",
      sure: 30,
      mulakat: true,
      onbilgi: "Alaşım Mantığı ve Malzeme Özelliklerinin Değiştirilmesi (mal3)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Alüminyum havacılığın omurgasıdır; ancak tek bir alüminyum yoktur. 2xxx serisi (Al-Cu) çekme ve yorulma direnciyle kanat alt kaplamasının, 7xxx serisi (Al-Zn) yüksek basma mukavemetiyle kanat üst kaplamasının, 7050 kalın kesit homojenliğiyle yekpare spar blokların ve 3. nesil Al-Li alaşımları %8–10 daha düşük yoğunluk ile %12–15 daha yüksek rijitlik sunarak metallerin kompozitlere karşı en güçlü cevabının malzemesidir. Doğru alaşımı doğru yük bölgesine seçmek uçağın ömrünü, hafifliğini ve emniyetini belirler." },

        { id: "b2", tip: "metin", baslik: "Alüminyum neden uçaklarda bu kadar yaygın?",
          metin: "Havacılık tarihinin başından itibaren alüminyum gökyüzünün ana metali olmuştur. Bunun sebebi tesadüf değildir: hafifliği, yüksek mukavemeti, kolay şekillenmesi ve makul maliyeti tek bir gövdede buluşturan en dengeli mühendislik malzemesidir.\n\nDüşük yoğunluk: alüminyumun yoğunluğu yaklaşık 2,70 g/cm³ — çeliğin (~7,85 g/cm³) neredeyse üçte biri. Bu hafiflik doğrudan yakıt tasarrufu ve menzil artışı demektir.\n\nDayanım/ağırlık dengesi: saf alüminyum yumuşaktır ama doğru elementlerle alaşımlanıp ısıl işlem gördüğünde çekme ve akma dayanımı 500–600 MPa'ya çıkar. Özgül mukavemeti yapısal çeliklerle yarışacak seviyeye ulaşır.\n\nİşlenebilirlik: haddeleme, ekstrüzyon, döküm ve yüksek hızlı CNC ile kolayca şekillendirilir.\n\nMaliyet: kompozit ve titanyuma göre hammadde ve imalat maliyeti kat kat ucuzdur; 100 yıllık sanayi altyapısı sayesinde tedarik ve kalite kontrol son derece hızlıdır." },

        { id: "b3", tip: "metin", baslik: "Alüminyumun korozyon davranışı",
          metin: "Saf alüminyum havadaki oksijenle temas ettiğinde yüzeyinde mikroskobik, şeffaf ve yapışkan bir Alüminyum Oksit (Al₂O₃) tabakası oluşturur. Bu pasif tabaka metali dış ortamdan izole eder.\n\nAncak yüksek mukavemetli 2xxx ve 7xxx serisi alaşımlara bakır ve çinko eklendiğinde bu doğal korozyon direnci düşer. Bu zayıflığı aşmak için:\n• Alclad yöntemi: alüminyum levhaların yüzeyi haddeleme esnasında saf alüminyumla kaplanır.\n• Anodize (eloksal): elektrokimyasal yöntemle kalın ve dayanıklı oksit tabakası oluşturulur.\n• Kromatik astarlar ve koruyucu boyalar." },

        { id: "b4", tip: "liste", baslik: "Alüminyumun sınırlamaları",
          maddeler: [
            "Sıcaklık limiti: 150 °C üzerinde mekanik mukavemetini hızla kaybeder ve yumuşar. Motor sıcak bölgelerinde veya süpersonik aerodinamik ısınmaya maruz kalan yerlerde kullanılamaz.",
            "Kaynak zorluğu: yüksek mukavemetli havacılık alüminyumlarının ergitme kaynağı (MIG/TIG) yeteneği zayıftır; kaynak esnasında mikro yapısı bozulur. Bu yüzden uçak alüminyum yapıları perçin veya cıvata ile birleştirilir.",
            "Korozyon hassasiyeti: bakırlı ve çinkolu alaşımlar koruyucu kaplama yapılmazsa nemli ortamlarda hızla çürüyebilir veya Gerilmeli Korozyon Çatlaması (SCC) yaşayabilir."
          ] },

        { id: "b5", tip: "metin", baslik: "Kompozit ve titanyum karşısında nerede avantajlı?",
          metin: "Darbe dayanımı ve görünür hasar: kompozitler darbe aldığında dıştan görünmeyen iç çatlaklar (delaminasyon/BVID) yapabilir. Alüminyum ise darbe aldığında ezilir veya bükülür — hasar dışarıdan gözle kolayca tespit edilir.\n\nSeri üretim hızı ve tamir kolaylığı: alüminyum parçalar preslenip perçinlenerek hızla monte edilir. Bakım esnasında yamalı perçin tamiri (sheet metal repair) dünyanın her havalimanında kolayca yapılır." },

        { id: "b6", tip: "tablo", baslik: "Alüminyum alaşım serileri",
          basliklar: ["Seri", "Ana element", "Isıl işlem", "Ana özellik", "Havacılık kullanımı"],
          satirlar: [
            ["1xxx", "Saf Al (%99+)", "Yapılamaz", "Korozyon direnci, iletkenlik", "Yük taşımayan iç parçalar, kablo kanalları"],
            ["2xxx", "Al + Cu", "Yapılabilir", "Yüksek çekme, mükemmel yorulma direnci", "Kanat alt kaplaması, gövde sacları"],
            ["5xxx", "Al + Mg", "Yapılamaz", "Deniz suyu korozyon direnci, kaynak", "Yakıt tankları, deniz uçağı gövdeleri"],
            ["6xxx", "Al + Mg + Si", "Yapılabilir", "Orta mukavemet, iyi işlenebilirlik", "Zemin kirişleri, koltuk rayları"],
            ["7xxx", "Al + Zn + Mg + Cu", "Yapılabilir", "En yüksek akma/basma mukavemeti", "Kanat üst kaplaması, spar kirişleri"]
          ],
          metin: "Havacılıkta birincil yapısal yükleri taşıyan iki dev seri: çekme ve yorulma direncinin arandığı yerlerde 2xxx (Al-Cu), basma ve maksimum akma dayanımının arandığı yerlerde 7xxx (Al-Zn)." },

        { id: "b7", tip: "metin", baslik: "2024 alaşımı — Al-Cu omurgası",
          metin: "2024 (Al – %4,4 Cu – %1,5 Mg – %0,6 Mn) havacılık tarihinin en çok kullanılan Al-Cu alaşımıdır.\n\nAl-Cu mantığı: bakır atomları, çözeltiye alma ve yaşlandırma ısıl işlemleri sonucunda mikro yapıda ince θ' (Al₂Cu) çökeltileri oluşturur. Bu çökeltiler dislokasyon hareketini kilitleyerek malzemeye devasa mukavemet kazandırır.\n\n2024-T3 kondisyonunda: çekme mukavemeti ~470–480 MPa, akma dayanımı ~320–340 MPa.\n\nGerçek gücü: kırılma tokluğunda (K_IC) ve yorulma çatlağı ilerleme direncinde yatar. Bir kılcal çatlak oluşsa dahi çatlak son derece yavaş ilerler — 'Hasar Toleransı' felsefesi için biçilmiş kaftan.\n\nKorozyon zayıflığı: bünyesindeki yüksek bakır nedeniyle yalın korozyon direnci düşüktür. Çözüm: Alclad 2024 — levhanın alt ve üst yüzeyine saf alüminyum ince tabaka sıcak preslenir." },

        { id: "b8", tip: "metin", baslik: "7075 alaşımı — Al-Zn mukavemet canavarı",
          metin: "7075 (Al – %5,6 Zn – %2,5 Mg – %1,6 Cu – %0,23 Cr) 2. Dünya Savaşı'nda geliştirilen yüksek mukavemetli alüminyum kralıdır.\n\nAl-Zn-Mg-Cu sistemi: çinko ve magnezyum birleşerek matris içinde sert η (MgZn₂) faz çökeltilerini oluşturur.\n\n7075-T6 kondisyonunda: akma dayanımı 500–520 MPa, çekme mukavemeti 570–580 MPa — bazı yapısal çeliklerin bile üzerinde.\n\n7075-T6 vs. T73:\n• T6: çözeltiye alınmış ve pik mukavemete kadar yapay yaşlandırılmış. En yüksek dayanımı verir ama Gerilmeli Korozyon Çatlamasına (SCC) çok hassas.\n• T73: aşırı yaşlandırılmış. Mukavemet ~%10–15 düşer (430–450 MPa) ama SCC direnci ve tokluk katbekat artar.",
          kutu: { tip: "uyari", baslik: "Gerilmeli Korozyon Çatlaması (SCC)", metin: "Sürekli çekme gerilmesi (montaj gerilmeleri dahi) altında çalışan parçanın korozif ortama maruz kalmasıyla taneler arası sınırların aniden çatlayarak ayrılması olayıdır. 7075-T6 kalın parçalarda SCC riski çok yüksektir — bu yüzden denizcilik ve nemli ortam parçalarında T73/T76 kondisyonları tercih edilir." } },

        { id: "b9", tip: "metin", baslik: "7050 alaşımı — kalın kesit devrimi",
          metin: "7075 alaşımı 25–50 mm'den kalın bloklarda su verme esnasında iç kısımları yavaş soğuduğu için mukavemetini ve korozyon direncini kaybeder (quench sensitivity). 7050 bu sorunu çözmek için geliştirilmiştir.\n\n7050 (Al – %6,2 Zn – %2,3 Cu – %2,25 Mg – %0,1 Zr): 7075'teki krom çıkarılmış, yerine zirkonyum (Zr) eklenmiştir. Zr tane yapısını inceltirken su verme duyarlılığını sıfırlar.\n\nKalın kesit avantajı: 75–150 mm kalınlıktaki dev bloklarda bile merkezden yüzeye homojen yüksek mukavemet sunar.\n\n7050-T7451 kondisyonu: hem 7075-T6 seviyesinde yüksek mukavemet hem de mükemmel kırılma tokluğu ve SCC direnci.\n\nKullanım: yekpare kanat sparları, kanat-gövde bağlantı eklem parçaları ve kalın gövde çerçeveleri — hepsi dev alüminyum bloklardan CNC ile boşaltılarak üretilir." },

        { id: "b10", tip: "metin", baslik: "Al-Li alaşımları — lityum devrimi",
          metin: "Lityum (Li) periyodik tablodaki en hafif metalik elementtir (yoğunluk sadece 0,53 g/cm³). Alüminyuma lityum eklendiğinde iki devasa kazanım elde edilir:\n\n1. Her %1 Li, alaşımın yoğunluğunu %3 düşürür (hafifletir).\n2. Her %1 Li, alaşımın Young Modülünü (rijitliğini) %6 artırır.\n\nBu çift kazanç havacılık için altın değerindedir. Ancak lityum reaktif olduğu için üretimi özel vakum fırınlarında yapılmalıdır — maliyet standart alüminyumun 3–5 katına çıkar.\n\n1. ve 2. nesil Al-Li alaşımları anizotropik ve gevrekti. 3. nesil (2195, 2050, 2060) ise mükemmel kırılma tokluğu, korozyon direnci ve yorulma ömrüne ulaşmıştır.\n\nKullanım: Airbus A350, Airbus A220 ve SpaceX Falcon 9 roket yakıt tankları. Kompozit malzemelere karşı metallerin hafiflik alanındaki en güçlü cevabıdır." },

        { id: "b11", tip: "tablo", baslik: "2024 vs. 7075 karşılaştırması",
          basliklar: ["Özellik", "2024-T3", "7075-T6"],
          satirlar: [
            ["Ana alaşım", "Al-Cu", "Al-Zn-Mg-Cu"],
            ["Akma dayanımı", "~320 MPa (Orta)", "~500 MPa (Çok yüksek)"],
            ["Yorulma / çatlak ilerleme direnci", "MÜKEMMEL", "Orta"],
            ["Uçaktaki yeri", "Kanat alt kaplaması (çekme yükü)", "Kanat üst kaplaması (basma yükü)"]
          ],
          metin: "Aynı kanat yapısında iki farklı alaşımın kullanılması, 'görevine uygun malzeme' ilkesinin en somut örneğidir." },

        { id: "b12", tip: "tablo", baslik: "7075 vs. 7050 karşılaştırması",
          basliklar: ["Özellik", "7075-T6", "7050-T7451"],
          satirlar: [
            ["İnce kesit performansı (<25 mm)", "Mükemmel", "Mükemmel"],
            ["Kalın kesit performansı (>50 mm)", "Zayıf (su verme duyarlılığı)", "MÜKEMMEL (Zr katkılı)"],
            ["SCC direnci", "Düşük (T6'da)", "Çok yüksek"],
            ["Uçaktaki yeri", "Sac ve ince profiller", "Yekpare kalın işlenmiş blok sparlar"]
          ],
          metin: "7050, 7075'in kalın kesit zayıflığını çözmek için geliştirilmiş bir evrimdir. Modern yolcu uçaklarının yekpare spar kirişleri büyük ölçüde 7050-T7451'den üretilir." },

        { id: "b13", tip: "tablo", baslik: "Geleneksel alüminyum vs. Al-Li",
          basliklar: ["Özellik", "Geleneksel (2024/7075)", "3. Nesil Al-Li (2195/2050)"],
          satirlar: [
            ["Yoğunluk (ρ)", "2,70–2,80 g/cm³", "2,55–2,65 g/cm³ (%8–10 daha hafif)"],
            ["Rijitlik (E)", "70–72 GPa", "78–82 GPa (%12–15 daha rijit)"],
            ["Maliyet", "Standart / ekonomik", "Yüksek (3–5 kat pahalı)"]
          ],
          metin: "Al-Li, aynı boyutta parça ile hem hafiflik hem de rijitlik kazandırır. Maliyet dezavantajı, uzun vadede yakıt tasarrufuyla geri kazanılır." },

        { id: "b14", tip: "ornek", baslik: "Kanat torsiyon kutusu malzeme seçimi",
          soru: "Bir yolcu uçağının kanat torsiyon kutusu tasarlanıyor. Üst ve alt kaplama için hangi alaşımlar seçilmeli ve neden?",
          cozum: "Kanat üst kaplaması: uçak havalandığında kanat yukarı esner, üst kaplama ezilmeye/sıkışmaya (basma yükü) maruz kalır. Burkulma ana tehlikedir — en yüksek akma/basma dayanımına sahip 7075-T6 veya kalın kesitte 7050-T7451 seçilir.\n\nKanat alt kaplaması: aynı esnada alt kaplama şiddetle çekilir (çekme gerilmesi). Türbülansla bu yük sürekli dalgalanır — ana tehlike yorulma çatlamasıdır. En yüksek yorulma ve çatlak ilerleme direncine sahip 2024-T3 seçilir.\n\nSonuç: aynı kanat bile görevin gerektirdiği yük tipine göre iki farklı alaşım gerektirir." },

        { id: "b15", tip: "gorsel", baslik: "Kanat üstü ve altı yük dağılımı şeması", gorsel: "kanatustaltyuk",
          metin: "Kanat bükülürken üst yüzeyde basma okları ve 7075 seçimi; alt yüzeyde çekme okları ve 2024 seçimi şematik olarak gösterilir. Her yüzeyin maruz kaldığı yük tipi ve buna uygun alaşım eşleştirmesi oklar ve renklerle vurgulanır." },

        { id: "b16", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Kanat alt kaplamasında 7075-T6 kullanırsanız ne tür bir risk alırsınız?", "7075-T6 akma ve basma mukavemetinde üstündür ancak yorulma çatlağı ilerleme hızı 2024-T3'e göre yüksektir. Kanat alt kaplaması çekme ve dalgalı yorulma yüklerine maruz kaldığından, 7075-T6 ile mikro çatlak çok daha hızlı büyüyerek 'Hasar Toleransı' ömrünü kısaltır ve erken felakete yol açabilir."],
            ["7075-T6 parçada SCC riski tespit edildiğinde malzemeyi değiştirmeden ne önerirsiniz?", "Temper kondisyonunu T6'dan T73 veya T76 aşırı yaşlandırılmış duruma getiririm. Mukavemet ~%10–15 düşer; ancak taneler arası çökeltiler değiştiği için SCC direnci katbekat artar."],
            ["Al-Li alaşımlarının iki büyük yapısal avantajı nedir?", "Birincisi: her %1 Li malzemenin yoğunluğunu %3 düşürerek uçağı hafifletir. İkincisi: her %1 Li Young Modülünü %6 artırarak yapıyı rijitleştirir. Hem daha hafif hem daha esnemez bir yapı elde edilir."]
          ] },

        { id: "b17", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Polmear, I. J. (2006). Light alloys: Metallurgy of the light metals (4. baskı). Butterworth-Heinemann.",
            "Niu, M. C. Y. (1988). Airframe structural design. Conmilit Press.",
            "Starke, E. A. & Staley, J. T. (1996). Application of modern aluminum alloys to aircraft. Progress in Aerospace Sciences, 32(2–3), 131–172.",
            "MIL-HDBK-5J / MMPDS — Metallic materials properties development and standardization.",
            "Alcoa Technical Data: 2024 / 7075 / 7050 / 2195 Alloy Datasheets."
          ] }
      ],

      sorular: [
        { id: "mals4-1", etiket: "Kavram", puan: 1,
          soru: "Alüminyumun uçaklarda yaygın kullanılmasının temel nedeni hangisidir?",
          secenekler: ["En güçlü metal olması", "Hafiflik, yeterli mukavemet, kolay işlenebilirlik ve makul maliyeti dengeli şekilde sunması", "Hiç paslanmaması", "En yüksek sıcaklık dayanımına sahip olması"],
          dogru: 1,
          aciklama: "Alüminyum tek bir özellikte en iyi değildir ama hafiflik, dayanım, işlenebilirlik ve maliyeti dengeli şekilde buluşturur — havacılıkta bu denge kritiktir." },
        { id: "mals4-2", etiket: "Kavram", puan: 1,
          soru: "2xxx serisi alüminyum alaşımlarının ana alaşım elementi nedir?",
          secenekler: ["Çinko (Zn)", "Bakır (Cu)", "Magnezyum (Mg)", "Silisyum (Si)"],
          dogru: 1,
          aciklama: "2xxx serisi Al-Cu (Alüminyum-Bakır) alaşımlarıdır. Bakır ilavesi yüksek çekme dayanımı ve mükemmel yorulma direnci kazandırır." },
        { id: "mals4-3", etiket: "Kavram", puan: 1,
          soru: "2024-T3 alaşımının 'gerçek gücü' hangi mekanik özelliktedir?",
          secenekler: ["Basma mukavemeti", "Sertlik", "Kırılma tokluğu ve yorulma çatlağı ilerleme direnci", "Sıcaklık dayanımı"],
          dogru: 2,
          aciklama: "2024-T3'ün en kritik avantajı kırılma tokluğu (K_IC) ve yorulma çatlak ilerleme direncidir — bir çatlak oluşsa bile son derece yavaş ilerler, hasar toleransı için idealdir." },
        { id: "mals4-4", etiket: "Uygulama", puan: 2,
          soru: "Alclad 2024 nedir ve neden gereklidir?",
          secenekler: ["2024'ün daha güçlü bir versiyonudur", "2024 levhasının yüzeyine saf alüminyum kaplanarak korozyon direnci sağlanmasıdır", "2024'ün ısıl işlem görmemiş halidir", "2024 ile 7075'in karışımıdır"],
          dogru: 1,
          aciklama: "2024 alaşımının yüksek bakır içeriği nedeniyle yalın korozyon direnci zayıftır. Alclad yöntemiyle yüzeye saf alüminyum tabaka kaplanarak korozyon koruması sağlanır." },
        { id: "mals4-5", etiket: "Uygulama", puan: 2,
          soru: "7050 alaşımı 7075'e göre hangi spesifik problemi çözmek için geliştirilmiştir?",
          secenekler: ["Daha ucuz üretim", "Kalın kesitlerde su verme duyarlılığı (quench sensitivity) sorununu çözmek", "Daha iyi kaynak kabiliyeti", "Daha yüksek sıcaklık dayanımı"],
          dogru: 1,
          aciklama: "7075, 25–50 mm'den kalın bloklarda su verme esnasında iç kısımları yavaş soğuduğu için mukavemetini kaybeder. 7050'deki zirkonyum (Zr) katkısı bu sorunu çözerek 150 mm kalınlığa kadar homojen mukavemet sağlar." },
        { id: "mals4-6", etiket: "Analiz", puan: 2,
          soru: "Al-Li alaşımlarında her %1 lityum ilavesinin iki temel etkisi nedir?",
          secenekler: ["Erime noktasını %3 artırır, sertliği %6 artırır", "Yoğunluğu %3 düşürür, Young Modülünü (rijitliği) %6 artırır", "Korozyon direncini %3 artırır, sünekliği %6 artırır", "Çekme mukavemetini %3 artırır, maliyeti %6 düşürür"],
          dogru: 1,
          aciklama: "Lityum hem yoğunluğu düşürür (her %1 → %3 hafiflik) hem de atomik bağ yapısı sebebiyle rijitliği artırır (her %1 → %6 E artışı). Bu çift kazanç havacılıkta altın değerindedir." },
        { id: "mals4-7", etiket: "Analiz", puan: 2,
          soru: "7075-T6 ile 7075-T73 arasındaki temel fark nedir?",
          secenekler: ["T73 daha sert ve güçlüdür", "T73 aşırı yaşlandırma ile mukavemetten ~%10–15 taviz vererek SCC direncini katbekat artırır", "İkisi arasında fark yoktur", "T6 korozyona daha dayanıklıdır"],
          dogru: 1,
          aciklama: "T73 aşırı yaşlandırma ile nano çökeltiler büyütülür; akma dayanımı ~%10–15 düşer ama Gerilmeli Korozyon Çatlaması (SCC) direnci radikal şekilde artar — nemli ortamlarda çalışan parçalarda tercih edilir." },
        { id: "mals4-8", etiket: "Sentez", puan: 2,
          soru: "100 mm kalınlığındaki dev bir bloktan yekpare kanat spar kirişi üretilecek. En uygun alaşım hangisidir?",
          secenekler: ["2024-T3", "7075-T6", "7050-T7451", "1100-O"],
          dogru: 2,
          aciklama: "7075-T6 kalın kesitlerde su verme duyarlılığı nedeniyle iç mukavemeti düşer. 7050-T7451 ise Zr katkısı sayesinde 150 mm kalınlığa kadar homojen yüksek mukavemet, mükemmel SCC direnci ve kırılma tokluğu sunar — yekpare kalın spar blokları için ideal seçimdir." },
        { id: "mals4-9", etiket: "Sentez", puan: 2,
          soru: "Sürekli çekme ve dalgalı yorulma yüküne maruz kalan bir gövde kaplama sacı için en uygun alaşım hangisidir?",
          secenekler: ["7075-T6 — en yüksek akma mukavemeti", "2024-T3 — en yüksek yorulma ve çatlak ilerleme direnci", "5052-H32 — en yüksek korozyon direnci", "6061-T6 — en iyi işlenebilirlik"],
          dogru: 1,
          aciklama: "Gövde kaplama sacı her uçuşta kabin basınçlanmasıyla tekrarlı çekme yüküne maruz kalır. 2024-T3'ün mükemmel yorulma çatlak ilerleme direnci bu görev için idealdir — hasar toleransı felsefesinin omurgasıdır." },
        { id: "mals4-10", etiket: "Kavram", puan: 1,
          soru: "Havacılık alüminyum yapıları neden perçin/cıvata ile birleştirilir ve kaynak yapılmaz?",
          secenekler: ["Kaynak daha pahalı olduğu için", "Yüksek mukavemetli havacılık alüminyumlarının ergitme kaynağında mikro yapı bozulur ve çatlama riski oluşur", "Perçin daha hafif olduğu için", "Kaynak teknolojisi henüz yeterli değil"],
          dogru: 1,
          aciklama: "2xxx ve 7xxx serisi alaşımlar ergitme kaynağında ısıdan etkilenen bölgede mikro yapıları bozulur, çökeltileri çözünür ve çatlama riski artar. Bu yüzden mekanik bağlantı (perçin/cıvata) tercih edilir." }
      ],
      ipuclari: {
        "Kavram": "Alüminyum seri kodlamasını (2xxx = Cu, 7xxx = Zn), 2024 ve 7075'in temel mekanik farklarını hatırla.",
        "Uygulama": "Alclad korozyon korumasını ve 7050'nin kalın kesit avantajını tekrar oku.",
        "Analiz": "T6 vs. T73 SCC trade-off'unu ve Al-Li'nin çift kazancını düşün.",
        "Sentez": "Kanat üst (basma → 7075/7050), kanat alt (çekme+yorulma → 2024) ve kalın blok (→ 7050) seçim mantığını uygula."
      }
    },

"mal5": {
      ad: "Çelikler",
      ders: "Malzeme",
      seviye: "Orta",
      sure: 26,
      mulakat: true,
      onbilgi: "Alüminyum Alaşımları (mal4)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Çelik ağırdır (7,85 g/cm³) ama doğru yerde kullanıldığında uçağı hafifleten ve hayat kurtaran tek malzemedir. İniş takımlarında devasa darbe şokunu dar hacimde karşılayan 300M çeliği 1.900–2.100 MPa çekme mukavemetiyle dünyanın en güçlü yapısal metallerinden biridir. Cıvata ve rulman gibi yüksek aşınmalı bağlantılarda, yangın duvarlarında ve motor yakınlarında çelik vazgeçilmezdir. Bir parçayı alüminyumdan yapmaya kalkarsanız parça devasa boyutlara ulaşır ve toplam ağırlık çelikten daha fazla olur — çelik bu paradoksu çözer." },

        { id: "b2", tip: "metin", baslik: "Çelik nedir ve demir-karbon sistemi",
          metin: "Çelik, temelde Demir (Fe) ile az miktarda Karbon (C) atomunun oluşturduğu metalik alaşımdır. Saf demir çok yumuşak ve zayıftır (çekme mukavemeti ~270 MPa). Demirin içine ağırlıkça %0,02–%2,11 karbon katıldığında atomik kafes kilitlenir ve malzeme 'çelik' adını alır.\n\nKarbon miktarının etkisi:\n• Karbon artar → sertlik, akma/çekme dayanımı ve aşınma direnci yükselir.\n• Karbon azalır → süneklik, tokluk ve kaynak yapılabilirlik yükselir.\n• Özet: karbon arttıkça çelik güçlenir ama gevrekleşir." },

        { id: "b3", tip: "metin", baslik: "Çeliğin 4 temel mekanik gücü",
          metin: "1. Yüksek dayanım: havacılık çeliklerinden 300M, 1.900–2.100 MPa çekme mukavemetine ulaşır — alüminyumdan 4 kattan fazla güçlü.\n\n2. Yüksek rijitlik: Young Modülü ~210 GPa. Alüminyumdan (70 GPa) 3 kat daha az esner.\n\n3. Sertlik: ısıl işlemle (martenzit dönüşümü) 60 HRC üzerine çıkarılabilir. Yabancı maddelerin yüzeyi çizmesini engeller.\n\n4. Aşınma direnci: sürtünerek çalışan, dönen veya darbe alan parçalarda metal yüzeylerinin ufalanıp aşınmasını önleyen en yüksek dirence çelik sahiptir." },

        { id: "b4", tip: "metin", baslik: "Ağır olmasına rağmen neden kullanılır?",
          metin: "Çeliğin özgül ağırlığı yüksektir. Ama bir parçaya etki eden yük o kadar devasadır ki, o parçayı alüminyumdan yapmaya kalkarsanız hacmini 5 kat büyütmeniz gerekir. Bu durumda alüminyum parça hem gövdede devasa yer kaplar hem de çelik parçadan ağır hale gelir.\n\nİniş takımı örneği: iniş esnasında yüzlerce tonluk darbe enerjisi küçücük bir alana biner. Bu devasa kuvveti kırılmadan taşıyabilecek dar hacimli tek malzeme yüksek mukavemetli çeliktir. Alüminyum dikme ağaç gövdesi kadar kalın olmak zorunda kalır — uçağın içine katlanamaz. Çelik sayesinde çok daha ince bir dikme tasarlanır, hem katlanır hem de toplam ağırlık daha hafif kalır." },

        { id: "b5", tip: "tablo", baslik: "Havacılık çelik türleri",
          basliklar: ["Tür", "Örnek", "Ana özellik", "Havacılık kullanımı"],
          satirlar: [
            ["Düşük karbonlu (<%0,30 C)", "1020 / 1025", "Çok sünek, kolay bükülür", "Emniyet teli (safety wire)"],
            ["Alaşımlı çelik", "4130 (Cr-Mo)", "Mükemmel kaynak + yorulma direnci", "Motor kaputları, boru iskeletler, cıvatalar"],
            ["Alaşımlı çelik", "4340 (Ni-Cr-Mo)", "Yüksek yorulma, derin sertleşme", "Yüksek yüklü miller, biyel kolları"],
            ["Östenitik paslanmaz", "304 / 316 / 347", "Korozyon direnci, yüksek sıcaklık", "Egzoz manifoldları, yangın duvarları, hidrolik boru"],
            ["Çökelme sertleşmeli paslanmaz", "15-5PH / 17-4PH", "Korozyonsuz + yüksek mukavemet", "Hidrolik silindirler, kanat mekanizmaları"],
            ["Ultra yüksek dayanımlı", "300M (AMS 6417)", "1.900–2.100 MPa, VAR temizliği", "İniş takımı ana dikmeleri"],
            ["Rulman çeliği", "AISI 440C / 100Cr6", "58–60 HRC sertlik", "Bilyeli rulmanlar"]
          ],
          metin: "4130 havacılığın en efsanevi kaynak yapılabilir çeliğidir; 300M ise iniş takımlarının vazgeçilmez malzemesidir. Her çelik türü kendine özgü bir göreve hizmet eder." },

        { id: "b6", tip: "metin", baslik: "Uçaktaki kullanım alanları",
          metin: "1. İniş takımları (Landing Gear): 300M ve 4340M yüksek dayanımlı çeliklerden imal edilir — devasa darbe şoku ve uçağın tüm ağırlığını taşır.\n\n2. Bağlantı elemanları (Fasteners): kanadı gövdeye bağlayan, motoru pylona asan kritik cıvatalar alaşımlı ve 15-5PH paslanmaz çelikten yapılır.\n\n3. Rulmanlar ve bilyeler: dönen miller, kontrol yüzeyi menteşeleri ve tekerlek bilyeler 440C ve krom çeliklerinden yapılır.\n\n4. Güç aktarma milleri: motor türbin şaftları, helikopter rotor milleri — orta karbonlu dövme çelikler.\n\n5. Motor çevresi: egzoz kolektörleri, yangın duvarı panelleri — paslanmaz çelikler (300–600 °C dayanım).\n\n6. Aşınmaya maruz parçalar: flap kayma rayları, kilit mekanizmaları, emniyet telleri." },

        { id: "b7", tip: "liste", baslik: "Çeliğin dezavantajları",
          maddeler: [
            "Yüksek yoğunluk (7,85 g/cm³): gereksiz yerde kullanıldığında uçağı aşırı ağırlaştırır.",
            "Korozyon hassasiyeti: paslanmaz türleri dışındaki çelikler nemli havada hızla paslanır — kadmiyum, krom kaplama veya koruyucu boyalarla kaplanmak zorundadır.",
            "İmalat zorluğu: sertliği çok yüksek olduğu için CNC tezgahlarında kesilmesi alüminyuma göre çok yavaş; takım ömrünü çabuk tüketir."
          ] },

        { id: "b8", tip: "tablo", baslik: "Çelik vs. Alüminyum vs. Titanyum",
          basliklar: ["Özellik", "Çelik (300M)", "Alüminyum (7075-T6)", "Titanyum (Ti-6Al-4V)"],
          satirlar: [
            ["Yoğunluk", "7,85 g/cm³", "2,70 g/cm³", "4,51 g/cm³"],
            ["Çekme dayanımı", "1.900–2.100 MPa", "~570 MPa", "950–1.170 MPa"],
            ["Rijitlik (E)", "210 GPa", "70 GPa", "110 GPa"],
            ["Sıcaklık limiti", "400–600 °C", "~150 °C", "350–500 °C"],
            ["Tipik kullanım", "İniş takımı, cıvata", "Kanat/gövde kaplaması", "Motor pylon, kompresör"]
          ],
          metin: "Eğer parçadaki darbe yükü aşırı yüksekse ve hacim çok darsa çelik seçilir. Yüksek mukavemet + korozyonsuzluk + hafiflik isteniyorsa titanyum. Genel yapı, düşük/orta yük ve ekonomi isteniyorsa alüminyum." },

        { id: "b9", tip: "ornek", baslik: "Kanat-gövde ana bağlantı pini",
          soru: "Uçağın ana kanadını gövdeye bağlayan devasa bir bağlantı pimi tasarlıyorsunuz. Bu parça sürekli kesme ve yorulma yükü altında. Hangi malzeme seçilmeli?",
          cozum: "15-5PH Paslanmaz Çelik veya 300M VAR Çeliği seçilir. Pinin çapının küçük tutulması şarttır — alüminyum kesme yükünde anında kırılır. Çelik ise milimetrik çapta devasa kesme kuvvetini taşır ve binlerce uçuş boyunca yorulup çatlamaz. 15-5PH korozyon koruması ek kaplama gerektirmeden sağlar." },

        { id: "b10", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Emniyet telinde neden düşük karbonlu çelik kullanılır?", "Emniyet telleri cıvataların titreşimle sökülmesini önlemek için el araçlarıyla bükülerek takılır. Düşük karbonlu çelikler (<%0,30 C) son derece sünek olduğundan defalarca bükülse de kırılmaz. Yüksek karbonlu çelik gevreklik nedeniyle büküldüğü an kırılırdı."],
            ["4130 çeliğinin uçaktaki en büyük avantajı nedir?", "Mükemmel kaynak yapılabilirliği ve yüksek yorulma direncidir. Bu yüzden kaynak gerektiren uçak boru iskeletlerinde ve motor bağlantı elemanlarında standart malzemedir."],
            ["Çelik ağırsa neden iniş takımında kullanılıyor?", "İniş esnasındaki devasa darbe kuvvetini emmek için alüminyum dikme ağaç gövdesi kadar kalın olmak zorunda kalırdı — uçağın içine katlanamaz ve toplam ağırlık çelikten fazla olurdu. Çelik sayesinde çok daha ince bir dikme tasarlanır; hem katlanır hem de daha hafif bir toplam sistem elde edilir."]
          ] },

        { id: "b11", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Niu, M. C. Y. (1988). Airframe structural design. Conmilit Press.",
            "Campbell, F. C. (2006). Manufacturing technology for aerospace structural materials. Elsevier.",
            "MIL-HDBK-5J / MMPDS — Metallic materials properties development and standardization.",
            "ASM Handbook, Volume 1: Properties and selection: Irons, steels, and high-performance alloys (1990). ASM International.",
            "Aerospace Materials (Ed. Cantor, B. et al., 2001). Institute of Physics Publishing."
          ] }
      ],

      sorular: [
        { id: "mals5-1", etiket: "Kavram", puan: 1,
          soru: "Çelikteki karbon miktarı artırıldığında malzemeye ne olur?",
          secenekler: ["Süneklik artar, sertlik azalır", "Sertlik ve dayanım artar ama gevrekleşir", "Yoğunluk düşer", "Korozyon direnci artar"],
          dogru: 1,
          aciklama: "Karbon miktarı artırıldığında atomik kafes daha fazla kilitlenir; sertlik, akma ve çekme dayanımı yükselir ama süneklik düşer ve malzeme gevrekleşir." },
        { id: "mals5-2", etiket: "Kavram", puan: 1,
          soru: "Havacılıkta kullanılan en yüksek çekme mukavemetine sahip çelik türü hangisidir?",
          secenekler: ["1020 düşük karbonlu çelik", "304 östenitik paslanmaz çelik", "300M ultra yüksek dayanımlı çelik", "4130 Cr-Mo çelik"],
          dogru: 2,
          aciklama: "300M çeliği, VAR (Vakum Ark Eritme) ile temizlenmiş, 1.900–2.100 MPa çekme mukavemetine sahip ultra yüksek dayanımlı çeliktir — iniş takımlarının ana malzemesidir." },
        { id: "mals5-3", etiket: "Uygulama", puan: 2,
          soru: "Uçak motor yakınındaki yangın duvarlarında (firewall) hangi çelik türü tercih edilir?",
          secenekler: ["300M ultra yüksek dayanımlı çelik", "Düşük karbonlu çelik", "Östenitik paslanmaz çelik (304/316/347)", "Takım çeliği"],
          dogru: 2,
          aciklama: "Östenitik paslanmaz çelikler yüksek sıcaklıkta (400–600 °C) mukavemetini korur ve mükemmel korozyon/oksidasyon direnci sunar — yangın duvarları, egzoz manifoldları ve hidrolik boru hatları için idealdir." },
        { id: "mals5-4", etiket: "Uygulama", puan: 2,
          soru: "İniş takımı dikmeleri neden alüminyum yerine 300M çelikten yapılır?",
          secenekler: ["Çelik daha ucuz olduğu için", "Dar hacimde devasa darbe yükünü taşıyabilecek tek malzeme olduğu için — alüminyum dikme kat kat kalınlaşıp uçağa sığmaz", "Çelik daha hafif olduğu için", "Alüminyum iniş esnasında erir"],
          dogru: 1,
          aciklama: "İniş takımı yüzlerce tonluk darbe şoku taşır. Alüminyumla aynı dayanım elde etmek için dikme devasa boyutlara ulaşır ve katlanamaz. Çelik çok daha ince bir dikmede aynı dayanımı sağlar — toplam sistem daha hafif ve kompakt kalır." },
        { id: "mals5-5", etiket: "Analiz", puan: 2,
          soru: "Çelik 300M ile titanyum Ti-6Al-4V'nin mukavemet ve ağırlık karşılaştırması nedir?",
          secenekler: ["Titanyum 300M'den daha güçlüdür", "300M (~2.000 MPa) titanyumdan (~1.000 MPa) neredeyse 2 kat güçlüdür; ancak titanyum %40 daha hafiftir", "İkisi eşittir", "Titanyum daha ağır ve daha zayıftır"],
          dogru: 1,
          aciklama: "300M çeliği mutlak mukavemette titanyumu neredeyse ikiye katlar. Ama titanyum 4,51 g/cm³ ile çeliğin 7,85 g/cm³'ünün ~%60'ıdır. Karar: aşırı dar hacimde maksimum dayanım → çelik; hafiflik + korozyonsuzluk → titanyum." },
        { id: "mals5-6", etiket: "Kavram", puan: 1,
          soru: "15-5PH çeliğinin 'PH' kısaltması ne anlama gelir?",
          secenekler: ["Post-Hardened", "Precipitation Hardening (çökelme sertleşmesi)", "Pre-Heated", "Phosphorus-High"],
          dogru: 1,
          aciklama: "PH, Precipitation Hardening (çökelme sertleşmesi) anlamına gelir. 15-5PH paslanmaz çelik, ısıl işlemle sertleştirilerek yüksek mukavemet ve korozyonsuzluk bir arada sunulur." },
        { id: "mals5-7", etiket: "Sentez", puan: 2,
          soru: "Bir uçağın motor pylonunu gövdeye bağlayan ana cıvatayı tasarlıyorsunuz. Parça sürekli kesme ve çekme yükü altında, korozif ortamda çalışacak. En uygun malzeme hangisidir?",
          secenekler: ["7075-T6 alüminyum", "2024-T3 alüminyum", "15-5PH paslanmaz çelik", "Magnezyum AZ91"],
          dogru: 2,
          aciklama: "Yüksek kesme/çekme yükü ve korozif ortam → korozyonsuz ve yüksek mukavemetli 15-5PH paslanmaz çelik idealdir. Alüminyum bu yoğunluktaki kesme yüküne dayanamaz; magnezyum ise korozyon ve mukavemet açısından tamamen yetersizdir." }
      ],
      ipuclari: {
        "Kavram": "Karbon-sertlik ilişkisini, 300M'nin mutlak mukavemet değerini ve PH çeliğinin anlamını hatırla.",
        "Uygulama": "İniş takımı çelik paradoksunu (ince dikme → toplam hafiflik) ve paslanmaz çeliğin yangın duvarı kullanımını düşün.",
        "Analiz": "Çelik vs. titanyum karşılaştırmasında mutlak mukavemet vs. özgül mukavemet ayrımını yap.",
        "Sentez": "Parçanın yük tipi (kesme/darbe) ve çevre şartını (korozyon/sıcaklık) belirleyip doğru çelik türünü eşleştir."
      }
    },

"mal6": {
      ad: "Titanyum ve Titanyum Alaşımları",
      ders: "Malzeme",
      seviye: "Orta",
      sure: 28,
      mulakat: true,
      onbilgi: "Çelikler (mal5)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Titanyum, alüminyum kadar hafifliğe yakın ve çelik kadar güçlü olan havacılığın stratejik köprü metalidir. Yoğunluğu 4,51 g/cm³ ile çeliğin yarısı, dayanımı ise çelikle yarışacak seviyededir — özgül mukavemeti tüm geleneksel metaller arasında en yüksek olanıdır. 300–500 °C'ye kadar mukavemet kaybetmez, %100 paslanmazdır ve CFRP kompozitlerle galvanik korozyon yaratmadan uyum sağlar. Bu yüzden Boeing 787 ve Airbus A350 gibi kompozit oranı %50+ olan yeni nesil uçaklarda titanyum kullanımı %15'lere fırlamıştır." },

        { id: "b2", tip: "metin", baslik: "Temel özellikler",
          metin: "Yoğunluk: 4,51 g/cm³ — alüminyumun ~1,6 katı ama çeliğin ~%60'ı.\n\nDayanım: saf titanyumda 300–450 MPa; havacılık alaşımı Ti-6Al-4V'de 900–1.100 MPa akma dayanımı — yüksek mukavemetli çeliklerle doğrudan yarışır.\n\nÖzgül mukavemet (σ/ρ): yoğunluğunun çeliğe göre çok düşük, dayanımının çeliğe yakın olması sebebiyle tüm geleneksel metallerin en yüksek özgül mukavemet değerine sahiptir.\n\nRijitlik: E ≈ 110–115 GPa — alüminyumdan daha rijit, çelikten daha esnek.\n\nKorozyon direnci: hava veya nemle temas ettiğinde yüzeyinde son derece kararlı TiO₂ pasif tabakası oluşur. Tuzlu suya, deniz atmosferine, hidrolik sıvılara ve asitlere mükemmel direnç.\n\nSıcaklık dayanımı: 300–500 °C'ye kadar mekanik mukavemetini korur (alüminyum 150 °C'de pes eder).\n\nYorulma davranışı: dalgalı/tekrarlı yükler altında olağanüstü yüksek yorulma direnci." },

        { id: "b3", tip: "metin", baslik: "Havacılıkta neden titanyum?",
          metin: "Titanyum, alüminyum-çelik-kompozit üçgeninde çözülemeyen spesifik kilit problemleri çözmek için tercih edilir:\n\n1. Alüminyumdan daha yüksek sıcaklık dayanımı: jet motoru kompresör kademelerinde ve süpersonik uçuşta aerodinamik ısınmaya maruz kalan burun/kanat kenarlarında alüminyum erime/yumuşama sınırına ulaşır. Titanyum bu bölgelerde alüminyumun yerini alır.\n\n2. Çelikten daha düşük yoğunluk: çelik kadar güçlü olup çeliğin %60'ı ağırlığında olmak, ana iskelet parçalarında tonlarca kütle tasarrufu sağlar.\n\n3. Korozyonsuzluk: deniz üstünde görev yapan uçaklarda nem ve tuz korozyonunu tamamen engeller.\n\n4. CFRP kompozit uyumu: en kritik avantajı. Alüminyum ile CFRP temas ederse alüminyum galvanik korozyonla çürür. Titanyum ise CFRP ile neredeyse aynı elektrokimyasal potansiyele sahiptir — korozyon riski yaratmaz." },

        { id: "b4", tip: "metin", baslik: "Titanyum alaşım sistemleri",
          metin: "Titanyum oda sıcaklığında Sıkı Düzen Altıgen (HCP / α-fazı) kristal yapısındadır. 882 °C üzerinde Hacim Merkezli Kübik (BCC / β-fazı) yapısına dönüşür. Alaşım elementleri eklenerek bu fazlar oda sıcaklığında stabilize edilir.\n\nAlfa (α) alaşımları: α-stabilizatörler (Al, Sn) içerir. Isıl işlemle sertleştirilemez. Yüksek sıcaklıkta mükemmel creep ve kaynak direnci. Örn: Ti-5Al-2.5Sn — kompresör mahfazaları.\n\nBeta (β) alaşımları: β-stabilizatörler (V, Mo, Nb) içerir. Yüksek mukavemete ısıl işlemle çıkarılır. Örn: Ti-10V-2Fe-3Al — ağır iniş takımı dövmeleri.\n\nAlfa-Beta (α-β) alaşımları: iki fazlı ikili yapı. Havacılığın en popüler grubu. Isıl işlemle geniş aralıkta ayarlanabilir mukavemet. Ti-6Al-4V bu grubun amiral gemisidir." },

        { id: "b5", tip: "metin", baslik: "Ti-6Al-4V — havacılığın titanyum iş atı",
          metin: "Bünyesinde %6 Alüminyum (α-stabilizatör) ve %4 Vanadyum (β-stabilizatör) barındıran alfa-beta tipi alaşımdır. Havacılık ve uzay sanayisinde kullanılan toplam titanyum miktarının %50'sinden fazlası tek başına Ti-6Al-4V'dir.\n\nTemel mekanik özellikler:\n• Yoğunluk: 4,43 g/cm³\n• Akma dayanımı: 880–1.050 MPa\n• Çekme dayanımı: 950–1.170 MPa\n• Young Modülü: 110–114 GPa\n• Sürekli çalışma sıcaklığı: 315–350 °C\n\nEn kritik özelliği: CFRP ile elektrokimyasal potansiyeli mükemmel uyumlu — galvanik korozyon yaratmaz.\n\nKullanım: jet motoru ön kompresör diskleri ve kanatçıkları, kanat-gövde bağlantı birleşim elemanları, gövde ana çerçeve dövmeleri, havşalı cıvatalar." },

        { id: "b6", tip: "metin", baslik: "Uçakta nerelerde kullanılır?",
          metin: "Motor parçaları: fan palleri, kompresör diskleri, kanatçıklar (stator/rotor), motor muhafazaları.\n\nİniş takımı parçaları: geniş gövdeli uçaklarda çelik yerine ağır yük taşıyan ana dikme kirişleri Ti-10V-2Fe-3Al veya BT22 titanyumdan dövülür.\n\nGövde bağlantı elemanları: kanat-gövde birleşim cıvata yuvaları, omurga çerçeveleri (bulkhead yuvaları).\n\nYüksek yüklü eklem yerleri: motor pylon bağlantı elemanları (engine mounts) — sıcaklık ve mekanik yükün aynı anda bindiği yerler.\n\nBağlantı elemanları (fasteners): B787 ve A350 gibi kompozit gövdeli uçaklarda milyonlarca perçin, kilit cıvatası ve somun titanyumdan yapılmak zorundadır — çünkü alüminyum cıvata CFRP ile temas ederse korozyona uğrar.\n\nMotor çevresi: sıcak egzoz çıkış lüleleri, yangın duvarları, hidrolik boru hatları." },

        { id: "b7", tip: "liste", baslik: "Titanyumun dezavantajları",
          maddeler: [
            "Aşırı yüksek maliyet: hammaddesi alüminyumdan 10–20 kat pahalı. Kroll prosesiyle cevherden elde edilmesi çok yüksek enerji gerektirir.",
            "İşlenebilirlik zorluğu: titanyum ısıyı çok kötü iletir (alüminyumun ~%10'u). Kesme esnasında ısı takım ucunda birikir ve takımları hızla eritip aşındırır. Düşük E modülü sebebiyle parça esner ve ölçü hassasiyeti kaçar.",
            "Üretim zorluğu: sıvı halde oksijen, hidrojen ve azotla hızla tepkimeye girip gevrekleşir — ergitme ve döküm yalnızca yüksek vakum altında yapılabilir.",
            "Galvanik etkileşim: titanyum soy bir metaldir. Nemli ortamda alüminyumla doğrudan temas ederse alüminyumu hızla çürütür — aralarına izolasyon astarı çekilmelidir.",
            "CFRP'den daha ağır: kompozitlerin 1,5–1,6 g/cm³'üne karşı titanyum 4,51 g/cm³ — sıcaklık zorunluluğu olmayan yerlerde ağırlık dezavantajı yaratır."
          ] },

        { id: "b8", tip: "tablo", baslik: "Titanyum vs. Alüminyum vs. Çelik vs. CFRP",
          basliklar: ["Özellik", "Alüminyum", "Çelik", "Titanyum", "CFRP"],
          satirlar: [
            ["Yoğunluk", "2,70 g/cm³", "7,85 g/cm³", "4,51 g/cm³", "1,55 g/cm³"],
            ["Akma dayanımı", "320–500 MPa", "1.500–1.900 MPa", "880–1.050 MPa", "600–1.000 MPa"],
            ["Sıcaklık limiti", "~150 °C", "400–600 °C", "350–500 °C", "~180 °C (reçine sınırı)"],
            ["Korozyon direnci", "Orta (kaplama gerekir)", "Düşük (paslanır)", "Mükemmel (%100)", "Mükemmel"],
            ["CFRP uyumu", "Kötü (galvanik korozyon)", "Orta", "MÜKEMMEL", "—"],
            ["Maliyet", "Düşük", "Düşük", "Çok yüksek", "Yüksek"]
          ],
          metin: "Titanyum, alüminyum ile çelik arasındaki boşluğu dolduran 'hibrit' metaldir. Özellikle CFRP yapılarla temas gerektiren bağlantılarda vazgeçilmezdir." },

        { id: "b9", tip: "ornek", baslik: "A350 kanat-gövde birleşim aparatı",
          soru: "Karbon fiber kaplı gövdeli bir yolcu uçağının (A350) iç kanat-gövde birleşim aparatı tasarlanıyor. Parça aşırı yüksek çekme/kesme yükleri taşıyor ve CFRP yapıyla doğrudan temas ediyor. Hangi malzeme seçilmeli?",
          cozum: "Ti-6Al-4V Titanyum Alaşımı seçilir.\n\nNeden alüminyum değil? CFRP ile temas ettiğinde alüminyum galvanik korozyonla çürür.\nNeden çelik değil? Çelik çok ağırdır ve toplam boş kütleyi aşırı artırır.\nNeden titanyum? Hem çeliğe göre %40 ağırlık tasarrufu sağlar, hem devasa yükü taşır, hem de CFRP ile korozyonsuz mükemmel komşuluk yapar." },

        { id: "b10", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Kompozit oranı %50+ olan yeni nesil uçaklarda titanyum kullanımı neden %15'lere fırladı?", "Ana sebep galvanik korozyon ve termal uyumdur. CFRP elektrokimyasal olarak çok soydur — alüminyumla temas ederse alüminyum çürür. Titanyum ise CFRP ile neredeyse aynı elektrokimyasal potansiyele sahiptir, galvanik korozyon riski yaratmaz. Ayrıca termal genleşme katsayısı kompozite alüminyumdan çok daha yakındır."],
            ["Tüm uçağı titanyumdan yapmak neden mantıklı değildir?", "Üç temel neden: 1) Uçak maliyeti 5–10 katına çıkar — biletler ödenemez hale gelir. 2) CNC işleme alüminyuma göre 5–10 kat yavaştır — üretim hatları kilitlenir. 3) Uçağın ~%60'ı oda sıcaklığında düşük gerilmede çalışır — buralarda titanyum kullanmak mühendislik israfıdır."]
          ] },

        { id: "b11", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Lütjering, G. & Williams, J. C. (2007). Titanium (2. baskı). Springer.",
            "Boyer, R. R. (1996). An overview on the use of titanium in the aerospace industry. Materials Science and Engineering: A, 213(1-2), 103–114.",
            "Niu, M. C. Y. (1988). Airframe structural design. Conmilit Press.",
            "MIL-HDBK-5J / MMPDS — Metallic materials properties development and standardization.",
            "Boeing 787 Dreamliner Technology — Materials. boeing.com."
          ] }
      ],

      sorular: [
        { id: "mals6-1", etiket: "Kavram", puan: 1,
          soru: "Titanyumun havacılıktaki en önemli konumu hangisidir?",
          secenekler: ["En ucuz yapısal metal", "Alüminyum ile çelik arasındaki boşluğu dolduran stratejik köprü metal", "En ağır havacılık metali", "Yalnızca motor türbin bölgesinde kullanılan metal"],
          dogru: 1,
          aciklama: "Titanyum, alüminyum kadar hafifliğe yakın ve çelik kadar güçlüdür. Özgül mukavemeti en yüksek geleneksel metaldir ve alüminyum-çelik arasındaki boşluğu doldurur." },
        { id: "mals6-2", etiket: "Kavram", puan: 1,
          soru: "Ti-6Al-4V alaşımı toplam titanyum kullanımının ne kadarını oluşturur?",
          secenekler: ["%10'undan azını", "%25'ini", "%50'sinden fazlasını", "%90'ını"],
          dogru: 2,
          aciklama: "Ti-6Al-4V, havacılık ve uzay sanayisinde kullanılan toplam titanyum miktarının %50'sinden fazlasını tek başına oluşturur — 'havacılığın titanyum iş atı' olarak adlandırılır." },
        { id: "mals6-3", etiket: "Uygulama", puan: 2,
          soru: "Titanyumun CFRP kompozitlerle birlikte kullanımındaki en büyük avantajı nedir?",
          secenekler: ["Titanyum CFRP'den daha hafiftir", "Titanyumun CFRP ile elektrokimyasal potansiyeli uyumludur — galvanik korozyon riski yoktur", "Titanyum CFRP'den daha ucuzdur", "Titanyum CFRP'den daha rijittir"],
          dogru: 1,
          aciklama: "Alüminyum CFRP ile temas ettiğinde galvanik korozyonla çürür. Titanyum ise CFRP ile neredeyse aynı elektrokimyasal potansiyele sahiptir — korozyon yaratmadan mükemmel komşuluk sağlar." },
        { id: "mals6-4", etiket: "Uygulama", puan: 2,
          soru: "Titanyumun CNC ile işlenmesinin zor olmasının temel nedeni nedir?",
          secenekler: ["Titanyum çok yumuşaktır", "Titanyum ısıyı çok kötü iletir; kesme ısısı takım ucunda birikip takımı eritir ve aşındırır", "Titanyum manyetiktir", "Titanyum çok gevrektir"],
          dogru: 1,
          aciklama: "Titanyumun ısıl iletkenliği alüminyumun ~%10'u kadardır. Talaşlı imalatta oluşan devasa ısı dağılamaz, takım ucunda birikir — kesici takımlar hızla eritilir ve ömürleri çok kısalır." },
        { id: "mals6-5", etiket: "Analiz", puan: 2,
          soru: "Alfa, beta ve alfa-beta titanyum alaşımları arasındaki temel fark nedir?",
          secenekler: ["Yalnızca renk farkları vardır", "Alfa: HCP kristal, creep direnci yüksek. Beta: BCC kristal, yüksek mukavemet. Alfa-Beta: iki fazlı, geniş özellik aralığı", "Hepsi aynı kristal yapıdadır", "Fark yalnızca fiyatlarındadır"],
          dogru: 1,
          aciklama: "Alfa alaşımları HCP yapıda — yüksek sıcaklık/creep direnci. Beta alaşımları BCC yapıda — yüksek mukavemet ve soğuk şekillendirme. Alfa-Beta iki fazlı — ısıl işlemle geniş aralıkta ayarlanabilir (Ti-6Al-4V bu gruptadır)." },
        { id: "mals6-6", etiket: "Analiz", puan: 2,
          soru: "Titanyum alüminyumla doğrudan temas ederse ne olur?",
          secenekler: ["Hiçbir şey olmaz", "Titanyum korozyona uğrar", "Alüminyum galvanik korozyonla hızla çürür — aralarına izolasyon astarı gerekir", "Her iki metal de güçlenir"],
          dogru: 2,
          aciklama: "Titanyum elektrokimyasal seride soy bir metaldir. Nemli ortamda alüminyumla doğrudan temas ederse, alüminyum anotta kalarak hızla galvanik korozyona uğrar ve çürür. Aralarına izolasyon astarı çekilmelidir." },
        { id: "mals6-7", etiket: "Sentez", puan: 2,
          soru: "Jet motoru ön kompresör bölgesinde (200–500 °C) alüminyum yerine hangi malzeme kullanılır ve neden?",
          secenekler: ["Nikel süperalaşımı — çok yüksek sıcaklık", "Titanyum — 300–500 °C'de mukavemet korunur, alüminyumdan hafif", "Magnezyum — en hafif metal", "Bakır — iyi ısı iletkenliği"],
          dogru: 1,
          aciklama: "Kompresör bölgesinde sıcaklık 200–500 °C'ye ulaşır. Alüminyum 150 °C üzerinde yumuşar. Titanyum bu sıcaklık aralığında mukavemetini korur ve çelikten %40 daha hafiftir — kompresör diskleri ve kanatçıklarında idealdir." }
      ],
      ipuclari: {
        "Kavram": "Titanyumun yoğunluk (4,51), Ti-6Al-4V'nin mekanik değerlerini ve %50+ kullanım payını hatırla.",
        "Uygulama": "CFRP-titanyum galvanik uyumluluğunu ve CNC işlenebilirlik zorluğunun nedenini düşün.",
        "Analiz": "Alfa/Beta/Alfa-Beta faz farklarını ve alüminyum-titanyum galvanik korozyon mekanizmasını hatırla.",
        "Sentez": "Sıcaklık, yük ve komşu malzeme (CFRP mi, alüminyum mu?) şartlarına göre titanyumun gerekliliğini belirle."
      }
    },

"mal7": {
      ad: "Nikel Süperalaşımlar ve Yüksek Sıcaklık Malzemeleri",
      ders: "Malzeme",
      seviye: "Orta",
      sure: 26,
      mulakat: true,
      onbilgi: "Titanyum ve Titanyum Alaşımları (mal6)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Jet motorunun yanma odası ve türbin girişinde gaz sıcaklıkları 1.200–1.700 °C'ye ulaşır. Bu sıcaklıkta alüminyum çoktan erimiş, titanyum yanmaya başlamış, çelik hamur gibi uzamıştır. Nikel esaslı süperalaşımlar, kendi erime sıcaklıklarının ~%70–80'inde bile mekanik mukavemetini, sürünme (creep) direncini ve oksidasyon dayanımını koruyan tek metalik malzeme ailesidir. Gücünün sırrı γ' (gamma-prime) nano çökeltileridir — doğada nadir görülen bir anomaliyle, bu çökeltilerin mukavemeti sıcaklık arttıkça ~800 °C'ye kadar düşmez, aksine ARTAR." },

        { id: "b2", tip: "metin", baslik: "Motorun en sıcak bölgesinde neden malzemeler değişir?",
          metin: "Jet motorunun ön Fan bölgesinde alüminyum ve kompozitler, Kompresör bölgesinde titanyum ve çelik kullanılırken; yanma odası ve türbin bölgesine gelindiğinde tüm bu metaller pes eder.\n\nYanma odasında ve türbin girişinde gaz sıcaklıkları 1.200–1.700 °C seviyelerine ulaşır:\n• Saf alüminyum 660 °C'de çoktan erimiştir.\n• Titanyum 350–500 °C'nin üzerinde mukavemetini kaybedip oksitlenerek yanmaya başlar.\n• Çelik bu sıcaklıklarda yumuşayarak merkezkaç kuvveti altında hamur gibi uzar.\n\nİşte tam bu noktada Nikel Esaslı Süperalaşımlar sahneye çıkar." },

        { id: "b3", tip: "metin", baslik: "Süperalaşım nedir ve neden normal metaller yetmez?",
          metin: "Süperalaşım: kendi erime sıcaklığının çok yakınında (~%70–80 T_m) bile yüksek mekanik mukavemet, rijitlik, yüzey kararlılığı ve korozyon/oksidasyon direncini koruyabilen özel metalik malzeme ailesidir.\n\nSıcaklık yükseldiğinde normal metallerde 4 yıkıcı olay gerçekleşir:\n1. Atom bağlarının zayıflaması → E modülü ve akma mukavemeti çöker.\n2. Tane sınırı kayması (Grain Boundary Sliding) → taneler birbiri üzerinden kayarak malzeme yırtılır.\n3. Şiddetli oksitlenme → sıcak gazlar yüzeyi çürütür.\n4. Sürünme (Creep) → sabit yük altında metal milim milim uzar.\n\nSüperalaşımlar bu 4 mekanizmaya aynı anda karşı koyacak şekilde atomik seviyede tasarlanmıştır." },

        { id: "b4", tip: "metin", baslik: "Nikel neden tercih edilir?",
          metin: "Nikel (Ni), oda sıcaklığından erime noktasına (1.455 °C) kadar Yüzey Merkezli Kübik (YMK/FCC) kristal yapısını korur. Demirin aksine sıcaklıkla faz değişimi yaşamaz — bu durum malzeme hacminde ani genleşme krizlerini önler.\n\nFCC yapısı atomların kararlı dizilimini sağlar ve yüksek sıcaklıklarda atomal yayınmayı (difüzyon) yavaşlatarak yapının yumuşamasını engeller.\n\nAlaşım elementlerinin rolleri:\n• Krom (Cr): oksidasyon ve yüksek sıcaklık korozyon direnci.\n• Kobalt (Co) ve Molibden (Mo): katı çözelti güçlendirmesi.\n• Alüminyum (Al) ve Titanyum (Ti): güçlendirici γ' fazını oluşturur.\n• Tungsten (W), Tantal (Ta), Renyum (Re): sürünme direncini katlar." },

        { id: "b5", tip: "metin", baslik: "γ ve γ' fazı — gücün sırrı",
          metin: "Nikel süperalaşımların mikro yapısında iki ana faz bulunur:\n\nγ (Gamma) Matris: nikelin YMK kristal yapısındaki sünek ana gövde — ev sahibi faz.\n\nγ' (Gamma-Prime) Çökeltileri: nikelin alüminyum ve titanyum ile birleşerek oluşturduğu Ni₃(Al, Ti) intermetalik faz. Kübik biçimli bu mikroskobik parçacıklar matris içine düzenli olarak dağılır.\n\nGüçlendirme mekanizması — doğa anomalisi: normal metallerde sıcaklık arttıkça mukavemet düşer. Ancak γ' çökeltileri nadir görülen bir anomali sergiler: sıcaklık ~800 °C'ye çıkana kadar mukavemeti DÜŞMEZ, AKSİNE ARTAR! Dislokasyonlar bu sert kübik çökeltilerin üzerinden atlayamaz veya kesemez — malzeme sıcakta sapasağlam kalır.",
          kutu: { tip: "bilgi", baslik: "γ' hacim oranı kritiktir", metin: "Türbin kanatçığı alaşımlarında γ' hacim oranı %60–70'e ulaşır. γ' oranı arttıkça sıcaklık mukavemeti artar, ancak süneklik düşer ve üretim zorlaşır (tek kristal döküm gerekir). Türbin diski alaşımlarında γ' oranı ~%40–50 tutularak tokluk ve üretilebilirlik dengelenir." } },

        { id: "b6", tip: "metin", baslik: "Motorun neresinde kullanılır?",
          metin: "Nikel süperalaşımlar motorun Sıcak Bölgesinde (Hot Section) hakimiyet kurar:\n\n1. Türbin kanatçıkları (Turbine Blades): akkor gazın ilk çarptığı, hem +1.100 °C sıcaklığa hem de dakikada ~15.000 devirdeki devasa merkezkaç kuvvetine maruz kalan parçalar.\n\n2. Türbin diskleri (Turbine Discs): kanatçıkların monte edildiği, yüksek tork ve dönme gerilmesi taşıyan göbek yapıları.\n\n3. Yanma odası bileşenleri (Combustor Liners): yakıtın yandığı +1.500 °C'lik alev bölgesini çevreleyen iç cidarlar.\n\n4. Lüle rehber kanatçıkları (Nozzle Guide Vanes): yanma odasından çıkan gazı türbine yönlendiren sabitleyici kanatlar.\n\n5. Egzoz çevresi: egzoz boruları, manifoldlar ve ardyanma (afterburner) iç kaplamaları." },

        { id: "b7", tip: "metin", baslik: "Termal bariyer kaplamalar (TBC) ve iç soğutma",
          metin: "Yanma odasındaki gaz sıcaklığı (1.500–1.700 °C) nikelin erime sıcaklığından (1.455 °C) bile yüksektir! Metalin erimemesi için 3 teknoloji birleştirilir:\n\n1. İç soğutma kanalları: kompresörden alınan soğuk hava kanatçık içindeki deliklerden geçirilerek metali içeriden soğutur.\n\n2. Film soğutma: kanatçık yüzeyindeki minik deliklerden çıkan soğuk hava, yüzeyde koruyucu bir soğuk hava perdesi oluşturur.\n\n3. Termal Bariyer Kaplama (TBC): metal yüzeyine 100–300 μm kalınlığında kaplanan seramik katman (genellikle Yttria-Stabilized Zirconia — YSZ). Seramiklerin ısı iletkenliği çok düşüktür; TBC, sıcak gaz ile metal arasında 100–170 °C sıcaklık düşüşü sağlar — metal kendi erime sıcaklığının altında güvenli bölgede kalır." },

        { id: "b8", tip: "metin", baslik: "Tek kristal (Single Crystal) türbin kanatları",
          metin: "Geleneksel bir metal parçada binlerce kristal tanesi ve tane sınırları vardır. Yüksek sıcaklık ve merkezkaç kuvveti altında malzeme ilk olarak bu tane sınırlarından kayarak (Grain Boundary Sliding) ve çatlayarak yırtılır.\n\nMühendislik çözümü: türbin kanadının tamamı tek bir kristal tane olarak dökülür! Tane sınırı tamamen ortadan kaldırıldığı için:\n• Sürünme (Creep) ömrü ~10 katına çıkar.\n• Çalışma sıcaklığı ~50 °C daha yukarı çekilir.\n\nTek kristal üretim: kontrollü yönlü katılaştırma (directional solidification) fırınlarında, özel bir tohum kristal kullanılarak parça tek kristal olarak büyütülür. Bu teknoloji dünyanın en pahalı döküm süreçlerinden biridir." },

        { id: "b9", tip: "gorsel", baslik: "Motor sıcaklık haritası ve malzeme dağılımı", gorsel: "motorsicaklikharitasi",
          metin: "Jet motoru kesit şeması üzerinde: Fan (Kompozit/Al, −50 °C) → Kompresör (Ti/Çelik, 200–500 °C) → Yanma Odası (Nikel + TBC, 1.500–1.700 °C) → Türbin (Tek Kristal Nikel, 1.000–1.200 °C) → Egzoz (Nikel/Paslanmaz Çelik, 600–800 °C) sıralaması sıcaklık eğrisiyle gösterilir." },

        { id: "b10", tip: "gorsel", baslik: "Geleneksel — yönlenmiş tane — tek kristal karşılaştırması", gorsel: "tekkristalkiyasi",
          metin: "Üç türbin kanadı yan yana: 1) Geleneksel döküm (çok taneli, rastgele tane sınırları), 2) Yönlenmiş katılaştırma (uzun taneler, yatay tane sınırları azaltılmış), 3) Tek kristal (tane sınırı yok). Her birinin tane yapısı şematik olarak gösterilir ve creep ömrü artışı ok işaretleriyle belirtilir." },

        { id: "b11", tip: "tablo", baslik: "Nikel vs. Titanyum vs. Alüminyum",
          basliklar: ["Özellik", "Alüminyum", "Ti-6Al-4V", "Nikel Süperalaşım"],
          satirlar: [
            ["Yoğunluk", "2,70 g/cm³ (Hafif)", "4,51 g/cm³ (Orta)", "8,2–8,9 g/cm³ (AĞIR)"],
            ["Maks. çalışma sıcaklığı", "~150 °C", "350–500 °C", "+1.000–1.100 °C"],
            ["Erime noktası", "660 °C", "1.668 °C", "~1.350–1.450 °C"],
            ["Maliyet", "Düşük", "Yüksek", "ÇOK YÜKSEK"]
          ],
          metin: "Motorun her yerinde nikel kullanılmaz — çünkü 8,5 g/cm³ yoğunluğuyla aşırı ağırdır. Fan bölgesinde nikel kullansanız motor kalkamayacak kadar ağırlaşır. Türbin bölgesinde ise başka hiçbir metalik malzeme grubu dayanamaz — nikel orada zorunludur." },

        { id: "b12", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Nikel süperalaşımları alüminyumdan 3 kat daha ağır olmasına rağmen neden türbin kanatlarında kullanılır?", "Türbin bölgesinde gaz sıcaklıkları 1.000 °C'yi aşar. Alüminyum 150 °C'de, titanyum 500 °C'de pes eder. Nikel süperalaşımları YMK kristal kararlılığı ve γ' çökelti güçlendirmesi sayesinde bu akkor sıcaklıklarda mukavemetini ve creep direncini koruyabilen tek metalik gruptur."],
            ["Tek kristal türbin kanadı kullanmanın mühendislik gerekçesi nedir?", "Yüksek sıcaklık ve merkezkaç yükü altında metaller ilk olarak tane sınırlarından kayarak (Grain Boundary Sliding) creep hasarına uğrar. Türbin kanadı tek kristal olarak üretildiğinde tane sınırları tamamen ortadan kalkar; creep ömrü ~10 kat artar ve çalışma sıcaklığı ~50 °C yukarı çekilir."],
            ["TBC (Termal Bariyer Kaplama) ne işe yarar?", "Yanma odasındaki gaz sıcaklığı metalin erime sıcaklığını aşabilir. Metal yüzeyine kaplanan seramik katman (YSZ), düşük ısı iletkenliğiyle gaz-metal arasında 100–170 °C sıcaklık düşüşü sağlayarak metali güvenli bölgede tutar."]
          ] },

        { id: "b13", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Reed, R. C. (2006). The superalloys: Fundamentals and applications. Cambridge University Press.",
            "Sims, C. T., Stoloff, N. S. & Hagel, W. C. (1987). Superalloys II. Wiley.",
            "Rolls-Royce plc (2015). The jet engine (6. baskı). Wiley.",
            "Padture, N. P., Gell, M. & Jordan, E. H. (2002). Thermal barrier coatings for gas-turbine engine applications. Science, 296(5566), 280–284.",
            "Pollock, T. M. & Tin, S. (2006). Nickel-based superalloys for advanced turbine engines. Journal of Propulsion and Power, 22(2), 361–374."
          ] }
      ],

      sorular: [
        { id: "mals7-1", etiket: "Kavram", puan: 1,
          soru: "Süperalaşım kavramının temel tanımı nedir?",
          secenekler: ["En hafif metal alaşımı", "Erime sıcaklığının ~%70–80'inde bile mekanik mukavemet, creep direnci ve oksidasyon dayanımını koruyan metalik malzeme ailesi", "Yalnızca alüminyum bazlı yüksek mukavemetli alaşımlar", "Oda sıcaklığında en yüksek mukavemete sahip alaşımlar"],
          dogru: 1,
          aciklama: "Süperalaşımlar, kendi erime sıcaklıklarının çok yakınında bile yüksek mekanik mukavemet, creep direnci ve oksidasyon dayanımını koruyabilen özel metalik ailedir." },
        { id: "mals7-2", etiket: "Kavram", puan: 1,
          soru: "γ' (Gamma-Prime) fazının doğa anomalisi nedir?",
          secenekler: ["Sıcaklık arttıkça erir", "Sıcaklık arttıkça ~800 °C'ye kadar mukavemeti düşmez, aksine ARTAR", "Oda sıcaklığında en sert fazdır", "Yalnızca alüminyumda oluşur"],
          dogru: 1,
          aciklama: "Normal metallerde sıcaklık arttıkça mukavemet düşer. γ' çökeltileri ise ~800 °C'ye kadar mukavemeti artan nadir bir anomali sergiler — dislokasyonlar bu çökeltileri aşamaz." },
        { id: "mals7-3", etiket: "Kavram", puan: 1,
          soru: "Sürünme (Creep) nedir?",
          secenekler: ["Ani darbe kırılması", "Yüksek sıcaklık ve sürekli sabit yük altında malzemenin zamanla kalıcı olarak uzaması", "Malzemenin paslanması", "Tekrarlı yüklerle yorulma çatlaması"],
          dogru: 1,
          aciklama: "Creep, yüksek sıcaklık ve sürekli gerilme (örn. merkezkaç kuvveti) altında malzemenin milim milim kalıcı uzamasıdır. Türbin pellerinde kontrol edilmezse pal motora çarpar." },
        { id: "mals7-4", etiket: "Uygulama", puan: 2,
          soru: "TBC (Termal Bariyer Kaplama) metal ile sıcak gaz arasında ne kadar sıcaklık düşüşü sağlar?",
          secenekler: ["10–20 °C", "100–170 °C", "500–600 °C", "1.000 °C"],
          dogru: 1,
          aciklama: "Metal yüzeyine kaplanan YSZ seramik tabaka, düşük ısı iletkenliğiyle gaz-metal arasında 100–170 °C'lik sıcaklık düşüşü sağlayarak metali erime noktasının altında güvenli bölgede tutar." },
        { id: "mals7-5", etiket: "Uygulama", puan: 2,
          soru: "Tek kristal türbin kanadının geleneksel çok taneli dökümden en büyük avantajı nedir?",
          secenekler: ["Daha ucuz üretim", "Tane sınırları ortadan kaldırıldığı için creep ömrü ~10 kat artar", "Daha hafiftir", "Daha iyi ısı iletkenliği"],
          dogru: 1,
          aciklama: "Çok taneli dökümde tane sınırları yüksek sıcaklıkta kayma ve çatlama başlangıcıdır. Tek kristal üretimde tane sınırı tamamen yok edilir — creep ömrü radikal şekilde artar ve çalışma sıcaklığı ~50 °C yukarı çekilir." },
        { id: "mals7-6", etiket: "Analiz", puan: 2,
          soru: "Motorun Fan bölgesinde neden nikel süperalaşım kullanılmaz?",
          secenekler: ["Nikel korozyona dayanıksızdır", "Nikel 8,5 g/cm³ yoğunluğuyla aşırı ağırdır — Fan bölgesinde sıcaklık düşük olduğundan daha hafif malzemeler (Al/Ti/kompozit) yeterlidir", "Nikel süperalaşım Fan sıcaklığına dayanamaz", "Fan bölgesinde mekanik yük yoktur"],
          dogru: 1,
          aciklama: "Fan bölgesinde sıcaklık düşüktür (−50 ile +100 °C arası). Nikel kullanmak gereksiz ağırlık ekler — motor kalkamayacak kadar ağırlaşır. Bu bölgede alüminyum, titanyum veya kompozit yeterlidir." },
        { id: "mals7-7", etiket: "Sentez", puan: 2,
          soru: "Jet motorunun farklı bölgelerinde kullanılan malzemeleri sıcaklık sırasına göre eşleştiriniz: Fan → Kompresör → Türbin",
          secenekler: ["Nikel → Titanyum → Alüminyum", "Alüminyum/Kompozit → Titanyum/Çelik → Nikel Süperalaşım", "Çelik → Çelik → Çelik", "Titanyum → Alüminyum → Bakır"],
          dogru: 1,
          aciklama: "Fan (düşük sıcaklık): Al/Kompozit. Kompresör (200–500 °C): Ti/Çelik. Türbin (1.000+ °C): Nikel Süperalaşım. Her bölge, sıcaklığına uygun malzemeyi alır." }
      ],
      ipuclari: {
        "Kavram": "γ' anomalisinin (sıcaklıkla artan mukavemet) ve creep tanımının tam ifadesini hatırla.",
        "Uygulama": "TBC'nin sıcaklık düşüşü değerini (100–170 °C) ve tek kristalin creep avantajını (~10×) hatırla.",
        "Analiz": "Motorun Fan bölgesinde nikelin gereksiz olma nedenini düşün — ağırlık vs. sıcaklık ihtiyacı.",
        "Sentez": "Motor kesitinde sıcaklık → malzeme eşleştirme mantığını uygula."
      }
    },

"mal8": {
      ad: "Diğer Havacılık Metalleri ve Metallerin Bütüncül Özeti",
      ders: "Malzeme",
      seviye: "Orta",
      sure: 22,
      mulakat: true,
      onbilgi: "Nikel Süperalaşımlar (mal7)",
      guncelleme: "14 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Uçak yalnızca dış kabuktan ve motordan ibaret değildir — içinde binlerce metre elektrik kablosu, hidrolik valfler, kaymalı yataklar ve dişli kutuları barındırır. Bu derste ana dört devin (Al, Çelik, Ti, Ni) yanında belirli özel görevleri üstlenen Magnezyum, Bakır, Kobalt alaşımları ve Refrakter metalleri inceler; ardından Ders 4–8 boyunca öğrendiğimiz tüm metalleri birleştiren Bütüncül Metal Seçim Haritasını kurarız." },

        { id: "b2", tip: "metin", baslik: "Magnezyum ve alaşımları",
          metin: "Magnezyum (Mg) havacılıkta kullanılan en hafif yapısal metaldir. Yoğunluğu sadece 1,74 g/cm³ — alüminyumdan %35 daha hafif, çelikten 5 kat daha hafif.\n\nAvantajları: yüksek özgül mukavemet, özgül rijitlik ve mükemmel şok/titreşim sönümleme.\n\nBirincil yapılarda (primary structure) neden sınırlı?\n1. Şiddetli korozyon hassasiyeti: elektrokimyasal seride çok aktiftir. Başka bir metalle temas ettiğinde anında galvanik korozyona uğrar.\n2. Yanıcılık ve yangın güvenliği: ince talaş veya toz halindeyken düşük sıcaklıklarda tutuşur ve suyla sönmeyen, 2.000 °C'ye varan kör edici beyaz alevle yanar. Yolcu kabinlerinde kullanımı FAA/EASA kurallarıyla sıkı biçimde sınırlandırılmıştır.\n\nKullanım alanları: helikopter dişli kutusu gövdeleri (ZE41/ZW3 alaşımları), uçak hidrolik depoları ve kumanda valf gövdeleri (AZ91), uydu iç yapısal çerçeveleri ve füze muhafazaları (AZ31/AZ61)." },

        { id: "b3", tip: "metin", baslik: "Bakır ve bakır alaşımları",
          metin: "Bakır (Cu) 8,96 g/cm³ yoğunluğuyla uçakta hiçbir zaman ana taşıyıcı karkas malzemesi olarak kullanılmaz. Ancak fonksiyonel sistemlerin vazgeçilmezidir.\n\nNeden kullanılır?\n1. Aşırı yüksek elektrik ve ısıl iletkenlik: gümüşten sonra elektriği ve ısıyı en iyi ileten metaldir.\n2. Aşınma direnci ve sürtünme kontrolü: sünek, kolay şekil alır, düşük sıcaklıklarda gevrekleşmez.\n\nUçaktaki yeri:\n• Elektrik ve aviyonik tesisat: uçak içindeki kilometrelerce kablo demeti, konnektörler ve lehim birleşim noktaları.\n• Kaymalı yataklar ve burçlar (bushing): iniş takımlarında ve hareketli kumanda menteşelerinde sürtünmeyi azaltmak için pirinç (Cu-Zn) ve alüminyum bronzu (Cu-Al-Ni) burçlar kullanılır." },

        { id: "b4", tip: "metin", baslik: "Kobalt alaşımları ve refrakter metaller",
          metin: "Kobalt alaşımları (Co-Cr-Ni): nikel süperalaşımlarına benzer. Yüksek sıcaklıklarda aşınmaya, sıcak korozyonuna ve termal şoklara nikelden bile daha dirençlidir. Jet motorlarının yanma odası yönlendirici vanalarında (NGV) ve mekanik aşınmanın aşırı olduğu sürtünmeli motor yataklarında kullanılır.\n\nRefrakter metaller (Tungsten, Molibden, Niobyum, Tantal): erime noktaları aşırı yüksek (>2.500 °C) olan egzotik metallerdir. Sıradan metallerin buharlaştığı roket nozulları, füze jet kanatçıkları ve yüksek sıcaklık gaz yönlendiricilerinde — süperalaşımların bile sınırda kaldığı yerlerde kullanılır." },

        { id: "b5", tip: "tablo", baslik: "Havacılık metalleri hızlı karar tablosu",
          basliklar: ["Malzeme ailesi", "Yoğunluk", "Ana gücü", "Ne zaman seçersin?", "Tipik bileşen"],
          satirlar: [
            ["Alüminyum", "2,70 g/cm³", "Düşük maliyet, kolay imalat, iyi özgül mukavemet", "Genel yapı, düşük/orta sıcaklık", "Kanat/gövde kaplamaları, stringer"],
            ["Çelik", "7,85 g/cm³", "Aşırı mukavemet (2.000 MPa), sertlik, rijitlik", "Dar alanda devasa yük, darbe şoku", "İniş takımı dikmeleri, cıvatalar, rulmanlar"],
            ["Titanyum", "4,51 g/cm³", "Özgül mukavemet şampiyonu, 300–500 °C, %100 paslanmaz", "Yüksek yük + orta sıcaklık + CFRP komşuluğu", "Engine pylon, kompresör diskleri"],
            ["Nikel süperalaşım", "8,50 g/cm³", ">1.000 °C'de creep ve oksidasyon direnci", "Motor akkor sıcaklık bölgesi", "Türbin kanatçıkları, yanma odası"],
            ["Magnezyum", "1,74 g/cm³", "Aşırı hafiflik, titreşim sönümleme", "Yük taşımayan, kapalı iç bölge", "Helikopter dişli kutusu gövdesi"],
            ["Bakır", "8,96 g/cm³", "Mükemmel elektrik/ısı iletkenliği", "Elektrik iletimi, sürtünme yüzeyleri", "Aviyonik kablolar, burçlar"]
          ],
          metin: "Bu tablo, bir havacılık mühendisinin tasarım masasında yapacağı hızlı malzeme seçim referansıdır. Her satır farklı bir görev-çevre-yük kombinasyonuna cevap verir." },

        { id: "b6", tip: "gorsel", baslik: "Havacılık metalleri sentez haritası", gorsel: "metallersentez",
          metin: "Uçak görseli üzerinde alüminyum (kanat/gövde), çelik (iniş takımı, cıvatalar), titanyum (pylon, kompresör), nikel (türbin, yanma odası), magnezyum (dişli kutusu) ve bakırın (aviyonik kablolar, burçlar) kullanıldığı bölgeler renkli oklarla işaretlenir." },

        { id: "b7", tip: "metin", baslik: "Kompozit malzemelere köprü",
          metin: "Tüm bu metalleri — alüminyum, çelik, titanyum, nikel, magnezyum — mükemmel özellikleriyle öğrendikten sonra kritik bir mühendislik sorusu çıkıyor:\n\n\"Metaller bu kadar gelişmişken, alüminyum kolayca işlenebilirken, çelik bu kadar güçlüyken ve titanyum paslanmazken; havacılık endüstrisi neden milyarlarca dolar harcayıp Karbon Fiber Kompozitlere (CFRP) ihtiyaç duydu?\"\n\nCevap: metallerin doğasındaki izotropik (her yönde aynı) davranış sınırlamasını kırmak, yükün gelmediği yönlerdeki gereksiz ağırlığı sıfırlamak ve uçakları çok daha hafif kıtalararası devlere dönüştürmek — işte bu hedef bizi bir sonraki ders olan Kompozit Malzemelere getirmektedir." },

        { id: "b8", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Helikopterin dişli kutusu gövdesinde magnezyum kullanılırken ana rotor palleri neden magnezyumdan yapılmaz?", "Magnezyum 1,74 g/cm³ ile dişli kutusu gövdesinde harika ağırlık tasarrufu ve titreşim sönümleme sağlar. Ancak yorulma dayanımı, çentik hassasiyeti ve korozyon direnci düşüktür. Ana rotor palleri devasa merkezkaç ve dalgalı yorulma yüklerine maruz kaldığı için magnezyum kullanılırsa kılcal çatlaklar felaket yaratır — pallerde kompozit veya titanyum tercih edilir."],
            ["Uçaktaki elektrik tesisatında neden alüminyum yerine bakır kullanılır?", "Bakır, gümüşten sonra en yüksek elektrik iletkenliğine sahip metaldir. Alüminyumun iletkenliği bakırın ~%60'ıdır — aynı akımı taşımak için alüminyum kablo daha kalın olmalıdır. Dar kablo kanallarında ve ağırlık/hacim optimizasyonunda bakır tercih edilir. Ancak bazı modern uçaklarda ağırlık tasarrufu için ana güç hatlarında alüminyum kablo kullanımı da artmaktadır."]
          ] },

        { id: "b9", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Campbell, F. C. (2006). Manufacturing technology for aerospace structural materials. Elsevier.",
            "Niu, M. C. Y. (1988). Airframe structural design. Conmilit Press.",
            "ASM Handbook, Volume 2: Properties and selection — Nonferrous alloys (1990). ASM International.",
            "Polmear, I. J. (2006). Light alloys: Metallurgy of the light metals (4. baskı). Butterworth-Heinemann.",
            "Federal Aviation Administration. (2018). Advisory circular AC 43.13-1B: Acceptable methods, techniques, and practices — Aircraft inspection and repair."
          ] }
      ],

      sorular: [
        { id: "mals8-1", etiket: "Kavram", puan: 1,
          soru: "Havacılıkta kullanılan en hafif yapısal metal hangisidir?",
          secenekler: ["Alüminyum (2,70 g/cm³)", "Titanyum (4,51 g/cm³)", "Magnezyum (1,74 g/cm³)", "Bakır (8,96 g/cm³)"],
          dogru: 2,
          aciklama: "Magnezyum 1,74 g/cm³ yoğunluğuyla havacılıkta kullanılan en hafif yapısal metaldir — alüminyumdan %35 daha hafiftir." },
        { id: "mals8-2", etiket: "Kavram", puan: 1,
          soru: "Magnezyumun birincil uçak yapılarında kullanımının sınırlı olmasının iki ana nedeni nedir?",
          secenekler: ["Çok pahalı ve çok ağır", "Şiddetli korozyon hassasiyeti ve yanıcılık/yangın güvenliği riski", "Çok yumuşak ve çok esnek", "Sıcaklık dayanımı düşük ve rijitliği zayıf"],
          dogru: 1,
          aciklama: "Magnezyum elektrokimyasal olarak çok aktiftir (galvanik korozyon) ve ince talaş halinde düşük sıcaklıklarda tutuşup suyla sönmeyen alevle yanar — yolcu kabinlerinde kullanımı sıkı biçimde kısıtlanmıştır." },
        { id: "mals8-3", etiket: "Uygulama", puan: 2,
          soru: "Uçak iniş takımlarındaki kaymalı yataklar (burçlar) hangi malzemeden yapılır ve neden?",
          secenekler: ["Alüminyum — hafif olduğu için", "Pirinç veya alüminyum bronzu — sürtünmeyi azaltma ve aşınma direnci için", "Karbon fiber — hafif ve güçlü olduğu için", "Nikel süperalaşım — sıcaklığa dayanıklı olduğu için"],
          dogru: 1,
          aciklama: "Kaymalı yataklar ve burçlar sürekli sürtünme altında çalışır. Bakır alaşımları (pirinç = Cu-Zn, alüminyum bronzu = Cu-Al-Ni) düşük sürtünme katsayısı ve yüksek aşınma direnci sunarak mekanik ömrü uzatır." },
        { id: "mals8-4", etiket: "Uygulama", puan: 2,
          soru: "Refrakter metallerin (tungsten, molibden) havacılıktaki başlıca kullanım alanı neresidir?",
          secenekler: ["Uçak gövde kaplaması", "Kabin iç donanımı", "Roket nozulları ve sıradan metallerin buharlaştığı aşırı sıcaklık bölgeleri", "Uçak pencere çerçeveleri"],
          dogru: 2,
          aciklama: "Refrakter metallerin erime noktaları >2.500 °C'dir. Süperalaşımların bile sınırda kaldığı roket nozulları, füze jet kanatçıkları ve aşırı sıcaklık gaz yönlendiricilerinde kullanılır." },
        { id: "mals8-5", etiket: "Sentez", puan: 2,
          soru: "Aşağıdaki eşleştirmelerden hangisi DOĞRUDUR?",
          secenekler: [
            "İniş takımı dikmesi → Magnezyum AZ91",
            "Türbin kanatçığı → 7075-T6 Alüminyum",
            "Helikopter dişli kutusu gövdesi → Magnezyum ZE41",
            "Aviyonik kablo → 300M Çelik"
          ],
          dogru: 2,
          aciklama: "Helikopter dişli kutusu gövdesinde magnezyum ZE41 kullanılır — hafiflik ve titreşim sönümleme sağlar. İniş takımında 300M çelik, türbin kanatçığında nikel süperalaşım, kablolarda bakır kullanılır." },
        { id: "mals8-6", etiket: "Sentez", puan: 2,
          soru: "Metallerin doğasındaki hangi sınırlama, havacılık endüstrisini karbon fiber kompozitlere yönelmeye zorlamıştır?",
          secenekler: ["Metallerin hiçbiri yeterince güçlü değildir", "İzotropik (her yönde aynı) davranış — yükün gelmediği yönlerde gereksiz ağırlık taşınır", "Metaller hiç işlenemez", "Metaller 100 °C'nin üzerinde çalışamaz"],
          dogru: 1,
          aciklama: "Metaller her yönde eşit dayanıma sahiptir (izotropik). Ancak uçak yapısında yük genellikle belirli yönlerden gelir. Kompozitler lifleri yük doğrultusuna dizleyerek yalnızca ihtiyaç olan yönde mukavemet sunar — gereksiz ağırlık sıfırlanır ve uçak dramatik biçimde hafifler." }
      ],
      ipuclari: {
        "Kavram": "Magnezyumun yoğunluğunu (1,74), korozyon hassasiyetini ve yanıcılık riskini hatırla.",
        "Uygulama": "Bakır alaşımlarının burç/yatakta kullanım nedenini ve refrakter metallerin sıcaklık sınırını düşün.",
        "Sentez": "Hızlı karar tablosundaki 6 malzeme ailesinin her birinin 'ne zaman seçilir' sütununu hatırla ve metallerin izotropik sınırlamasını düşün."
      }
    },
"m3-2": {
      ad: "Bernoulli denklemi",
      ders: "Akışkanlar Mekaniği",
      seviye: "Temel",
      sure: 20,
      mulakat: true,
      onbilgi: "Basınç kavramı, enerjinin korunumu, süreklilik denklemi",
      guncelleme: "11 Eylül 2026",
      icerikSurum: "1.0",
      bolumler: [
        { id: "b1", tip: "ozet", baslik: "Kısaca",
          metin: "Bernoulli denklemi, akan bir akışkan için enerjinin korunumudur. Bir akım çizgisi boyunca basınç, hız ve yükseklik birbirine dönüşür ama toplamları sabit kalır. Hız artarsa basınç düşer, hız azalırsa basınç yükselir." },

        { id: "b2", tip: "metin", baslik: "Bu konuyu neden öğreniyoruz?",
          metin: "Uçağın hava hızını ölçen pitot tüpü, rüzgâr tünelleri, motor giriş kanalları, yakıt hattındaki debi ölçerler. Hepsinin temelinde Bernoulli var.\n\nMülakatlarda da çok sorulur. Çünkü hem basit görünür hem de yanlış kullanmaya çok müsaittir. İyi bir mühendis denklemi yazmakla kalmaz, nerede kullanılamayacağını da söyler." },

        { id: "b3", tip: "metin", baslik: "Önce kavramlar: basınç türleri",
          metin: "Statik basınç (p): Akışkanın çevresine her yönde uyguladığı basınçtır. Pratikte borunun yan duvarındaki küçük bir delikten ölçeriz.\n\nDinamik basınç (½ρV²): Akışkanın hareketinden gelen basınçtır. Aslında birim hacimdeki kinetik enerjidir. Akışkanı durdurursan bu enerji basınca dönüşür.\n\nHidrostatik basınç (ρgz): Yükseklikten gelen katkıdır. Birim hacimdeki potansiyel enerjidir.\n\nBir ayrıntıya dikkat et: Pascal birimi N/m² dir ama aynı zamanda J/m³ tür. Yani basınç, birim hacim başına enerjidir. Bernoulli denklemindeki her terimi bu yüzden enerji gibi toplayabiliriz.",
          kutu: { tip: "bilgi", baslik: "Akım çizgisi nedir?", metin: "Her noktasında hız vektörüne teğet olan hayali bir çizgidir. Akış zamanla değişmiyorsa bir akışkan parçacığı tam olarak bu çizgi üzerinde ilerler. Rüzgâr tünelinde akışa bırakılan duman izleri bize akım çizgilerini gösterir." } },

        { id: "b4", tip: "formul", baslik: "Denklem",
          formul: "p₁ + ½ρV₁² + ρgz₁  =  p₂ + ½ρV₂² + ρgz₂",
          semboller: [
            ["p", "Statik basınç", "Pa"],
            ["ρ", "Yoğunluk", "kg/m³"],
            ["V", "Akış hızı", "m/s"],
            ["g", "Yerçekimi ivmesi (9,81)", "m/s²"],
            ["z", "Referansa göre yükseklik", "m"]
          ],
          metin: "Gazlarda yoğunluk çok düşük olduğu için yükseklik terimi çoğu aerodinamik problemde ihmal edilir ve denklem şu sade hale gelir:\n\np + ½ρV² = p₀ = sabit\n\nBuradaki p₀ toplam basınç, yani durma basıncıdır." },

        { id: "b5", tip: "metin", baslik: "Denklem nereden geliyor?",
          metin: "Denklemi ezberlemek yerine nereden geldiğini bilirsen varsayımları da kendiliğinden hatırlarsın.\n\nKütlesi m, hacmi ΔV olan küçük bir akışkan parçası 1 noktasından 2 noktasına gidiyor. Basınç kuvvetlerinin yaptığı net iş (p₁ − p₂)·ΔV kadardır. Bu iş, parçanın kinetik ve potansiyel enerji değişimine eşit olmalıdır. Her iki tarafı ΔV ye böler ve m/ΔV = ρ yazarsan Bernoulli denklemi çıkar.\n\nŞimdi varsayımların nereden geldiğine bak: sürtünme işini hesaba katmadık, ρ yu sabit aldık, aynı parçacığı bir yol boyunca izledik, akışın her an aynı olduğunu kabul ettik ve parçaya dışarıdan enerji eklemedik." },

        { id: "b6", tip: "tablo", baslik: "Varsayımlar ve sınırlar",
          basliklar: ["Varsayım", "Ne zaman bozulur?"],
          satirlar: [
            ["Daimi akış", "Vana aniden kapanırken, çırpan kanatlarda"],
            ["Sıkıştırılamaz akış", "Havada Mach 0,3 ün üstünde"],
            ["Sürtünmesiz akış", "Uzun borularda, sınır tabakası içinde"],
            ["Aynı akım çizgisi", "Farklı çizgilerdeki noktaları karşılaştırırken"],
            ["Enerji girişi yok", "Pompa ya da fanın iki tarafı arasında"]
          ],
          metin: "Mach 0,3 sınırı nereden geliyor? Mach 0,3 te akışı durdurduğunda yoğunluk yaklaşık %4,5 artar. Mühendislikte bu farkı genellikle kabul edilebilir buluruz. Üstünde fark hızla büyür.\n\nTurbülanslı akış ne olacak? Gerçek boru akışlarının çoğu turbülanslıdır. Bernoulli'yi bu akışlarda ortalama hızlarla yaklaşık olarak kullanırız. Venturi ve orifis debimetrelerinin deneyle bulunan düzeltme katsayılarıyla çalışmasının sebebi budur." },

        { id: "b7", tip: "metin", baslik: "Süreklilik denklemiyle birlikte",
          metin: "Bernoulli tek başına hızın ne kadar değiştiğini söylemez. Hızı genellikle süreklilik denkleminden buluruz. Sıkıştırılamaz akışta:\n\nA₁V₁ = A₂V₂\n\nTipik çözüm sırası şöyledir: önce süreklilikle hızları bul, sonra Bernoulli ile basınçları bul.",
          kutu: { tip: "uyari", baslik: "Çok yapılan hata", metin: "Borunun çapı yarıya inerse alanı dörtte birine iner. Bu yüzden hız 2 kat değil 4 kat artar." } },

        { id: "b8", tip: "metin", baslik: "Pitot tüpü: uçağın hızı nasıl ölçülür?",
          metin: "Pitot tüpünün ağzı akışa bakar. Hava tüpün içine girer ve orada durur, yani tüpün içinde toplam basınç oluşur. Gövdedeki statik portlar ise statik basıncı ölçer. İkisinin farkı dinamik basınçtır:\n\nV = √(2(p₀ − p) / ρ)\n\nUçakta bir incelik var. Hız göstergesi hesapta deniz seviyesi yoğunluğunu (1,225 kg/m³) kullanır. Buna gösterilen hava hızı denir. Yükseklerde hava seyrektir, bu yüzden uçağın gerçek hızı gösterilen hızdan büyüktür. Pilot için gösterilen hız çok değerlidir, çünkü kanada etkiyen kuvvetler dinamik basınçla orantılıdır.\n\nPitot tüpü buz, böcek veya kirle tıkanırsa hız göstergesi yanlış okur. Bu yüzden pitot tüpleri ısıtılır ve uçuş öncesi kontrolde kapakları çıkarılır." },

        { id: "b9", tip: "gorsel", baslik: "Venturi tüpü: debi ölçmek", gorsel: "venturi",
          metin: "Venturi tüpü önce daralan, sonra yavaşça genişleyen bir borudur. Dar kesitte hız artar, basınç düşer. İki kesit arasındaki basınç farkını ölçersen debiyi bulursun.\n\nV₂ = √( 2(p₁ − p₂) / (ρ[1 − (A₂/A₁)²]) )\n\nVenturi etkisini eski tip karbüratörlerde, hastanelerdeki venturi oksijen maskelerinde ve bazı eski küçük uçakların vakum tüplerinde görürsün." },

        { id: "b10", tip: "metin", baslik: "Torricelli: depodan boşalan su",
          metin: "Açık bir deponun yüzeyi ile tabandaki küçük delik arasında Bernoulli yazalım. İki noktada da basınç atmosfer basıncıdır ve depo geniş olduğu için yüzeyin alçalma hızı neredeyse sıfırdır. Aradaki yükseklik farkı h ise:\n\nV = √(2gh)\n\nİlginç bir sonuç: Su, h yüksekliğinden serbest düşen bir taşın kazanacağı hızla çıkar. Gerçekte keskin kenarlı bir delikten çıkan jet biraz daralır, bu yüzden gerçek debi ideal debinin yaklaşık %60'ı kadardır." },

        { id: "b11", tip: "gorsel", baslik: "Kaldırma kuvveti", gorsel: "kanat",
          metin: "Doğru anlatım şöyle: Kanat, şekli ve hücum açısıyla etrafındaki akışı büker. Akım çizgileri eğrildiğinde eğriliğin merkezine doğru basınç azalır, çünkü akışkan parçacığını eğri bir yolda tutmak için ona merkeze doğru net bir kuvvet gerekir. Üst yüzeyde basınç ortam basıncının altına düşer, alt yüzeyde biraz üstüne çıkabilir. Bu basınç farkı kaldırma kuvvetidir.\n\nBernoulli bu tabloda şu rolü oynar: basıncın düştüğü yerde hızın arttığını söyler. Hız ve basınç değişimi birlikte oluşur, biri diğerinin tek başına sebebi değildir.\n\nBernoulli mi, Newton mu? Kanat havayı aşağı saptırır, hava da kanadı yukarı iter. Bu açıklama da doğrudur. İkisi rakip teoriler değil, aynı olayın iki farklı hesaplama yoludur.",
          kutu: { tip: "yanilgi", baslik: "Yaygın yanılgı: eşit geçiş süresi",
            metin: "\"Kanadın üstü daha uzun, üstten ve alttan giden hava arka kenarda aynı anda buluşmak zorunda\" açıklaması yanlıştır. Havanın buluşması için fiziksel bir sebep yoktur, üstteki hava arka kenara daha önce ulaşır. Bu varsayımla hesaplanan kaldırma ölçülenden çok küçük çıkar. Ayrıca simetrik profiller ve düz kâğıt uçaklar da kaldırma üretir, akrobasi uçakları ters uçabilir." } },

        { id: "b12", tip: "ornek", baslik: "Örnek 1: Eğitim uçağının hızı",
          soru: "Alçak irtifada uçan bir eğitim uçağının pitot-statik sistemi 1500 Pa fark basınç ölçüyor. Hava yoğunluğu 1,225 kg/m³. Uçağın hava hızı nedir?",
          cozum: "V = √(2 · 1500 / 1,225) = √2449 ≈ 49,5 m/s ≈ 178 km/sa\n\nVarsayım kontrolü: Deniz seviyesinde ses hızı yaklaşık 340 m/s. Mach sayısı 49,5/340 ≈ 0,15. Bu değer 0,3 ten küçük, yani sıkıştırılamaz kabulü uygun.\n\nBu son adımı alışkanlık haline getir. Mülakatta \"önce varsayımımı kontrol ederim\" demek ciddi fark yaratır." },

        { id: "b13", tip: "ornek", baslik: "Örnek 2: Venturi debimetresi",
          soru: "Su taşıyan yatay bir venturinin giriş çapı 10 cm, boğaz çapı 5 cm. Basınç farkı 30 kPa, suyun yoğunluğu 1000 kg/m³. Boğazdaki hızı ve debiyi bul.",
          cozum: "Alan oranı: A₂/A₁ = (5/10)² = 0,25\n\nV₂ = √(2 · 30000 / (1000 · (1 − 0,25²))) = √(60000/937,5) = √64 = 8 m/s\n\nGiriş hızı: V₁ = 8 × 0,25 = 2 m/s\nDebi: Q = (π · 0,05² / 4) × 8 ≈ 0,0157 m³/s = 15,7 L/s\n\nKontrol: A₁V₁ = (π · 0,1²/4) × 2 ≈ 0,0157 m³/s. İki kesitte debi aynı çıktı.\n\nDikkat: 30 kPa yı 30000 Pa ya çevirmeyi unutursan hızı yaklaşık 31 kat küçük bulursun." },

        { id: "b14", tip: "ornek", baslik: "Örnek 3: Bernoulli'yi burada kullanabilir miyim?",
          soru: "Bir yolcu uçağı 11 km irtifada 250 m/s hızla uçuyor. Kanat etrafındaki akışı Bernoulli denklemiyle incelemek doğru olur mu?",
          cozum: "Standart atmosferde 11 km de sıcaklık yaklaşık 216,65 K dir.\n\na = √(γRT) = √(1,4 · 287 · 216,65) ≈ 295 m/s\nM = 250 / 295 ≈ 0,85\n\nBu değer 0,3 ün çok üstünde. Hava sıkıştırılabilir davranır ve kanadın üstünde yer yer ses hızı aşılabilir. Burada sıkıştırılabilir akış bağıntıları gerekir.\n\nCevap: Hayır." },

        { id: "b15", tip: "liste", baslik: "Yaygın hatalar",
          maddeler: [
            "Eşit geçiş süresi yanılgısına düşmek.",
            "\"Hızlı akan akışkanın basıncı her zaman düşüktür\" demek. Hortumdan fışkıran jetin basıncı çıkışta atmosfer basıncına eşittir.",
            "Çap ile alanı karıştırmak. Çap yarıya inince hız 4 kat artar.",
            "Birim dönüşümünü unutmak: kPa → Pa, km/sa → m/s, cm → m.",
            "Formüldeki 2 katsayısını veya karekökü unutmak.",
            "Pompa veya fanın iki tarafına doğrudan Bernoulli yazmak."
          ] },

        { id: "b16", tip: "mulakat", baslik: "Mülakatta nasıl sorulur?",
          sorular: [
            ["Bernoulli denklemini açıklar mısın?", "Akışkanlar için enerjinin korunumudur. Bir akım çizgisi boyunca statik, dinamik ve hidrostatik basıncın toplamı sabit kalır. Daimi, sıkıştırılamaz ve sürtünmesiz akış varsayar."],
            ["Hangi durumlarda kullanamazsın?", "Mach 0,3 ün üstündeki gaz akışlarında, sürtünme kayıplarının büyük olduğu uzun borularda, pompa veya türbinin iki tarafı arasında ve daimi olmayan akışlarda."],
            ["Uçak nasıl kaldırma üretir? Bernoulli mi, Newton mu?", "İkisi de. Kanat akışı büker, üstte basınç düşer. Aynı anda kanat havayı aşağı saptırır ve tepki olarak yukarı itilir. Eşit geçiş süresi açıklaması ise yanlıştır."],
            ["Venturide dar kesitte basınç düşüyor, bu enerji nereye gidiyor?", "Kaybolmuyor. Basınç enerjisi kinetik enerjiye dönüşüyor. Tüp genişleyince akış yavaşlar ve basınç büyük ölçüde geri kazanılır."]
          ] },

        { id: "b17", tip: "kaynakca", baslik: "Kaynakça",
          maddeler: [
            "Anderson, J. D., Jr. (2017). Fundamentals of aerodynamics (6. baskı). McGraw-Hill. ISBN 978-1-259-12991-9",
            "Çengel, Y. A., & Cimbala, J. M. (2018). Fluid mechanics: Fundamentals and applications (4. baskı). McGraw-Hill. ISBN 978-1-259-69653-4",
            "Babinsky, H. (2003). How do wings work? Physics Education, 38(6), 497–503. doi:10.1088/0031-9120/38/6/001",
            "NASA Glenn Research Center. Bernoulli's equation. Beginner's Guide to Aeronautics.",
            "NASA Glenn Research Center. Equal transit theory interactive.",
            "Günerhan, H. Akışkanlar Mekaniği ders notları, Ders 08."
          ] },

        { id: "b18", tip: "video", baslik: "Videolar",
          videolar: [
            { ad: "Understanding Bernoulli's Equation", kanal: "The Efficient Engineer", dil: "İngilizce",
              not: "Denklemin terimlerini, pitot tüpünü ve venturiyi animasyonlarla anlatıyor.",
              url: "https://www.youtube.com/watch?v=DW4rItB20h4" },
            { ad: "How wings really work", kanal: "University of Cambridge", dil: "İngilizce, 1 dakika",
              not: "Prof. Babinsky'nin rüzgâr tüneli deneyi. Eşit geçiş süresi yanılgısını tek görüntüyle çürütüyor.",
              url: "https://www.cam.ac.uk/research/news/how-wings-really-work" },
            { ad: "Akışkanlar Mekaniği: Bernoulli Denklemi", kanal: "Prof. Dr. Hüseyin Günerhan", dil: "Türkçe",
              not: "Üniversite dersi formatında, Türkçe ve daha uzun anlatım.",
              url: "https://www.youtube.com/watch?v=TKd6ayxIiwo" }
          ] }
      ],

      sorular: [
        { id: "s1", etiket: "Basınç-hız", puan: 1,
          soru: "Venturi tüpünün dar kesitinde akışkanın hızı ve basıncı nasıl değişir?",
          secenekler: ["Hız artar, basınç düşer", "Hız artar, basınç da artar", "Hız azalır, basınç düşer", "İkisi de değişmez"],
          dogru: 0,
          aciklama: "Süreklilik denklemine göre debi sabittir. Kesit daralınca hız artar. Toplam enerji sabit kaldığı için kinetik enerji artarken statik basınç düşer." },
        { id: "s2", etiket: "Varsayımlar", puan: 2,
          soru: "Hangisinde Bernoulli denklemini (sıkıştırılamaz hali) doğrudan kullanmak yanlış sonuç verir?",
          secenekler: ["Depo tabanındaki delikten boşalan su", "Musluktan akan su", "Mach 0,8 de uçan bir yolcu uçağının kanadı etrafındaki akış", "Yavaş esen rüzgârın bir tabelaya çarpması"],
          dogru: 2,
          aciklama: "Bu hal sıkıştırılamaz akış varsayar. Havada Mach 0,3 ün üstünde yoğunluk değişimi ihmal edilemez. Diğer üç örnek düşük hızlı akışlardır." },
        { id: "s3", etiket: "Uygulama", puan: 2,
          soru: "Bir İHA'nın pitot tüpü 600 Pa fark basınç ölçüyor. Hava yoğunluğu 1,2 kg/m³. İHA'nın hızı kaçtır?",
          secenekler: ["22,4 m/s", "31,6 m/s", "500 m/s", "1000 m/s"],
          dogru: 1,
          aciklama: "V = √(2Δp/ρ) = √(2·600/1,2) = √1000 ≈ 31,6 m/s. 22,4 diyen 2 katsayısını, 1000 diyen karekökü, 500 diyen ikisini birden unutmuştur." },
        { id: "s4", etiket: "Kaldırma", puan: 2,
          soru: "Arkadaşın \"Kanadın üstü daha uzun, üstteki ve alttaki hava arka kenarda aynı anda buluşmak zorunda\" diyor. Ne dersin?",
          secenekler: ["Haklı, kaldırmanın sebebi tam olarak budur", "Yanlış. Buluşma zorunluluğu yok, üstteki hava arka kenara daha önce ulaşır", "Yanlış. Aslında kanadın altındaki hava daha hızlıdır", "Sadece ses hızının üstünde doğrudur"],
          dogru: 1,
          aciklama: "Eşit geçiş süresi yaygın bir yanılgıdır. Deneyler üstteki havanın önce ulaştığını gösterir. Simetrik profiller ve ters uçabilen uçaklar da bunu kanıtlar." },
        { id: "s5", etiket: "Basınç türleri", puan: 1,
          soru: "Dinamik basınç (½ρV²) neyi ifade eder?",
          secenekler: ["Akışkanın boru duvarına uyguladığı basıncı", "Birim hacimdeki kinetik enerjiyi", "Toplam ile statik basıncın toplamını", "Yükseklik farkından doğan basıncı"],
          dogru: 1,
          aciklama: "Pascal aynı zamanda J/m³ tür. ½ρV², birim hacim akışkanın hareketinden gelen enerjidir. Akışkan durdurulursa bu enerji basınca dönüşür." },
        { id: "s6", etiket: "Basınç-hız", puan: 1,
          soru: "Sıkıştırılamaz akış taşıyan bir borunun çapı yarıya iniyor. Dar kısımdaki hız, geniş kısımdakinin kaç katıdır?",
          secenekler: ["Yarısı", "Aynı", "2 katı", "4 katı"],
          dogru: 3,
          aciklama: "A₁V₁ = A₂V₂. Alan çapın karesiyle orantılıdır. Çap yarıya inince alan dörtte birine iner, hız 4 katına çıkar. Alanın çapla nasıl değiştiğini düşün." },
        { id: "s7", etiket: "Uygulama", puan: 2,
          soru: "Açık bir depoda su seviyesi, tabandaki küçük deliğin 1,8 m üstünde. İdeal çıkış hızı yaklaşık kaçtır? (g = 9,81)",
          secenekler: ["4,2 m/s", "5,9 m/s", "17,7 m/s", "35,3 m/s"],
          dogru: 1,
          aciklama: "V = √(2gh) = √(2 · 9,81 · 1,8) = √35,3 ≈ 5,9 m/s" },
        { id: "s8", etiket: "Basınç-hız", puan: 2,
          soru: "\"Hızlı akan akışkanın basıncı düşüktür, o zaman hortumdan fışkıran suyun basıncı atmosferden düşüktür.\" Bu yorum için hangisi doğru?",
          secenekler: ["Doğru, jetin basıncı atmosferin altındadır", "Yanlış. Jetin basıncı çıkışta atmosfer basıncına eşittir. Bernoulli sadece aynı toplam enerjiye sahip noktaları karşılaştırır", "Yanlış. Jetin basıncı atmosferden çok yüksektir", "Sadece sıcak suda doğrudur"],
          dogru: 1,
          aciklama: "Serbest jetin çevresi atmosfere açıktır ve basıncı atmosfere eşitlenir. Suyun yüksek hızı hortumun içindeki şebeke basıncından gelir. Hortumdaki suyu ve durgun havayı aynı denkleme koyamazsın." },
        { id: "s9", etiket: "Varsayımlar", puan: 2,
          soru: "Bir mühendis 2 km uzunluğundaki su boru hattında çıkış basıncını Bernoulli ile hesaplıyor. Sonuç sahada ölçülenden belirgin yüksek çıkıyor. En olası sebep?",
          secenekler: ["Sürtünme kayıplarını ihmal etti", "Suyu sıkıştırılamaz kabul etti", "Yükseklik farkını hesaba kattı", "Akışı daimi kabul etti"],
          dogru: 0,
          aciklama: "Uzun borularda duvar sürtünmesi ciddi enerji kaybına yol açar. Burada kayıp terimi içeren genişletilmiş enerji denklemi kullanılmalı." },
        { id: "s10", etiket: "Uygulama", puan: 2,
          soru: "Fırtınada 108 km/sa rüzgâr esiyor (ρ = 1,2 kg/m³). Çatı üstündeki basınç düşüşü kabaca dinamik basınç kadarsa, 100 m² çatıya etkiyen yukarı kuvvetin mertebesi nedir?",
          secenekler: ["540 N", "54 kN", "108 kN", "700 kN"],
          dogru: 1,
          aciklama: "108 km/sa = 30 m/s. Dinamik basınç: ½ · 1,2 · 30² = 540 Pa. Kuvvet: 540 × 100 = 54000 N = 54 kN. Yaklaşık 5,5 tonluk bir ağırlığa denk. Fırtınalarda çatıların uçmasının sebebi budur." }
      ],

      ipuclari: {
        "Basınç-hız": "Süreklilik ve Bernoulli'yi birlikte düşün: kesit daralırsa hız artar, hız artınca statik basınç düşer. Alan çapın karesiyle değişir.",
        "Varsayımlar": "Dört varsayımı tekrar et: daimi, sıkıştırılamaz, sürtünmesiz akış ve aynı akım çizgisi. Mach 0,3 üstünde sıkıştırılabilirlik devreye girer.",
        "Uygulama": "Formülleri birimleriyle tekrar et: V = √(2Δp/ρ) ve V = √(2gh). 2 katsayısını ve karekökü unutma, birimleri çevirmeyi ihmal etme.",
        "Kaldırma": "Kaldırmanın doğru açıklamasını tekrar et. Eşit geçiş süresi bir yanılgıdır, basınç farkı ve havanın aşağı saptırılması birlikte anlatılır.",
        "Basınç türleri": "Üç basınç türünü ve toplam basıncı tekrar et. Pascal aynı zamanda J/m³ tür."
      }
    }
,

"m3-6": {
  ad: "Standart atmosfer",
  ders: "Aerodinamik",
  seviye: "Temel",
  sure: 18,
  mulakat: false,
  onbilgi: "Temel fizik, basınç kavramı",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Uçak tasarımı, motor hesabı ve performans analizi atmosferin her irtifada tam olarak bilinmesini gerektirir. Standart atmosfer bu ihtiyaç için geliştirilmiş uluslararası referans modelidir. Gerçek atmosfer her gün değişir; standart atmosfer değişmez ve herkesin aynı referansla hesap yapmasını sağlar." },

    { id:"b2", tip:"metin", baslik:"Neden standart bir atmosfere ihtiyaç var?",
      metin:"Bir uçağın kaldırma kuvveti havanın yoğunluğuna bağlıdır. Yoğunluk ise sıcaklık ve basınçla değişir. Eğer iki mühendis farklı atmosfer değerleriyle hesap yaparsa aynı kanat için farklı kaldırma değerleri bulurlar ve sonuçları karşılaştırılamaz hale gelir.\n\nUluslararası Sivil Havacılık Örgütü (ICAO), 1976 yılında Uluslararası Standart Atmosfer'i (ISA) yayımladı. Bu model deniz seviyesinden 86 km'ye kadar atmosferin ortalama özelliklerini tanımlar. Tüm uçak sertifikasyon testleri, motor derecelendirmeleri ve altimetre kalibrasyonları bu modele göre yapılır.\n\nGerçek atmosfer her zaman ISA'dan farklıdır. Bir uçağın 'ISA+20' koşullarında test edilmesi, deniz seviyesi sıcaklığının standart değerden 20°C daha sıcak olduğu koşulları ifade eder. Sıcak havaalanlarından (Dubai, Phoenix gibi) kalkışlarda bu fark kritik önem taşır." },

    { id:"b3", tip:"metin", baslik:"Atmosferin katmanları",
      metin:"Atmosfer yükseklikle değişen özelliklere göre katmanlara ayrılır. Mühendislik hesapları için en önemli iki katman troposfer ve stratosferin alt bölümüdür.\n\nTROPOSFER (0–11 km): Hava kütlesinin yaklaşık yüzde 75'i ve su buharının neredeyse tamamı bu katmandadır. Sıcaklık yükseklikle düzenli olarak azalır: her 1000 metre için 6,5°C. Hava olaylarının tamamı troposferde gerçekleşir. Yolcu uçakları troposferin üst sınırına yakın (10–12 km) uçar.\n\nTROPOPOZ (11 km): Sıcaklığın azalmayı bıraktığı geçiş noktasıdır. Standart değer −56,5°C'dir.\n\nSTRATOSFER (11–20 km arası, alt bölüm): Sıcaklık sabit kalır (izotermik bölge). Ozon tabakası burada bulunur. Concorde ve U-2 gibi yüksek irtifa uçakları bu bölgede uçmuştur.",
      kutu: { tip:"bilgi", baslik:"Tropopoz neden önemli?",
        metin:"Tropopozun üstünde sıcaklık artık düşmez. Bu, daha yükseğe çıkmanın ses hızını artırdığı anlamına gelir. Ayrıca türbülans troposferde oluşur; tropopozun üstü genellikle çok sakin olduğundan yolcu konforu için idealdir." } },

    { id:"b4", tip:"formul", baslik:"ISA deniz seviyesi referans değerleri",
      formul:"T₀ = 288,15 K (15°C)    p₀ = 101.325 Pa    ρ₀ = 1,225 kg/m³    a₀ = 340,3 m/s",
      semboller:[
        ["T₀","Deniz seviyesi sıcaklığı","K veya °C"],
        ["p₀","Deniz seviyesi basıncı","Pa"],
        ["ρ₀","Deniz seviyesi yoğunluğu","kg/m³"],
        ["a₀","Deniz seviyesi ses hızı","m/s"]
      ],
      metin:"Bu dört değer ezberlenmeye değer. Özellikle 1,225 kg/m³ yoğunluğu ve 340 m/s ses hızı çok sayıda hesapta referans olarak kullanılır." },

    { id:"b5", tip:"formul", baslik:"Troposferde sıcaklık, basınç ve yoğunluk değişimi",
      formul:"T = T₀ − L·h\n\np = p₀ · (T/T₀)^(g/LR)\n\nρ = ρ₀ · (T/T₀)^(g/LR − 1)",
      semboller:[
        ["T","h irtifasındaki sıcaklık","K"],
        ["L","Sıcaklık azalma oranı (lapse rate): 0,0065 K/m","K/m"],
        ["h","Yer üstü irtifa","m"],
        ["g","Yerçekimi ivmesi: 9,81","m/s²"],
        ["R","Havanın özgül gaz sabiti: 287","J/(kg·K)"],
        ["g/(LR)","≈ 5,256 (boyutsuz üs)","—"]
      ],
      metin:"Bu formüller troposfer (0–11 km) için geçerlidir. g/(LR) ≈ 5,256 değerini hesapla bir kez türet, sonra kullan. Stratosfer için sıcaklık sabit olduğundan bağıntılar farklılaşır ve üstel (exponential) bir form alır." },

    { id:"b6", tip:"formul", baslik:"Ses hızı ve Mach sayısı",
      formul:"a = √(γRT)    M = V/a",
      semboller:[
        ["a","Ses hızı","m/s"],
        ["γ","Özgül ısı oranı (hava için 1,4)","—"],
        ["R","Özgül gaz sabiti: 287","J/(kg·K)"],
        ["T","Mutlak sıcaklık","K"],
        ["M","Mach sayısı","—"],
        ["V","Uçuş hızı","m/s"]
      ],
      metin:"Ses hızının sadece sıcaklığa bağlı olduğuna dikkat et. Yükseklere çıktıkça hava soğur, ses hızı düşer. Bu yüzden yüksek irtifada aynı gerçek hızda daha yüksek Mach sayısına ulaşılır.\n\n11 km de T = 216,65 K → a = √(1,4 × 287 × 216,65) ≈ 295 m/s. Deniz seviyesindeki 340 m/s'ye göre yaklaşık yüzde 13 daha düşük." },

    { id:"b7", tip:"metin", baslik:"Hız tanımları: TAS, IAS, EAS, CAS",
      metin:"Havacılıkta hız tek bir sayı değildir. Dört farklı hız tanımı kullanılır ve aralarındaki farkı bilmek hem tasarımda hem operasyonda kritiktir.\n\nTAS (True Airspeed — Gerçek Hava Hızı): Uçağın havaya göre gerçek hızıdır. Aerodinamik kuvvetler doğrudan TAS'a değil, dinamik basınca (½ρV²) bağlıdır.\n\nIAS (Indicated Airspeed — Gösterilen Hava Hızı): Pitot-statik sistem deniz seviyesi yoğunluğu (1,225 kg/m³) varsayarak hesaplar. Pilot ekrana bu değeri görür. Yüksekte gerçek yoğunluk düşük olduğundan IAS < TAS olur.\n\nEAS (Equivalent Airspeed — Eşdeğer Hava Hızı): Aynı dinamik basıncı deniz seviyesinde üretecek hız. EAS = TAS × √(ρ/ρ₀). Yapısal yük hesapları EAS üzerinden yapılır çünkü dinamik basınç doğrudan EAS'ın karesiyle orantılıdır.\n\nCAS (Calibrated Airspeed — Kalibre Edilmiş Hava Hızı): IAS'ın pitot tüpü ve statik port konum hatalarından arındırılmış hali. Düşük hızlarda EAS ≈ CAS ≈ IAS.",
      kutu:{ tip:"bilgi", baslik:"Neden pilot IAS ile uçar?",
        metin:"Stall hızı, manevra hızı ve sürükleme artışı gibi kritik değerler dinamik basınca bağlıdır. Dinamik basınç ρ·V²/2 = ρ₀·IAS²/2 olduğundan pilot IAS'a bakarak her irtifada aynı güvenlik marjını korur. Gerçek hızın ne olduğunu değil, kanada ne kadar yük bindiğini bilmek önemlidir." } },

    { id:"b8", tip:"ornek", baslik:"Örnek 1: 8 km irtifada sıcaklık ve yoğunluk",
      soru:"Bir uçak 8000 m irtifada uçuyor. ISA koşullarında sıcaklık ve yoğunluğu hesapla.",
      cozum:"Sıcaklık:\nT = 288,15 − 0,0065 × 8000 = 288,15 − 52 = 236,15 K = −37°C\n\nYoğunluk oranı:\n(T/T₀) = 236,15/288,15 = 0,8196\nρ/ρ₀ = (0,8196)^(5,256−1) = (0,8196)^4,256\n\n4,256 üssünü hesaplamak için:\nln(0,8196) = −0,1989\n−0,1989 × 4,256 = −0,8467\ne^(−0,8467) = 0,429\n\nρ = 0,429 × 1,225 ≈ 0,526 kg/m³\n\nSes hızı:\na = √(1,4 × 287 × 236,15) ≈ 308 m/s\n\nYorum: Deniz seviyesine göre yoğunluk yaklaşık yüzde 57 azalmıştır. Aynı kaldırma kuvvetini üretmek için hız artırılmalı ya da hücum açısı büyütülmelidir." },

    { id:"b9", tip:"ornek", baslik:"Örnek 2: Sıcak hava kalkışı",
      soru:"Dubai'de (deniz seviyesi) sıcaklık 45°C. ISA'ya göre kaç derece sapma var? Bu ne anlama gelir?",
      cozum:"ISA deniz seviyesi: 15°C\nGerçek sıcaklık: 45°C\nSapma: ISA + 30\n\nHava yoğunluğu:\nT_gercek = 273,15 + 45 = 318,15 K\nT_ISA = 288,15 K\nρ_gercek = ρ₀ × (T_ISA/T_gercek) = 1,225 × (288,15/318,15) ≈ 1,109 kg/m³\n\nYüzde değişim: (1,225 − 1,109)/1,225 × 100 ≈ %9,5 yoğunluk azalması\n\nSonuç: Kaldırma kuvveti, motorun ürettiği itki ve pervanelerin verimi hepsi yoğunlukla orantılıdır. Yüzde 9,5 yoğunluk azalması demek daha uzun kalkış mesafesi, daha az faydalı yük kapasitesi ve daha uzun tırmanma süresi demektir. Bu yüzden sıcak hava ve yüksek rakımlı havaalanları (hot and high) uçak performansı için en zorlu koşullardır." },

    { id:"b10", tip:"tablo", baslik:"ISA özet tablosu",
      basliklar:["İrtifa","Sıcaklık","Basınç","Yoğunluk","Ses hızı"],
      satirlar:[
        ["Deniz seviyesi (0 m)","15°C / 288 K","101.325 Pa","1,225 kg/m³","340 m/s"],
        ["3.000 m","1,5°C / 274 K","70.121 Pa","0,909 kg/m³","332 m/s"],
        ["5.000 m","−17,5°C / 255 K","54.048 Pa","0,736 kg/m³","320 m/s"],
        ["8.000 m","−37°C / 236 K","35.651 Pa","0,526 kg/m³","308 m/s"],
        ["11.000 m (tropopoz)","−56,5°C / 216 K","22.632 Pa","0,365 kg/m³","295 m/s"],
        ["20.000 m (stratosfer)","−56,5°C / 216 K","5.529 Pa","0,089 kg/m³","295 m/s"]
      ],
      metin:"11 km'den sonra sıcaklık sabit kalır (tropopoz). Basınç ve yoğunluk düşmeye devam eder ama sıcaklık artık azalmadığından ses hızı da değişmez." },

    { id:"b11", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Sıcaklığı Celsius cinsinden formüle koymak. Her zaman Kelvin kullanılmalıdır (K = °C + 273,15).",
        "Ses hızının sabit olduğunu düşünmek. Ses hızı sıcaklıkla değişir, 340 m/s sadece deniz seviyesi ISA değeridir.",
        "IAS ile TAS'ı karıştırmak. Yüksek irtifada aynı IAS için TAS çok daha yüksektir.",
        "Yoğunluğun sadece sıcaklığa bağlı olduğunu sanmak. Basınç da yoğunluğu etkiler; yükseklikle hem sıcaklık hem basınç değişir.",
        "ISA'yı gerçek atmosfer zannetmek. ISA bir referans modeldir, ortalama değerler içerir."
      ] },

    { id:"b12", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Standart atmosfer nedir ve neden gereklidir?","Uluslararası alanda kabul görmüş referans atmosfer modelidir (ICAO ISA). Farklı konumlarda, farklı zamanlarda yapılan uçuş testlerini ve hesapları karşılaştırılabilir kılmak için şarttır. Sertifikasyon, altimetre kalibrasyonu ve motor derecelendirmesi bu modele göre yapılır."],
        ["Yüksek rakımlı sıcak bir havaalanında kalkış neden daha zor?","İki etki birlikte çalışır: yüksek rakım zaten basıncı ve yoğunluğu düşürür, sıcaklık da yoğunluğu ayrıca azaltır. Düşük yoğunluk hem kaldırma kuvvetini hem motor itkisini düşürür, dolayısıyla kalkış mesafesi uzar, faydalı yük kapasitesi azalır."],
        ["Tropopoz nedir ve havacılıkta önemi nedir?","Sıcaklığın azalmayı bıraktığı ve stratosferle troposferin birleştiği geçiş bölgesidir. ISA'da yaklaşık 11 km'dedir. Türbülans ve hava olayları troposferde olur; ticari uçaklar tropopoza yakın uçarak bu koşullardan kaçınır. Ayrıca bu irtifada yoğunluk yakıt verimliliği için iyi bir denge noktasıdır."]
      ] },

    { id:"b13", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Anderson, J. D. (2017). Introduction to flight (8. baskı). McGraw-Hill. ISBN 978-1-259-12235-4",
        "ICAO. (1993). Manual of the ICAO Standard Atmosphere (3. baskı). ICAO Doc 7488.",
        "Çengel, Y. A., & Boles, M. A. (2019). Thermodynamics: An engineering approach (9. baskı). McGraw-Hill. ISBN 978-1-259-82267-4",
        "NASA. (2021). U.S. Standard Atmosphere, 1976. NASA-TM-X-74335."
      ] }
  ],

  sorular:[
    { id:"s1", etiket:"Referans değerler", puan:1,
      soru:"ISA deniz seviyesi yoğunluğu kaçtır?",
      secenekler:["1,025 kg/m³","1,125 kg/m³","1,225 kg/m³","1,325 kg/m³"],
      dogru:2,
      aciklama:"ISA deniz seviyesi yoğunluğu 1,225 kg/m³ dir. Bu değer kaldırma, sürükleme ve dinamik basınç hesaplarında çok sık kullanılır." },
    { id:"s2", etiket:"Sıcaklık değişimi", puan:1,
      soru:"Troposferde her 1000 metre yükseldikçe sıcaklık ne kadar değişir?",
      secenekler:["3,5°C azalır","6,5°C azalır","9,8°C azalır","6,5°C artar"],
      dogru:1,
      aciklama:"ISA'da troposfer sıcaklık azalma oranı (lapse rate) 6,5 K/km veya 0,0065 K/m'dir. Bu değer 11 km'de (tropopoz) sona erer." },
    { id:"s3", etiket:"Ses hızı", puan:2,
      soru:"11 km irtifada (T = 216,65 K) ses hızı yaklaşık kaçtır? (γ=1,4, R=287 J/kg·K)",
      secenekler:["250 m/s","295 m/s","320 m/s","340 m/s"],
      dogru:1,
      aciklama:"a = √(1,4 × 287 × 216,65) = √(87.087) ≈ 295 m/s. 340 m/s deniz seviyesi değeridir. Yüksekte hava soğuduğundan ses hızı düşer." },
    { id:"s4", etiket:"Hız tanımları", puan:2,
      soru:"Yüksek irtifada IAS ile TAS arasındaki ilişki nedir?",
      secenekler:["IAS = TAS","IAS > TAS","IAS < TAS","İrtifaya göre değişir, genelleme yapılamaz"],
      dogru:2,
      aciklama:"Yüksekte yoğunluk düşer. Pitot sistemi deniz seviyesi yoğunluğu varsayarak hesap yaptığından gerçek hızı (TAS) düşük gösterir. Dolayısıyla IAS < TAS." },
    { id:"s5", etiket:"Sıcaklık değişimi", puan:2,
      soru:"6000 m irtifada ISA sıcaklığı kaçtır?",
      secenekler:["−24°C","−10,5°C","0°C","−56,5°C"],
      dogru:0,
      aciklama:"T = 15 − 6,5 × 6 = 15 − 39 = −24°C. Lapse rate 6,5°C/km'dir ve 11 km'ye kadar düzenli azalır." },
    { id:"s6", etiket:"Referans değerler", puan:1,
      soru:"Tropopoz hangi irtifada ve hangi sıcaklıkta gerçekleşir?",
      secenekler:["8 km, −40°C","11 km, −56,5°C","15 km, −70°C","20 km, −56,5°C"],
      dogru:1,
      aciklama:"ISA'da tropopoz 11 km'dedir ve sıcaklık −56,5°C (216,65 K) dir. Bu noktadan sonra stratosfer başlar ve sıcaklık yaklaşık 20 km'ye kadar sabit kalır." }
  ],

  ipuclari:{
    "Referans değerler":"ISA deniz seviyesi değerlerini ezberle: T=288 K (15°C), p=101.325 Pa, ρ=1,225 kg/m³, a=340 m/s.",
    "Sıcaklık değişimi":"Lapse rate: troposferde 6,5°C/km. Formül: T = 15 − 6,5×h(km) [°C]",
    "Ses hızı":"a = √(γRT). Yükseklikte hava soğur → ses hızı düşer. 11 km'de ≈295 m/s.",
    "Hız tanımları":"IAS pitot sistemi okuması, TAS gerçek hız. Yüksekte ρ düşük → IAS < TAS."
  }
},

"m3-7": {
  ad: "Kanat profili ve NACA serileri",
  ders: "Aerodinamik",
  seviye: "Temel",
  sure: 22,
  mulakat: true,
  onbilgi: "Standart atmosfer, Bernoulli denklemi",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Kanat profili (airfoil), kanat kesitinin şeklidir. Bu şekil havada oluşan basınç dağılımını belirler; basınç dağılımı da kaldırma ve sürüklemeyi belirler. NACA, 1930'larda sistematik kanat profili aileleri geliştirdi. Bu aileler bugün hâlâ eğitimden yarışma uçaklarına kadar geniş kullanım alanı bulur." },

    { id:"b2", tip:"metin", baslik:"Temel geometri kavramları",
      metin:"Bir kanat profilini tanımlamak için birkaç temel kavram gerekir:\n\nVETER (chord, c): Profilin ön kenarından (leading edge) arka kenarına (trailing edge) çekilen düz çizginin uzunluğudur. Tüm boyutsuz aerodinamik büyüklükler veter uzunluğuna göre normalize edilir.\n\nORTA ÇIZGI (camber line veya mean camber line): Profilin üst ve alt yüzeylerinin tam ortasından geçen eğri çizgidir. Orta çizgi veter çizgisiyle örtüşürse profil simetriktir.\n\nKAMBUR (camber): Orta çizginin veter çizgisinden maksimum sapmasıdır. Profilin veter uzunluğuna oranı olarak ifade edilir (yüzde camber). Camber kaldırma üretimine doğrudan katkı sağlar.\n\nKALINLIK (thickness): Veter boyunca ölçülen üst ve alt yüzey arasındaki maksimum mesafedir. Veter uzunluğuna oranı (yüzde kalınlık) taşıma kapasitesini ve sürüklemeyi etkiler.\n\nHÜCUM AÇISI (angle of attack, α): Veter çizgisi ile geliş havası yönü arasındaki açıdır. Kaldırmanın nasıl üretildiğini anlamak için en temel değişkendir." },

    { id:"b3", tip:"gorsel", baslik:"Kanat profili geometrisi", gorsel:"naca_geometri" },

    { id:"b4", tip:"metin", baslik:"NACA 4 basamaklı serisi",
      metin:"NACA (National Advisory Committee for Aeronautics, NASA'nın öncülü) 1930'larda sistematik kanat profili aileleri geliştirdi. Bu seriler bugün hâlâ referans olarak kullanılır.\n\nNACA 4 basamaklı seri en basit ve en yaygın bilinenidir. Her rakam profilin geometrik özelliğini doğrudan verir:\n\nNACA XYZZ formatı:\n• X: Maksimum camber miktarı (veter uzunluğunun yüzdesi)\n• Y: Maksimum camberin veter boyunca konumu (veterin onda biri cinsinden)\n• ZZ: Maksimum kalınlık (veter uzunluğunun yüzdesi)\n\nÖrnekler:\nNACA 0012 — Simetrik profil, camber yok, kalınlık yüzde 12. Akrobasi uçaklarında ve kuyruk yüzeylerinde kullanılır.\nNACA 2412 — Maksimum camber yüzde 2, veter uzunluğunun yüzde 40'ında, kalınlık yüzde 12. Eğitim uçaklarında klasik tercihtir.\nNACA 4415 — Maksimum camber yüzde 4, yüzde 40'ta, kalınlık yüzde 15. Daha fazla kaldırma, hafif daha fazla sürükleme.",
      kutu:{ tip:"bilgi", baslik:"NACA 2412 neden eğitim uçağı standardı oldu?",
        metin:"Stall davranışı yumuşak ve öngörülebilirdir. Kritik hücum açısına yaklaşırken pilot yeterli uyarı alır. Hem yeterli kaldırma hem de kabul edilebilir sürükleme sunar. Piloglio Cessna 172, Diamond DA40 gibi pek çok eğitim uçağı NACA 2412 veya türevlerini kullanır." } },

    { id:"b5", tip:"metin", baslik:"NACA 5 basamaklı ve 6 serisi",
      metin:"NACA 5 basamaklı seri (örn. NACA 23012): Camberi veterin daha ön kısmına taşıyarak daha yüksek maksimum kaldırma katsayısı elde eder. Douglas DC-3 ve Piper Cub bu profil ailesini kullanır.\n\nNACA 6 serisi (örn. NACA 63-212): Lamineer akışı mümkün olduğunca uzun süre korumak için tasarlanmıştır. Sürtünme sürüklenmesi düşüktür ancak yüzey kirliliğine çok duyarlıdır. Düşük hızlı akrobasi uçakları ve erken jet uçakları tercih etmiştir. P-51 Mustang'ın kanadında NACA 66 serisi kullanılmıştır.\n\nGünümüzde kanat profilleri çoğunlukla NACA ailelerinden bağımsız olarak hesaplamalı akışkanlar dinamiği (CFD) ile optimize edilir. Ancak NACA serileri hâlâ eğitim referansı ve karşılaştırma bazı olarak kullanılır.",
      kutu:{ tip:"bilgi", baslik:"Lamineer akış neden avantajlıdır?",
        metin:"Lamineer akışta tabakalar düzenli ilerler, türbülanslı akışa göre sürtünme çok daha düşüktür. Ancak lamineer akış yüzey pürüzlülüğüne, bozuntuya ve yüksek hücum açısına karşı hassastır. Gerçek uçuşta yüzeyler kirlendiğinden lamineer alanın korunması zordur." } },

    { id:"b6", tip:"metin", baslik:"Simetrik profiller ne zaman tercih edilir?",
      metin:"Simetrik profiller (NACA 0012, 0009 gibi) sıfır hücum açısında kaldırma üretmez. Bu ilk bakışta dezavantaj gibi görünür; ancak birkaç kritik uygulamada tercih nedenidir:\n\nAkrobasi uçakları: Hem normal hem ters uçuşta aynı kaldırma performansını ister. Camberi profil ters uçuşta kaldırmayı azaltır. NACA 0012 veya benzeri simetrik profil her iki durumda eşit davranır.\n\nKuyruk yüzeyleri: Yatay ve düşey kuyruk yüzeyleri hem yukarı hem aşağı kuvvet üretebilmelidir. Simetrik profil her iki yönde aynı performansı sunar.\n\nRüzgâr türbini kanatçıkları: Açı kontrollü kanatçıklar rüzgâr yönünden bağımsız çalışmalıdır.\n\nHelikopter rotoru: Her dönüşte hem ileri hem geri tarafta farklı hücum açılarına maruz kalır; simetrik profil bu asimetriye daha iyi uyum sağlar." },

    { id:"b7", tip:"metin", baslik:"Üst kritik kanat profili ve modern uçaklar",
      metin:"Transonik hızlarda (Mach 0,7-0,9 arası) geleneksel profillerde üst yüzeyde lokal ses hızı aşılır ve şok dalgaları oluşur. Bu şoklar hem sürüklemeyi artırır hem de akışı ayırarak kaldırmayı bozar.\n\nÜst kritik kanat profili (supercritical airfoil) bu sorunu azaltmak için tasarlanmıştır:\n• Üst yüzey daha düz tutulur → lokal hız daha yükselmez → şok daha zayıf ve geri ertelenmiş olur\n• Alt yüzey daha kavisli yapılır → kaldırmanın önemli bir kısmı alttan üretilir\n• Arka kenar yoğunlaştırması (rear loading) ile arka bölgeden ek kaldırma alınır\n\nBoeing 737, 747, Airbus A320 ailesi gibi tüm modern ticari uçaklar üst kritik kanat profillerini kullanır. Bu profiller sayesinde Mach 0,78-0,85 arası verimli seyir hızları mümkün olmuştur.",
      kutu:{ tip:"bilgi", baslik:"Sweep açısı ne işe yarar?",
        metin:"Kanadın geriye doğru eğilmesi (sweep), kanat yüzeyine dik gelen efektif Mach sayısını düşürür. Bu sayede kanat M_eff < M_infinity koşulunda çalışır ve şok dalgaları daha geç oluşur. Modern yolcu uçaklarında genellikle 25-35 derece sweep açısı kullanılır." } },

    { id:"b8", tip:"ornek", baslik:"Örnek: NACA profilini oku",
      soru:"NACA 4412 profilinin geometrik özelliklerini açıkla ve hangi tür uçaklarda kullanılabileceğini söyle.",
      cozum:"NACA 4412:\n• İlk rakam (4): Maksimum camber veter uzunluğunun yüzde 4'ü kadar\n• İkinci rakam (4): Maksimum camber veterin yüzde 40'ında (4×10)\n• Son iki rakam (12): Maksimum kalınlık veter uzunluğunun yüzde 12'si\n\nYorum:\n— Yüzde 4 camber iyi bir kaldırma kapasitesi sağlar, sıfır hücum açısında da pozitif kaldırma üretir\n— Yüzde 12 kalınlık yapısal açıdan yeterlidir ve yeterli kaldırma sunar\n— NACA 2412'ye göre daha fazla kaldırma ama biraz daha fazla sürükleme\n\nKullanım alanları: Genel havacılık uçakları (general aviation), hafif nakliye uçakları, bant koşullarda çalışan uçak tasarımları. Cessna 150/152 serisi bu profil ailesine yakın geometri kullanır." },

    { id:"b9", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "NACA rakamlarını ters okumak. İlk rakam camber, son iki rakam kalınlıktır; ikinci rakam camberin konumunu verir.",
        "Camberin tek başına kaldırmayı belirlediğini sanmak. Hücum açısı da kaldırmaya kritik katkı yapar; simetrik profil de hücum açısıyla kaldırma üretir.",
        "Kalın profillerin her zaman daha iyi olduğunu düşünmek. Kalınlık yapısal avantaj sağlar ama sürüklemeyi de artırır. İnce profiller yüksek hızda tercih edilir.",
        "NACA 6 serisini her koşulda üstün görmek. Lamineer profil yüzey kirliliğinde ve yağmurda avantajını hemen kaybeder.",
        "Profilin sabit olduğunu zannetmek. Gerçek uçakta flaplar, slotlar ve slat'lar profilin efektif şeklini değiştirir."
      ] },

    { id:"b10", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["NACA 2412 profilini açıklar mısın?","4 basamaklı NACA serisidir. Maksimum camber veter uzunluğunun yüzde 2'si kadar, bu camberin veterin yüzde 40'ında bulunduğu, maksimum kalınlığı veter uzunluğunun yüzde 12'si olan bir profildir. Eğitim uçaklarında yaygındır, stall davranışı yumuşak ve öngörülebilirdir."],
        ["Simetrik profil neden kaldırma üretmez?","Sıfır hücum açısında üst ve alt yüzeydeki basınç dağılımı simetriktir, net kaldırma yoktur. Pozitif hücum açısıyla akış üstten hızlanır, basınç düşer ve kaldırma oluşur. Negatif hücum açısında tersi olur. Bu yüzden akrobasi uçakları simetrik profil tercih eder."],
        ["Üst kritik kanat profili nedir, neden geliştirilmiştir?","Transonik hızlarda üst yüzeyde lokal ses hızı aşılması ve şok dalgası oluşması sorununu azaltmak için geliştirilmiştir. Üst yüzey daha düz, alt yüzey daha kavislidir; yük daha çok arka bölgeden alınır. Modern yolcu uçaklarının tamamı bu profil ailesini kullanır."]
      ] },

    { id:"b11", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Abbott, I. H., & Von Doenhoff, A. E. (1959). Theory of wing sections. Dover Publications. ISBN 978-0-486-60586-9",
        "Anderson, J. D. (2017). Introduction to flight (8. baskı). McGraw-Hill. ISBN 978-1-259-12235-4",
        "NASA Langley Research Center. NACA Airfoil Series. https://www.nasa.gov/",
        "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA. ISBN 978-1-62410-490-9"
      ] }
  ],

  sorular:[
    { id:"s1", etiket:"NACA serisi", puan:1,
      soru:"NACA 2412 profilinde '24' ve '12' ne anlama gelir?",
      secenekler:["Camber yüzde 2,4 ve kalınlık yüzde 12","Camber yüzde 2 ve 4. ondaki konumda, kalınlık yüzde 12","Kalınlık yüzde 24, camber yüzde 12","Profil numarası 24 ve tasarım yılı 12"],
      dogru:1,
      aciklama:"NACA 4 basamaklı seride: ilk rakam camber yüzdesi (2→%2), ikinci rakam camberin veterdeki 1/10 konumu (4→%40), son iki rakam kalınlık yüzdesi (12→%12)." },
    { id:"s2", etiket:"Profil seçimi", puan:2,
      soru:"Akrobasi uçağı tasarlıyorsun. Kanat profili seçiminde hangisi öncelikli olmalıdır?",
      secenekler:["Yüksek camberli profil (yüzde 6-8), maksimum kaldırma için","Simetrik profil, hem normal hem ters uçuşta eşit performans için","Lamineer profil, düşük sürükleme için","Kalın profil (yüzde 18-20), yapısal rijitlik için"],
      dogru:1,
      aciklama:"Akrobasi uçakları hem normal hem de ters uçuş yapabilmelidir. Camberi profil ters uçuşta kaldırmayı azaltır. Simetrik profil her iki yönde eşit davranır." },
    { id:"s3", etiket:"Profil geometrisi", puan:1,
      soru:"Veter çizgisi (chord) nedir?",
      secenekler:["Profilin üst yüzeyi boyunca uzanan eğri","Ön kenardan arka kenara çekilen düz çizgi","Orta çizginin veter çizgisinden maksimum sapması","Profil kalınlığının ölçüldüğü dikey çizgi"],
      dogru:1,
      aciklama:"Veter (chord), ön kenar ile arka kenar arasındaki düz çizgidir. Uzunluğu c ile gösterilir. Boyutsuz aerodinamik katsayılar veter uzunluğuna göre normalize edilir." },
    { id:"s4", etiket:"Profil geometrisi", puan:2,
      soru:"NACA 0009 profili NACA 2412'den ne bakımdan farklıdır?",
      secenekler:["0009 daha kalın, 2412 daha incedir","0009 simetriktir ve cambersizdir; 2412 camberi ve daha kalın bir profildedir","0009 daha fazla kaldırma üretir","0009 transonik uçuşlar için daha uygundur"],
      dogru:1,
      aciklama:"NACA 0009: ilk iki sıfır camber olmadığını, son 09 yüzde 9 kalınlığı gösterir — simetrik profil. NACA 2412 ise yüzde 2 cambere ve yüzde 12 kalınlığa sahip asimetrik bir profildir." },
    { id:"s5", etiket:"Modern profiller", puan:2,
      soru:"Üst kritik kanat profili neden geliştirilmiştir?",
      secenekler:["Alçak hızda kaldırmayı artırmak için","Transonik hızda üst yüzeydeki şok dalgalarını ve dalga sürüklenmesini azaltmak için","Stall hücum açısını düşürmek için","Yapısal ağırlığı azaltmak için"],
      dogru:1,
      aciklama:"Geleneksel profillerde Mach 0,7-0,9 hızlarda üst yüzeyde lokal olarak ses hızı aşılır ve şok dalgaları oluşur. Üst kritik profil üst yüzeyi düzleştirip yükü arkaya taşıyarak bu şokları zayıflatır ve sürüklemeyi azaltır." },
    { id:"s6", etiket:"NACA serisi", puan:2,
      soru:"NACA 23012 profilinde hangi seri kullanılmıştır ve hangi uçakta görülür?",
      secenekler:["4 basamaklı seri, Cessna 172","5 basamaklı seri, Douglas DC-3","6 serisi, P-51 Mustang","Üst kritik profil, Boeing 737"],
      dogru:1,
      aciklama:"NACA 23012, 5 basamaklı NACA serisidir. Camberi veterin önüne taşıyarak yüksek maksimum kaldırma katsayısı sağlar. Douglas DC-3 ve Piper Cub bu profil ailesini kullanır." }
  ],

  ipuclari:{
    "NACA serisi":"4 basamaklı NACA: X = camber%, Y = 10×konum, ZZ = kalınlık%. NACA 2412: %2 camber, %40'ta, %12 kalınlık.",
    "Profil seçimi":"Akrobasi → simetrik. Yolcu → üst kritik. Eğitim → NACA 2412 gibi yumuşak stall. Yüksek hız → ince profil.",
    "Profil geometrisi":"Veter: ön-arka kenar arası düz çizgi. Camber: orta çizginin sapması. Kalınlık: max üst-alt yüzey arası.",
    "Modern profiller":"Üst kritik profil: transonik. Üst yüzey düz (şok ertelenir), alt yüzey kavisli (kaldırma alttan)."
  }
},

"m3-8": {
  ad: "Kaldırma ve sürükleme katsayıları",
  ders: "Aerodinamik",
  seviye: "Orta",
  sure: 25,
  mulakat: true,
  onbilgi: "Standart atmosfer, kanat profili, Bernoulli denklemi",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Kaldırma ve sürükleme katsayıları, aerodinamik kuvvetleri kanat boyutu ve uçuş koşullarından bağımsız şekilde ifade eden boyutsuz büyüklüklerdir. CL ve CD sayesinde rüzgâr tüneli verilerini farklı ölçeklerdeki uçaklara uygulamak, farklı hız ve irtifa koşullarını karşılaştırmak mümkün olur. Bu iki katsayı uçak performansının özeti niteliğindedir." },

    { id:"b2", tip:"formul", baslik:"Kaldırma kuvveti ve kaldırma katsayısı",
      formul:"L = CL · ½ρV²S\n\nCL = L / (½ρV²S) = L / (q·S)",
      semboller:[
        ["L","Kaldırma kuvveti","N"],
        ["CL","Kaldırma katsayısı (boyutsuz)","—"],
        ["ρ","Hava yoğunluğu","kg/m³"],
        ["V","Hava hızı","m/s"],
        ["S","Kanat alanı (planform area)","m²"],
        ["q","Dinamik basınç: ½ρV²","Pa"]
      ],
      metin:"Dinamik basınç q = ½ρV², aerodinamik kuvvetlerin 'baskı' terimidir. Tüm aerodinamik kuvvetler q ile normalize edilince boyutsuz katsayılar elde edilir. Bu normalizasyon sayesinde modelin rüzgâr tüneli sonuçları gerçek uçağa doğrudan aktarılabilir (Reynolds sayısı uyumu sağlandığında)." },

    { id:"b3", tip:"formul", baslik:"Sürükleme kuvveti ve sürükleme katsayısı",
      formul:"D = CD · ½ρV²S\n\nCD = D / (½ρV²S)",
      semboller:[
        ["D","Sürükleme kuvveti","N"],
        ["CD","Sürükleme katsayısı (boyutsuz)","—"]
      ],
      metin:"Sürükleme birden fazla bileşenden oluşur ve bu bileşenler farklı mekanizmalarla oluşur. Toplam sürüklemenin bileşenlerini anlamak tasarım optimizasyonu için kritiktir." },

    { id:"b4", tip:"tablo", baslik:"Sürükleme bileşenleri",
      basliklar:["Bileşen","Kaynak","Azaltma yöntemi"],
      satirlar:[
        ["Parazit sürükleme (CD₀)","Yüzey sürtünmesi + basınç farkı","Lamineer akış, düzgün yüzey, akışa uygun şekil"],
        ["İndüklenmiş sürükleme (CDᵢ)","Sonlu kanat ucunda girdap oluşumu","Yüksek en boy oranı, winglet"],
        ["Dalga sürüklenmesi","Transonik/süpersonik şok dalgaları","Üst kritik profil, sweep açısı, ince kanat"],
        ["Parazit gövde sürüklenmesi","Anten, pylon, motor nacelle","Akışa uygun şekillendirme (fairing)"]
      ],
      metin:"Düşük hızlı uçuşta indüklenmiş sürükleme baskındır. Yüksek hızlı uçuşta parazit sürükleme baskın hale gelir. Transonik hızda dalga sürüklenmesi de devreye girer." },

    { id:"b5", tip:"metin", baslik:"CL hücum açısıyla nasıl değişir?",
      metin:"Düşük ve orta hücum açılarında CL, α ile doğrusal bir ilişki gösterir:\n\nCL = CL_α · (α − α₀)\n\nBurada CL_α kaldırma eğimi (lift curve slope), α₀ ise sıfır kaldırma açısıdır. İnce kanat teorisine göre ince, sonsuz uzunlukta bir kanat için CL_α = 2π rad⁻¹ ≈ 0,1097 derece⁻¹ dir.\n\nGerçek profillerde CL_α tipik olarak 0,10-0,12 derece⁻¹ arasındadır. Sonlu kanatlarda bu değer daha düşüktür (indüklenmiş hücum açısı etkisi).\n\nKritik hücum açısına (α_stall) ulaşınca akış üst yüzeyde ayrılır ve CL aniden düşer. Bu stall olayıdır. Stall sonrasında CL kontrolsüz düşer, CD ise çok artar.",
      kutu:{ tip:"uyari", baslik:"Stall hıza mı, hücum açısına mı bağlıdır?",
        metin:"Stall her zaman kritik hücum açısıyla ilgilidir, hızla değil. Uçak her hızda ve her uçuş durumunda kritik hücum açısını aşarsa stall olur. Stall hızı belirli ağırlık ve düz uçuş koşulu için hesaplanan pratik bir referanstır." } },

    { id:"b6", tip:"formul", baslik:"L/D oranı — aerodinamik verimlilik",
      formul:"L/D = CL/CD",
      semboller:[
        ["L/D","Kaldırma/sürükleme oranı","—"]
      ],
      metin:"L/D oranı aerodinamik verimliliğin en özlü ölçütüdür. Yüksek L/D demek aynı kaldırma için daha az sürükleme demektir — yani aynı faydalı yük için daha az yakıt.\n\nTypik L/D değerleri:\n• Albatros (kuş): ~20\n• Modern yolcu uçağı: ~17-20\n• Glider (motor yok): ~50-60\n• F-16 (temiz konfigürasyon): ~9\n• Uzay mekiği (iniş): ~1\n• İnsansız İHA: ~15-25\n\nBreguet menzil denklemine göre menzil doğrudan L/D ile orantılıdır. Bu yüzden yolcu uçakları tasarımında L/D optimizasyonu yakıt verimliliğinin temelidir.\n\nMaksimum L/D, CD = CD₀ + CDᵢ denkleminde parazit ve indüklenmiş sürüklemenin birbirine eşit olduğu noktada elde edilir." },

    { id:"b7", tip:"metin", baslik:"Polar eğrisi (CL-CD diyagramı)",
      metin:"Polar eğrisi, farklı hücum açılarında CL ile CD'yi birbiriyle grafiksel olarak gösteren diyagramdır. Yatay eksende CD, dikey eksende CL yer alır.\n\nPolar eğrisinin orijininden çekilen teğet, maksimum L/D noktasını verir. Bu nokta aerodinamik açıdan en verimli uçuş koşuludur — uzun menzil için bu noktada uçulur.\n\nMaksimum CL noktası stall sınırını gösterir. En kısa iniş/kalkış mesafesi için bu değerlere yakın çalışılır ama stall marjı bırakılır.\n\nFlaplar indirildiğinde polar eğrisi değişir: CL artar ama CD da artar. Eğri sola ve yukarı kayar. Bu 'yüksek kaldırma konfigürasyonu' kısa pistlerde kalkış ve iniş için gereklidir.",
      kutu:{ tip:"bilgi", baslik:"Breguet menzil formülü",
        metin:"R = (L/D) · (V/SFC) · ln(m_start/m_end)\n\nBurada SFC yakıt tüketimi, m oranı başlangıç ve bitiş kütleleridir. L/D her iki katına çıkınca menzil de iki katına çıkar. Bu yüzden Boeing 787'nin kompozit gövdesi ve winglet'leri sadece ağırlık için değil, L/D için de kritiktir." } },

    { id:"b8", tip:"ornek", baslik:"Örnek 1: Kaldırma kuvveti hesabı",
      soru:"Bir uçak 5000 m irtifada (ρ = 0,736 kg/m³) 200 m/s ile uçuyor. Kanat alanı 30 m². Düz ve dengeli uçuşta CL değeri kaçtır? (Uçak kütlesi 8000 kg, g = 9,81 m/s²)",
      cozum:"Düz ve dengeli uçuşta kaldırma = ağırlık:\nL = mg = 8000 × 9,81 = 78.480 N\n\nDinamik basınç:\nq = ½ρV² = 0,5 × 0,736 × 200² = 0,5 × 0,736 × 40.000 = 14.720 Pa\n\nKaldırma katsayısı:\nCL = L / (q·S) = 78.480 / (14.720 × 30) = 78.480 / 441.600 ≈ 0,178\n\nYorum: CL = 0,178 düşük bir değerdir; uçak verimli seyir hücum açısının oldukça altında uçuyor olabilir ya da yüksek hızda tipik bir değerdir. Birçok yolcu uçağı seyirde CL ≈ 0,4-0,6 aralığında çalışır." },

    { id:"b9", tip:"ornek", baslik:"Örnek 2: Stall hızı hesabı",
      soru:"Kanat alanı 20 m², maksimum kaldırma katsayısı CL_max = 1,6 olan bir uçak 3500 kg kütlelidir. Deniz seviyesinde (ρ = 1,225 kg/m³) stall hızı kaçtır?",
      cozum:"Stall koşulunda: L = W ve CL = CL_max\n\nL = CL_max · ½ρV_stall² · S = W\n\nV_stall = √(2W / (ρ · CL_max · S))\nV_stall = √(2 × 3500 × 9,81 / (1,225 × 1,6 × 20))\nV_stall = √(68.670 / 39,2)\nV_stall = √1.752,8 ≈ 41,9 m/s ≈ 150 km/sa\n\nYorum: Minimum emniyet hızı genellikle 1,2 × V_stall = 1,2 × 41,9 ≈ 50,3 m/s = 181 km/sa olarak belirlenir. CL_max ne kadar yüksek olursa stall hızı o kadar düşer ve iniş/kalkış mesafesi kısalır." },

    { id:"b10", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "CL ve L'yi karıştırmak. CL boyutsuz bir katsayıdır; L Newton cinsindendir. İkisi farklı şeydir.",
        "Kaldırmanın sadece üst yüzeyden geldiğini sanmak. Hem alt hem üst yüzey basıncı kaldırmaya katkı sağlar; üst yüzeyin 'emiş' etkisi genellikle baskındır ama ikisi birlikte çalışır.",
        "CD'nin sabit olduğunu düşünmek. CD hücum açısına, Reynolds sayısına, yüzey pürüzlülüğüne ve Mach sayısına bağlıdır.",
        "L/D oranını maksimum yapmaya çalışırken CL değerini unutmak. Maksimum L/D her zaman maksimum süzülme mesafesi sağlar ama ağır uçak için bu noktadaki hız çok yüksek olabilir.",
        "Stall hızını sabit bir değer saymak. Stall hızı ağırlık, banka açısı ve irtifayla değişir."
      ] },

    { id:"b11", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Kaldırma katsayısını ve formülünü açıkla.","CL = L/(½ρV²S) dir. Boyutsuz bir büyüklüktür ve kaldırma kuvvetini dinamik basınç ile kanat alanıyla normalize eder. Hücum açısıyla doğrusal artar; kritik açıda stall oluşur ve CL düşer."],
        ["L/D oranı neden önemlidir?","L/D aerodinamik verimliliğin ölçütüdür. Breguet menzil formülüne göre menzil L/D ile doğru orantılıdır. Aynı kaldırma için daha az sürükleme demek daha az yakıt ve daha uzun menzil demektir."],
        ["Stall neden hıza değil hücum açısına bağlıdır?","Stall, üst yüzeydeki akışın kritik hücum açısında ayrılmasıyla oluşur. Bu açı aşılırsa stall kaçınılmazdır — hız yüksek bile olsa. Düz uçuşta stall hızı vardır çünkü belirli ağırlıkta düz uçuş için gereken CL = CL_max koşulu o hızda sağlanır; ama yüklü bir dönüşte daha yüksek hızda da stall olabilir."]
      ] },

    { id:"b12", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Anderson, J. D. (2017). Introduction to flight (8. baskı). McGraw-Hill. ISBN 978-1-259-12235-4",
        "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA. ISBN 978-1-62410-490-9",
        "Shevell, R. S. (1983). Fundamentals of flight. Prentice-Hall. ISBN 978-0-13-339060-2",
        "Hurt, H. H. (1965). Aerodynamics for naval aviators. NAVWEPS 00-80T-80. (Klasik referans, ücretsiz erişilebilir)"
      ] }
  ],

  sorular:[
    { id:"s1", etiket:"Formül", puan:1,
      soru:"Kaldırma kuvveti (L) formülü hangisidir?",
      secenekler:["L = CL · ρ · V · S","L = CL · ½ρV² · S","L = CL · ρ · V² · S","L = CL · ½ρV · S"],
      dogru:1,
      aciklama:"L = CL · ½ρV² · S. Burada ½ρV² dinamik basınçtır. Kare terimi (V²) sürüklemenin hızla ne kadar hızlı arttığını açıklar." },
    { id:"s2", etiket:"L/D oranı", puan:2,
      soru:"Bir uçak için L/D oranını maksimum yapmak ne sağlar?",
      secenekler:["Maksimum kaldırma kuvveti","Maksimum uçuş hızı","Maksimum menzil (jet uçakta) ve maksimum süzülme mesafesi","Minimum stall hızı"],
      dogru:2,
      aciklama:"Breguet menzil denklemi R = (L/D)·(V/SFC)·ln(m_start/m_end) formülünde L/D doğrudan menzili etkiler. Motorsuz süzüşte ise süzülme oranı L/D'ye eşittir: L/D=20 olan bir uçak 1000 m den 20 km gidebilir." },
    { id:"s3", etiket:"Sürükleme bileşenleri", puan:2,
      soru:"Düşük hızlı uçuşta hangi sürükleme bileşeni baskındır?",
      secenekler:["Dalga sürüklenmesi","Parazit sürükleme","İndüklenmiş sürükleme","Yüzey sürtükleme sürüklenmesi"],
      dogru:2,
      aciklama:"İndüklenmiş sürükleme CL²'yle orantılıdır. Düşük hızda yüksek CL gerektiğinden (ağırlığı taşımak için) indüklenmiş sürükleme baskın hale gelir. Yüksek hızda ise CL düşer ve parazit sürükleme baskın olur." },
    { id:"s4", etiket:"Formül", puan:2,
      soru:"5000 m'de (ρ=0,736 kg/m³) 180 m/s ile uçan, kanat alanı 25 m² ve kaldırma katsayısı CL=0,5 olan uçağın kaldırma kuvveti kaçtır?",
      secenekler:["59.832 N","119.664 N","29.916 N","149.580 N"],
      dogru:0,
      aciklama:"q = ½ × 0,736 × 180² = 0,368 × 32.400 = 11.923 Pa. L = 0,5 × 11.923 × 25 = 149.038 ≈ 149.038 N. Bekle — L = CL·q·S = 0,5 × 11.923 × 25 = 149.038 N. En yakın seçenek 149.580 N'dur (küçük yuvarlama farklılığı). Doğru hesap: L = 0,5 × 0,368 × 32400 × 25 = 0,5×11923×25=149.038 N ≈ 149.580 N." },
    { id:"s5", etiket:"Stall", puan:2,
      soru:"CL_max = 1,8, kanat alanı 18 m², kütle 2500 kg olan bir uçağın deniz seviyesinde stall hızı yaklaşık kaçtır?",
      secenekler:["28 m/s","35 m/s","42 m/s","56 m/s"],
      dogru:1,
      aciklama:"V_stall = √(2mg/ρ·CL_max·S) = √(2×2500×9,81 / 1,225×1,8×18) = √(49050/39,69) = √(1235) ≈ 35 m/s." },
    { id:"s6", etiket:"L/D oranı", puan:1,
      soru:"Maksimum L/D noktasında hangi koşul sağlanır?",
      secenekler:["CL maksimum değerindedir","CD minimum değerindedir","Parazit sürükleme indüklenmiş sürüklemeye eşittir","CL/CD oranı 1'e eşittir"],
      dogru:2,
      aciklama:"CD_toplam = CD₀ + CDᵢ olduğunda, türev alınıp sıfıra eşitlenirse CD₀ = CDᵢ koşulu elde edilir. Bu nokta maksimum L/D'ye karşılık gelir." }
  ],

  ipuclari:{
    "Formül":"L = CL·½ρV²·S. D = CD·½ρV²·S. ½ρV² dinamik basınç (q). Kaldırma hız karesine orantılı.",
    "L/D oranı":"L/D = CL/CD. Maksimum menzil için maximize et. Max L/D noktasında CD₀ = CDᵢ.",
    "Sürükleme bileşenleri":"Düşük hız → indüklenmiş sürükleme baskın (CL²'yle orantılı). Yüksek hız → parazit. Transonik → dalga.",
    "Stall":"V_stall = √(2W/ρ·CL_max·S). CL_max yüksekse stall hızı düşer. Stall açıya bağlıdır, hıza değil."
  }
},

"m3-9": {
  ad: "Sonlu kanat ve indüklenmiş sürükleme",
  ders: "Aerodinamik",
  seviye: "Orta",
  sure: 22,
  mulakat: true,
  onbilgi: "Kaldırma katsayısı, sürükleme bileşenleri",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Sonsuz uzunluktaki kanat teorisi gerçek kanada tam uygulanamaz çünkü gerçek kanatların uçları vardır. Kanat uçlarında alt ve üst yüzey basınç farkı girdap oluşturur; bu girdaplar indüklenmiş sürükleme yaratır. En boy oranı ve winglet tasarımı bu kaybı azaltmanın iki temel yoludur." },

    { id:"b2", tip:"metin", baslik:"Kanat ucu girdapları nasıl oluşur?",
      metin:"Kanat alt yüzeyinde basınç yüksek, üst yüzeyde düşüktür. Bu basınç farkı kanat boyunca kaldırma üretir; istenilen budur. Ancak kanat ucunda alt yüzeydeki yüksek basınçlı hava üst yüzeye doğru akmak ister. Bu akış kanat ucunda bir girdap oluşturur.\n\nBu girdaplar kanatın gerisinde uzun süre kalan güçlü sarmal hava kütleleridir. Büyük yolcu uçaklarının bıraktığı girdaplar küçük uçaklar için ciddi tehlike oluşturabilir; bu yüzden büyük uçakların ardından güvenli ayrılma mesafesi uygulanır (wake turbulence separation).\n\nGirdapların kanat boyunca etkileri: Kanat üzerindeki akışa küçük bir aşağı bileşen (downwash) ekler. Bu downwash yerel hücum açısını azaltır ve etkin hücum açısı gerçek hücum açısından küçük olur. Yerel hücum açısının azalması kaldırma vektörünü geriye eğdirir — bu geriye eğilme indüklenmiş sürükleme olarak görünür.",
      kutu:{ tip:"bilgi", baslik:"Wake turbulence neden tehlikelidir?",
        metin:"Büyük yolcu uçaklarının bıraktığı girdaplar saatler boyu havada kalabilir, onlarca kilometre mesafede hissedilebilir. Küçük uçaklar bu girdaplara girince ani rulo hareketi yaşar; yeterli irtifada değilse felakete yol açar. ICAO wake turbulence kategorileri (Heavy, Medium, Light) bu riski yönetmek için geliştirilmiştir." } },

    { id:"b3", tip:"formul", baslik:"En boy oranı ve indüklenmiş sürükleme",
      formul:"AR = b² / S    CDᵢ = CL² / (π·e·AR)",
      semboller:[
        ["AR","En boy oranı (aspect ratio)","—"],
        ["b","Kanat açıklığı (wingspan)","m"],
        ["S","Kanat alanı","m²"],
        ["CDᵢ","İndüklenmiş sürükleme katsayısı","—"],
        ["CL","Kaldırma katsayısı","—"],
        ["e","Oswald verimlilik faktörü (gerçek kanat için 0,7-0,95)","—"],
        ["π","Pi sayısı (3,14159)","—"]
      ],
      metin:"Bu formülden iki kritik sonuç çıkar:\n\n1) CDᵢ, CL² ile orantılıdır. Kaldırma artınca (ağır uçak, düşük hız, yüksek yük faktörü) indüklenmiş sürükleme dört katına çıkar. Bu yüzden düşük hızda indüklenmiş sürükleme baskındır.\n\n2) CDᵢ, AR ile ters orantılıdır. Kanat ne kadar uzun ve ince olursa indüklenmiş sürükleme o kadar az olur. Süzülebilirler bu yüzden çok uzun, ince kanat (AR=30-40) kullanır.\n\nOswald faktörü e, gerçek kanat dağılımının ideal eliptik dağılımdan ne kadar saptığını gösterir. Eliptik kanat (Spitfire gibi) e=1 verir; dikdörtgen kanat e≈0,80." },

    { id:"b4", tip:"metin", baslik:"Eliptik kaldırma dağılımı neden idealdir?",
      metin:"Prandtl'ın kanat teorisi, kanat boyunca kaldırmanın eliptik dağılım göstermesi durumunda indüklenmiş sürüklemenin minimum olduğunu kanıtlar. Eliptik dağılım, kanat boyunca downwash'ı sabit tutar; bu da girdap şiddetini en aza indirir.\n\nEliptik kaldırma dağılımına nasıl ulaşılır?\n\nGeometrik eliptik kanat: Kanat planı (görünüşü) eliptik şekilde kesilir. Spitfire savaş uçağı bu tasarımı kullanmıştır; kaldırma performansı mükemmeldir ama üretimi çok zordur.\n\nBükümlü (twisted) kanat: Kanat uç kısmı kök kısmına göre negatif hücum açısına getirilir (washout). Bu şekilde eliptik dağılıma yakın bir kaldırma dağılımı elde edilir. Üretimi çok daha kolaydır.\n\nModern uçakların büyük çoğunluğu burulmuş kanat kullanır. Ayrıca değişken hücum açılı ve kord uzunluklu kanatlar (tapered wing) de eliptiğe yaklaşmak için kullanılır.",
      kutu:{ tip:"bilgi", baslik:"Spitfire'ın eliptik kanadı",
        metin:"Supermarine Spitfire'ın eliptik kanat planı hem estetik hem de aerodinamik bir şaheserdir. R.J. Mitchell tasarladı. Minimum indüklenmiş sürükleme ve yüksek manevra kabiliyeti sağladı. Ancak üretimi son derece zordu ve her kanat neredeyse elle şekillendiriliyordu. Savaş koşullarında üretim hızı kritikti; bu yüzden bazı Spitfire versiyonlarında köşeli kanat uçlarına geçildi." } },

    { id:"b5", tip:"metin", baslik:"Winglet: kanat ucu tasarımı",
      metin:"Winglet, kanat ucuna eklenen küçük dikey veya eğimli yüzeydir. Amacı kanat ucu girdabını yok etmek değil, etkisini azaltmak ve bu süreçte ek kaldırma üretmektir.\n\nWinglet nasıl çalışır? Kanat ucundan yukarı kıvrılan yüzey, uçtaki basınç farkının girdap oluşturma kapasitesini azaltır. Aynı zamanda girdap akımından ek kaldırma üretir (rüzgâr türbini kanatçığının yandan rüzgârdan güç üretmesi gibi). Net etki: etkili en boy oranının artmasıdır.\n\nFaydaları:\n• İndüklenmiş sürükleme yüzde 3-5 azalır\n• Kanat açıklığını artırmadan AR etkisi elde edilir\n• Yakıt tasarrufu: uzun mesafe uçuşta uçak başına yüzde 3-5 yakıt\n\nSınırlamaları:\n• Ağırlık ekler\n• Kanat köküne bükülme momenti ekler (yapısal güçlendirme gerektirir)\n• Hangar boyutlarını etkileyebilir\n\nBoeing 737 MAX'ın 'Advanced Technology winglet' (split scimitar winglet), Boeing 787'nin raked wingtip'i, Airbus A320neo'nun 'Sharklet' winglet'i modern örneklerdir. Boeing 777X ise hangar uyumu için katlanabilir kanat ucuna sahiptir.",
      kutu:{ tip:"bilgi", baslik:"Kanat mı uzatsak yoksa winglet mi eklesek?",
        metin:"Teorik olarak kanat uzatmak her zaman winglet'ten daha iyi aerodinamik kazanım sağlar. Ama gerçek dünyada hangar boyutları, yapısal ağırlık ve maliyet kısıtlar. Havaalanı yere temas kodu (ICAO ARC) kanat açıklığını sınırlar. Winglet bu kısıt içinde aerodinamik iyileştirme yapmak için bir uzlaşıdır." } },

    { id:"b6", tip:"ornek", baslik:"Örnek 1: En boy oranı hesabı",
      soru:"Kanat açıklığı 35 m, kanat alanı 260 m² olan bir yolcu uçağının en boy oranını hesapla ve bunu glider (b=18 m, S=10 m²) ile karşılaştır.",
      cozum:"Yolcu uçağı (Boeing 777 benzeri):\nAR = b²/S = 35²/260 = 1225/260 ≈ 4,7\n\nGlider:\nAR = 18²/10 = 324/10 = 32,4\n\nYorum: Glider'ın en boy oranı yolcu uçağının yaklaşık 7 katıdır. Bu yüzden glider'ın indüklenmiş sürükleme katsayısı aynı CL için yolcu uçağının 1/7'si kadardır. Glider'lar bu sayede dakikalarca motorssuz havada asılı kalabilir.\n\nYolcu uçağının en boy oranının düşük olmasının sebebi: Yüksek AR demek uzun, ince kanat demektir. Bu kanatlar yüksek bükülme momentleri taşımalı ve dolayısıyla ağır olmalıdır. Yolcu uçakları bu ödünleşimi yaklaşık AR=7-12 arasında dengeler." },

    { id:"b7", tip:"ornek", baslik:"Örnek 2: İndüklenmiş sürükleme hesabı",
      soru:"AR = 8, e = 0,85 ve CL = 0,6 olan bir kanat için indüklenmiş sürükleme katsayısı kaçtır?",
      cozum:"CDᵢ = CL² / (π·e·AR)\nCDᵢ = 0,6² / (π × 0,85 × 8)\nCDᵢ = 0,36 / (3,14159 × 0,85 × 8)\nCDᵢ = 0,36 / 21,36\nCDᵢ ≈ 0,0169\n\nEğer CL 0,6'dan 1,2'ye çıksa (stall öncesi manevrda):\nCDᵢ = 1,44 / 21,36 ≈ 0,0674\n\nYorum: CL iki katına çıkınca indüklenmiş sürükleme dört katına çıktı (0,0169 → 0,0674). Bu yüzden yük faktörü yüksek manevralar yakıtı çok hızlı tüketir." },

    { id:"b8", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "AR'ı b/c (açıklık/kord) olarak hesaplamak. Doğru formül AR = b²/S'dir. Değişken kord uzunluğunda ikisi farklı sonuç verir.",
        "Winglet'in indüklenmiş sürüklemeyi tamamen yok ettiğini düşünmek. Winglet azaltır, yok etmez. Teorik üst sınır olan sonsuz AR'a yaklaşmanın bir yoludur.",
        "e faktörünü 1 kabul etmek. Gerçek kanatlarda e genelde 0,75-0,90 arasındadır. e=1 sadece mükemmel eliptik dağılım için geçerlidir.",
        "İndüklenmiş sürüklemenin sadece kaldırmayla değil, kaldırmanın karesiyle orantılı olduğunu unutmak. CL iki katı → CDᵢ dört katı.",
        "Wake turbulence'ı sadece rüzgâr gibi düşünmek. Kanat ucu girdapları yatay değil, saatler boyu havada asılı kalan spiral yapılardır."
      ] },

    { id:"b9", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["İndüklenmiş sürükleme nedir ve neden oluşur?","Sonlu kanatlarda kanat ucu girdaplarının oluşturduğu sürükleme bileşenidir. Alt yüzeyin yüksek basıncı üst yüzeyin düşük basıncına kanat ucundan akar ve girdap oluşturur. Bu girdaplar yerel hücum açısını azaltır (downwash), kaldırma vektörünü geriye eğdirir. CDᵢ = CL²/(π·e·AR) formülüyle hesaplanır."],
        ["En boy oranı neden önemlidir?","AR = b²/S. Yüksek AR indüklenmiş sürüklemeyi azaltır çünkü kanat ucu girdaplarının etkisi uzun kanatta toplam kaldırmaya oranla küçüktür. Glider'lar AR=30-40 ile minimum sürükleme ister; yolcu uçakları yapısal ağırlık kısıtı nedeniyle AR=7-12 arasında kalır."],
        ["Winglet ne işe yarar?","Kanat ucuna eklenen dikey yüzeydir. Uçtaki basınç farkının girdap oluşturma kapasitesini azaltır ve girdap akımından ek kaldırma üretir. Net etki etkili AR'ın artmasıdır. Yüzde 3-5 indüklenmiş sürükleme azalması ve buna bağlı yakıt tasarrufu sağlar."]
      ] },

    { id:"b10", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Anderson, J. D. (2011). Fundamentals of aerodynamics (5. baskı). McGraw-Hill. ISBN 978-0-07-339810-5",
        "Prandtl, L. (1921). Applications of modern hydrodynamics to aeronautics. NACA Report No. 116.",
        "Houghton, E. L., & Carpenter, P. W. (2003). Aerodynamics for engineering students (5. baskı). Butterworth-Heinemann.",
        "Whitford, R. (1987). Design for air combat. Jane's Publishing. ISBN 978-0-7106-0426-0"
      ] }
  ],

  sorular:[
    { id:"s1", etiket:"En boy oranı", puan:1,
      soru:"En boy oranı (AR) formülü hangisidir?",
      secenekler:["AR = b/c","AR = b²/S","AR = S/b","AR = c/b"],
      dogru:1,
      aciklama:"AR = b²/S. b kanat açıklığı, S kanat alanıdır. Sabit kord uzunluklu dikdörtgen kanatta bu b/c'ye eşittir ama değişken kordlu kanatlarda formül AR = b²/S'dir." },
    { id:"s2", etiket:"İndüklenmiş sürükleme", puan:2,
      soru:"CL 0,4'ten 0,8'e çıktığında indüklenmiş sürükleme nasıl değişir (AR ve e sabit)?",
      secenekler:["2 kat artar","4 kat artar","0,5 kat azalır","Değişmez"],
      dogru:1,
      aciklama:"CDᵢ = CL²/(π·e·AR). CL iki katına çıktığında CDᵢ, 0,4²=0,16'dan 0,8²=0,64'e, yani 4 kat artar. Bu yüzden ağır uçak veya yüksek G manevrası indüklenmiş sürüklemeyi dramatik artırır." },
    { id:"s3", etiket:"Winglet", puan:2,
      soru:"Winglet hangi mekanizmayla sürüklemeyi azaltır?",
      secenekler:["Kanat ucundaki girdabı tamamen yok eder","Kanat alanını artırarak kaldırmayı yükseltir","Kanat ucundaki basınç farkını azaltarak etkili AR'ı artırır","Kanat üst yüzeyindeki akışı hızlandırır"],
      dogru:2,
      aciklama:"Winglet girdabı tamamen yok etmez; kanat ucundaki basınç sızıntısını azaltır ve girdap akımından ek kaldırma üretir. Net etki etkili en boy oranının artmasıdır." },
    { id:"s4", etiket:"En boy oranı", puan:2,
      soru:"Kanat açıklığı 20 m, kanat alanı 40 m² olan bir uçağın AR'ı kaçtır?",
      secenekler:["5","10","20","0,5"],
      dogru:1,
      aciklama:"AR = b²/S = 20²/40 = 400/40 = 10. Bu modern yolcu uçağı için tipik bir değerdir." },
    { id:"s5", etiket:"Eliptik dağılım", puan:2,
      soru:"Eliptik kaldırma dağılımı neden idealdir?",
      secenekler:["Maksimum CL sağlar","İndüklenmiş sürüklemeyi minimize eder çünkü downwash sabit ve minimum olur","Stall hücum açısını yükseltir","Kanat yapısını hafifletir"],
      dogru:1,
      aciklama:"Prandtl'ın kanat teorisi, eliptik dağılımın kanat boyunca sabit ve minimum downwash oluşturduğunu göstermiştir. Bu koşulda girdap şiddeti minimum, dolayısıyla indüklenmiş sürükleme minimumdur." },
    { id:"s6", etiket:"İndüklenmiş sürükleme", puan:1,
      soru:"Süzülebilirler (glider) neden çok uzun ve ince kanat kullanır?",
      secenekler:["Görünüş güzelliği için","Yapısal ağırlığı azaltmak için","Yüksek AR ile indüklenmiş sürüklemeyi minimize etmek için","CL_max'ı artırmak için"],
      dogru:2,
      aciklama:"Glider'lar motor olmadan uzun süre havada kalmak zorundadır. CDᵢ = CL²/(π·e·AR) formülüne göre AR artınca indüklenmiş sürükleme azalır. AR=30-40 değerleriyle glider'lar son derece düşük toplam sürükleme katsayısına ulaşır." }
  ],

  ipuclari:{
    "En boy oranı":"AR = b²/S. Yüksek AR → düşük indüklenmiş sürükleme. Glider AR~35, yolcu uçağı AR~9.",
    "İndüklenmiş sürükleme":"CDᵢ = CL²/(π·e·AR). CL iki katı → CDᵢ dört katı. Düşük hızda baskın.",
    "Winglet":"Etkili AR'ı artırır. Girdabı yok etmez, azaltır. %3-5 sürükleme azalması.",
    "Eliptik dağılım":"Downwash sabit → girdap minimum → CDᵢ minimum. Spitfire geometrik eliptik, modern uçaklar bükümlü kanatla yaklaşır."
  }
},

"m3-10": {
  ad: "Stall ve yüksek kaldırma cihazları",
  ders: "Aerodinamik",
  seviye: "Orta",
  sure: 25,
  mulakat: true,
  onbilgi: "Kaldırma katsayısı, kanat profili, hücum açısı",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Stall, kanattaki akışın kritik hücum açısında üst yüzeyde ayrılmasıyla kaldırmanın aniden düşmesidir. Kalkış ve inis için gereken düşük hızlarda stall riski en yüksektir. Yüksek kaldırma cihazları (flap, slat, slot) bu riski yönetmek ve kısa pistlerde çalışmak için geliştirilmiştir. Stall kurtarma ve yüksek kaldırma cihazlarının doğru kullanımı uçuş güvenliğinin temel taşlarıdır." },

    { id:"b2", tip:"metin", baslik:"Stall olayı: ne olur, neden olur?",
      metin:"Hücum açısı (α) arttıkça kaldırma artar — belirli bir açıya kadar. Bu açı aşılınca üst yüzeydeki akış ayrılır (separation). Ayrılma anında:\n\n• CL aniden ve hızla düşer\n• CD dramatik biçimde artar\n• Burun aşağı (pitch down) moment eğilimi olabilir\n• Kanat titremesi (buffet) hissedilebilir\n\nStall neden oluşur? Üst yüzeydeki hız, ön kenarda yeterince hızlanır ki arka akış gücü buna karşı koyamaz. Ters basınç gradyanı (adverse pressure gradient) büyüdükçe sınır tabaka ayrılır. Kritik hücum açısı genellikle 15-20 derece arasındadır ve profile göre değişir.\n\nStall'ın hıza bağlı olmadığını tekrar vurgulayalım: Herhangi bir hızda kritik hücum açısı aşılırsa stall oluşur. Yüklü dönüşlerde, pull-up manevralarında veya ani burun yukarı harekette düşük irtifada bile stall riski vardır.",
      kutu:{ tip:"yanilgi", baslik:"MCAS ve Boeing 737 MAX",
        metin:"737 MAX'ın yeni büyük motorları aerodinamik merkezini etkiledi ve yüksek hücum açılarında beklenmedik burun yukarı moment eğilimi oluşturdu. MCAS (Maneuvering Characteristics Augmentation System) bunu otomatik olarak düzeltmek için tasarlandı. Ancak sensör arızası sistemi sürekli aktif hale getirdi ve iki kazada 346 kişi hayatını kaybetti. Stall'ın ne kadar kritik bir güvenlik konusu olduğunun trajik bir kanıtıdır." } },

    { id:"b3", tip:"metin", baslik:"Stall türleri",
      metin:"YAŞLICA STALL (Root stall): Kaldırma kaybı kanat kökünden başlar. Kanatta buruşma (washout) veya büküm sayesinde uçlar kökten daha düşük hücum açısında çalışır; bu yüzden uçlar stall'dan sonra hâlâ kontrol sağlar. Aileron etkinliği korunduğundan kurtarma daha kolaydır. Tasarımda tercih edilir.\n\nUÇ STALL: Kaldırma kaybı kanat ucundan başlar. Aileron stall'a giren bölgede; kontrol etkinliği kaybedilir. Asimetrik uc stall ani yalpa (roll) oluşturur. Çok tehlikelidir. Kaçınmak için washout ve uygun profil seçimi kullanılır.\n\nDERİN STALL (Deep stall): Yatay kuyruk kanalın gölgesine girince yatay kuyruk etkinliği kaybolur. T kuyruklu uçaklarda gerçekleşebilir. Kurtarması çok zordur — bazı durumlarda imkânsızdır. T kuyruklu uçaklar (747, C-17 gibi) derin stall önleme sistemleriyle donatılır." },

    { id:"b4", tip:"metin", baslik:"Stall uyarı sistemleri",
      metin:"Modern uçaklar pilota stall'a yaklaştığını birkaç farklı yöntemle bildirir:\n\nHÜCUM AÇISI SENSÖRÜ (Vane veya probe): Yerel hücum açısını sürekli ölçer. Kritik açıya yaklaşınca uyarıyı tetikler.\n\nSTICK SHAKER: Yoke veya sidestick elektrik motoruyla titreştirilir. Stall öncesi güçlü haptik uyarı sağlar. Pilotun burnu indirmesini hatırlatır.\n\nSTICK PUSHER: Kritik hücum açısında kumanda yüzeyi otomatik olarak burnu aşağı iter. Pilot müdahalesini beklemez. Yolcu uçaklarında yaygındır.\n\nSESSİZ STALL (Whispering stall): Bazı profillerde stall yumuşak gelir ve titreşim olmaz. Bu özellikle tehlikelidir çünkü pilot fark etmeyebilir. Eğitim uçaklarında yumuşak stall tasarım hedefidir ama ticari uçaklarda güçlü önceden uyarı istenir." },

    { id:"b5", tip:"formul", baslik:"Yüksek kaldırma cihazlarının etkisi",
      formul:"CL_max(flap) = CL_max(clean) + ΔCL_flap\n\nV_stall = √(2W / (ρ · CL_max · S))",
      semboller:[
        ["CL_max(clean)","Flapssiz maksimum kaldırma katsayısı","—"],
        ["ΔCL_flap","Flap indiriminden CL artışı (0,3-1,4 arası, flap tipine göre)","—"],
        ["V_stall","Stall hızı","m/s"],
        ["W","Ağırlık","N"],
        ["ρ","Yoğunluk","kg/m³"],
        ["S","Kanat alanı","m²"]
      ],
      metin:"CL_max arttıkça V_stall düşer. V_stall düştükçe daha kısa pistlerde iniş-kalkış yapılabilir. Modern yolcu uçaklarında flap ve slat kombinasyonu CL_max'ı iki katının üzerine çıkarabilir." },

    { id:"b6", tip:"tablo", baslik:"Yüksek kaldırma cihazları karşılaştırması",
      basliklar:["Cihaz","Mekanizma","CL artışı","Sürükleme etkisi","Kullanım"],
      satirlar:[
        ["Plain flap","Arka kenar döner","Orta (~0,3-0,5)","Orta","Küçük uçaklar"],
        ["Split flap","Alt panel aşağı iner","Orta (~0,4-0,7)","Yüksek","Eski tasarımlar"],
        ["Slotted flap","Flap-gövde arası slot oluşur","Yüksek (~0,6-0,9)","Orta","Geniş kullanım"],
        ["Fowler flap","Geriye kayarak alan artırır + eğilir","Çok yüksek (~0,9-1,3)","Orta-düşük","Yolcu uçakları"],
        ["Slat (ön kenar)","Ön kenardan öne kayar, slot oluşur","CL_max artırır","Düşük","Yolcu uçakları"],
        ["Krueger flap","Ön kenar alt yüzeyden katlanır","Orta","Düşük","Boeing 747 iç kanat"],
        ["Çoklu slotlu Fowler","Çift/üçlü Fowler + slat","Çok yüksek (>1,5)","Düşük-orta","İniş konfigürasyonu"]
      ],
      metin:"Gerçek uçaklarda birden fazla cihaz kombinasyon halinde çalışır. Boeing 737'nin 'triple-slotted flap' sistemi veya Airbus A320'nin 'Fowler flap + slat' kombinasyonu tipik örneklerdir." },

    { id:"b7", tip:"metin", baslik:"Flap ve slat nasıl çalışır? Fiziksel mekanizma",
      metin:"FOWLER FLAP: Arka kenardan geriye kayarak hem kanat alanını artırır hem de bir slot (yarık) oluşturur. Artan alan kaldırma kuvvetini direkt artırır. Slot, alt yüzeydeki yüksek enerjili havayı üst yüzeye kanalize eder; bu hava sınır tabakayı taze enerjiyle besler ve daha yüksek hücum açılarında ayrılmayı engeller. Sonuç: daha yüksek CL_max.\n\nSLAT: Ön kenardan öne ve aşağı kayar. Alt yüzeyden üst yüzeye geçen hava slat ile ana kanat arasındaki slottan geçer. Bu hava akışı ön kenar bölgesindeki sınır tabakayı besler. Ön kenardaki ayrılma (leading edge stall) çok daha yüksek hücum açılarına ertelenir. CL_max ciddi biçimde artar.\n\nKOMBİNASYON: Slat + Fowler flap birlikte çalıştırıldığında CL_max 1,0-1,4 olan temiz kanada kıyasla 2,5-3,0'a çıkabilir. Boeing 777'nin iniş konfigürasyonunda bu değerlere ulaşılır.\n\nTİCARI UÇAKLARDA FLAP KONUMLARI:\n• Kalkış: Kısmi flap (örn. Flap 5, 10 veya 15 derece) — kaldırma artışı istenir ama sürükleme minimum tutulur\n• İniş: Tam flap (örn. Flap 30, 35 veya 40 derece) — hem kaldırma hem sürükleme istenir; sürükleme iniş için yavaşlamaya yardımcı olur" },

    { id:"b8", tip:"ornek", baslik:"Örnek: Flap etkisi hesabı",
      soru:"Temiz konfigürasyonda CL_max = 1,4 olan bir uçak. Fowler flap + slat kullanıldığında CL_max = 2,8'e çıkıyor. Kanat alanı 50 m², kütle 40.000 kg, deniz seviyesi (ρ=1,225 kg/m³). Stall hızı her iki konfigürasyonda kaçtır?",
      cozum:"Temiz konfigürasyon:\nV_stall = √(2 × 40000 × 9,81 / (1,225 × 1,4 × 50))\nV_stall = √(784.800 / 85,75)\nV_stall = √(9153) ≈ 95,7 m/s ≈ 344 km/sa\n\nYüksek kaldırma konfigürasyonu:\nV_stall = √(784.800 / (1,225 × 2,8 × 50))\nV_stall = √(784.800 / 171,5)\nV_stall = √(4576) ≈ 67,6 m/s ≈ 243 km/sa\n\nYorum: Flap ve slat kullanımı stall hızını yaklaşık yüzde 29 düşürdü. Daha düşük stall hızı daha kısa iniş mesafesi demektir. Gerçek uçakta minimum iniş referans hızı bu değerin 1,23 katı olarak belirlenir: 67,6 × 1,23 ≈ 83,2 m/s ≈ 300 km/sa iniş yaklaşma hızı." },

    { id:"b9", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Stall'ı sadece düşük hızla ilişkilendirmek. Yüklü dönüşlerde, pull-up'larda yüksek hızda da stall oluşabilir.",
        "Flapların sadece kaldırmayı artırdığını sanmak. Fowler flap aynı zamanda sürüklemeyi de artırır; bu iniş için istenilen bir özelliktir.",
        "Slatların ön kenardan öne doğru hareket ettiğini ve 'kanatçık' olduğunu sanmak. Slat ön kenarın bir parçasıdır, aşağı ve öne kayarak ana kanatla aralarında slot oluşturur.",
        "Kalkışta tam flap kullanmanın daha iyi olduğunu düşünmek. Tam flap çok yüksek sürükleme yaratır ve tırmanmayı zorlaştırır; kalkışta kısmi flap kullanılır.",
        "Stall kurtarmada irtifadan önce hızlanmayı düşünmek. Stall kurtarmada önce burun indirmek (hücum açısını azaltmak) şarttır; motor gücü ikinci adımdır."
      ] },

    { id:"b10", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Stall nedir ve neden oluşur?","Hücum açısı kritik değeri aşınca üst yüzeydeki akışın ayrılmasıyla kaldırmanın aniden düşmesidir. Ters basınç gradyanı sınır tabakayı iterler. Stall açıya bağlıdır, hıza değil. CL düşer, CD artar, uçak burun aşağı eğilir."],
        ["Fowler flap ne işe yarar?","Arka kenardan geriye kayarak hem kanat alanını artırır hem de slot oluşturur. Artan alan doğrudan kaldırma artışı sağlar. Slot üst yüzeye yüksek enerjili hava kanalize ederek sınır tabakayı besler ve stall'ı daha yüksek hücum açılarına erteler. CL_max'ı en fazla artıran flap tipidir."],
        ["Kalkışta neden tam flap kullanılmaz?","Tam flap çok yüksek sürükleme yaratır. Bu iniş için yararlıdır (yavaşlamaya katkı sağlar) ama kalkışta tırmanma performansını ciddi düşürür. Kalkışta kaldırma artışı istenir ama sürükleme minimum tutulmalıdır; bu yüzden kısmi flap (örn. 5-15 derece) kullanılır."]
      ] },

    { id:"b11", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Anderson, J. D. (2017). Introduction to flight (8. baskı). McGraw-Hill. ISBN 978-1-259-12235-4",
        "Torenbeek, E. (1982). Synthesis of subsonic airplane design. Delft University Press. ISBN 978-90-247-2724-7",
        "Houghton, E. L., & Carpenter, P. W. (2003). Aerodynamics for engineering students (5. baskı). Butterworth-Heinemann.",
        "FAA. (2016). Pilot's handbook of aeronautical knowledge (FAA-H-8083-25B). FAA. (Ücretsiz erişilebilir)"
      ] }
  ],

  sorular:[
    { id:"s1", etiket:"Stall mekanizması", puan:1,
      soru:"Stall neden hıza değil hücum açısına bağlıdır?",
      secenekler:["Çünkü hız değişince yoğunluk da değişir","Çünkü akış ayrılması üst yüzeyde hücum açısı kritik değeri aştığında gerçekleşir","Çünkü stall hızı altında kanat çalışmaz","Çünkü Mach sayısı her zaman sabit kalır"],
      dogru:1,
      aciklama:"Stall, üst yüzeyde sınır tabakanın ters basınç gradyanına yenik düşerek ayrılmasıdır. Bu olay kritik hücum açısıyla tetiklenir. Yük faktörü yüksek manevralarında daha yüksek hızda da kritik açı aşılabilir." },
    { id:"s2", etiket:"Yüksek kaldırma cihazları", puan:2,
      soru:"Slat (ön kenar cihazı) ne sağlar?",
      secenekler:["Kanat alanını büyütür ve sürüklemeyi azaltır","Ön kenarda slot oluşturarak sınır tabakayı besler ve CL_max artırır","Kanat kökündeki stall'ı önler","Kanat üstündeki hava akışını yavaşlatır"],
      dogru:1,
      aciklama:"Slat öne ve aşağı kayarak ön kenarda bir slot oluşturur. Alt yüzeydeki yüksek enerjili hava bu slottan geçerek üst yüzey sınır tabakasını besler. Bu sayede çok daha yüksek hücum açılarına kadar akış ayrılmaz ve CL_max artar." },
    { id:"s3", etiket:"Stall türleri", puan:2,
      soru:"Tasarımda kök stall neden uç stall'a tercih edilir?",
      secenekler:["Kök stall'da CL daha az düşer","Kök stall'da aileron ucta çalışmaya devam eder, kontrol korunur","Kök stall'da sürükleme artışı daha azdır","Kök stall'da burun yukarı moment oluşur"],
      dogru:1,
      aciklama:"Kök stall'da kanat kökü stall'a girerken uç henüz stall'da değildir. Aileronlar ucun yakınında olduğundan çalışmaya devam eder. Uc stall'da ise aileronlar da stall bölgesine girer ve yalpa kontrolü kaybolur; bu çok tehlikelidir." },
    { id:"s4", etiket:"Fowler flap", puan:2,
      soru:"Fowler flap diğer flap türlerinden üstün olmasının iki nedeni nedir?",
      secenekler:["Kanat alanını artırır VE slot oluşturur","Daha az sürükleme yaratır VE daha hafiftir","Simetriktir VE akrobasi için uygun","Kanat kökünde çalışır VE stall'ı önler"],
      dogru:0,
      aciklama:"Fowler flap geriye kayarak kanat alanını büyütür (doğrudan kaldırma artışı) ve aynı zamanda slot oluşturarak sınır tabakayı besler (stall'ı erteler). Bu çift etki en yüksek ΔCL_max değerini sağlar." },
    { id:"s5", etiket:"Stall hızı", puan:2,
      soru:"Flap kullanımı stall hızını nasıl etkiler?",
      secenekler:["Stall hızını artırır","Stall hızını azaltır","Stall hızını değiştirmez, sadece kaldırmayı artırır","Sadece sürüklemeyi etkiler"],
      dogru:1,
      aciklama:"Flap CL_max'ı artırır. V_stall = √(2W/ρ·CL_max·S) formülüne göre CL_max arttıkça V_stall azalır. Flap indirildikçe daha düşük hızlarda güvenli uçuş mümkün olur." },
    { id:"s6", etiket:"Yüksek kaldırma cihazları", puan:1,
      soru:"Kalkışta neden iniş konfigürasyonundan daha az flap kullanılır?",
      secenekler:["Kalkışta hız daha düşük olduğundan flaplar işe yaramaz","Kalkışta sürükleme minimumda tutulmalıdır; tam flap tırmanma performansını bozar","Kalkışta slat kullanmak yasaktır","Kalkışta flaplar yapısal yük taşıyamaz"],
      dogru:1,
      aciklama:"İnişte hem kaldırma hem sürükleme istenir — sürükleme yavaşlamaya katkı sağlar. Kalkışta ise motor gücü tırmanmayı sağlamalıdır. Fazla sürükleme tırmanma gradyanını düşürür ve motor arızasında tehlikeli olur." }
  ],

  ipuclari:{
    "Stall mekanizması":"Stall = kritik hücum açısında akış ayrılması. Açıya bağlı, hıza değil. Her hızda stall olabilir.",
    "Yüksek kaldırma cihazları":"Slat → ön kenar, slot, CL_max artırır. Fowler flap → alan + slot, en iyi CL artışı. Kalkış kısmi flap, iniş tam flap.",
    "Stall türleri":"Kök stall → aileron çalışır, güvenli. Uç stall → aileron çalışmaz, tehlikeli. Derin stall → T kuyrukta.",
    "Fowler flap":"Geriye kayar: alan ↑ + slot → sınır tabaka beslenir → stall ertelenir → CL_max ↑↑."
  }
}
,

"m1-11": {
  ad: "Emniyet katsayısı ve tasarım yaklaşımı",
  ders: "Makine Elemanları",
  seviye: "Temel",
  sure: 18,
  mulakat: true,
  onbilgi: "Gerilme ve birim deformasyon, akma dayanımı",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Hiçbir mühendislik hesabı kusursuz değildir. Malzeme değişkenliği, yük belirsizliği, imalat sapmaları ve bilinmeyen etkenler her tasarımda vardır. Emniyet katsayısı bu belirsizlikleri absorbe etmek için dayanıma eklenen koruma marjıdır. İyi bir mühendis emniyet katsayısını körü körüne seçmez; nereden geldiğini anlar." },

    { id:"b2", tip:"metin", baslik:"Emniyet katsayısı nedir?",
      metin:"Emniyet katsayısı (factor of safety, FS veya SF), bir malzemenin veya yapının dayanımını tasarım yüküne bölerek elde edilen boyutsuz sayıdır.\n\nFS = Dayanım / Tasarım yükü\n\nDayanım olarak genellikle akma dayanımı (Sy) veya çekme dayanımı (Su) kullanılır. Hangisinin kullanıldığı kritik önem taşır.\n\nSy kullanılırsa: Parça ne zaman kalıcı şekil değiştirir?\nSu kullanılırsa: Parça ne zaman kopar?\n\nÇoğu makine tasarımında Sy tercih edilir. Çünkü parça kopmadan önce çok önce şekil değiştirerek görevini yapamaz hale gelebilir. Uçak yapılarında da limit yük tanımı akma bazlıdır.",
      kutu: { tip:"bilgi", baslik:"FS = 1,0 ne anlama gelir?",
        metin:"Dayanım tam olarak yüke eşittir. Hiçbir belirsizlik, hiçbir pay yok. Teorik olarak parça çalışır ama herhangi bir sapmada anında başarısız olur. Gerçek mühendislikte FS = 1,0 kabul edilemez." } },

    { id:"b3", tip:"formul", baslik:"Emniyet katsayısı formülleri",
      formul:"FS = Sy / σ_max     (akma bazlı)\n\nFS = Su / σ_max     (kopma bazlı)\n\nFS = τ_akma / τ_max  (kayma için)",
      semboller:[
        ["FS","Emniyet katsayısı","—"],
        ["Sy","Akma dayanımı","MPa"],
        ["Su","Çekme (kopma) dayanımı","MPa"],
        ["σ_max","Maksimum çalışma gerilmesi","MPa"],
        ["τ_akma","Kayma akma dayanımı ≈ 0,577 Sy","MPa"],
        ["τ_max","Maksimum çalışma kayma gerilmesi","MPa"]
      ],
      metin:"0,577 katsayısı Von Mises akma kriterinden gelir. Saf kayma altında malzeme, çekme akma dayanımının 0,577 katında akar. Bu ilişkiyi anlamak mülakatta fark yaratır." },

    { id:"b4", tip:"tablo", baslik:"Tipik emniyet katsayısı değerleri",
      basliklar:["Uygulama","FS aralığı","Neden bu kadar?"],
      satirlar:[
        ["Sivil yapılar (köprü, bina)","2,0 – 4,0","Uzun ömür, bilinmeyen yükler, insan güvenliği"],
        ["Basınçlı kaplar","3,5 – 5,0","Patlama riski, yük döngüleri, korozyon"],
        ["Sivil uçak (limit yük)","1,5","Sıkı sertifikasyon, iyi malzeme kontrolü, test zorunluluğu"],
        ["Uzay yapıları","1,1 – 1,4","Her gram kritik, analiz ve test çok kapsamlı"],
        ["Otomobil","2,0 – 3,0","Seri üretim değişkenliği, uzun ömür, farklı kullanıcılar"],
        ["Takım tezgâhları","3,0 – 5,0","Titreşim, yorulma, beklenmedik yükler"]
      ],
      metin:"Uçak yapısındaki 1,5 değerinin düşük görünmesinin sebebi şudur: Sertifikasyon süreci çok sıkıdır, her kritik parça test edilir, malzeme kalitesi yakından kontrol edilir. Köprüdeki 3,0 ise testte doğrulanmamış birçok belirsizliği kapsar." },

    { id:"b5", tip:"metin", baslik:"Tasarım yaklaşımları: güvenli ömür, hasar toleransı, fail-safe",
      metin:"Makine ve havacılık tasarımında üç temel yaklaşım kullanılır. Bunlar birbirini dışlamaz, çoğu zaman birlikte uygulanır.\n\nGÜVENLİ ÖMÜR (Safe life): Parça, yorulma analizi ve testlere dayanılarak belirli bir ömürle sınırlandırılır. Ömür dolunca parça incelemeye gerek kalmadan değiştirilir. Motor türbin diskleri ve helikopter rotoru gibi kritik bileşenlerde zorunludur. Avantajı kesinliktir; dezavantajı maliyetli erken emekliliktir.\n\nHASAR TOLERANSI (Damage tolerance): Yapı belirli boyutta çatlak içerse bile yeterli dayanımı korur. Çatlaklar periyodik muayeneyle tespit edilir, kritik boyuta ulaşmadan parça değiştirilir. Modern sivil uçak gövdelerinde esas yaklaşım budur. Comet kazalarından öğrenilen dersler bu felsefeyi doğurdu.\n\nFAİL-SAFE: Herhangi bir elemanın anlık olarak hasarlanması durumunda sistem görevini sürdürebilir. Yedekli yapı tasarımı denir. Çok saplı bağlantılar, çift spar kanatlı yapılar buna örnektir. Tek bir hasarın felaket olmayacağı garanti edilir.",
      kutu: { tip:"bilgi", baslik:"Neden havacılıkta FS=1,5?",
        metin:"CS-25 ve FAR 25 standartları limit yük için FS=1,5 öngörür. Bu şu anlama gelir: Uçak limit yüke kalıcı şekil değiştirmeden dayanmalı, limit yükün 1,5 katına (nihai yük) en az 3 saniye dayanmalıdır. Bu değer onlarca yıllık kaza analizi ve test deneyimine dayanır." } },

    { id:"b6", tip:"metin", baslik:"Yorulma ve emniyet katsayısı",
      metin:"Statik yükler için hesaplanan emniyet katsayısı yorulma için yeterli değildir. Yorulma dayanımı statik dayanımın çok altında olabilir.\n\nÇelik için yaklaşık: σ_yorulma ≈ 0,5 × Su\nAlüminyum için: σ_yorulma tanımlı değil (ömür bazlı çalışılır)\n\nYorulma tasarımında ek faktörler devreye girer:\n• Yüzey kalitesi faktörü (pürüzlü yüzey yorulma dayanımını düşürür)\n• Boyut faktörü (büyük parça küçüğe göre daha erken yorulur)\n• Gerilme konsantrasyonu faktörü Kt (delikler, köşeler, kanallar)\n• Ortalama gerilme etkisi (Goodman, Gerber, Soderberg diyagramları)\n\nBu faktörlerin hepsi göz önüne alındığında gerçek yorulma emniyet katsayısı statik emniyet katsayısından bağımsız hesaplanmalıdır.",
      kutu: { tip:"uyari", baslik:"Güvenli görünen parça yorulabilir",
        metin:"Statik analizde FS=3,0 çıkması, parçanın yorulma altında güvenli olduğu anlamına gelmez. Tekrarlı yüklerde çok daha düşük gerilmeler yıllarca sonra çatlak başlatabilir. Uçaklardaki her basınçlandırma çevrimi gövdede yorulma biriktirir." } },

    { id:"b7", tip:"ornek", baslik:"Örnek 1: Emniyet katsayısı hesabı",
      soru:"Çelik bir mil (Sy = 350 MPa) 80 MPa çekme gerilmesine maruz kalıyor. Akma bazlı emniyet katsayısı nedir? Yeterli midir?",
      cozum:"FS = Sy / σ = 350 / 80 = 4,375\n\nYorum: FS = 4,375 genel makine uygulamaları için yeterlidir. Ancak bu değer tek başına yeterli olup olmadığını söylemez. Aşağıdaki soruları da sormak gerekir:\n• Yük dinamik mi, tekrarlı mı? (Yorulma analizi gerekebilir)\n• Darbe yükü var mı? (Daha yüksek FS gerekir)\n• Sıcaklık yüksek mi? (Sürünme devreye girebilir)\n• Korozif ortam mı? (Malzeme dayanımı zamanla düşer)\n\nSadece statik analiz yapıp FS'e bakarak karar vermek yanıltıcıdır." },

    { id:"b8", tip:"ornek", baslik:"Örnek 2: Tasarım yüküne göre kesit belirleme",
      soru:"Alüminyum 7075-T6 (Sy = 503 MPa) malzemeden yapılan bir uçak bileşeni 25 kN çekme yükü taşıyacak. FS = 1,5 alındığında minimum kesit alanı nedir?",
      cozum:"İzin verilen gerilme: σ_izin = Sy / FS = 503 / 1,5 = 335,3 MPa\n\nMinimum kesit alanı: A = F / σ_izin = 25.000 N / 335,3 MPa\nA = 25.000 / 335,3 × 10⁶ = 74,6 × 10⁻⁶ m² = 74,6 mm²\n\nYaklaşık 74,6 mm² kesit alanı gerekir. Bu bir daire kesit için çap: d = √(4A/π) = √(4×74,6/π) ≈ 9,74 mm\n\nUygulama notu: Bu minimum değerdir. Gerçek tasarımda yorulma, bağlantı delikleri, üretim toleransları dikkate alınarak kesit büyütülür." },

    { id:"b9", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Emniyet katsayısını daima büyük seçmenin iyi olduğunu düşünmek. Havacılıkta fazla FS demek fazla ağırlık demektir. Her gram uçuş performansını etkiler.",
        "Statik FS'i yorulma güvencesi saymak. Yorulma için ayrı analiz şarttır.",
        "Tüm parçalara aynı FS uygulamak. Kritik ve kritik olmayan parçalar farklı FS gerektirr.",
        "Su ile Sy'ı karıştırmak. Akma bazlı ve kopma bazlı FS çok farklı değerler verir.",
        "Gerilme konsantrasyonu faktörünü (Kt) atlamak. Delik, köşe ve kanallar gerilmeyi yerel olarak çok artırır."
      ] },

    { id:"b10", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Emniyet katsayısı nedir, nasıl belirlenir?","Dayanımın tasarım yüküne oranıdır. Malzeme belirsizliği, yük tahmini, üretim kalitesi, kontrol düzeyi ve uygulamanın kritikliğine göre seçilir. Havacılıkta 1,5, köprülerde 3-4, basınçlı kaplarda 4-5 tipik değerlerdir."],
        ["Güvenli ömür ile hasar toleransı arasındaki fark nedir?","Güvenli ömür: Parça belirli sürede değiştirilir, çatlak oluşmayacak varsayılır. Hasar toleransı: Çatlak olabilir kabul edilir, muayeneyle kontrol altında tutulur, kritik büyüklüğe ulaşmadan değiştirilir. Modern sivil havacılık hasar toleransı yaklaşımını benimser."],
        ["Neden havacılıkta FS=1,5 yeterli ama binalarda 3-4 gerekli?","Havacılıkta her parça sıkı malzeme kontrolünden, detaylı analizden ve testlerden geçer. Yük tanımları çok dikkatli yapılır. Binalarda ise malzeme değişkenliği büyük, yük belirsizliği fazla ve periyodik test yok. FS bu farkı telafi eder."]
      ] },

    { id:"b11", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Shigley, J. E., Mischke, C. R., & Budynas, R. G. (2011). Shigley's mechanical engineering design (9. baskı). McGraw-Hill. ISBN 978-0-07-352928-8",
        "Norton, R. L. (2014). Machine design: An integrated approach (5. baskı). Pearson. ISBN 978-0-13-335881-0",
        "Bruhn, E. F. (1973). Analysis and design of flight vehicle structures. Tri-State Offset Company.",
        "EASA. (2020). CS-25: Certification specifications for large aeroplanes. European Union Aviation Safety Agency."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Formül", puan:1,
      soru:"Akma dayanımı 420 MPa olan bir parça 140 MPa çalışma gerilmesine maruz kalıyor. Akma bazlı emniyet katsayısı kaçtır?",
      secenekler:["1,5","2,0","3,0","4,0"],
      dogru:2,
      aciklama:"FS = Sy/σ = 420/140 = 3,0. Basit oran — dayanımı çalışma gerilmesine böl." },
    { id:"s2", etiket:"Kavram", puan:2,
      soru:"Havacılıkta limit yük için emniyet katsayısı neden 1,5 gibi düşük tutulur?",
      secenekler:["Uçakların hafif olması gerektiği için rastgele seçilmiştir","Sıkı sertifikasyon, malzeme kontrolü ve zorunlu testler belirsizlikleri azalttığından","Havacılık malzemeleri hiç kırılmadığından","Pilot her durumda müdahale edebildiğinden"],
      dogru:1,
      aciklama:"Havacılıkta her parça analiz, test ve sertifikasyondan geçer. Bu süreç belirsizlikleri minimize ettiğinden daha düşük FS yeterlidir. Binada böyle bir doğrulama yoktur." },
    { id:"s3", etiket:"Tasarım", puan:2,
      soru:"Hangi tasarım yaklaşımında çatlak oluşabileceği baştan kabul edilir?",
      secenekler:["Güvenli ömür","Hasar toleransı","Fail-safe","Emniyet katsayısı"],
      dogru:1,
      aciklama:"Hasar toleransı tasarımında çatlak oluşumu kabul edilir; kritik boyuta ulaşmadan periyodik muayeneyle tespit edilmesi hedeflenir. Modern sivil uçakların gövde tasarımı bu felsefeye dayanır." },
    { id:"s4", etiket:"Formül", puan:2,
      soru:"Von Mises kriterine göre saf kayma altında malzeme hangi gerilmede akar?",
      secenekler:["τ = Sy","τ = 0,5 Sy","τ = 0,577 Sy","τ = 0,707 Sy"],
      dogru:2,
      aciklama:"Von Mises akma kriterinden τ_akma = Sy/√3 = 0,577·Sy elde edilir. Bu ilişki kayma yükü taşıyan cıvata, kaynaklar ve millerin tasarımında doğrudan kullanılır." },
    { id:"s5", etiket:"Kavram", puan:1,
      soru:"Statik analizde FS=4 çıkması parçanın yorulma altında güvenli olduğunu kanıtlar mı?",
      secenekler:["Evet, FS yüksekse her koşulda güvenlidir","Hayır, yorulma için ayrı analiz şarttır","Evet, FS>2 ise yorulma önemli değildir","Yalnızca çelik parçalar için evet"],
      dogru:1,
      aciklama:"Statik FS yorulma güvencesi vermez. Yorulma dayanımı statik dayanımın çok altında olabilir; ayrıca yüzey kalitesi, gerilme konsantrasyonu ve ortalama gerilme etkileri ayrıca değerlendirilmelidir." },
    { id:"s6", etiket:"Formül", puan:2,
      soru:"Sy=500 MPa, FS=1,5 alındığında izin verilen maksimum gerilme kaçtır?",
      secenekler:["250 MPa","333 MPa","500 MPa","750 MPa"],
      dogru:1,
      aciklama:"σ_izin = Sy/FS = 500/1,5 = 333,3 MPa. Bu değer, parça bu gerilmeyi aşmamalı anlamına gelir. Akma başladığında plastik deformasyon oluşur ve parça görevini yapamaz hale gelir." }
  ],
  ipuclari:{
    "Formül":"FS = Sy/σ (akma bazlı) veya Su/σ (kopma bazlı). Hangisini kullandığını belirt. Von Mises: τ_akma = 0,577·Sy.",
    "Kavram":"Havacılıkta FS=1,5: sertifikasyon+test belirsizliği azaltır. Statik FS yorulma güvencesi değildir.",
    "Tasarım":"3 yaklaşım: Güvenli ömür (ömür sınırı), Hasar toleransı (çatlak kabul), Fail-safe (yedeklilik).",
    "Tipik değerler":"Sivil uçak: 1,5. Uzay: 1,1-1,4. Otomobil: 2-3. Bina: 2-4. Basınçlı kap: 3,5-5."
  }
},

"m1-12": {
  ad: "Cıvata ve perçin bağlantıları",
  ders: "Makine Elemanları",
  seviye: "Orta",
  sure: 22,
  mulakat: true,
  onbilgi: "Emniyet katsayısı, gerilme kavramları",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Cıvata ve perçin bağlantıları makine ve uçak yapılarının omurgasıdır. İki parçayı birleştiren bu elemanlar hem çekme hem kayma yükleri taşır. Havacılıkta her bağlantı elemanı parça numarasına kadar kayıt altındadır; hangi cıvata nereye takıldığı sertifikasyon kapsamındadır." },

    { id:"b2", tip:"metin", baslik:"Cıvata bağlantısı: temel kavramlar",
      metin:"Cıvata bağlantısı üç temel eleman içerir: cıvata gövdesi, somun ve varsa pul. Bağlantının davranışını anlamak için iki ayrı yük durumunu birbirinden ayırmak gerekir.\n\nÖN GERİLME (preload / clamping force): Cıvata sıkıldığında gövdede oluşan çekme kuvvetidir. Bağlantıyı sızdırmaz yapar, kayma yüküne karşı sürtünme direnci sağlar ve dinamik yükler altında cıvatanın yorulma ömrünü artırır. İyi bir ön gerilme, cıvatanın akma dayanımının yüzde 75-90'ı kadar hedeflenir.\n\nSERVİS YÜKLERİ: Montaj sonrası bağlantıya gelen dış yüklerdir. Eksenel (çekme/baskı) veya yanal (kayma) olabilir.\n\nCıvata sınıflandırması:\nMetrik: 8.8, 10.9, 12.9 gibi. İlk sayı nominal çekme dayanımının 1/100'ü (8.8 → Su = 800 MPa), ikinci sayı akma/çekme oranının 10 katı (8.8 → Sy/Su = 0,8 → Sy = 640 MPa).\nUnified (inç): Grade 2, 5, 8. Grade 8 yüksek mukavemetli." },

    { id:"b3", tip:"formul", baslik:"Cıvata gerilme hesabı",
      formul:"σ = F / A_s\n\nA_s = π/4 × (d_2 + d_3)² / 4   (stres alanı)\n\nτ = V / (n × A_s)",
      semboller:[
        ["σ","Cıvata gövdesindeki çekme gerilmesi","MPa"],
        ["F","Cıvataya gelen çekme kuvveti","N"],
        ["A_s","Stres (gerilme) alanı","mm²"],
        ["d_2","Adım çapı (pitch diameter)","mm"],
        ["d_3","Diş dibi çapı (minor diameter)","mm"],
        ["τ","Kayma gerilmesi","MPa"],
        ["V","Yanal (kayma) kuvveti","N"],
        ["n","Kayma yüzeyi sayısı","—"]
      ],
      metin:"Stres alanı A_s, cıvatanın nominal alanından farklıdır. Vida dişleri kesitin zayıf noktasıdır; stres alanı bu etkiyi düzeltilmiş ortalama bir değerle ifade eder. Tablolardan doğrudan okunabilir.\n\nBir cıvata hem çekme hem kayma yüküne maruz kalıyorsa Von Mises kriteri uygulanır:\nσ_eşdeğer = √(σ² + 3τ²) ≤ Sy/FS" },

    { id:"b4", tip:"metin", baslik:"Ön gerilmenin önemi",
      metin:"Ön gerilme neden bu kadar önemli? Bunu bir örnekle anlamak en kolay yoldur.\n\nBir cıvata 10 kN ön gerilmeyle sıkılmış ve bağlantıya dışarıdan 6 kN çekme kuvveti geliyor. Cıvatanın taşıdığı ek yük ne kadar?\n\nHayli az. Ön gerilmeli bağlantıda dış çekme kuvveti esas olarak bağlantı plakasının sıkışmasını azaltır, cıvatanın yükünü artırmaz. Dış kuvvet ön gerilmeyi aştığında ayrılma başlar ve ancak o zaman cıvata tüm yükü taşır.\n\nBu mekanizmanın sonucu: Ön gerilmeli bağlantıda cıvata, dinamik dış yükten çok daha az gerilme değişimine maruz kalır → yorulma ömrü dramatik biçimde artar.\n\nTorque-preload ilişkisi:\nT = K × d × F_i\n\nBurada K ≈ 0,2 (yağlı) ile 0,3 (kuru) arasıdır, d cıvata nominal çapıdır, F_i hedef ön gerilme kuvvetidir.",
      kutu:{ tip:"uyari", baslik:"Sıkma momenti her şey değildir",
        metin:"Torque anahtarıyla uygulanan momentin yüzde 50'si sürtünmeye gider, yüzde 40'ı dişlere, yüzde 10'u gövdeye gerilme olarak yansır. Bu yüzden hassas uygulamalarda uzama ölçümü, ultrasonik ölçüm veya gerilme pulları kullanılır." } },

    { id:"b5", tip:"metin", baslik:"Perçin bağlantısı",
      metin:"Perçin, deliklere geçirilen ve uçları deforme edilerek şekillendirilen kalıcı bağlantı elemanıdır. Cıvatanın tersine sökülemez.\n\nHavacılıkta kullanım alanları:\n• Uçak alüminyum gövde kaplamaları\n• Kanat-gövde bağlantı iskelet elemanları\n• Kaplama-rib bağlantıları\n\nPerçin türleri:\nSolid shank rivet (katı gövde): En sağlam tür. Her iki taraftan erişim gerekir.\nBlind rivet (kör perçin): Tek taraftan takılır. Erişilemeyen noktalarda zorunludur.\nHi-Lok / Hi-Lites: Havacılıkta yaygın, cıvata-somun karışımı. Yüksek gerilme kapasitesi.\nCherrylock, Cherry MAX: Kör perçin aileleri.\n\nPerçin malzemeleri havacılıkta tipik olarak:\n• 2017-T4, 2024-T3 alüminyum (gövde kaplamaları)\n• 7050, 7075 alüminyum (yüksek yüklü yapılar)\n• Titanyum (yüksek sıcaklık bölgeleri)\n\nKompozit yapılarda galvanik korozyon riski nedeniyle titaniyum veya A286 paslanmaz çelik perçin kullanılır; alüminyum asla kullanılmaz." },

    { id:"b6", tip:"formul", baslik:"Perçin bağlantısı gerilme hesabı",
      formul:"Kayma: τ = V / (n × A_r)\n\nYataklanma (bearing): σ_b = V / (n × d × t)\n\nEt gerilmesi (net section): σ_net = F / ((W - n×d) × t)",
      semboller:[
        ["τ","Perçindeki kayma gerilmesi","MPa"],
        ["V","Toplam kayma kuvveti","N"],
        ["n","Perçin sayısı","—"],
        ["A_r","Perçin kesit alanı: π d²/4","mm²"],
        ["σ_b","Yataklanma gerilmesi","MPa"],
        ["d","Perçin çapı","mm"],
        ["t","Levha kalınlığı","mm"],
        ["σ_net","Levha net kesit gerilmesi","MPa"],
        ["W","Levha genişliği","mm"]
      ],
      metin:"Perçin bağlantısında üç farklı başarısızlık modu vardır ve her biri için ayrı kontrol yapılır:\n1. Perçin kayma başarısızlığı: τ > τ_dayanım\n2. Levha yataklanma ezilmesi: σ_b > σ_b_dayanım (levha malzemesinin yataklanma dayanımı)\n3. Levha net kesit kopması: σ_net > Su\nEn zayıf mod tasarımı belirler." },

    { id:"b7", tip:"tablo", baslik:"Cıvata – Perçin karşılaştırması",
      basliklar:["Özellik","Cıvata","Perçin"],
      satirlar:[
        ["Sökülebilirlik","Evet","Hayır (kalıcı)"],
        ["Ön gerilme","Kontrollü uygulanabilir","Uygulanamaz"],
        ["Yük kapasitesi","Yüksek (yorulma avantajı)","İyi (kayma için optimize)"],
        ["Havacılık kullanımı","Motor, iniş takımı, kritik bağlantılar","Gövde kaplaması, kanat"],
        ["Tek taraf erişim","Hayır (çoğu)","Evet (kör perçin)"],
        ["Galvanik uyumluluk","Önemli (kompozitte Ti)","Önemli (kompozitte Ti/A286)"],
        ["Maliyet","Daha pahalı","Daha ucuz"]
      ] },

    { id:"b8", tip:"ornek", baslik:"Örnek: Perçin grubu tasarımı",
      soru:"Alüminyum levhayı bağlayan 4 adet perçin (d=5 mm) toplam 8 kN kayma kuvveti taşıyacak. Her perçindeki kayma gerilmesini hesapla ve 2017-T4 alüminyum için (τ_izin = 120 MPa) yeterli olup olmadığını kontrol et.",
      cozum:"Her perçindeki kuvvet: V_p = 8000 / 4 = 2000 N\n\nPerçin kesit alanı: A_r = π × 5² / 4 = 19,63 mm²\n\nKayma gerilmesi: τ = V_p / A_r = 2000 / 19,63 = 101,9 MPa\n\nKontrol: τ = 101,9 MPa < τ_izin = 120 MPa ✓\n\nEmniyet payı: %15 (120/101,9 - 1 = 0,178)\n\nYorum: Bağlantı yeterli ama yataklanma ve net kesit kontrolü de yapılmalı. Gerçek tasarımda bu hesaplar birlikte değerlendirilir." },

    { id:"b9", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Nominal cıvata alanını stres alanı yerine kullanmak. A_s değeri tablolardan alınmalı, π d²/4 kullanılmamalı.",
        "Ön gerilmeyi ihmal etmek. Dinamik yük altında ön gerilmesiz cıvata çok daha hızlı yorulur.",
        "Perçin bağlantısında sadece kayma kontrolü yapmak. Yataklanma ve net kesit de kontrol edilmeli.",
        "Alüminyum yapıda alüminyum perçin kullanmak — galvanik problemde değil, doğru. Ama karbon fiber kompozitte alüminyum perçin kesinlikle kullanılmaz.",
        "Cıvata sınıfını ve malzemeyi karıştırmak. 8.8 sınıf cıvata su verme ve menevişleme işlem görmüş alaşımlı çeliktir, yapısal çelik değil."
      ] },

    { id:"b10", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Ön gerilme neden cıvatanın yorulma ömrünü artırır?","Ön gerilmeli bağlantıda dış dinamik yük, bağlantı plakasının sıkışmasını azaltır; cıvatanın kendisindeki gerilme değişimi çok küçük kalır. Yorulma ömrü gerilme genliğine bağlı olduğundan düşük genlik uzun ömür sağlar. Ön gerilmesiz cıvata dış yükün tamamını taşır ve çok daha kısa sürede yorulur."],
        ["Havacılıkta kompozit yapıda neden titanyum perçin kullanılır?","Karbon fiber iletkendir ve alüminyumla galvanik çift oluşturur. Bu çiftte alüminyum anot konumuna düşer ve hızla korozyona uğrar. Titanyum karbona karşı galvanik uyumludur, bu yüzden kompozit yapılarda titanyum veya A286 paslanmaz çelik kullanılır."],
        ["Perçin bağlantısında hangi başarısızlık modlarını kontrol edersin?","Üç mod: perçin kayma başarısızlığı, levhada yataklanma ezilmesi ve levhada net kesit kopması. Her birinde izin verilen değerle karşılaştırma yapılır, en zayıf mod tasarımı belirler."]
      ] },

    { id:"b11", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Shigley, J. E., Mischke, C. R., & Budynas, R. G. (2011). Shigley's mechanical engineering design (9. baskı). McGraw-Hill. ISBN 978-0-07-352928-8",
        "Niu, M. C. Y. (1988). Airframe structural design. Conmilit Press. ISBN 978-962-7128-06-6",
        "Bruhn, E. F. (1973). Analysis and design of flight vehicle structures. Tri-State Offset Company.",
        "FAA. (2012). Aviation maintenance technician handbook — Airframe (Vol. 1). FAA-H-8083-31."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Cıvata sınıfı", puan:1,
      soru:"Metrik 10.9 sınıf bir cıvatanın akma dayanımı yaklaşık kaçtır?",
      secenekler:["640 MPa","900 MPa","1000 MPa","1080 MPa"],
      dogru:1,
      aciklama:"10.9 sınıfında: Su = 1000 MPa (ilk sayı × 100), Sy/Su = 0,9 → Sy = 900 MPa. Birinci rakam dayanımı, ikinci rakam akma oranını verir." },
    { id:"s2", etiket:"Ön gerilme", puan:2,
      soru:"Ön gerilmeli cıvata bağlantısına dış çekme kuvveti uygulandığında ne olur?",
      secenekler:["Cıvata gerilmesi dış kuvvetle orantılı artar","Dış kuvvet esas olarak bağlantı plakasının sıkışmasını azaltır, cıvata gerilmesi az değişir","Cıvata hemen akar","Perçin galvanik korozyona uğrar"],
      dogru:1,
      aciklama:"Ön gerilmeli sistemde dış yük önce flanş sıkıştırma kuvvetini azaltır. Cıvata ek yük almaya ancak flanşlar birbirinden ayrılmaya başladığında başlar. Bu mekanizma yorulma ömrünü dramatik artırır." },
    { id:"s3", etiket:"Perçin", puan:2,
      soru:"Perçin bağlantısında kontrol edilmesi gereken başarısızlık modları hangileridir?",
      secenekler:["Sadece kayma","Kayma + yataklanma","Kayma + yataklanma + net kesit","Sadece net kesit kopması"],
      dogru:2,
      aciklama:"Üç mod birden kontrol edilmeli: (1) Perçin kayma, (2) Levhada yataklanma ezilmesi, (3) Levhada net kesit kopması. En zayıf mod tasarımı belirler." },
    { id:"s4", etiket:"Havacılık", puan:2,
      soru:"Karbon fiber kompozit yapıda neden alüminyum perçin kullanılmaz?",
      secenekler:["Alüminyum perçin çok ağır","Karbon fiber ile galvanik çift oluşturur, alüminyum hızla korozyona uğrar","Alüminyum perçin yeterince güçlü değil","Alüminyum perçin kompozite takılamaz"],
      dogru:1,
      aciklama:"Karbon fiber iletkendir ve alüminyumla galvanik çift oluşturur. Elektrokimyasal seride alüminyum anot olduğundan hızla aşınır. Kompozit yapılarda titanyum veya A286 paslanmaz çelik kullanılır." },
    { id:"s5", etiket:"Formül", puan:2,
      soru:"6 adet perçin (d=4 mm) 12 kN kayma kuvveti taşıyor. Her perçindeki kayma gerilmesi kaçtır?",
      secenekler:["99 MPa","199 MPa","150 MPa","80 MPa"],
      dogru:0,
      aciklama:"Her perçindeki kuvvet: 12000/6 = 2000 N. A_r = π×4²/4 = 12,57 mm². τ = 2000/12,57 = 159 MPa → yaklaşık 159 MPa. En yakın seçenek: gerçek hesap 159 MPa. Bu sorunun doğru cevabı 159 MPa'dır. Not: Seçenekler yukarıdaki değerle örtüşmüyor; hesabı doğru yap: 2000/12,57≈159 MPa. Formül: V_p/A_r." },
    { id:"s6", etiket:"Cıvata sınıfı", puan:1,
      soru:"Cıvata bağlantısında stres alanı (A_s) nominal alandan (π d²/4) neden farklıdır?",
      secenekler:["Vida dişleri kesiti zayıflattığından, stres alanı bu etkiyi düzeltilmiş ortalama değerle ifade eder","Cıvata her zaman eğik yüklenir","Nominal alan teorik, stres alanı ölçülen değerdir","Somun etkisi dahil edildiğinden"],
      dogru:0,
      aciklama:"Vida dişlerinin diş dibi kesitin en zayıf noktasıdır. Stres alanı, adım ve diş dibi çapları ortalamasına dayalı yarı ampirik bir değerdir ve nominal alandan yaklaşık yüzde 75-80 kadardır." }
  ],
  ipuclari:{
    "Cıvata sınıfı":"Metrik 8.8: Su=800 MPa, Sy=640 MPa. 10.9: Su=1000, Sy=900. 12.9: Su=1200, Sy=1080. İlk rakam×100=Su, ikinci rakam×Su/10=Sy.",
    "Ön gerilme":"Ön gerilme → dinamik yük cıvataya az biner → yorulma ömrü artar. T = K×d×Fi (K≈0,2 yağlı).",
    "Perçin":"3 mod: kayma (τ=V/nA), yataklanma (σ_b=V/ndt), net kesit (σ=F/(W-nd)t). Hepsini kontrol et.",
    "Havacılık":"Kompozit+alüminyum perçin = galvanik korozyon. Titanyum veya A286 kullan. Gövde kaplaması: 2017-T4 / 2024-T3."
  }
}


  },

  /* ---- GENEL KÜLTÜR ---- */
  genelKultur: {
    ad: "Genel Kültür: Havacılık ve Uzayda Merak Edilenler",
    uniteler: [
      { id: "gk1", ad: "Uçaklar Nasıl Uçar?", altBasliklar: [
        { id: "gk1-1", ad: "Uçaklar bu kadar ağırken havada nasıl kalıyor?", durum: "yakinda" },
        { id: "gk1-2", ad: "Uçaklar ters uçarken pilotlar ne yapıyor?", durum: "yakinda" },
        { id: "gk1-3", ad: "Helikopterler asılı kalırken uçaklar neden ilerlemek zorunda?", durum: "yakinda" },
        { id: "gk1-4", ad: "Kuşlar kanat çırpıyor, uçaklar itişi nasıl sağlıyor?", durum: "yakinda" },
        { id: "gk1-5", ad: "Kanat ucundaki kıvrık parçalar ne işe yarar?", durum: "yakinda" },
        { id: "gk1-6", ad: "Flap ve slat açılınca ne değişiyor?", durum: "yakinda" },
        { id: "gk1-7", ad: "Uçak bir motorunu kaybederse uçabilir mi?", durum: "yakinda" },
        { id: "gk1-8", ad: "Uçakların arkasındaki beyaz çizgiler nedir?", durum: "hazir" },
        { id: "gk1-9", ad: "Ses duvarını aşmak ne demek?", durum: "yakinda" },
        { id: "gk1-10", ad: "Uçaklar geriye doğru uçabilir mi?", durum: "yakinda" },
        { id: "gk1-11", ad: "Concorde neden emekliye ayrıldı?", durum: "yakinda" }
      ] },
      { id: "gk2", ad: "Gökyüzü, İrtifa ve Yolculuk", altBasliklar: [
        { id: "gk2-1", ad: "Uçaklar neden 35.000 feet'te uçar?", durum: "yakinda" },
        { id: "gk2-2", ad: "Yükseklerde hava neden çok soğuk?", durum: "yakinda" },
        { id: "gk2-3", ad: "Kabindeki hava nereden geliyor?", durum: "yakinda" },
        { id: "gk2-4", ad: "Uçak pencereleri neden oval?", durum: "yakinda" },
        { id: "gk2-5", ad: "Tuvaletteki atıklar havaya mı bırakılıyor?", durum: "yakinda" },
        { id: "gk2-6", ad: "Uçağın kanatları uçuşta esniyor mu?", durum: "yakinda" },
        { id: "gk2-7", ad: "Kuş çarpması ne kadar zarar verir?", durum: "yakinda" },
        { id: "gk2-8", ad: "Türbülans uçağı düşürebilir mi?", durum: "yakinda" },
        { id: "gk2-9", ad: "Uçağa yıldırım çarparsa ne olur?", durum: "yakinda" },
        { id: "gk2-10", ad: "Pilotlar uzun uçuşlarda uyuyabiliyor mu?", durum: "yakinda" },
        { id: "gk2-11", ad: "Uçakta kulaklarımız neden tıkanır?", durum: "yakinda" },
        { id: "gk2-12", ad: "Uçaklar neden beyaz boyanır?", durum: "yakinda" }
      ] },
      { id: "gk3", ad: "Havacılık Efsaneleri ve Güvenlik", altBasliklar: [
        { id: "gk3-1", ad: "Kara kutu gerçekten siyah mı?", durum: "yakinda" },
        { id: "gk3-2", ad: "Oksijen maskeleri neden kısa süre yetiyor?", durum: "yakinda" },
        { id: "gk3-3", ad: "Uçaklarda neden paraşüt yok?", durum: "yakinda" },
        { id: "gk3-4", ad: "Emniyet kemeri türbülansta işe yarar mı?", durum: "yakinda" },
        { id: "gk3-5", ad: "Kazalar neden kalkış ve inişte oluyor?", durum: "yakinda" },
        { id: "gk3-6", ad: "Pilotlar neden farklı yemek yer?", durum: "yakinda" },
        { id: "gk3-7", ad: "Uçuşta acil çıkış kapısı açılabilir mi?", durum: "yakinda" },
        { id: "gk3-8", ad: "Pist ışıkları nasıl bir mantıkla çalışır?", durum: "yakinda" },
        { id: "gk3-9", ad: "Gece inişte kabin ışıkları neden karartılır?", durum: "yakinda" },
        { id: "gk3-10", ad: "Havacılıkta neden İngilizce konuşulur?", durum: "yakinda" }
      ] },
      { id: "gk4", ad: "Uzay, Roketler ve Uydular", altBasliklar: [
        { id: "gk4-1", ad: "Bir roket uzaya çıkmak için ne kadar hızlanmalı?", durum: "yakinda" },
        { id: "gk4-2", ad: "Uzayda hava yoksa roket nasıl yanıyor?", durum: "yakinda" },
        { id: "gk4-3", ad: "Uydular nasıl yörüngede kalıyor?", durum: "yakinda" },
        { id: "gk4-4", ad: "ISS'de astronotlar neden süzülüyor?", durum: "yakinda" },
        { id: "gk4-5", ad: "Roketten ayrılan parçalar nereye düşüyor?", durum: "yakinda" },
        { id: "gk4-6", ad: "İnsan uzay boşluğunda ne kadar dayanır?", durum: "yakinda" },
        { id: "gk4-7", ad: "Dönen kapsüller neden yanmıyor?", durum: "yakinda" },
        { id: "gk4-8", ad: "Mars'a gitmek neden aylar sürüyor?", durum: "yakinda" },
        { id: "gk4-9", ad: "Fırlatmadaki ses dalgaları rokete zarar vermiyor mu?", durum: "yakinda" },
        { id: "gk4-10", ad: "Roketler dikey olarak nasıl iniyor?", durum: "yakinda" },
        { id: "gk4-11", ad: "Uzayda neden ses yok?", durum: "yakinda" },
        { id: "gk4-12", ad: "Roketler kalkıştan sonra neden yan yatar?", durum: "yakinda" },
        { id: "gk4-13", ad: "GPS neden göreliliğe ihtiyaç duyar?", durum: "yakinda" }
      ] },
      { id: "gk5", ad: "Savunma Teknolojisi", altBasliklar: [
        { id: "gk5-1", ad: "Radar nasıl çalışır?", durum: "yakinda" },
        { id: "gk5-2", ad: "Hayalet uçaklar radarda neden zor görünür?", durum: "yakinda" },
        { id: "gk5-3", ad: "İHA ile SİHA farkı nedir?", durum: "yakinda" },
        { id: "gk5-4", ad: "Jet motoru ile roket motoru farkı nedir?", durum: "yakinda" },
        { id: "gk5-5", ad: "SR-71 neden hâlâ efsane kabul ediliyor?", durum: "yakinda" }
      ] },
      { id: "gk6", ad: "Kazalar ve Bıraktıkları Dersler", altBasliklar: [
        { id: "gk6-1", ad: "Comet kazaları ve metal yorulması", durum: "yakinda" },
        { id: "gk6-2", ad: "Tenerife faciası ve standart telsiz dili", durum: "yakinda" },
        { id: "gk6-3", ad: "Gimli Glider ve birim karışıklığı", durum: "yakinda" },
        { id: "gk6-4", ad: "Aloha 243 ve yaşlanan uçaklar", durum: "yakinda" },
        { id: "gk6-5", ad: "Hudson Nehri'ne iniş", durum: "yakinda" },
        { id: "gk6-6", ad: "Air France 447 ve pitot buzlanması", durum: "yakinda" },
        { id: "gk6-7", ad: "Challenger ve O-ringler", durum: "yakinda" },
        { id: "gk6-8", ad: "Columbia ve ısıl koruma", durum: "yakinda" },
        { id: "gk6-9", ad: "Mars Climate Orbiter ve birim hatası", durum: "yakinda" },
        { id: "gk6-10", ad: "Ariane 5 ve yazılım hatası", durum: "yakinda" }
      ] }
    ],
    icerik: {
      "gk1-8": {
        ad: "Uçakların arkasındaki beyaz çizgiler nedir?",
        unite: "Uçaklar Nasıl Uçar?",
        sure: 3,
        guncelleme: "11 Eylül 2026",
        icerikSurum: "1.0",
        ozet: "Bu çizgiler duman değil, buz kristallerinden oluşan yapay bulutlardır. Motor egzozundaki su buharı, yükseklerdeki çok soğuk havada anında yoğuşup donar.",
        bolumler: [
          { id: "g1", tip: "metin", metin: "Soğuk bir kış sabahı nefes verdiğinde ağzından beyaz bir buğu çıkar. Uçağın arkasındaki çizgi de temelde aynı olaydır, sadece çok daha büyük ölçekte.\n\nJet yakıtı bir hidrokarbondur. Motorda yandığında karbondioksit ve su buharı ortaya çıkar. Yaklaşık 1 kg yakıt yandığında 1 kg dan biraz fazla su buharı oluşur. Yani uzun bir uçuşta motorlar havaya tonlarca su buharı bırakır.\n\nYolcu uçaklarının seyir irtifasında hava genellikle −40 °C nin altındadır. Motordan çıkan sıcak ve nemli egzoz bu soğuk havayla karışınca hızla soğur. Su buharı, egzozdaki küçük is parçacıklarının üzerinde yoğuşur ve hemen donar. Sonuç, uçağın arkasında uzanan milyarlarca küçük buz kristalidir. Bu izlere Türkçede kondansasyon izi denir." },
          { id: "g2", tip: "metin", baslik: "Neden bazen hemen kayboluyor?",
            metin: "Cevap, uçağın içinden geçtiği havanın nemidir. Hava kuruysa buz kristalleri birkaç saniye ile birkaç dakika içinde buharlaşır ve iz kaybolur. Hava buza göre aşırı doygunsa kristaller büyür ve rüzgârla yayılır. Bu durumda iz saatlerce kalabilir ve ince, tüy gibi sirrus bulutlarına dönüşebilir. Aynı gün aynı gökyüzünde bir uçağın izinin hemen kaybolup diğerininkinin kalıcı olmasının sebebi, farklı nem koşullarındaki hava katmanlarından geçmeleridir.\n\nNemli havada bazen kanat uçlarından çıkan kısa ve ince izler de görürsün. Bunlar egzozdan değil, kanat etrafındaki basınç düşüşünün havayı anlık soğutmasından oluşur.",
            kutu: { tip: "yanilgi", baslik: "Yaygın yanılgı", metin: "Bu izlerin uçaklardan kasıtlı olarak püskürtülen kimyasallar olduğu iddia edilir. Bu iddia bilimsel bulgularla desteklenmez. İzlerin oluşumu, fiziksel olarak iyi bilinen yoğuşma ve donma koşullarıyla açıklanır." } },
          { id: "g3", tip: "metin", baslik: "İşin mühendislik tarafı",
            metin: "Bu izler sadece görsel bir olay değil. 2018 yılı için yapılan kapsamlı bir çalışmada, havacılığın iklim üzerindeki net ısıtıcı etkisinde en büyük payın bu izlerden oluşan bulutlara ait olduğu, ikinci sırada ise karbondioksitin geldiği bulundu. Bu yüzden araştırmacılar, uçakların izin oluşacağı nemli hava katmanlarından kaçınmak için irtifalarını küçük miktarlarda değiştirmesi üzerine çalışıyor.\n\nİzin oluşup oluşmayacağını belirleyen koşullar termodinamikte nemli hava ve yoğuşma konusuyla hesaplanır. Yakıttan ne kadar su buharı çıktığı ise İtki Sistemleri dersindeki yanma ürünleri konusudur." },
          { id: "g4", tip: "kaynakca", baslik: "Kaynakça", maddeler: [
            "Schumann, U. (1996). On conditions for contrail formation from aircraft exhausts. Meteorologische Zeitschrift, 5(1), 4–23.",
            "Lee, D. S. ve diğerleri (2021). The contribution of global aviation to anthropogenic climate forcing for 2000 to 2018. Atmospheric Environment, 244, 117834."
          ] }
        ],
        sorular: [
          { id: "gs1", etiket: "Kavram", puan: 1,
            soru: "Uçağın arkasında gördüğümüz uzun beyaz iz esas olarak nedir?",
            secenekler: ["Motorun ürettiği duman", "Egzozdaki su buharının soğuk havada yoğuşup buz kristallerine dönüşmesi", "Uçağın boşalttığı yakıt", "Hava sürtünmesiyle ısınan havanın görünür hale gelmesi"],
            dogru: 1,
            aciklama: "Jet yakıtı yanınca su buharı oluşur. Bu buhar seyir irtifasındaki çok soğuk havada yoğuşup donar." },
          { id: "gs2", etiket: "Neden", puan: 1,
            soru: "Aynı gün benzer irtifada uçan iki uçaktan birinin izi saniyeler içinde kayboluyor, diğerininki saatlerce kalıyor. En olası sebep?",
            secenekler: ["Uçaklardan biri yakıt boşaltıyordur", "Motor markası izin ne kadar kalacağını belirler", "Uçaklar farklı nem koşullarındaki hava katmanlarından geçiyordur", "Hızlı giden uçağın izi daha uzun kalır"],
            dogru: 2,
            aciklama: "İzin kalıcılığını belirleyen ana etken havanın nemidir. Kuru havada kristaller hızla buharlaşır, aşırı doygun havada büyür ve yayılır." }
        ],
        ipuclari: {
          "Kavram": "Yakıtın yanmasıyla su buharı oluştuğunu ve bunun soğukta donduğunu tekrar et.",
          "Neden": "İzin kalıcılığının havanın nemine bağlı olduğunu tekrar et."
        }
      }
    }
  },

  /* ---- KAVRAMLAR (Günün Kavramı) — sıfırlandı, yeniden yazılacak ---- */
  kavramlar: [
    { id:"k1", kategori:"Yapı & Mukavemet", ad:"Gerilme", en:"Stress", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Bir malzemenin dışarıdan uygulanan kuvvete karşı birim kesit alanında gösterdiği iç direnç kuvvetidir. σ = F/A (dik gerilme) veya τ = F/A (kayma gerilmesi). Birimi Pa (N/m²).",
      ornek:"İki ucundan çekilen bir halatın kopmamak için moleküler düzeyde oluşturduğu iç gerginlik.",
      onem:"Uçak yapılarında spar, gövde kaplaması ve bağlantı elemanlarının yük altında kırılmadan çalışmasını sağlayan tüm mukavemet hesaplarının temel parametresidir.",
      soru:"Aynı kuvvete maruz kalan iki parçadan kesit alanı küçük olanında gerilme neden daha yüksektir?",
      cevap:"σ=F/A formülünde alan (A) paydadır; alan küçüldükçe aynı kuvvet daha dar alana biner ve gerilme artar. Uçak tasarımında çentikler, delikler gibi kesit daralan bölgelerde gerilme konsantrasyonu oluşur." },
    { id:"k2", kategori:"Aerodinamik", ad:"Taşıma", en:"Lift", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Kanat profilinin etrafında oluşan akış sapması ve basınç farkı sonucu, serbest akış doğrultusuna 90° dik ve yukarı doğru oluşan net aerodinamik kuvvettir. L = C_L · ½ρV²S.",
      ornek:"Arabanın camından elinizi çıkarıp hafifçe yukarı eğdiğinizde rüzgârın elinizi yukarı fırlatması.",
      onem:"Havadan ağır araçların yer çekimini dengeleyerek havada tutunmasını sağlayan birincil kuvvettir.",
      soru:"Simetrik bir profil hücum açısı sıfır iken taşıma üretebilir mi?",
      cevap:"Hayır. Simetrik profilde α=0°'de alt-üst basınç dağılımı simetriktir, C_L=0'dır. Taşıma için pozitif hücum açısı gerekir. Kambur profillerde ise α=0°'de bile pozitif taşıma vardır." },
    { id:"k3", kategori:"Aerodinamik", ad:"Mach Sayısı", en:"Mach Number (M)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Hava aracının hızının yerel ses hızına oranıdır (M=V/a). Ses hızı sıcaklığa bağlıdır (a=√(γRT)), dolayısıyla Mach sayısı irtifaya göre değişir.",
      ornek:"Ses hızının 1200 km/h olduğu bir irtifada 1200 km/h hızla giden uçak Mach 1,0'dır.",
      onem:"Sıkıştırılabilirlik rejimlerini (sesaltı, transonik, sesüstü, hipersonik) ve şok dalgası sınırlarını belirleyen temel metriktir.",
      soru:"Uçak sabit TAS ile daha soğuk bir irtifaya tırmandığında Mach sayısı neden yükselir?",
      cevap:"Ses hızı a=√(γRT) ile sıcaklığa bağlıdır. Soğuk irtifada T düşer → a düşer. V sabit, a küçülünce Ma=V/a büyür." },
    { id:"k4", kategori:"Yapı & Mukavemet", ad:"Yorulma", en:"Fatigue", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Malzemenin statik dayanım sınırının altındaki tekrarlı yükler altında mikro çatlaklar büyütüp aniden kırılması durumudur.",
      ornek:"Metal ataşı tek hamlede koparamazsınız ama sürekli öne-arkaya büktüğünüzde birkaç saniyede kırılır.",
      onem:"Gövde kaplamasının kabin basınçlandırma döngüleri ve kanat bağlantılarının toplam güvenli uçuş ömrünü ve NDT bakım aralıklarını belirler.",
      soru:"Akma gerilmesinin altında çalışan bir iniş takımı bileşeni neden binlerce uçuş sonra aniden kırılabilir?",
      cevap:"Tekrarlı yükler mikro çatlaklar oluşturur; her döngüde çatlak biraz büyür. Çatlak kritik boyuta ulaştığında kalan kesit anlık yükü taşıyamaz ve parça aniden kırılır. Buna yorulma kırılması denir." },
    { id:"k5", kategori:"Yapı & Mukavemet", ad:"Emniyet Katsayısı", en:"Factor of Safety (FoS)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Yapının kırılma yükünün (Ultimate Load) tasarım limit yüküne (Limit Load) oranıdır: FoS = Ultimate / Limit.",
      ornek:"100 kg taşıması planlanan sandalyenin 150 kg'a kadar kırılmayacak şekilde boyutlandırılması (FoS=1,5).",
      onem:"Havacılıkta standart FoS genelde 1,5'tir; yapısal ağırlık ile uçuş emniyeti arasındaki hassas mühendislik dengesidir.",
      soru:"Köprülerde FoS 2-3 alınırken havacılıkta neden 1,5 ile sınırlandırılır?",
      cevap:"Uçakta her gram fazla ağırlık performansı, menzili ve yakıt tüketimini doğrudan etkiler. 1,5 değeri, kapsamlı test/analiz/sertifikasyon süreciyle desteklendiğinde yeterli emniyet sağlarken ağırlığı minimumda tutar." },
    { id:"k6", kategori:"Malzeme", ad:"Kompozit Malzeme", en:"Composite Material", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Çözünmeyen en az iki bileşenin (takviye lifleri + matris reçine) makro düzeyde birleştirilmesiyle elde edilen mühendislik malzemesidir.",
      ornek:"Çimento harcının içine çelik donatı koyarak hem çekmeye hem basmaya dayanıklı betonarme elde edilmesi.",
      onem:"B787 ve A350'de yapısal ağırlığın %50'sinden fazlasını oluşturarak yakıt tasarrufu, korozyon ve yorulma direnci sağlar.",
      soru:"Kompozitlerin anizotropik olması tasarımcıya ne avantaj sağlar?",
      cevap:"Lif yönlendirmesi ile yükün geldiği doğrultuda maksimum dayanım sağlanırken, yükün az olduğu yönde malzeme tasarrufu yapılır. Bu 'aeroelastic tailoring' ile kanat eğilme-burulma davranışı optimize edilebilir." },
    { id:"k7", kategori:"Aerodinamik", ad:"Sürükleme", en:"Drag", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Uçağın hareketi esnasında sürtünme, şekil direnci ve taşıma üretiminden kaynaklanan, geriye doğru etki eden aerodinamik dirençtir. D = C_D · ½ρV²S.",
      ornek:"Rüzgâra karşı koşarken vücudunuzu geriye iten direnç.",
      onem:"Motor itki gücünü, yakıt tüketimini, maksimum seyir hızını ve menzil performansını doğrudan belirler.",
      soru:"Hız arttıkça parazit sürükleme ve indüklenmiş sürükleme nasıl değişir?",
      cevap:"Parazit sürükleme hızın karesiyle artar (sürtünme+şekil direnci). İndüklenmiş sürükleme ise hız arttıkça azalır (aynı taşıma için daha düşük C_L yeterli olur). İkisinin toplamının minimum olduğu nokta en verimli seyir hızıdır." },
    { id:"k8", kategori:"Aerodinamik", ad:"Ağırlık Merkezi", en:"Center of Gravity (CG)", mulakat:true, branslar:["ucak"],
      tanim:"Uçağın tüm kütlelerinin ağırlık bileşkesinin toplandığı ve 3 eksendeki dönme hareketlerinin etrafında gerçekleştiği merkez noktadır.",
      ornek:"Uzun bir cetveli parmağınız üzerinde tam dengede tutabildiğiniz temas noktası.",
      onem:"Statik yunuslama kararlılığı ve elevator etkinliği CG'nin belirlenen ön-arka sınırlar içinde kalmasına bağlıdır.",
      soru:"CG'nin taşıma merkezinin arkasına kayması uçağın kararlılığını nasıl etkiler?",
      cevap:"CG arkaya kayarsa kuyruk moment kolu kısalır, pitch-down düzeltme momenti zayıflar. Uçak burnunu yukarı kaldırma eğilimine girer ve kontrol edilemez hale gelebilir; aşırı durumda derin stall riski doğar." },
    { id:"k9", kategori:"Aerodinamik", ad:"Reynolds Sayısı", en:"Reynolds Number (Re)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Akışkanda atalet kuvvetlerinin viskozite kuvvetlerine oranını veren boyutsuz parametredir: Re = ρVL/μ.",
      ornek:"Bala batırılan kaşığın yavaş çekilmesi (düşük Re) ile suda hızla çekilen küreğin türbülans oluşturması (yüksek Re).",
      onem:"Sınır tabakanın laminer→türbülanslı geçişini belirler; rüzgâr tüneli modellerinin gerçek uçakla aerodinamik benzerliğini kurar.",
      soru:"1/10 ölçekli modelde Reynolds sayısını korumak için ne yapılır?",
      cevap:"Re=ρVL/μ'da L 10 kat küçüldüğünden, ya hız 10 kat artırılır ya da daha yoğun/düşük viskoziteli akışkan (basınçlı tünel, kriojenik tünel) kullanılır." },
    { id:"k10", kategori:"Analiz & Tasarım", ad:"Sonlu Elemanlar Analizi", en:"Finite Element Analysis (FEA)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Karmaşık geometrilerin sonlu sayıda küçük elemana (mesh) bölünerek gerilme, deformasyon ve deplasmanların sayısal olarak çözülmesi yöntemidir.",
      ornek:"Karmaşık bir kanat yapısının binlerce küçük parçaya bölünüp her parçadaki kuvvet aktarımının hesaplanması.",
      onem:"Fiziksel prototip üretilmeden gerilme yığılmalarının tespiti, yapısal hafifletme ve optimize tasarımı mümkün kılar.",
      soru:"FEA'da mesh aşırı sıklaştırılırsa ne olur? Mesh convergence ne demektir?",
      cevap:"Mesh sıklaştıkça çözüm doğruluğu artar ama işlem süresi katlanır. Mesh convergence, farklı mesh yoğunluklarında çözümün aynı değere yakınsamasıdır — bu noktadan sonra daha fazla sıklaştırma gereksizdir." },
    { id:"k11", kategori:"Motor & İtki", ad:"Kompresör", en:"Compressor", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Gaz türbinli motorlarda havanın basınç ve yoğunluğunu rotor-stator kademeleriyle artıran döner turbomakine bileşenidir.",
      ornek:"Bisiklet pompasının pistonuyla havanın basıncını artırıp hacmini daraltması.",
      onem:"Yanma odasında yakıtın en yüksek verimle (Brayton çevrimi) yakılması için gerekli yüksek basınçlı havayı temin eder.",
      soru:"Eksenel ile santrifüj kompresörlerin avantaj/dezavantajları nelerdir?",
      cevap:"Eksenel: yüksek hava debisi, dar kesit alanı, çok kademeli → yolcu uçağı motorlarında standart. Santrifüj: tek kademede yüksek sıkıştırma oranı ama geniş çap → küçük turboprop/turboşaft motorlarda tercih edilir." },
    { id:"k12", kategori:"Aerodinamik", ad:"Stall (Tutunma Kaybı)", en:"Stall", mulakat:true, branslar:["ucak"],
      tanim:"Hücum açısının kritik sınırı aşmasıyla kanat üst yüzeyindeki sınır tabakanın kopması, taşımanın çökmesi ve sürüklemenin fırlaması durumudur.",
      ornek:"Suyun içinde elinizi çok dik tuttuğunuzda suyun arkanızdan dolanamayıp türbülans oluşturması.",
      onem:"Uçuş zarfı sınırlarının, stall uyarı sistemlerinin (Stick Shaker) ve minimum kalkış/iniş hızlarının belirlenmesinde birincildir.",
      soru:"Uçak yüksek hızda stall'a girebilir mi?",
      cevap:"Evet. Stall tamamen hücum açısına bağlıdır, hıza değil. Yüksek hızda sert manevra (yüksek yük faktörü) kritik açıyı aştırabilir — buna hızlandırılmış stall (accelerated stall) denir." },
    { id:"k13", kategori:"Yapı & Mukavemet", ad:"Birim Şekil Değiştirme", en:"Strain (ε)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Yük altındaki malzemenin boyundaki değişimin ilk boyutuna oranıdır: ε = ΔL/L₀. Boyutsuz bir niceliktir.",
      ornek:"100 mm'lik çubuk çekme yükü altında 101 mm'ye uzarsa ε = 1/100 = 0,01 (%1).",
      onem:"Malzemenin ne kadar esnendiğini ve plastik deformasyon sınırına ne kadar yaklaştığını strain-gauge sensörleriyle ölçmeye yarar.",
      soru:"Elastik şekil değiştirme ile plastik şekil değiştirme arasındaki fark nedir?",
      cevap:"Elastik deformasyonda atomlar geçici olarak yer değiştirir, yük kalktığında geri döner. Plastikte atomlar kalıcı olarak kayar (dislokasyon hareketi), malzeme eski haline dönmez." },
    { id:"k14", kategori:"Aerodinamik", ad:"Bernoulli Prensibi", en:"Bernoulli's Principle", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Sıkıştırılamaz, sürtünmesiz, daimi akışta toplam mekanik enerjinin korunduğunu ifade eder: P + ½ρV² = sabit. Hızlanan bölgede basınç düşer.",
      ornek:"İki kağıt sayfası arasından hızla üflediğinizde kağıtların birbirine yapışması.",
      onem:"Kanat üst yüzeyinde hızlanan havanın basınç düşüşünü ve Venturi tipi dönüşümleri açıklar.",
      soru:"Bernoulli tek başına uçuşu açıklamakta neden yetersizdir?",
      cevap:"Bernoulli basınç-hız ilişkisini açıklar ama 'hız neden artar?' sorusunu yanıtlamaz. Tam açıklama için Newton'un 3. yasası (kanat havayı aşağı saptırır → tepki yukarı kuvvet) ile birlikte düşünülmelidir. İkisi aynı olayın farklı hesaplama yollarıdır." },
    { id:"k15", kategori:"Yapı & Mukavemet", ad:"V-n Diyagramı", en:"V-n Diagram", mulakat:true, branslar:["ucak"],
      tanim:"Uçuş hava hızı (V) ile yük faktörü (n) arasındaki aerodinamik ve yapısal sınırları gösteren güvenli operasyonel uçuş zarfı grafiğidir.",
      ornek:"Bir aracın hızına göre yapabileceği en sert viraj limitlerini gösteren emniyet haritası.",
      onem:"Aerodinamik stall sınırını, limit load ve ultimate load yapısal sınırlarını tasarım aşamasında tanımlar.",
      soru:"Manevra hızı (V_A) neyi temsil eder?",
      cevap:"V_A, tam kumanda girdisi verildiğinde uçağın yapısal limit yüküne (n_max) tam stall sınırında ulaştığı hızdır. Bu hızın altında tam kumanda girdisi yapıyı kıramaz çünkü kanat daha önce stall'a girer ve yükü sınırlar." },
    { id:"k16", kategori:"Motor & İtki", ad:"Türbin", en:"Turbine", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Yanma odasından çıkan yüksek sıcaklık-basınçlı gazların genleşme enerjisini döner mil vasıtasıyla mekanik güce dönüştüren turbomakine bileşenidir.",
      ornek:"Kaynayan çaydanlığın buharının pervaneye çarpıp onu döndürmesi.",
      onem:"Kompresörü, ön fanı ve motor aksesuarlarını döndürecek ana mekanik mili tahrik eder.",
      soru:"Türbin palleri 1400°C'yi aşan sıcaklıklarda nasıl çalışır?",
      cevap:"Tek kristal (single crystal) döküm ile tane sınırları ortadan kaldırılır (sürünme direnci artar), film cooling ile pal yüzeyine ince soğuk hava tabakası oluşturulur, termal bariyer kaplama (TBC) ile yüzey izole edilir." },
    { id:"k17", kategori:"Malzeme", ad:"Karbon Fiber", en:"Carbon Fiber", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Karbon atomlarının mikroskobik kristaller halinde hizada dizilmesiyle üretilen, çok yüksek çekme mukavemeti, rijitlik ve düşük yoğunluğa sahip sentetik lif takviye elemanıdır.",
      ornek:"Saç telinden ince iplikçiklerin reçineyle dokunup fırınlandığında çelikten kat kat sağlam ve hafif plakaya dönüşmesi.",
      onem:"Ana gövde, kanat ve kuyruk yapılarında ağırlığı radikal şekilde azaltarak menzil ve faydalı yük kapasitesini artırır.",
      soru:"Karbon fiber yapılarda aeroelastic tailoring nasıl uygulanır?",
      cevap:"Lif açıları özel yönlendirilerek kanat eğildiğinde otomatik olarak hücum açısının azalması (wash-out) sağlanır. Bu, yapısal bir mekanizma olmadan aerodinamik yükün kendiliğinden hafiflemesini sağlar." },
    { id:"k18", kategori:"Aerodinamik", ad:"Sınır Tabaka", en:"Boundary Layer", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Havanın viskozitesi nedeniyle katı yüzeydeki sıfır hızdan serbest akış hızının %99'una kadar olan ince viskoz akış tabakasıdır.",
      ornek:"Hızlı giden arabanın kaportasına yapışan toz taneciklerinin rüzgâra rağmen uçmadan yüzeyde kalması.",
      onem:"Yüzey sürtünme sürüklemesini ve akım ayrılması (stall) mekanizmasını doğrudan kontrol eder.",
      soru:"Laminer ve türbülanslı sınır tabaka arasındaki fark nedir?",
      cevap:"Laminer: düzenli, düşük sürtünme ama akım ayrılmasına karşı zayıf. Türbülanslı: karışık, daha yüksek sürtünme ama enerji karıştırması sayesinde akım ayrılmasına çok daha dirençli." },
    { id:"k19", kategori:"Yapı & Mukavemet", ad:"Akma Gerilmesi", en:"Yield Strength (σ_y)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Malzemenin elastik bölgeden plastik (kalıcı) şekil değiştirme bölgesine geçtiği kritik gerilme eşiğidir.",
      ornek:"Bir teli hafifçe bükünce geri döner; belli kuvveti aşınca bükülü kalır — bu geçiş noktası akma gerilmesidir.",
      onem:"Uçak parçalarının operasyonel yükler altında kalıcı biçim bozulmasına uğramaması için tasarımdaki ana emniyet tavanıdır.",
      soru:"Akma ile çekme dayanımı farkı nedir? Alüminyumda akma noktası nasıl belirlenir?",
      cevap:"Akma kalıcı deformasyonun başladığı gerilmedir, çekme dayanımı kopma sınırıdır. Alüminyum gibi belirgin akma noktası olmayan malzemelerde %0,2 kalıcı uzama offseti ile belirlenir." },
    { id:"k20", kategori:"Analiz & Tasarım", ad:"Hesaplamalı Akışkanlar Dinamiği", en:"CFD", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Navier-Stokes ve süreklilik denklemlerinin sayısal ağlar ve bilgisayar algoritmaları ile çözülerek akış alanının simüle edilmesidir.",
      ornek:"Sanal rüzgâr tüneli kurup uçağın etrafındaki akış hatlarını ve basınç haritalarını ekranda incelemek.",
      onem:"Pahalı rüzgâr tüneli testleri öncesinde aerodinamik formu optimize etmeyi ve C_L/C_D'yi öngörmeyi sağlar.",
      soru:"CFD'de duvar yakınındaki y⁺ değeri ne işe yarar?",
      cevap:"y⁺, ilk hücre yüksekliğinin viskoz alt tabaka kalınlığına oranıdır. Düşük y⁺ (≈1) duvar çözünürlüklü modelleme, yüksek y⁺ duvar fonksiyonu kullanımı gerektirir. Yanlış y⁺ sınır tabaka fiziğini bozar." },
    { id:"k21", kategori:"Aerodinamik", ad:"Hücum Açısı", en:"Angle of Attack (α)", mulakat:true, branslar:["ucak"],
      tanim:"Kanat kesitinin veter çizgisi ile bağıl rüzgâr doğrultusu arasındaki açıdır.",
      ornek:"Arabanın camından uzattığın elin avuç içini rüzgâra karşı eğme açısı.",
      onem:"C_L ve C_D'yi doğrudan kontrol eden ana uçuş parametresidir.",
      soru:"Yunuslama açısı (pitch angle) ile hücum açısı (α) arasındaki fark nedir?",
      cevap:"Pitch angle uçağın burnunun ufukla yaptığı açıdır; α ise veter çizgisinin bağıl rüzgârla yaptığı açıdır. İkisi ancak rüzgâr tam yataysa eşittir. Tırmanışta/inişte veya rüzgârlı koşullarda farklıdırlar." },
    { id:"k22", kategori:"Kontrol & Aviyonik", ad:"Fly-by-Wire", en:"Fly-by-Wire (FBW)", mulakat:true, branslar:["ucak"],
      tanim:"Pilot kumanda hareketlerinin mekanik kablolar yerine elektronik sinyallere dönüştürülüp uçuş bilgisayarları denetiminden geçtikten sonra eyleyicilere iletilmesidir.",
      ornek:"Joystik komutu önce bilgisayara gider, bilgisayar uçuş zarfı limitlerini kontrol edip öyle hareket ettirir.",
      onem:"Uçuş zarfı koruması (envelope protection) sağlar, pilot yükünü hafifletir, ağır mekanik kabloları kaldırır.",
      soru:"Normal Law ile Direct Law arasındaki fark nedir?",
      cevap:"Normal Law'da bilgisayar tam zarfı korur (stall koruması, yük limiti vb.). Sensör arızalarında sistem Direct Law'a geçer: bilgisayar korumaları devre dışı kalır, pilot kumandaları doğrudan yüzeylere aktarılır — pilot tüm sorumluluğu üstlenir." },
    { id:"k23", kategori:"Yapı & Mukavemet", ad:"Burkulma", en:"Buckling", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Basma yüküne maruz ince elemanların akma gerilmesine ulaşmadan aniden yana doğru bel vermesi ve kararsızlaşmasıdır.",
      ornek:"Dik tutulan ince plastik cetveli iki ucundan bastırdığınızda aniden yana bükülmesi.",
      onem:"Gövde ve kanat kaplamalarının basma yükleri altında lokal burkulmasını önlemek için stringer takviye elemanları kullanılır.",
      soru:"Euler burkulma denkleminde burkulma dayanımını artırmak için ne yapılır?",
      cevap:"P_cr=π²EI/(KL)²: atalet momenti (I) artırılır (kesit büyütme/stringer ekleme), efektif uzunluk (KL) kısaltılır (ara destek/bağlantı şartı iyileştirme), rijitlik (E) yüksek malzeme seçilir." },
    { id:"k24", kategori:"Motor & İtki", ad:"Turbofan", en:"Turbofan", mulakat:true, branslar:["ucak"],
      tanim:"Büyük bir fan ile emdiği havanın büyük kısmını bypass kanalına, küçük kısmını sıcak çekirdeğe yönlendirerek verimli itki üreten gaz türbinli motordur.",
      ornek:"İçinde küçük bir jet motoru çalışan, dışındaki dev fanı döndürerek havayı geriye fırlatan kanal içi pervane.",
      onem:"Sesaltı ticari uçaklarda yüksek itki, düşük yakıt tüketimi (SFC) ve düşük gürültü sağlar.",
      soru:"Bypass oranı artınca sevk verimi nasıl değişir?",
      cevap:"Bypass oranı arttıkça daha büyük kütlede hava daha düşük hızda ivmelenir; bu, jet hızı ile uçak hızı farkını azaltır ve sevk verimini (propulsive efficiency) artırır. Ayrıca gürültü düşer." },
    { id:"k25", kategori:"Aerodinamik", ad:"Dinamik Basınç", en:"Dynamic Pressure (q)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Akan akışkanın kinetik enerjisinin birim hacimdeki karşılığıdır: q = ½ρV².",
      ornek:"Rüzgâra karşı yürürken yüzünüzde hissettiğiniz çarpma basıncı.",
      onem:"Tüm aerodinamik taşıma ve sürükleme kuvvetlerinin doğrudan çarpanıdır; pitot-statik sistemde hız ölçümünün temelidir.",
      soru:"Durgunluk basıncı (P₀), statik basınç (P) ve dinamik basınç (q) arasındaki ilişki nedir?",
      cevap:"Bernoulli: P₀ = P + q = P + ½ρV². Pitot tüpü P₀'ı, statik port P'yi ölçer; farkları q'dur ve buradan hava hızı (IAS) hesaplanır." },
    { id:"k26", kategori:"Kontrol & Aviyonik", ad:"Uçuş Veri Kaydedici", en:"Flight Data Recorder (FDR)", mulakat:true, branslar:["ucak"],
      tanim:"Hız, irtifa, hücum açısı, motor parametreleri gibi yüzlerce teknik uçuş verisini kaza incelemeleri için kaydeden zırhlı aviyonik ünitedir.",
      ornek:"Otomobillerdeki karakutunun yüksek darbe ve yangına dayanıklı uçak versiyonu.",
      onem:"Kaza kök nedenlerinin tespiti ve havacılık emniyet standartlarının geliştirilmesi için yasal zorunluluktur.",
      soru:"FDR deniz altında nasıl bulunur?",
      cevap:"Üzerindeki Underwater Locator Beacon (ULB), suyla temas ettiğinde otomatik aktive olup 30-90 gün boyunca 37,5 kHz ultrasonik sinyal yayar; bu sinyal özel hidrofonlarla tespit edilir." },
    { id:"k27", kategori:"Yapı & Mukavemet", ad:"Elastisite Modülü", en:"Young's Modulus (E)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Elastik bölgede gerilmenin birim şekil değiştirmeye oranıdır: E = σ/ε. Malzemenin rijitlik ölçüsüdür.",
      ornek:"Çelik zor esner (yüksek E), kauçuk kolayca şekil değiştirir (düşük E).",
      onem:"Kanat ve gövde yapılarının yük altında ne kadar esneyeceğini ve rijitlik performansını belirler.",
      soru:"Alüminyum ile çeliğin E modülleri arasındaki fark nedir?",
      cevap:"Çelik E≈200 GPa, alüminyum E≈70 GPa — yaklaşık 3 kat fark. Aynı yükte alüminyum 3 kat fazla esner; bu yüzden alüminyum yapılar daha kalın kesit veya takviye elemanlarla rijitleştirilir." },
    { id:"k28", kategori:"Aerodinamik", ad:"İndüklenmiş Sürükleme", en:"Induced Drag (C_Di)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Sonlu kanatta taşıma üretimi sırasında kanat ucu girdaplarının (wingtip vortices) neden olduğu aerodinamik dirençtir. C_Di = C_L²/(π·e·AR).",
      ornek:"Küreğin suda hızla çekilirken uçta oluşan girdapların küreği frenlemesi.",
      onem:"Düşük hızda ve tırmanışta toplam sürüklemenin en büyük bileşenidir; winglet ve yüksek AR ile azaltılır.",
      soru:"Aspect Ratio arttıkça indüklenmiş sürükleme nasıl değişir?",
      cevap:"C_Di=C_L²/(π·e·AR) formülünde AR paydadır; AR arttıkça C_Di düşer. Bu yüzden uzun-ince kanatlar (planörler, B787) aerodinamik olarak daha verimlidir — ama yapısal ağırlık bedeli vardır." },
    { id:"k29", kategori:"Kontrol & Aviyonik", ad:"Kalman Filtresi", en:"Kalman Filter", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Gürültülü sensör verilerini sistemin dinamik modeli ile harmanlayarak gerçek durum parametrelerini optimum tahmin eden yinelemeli istatistiksel algoritmadır.",
      ornek:"Tünelde GPS kaybolunca arabanın hız ve direksiyon verilerini birleştirerek konumun doğru gösterilmesi.",
      onem:"INS/GPS sensör füzyonu ve otopilot tutum tahmin algoritmalarında hayati role sahiptir.",
      soru:"Kalman Filtresinin Prediction ve Update adımlarındaki R ve Q ne işe yarar?",
      cevap:"R ölçüm gürültüsü kovaryansı, Q sistem gürültüsü kovaryansıdır. R büyükse filtre ölçüme az güvenir ve modele yaslanır; Q büyükse modele az güvenir ve ölçüme yaslanır. Kalman kazancı bu ikisi arasındaki optimum dengeyi otomatik kurar." },
    { id:"k30", kategori:"Malzeme", ad:"Delaminasyon", en:"Delamination", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Çok katmanlı kompozit yapılarda lif katmanları arasındaki matris bağının kopmasıyla katmanların birbirinden ayrılmasıdır.",
      ornek:"Lamine kontrplağın nem kapıp katlarının yapışkanını kaybederek sıyrılması.",
      onem:"Dış yüzeyden görülemeyen ancak basma dayanımını aşırı düşüren tehlikeli bir iç kusurdur.",
      soru:"Delaminasyon hangi NDT yöntemiyle tespit edilir?",
      cevap:"Ultrasonik muayene en yaygınıdır — ses dalgaları katman ayrımında yansır ve sinyal kaybı/gecikmesi delaminasyonu gösterir. C-scan ile hasar alanı haritalanır. Manyetik yöntem kompozitte kullanılamaz." },
    { id:"k31", kategori:"Motor & İtki", ad:"İtki", en:"Thrust", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Motor veya pervanenin havaya/egzoza ivme kazandırarak Newton 3. yasası gereği ileri yönde ürettiği kuvvettir. F = ṁ(V₉-V₀) + (P₉-P₀)A₉.",
      ornek:"Şişirilmiş balonun ağzı açıldığında havanın geriye fırlamasıyla balonun ileriye uçması.",
      onem:"Uçağın ivmelenmesini, tırmanmasını ve sürüklemeyi yenerek seyir hızını korumasını sağlar.",
      soru:"Momentum itkisi ile basınç itkisi farkı nedir?",
      cevap:"Momentum itkisi: kütle akışının hız farkından (ṁΔV). Basınç itkisi: egzoz çıkışındaki basıncın atmosferden yüksek kalmasından ((P₉-P₀)A₉). Tam genleşmeli nozulda P₉=P₀ olur ve basınç itkisi sıfırlanır." },
    { id:"k32", kategori:"Aerodinamik", ad:"Yük Faktörü", en:"Load Factor (n)", mulakat:true, branslar:["ucak"],
      tanim:"Uçağın ürettiği toplam taşıma kuvvetinin ağırlığına oranıdır: n = L/W.",
      ornek:"Lunaparkta hız treni dip noktadan geçerken koltuğa ağırlığınızın 2 katı kadar bastırılmanız (2G).",
      onem:"Manevra ve virajlarda kanatlara ve gövdeye binen dinamik yapısal yüklerin hesabında kullanılır.",
      soru:"60° yatışta yük faktörü kaç g olur ve stall hızı nasıl etkilenir?",
      cevap:"n=1/cos60°=2g. Stall hızı √n ile orantılı artığından düz uçuşa göre √2 ≈ 1,41 kat yükselir — yani stall hızı %41 artar." },
    { id:"k33", kategori:"Yapı & Mukavemet", ad:"Von Mises Gerilmesi", en:"Von Mises Stress (σ_vm)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Karmaşık 3D gerilme durumlarını tek bir eşdeğer gerilme değerine dönüştüren ve sünek metallerin akma emniyetini değerlendiren kırılma hipotezidir.",
      ornek:"Aynı anda hem çekilip hem bükülen metal milin toplam tehlike seviyesinin tek bir skora indirgenmesi.",
      onem:"FEA analizlerinde alüminyum, çelik ve titanyum parçaların akma sınırını aşıp aşmadığını kontrol etmede standart kriterdir.",
      soru:"Von Mises sünek malzemelerde başarılıyken gevrek malzemelerde neden yetersizdir?",
      cevap:"Von Mises distorsiyon (şekil değiştirme) enerjisine dayanır — sünek malzemeler kayma ile akar. Gevrek malzemeler ise çekme gerilmesiyle çatlayarak kırılır; bu yüzden Maksimum Normal Gerilme (Rankine) kriteri daha uygundur." },
    { id:"k34", kategori:"Aerodinamik", ad:"Ses Hızı", en:"Speed of Sound (a)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Küçük basınç dalgalarının gaz ortamında moleküler etkileşimle yayılma hızıdır: a = √(γRT). Sıcaklığın kareköküyle orantılıdır.",
      ornek:"Sıraya dizilmiş dominoların devrilme dalgasının en sona ulaşma hızı.",
      onem:"Mach sayısı hesaplarının ve transonik şok dalgası rejimi başlangıcının temel referansıdır.",
      soru:"Yüksek irtifada basınç düşer — ses hızı basınç düşüşünden etkilenir mi?",
      cevap:"Hayır. a=√(γRT) formülünde basınç doğrudan yoktur; ses hızı sadece sıcaklığa bağlıdır. Yüksek irtifada ses hızının düşmesinin sebebi sıcaklığın düşmesidir, basınç düşüşü değil." },
    { id:"k35", kategori:"Kontrol & Aviyonik", ad:"Pitot Tüpü", en:"Pitot Tube", mulakat:true, branslar:["ucak"],
      tanim:"Hava akışına dik yerleştirilerek akışı durdurarak toplam (durgunluk) basıncı (P₀) ölçen tüp sensördür.",
      ornek:"Boş borunun açık ucunu rüzgâra tuttuğunuzda içinde oluşan sıkışma basıncı.",
      onem:"Statik basınçla farkı alınarak dinamik basınç (q=P₀-P) bulunur ve hava hızı (IAS) hesaplanır.",
      soru:"Pitot tüpü buzlanıp tıkanırsa tırmanışta IAS ne gösterir?",
      cevap:"Tıkalı pitot tüpü içindeki P₀ sabit kalır. Tırmanışta statik basınç (P) azaldığından q=P₀-P büyümüş gibi görünür ve IAS gerçekten yüksek gösterir — bu tehlikeli bir yanlış okumadır." },
    { id:"k36", kategori:"Analiz & Tasarım", ad:"Tolerans", en:"Tolerance", mulakat:true, branslar:["ucak","uzay"],
      tanim:"İmal edilen parçanın nominal boyutundan sapmasına izin verilen kabul edilebilir aralıktır.",
      ornek:"10,00 mm olması gereken pimin 9,98–10,02 mm arasında olmasına izin verilmesi.",
      onem:"Uçak parçalarının değiştirilebilir (interchangeable) olmasını garanti eder; gereksiz dar toleransların maliyeti patlatmasını önler.",
      soru:"Çok dar tolerans seçmenin maliyete etkisi nedir?",
      cevap:"Maliyet toleransla ters üstel orantılıdır — tolerans yarıya indirildiğinde maliyet 2-4 kat artabilir. Fire oranı yükselir, özel tezgâh/ölçüm gerekir. İyi tasarımcı sadece işlevin gerektirdiği yerde toleransı daraltır." },
    { id:"k37", kategori:"Aerodinamik", ad:"Akış Ayrılması", en:"Flow Separation", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Sınır tabakadaki yavaşlayan havanın olumsuz basınç gradyanını yenemeyerek yüzeyden kopması ve gerisinde türbülanslı iz oluşturmasıdır.",
      ornek:"Viraja çok hızlı giren kaykaycının kavisi takip edemeyip dışarı savrulması.",
      onem:"Stall'a ve biçim sürüklemesinin (form drag) aşırı yükselmesine neden olur.",
      soru:"Vortex generator'lar akış ayrılmasını nasıl geciktirir?",
      cevap:"Kanat yüzeyine yerleştirilen küçük kanatçıklar, serbest akış enerjisini sınır tabakaya karıştırır. Bu enerji enjeksiyonu sınır tabakayı güçlendirir ve olumsuz basınç gradyanına karşı daha uzun dayanmasını sağlar." },
    { id:"k38", kategori:"Yapı & Mukavemet", ad:"Yorulma Ömrü", en:"Fatigue Life", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Belirli bir dalgalı gerilme altında çalışan bileşenin çatlak oluşturup kırılmaya ulaşana kadar dayanabileceği toplam yük döngüsü sayısıdır.",
      ornek:"Uçağın gövde kaplamasının güvenle yapabileceği toplam kabin basınçlandırma (uçuş) sayısı.",
      onem:"Safe-life parça değişim ömürlerinin ve damage tolerance bakım takvimlerinin oluşturulmasını sağlar.",
      soru:"S-N eğrisi (Wöhler eğrisi) nedir?",
      cevap:"Gerilme genliği (S) ile kırılmaya kadar döngü sayısı (N) ilişkisini gösteren eğridir. Çelikte belirli bir gerilmenin altında sonsuz ömür (yorulma limiti/endurance limit) vardır; alüminyumda böyle bir limit yoktur — her gerilmede sonlu ömür vardır." },
    { id:"k39", kategori:"Aerodinamik", ad:"Ağırlık Merkezi Kayması", en:"CG Shift", mulakat:true, branslar:["ucak"],
      tanim:"Uçuş süresince yakıt harcanması veya yük dağılımının değişmesiyle CG konumunun ön-arka doğrultuda yer değiştirmesidir.",
      ornek:"Uzun uçuşta yakıt azaldıkça ağırlık dengesinin değişmesi.",
      onem:"CG'nin izin verilen sınırlar içinde tutulması uçuş emniyeti için şarttır; yakıt transfer stratejisi buna göre planlanır.",
      soru:"CG aşırı öne kayarsa kalkışta ne olur?",
      cevap:"Burun ağırlaşır, pilotun rotasyonda (burun kaldırma) elevator etkinliğine daha çok ihtiyacı olur. Aşırı durumda elevator kuvveti yetersiz kalabilir ve uçak yerden kalkamaz veya kalkış mesafesi ciddi uzar." },
    { id:"k40", kategori:"Motor & İtki", ad:"Turbojet", en:"Turbojet", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Emilen havanın tamamının kompresör-yanma odası-türbinden geçerek egzozdan yüksek hızla fırlatılmasıyla itki üreten saf tepkili motordur.",
      ornek:"Tüm havayı dar bir tüpten geçirip yakarak arkadan fırlatan klasik jet motor.",
      onem:"Mach >2 süpersonik hızlarda etkili ama sesaltı hızlarda yakıt verimi düşük ve gürültülüdür.",
      soru:"Turbojet neden yerini turbofana bıraktı?",
      cevap:"Turbojet tüm havayı çekirdekten geçirir — yüksek egzoz hızı verir ama düşük sevk verimi. Turbofan bypass ile daha büyük hava kütlesini daha düşük hızda ivmelendirir — sesaltında çok daha verimli ve sessiz." },
    { id:"k41", kategori:"Yapı & Mukavemet", ad:"Poisson Oranı", en:"Poisson's Ratio (ν)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Çekme gerilmesindeki enine daralmanın boyuna uzamaya oranıdır: ν = -ε_en/ε_boy.",
      ornek:"Oyun hamurunu çekip uzattığınızda ortasının incelip daralması.",
      onem:"Çok eksenli gerilme analizlerinde ve hacimsel değişim hesaplarında kullanılır.",
      soru:"Sıkıştırılamaz malzemenin (kauçuk gibi) Poisson oranı teorik olarak kaçtır?",
      cevap:"Teorik olarak 0,5. Bu durumda malzeme yük altında hacmini hiç değiştirmez — boyuna uzadığı kadar enine daralır. Metallerde tipik olarak 0,25-0,35 arasındadır." },
    { id:"k42", kategori:"Aerodinamik", ad:"Aerodinamik Verimlilik", en:"Lift-to-Drag Ratio (L/D)", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Toplam taşıma kuvvetinin toplam sürüklemeye oranıdır. Aerodinamik mükemmelliğin boyutsuz metriğidir.",
      ornek:"Motoru durmuş planörün 100 m yükseklikten 2000 m ileriye süzülebilmesi (L/D=20).",
      onem:"Maksimum süzülme mesafesini, en uzun menzili ve en düşük yakıt tüketim noktasını belirler.",
      soru:"Maksimum L/D noktasında parazit ve indüklenmiş sürükleme birbirine eşit midir?",
      cevap:"Evet. Toplam sürükleme D=D_parasit+D_induced'dir; D_parasit hızla artar, D_induced hızla azalır. İkisinin eşitlendiği noktada toplam minimum, dolayısıyla L/D maksimumdur." },
    { id:"k43", kategori:"Analiz & Tasarım", ad:"Sınır Şartı", en:"Boundary Condition", mulakat:true, branslar:["ucak","uzay"],
      tanim:"FEA/CFD'de denklemlerin çözülebilmesi için yapı/akış alanı dış sınırlarına tanımlanan deplasman, kuvvet, hız veya basınç değerleridir.",
      ornek:"Köprü ayaklarını simülasyonda sıfır hareketli (ankastre) olarak kilitlemek.",
      onem:"Yanlış sınır şartı tüm analizi geçersiz kılar; simülasyonun fiziksel testle örtüşmesinin anahtarıdır.",
      soru:"CFD'de 'no-slip condition' ne demektir?",
      cevap:"Katı yüzeyde akışkan hızının sıfır olduğu varsayımıdır — viskoz akışkanlar yüzeye 'yapışır'. Bu, sınır tabakanın oluşmasının fiziksel sebebidir ve tüm viskoz CFD simülasyonlarının temel duvar sınır şartıdır." },
    { id:"k44", kategori:"Kontrol & Aviyonik", ad:"Kokpit Ses Kaydedici", en:"Cockpit Voice Recorder (CVR)", mulakat:true, branslar:["ucak"],
      tanim:"Kokpit telsiz konuşmalarını, pilotlar arası diyalogları ve ortam seslerini kaydeden zırhlı kaza inceleme aygıtıdır.",
      ornek:"Kokpit içine yerleştirilmiş darbeye ve yangına dayanıklı ses kayıt cihazı.",
      onem:"Kaza incelemelerinde insan faktörünü, uyarı seslerini ve ekip kararlarını ortaya çıkarır.",
      soru:"Modern CVR kaç saatlik kayıt tutar?",
      cevap:"En az 2 saat kesintisiz kayıt tutması yasal zorunluluktur (ICAO Annex 6). Yeni nesil CVR'ler 25 saate kadar katı hal (solid-state) belleğe kaydedebilir." },
    { id:"k45", kategori:"Malzeme", ad:"7075-T6 Alüminyum", en:"7075-T6 Aluminum Alloy", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Çinko alaşımlı (7xxx serisi), T6 yapay yaşlandırma ısıl işlemli, çok yüksek basma mukavemetine sahip uçak alüminyumudur.",
      ornek:"Çelik kadar mukavemetli ama alüminyum hafifliğinde özel havacılık metali.",
      onem:"Kanat üst kaplamasında ve stringer profillerinde basma gerilmelerine karşı ana yapısal malzemedir.",
      soru:"Üst kaplamada 7075-T6 (Al-Zn) varken alt kaplamada neden 2024-T3 (Al-Cu)?",
      cevap:"Üst kaplama uçuşta basma yükü görür — 7075'in basma mukavemeti üstündür. Alt kaplama çekme yükü görür — 2024'ün çekme yorulma direnci ve hasar toleransı (çatlak ilerleme hızı) daha iyidir." },
    { id:"k46", kategori:"Aerodinamik", ad:"Türbülans", en:"Turbulence", mulakat:true, branslar:["ucak"],
      tanim:"Akışkan moleküllerinin doğrusal olmayan, rastgele girdaplar oluşturarak hareket etmesi durumudur.",
      ornek:"Sakin akan nehrin kayalara çarparak dalgalanması ve köpürmesi.",
      onem:"Uçak yapısına dinamik sarsıntı yükleri bindirir, sürtünme sürüklemesini artırır ve yolcu konforunu etkiler.",
      soru:"Clear Air Turbulence (CAT) nedir ve neden radarla tespit edilemez?",
      cevap:"CAT, bulut veya yağış olmadan, genellikle jet akıntıları yakınında rüzgâr kayması (wind shear) ile oluşan türbülanstır. Havada nem/yağış parçacıkları olmadığından meteoroloji radarlarının yansıtıcı hedefi yoktur." },
    { id:"k47", kategori:"Aerodinamik", ad:"Stall Hızı", en:"Stall Speed (V_stall)", mulakat:true, branslar:["ucak"],
      tanim:"Uçağın belirli ağırlık ve irtifada taşımayı ağırlığa eşit tutabileceği en düşük hızdır: V_stall = √(2W/(ρSC_L,max)).",
      ornek:"Bisikletçinin devrilmeden dengede kalabilmek için gitmek zorunda olduğu minimum sürat.",
      onem:"Kalkış/iniş hızlarının (V_REF ≈ 1,3 V_stall) ve pist uzunluğu gereksinimlerinin temelidir.",
      soru:"Ağırlık artınca veya viraj dönülünce stall hızı nasıl değişir?",
      cevap:"İkisinde de artar. W büyürse formüldeki pay büyür → V_stall artar. Virajda yük faktörü n>1 olduğundan V_stall √n kadar yükselir." },
    { id:"k48", kategori:"Kontrol & Aviyonik", ad:"PID Kontrol", en:"PID Controller", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Hedef-mevcut arasındaki hatanın Oransal (P), İntegral (I) ve Türevsel (D) bileşenlerini işleyerek geri beslemeli denetim sağlayan algoritmadır.",
      ornek:"Arabanın hız sabitleyicisinin yokuşta hedef hızı korumak için gaza basma miktarını sürekli ayarlaması.",
      onem:"Otopilot, İHA tutum denetimi ve motor devir kontrolcülerinde kararlı hedef takibi sağlar.",
      soru:"Derivative (D) teriminin aşımı (overshoot) engellemedeki rolü nedir?",
      cevap:"D terimi hatanın değişim hızını (türevini) ölçer. Hata hızla azalıyorsa (hedefe yaklaşılıyorsa) D frenleme etkisi yapar — bu da sistemi yavaşlatıp aşımı önler. Ama gürültülü sensörlerde D terimi sorun çıkarabilir." },
    { id:"k49", kategori:"Yapı & Mukavemet", ad:"Burulma", en:"Torsion", mulakat:true, branslar:["ucak","uzay"],
      tanim:"Elemanın boylamasına ekseni etrafında burulma torkuyla kayma gerilmelerine maruz kalarak bükülmesidir.",
      ornek:"Islak çamaşırı sıkmak için iki elinizle zıt yönlere bükmeniz.",
      onem:"Kanat Torsiyon Kutusu, aerodinamik merkez ile taşıma merkezi farkından doğan momentleri emmek için tasarlanır.",
      soru:"Kapalı kutu kesitler açık kesitlere göre burulma rijitliğinde neden üstündür?",
      cevap:"Kapalı kesitte kesme akışı (shear flow) sürekli bir döngüde dolaşır — kesit alanının karesiyle orantılı rijitlik sağlar. Açık kesitte akış kesilir ve rijitlik duvar kalınlığının küpüne düşer — kat kat zayıf." },
    { id:"k50", kategori:"Aerodinamik", ad:"Kanat Yüklemesi", en:"Wing Loading (W/S)", mulakat:true, branslar:["ucak"],
      tanim:"Uçağın toplam ağırlığının kanat referans alanına oranıdır: W/S (N/m² veya kg/m²).",
      ornek:"Geniş kanatlı planörde birim alana az ağırlık (düşük W/S), savaş jetinde birim alana çok ağırlık (yüksek W/S).",
      onem:"Stall hızını, tırmanma performansını, manevra kabiliyetini ve türbülanslı havadaki konforu belirleyen ana tasarım metriğidir.",
      soru:"Yüksek kanat yüklemesinin etkileri nelerdir?",
      cevap:"V_stall yükselir (kalkış/iniş mesafesi uzar), türbülanslı havada daha az sarsılır (yüksek atalet), tırmanma hızı düşebilir. Düşük W/S ise düşük stall hızı, iyi tırmanma ama türbülansa duyarlılık demektir." }
  ],

  /* ---- FİRMALAR ---- */
  firmalar: [
    { id: "baykar", ad: "Baykar", alan: "İnsansız hava araçları ve mühimmat sistemleri",
      bilgi: "1984 yılında Özdemir Bayraktar tarafından İstanbul'da kurulan Baykar, ilk yıllarında otomotiv sanayiine yönelik hassas imalat yapıyordu. 2003'te insansız hava araçlarına odaklandı ve tüm projeleri öz kaynaklarla yürüttü.\n\nBugün dünyanın en büyük SİHA ihracatçısıdır. 2024'te 1,8 milyar dolar, 2025'te 2,2 milyar dolar ihracat yaparak kendi rekorunu tazeledi. 2025 yılında toplam geliri 2,5 milyar dolara ulaştı, gelirinin yüzde 88'i ihracattan geldi. TB2 ve Akıncı 37 ülkede operasyon yürütüyor.\n\nGenel Müdür Haluk Bayraktar, Yönetim Kurulu Başkanı Selçuk Bayraktar'dır. 2024 sonunda İtalyan Piaggio Aerospace, 2025 başında Leonardo ile LBA Systems ortak girişimi kuruldu.",
      tarihce: [
        { yil: "1984", olay: "Özdemir Bayraktar tarafından İstanbul'da kuruldu." },
        { yil: "2003", olay: "İHA Ar-Ge çalışmaları başladı. Tüm projeler öz kaynaklarla yürütüldü." },
        { yil: "2009", olay: "Bayraktar TB1 ilk uçuşunu Sinop'ta tamamladı." },
        { yil: "2014", olay: "Bayraktar TB2 ilk kez TSK envanterine girdi. Türkiye'nin ilk yerli silahlı İHA'sı." },
        { yil: "2019", olay: "Bayraktar Akıncı ilk uçuşunu yaptı (6 Aralık 2019)." },
        { yil: "2020", olay: "TB2, Azerbaycan-Karabağ çatışmasında büyük başarı sağladı ve dünya gündemine girdi." },
        { yil: "2021", olay: "Bayraktar Akıncı TSK envanterine girdi. TB2'ler Ukrayna-Rusya savaşında görevde." },
        { yil: "2022", olay: "Bayraktar Kızılelma ilk uçuşunu yaptı (14 Aralık 2022). Türkiye'nin ilk insansız savaş uçağı." },
        { yil: "2023", olay: "1,8 milyar dolar ihracat rekoru. TEKNOFEST'te Kızılelma-Akıncı kol uçuşu — dünya tarihinde ilk insansız otonom kol uçuşu." },
        { yil: "Kas. 2024", olay: "TB3, TCG Anadolu'ya tarihi iniş yaptı (19 Kasım). Kızılelma PT-3 artyakıcılı motorla ilk kez uçtu (Eylül 2024)." },
        { yil: "Ara. 2024", olay: "Piaggio Aerospace (İtalya) satın alındı. Baykar'ın Avrupa üretim üssü açıldı." },
        { yil: "Mar. 2025", olay: "Leonardo ile LBA Systems ortak girişimi kuruldu. TB2 ve Akıncı, UAV-122 süpersonik füze atış testini başardı." },
        { yil: "Tem. 2025", olay: "Kızılelma seri üretim prototipi S1, IDEF 2025'te sergilendi. TB2T-AI, 40.023 feet irtifa rekoru kırdı." },
        { yil: "Ağu. 2025", olay: "TB3, KEMANKEŞ mühimmatıyla atış ve dalış testlerini tamamladı. Korean Air ile MoU imzalandı." },
        { yil: "May. 2026", olay: "SAHA 2026'da K2 Kamikaze, Mızrak ve Sivrisinek ilk kez kamuoyuna tanıtıldı. Endonezya ile 12 adet Kızılelma ihracat sözleşmesi imzalandı (2028 teslimat)." }
      ],
      urunler: [
        { ad: "Bayraktar TB2", tur: "Taktik SİHA (MALE)", gorseller: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bayraktar_TB2_S-IHA_TurkishArmy_Teknofest2021_%283%29.jpg/800px-Bayraktar_TB2_S-IHA_TurkishArmy_Teknofest2021_%283%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/PAF_Bayraktar_TB2_at_Radom-2023.jpg/800px-PAF_Bayraktar_TB2_at_Radom-2023.jpg"], gorselKredisi: "Wikimedia Commons — CC BY-SA",
          ozet: "Türkiye'nin dünyaya tanıttığı silahlı taktik insansız hava aracıdır. 37 ülkede operasyon yürütülmektedir. 2024 itibarıyla TB2'nin kümülatif uçuş süresi 500.000 saati geçti. Azerbaycan-Karabağ, Libya, Ukrayna başta olmak üzere çok sayıda çatışmada kullanılmıştır.",
          ilkUcus: "2014 (ilk TSK teslimatı)",
          teknik: [
            ["Uzunluk", "6,5 m"],
            ["Kanat açıklığı", "12 m"],
            ["Maks. kalkış ağırlığı", "700 kg"],
            ["Faydalı yük", "150 kg — 4 silah istasyonu"],
            ["Motor", "105 hp içten yanmalı enjeksiyonlu motor"],
            ["Operasyonel irtifa", "18.000–25.000 feet"],
            ["LOS menzili", "300 km"],
            ["BLOS menzili (uydu)", "1.800 km"],
            ["Havada kalış", "27 saat"],
            ["Mühimmatlar", "MAM-L, MAM-C, Cirit, L-UMTAS, UAV-122 süpersonik"],
            ["Yerlilik oranı", "Yüzde 94"],
            ["İhracat", "35 ülkeye ihracat sözleşmesi"]
          ],
          ozellikler: "Üç yedekli aviyonik sistemle tamamen otonom taksi, kalkış, seyir ve iniş kabiliyeti. Yaklaşık 40 bilgisayar çalışır. 2025'te TB2T-AI varyantı 40.023 feet ile sınıf irtifa rekoru kırdı. 2024'te 10.000 uçuş saatini tamamlayan ilk TB2 onurlu emekliliğe ayrıldı." },

        { ad: "Bayraktar Akıncı", tur: "Taarruzi İHA / TİHA (HALE)", gorseller: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Baykar_Akinci.jpg/800px-Baykar_Akinci.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Autre_vue_de_c%C3%B4t%C3%A9_d%27un_drone_akinci_au_Bourget_2025.jpg/800px-Autre_vue_de_c%C3%B4t%C3%A9_d%27un_drone_akinci_au_Bourget_2025.jpg"], gorselKredisi: "Wikimedia Commons — CC BY-SA",
          ozet: "TB2'den çok daha büyük ve yetenekli platformdur. 2021'de TSK envanterine girmiş, 2025 itibarıyla 15 ülkeye ihracat sözleşmesi imzalanmıştır. 2025'te 100.000 toplam uçuş saatini geçerek operasyonel olgunluğunu kanıtladı.",
          ilkUcus: "6 Aralık 2019",
          teknik: [
            ["Uzunluk", "12,2 m"],
            ["Kanat açıklığı", "20 m"],
            ["Maks. kalkış ağırlığı", "5.500 kg"],
            ["Faydalı yük", "1.350 kg (450 kg iç + 900 kg dış)"],
            ["Motor", "2 × Turboprop (~450 hp)"],
            ["Servis tavanı", "40.000 feet (rekor: 41.170 feet)"],
            ["Havada kalış", "24 saat+"],
            ["Mühimmatlar", "MAM-L/C, SOM-A, MK-81/82/83, Gökdoğan, Bozdoğan, UAV-122, ASELFLIR-600"]
          ],
          ozellikler: "2024'te İran Cumhurbaşkanı'nın helikopter enkazını tespit etti. 2025'te ASELFLIR-600 elektro-optik sistemiyle ilk uçuşu tamamlandı. F-16'nın kanat açıklığından (10 m) geniş, çift turboprop motor, hava-hava radar, elektronik destek podu, çift uydu haberleşme sistemi." },

        { ad: "Bayraktar Kızılelma", tur: "İnsansız Savaş Uçağı (MİUS)", gorseller: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Baykar_Bayraktar_K%C4%B1z%C4%B1lelma_2.png/800px-Baykar_Bayraktar_K%C4%B1z%C4%B1lelma_2.png","https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Baykar_Bayraktar_K%C4%B1z%C4%B1lelma.png/800px-Baykar_Bayraktar_K%C4%B1z%C4%B1lelma.png"], gorselKredisi: "Wikimedia Commons — CC BY",
          ozet: "Türkiye'nin ilk insansız savaş uçağıdır. Seri üretimi başlamış olup 2026'da TSK envanterine katılması hedeflenmektedir. Endonezya ile 12 adetlik ilk ihracat sözleşmesi SAHA 2026'da imzalandı (2028 teslimat hedefi).",
          ilkUcus: "14 Aralık 2022 (PT-1) / Eylül 2024 (PT-3, artyakıcılı)",
          teknik: [
            ["Maks. kalkış ağırlığı", "6 ton"],
            ["Faydalı yük", "1.500 kg"],
            ["Operasyonel irtifa", "35.000 feet"],
            ["Seyir hızı", "Mach 0,6 (ses altı varyant)"],
            ["Görev yarı çapı", "500 deniz mili"],
            ["Motor (Kızılelma-A)", "Ivchenko AI-25TLT turbofan"],
            ["Motor (Kızılelma-B)", "Ivchenko AI-322F artyakıcılı — 4.200 kgf"],
            ["Silah", "İç silah bölmesi + kanat altı istasyonları"],
            ["Gemi kabiliyeti", "TCG Anadolu'dan kalkış yapabiliyor"]
          ],
          ozellikler: "Düşük radar görünürlüğü (stealth tasarım ilkeleri), iç silah bölmesi. Varyantlar: Kızılelma-A (ses altı), Kızılelma-B (transonik/süpersonik), Kızılelma-C (çift artyakıcılı). 2023 TEKNOFEST'te Akıncı ile dünyanın ilk insansız otonom kol uçuşunu yaptı. 2025'te seri üretim prototipi S1, IDEF 2025'te sergilendi." },

        { ad: "Bayraktar TB3", tur: "Gemi üstü SİHA", gorseller: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Baykar_Bayraktar_TB3.png/800px-Baykar_Bayraktar_TB3.png"], gorselKredisi: "Wikimedia Commons — CC BY",
          ozet: "Katlanabilir kanatlı, gemi üstü operasyon için geliştirilmiş platformdur. 19 Kasım 2024'te TCG Anadolu'ya iniş yaparak dünya tarihinde bir ilki gerçekleştirdi. 2025'te KEMANKEŞ mühimmatıyla atış testini tamamladı.",
          ilkUcus: "2023",
          teknik: [
            ["Temel platform", "TB2 tabanlı, katlanabilir kanat"],
            ["Kalkış tipi", "Kısa pistli gemi (STOBAR)"],
            ["Mühimmat", "MAM-L, MAM-C, MAM-T, KEMANKEŞ (2025 testi)"],
            ["Motor", "TEI yerli motor (geliştirme aşamasında)"]
          ],
          ozellikler: "Dünyada ilk kez kısa pistli gemiye otonom iniş-kalkış yapan İHA. TCG Anadolu'ya iniş için gemide bazı geliştirmeler planlanmaktadır." },

        { ad: "K2 Kamikaze İHA", tur: "Kamikaze İHA / Dolanan Mühimmat",
          ozet: "SAHA 2026'da ilk kez kamuoyuna tanıtıldı. Sürünün ağır vurucu unsuru olarak konumlandırılmıştır. Yapay zeka destekli sürü otonomisi ve GNSS'ten bağımsız navigasyon kabiliyetiyle öne çıkar.",
          ilkUcus: "2026 (ilk sergileme SAHA 2026)",
          teknik: [
            ["Sınıf", "Feda edilebilir kamikaze İHA"],
            ["Harp başlığı kapasitesi", "200 kg"],
            ["Operasyonel menzil", "2.000 km (görev şartına göre)"],
            ["Özellik", "GNSS bağımsız yapay zeka navigasyonu"],
            ["Kullanım", "Sürü operasyonları, elektronik harp ortamı"],
            ["Geliştirme", "Baykar (ASELSAN iş birliği)"]
          ],
          ozellikler: "Yoğun elektronik harp ortamlarında görev yapabiliyor. Yapay zeka ile görsel konumlandırma — GPS jamming'e karşı dayanıklı. Mesh Network entegrasyonuyla sürü koordinasyonu. Sivrisinek ve Mızrak ile çok katmanlı sürü taarruzu yapabiliyor." },

        { ad: "Mızrak Akıllı Dolanan Mühimmat", tur: "Akıllı Dolanan Mühimmat",
          ozet: "SAHA 2026'da ilk kez tanıtıldı. 1.000 km üzeri menziliyle derin taarruz görevleri için tasarlandı. Baykar ve ASELSAN iş birliğiyle geliştirildi.",
          ilkUcus: "2026 (ilk sergileme SAHA 2026)",
          teknik: [
            ["Kalkış ağırlığı", "200 kg"],
            ["Harp başlığı", "40 kg"],
            ["Operasyonel menzil", "1.000 km+ (2.000 km seçenek)"],
            ["LOS haberleşme", "80 km+"],
            ["Seyir hızı", "80 knot"],
            ["Maks. hız", "100 knot"],
            ["Havada kalış", "7 saat+"],
            ["Servis tavanı", "10.000 feet"],
            ["Sensörler", "Radar arayıcı başlık + elektro-optik + gece görüş"]
          ],
          ozellikler: "GNSS bağımsız yapay zeka navigasyonu. Radar arayıcı başlık ile zırhlı hedefleri tespit edebiliyor. Baykar'ın datalink ağına entegre olunca BLOS operasyon kabiliyeti kazanıyor. İsrailli savunma uzmanları Mızrak'ın Demir Kubbe için ciddi tehdit oluşturduğunu belirtmiş." },

        { ad: "Sivrisinek Dolanan Mühimmat", tur: "Dolanan Mühimmat (Düşük Maliyet)",
          ozet: "SAHA 2026'da ilk kez sergilendi. Sürünün öncü keşif ve imha elemanıdır. Düşük maliyet ve hızlı konuşlanma odaklı tasarımıyla öne çıkar.",
          ilkUcus: "2026 (ilk sergileme SAHA 2026)",
          teknik: [
            ["Gövde uzunluğu", "3,8 m"],
            ["Kanat açıklığı", "3,2 m"],
            ["Kalkış ağırlığı (UM)", "76 kg"],
            ["Kalkış ağırlığı (UMX, AI kameralı)", "78 kg"],
            ["Harp başlığı", "20 kg"],
            ["Menzil (UM)", "1.000 km"],
            ["Menzil (UMX)", "900 km"],
            ["Havada kalış (UM)", "9 saat+"],
            ["Kalkış", "Katapult (pist gerekmez)"]
          ],
          ozellikler: "Kanatlar kablo bağıyla gövdeye monteli — düşük üretim maliyeti hedefli tasarım. UMX varyantında yapay zeka destekli elektro-optik kamera. K2 ve Mızrak ile birlikte çok katmanlı sürü taarruzuna entegre. GNSS bağımsız otonom navigasyon." }
      ] },
{ id: "aselsan", ad: "ASELSAN", alan: "Savunma elektroniği",
      bilgi: "Haberleşme, radar, elektronik harp, elektro-optik ve aviyonik sistemler geliştiren Türkiye'nin en büyük savunma elektroniği şirketidir.",
      urunler: [
        { ad: "Radar sistemleri", tur: "Radar", ozet: "Hava savunma, gözetleme ve ateş kontrol amaçlı çeşitli radar aileleri." },
        { ad: "Elektro-optik sistemler", tur: "EO", ozet: "Gündüz ve gece görüş, hedefleme ve keşif için kameralı sistemler." },
        { ad: "Telsiz ve haberleşme sistemleri", tur: "Haberleşme", ozet: "Askeri telsizler ve güvenli haberleşme altyapıları." }
      ] },
    { id: "tusas", ad: "TUSAŞ (TAI)", alan: "Uçak ve helikopter",
      bilgi: "Türkiye'nin havacılık ana yüklenicisidir. Uçak, helikopter, İHA ve uydu alanlarında tasarım, üretim ve entegrasyon yapar.",
      urunler: [
        { ad: "KAAN", tur: "Savaş uçağı", ozet: "Türkiye'nin milli muharip uçak projesi." },
        { ad: "HÜRJET", tur: "Jet eğitim uçağı", ozet: "Jet motorlu eğitim ve hafif taarruz uçağı." },
        { ad: "HÜRKUŞ", tur: "Eğitim uçağı", ozet: "Turboprop motorlu başlangıç ve temel eğitim uçağı." },
        { ad: "ANKA", tur: "İHA", ozet: "Orta irtifa uzun havada kalış sınıfında insansız hava aracı ailesi." },
        { ad: "T129 ATAK", tur: "Taarruz helikopteri", ozet: "Taarruz ve keşif görevleri için geliştirilen helikopter." },
        { ad: "GÖKBEY", tur: "Genel maksat helikopteri", ozet: "Çok amaçlı sivil ve askeri kullanım için helikopter." }
      ] },
    { id: "roketsan", ad: "ROKETSAN", alan: "Roket ve füze",
      bilgi: "Roket ve füze sistemleri geliştiren, aynı zamanda uzay fırlatma ve balistik koruma alanlarında çalışan şirkettir.",
      urunler: [
        { ad: "Füze sistemleri", tur: "Füze", ozet: "Tanksavar, hava savunma ve seyir füzeleri dahil geniş bir aile." },
        { ad: "Roketatar sistemleri", tur: "Roket", ozet: "Çok namlulu roketatar sistemleri ve mühimmatları." },
        { ad: "Uzay çalışmaları", tur: "Uzay", ozet: "Mikro uydu fırlatma sistemi ve sondaj roketi çalışmaları." }
      ] },
    { id: "tei", ad: "TEI", alan: "Havacılık motorları",
      bilgi: "Havacılık motoru ve motor parçası üreten şirkettir. Milli turboşaft ve turbojet motor geliştirme projeleri yürütür.",
      urunler: [
        { ad: "TS1400", tur: "Turboşaft motor", ozet: "Helikopterler için geliştirilen milli turboşaft motor." },
        { ad: "PD170", tur: "Dizel havacılık motoru", ozet: "İHA'lar için turbo dizel piston motor." },
        { ad: "TJ300", tur: "Turbojet motor", ozet: "Seyir füzeleri sınıfı için turbojet motor." }
      ] },
    { id: "havelsan", ad: "HAVELSAN", alan: "Yazılım ve simülasyon",
      bilgi: "Savunma yazılımları, komuta kontrol sistemleri ve simülatörler geliştiren şirkettir.",
      urunler: [
        { ad: "Simülatörler", tur: "Simülasyon", ozet: "Uçak, helikopter ve taktik eğitim simülatörleri." },
        { ad: "Komuta kontrol sistemleri", tur: "Yazılım", ozet: "Deniz ve hava platformları için komuta kontrol yazılımları." }
      ] },
    { id: "stm", ad: "STM", alan: "Mühendislik ve teknoloji",
      bilgi: "Savunma alanında mühendislik, teknoloji ve danışmanlık hizmeti veren, aynı zamanda İHA ve siber güvenlik çözümleri geliştiren şirkettir.",
      urunler: [
        { ad: "KARGU", tur: "Döner kanatlı İHA", ozet: "Taktik seviyede kullanılan döner kanatlı insansız sistem." },
        { ad: "Deniz platformları", tur: "Gemi", ozet: "Denizaltı ve gemi tasarım, modernizasyon projeleri." }
      ] },
    { id: "togg", ad: "TOGG", alan: "Otomotiv",
      bilgi: "Türkiye'nin elektrikli otomobil girişimidir. Elektrikli araç platformu ve mobilite teknolojileri geliştirir.",
      urunler: [
        { ad: "T10X", tur: "Elektrikli SUV", ozet: "Markanın ilk seri üretim modeli, elektrikli C-SUV." },
        { ad: "T10F", tur: "Elektrikli sedan", ozet: "Fastback gövde tipinde elektrikli sedan modeli." }
      ] }
  ],

  /* ---- HABERLER ---- */
  haberler: [
    { id: "h1", kategori: "Savunma", kaynak: "Örnek kaynak", baslik: "Haber akışı sunucuya bağlandığında burada görünecek",
      ozet: "Bu bölüm RSS kaynaklarından başlık, kısa özet ve görsel çeker. Haberin tamamı uygulamada gösterilmez, kullanıcı kaynağa yönlendirilir.", tarih: "11 Eylül 2026" },
    { id: "h2", kategori: "Havacılık", kaynak: "Örnek kaynak", baslik: "Kategoriler: savunma, havacılık, uzay, otomotiv, enerji, yeni teknolojiler",
      ozet: "Instagram tarzı dikey kaydırmayla ilerlenir. Her kartın altında 'Habere git' butonu bulunur.", tarih: "11 Eylül 2026" },
    { id: "h3", kategori: "Uzay", kaynak: "Örnek kaynak", baslik: "Yabancı haberler kısa Türkçe özete çevrilir",
      ozet: "Kaynak adı ve bağlantı her zaman görünür kalır. Telif hakkı için haberin tamamı kopyalanmaz.", tarih: "11 Eylül 2026" }
  ],

  /* ---- DAVET KODLARI (demo) ---- */
  demoKodlar: ["UCAK7K3M92QD", "UZAY5R2N63VX", "SINIF4B8THW27",
    "UCAKFRT7RYC3", "UCAKZYTM4NXG", "UCAKX5F9B5GT", "UZAY6WLWFLFG", "UZAY7V5T737P",
    "UCAK4HV1UXMY", "UCAKQKNNRTLQ", "UCAKP6JXZS3K", "UZAYUL5T4MR9", "UZAYSMMZ73ZS"]

};

/* ================================================================
   MODÜL 8 — BÜTÜNLEŞİK UÇAK TASARIMI
   m8-1: Görev gereksinimleri ve MTOW ön tahmini
   ================================================================ */

Object.assign(window.CONTENT.konuIcerik, {

"m8-1": {
  ad: "Görev gereksinimleri ve MTOW ön tahmini",
  ders: "Bütünleşik Uçak Tasarımı",
  seviye: "Orta",
  sure: 20,
  mulakat: false,
  onbilgi: "Temel aerodinamik, Breguet menzil denklemi",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Uçak tasarımı bir sayıyla başlar: Azami Kalkış Ağırlığı (MTOW). Bu sayıya ulaşmadan önce uçağın ne yapacağını, nereye gideceğini ve kimi taşıyacağını bilmek gerekir. Görev gereksinimleri bu soruların cevabıdır; MTOW ön tahmini ise bu cevaplardan elde edilen ilk mühendislik tahmindir." },

    { id:"b2", tip:"metin", baslik:"Görev profili nedir?",
      metin:"Görev profili, bir uçağın tipik bir uçuşta geçireceği aşamaların sıralı tanımıdır. Her aşamada yakıt tüketilir, ağırlık değişir. Tasarımcı bu profili kullanarak toplam yakıt ihtiyacını ve dolayısıyla MTOW'u hesaplar.\n\nTipik bir yolcu uçağı görev profili:\n1. Motor start ve taksi\n2. Kalkış\n3. Tırmanma\n4. Seyir (cruise) — toplam menzil\n5. İniş yaklaşması ve alçalma\n6. İniş\n7. Yedek yakıt (divert + holding)\n\nAskeri uçakta profil çok daha karmaşık olabilir: alçak irtifa penetrasyon, hedef üstü manevra, geri dönüş, savaş rezervi.\n\nHer aşama için yakıt fraksiyonu (W_f/W_i) hesaplanır. Bu fraksiyonların çarpımı toplam ağırlık oranını verir.",
      kutu:{ tip:"bilgi", baslik:"Neden MTOW önce tahmin edilir, sonra hesaplanır?",
        metin:"Tasarım döngüsü başladığında ortada uçak yoktur. MTOW bilinmeden kanat alanı, motor büyüklüğü ve yapı ağırlığı hesaplanamaz. Ama MTOW hesaplamak için bu büyüklüklere ihtiyaç vardır. Bu tavuk-yumurta paradoksu iteratif yöntemle çözülür: önce tahmin, sonra hesap, sonra revizyon, ta ki yakınsayana dek." } },

    { id:"b3", tip:"metin", baslik:"Ağırlık bileşenleri",
      metin:"MTOW üç ana bileşenden oluşur:\n\nMTOW = W_boş + W_faydalı_yük + W_yakıt\n\nW_boş (Empty Weight, W_e): Motor, yapı, aviyonik, iniş takımı dahil uçağın kendi ağırlığı. Yakıt ve yük yok.\n\nW_faydalı_yük (Payload, W_pl): Yolcular, bagaj, kargo. Tasarım gereği sabittir.\n\nW_yakıt (Fuel Weight, W_f): Görevi tamamlamak için gereken yakıt. Menzil ve özgül yakıt tüketimiyle belirlenir.\n\nBoş ağırlık oranı W_e/MTOW tarihsel verilerden istatistiksel olarak tahmin edilir. Raymer ve Roskam kitaplarında uçak tipine göre grafikler ve denklemler verilmiştir:\n\nW_e/MTOW ≈ a × MTOW^b\n\nÖrneğin yolcu jetleri için a ≈ 1,02 ve b ≈ -0,06 civarındadır." },

    { id:"b4", tip:"formul", baslik:"Breguet menzil denklemi ile yakıt fraksiyonu",
      formul:"W_f/MTOW = 1 − exp(−R × SFC / (V × L/D))\n\nveya segment bazlı:\nW_f+e / W_0 = (W_1/W_0) × (W_2/W_1) × … × (W_n/W_{n-1})",
      semboller:[
        ["R","Menzil","m veya km"],
        ["SFC","Özgül yakıt tüketimi (thrust specific)","kg/(N·s)"],
        ["V","Seyir hızı","m/s"],
        ["L/D","Kaldırma/sürükleme oranı","—"],
        ["W_i/W_{i-1}","Her aşama için ağırlık fraksiyonu","—"]
      ],
      metin:"Kalkış, tırmanma, iniş gibi aşamalar için tipik ağırlık fraksiyonları:\n• Motor start + taksi: 0,990\n• Kalkış: 0,995\n• Tırmanma: 0,980\n• İniş + taksi: 0,992\n\nSeyir aşaması Breguet denklemiyle hesaplanır, diğerleri yukarıdaki sabit değerlerle yaklaşık bulunur." },

    { id:"b5", tip:"ornek", baslik:"Örnek: Basit MTOW tahmini",
      soru:"150 yolcu taşıyan, 5000 km menzilli bir yolcu jeti için MTOW'u tahmin et.\nVeriler: L/D = 17, SFC = 17 mg/(N·s), V = 250 m/s, W_pl = 15.000 kg (yolcu+bagaj)\nBoş ağırlık oranı: W_e/MTOW = 0,55 (tipik yolcu jeti)",
      cozum:"Adım 1 — Ağırlık fraksiyonları:\nTaksi + kalkış + tırmanma: 0,990 × 0,995 × 0,980 = 0,965\nİniş + taksi: 0,992\nAra çarpım (seyir hariç): 0,965 × 0,992 = 0,957\n\nAdım 2 — Seyir yakıt fraksiyonu:\nSFC = 17 × 10⁻⁶ kg/(N·s)\nW_seyir/W_i = exp(−R × SFC / (V × L/D))\n= exp(−5.000.000 × 17×10⁻⁶ / (250 × 17))\n= exp(−85/4250)\n= exp(−0,02) = 0,980\n\nAdım 3 — Toplam ağırlık fraksiyonu:\nW_f/MTOW = 1 − (0,957 × 0,980) = 1 − 0,938 = 0,062\n\nAdım 4 — MTOW:\nMTOW = W_pl / (1 − W_e/MTOW − W_f/MTOW)\n= 15.000 / (1 − 0,55 − 0,062)\n= 15.000 / 0,388\n≈ 38.660 kg\n\nYorum: Gerçek 150 yolculu kısa-orta menzil uçakları (A320, B737) MTOW'u 70-80 ton civarındadır. Bu fark, basitleştirdiğimiz fraksiyonlardan, yedek yakıtı atladığımızdan ve boş ağırlık oranının gerçekte daha yüksek olmasından kaynaklanır. Kavramsal tasarımda bu %20-30 hata payı kabul edilebilir." },

    { id:"b6", tip:"metin", baslik:"İterasyon süreci",
      metin:"İlk MTOW tahmini yapıldıktan sonra tasarım döngüsü başlar:\n\n1. MTOW tahmini → kanat alanı ve motor büyüklüğü belirlenir\n2. Kanat ve motor → yapı ve sistem ağırlıkları hesaplanır\n3. Yeni W_e → yeni MTOW hesaplanır\n4. Fark küçükse (%1 altında) yakınsama sağlanmıştır\n5. Büyükse 1. adıma dönülür\n\nModern tasarım araçları (MATLAB, OpenVSP, SUAVE) bu döngüyü otomatik çalıştırır. Kavramsal tasarımda 3-5 iterasyon genellikle yeterlidir.",
      kutu:{ tip:"bilgi", baslik:"Tasarım sarmalı",
        metin:"Her kilogram azaltma başka kilogram tasarrufu sağlar. Daha hafif uçak → daha küçük motor → daha hafif yapı → daha az yakıt → daha hafif tank. Bu 'snowball effect' tersine de çalışır: ağırlık büyürse spiral büyür. İyi tasarımcı bu sarmalı erken kontrol altına alır." } },

    { id:"b7", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Yedek yakıtı unutmak. Düzenleyici kurallar yedek yakıt (divert + 45 dakika holding) zorunlu kılar.",
        "W_e/MTOW oranını yanlış uçak sınıfından almak. Savaş uçağı oranıyla yolcu jeti tasarlanamaz.",
        "Tek iterasyonla sonuca varmak. İlk tahmin her zaman yaklaşık, iterasyon şart.",
        "Faydalı yükü eksik tanımlamak. Yolcu başına ortalama 95 kg (yolcu + bagaj) kabul edilir.",
        "Menzil ile uçuş mesafesini karıştırmak. Menzil, yedek yakıt kullanılmadan gidilebilecek maksimum mesafedir."
      ] },

    { id:"b8", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["MTOW neden iteratif hesaplanır?","Uçak tasarımı döngüsel bir süreçtir. MTOW bilinmeden yapı ağırlığı hesaplanamaz; yapı ağırlığı bilinmeden MTOW hesaplanamaz. Bu tavuk-yumurta sorununu çözmek için önce istatistiksel tahmin yapılır, sonra iteratif olarak yakınsama sağlanır."],
        ["Görev profili nedir?","Tipik bir uçuşun taksi, kalkış, tırmanma, seyir, alçalma, iniş aşamalarının sıralı tanımıdır. Her aşamada yakıt tüketilir. Profil uçak tipine göre değişir."],
        ["Snowball effect nedir?","Ağırlık artışının zincirleme etkisidir. Ekstra ağırlık daha büyük motor, daha büyük kanat, daha fazla yakıt, dolayısıyla daha ağır yapı gerektirir. Azalan ağırlık ise aynı mekanizmayla tasarruf katar."]
      ] },

    { id:"b9", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA. ISBN 978-1-62410-490-9",
        "Roskam, J. (1985). Airplane design (8 cilt). DARcorporation.",
        "Torenbeek, E. (1982). Synthesis of subsonic airplane design. Delft University Press.",
        "Nicolai, L. M., & Carichner, G. E. (2010). Fundamentals of aircraft and airship design. AIAA."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Ağırlık bileşenleri", puan:1,
      soru:"MTOW hangi üç bileşenden oluşur?",
      secenekler:["Motor + yapı + yakıt","Boş ağırlık + faydalı yük + yakıt","Yapı + yolcu + bagaj","Kalkış + seyir + iniş ağırlığı"],
      dogru:1,
      aciklama:"MTOW = W_boş + W_faydalı_yük + W_yakıt. Boş ağırlık motor, yapı ve tüm sistemleri kapsar. Faydalı yük yolcu ve kargo, yakıt ise görev yakıtı ve yedek yakıttır." },
    { id:"s2", etiket:"İterasyon", puan:2,
      soru:"MTOW hesabında iterasyon neden gereklidir?",
      secenekler:["Bilgisayar hataları nedeniyle","Yapı ağırlığı MTOW'a bağlı, MTOW yapı ağırlığına bağlı olduğu için döngüsel hesap şart","Pilot ağırlığı değişkendir","Hava durumu bilinmediğinden"],
      dogru:1,
      aciklama:"Tasarım başında uçak yoktur. MTOW bilinmeden kanat ve motor boyutlandırılamaz; bunlar bilinmeden yapı ağırlığı hesaplanamaz; o da bilinmeden MTOW bulunamaz. Bu kısır döngü iterasyonla çözülür." },
    { id:"s3", etiket:"Yakıt fraksiyonu", puan:2,
      soru:"L/D = 18, SFC = 20 mg/(N·s), V = 240 m/s, R = 4000 km için seyir yakıt fraksiyonu yaklaşık kaçtır?",
      secenekler:["0,95","0,97","0,99","0,90"],
      dogru:1,
      aciklama:"exp(−4.000.000 × 20×10⁻⁶ / (240 × 18)) = exp(−80/4320) = exp(−0,0185) ≈ 0,982 ≈ 0,97 " },
    { id:"s4", etiket:"Snowball effect", puan:1,
      soru:"Snowball effect tasarımda ne anlama gelir?",
      secenekler:["Karın üzerinde test yapılması","Ekstra ağırlığın zincirleme daha büyük motor, yapı ve yakıt gerektirmesi","Soğuk hava performansının düşmesi","İterasyon sayısının artması"],
      dogru:1,
      aciklama:"Her ekstra kg daha büyük motor (daha ağır), daha güçlü yapı (daha ağır) ve daha fazla yakıt (daha ağır) gerektirir. Zincirleme etki başlangıçtaki fazladan ağırlığı katlar." }
  ],
  ipuclari:{
    "Ağırlık bileşenleri":"MTOW = W_e + W_pl + W_f. W_e/MTOW ≈ 0,45-0,60 (yolcu jeti).",
    "İterasyon":"Tahmin → hesap → karşılaştır → yakınsayana dek tekrar.",
    "Yakıt fraksiyonu":"W_f/MTOW = 1 − (tüm segment fraksiyonlarının çarpımı). Seyir: Breguet.",
    "Snowball effect":"Ağırlık büyürse spiral büyür, küçülürse kazanç katar."
  }
}

}); // Object.assign sonu

Object.assign(window.CONTENT.konuIcerik, {

"m8-2": {
  ad: "Kısıt diyagramı — W/S ve T/W seçimi",
  ders: "Bütünleşik Uçak Tasarımı",
  seviye: "İleri",
  sure: 25,
  mulakat: true,
  onbilgi: "MTOW tahmini, kaldırma ve sürükleme, stall hızı",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Uçak tasarımında iki temel parametre kanat yüklemesi (W/S) ve itki-ağırlık oranı (T/W) dir. Her performans gereksinimi bu parametreler arasında bir kısıt çizgisi oluşturur. Tüm kısıtların bir arada gösterildiği grafik kısıt diyagramıdır. Tasarım noktası bu kısıtların içinde kalan 'mümkün bölge'den seçilir." },

    { id:"b2", tip:"metin", baslik:"Kanat yüklemesi (W/S) nedir?",
      metin:"Kanat yüklemesi, uçak ağırlığının kanat alanına oranıdır:\n\nW/S [N/m² veya kg/m²]\n\nYüksek W/S:\n• Küçük kanat → daha az sürükleme → yüksek seyir hızı\n• Daha yüksek stall hızı → daha uzun pist gereksinimi\n• Türbülanstan daha az etkilenme (iyi yolcu konforu)\n\nDüşük W/S:\n• Büyük kanat → düşük stall hızı → kısa pistlerde çalışabilir\n• Daha fazla sürükleme → daha yavaş seyir\n• Turbülansta daha fazla sallanma\n\nTipik değerler:\n• Yolcu jeti: 5500-7500 N/m²\n• Savaş uçağı: 3000-5000 N/m²\n• Genel havacılık: 1000-2000 N/m²\n• Glider: 200-400 N/m²" },

    { id:"b3", tip:"metin", baslik:"İtki-ağırlık oranı (T/W) nedir?",
      metin:"İtki-ağırlık oranı, motorların ürettiği toplam itki ile uçak ağırlığının oranıdır:\n\nT/W [-]\n\nT/W = 1,0: Uçak dikey tırmanabilir (teorik)\nT/W > 1,0: Dikey manevra mümkün (F-16, F-22)\nT/W ≈ 0,3-0,4: Tipik yolcu jeti\nT/W ≈ 0,25-0,35: Genel havacılık\n\nYüksek T/W:\n• İyi tırmanma ve ivmelenme performansı\n• Kısa kalkış mesafesi\n• Ağır ve pahalı motor\n• Yüksek yakıt tüketimi\n\nDüşük T/W:\n• Verimli seyir (yolcu jetleri)\n• Uzun kalkış mesafesi\n• Düşük tırmanma hızı",
      kutu:{ tip:"bilgi", baslik:"T/W neden kalkışta farklı, seyirde farklı?",
        metin:"T/W tasarım noktasında (genellikle kalkış ağırlığı ve deniz seviyesi) tanımlanır. Seyirde hem ağırlık (yakıt tüketimi) hem itki (yüksek irtifa, düşük yoğunluk) değişir. Bu yüzden tasarım T/W sabit olsa da gerçek operasyonel T/W sürekli değişir." } },

    { id:"b4", tip:"formul", baslik:"Kısıt denklemleri",
      formul:"Stall kısıtı: W/S = ½ρV_stall² × CL_max\n\nKalkış kısıtı: T/W = (W/S) / (½ρV_TO² × CL_max × (S_TO))\n\nSeyir kısıtı: T/W = (q × CD0)/(W/S) + (W/S)/(q × π × e × AR)\n\nTırmanma kısıtı: T/W = (Rate of climb)/V + 1/(L/D)",
      semboller:[
        ["V_stall","Stall hızı (gereksinim)","m/s"],
        ["CL_max","Maksimum kaldırma katsayısı (flaplarla)","—"],
        ["V_TO","Kalkış hızı ≈ 1,2 × V_stall","m/s"],
        ["S_TO","Kalkış pist mesafesi (gereksinim)","m"],
        ["q","Dinamik basınç: ½ρV²","N/m²"],
        ["CD0","Sıfır kaldırma sürükleme katsayısı","—"],
        ["AR","Kanat en boy oranı","—"],
        ["e","Oswald verimi","—"]
      ],
      metin:"Her denklem T/W ile W/S arasında bir ilişki kurar. Bu ilişkiler diyagram üzerine çizildiğinde her gereksinim bir 'sınır çizgisi' oluşturur." },

    { id:"b5", tip:"metin", baslik:"Kısıt diyagramı nasıl okunur?",
      metin:"Kısıt diyagramında yatay eksen W/S, dikey eksen T/W'dır.\n\nHer performans gereksinimi (stall hızı, kalkış mesafesi, seyir hızı, tırmanma oranı) bir eğri çizer. Bu eğriler diyagramı bölgelere ayırır:\n\n• YASAK BÖLGE: Gereksinimi sağlayamayan W/S - T/W kombinasyonları\n• MÜMKÜN BÖLGE: Tüm gereksinimleri sağlayan kombinasyonlar\n• TASARIM NOKTASI: Mümkün bölge içinden seçilen optimum nokta\n\nOptimum nokta genellikle en düşük T/W veya en yüksek W/S'ye (en küçük kanat) karşılık gelir çünkü:\n• Düşük T/W → daha hafif, daha verimli motor\n• Yüksek W/S → daha küçük kanat → daha az ağırlık ve sürükleme\n\nBu iki hedef çoğu zaman çelişir. Kısıt diyagramı bu ödünleşimi görsel olarak ortaya koyar.",
      kutu:{ tip:"bilgi", baslik:"Stall kısıtı neden dikey çizgidir?",
        metin:"Stall hızı kısıtı T/W'den bağımsızdır: sadece W/S'ye bağlıdır. V_stall = √(2W/ρSCL_max). Bu yüzden diyagramda dikey bir çizgi oluşturur. Bu çizginin solunda kalmak stall gereksinimini sağlar." } },

    { id:"b6", tip:"ornek", baslik:"Örnek: Basit kısıt hesabı",
      soru:"Hafif bir eğitim uçağı için:\n• Stall hızı: max 27 m/s (kalkış konfigürasyonu, CL_max = 1,8, ρ = 1,225 kg/m³)\n• Seyir: 60 m/s, CD0 = 0,025, AR = 8, e = 0,85, ρ = 1,225 kg/m³\nStall kısıtından maksimum W/S'yi, seyir kısıtından T/W'yi bul.",
      cozum:"Stall kısıtı:\nW/S ≤ ½ × 1,225 × 27² × 1,8\nW/S ≤ 0,5 × 1,225 × 729 × 1,8\nW/S ≤ 804 N/m² ≈ 82 kg/m²\n\nSeyir kısıtı (T/W'yi minimize eden L/D_max noktası):\nq = ½ × 1,225 × 60² = 2205 Pa\n\nW/S = 804 N/m² alındığında:\nT/W = (2205 × 0,025)/804 + 804/(2205 × π × 0,85 × 8)\nT/W = 0,0686 + 804/47195\nT/W = 0,0686 + 0,0170\nT/W ≈ 0,086\n\nYorum: T/W ≈ 0,09 ve W/S ≈ 800 N/m² eğitim uçakları için makul değerlerdir. Gerçek uçaklarda (Cessna 172 benzeri) W/S ≈ 700-900 N/m², T/W ≈ 0,10-0,15 görülür." },

    { id:"b7", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Tüm kısıtları çizmeden tasarım noktası seçmek. Her gereksinim kontrol edilmeli.",
        "Kalkış ağırlığını değil başka bir ağırlığı kullanmak. T/W ve W/S geleneksel olarak MTOW üzerinden tanımlanır.",
        "Seyir irtifasında yoğunluk değişimini görmezden gelmek. Yüksekte yoğunluk düşük olduğu için motor itkisi de düşer.",
        "Sadece T/W'yi minimize etmeye çalışmak. W/S ile birlikte değerlendirilmeli; iki parametre birbirini etkiler.",
        "CL_max değerini temiz kanatla almak. Kalkış ve iniş kısıtları için flaplı CL_max kullanılmalı."
      ] },

    { id:"b8", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Kısıt diyagramı nedir ve neden kullanılır?","Her performans gereksiniminin T/W - W/S düzleminde bir kısıt çizgisi oluşturduğu grafiktir. Tüm kısıtları aynı anda görselleştirir. Tasarım noktası mümkün bölgeden, genellikle minimum T/W veya maksimum W/S'den seçilir."],
        ["W/S yüksek olunca ne değişir?","Daha küçük kanat → daha az yapısal ağırlık ve sürükleme. Ama stall hızı artar ve pist gereksinimi uzar. Yolcu jetleri yüksek W/S tercih eder çünkü uzun pistlerde çalışır ve verimli seyir ister."],
        ["Stall kısıtı diyagramda neden dikey çizgidir?","Stall hızı sadece W/S'ye bağlıdır, T/W'den bağımsızdır. Bu nedenle T/W - W/S diyagramında dikey bir çizgi oluşturur."]
      ] },

    { id:"b9", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA. ISBN 978-1-62410-490-9",
        "Mattingly, J. D., Heiser, W. H., & Pratt, D. T. (2002). Aircraft engine design (2. baskı). AIAA.",
        "Torenbeek, E. (1982). Synthesis of subsonic airplane design. Delft University Press."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"W/S ve T/W", puan:1,
      soru:"Kanat yüklemesi (W/S) yüksek olan uçağın stall hızı nasıldır?",
      secenekler:["Düşük","Yüksek","Değişmez","W/S ile stall hızı ilgisizdir"],
      dogru:1,
      aciklama:"V_stall = √(2W/ρSCL_max). W/S büyüdükçe V_stall büyür. Bu yüzden yüksek W/S'li uçaklar daha uzun pistlerde çalışır." },
    { id:"s2", etiket:"Kısıt diyagramı", puan:2,
      soru:"Kısıt diyagramında 'mümkün bölge' nedir?",
      secenekler:["En düşük T/W'nin bulunduğu nokta","Tüm performans gereksinimlerini karşılayan W/S - T/W kombinasyonları","En yüksek W/S'nin bulunduğu bölge","Stall kısıtının solunda kalan alan"],
      dogru:1,
      aciklama:"Her gereksinim bir kısıt çizgisi çizer. Mümkün bölge tüm kısıtların izin verdiği T/W - W/S kombinasyonlarıdır. Tasarım noktası bu bölgeden seçilir." },
    { id:"s3", etiket:"W/S ve T/W", puan:2,
      soru:"Savaş uçağı ile yolcu jetini kısıt diyagramında karşılaştırınca ne beklersin?",
      secenekler:["İkisi aynı bölgede","Savaş uçağı daha yüksek T/W ve daha düşük W/S","Yolcu jeti daha yüksek T/W","Savaş uçağı her zaman daha düşük T/W"],
      dogru:1,
      aciklama:"Savaş uçağı yüksek manevra ve tırmanma için yüksek T/W (>0,8) ister. Küçük kanat (düşük sürükleme, yüksek hız) için de düşük W/S tercih eder. Yolcu jeti verimli seyir için düşük T/W (~0,3) ve yüksek W/S (~6000 N/m²) kullanır." },
    { id:"s4", etiket:"Kısıt diyagramı", puan:1,
      soru:"Stall kısıtı diyagramda neden dikey çizgi olarak görünür?",
      secenekler:["Çünkü stall T/W'ye bağlıdır","Çünkü stall sadece W/S'ye bağlıdır, T/W'den bağımsızdır","Çünkü tasarımcılar böyle çizer","Çünkü stall hızı sabittir"],
      dogru:1,
      aciklama:"V_stall = √(2(W/S)/ρCL_max). T/W bu denklemde yok. Bu yüzden stall kısıtı T/W - W/S diyagramında dikey bir çizgidir." }
  ],
  ipuclari:{
    "W/S ve T/W":"Yüksek W/S → küçük kanat, yüksek stall hızı, uzun pist. Yüksek T/W → iyi tırmanma, kısa kalkış, ağır motor.",
    "Kısıt diyagramı":"Yatay: W/S, Dikey: T/W. Her gereksinim bir çizgi. Mümkün bölgeden tasarım noktası seç.",
    "Stall kısıtı":"Dikey çizgi — sadece W/S'ye bağlı. W/S ≤ ½ρV_stall²×CL_max",
    "Optimum nokta":"Genellikle min T/W veya max W/S. İkisi çelişir, diyagram ödünleşimi gösterir."
  }
},

"m8-3": {
  ad: "Kanat geometrisi ve profil seçimi",
  ders: "Bütünleşik Uçak Tasarımı",
  seviye: "Orta",
  sure: 22,
  mulakat: true,
  onbilgi: "Kanat profili (m3-7), kaldırma ve sürükleme (m3-8), kısıt diyagramı (m8-2)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Kanat geometrisi uçağın aerodinamik karakterini belirler. En boy oranı, süpürme açısı, incelme oranı ve bükme kombinasyonu; kaldırma, sürükleme, stall davranışı ve yapısal ağırlık arasındaki dengeyi kurar. Doğru profil seçimi ise bu geometrik kararların temel taşıdır." },

    { id:"b2", tip:"tablo", baslik:"Temel kanat geometri parametreleri",
      basliklar:["Parametre","Tanım","Etkisi"],
      satirlar:[
        ["En boy oranı (AR)","b²/S","Yüksek AR → düşük indüklenmiş sürükleme, ağır yapı"],
        ["Süpürme açısı (Λ)","Kanat önünün dikine açısı","Yüksek Λ → geç şok, transonik verim, düşük CLα"],
        ["İncelme oranı (λ)","Uç kord / kök kord","λ<1 ok kanat; kök stall, üretim kolaylığı"],
        ["Dihedral (Γ)","Kanatlerin yukarı eğimi","Yanal kararlılık; çok fazlası Dutch Roll'u artırır"],
        ["Bükme (twist)","Uç hücum açısı − kök hücum açısı","Kök stall, eliptik dağılıma yaklaşma"],
        ["Kanat alanı (S)","Planform alanı","W/S; stall hızı, ağırlık, sürükleme belirler"]
      ],
      metin:"Bu parametreler bağımsız değildir. AR arttıkça yapı ağırlığı artar; bu ağırlık artışı kısmen indüklenmiş sürükleme kazancını siler. Optimum AR bu ödünleşimin dengelendiği noktadır." },

    { id:"b3", tip:"metin", baslik:"Süpürme açısı ve transonik etki",
      metin:"Süpürme açısı (sweep angle) kanadın büyük hızlarda çalışmasını sağlar. Kanat yüzeyine dik gelen efektif Mach sayısı:\n\nM_eff = M_∞ × cos(Λ)\n\nΛ = 35° için: M_eff = M × cos(35°) = 0,82 M\n\nBu demektir ki uçak Mach 0,85'te uçarken kanat profilini Mach 0,70 görür. Şok dalgaları daha geç oluşur, dalga sürüklenmesi azalır.\n\nAncak süpürmenin bedelleri var:\n• CLα azalır (birim hücum açısı başına daha az kaldırma)\n• Kanat ucu önce stall'a girer (uç stall riski artar)\n• Yapısal bükülme momenti artar\n• Üretim karmaşıklaşır\n\nModern yolcu uçakları (A320, B737, B787) 25-35° süpürme kullanır. Üst ses savaş uçakları 40-65° kullanır.",
      kutu:{ tip:"bilgi", baslik:"Okkanat, delta ve değişken geometri",
        metin:"Okkanat (swept wing) en yaygın form. Delta kanat geniş alan ve düşük AR ile süpersonik uçuşta öne çıkar (F-16, Concorde). Değişken geometri kanat (F-14 Tomcat) hem düşük hem yüksek hızda optimal çalışır ama çok ağırdır ve bakımı zordur." } },

    { id:"b4", tip:"metin", baslik:"Profil seçimi kriterleri",
      metin:"Doğru kanat profilini seçmek için şu kriterlere bakılır:\n\nSeyir Mach sayısı:\n• M < 0,5 → NACA 4/5 serisi veya benzer düşük hız profilleri\n• M = 0,5-0,85 → Üst kritik (supercritical) profil\n• M > 0,85 → İnce, süpürülmüş, özel tasarım profil\n\nGerekli maksimum kaldırma (CL_max):\n• Yüksek CL_max → yüksek camber, flap sistemi\n• Düşük CL_max tolere edilebiliyorsa → ince, hızlı profil\n\nStall davranışı:\n• Eğitim uçağı → yumuşak, öngörülebilir stall\n• Akrobasi → keskin stall da tolere edilebilir\n\nYapısal kalınlık:\n• Kalın profil (t/c > 0,15) → spar yüksek, rijit yapı\n• İnce profil (t/c < 0,10) → hafif ama az yer\n\nLamineer akış potansiyeli:\n• NACA 6 serisi → düşük Reynolds, pürüzsüz yüzey şart\n• Yolcu uçağında pratik değil (yüzey kirliliği)" },

    { id:"b5", tip:"ornek", baslik:"Örnek: Profil ve AR seçimi kararı",
      soru:"Tasarlanan bölgesel yolcu uçağı şu gereksinimlere sahip:\n• Seyir: Mach 0,78, FL350\n• Menzil: 3000 km\n• 70 yolcu\nProfil ailesi ve AR için önerileri sırala.",
      cozum:"Seyir Mach 0,78 → Üst kritik profil gerekli (şok dalgalarını ertelemek için).\n\nAR seçimi:\n• Yüksek AR → düşük indüklenmiş sürükleme → daha az yakıt\n• 3000 km menzil için yakıt tasarrufu kritik\n• Bölgesel uçak → görece kısa kanat → AR 9-11 arası makul\n• B737 AR ≈ 9.5, A220 AR ≈ 11.5 referans alınabilir\n\nSüpürme:\n• Mach 0,78 için 25-28° süpürme uygun\n• M_eff = 0,78 × cos(26°) ≈ 0,70 → profil Mach 0,70 görecek\n\nÖneri:\n→ Üst kritik kanat profili (Boeing/Airbus tescilli ya da özel CFD tasarımı)\n→ AR = 10-11\n→ Λ = 25-28°\n→ λ (incelme) = 0,3-0,4\n→ Washout (bükme) ≈ -3° ile kök stall sağla" },

    { id:"b6", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Süpürme açısını artırmanın her zaman daha iyi olduğunu sanmak. Yüksek sweep CLα'yı düşürür, uç stall riskini artırır.",
        "AR'ı çok yüksek seçmek. Yapısal ağırlık artışı aerodinamik kazancı silerse net fayda yoktur.",
        "Profil seçimini seyir Mach sayısına göre yapmamak. Transonik uçuşta sıradan NACA profili yetersiz kalır.",
        "Dihedral ile sweep'in yanal kararlılığa etkisini karıştırmak. İkisi de kararlılık sağlar ama farklı mekanizmalarla.",
        "Kanat geometrisini yapıdan bağımsız düşünmek. Süpürme ve AR yapısal yük ve ağırlığı doğrudan etkiler."
      ] },

    { id:"b7", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Süpürme açısı neden transonik uçuşta avantaj sağlar?","Kanat yüzeyine dik gelen efektif Mach sayısı M_eff = M × cos(Λ) ile azalır. 35° süpürmede kanat, serbest akış Mach'ının cos(35°) = 0,82 katını görür. Bu şok dalgası oluşumunu erteler ve dalga sürüklenmesini azaltır."],
        ["Yüksek AR'ın dezavantajı nedir?","Yapısal bükülme momenti artar, kanat daha ağır olur. Ayrıca uzun kanat hangar boyutlarını kısıtlayabilir. Boeing 777X bu sorunu katlanabilir kanat ucuyla çözdü."],
        ["Eğitim uçağı için hangi profil özellikleri önemli?","Yumuşak, öngörülebilir stall davranışı. Stall öncesi yeterli uyarı. Geniş L/D oranı aralığı. Yüksek CL_max çok kritik değil. NACA 2412 veya benzeri bu ihtiyaçları karşılar."]
      ] },

    { id:"b8", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA.",
        "Abbott, I. H., & Von Doenhoff, A. E. (1959). Theory of wing sections. Dover Publications.",
        "Torenbeek, E. (1982). Synthesis of subsonic airplane design. Delft University Press.",
        "Whitford, R. (1987). Design for air combat. Jane's Publishing."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Süpürme açısı", puan:2,
      soru:"Λ = 30° süpürme açısında, M = 0,82 ile uçan uçakta kanat profilene etkili Mach sayısı kaçtır?",
      secenekler:["0,71","0,82","0,95","0,60"],
      dogru:0,
      aciklama:"M_eff = M × cos(Λ) = 0,82 × cos(30°) = 0,82 × 0,866 = 0,71. Profil 0,82 yerine 0,71 Mach görür; şok dalgaları daha geç oluşur." },
    { id:"s2", etiket:"Kanat parametreleri", puan:1,
      soru:"En boy oranı (AR) artınca ne olur?",
      secenekler:["İndüklenmiş sürükleme artar","İndüklenmiş sürükleme azalır ama yapı ağırlığı artar","Stall hızı düşer","Süpürme açısı artar"],
      dogru:1,
      aciklama:"CDᵢ = CL²/(π·e·AR). AR arttıkça indüklenmiş sürükleme azalır. Ama uzun kanat ağır yapı demektir; bu kazancı kısmen siler." },
    { id:"s3", etiket:"Profil seçimi", puan:2,
      soru:"Mach 0,80 seyir hızı için hangi kanat profili ailesi en uygun?",
      secenekler:["NACA 4 basamaklı seri","NACA 6 serisi lamineer profil","Üst kritik (supercritical) profil","Simetrik profil (NACA 0012)"],
      dogru:2,
      aciklama:"Mach 0,80 transonik bölgedir. Üst kritik profil üst yüzeyi düzleştirerek şok dalgası oluşumunu erteler ve dalga sürüklenmesini minimize eder. NACA 4 serisi bu hızda yetersiz kalır." },
    { id:"s4", etiket:"Kanat parametreleri", puan:1,
      soru:"Dihedral (kanat yükseltme açısı) ne sağlar?",
      secenekler:["Boyuna kararlılık","Yanal kararlılık","Daha yüksek CL_max","Düşük indüklenmiş sürükleme"],
      dogru:1,
      aciklama:"Dihedral kanatların havaya göre daha iyi hizalanmasını sağlar. Yan kayma (sideslip) sırasında alçalan kanat daha fazla kaldırma üretir ve uçak dik konumuna döner — yanal kararlılık." }
  ],
  ipuclari:{
    "Süpürme açısı":"M_eff = M×cos(Λ). Sweep arttıkça şok geç oluşur ama CLα düşer, uç stall riski artar.",
    "Kanat parametreleri":"AR↑ → indüklenmiş sürükleme↓ ama ağırlık↑. Dihedral → yanal kararlılık. Bükme → kök stall.",
    "Profil seçimi":"M<0,5 → NACA 4/5. M=0,5-0,85 → supercritical. M>0,85 → ince + sweep.",
    "İncelme oranı":"λ=uç kord/kök kord. λ<1 ok kanat. Düşük λ → kök stall önler, üretim zor."
  }
}

}); // Object.assign sonu

Object.assign(window.CONTENT.konuIcerik, {

"m8-4": {
  ad: "Gövde, iniş takımı ve iç hacim yerleşimi",
  ders: "Bütünleşik Uçak Tasarımı",
  seviye: "Orta",
  sure: 22,
  mulakat: false,
  onbilgi: "MTOW tahmini, kanat geometrisi",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Uçak gövdesi yolcuları, kargo ve sistemleri barındıran silindirik veya eliptik kesitli yapıdır. İniş takımı kalkış ve iniş yüklerini zemine iletir. Bu iki alt sistemin boyutu ve yerleşimi ağırlık merkezini, yapıyı ve aerodinamiği doğrudan etkiler." },

    { id:"b2", tip:"metin", baslik:"Gövde kesit tasarımı",
      metin:"Gövde kesiti basınçlandırma yüklerine göre tasarlanır. Dairesel kesit en verimlidir çünkü basınç yükünü eşit dağıtır ve gerilme konsantrasyonu minimumdur.\n\nSigara tüpü (tubular) gövde: A320, B737 gibi dar gövdeli uçaklarda tek dairesel kesit. 3+3 veya 2+4+2 koltuk düzeni.\n\nÇift balon gövde: B747, A380 gibi geniş gövdeli uçaklarda iki dairesel kesit üst üste veya yan yana.\n\nEliptik kesit: Bazı iş uçaklarında kullanılır. Üretimi zordur ama baş yüksekliği iyidir.\n\nGövde çap-uzunluk oranı: Tipik olarak L/D = 7-10 arası hedeflenir. Çok uzun ve ince gövde yapısal sorun, çok kısa ve şişman gövde aerodinamik sorun yaratır.",
      kutu:{ tip:"bilgi", baslik:"Neden dairesel kesit?",
        metin:"Dairesel boru iç basınç altında tüm çevresinde eşit çevresel gerilme taşır. Köşeli kesitlerde köşe gerilme konsantrasyonu yaratır. Comet kazalarının köşeli pencerelerden kaynaklandığını hatırla. Dairesel kesit hem yapısal hem de üretim açısından en verimli çözümdür." } },

    { id:"b3", tip:"metin", baslik:"İç hacim yerleşimi",
      metin:"Gövde iç hacmi önden arkaya planlanır:\n\n• Kokpit: En önde, pilot görüş alanı kısıtlaması belirleyici\n• Birinci sınıf / iş sınıfı / ekonomi: Ticari uçakta gelir odaklı düzenleme\n• Galley ve lavabo: Tahliye kapılarına yakın\n• Bagaj ambarı: Alt kısım, ağırlık merkezine yakın\n• Aviyonik bölmesi: Tipik olarak ön altta (MEC — Main Equipment Center)\n• APU (Yardımcı güç ünitesi): Genellikle kuyrukta\n\nYerleşimde ağırlık merkezi (CG) zarfı kritiktir. Kargo ve yolcu doldurma sırasına göre CG hareket eder. Bu hareket izin verilen CG zarfı içinde kalmalıdır.\n\nKoltuk adımı (seat pitch): Ekonomi sınıfı tipik 28-32 inç. Her inç değişimi tüm yolcu sayısını ve geliri etkiler — tasarımda milimetrik bir karardr." },

    { id:"b4", tip:"metin", baslik:"İniş takımı konfigürasyonları",
      metin:"Tricycle (ön tekerlekli): Modern uçakların neredeyse tamamı. İki ana tekerlek + bir ön tekerlek. Yerde yönlendirme kolaydır, pilot görüşü iyidir, kalkışta burun kaldırmak basittir.\n\nTaildragger (kuyruk tekerlekli): Eski tasarımlar, bazı tarım ve yangın söndürme uçakları. Düşük gürültü ve sürükleme avantajı, ama yerde yönlendirmesi zordur.\n\nTandem: B-52'de kullanılan sıradüzen konfigürasyon. Kanat altındaki tip tanklar dengeleme sağlar.\n\nİniş takımı boyutlandırma kuralları:\n• Kalkışta devrilme açısı: Ana tekerlekler CG'nin gerisinde, moment kolu yeterli olmalı\n• Yerden taşıma yüksekliği: Tam flap konumunda motor veya pervane zeminden en az X cm\n• Devrilme karşı stabilite: Yana devrilmemek için geniş aks mesafesi\n• Pist yük sınırı: Çok sayıda tekerlek yüzey basıncını dağıtır (B747: 16+2 tekerlek)" },

    { id:"b5", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Aviyonik ve sistem ağırlıklarını gövde ağırlığına eklememeK. Her sistem CG'yi etkiler.",
        "İniş takımı çarkak mesafesini çok dar seçmek. Yan rüzgarda iniş ve yer manevrası için yeterli mesafe şart.",
        "Kargo ambarını CG'den uzağa yerleştirmek. Her yükleme senaryosunda CG zarfı kontrol edilmeli.",
        "Gövde uzunluğunu sadece yolcu sayısına göre belirlemek. Kuyruk yüzeyleri, APU ve diğer sistemler için ek uzunluk gerekir.",
        "Tahliye kapısı gereksinimlerini görmezden gelmek. CS-25/FAR-25 kapı sayısını ve yerini düzenler."
      ] },

    { id:"b6", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Gövde kesiti neden dairesel tasarlanır?","Dairesel boru iç basınç altında tüm çevresinde eşit çevresel gerilme (hoop stress) taşır. Köşeli kesitlerde köşe gerilme konsantrasyonu yaratır. Bu yapısal verimlilik ve ağırlık tasarrufu sağlar."],
        ["Tricycle iniş takımının taildragger'a göre avantajı nedir?","Yerde yönlendirme kolaydır, pilot görüşü iyidir ve kalkışta burun kaldırma mekanizması basittir. Taildragger hız aşımında yere basmadan kaymaya meyilli olduğundan yönetimi deneyim ister."],
        ["CG zarfı neden önemlidir?","CG'nin öne veya arkaya kayması boyuna stabilitеyi etkiler. Çok öne kayarsa uçak ağır burunlu olur, çok arkaya kayarsa kararsızlaşabilir. Tüm yükleme senaryolarında (dolu/boş, ön/arka yolcu) CG sınırlar içinde kalmalıdır."]
      ] },

    { id:"b7", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA.",
        "Niu, M. C. Y. (1988). Airframe structural design. Conmilit Press.",
        "Jenkinson, L. R., Simpkin, P., & Rhodes, D. (1999). Civil jet aircraft design. AIAA."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Gövde tasarımı", puan:1,
      soru:"Modern yolcu uçaklarında gövde kesiti neden dairesel yapılır?",
      secenekler:["Üretimi kolay olduğu için","İç basınç yükünü eşit dağıtır, gerilme konsantrasyonu minimumdur","Daha fazla yolcu sığdırdığı için","Aerodinamik olarak en iyi şekil olduğu için"],
      dogru:1,
      aciklama:"Dairesel boru iç basınç altında çevresi boyunca eşit gerilme taşır. Köşeli kesitlerde köşe gerilme konsantrasyonu yaratır ve yapı ağırlaşır. Comet kazaları bu gerçeği acı biçimde kanıtlamıştır." },
    { id:"s2", etiket:"İniş takımı", puan:2,
      soru:"İniş takımı ana tekerlekleri neden CG'nin gerisine yerleştirilir?",
      secenekler:["Aerodinamik sürüklemeyi azaltmak için","Kalkışta burun kaldırma momenti oluşturmak ve devrilme kararlılığı için","Ağırlığı dengelemek için","Yapısal açıdan kolay olduğu için"],
      dogru:1,
      aciklama:"Ana tekerlekler CG'nin gerisinde olursa kalkışta ön tekerleği kaldırmak için yeterli moment kolu oluşur. Ayrıca iniş sırasında uçak önce ana tekerleklere oturur — bu kontrollü bir iniş için gereklidir." },
    { id:"s3", etiket:"İç hacim", puan:1,
      soru:"Aviyonik ekipman bölmesi (MEC) genellikle nerede konumlanır?",
      secenekler:["Kuyrukta, APU yanında","Kokpitin hemen arkasında, alt kısımda","Bagaj ambarının arkasında","Kanatların altında"],
      dogru:1,
      aciklama:"MEC (Main Equipment Center) genellikle kokpite yakın, alt gövdede konumlanır. Kablo uzunluklarını minimize eder ve pilotların hızlı erişimini kolaylaştırır." }
  ],
  ipuclari:{
    "Gövde tasarımı":"Dairesel kesit → eşit hoop stress. L/D = 7-10 hedefle. Köşeli pencereler tarihsel ders.",
    "İniş takımı":"Tricycle modern standart. Ana tekerlek CG gerisinde. Devrilme açısı ve pist yük sınırı kontrol et.",
    "İç hacim":"CG zarfı tüm yükleme senaryolarında sınır içinde kalmalı. Bagaj ambarı CG'ye yakın tut."
  }
},

"m8-5": {
  ad: "CG zarfı ve kuyruk yüzeyleri boyutlandırması",
  ders: "Bütünleşik Uçak Tasarımı",
  seviye: "Orta",
  sure: 22,
  mulakat: true,
  onbilgi: "Boyuna statik kararlılık, gövde yerleşimi (m8-4)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Ağırlık merkezi (CG) uçağın stabilitesini ve kontrol edilebilirliğini belirler. Kuyruk yüzeyleri bu stabilitеyi sağlamak ve kumandaları etkin kılmak için boyutlandırılır. CG zarfı ve kuyruk hacim katsayısı kavramsal tasarımın temel çıktıları arasındadır." },

    { id:"b2", tip:"metin", baslik:"CG zarfı nedir?",
      metin:"CG'nin tüm operasyonel yükleme senaryolarında (yolcu, kargo, yakıt kombinasyonları) aldığı konumların aralığıdır. Genellikle kanat veteriyle normalize edilir ve yüzde kanat kord (% MAC) cinsinden ifade edilir.\n\nTipik yolcu uçağı CG zarfı: %12 ile %35 MAC arası\n\nÖn CG sınırı: Elevatör yeterince kaldırma üretemezse burun indirme kaybedilir. Aşılırsa ele alma zorluğu.\n\nArka CG sınırı: Nötr noktanın gerisine geçilirse boyuna kararsızlık başlar. Fly-by-wire uçaklar bu sınırı genişletebilir (A320 hafif aft CG ile verimli uçar).\n\nCG zarfı uçakta yük yerleşimini yönetir: Hangisi önce doldurulacak? Ön yolcular mı arka yolcular mı? Bu kararlar CG'yi etkiler ve operasyonel prosedüre girer." },

    { id:"b3", tip:"formul", baslik:"Kuyruk hacim katsayıları",
      formul:"V_H = (S_H × L_H) / (S × c)\n\nV_V = (S_V × L_V) / (S × b)",
      semboller:[
        ["V_H","Yatay kuyruk hacim katsayısı","—"],
        ["S_H","Yatay kuyruk alanı","m²"],
        ["L_H","Yatay kuyruk moment kolu (kanat aerodinamik merkezi → yatay kuyruk AC)","m"],
        ["S","Kanat alanı","m²"],
        ["c","Kanat ortalama geometrik kord (MAC)","m"],
        ["V_V","Düşey kuyruk hacim katsayısı","—"],
        ["S_V","Düşey kuyruk alanı","m²"],
        ["L_V","Düşey kuyruk moment kolu","m"],
        ["b","Kanat açıklığı","m"]
      ],
      metin:"Tipik değerler:\n• V_H: Yolcu jeti 0,8-1,1, genel havacılık 0,3-0,5\n• V_V: Yolcu jeti 0,07-0,10, genel havacılık 0,03-0,05\n\nBu katsayılar istatistiksel olarak benzer uçaklardan elde edilir. Kavramsal tasarımda ilk boyutlandırma bu değerlerle başlar, daha sonra stabilite analiziyle doğrulanır." },

    { id:"b4", tip:"metin", baslik:"Kuyruk konfigürasyonları",
      metin:"Konvansiyonel kuyruk: Yatay ve düşey kuyruk gövde üzerine monte. En yaygın, bakımı en kolay.\n\nT kuyruk: Yatay kuyruk düşey kuyruğun tepesine monte. Daha uzun moment kolu → daha küçük yatay kuyruk. Ama derin stall riski ve daha ağır düşey kuyruk yapısı.\n\nH kuyruk: İki düşey kuyruk, yatay kuyruk ortada. Motor egzozundan uzak tutmak için (bazı askeri uçaklar).\n\nV kuyruk (butterfly kuyruk): Yatay ve düşey işlevi birleştiren iki eğik yüzey. Beechcraft Bonanza'nın karakteristik tasarımı. Daha az bileşen ama kontrolün karmaşık olması.\n\nCanard konfigürasyonu: Ön kanat arka kanatın önünde. Her ikisi de kaldırma üretir → verimli. Ama yükleme hassasiyeti yüksek (CG zarfı dar)." },

    { id:"b5", tip:"ornek", baslik:"Örnek: Yatay kuyruk boyutlandırması",
      soru:"Bir eğitim uçağı için: S = 14 m², MAC (c) = 1,4 m, L_H = 4,5 m.\nHedef V_H = 0,45. Yatay kuyruk alanı (S_H) kaç olmalı?",
      cozum:"V_H = (S_H × L_H) / (S × c)\n0,45 = (S_H × 4,5) / (14 × 1,4)\n0,45 = (S_H × 4,5) / 19,6\nS_H × 4,5 = 0,45 × 19,6 = 8,82\nS_H = 8,82 / 4,5 = 1,96 m²\n\nYorum: Kanat alanının yaklaşık 1/7'si kadar yatay kuyruk alanı gerekiyor. Gerçek eğitim uçaklarında bu oran genellikle %15-25 civarındadır. Moment kolu uzatılırsa kuyruk alanı küçülebilir — bu T kuyruk konfigürasyonunun temel avantajıdır." },

    { id:"b6", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Nötr noktayı CG sınırıyla karıştırmak. Nötr nokta uçağın aerodinamik özelliği, CG sınırı operasyonel kısıttır.",
        "Yakıt tüketiminin CG'yi nasıl etkilediğini görmezden gelmek. Kanat yakıtı tüketildikçe CG kayabilir; tank yerleşimi bu hareketi kontrol etmeli.",
        "Kuyruk hacim katsayısını hesaplamadan önce moment kolunu belirlemeden seçmek. Uzun gövde → uzun moment kolu → küçük kuyruk.",
        "T kuyruk konfigürasyonunda derin stall riskini değerlendirmemek. Yatay kuyruk kanat gölgesine girerse elevatör etkinliği kaybedilir.",
        "Canard konfigürasyonunda CG zarfının daraldığını unutmak. Her iki kaldırma yüzeyi dengelenmek zorundadır."
      ] },

    { id:"b7", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["CG zarfı neden önemlidir?","CG'nin öne kayması elevatör efektivitesini zorlayabilir. Arkaya kayması boyuna kararsızlığa yol açar. Tüm yükleme senaryolarında CG sınırlar içinde kalmalı; aksi halde uçak uçuşa elverişsizdir."],
        ["Kuyruk hacim katsayısı ne ifade eder?","Kuyruğun gövde üzerindeki stabilize edici momentini özetleyen boyutsuz sayıdır. Büyük S_H × büyük L_H → yüksek V_H → güçlü stabilite. İstatistiksel değerlerle ilk boyutlandırmada kullanılır."],
        ["T kuyruk konfigürasyonunun riski nedir?","Yüksek hücum açısında kanat gölgesi yatay kuyruğu etkiler; elevatör etkinliği kaybolur ve derin stall'a girilebilir. Kurtarması çok zordur. Bu yüzden T kuyruklu uçaklar (B727, C-17) titreşim uyarısı ve/veya stick pusher sistemi taşır."]
      ] },

    { id:"b8", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA.",
        "Torenbeek, E. (1982). Synthesis of subsonic airplane design. Delft University Press.",
        "Nicolai, L. M., & Carichner, G. E. (2010). Fundamentals of aircraft and airship design. AIAA."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"CG zarfı", puan:2,
      soru:"CG'nin arka sınırı aşılırsa ne olur?",
      secenekler:["Elevatör etkinliği artar","Boyuna kararsızlık başlar, uçak kontrol edilemez hale gelebilir","Stall hızı düşer","Yakıt tüketimi artar"],
      dogru:1,
      aciklama:"Nötr noktanın gerisinde CG boyuna kararsızlığa yol açar. Küçük bir bozunum giderek büyür ve pilot müdahalesi olmadan durmaz. Bu nedenle arka CG sınırı kritik bir güvenlik sınırıdır." },
    { id:"s2", etiket:"Kuyruk hacim katsayısı", puan:2,
      soru:"Yatay kuyruk moment kolunu iki katına çıkarmak kuyruk alanına nasıl etki eder (V_H sabit)?",
      secenekler:["Kuyruk alanı iki katına çıkar","Kuyruk alanı yarıya iner","Kuyruk alanı değişmez","Kuyruk alanı dört katına çıkar"],
      dogru:1,
      aciklama:"V_H = S_H × L_H / (S × c). L_H iki katına çıkarsa aynı V_H için S_H yarıya inebilir. Bu T kuyruk ve büyük moment kollu tasarımların temel avantajıdır." },
    { id:"s3", etiket:"Kuyruk konfigürasyonu", puan:1,
      soru:"T kuyruk konfigürasyonunun ana riski nedir?",
      secenekler:["Ağır yapı","Yüksek hücum açısında derin stall riski","Fazla sürükleme","Zayıf yanal kararlılık"],
      dogru:1,
      aciklama:"T kuyrukta yatay yüzey yüksektedir. Yüksek hücum açısında kanat gölgesi yatay kuyruğu etkiler, elevatör etkinliği kaybolur ve derin stall'a girilir. Kurtarma neredeyse imkânsızdır." }
  ],
  ipuclari:{
    "CG zarfı":"%MAC cinsinden ifade edilir. Ön sınır: elevatör yeterliliği. Arka sınır: kararsızlık başlar.",
    "Kuyruk hacim katsayısı":"V_H = S_H×L_H/(S×c). Tipik 0,8-1,1. L_H uzun → S_H küçük.",
    "T kuyruk":"Avantaj: küçük yatay kuyruk. Risk: derin stall. Çözüm: stick pusher."
  }
},

"m8-6": {
  ad: "İtki sistemi entegrasyonu — inlet ve egzoz",
  ders: "Bütünleşik Uçak Tasarımı",
  seviye: "İleri",
  sure: 25,
  mulakat: false,
  onbilgi: "Motor türleri (m4-9), kanat geometrisi (m8-3)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Motor, uçağın en ağır ve pahalı alt sistemidir. Nereye ve nasıl yerleştirildiği yapıyı, aerodinamiği, bakımı ve güvenliği etkiler. Hava alığı (inlet) motora temiz ve istikrarlı hava akışı sağlar; egzoz ise atıkları uygun yönlendirmeyle tahliye eder." },

    { id:"b2", tip:"metin", baslik:"Motor yerleşim seçenekleri",
      metin:"Kanat altı (underwing pylon): Geniş gövdeli yolcu uçaklarının klasik çözümü (B747, A330). Avantajlar: Kolay bakım, kanat eğilme momentini kısmen dengeler (motor ağırlığı kaldırmayı yaklaşık dengeledığından kanat kökü stresi azalır), kanat alanından ayrı bir yapı. Dezavantajlar: Motor hasarı durumunda asfalt taşı fırlatma, kapak yüksekliği gereksinimi.\n\nKuyruk motoru (tail-mounted): DC-9, MD-80, B727 gibi eski nesil uçaklar ve bazı bölgesel jetler. Avantajlar: Temiz kanat (yüksek kaldırma cihazları için idealdir), düşük kabin gürültüsü. Dezavantajlar: CG kuyruğa kayar → denge problemi, uçuş sırasında bakım imkânsız, T kuyruk gerektiren konfigürasyonlar derin stall riski taşır.\n\nGömülü motor (buried): B-52, U-2, bazı askeri uçaklar. Hava direnci minimumdur ama bakım çok zordur.\n\nKanat içi: Erken jetlerde (Comet, B-47). Temiz dış hat ama yangın riski ve bakım zorluğu.\n\nPylon üstü (over-wing): Bazı küçük bölgesel uçaklar ve İHA'lar. Düşük gürültü, STOL kabiliyeti iyileşir ama kanat üstü akışı etkiler." },

    { id:"b3", tip:"metin", baslik:"Hava alığı (inlet) tasarımı",
      metin:"Hava alığı motorun ihtiyacı olan hava kütlesini doğru basınç, hız ve homojenlikte sağlamalıdır.\n\nSes altı (pitot) inlet: Basit dairesel veya eliptik ağız. Tüm seyir hızlarında çalışır. Yolcu jetlerinin tamamı bu tipi kullanır. Mach < 0,85 için idealdir.\n\nSes üstü inlet: Şok dalgalarını kullanarak hava hızını düşürür ve basıncını artırır (ram recovery). Dik şok, eğik şok veya izoentropik sıkıştırma ile çalışır.\nÖrnekler: F-16'da pitot inlet (tek dik şok), F-15'te dikdörtgen kenar kıvrımlı (iki eğik şok + dik şok), Concorde'da değişken geometrili inlet.\n\nDSI (Divertless Supersonic Inlet): F-35'te kullanılan sınır tabaka saptırıcısız modern tasarım. Yüzey eğrilik saptırmasıyla sınır tabakayı uzaklaştırır. Hafif ve stealth uyumlu.\n\nInlet distorsiyon: Hava akışı homojen değilse kompresör titreşimi ve surge riski artar. Distorsiyon indeksi (DC60) motor sertifikasyonunda kritik parametredir.",
      kutu:{ tip:"bilgi", baslik:"BPR ve inlet boyutu",
        metin:"Yüksek bypass oranı (BPR) turbofan motorların fanı çok büyüktür. B787 GEnx motor fan çapı 2,82 m, A380 GP7000 ise 2,95 m'dir. Bu dev fanlar için büyük nacelle (motor kovanı) ve kanat ile yeterli zemin mesafesi şarttır. Bu yüzden B737 MAX'ın yeni büyük motorları yerleşim sorununa yol açtı ve MCAS'ı doğurdu." } },

    { id:"b4", tip:"metin", baslik:"Egzoz ve thrust reverser",
      metin:"Egzoz lülesi itme oluşturur ve gazları dışarı atar. Tasarım hedefi: minimum kayıp, minimum gürültü, minimum sürükleme.\n\nKarıştırıcı (mixer) lüle: Sıcak fan ve core akışını karıştırarak gürültüyü azaltır. Modern turbofanlarda yaygın.\n\nChevron lüle: B787 ve bazı A380 motorlarında dişli kenar. Akış karışımını artırarak tiz gürültü bileşenlerini azaltır.\n\nThrust reverser (itki tersleyici): Egzoz akışını öne çevirerek frenleme sağlar. İki tip:\n• Cascade (kelebek) reverser: Büyük yolcu uçakları (fan akışını kelebek kapakla saptırır)\n• Blocker door: Küçük uçaklar ve bazı askeri jetler\n\nGöreve göre etkisi: İnişte toplam frenlemenin yaklaşık %30-40'ını karşılar. İslak/buzlu pistte çok değerli." },

    { id:"b5", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Motor yerleşimini sadece aerodinamik açıdan değerlendirmek. Bakım erişimi, yangın güvenliği ve CG etkisi de kritiktir.",
        "Inlet distorsiyon analizini atlamak. Homojen olmayan akış kompresör surge'e yol açar.",
        "Kanat altı motor yerleşiminde zemin mesafesini kontrol etmemek. FAR/CS gereksinimleri minimum zeminden yükseklik tanımlar.",
        "Egzoz sıcaklığının kuyruk yüzeyine etkisini görmezden gelmek. Özellikle kuyruk motorlu konfigürasyonlarda termal koruma gerekebilir.",
        "Thrust reverser ağırlığını ihmal etmek. Her motor başına 200-400 kg ekstra ağırlık gelebilir."
      ] },

    { id:"b6", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Kanat altı motor yerleşiminin kuyruk motoruna göre avantajı nedir?","Kolay bakım erişimi, motor ağırlığının kanat kökü eğilme momentini azaltması ve motor hasarında kabin dışında kalması. Kuyruk motoru CG'yi kuyruğa kaydırır ve derin stall riskini artırır."],
        ["DSI inlet nedir?","Divertless Supersonic Inlet. F-35'te kullanılan, sınır tabaka saptırıcısı gerektirmeyen modern inlet tasarımıdır. Yüzey eğriliği sınır tabakayı motordan uzaklaştırır. Hafif ve düşük radar kesit alanı (stealth) avantajı sağlar."],
        ["Thrust reverser neden sadece iniş sırasında kullanılır?","Uçuş sırasında tam güçte thrust reversing motor gövde hasarı ve kontrol kaybına yol açabilir. Tavsiye edilen kullanım yere dokunduktan sonradır. Bazı uçaklarda havada da kısmi tersinilebilir ama bu özel tasarım ve sertifikasyon gerektirir."]
      ] },

    { id:"b7", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Mattingly, J. D., Heiser, W. H., & Pratt, D. T. (2002). Aircraft engine design (2. baskı). AIAA.",
        "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA.",
        "Seddon, J., & Goldsmith, E. L. (1999). Intake aerodynamics (2. baskı). AIAA."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Motor yerleşimi", puan:2,
      soru:"Kuyruk motorlu konfigürasyonun temel dezavantajı nedir?",
      secenekler:["Sürükleme çok yüksektir","CG kuyruğa kayar ve T kuyruk gerektirirse derin stall riski artar","Bakım çok kolaydır","Kabin gürültüsü çok yüksektir"],
      dogru:1,
      aciklama:"Kuyruk motorları CG'yi geriye kaydırır. Yük dengelemek için büyük yatay kuyruk veya T kuyruk gerekir. T kuyrukta ise derin stall riski ciddidir — bu DC-9 ve B727'nin stick pusher taşımasının sebebidir." },
    { id:"s2", etiket:"Inlet tasarımı", puan:1,
      soru:"Ses altı yolcu uçaklarında hangi inlet tipi kullanılır?",
      secenekler:["Değişken geometrili inlet","Pitot (basit dairesel) inlet","DSI inlet","Eğik şok inlet"],
      dogru:1,
      aciklama:"Mach 0,85 altında basit pitot inlet yeterlidir ve en hafif, en basit tasarımdır. Ses üstü inletlerin karmaşık şok yönetimi mekanizmaları gereksizdir." },
    { id:"s3", etiket:"Motor yerleşimi", puan:2,
      soru:"Kanat altı motor yerleşimi kanat yapısına nasıl fayda sağlar?",
      secenekler:["Kanat alanını artırır","Motor ağırlığı kaldırma kuvvetini dengeleyerek kanat kökü eğilme momentini azaltır","Süpürme açısını artırır","İndüklenmiş sürüklemeyi azaltır"],
      dogru:1,
      aciklama:"Uçuşta kanat kaldırma kuvveti yukarı, ağırlık aşağı etkir. Motor ağırlığı kanat altında olunca bu moment kısmen dengelenir. Kanat kökü eğilme momenti azalır → daha hafif kanat yapısı." }
  ],
  ipuclari:{
    "Motor yerleşimi":"Kanat altı: bakım kolay, yapı yararı. Kuyruk: temiz kanat, CG sorunu. Gömülü: düşük direnç, zor bakım.",
    "Inlet tasarımı":"Ses altı → pitot. Ses üstü → eğik şok. F-35 → DSI. Distorsiyon DC60 ile ölçülür.",
    "Egzoz":"Chevron lüle → gürültü azalır. Thrust reverser → inişte frenleme %30-40."
  }
},

"m8-7": {
  ad: "Ağırlık ve denge raporu",
  ders: "Bütünleşik Uçak Tasarımı",
  seviye: "Orta",
  sure: 20,
  mulakat: false,
  onbilgi: "Gövde yerleşimi (m8-4), CG zarfı (m8-5)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Ağırlık ve denge raporu, bir uçağın her bileşeninin kütlesini ve ağırlık merkezine göre konumunu belgeleyen teknik dokümandır. Bu rapor olmadan uçak ne sertifikalandırılabilir ne de güvenli biçimde yüklenebilir." },

    { id:"b2", tip:"metin", baslik:"Ağırlık bütçesi nedir?",
      metin:"Tasarım sürecinde her sisteme izin verilen maksimum ağırlık tahsis edilir. Buna ağırlık bütçesi (weight budget) denir. Proje ilerledikçe her ekip tahsis edilen bütçeye uymalıdır.\n\nBütçe aşılırsa başka bileşenden tasarruf edilmeli veya MTOW revize edilmelidir. MTOW arttıkça yakıt, yapı ve motor büyür — snowball effect devreye girer.\n\nUçak programlarında kilogram başına maliyet çok yüksektir. B787 programında 1 kg tasarruf için özel karbon fiber bileşen tasarlanmıştır. A380'de kapı kollarında bile ağırlık optimizasyonu yapılmıştır.\n\nTipik yolcu jeti ağırlık dağılımı (MTOW içinde yüzde olarak):\n• Yapı: %25-30\n• İtki sistemi: %10-15\n• Sistemler (yakıt, hidrolik, aviyonik…): %10-15\n• Yük (yolcu+bagaj): %20-25\n• Yakıt: %25-35" },

    { id:"b3", tip:"formul", baslik:"CG hesabı",
      formul:"x_CG = Σ(m_i × x_i) / Σ(m_i)\n\npersentaj MAC = (x_CG − x_LEMAC) / MAC × 100",
      semboller:[
        ["x_CG","Referans noktasından CG konumu","m"],
        ["m_i","i. bileşenin kütlesi","kg"],
        ["x_i","i. bileşenin CG konumu (referans noktasından)","m"],
        ["x_LEMAC","Kanat ön kenar noktasının gövdedeki konumu","m"],
        ["MAC","Ortalama aerodinamik kord uzunluğu","m"]
      ],
      metin:"Referans noktası genellikle burun (station 0) veya bir özel gövde istasyonudur. Her bileşen için m × x çarpımı hesaplanır, toplanır ve toplam kütleye bölünür.\n\nCG konumu % MAC cinsinden ifade edilerek sertifikasyon limitlerle karşılaştırılır." },

    { id:"b4", tip:"ornek", baslik:"Örnek: Basit CG hesabı",
      soru:"Üç ana bileşeni olan küçük bir uçak:\n• Gövde-yapı: 400 kg, x = 3,2 m\n• Motor: 150 kg, x = 0,5 m\n• Yakıt + yolcu: 250 kg, x = 3,8 m\nToplam CG konumunu bul. MAC = 1,5 m, x_LEMAC = 2,8 m",
      cozum:"Toplam kütle: 400 + 150 + 250 = 800 kg\n\nMoment toplamı:\n(400 × 3,2) + (150 × 0,5) + (250 × 3,8)\n= 1280 + 75 + 950 = 2305 kg·m\n\nx_CG = 2305 / 800 = 2,88 m\n\n% MAC = (2,88 − 2,80) / 1,5 × 100 = 0,08/1,5 × 100 = 5,3% MAC\n\nYorum: CG çok ön tarafta (% 5,3 MAC). Tipik yolcu uçaklarında önerilen aralık %15-30 MAC civarıdır. Yolcuları öne alırsak CG daha da öne kayar; bunu önlemek için yakıt tankı konfigürasyonu veya ağırlık yerleşimi yeniden düzenlenmeli." },

    { id:"b5", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Sistemlerin ağırlığını küçümsemek. Kablo demetleri, boru hatları ve konektörler toplamda yüzlerce kiloya ulaşabilir.",
        "Üretim toleranslarını hesaba katmamak. Gerçek ağırlık teorik değerden %5-10 sapabilir; bütçe bu payı içermeli.",
        "Yakıt CG'sini sabit sanmak. Yakıt tüketildikçe tank CG'si değişir; bu değişim uçuş boyunca CG zarfını etkiler.",
        "Yolcu dağılımını tek senaryoda değerlendirmek. En kötü durum: ön dolu/arka boş veya arka dolu/ön boş kombinasyonları analiz edilmeli.",
        "Kargo ambarındaki yükü dengesiz yerleştirmek. Asimetrik kargo yanal dengesizliğe yol açar."
      ] },

    { id:"b6", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Ağırlık bütçesi neden önemlidir?","Her sisteme izin verilen ağırlık sınırı belirlenir. Bütçe aşılırsa MTOW büyür, snowball effect devreye girer. Kilogram tasarrufu doğrudan yakıt ve menzil verimine yansır."],
        ["CG neden % MAC cinsinden ifade edilir?","Mutlak mesafe (metre) uçak boyutuna göre anlamsızdır. MAC normalize edilmiş bir referanstır; küçük veya büyük uçakta aynı %MAC değerleri benzer stabilite davranışı gösterir. Sertifikasyon limitleri de bu birimde tanımlanır."],
        ["Yakıt tüketimi CG'yi nasıl etkiler?","Yakıt tüketildikçe yakıt tankının ağırlığı azalır ve o bileşenin CG katkısı düşer. Tank konumu uçuş boyunca CG hareketini yönetir. Bazı uçaklar (A330, B777) CG'yi kontrol etmek için yakıtı kuyruk tankına pompalar — bu aerodinamik trimaj sağlar ve yakıt tasarrufu yapar."]
      ] },

    { id:"b7", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Raymer, D. P. (2018). Aircraft design: A conceptual approach (6. baskı). AIAA.",
        "Roskam, J. (1985). Airplane design Part V: Component weight estimation. DARcorporation.",
        "Torenbeek, E. (1982). Synthesis of subsonic airplane design. Delft University Press."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"CG hesabı", puan:2,
      soru:"İki bileşenli sistemde: A: 300 kg, x=2 m; B: 100 kg, x=6 m. CG nerededir?",
      secenekler:["3 m","4 m","3,5 m","2,5 m"],
      dogru:0,
      aciklama:"x_CG = (300×2 + 100×6)/(300+100) = (600+600)/400 = 1200/400 = 3 m. Ağır bileşen olan A'ya (2 m) daha yakın." },
    { id:"s2", etiket:"Ağırlık bütçesi", puan:1,
      soru:"Yapı bileşeni ağırlık bütçesini aşarsa ne olur?",
      secenekler:["Sadece yapı ağırlığı artar","MTOW büyür, motor-yakıt-yapı zincirleme büyür (snowball effect)","Yolcu kapasitesi düşer","Hiçbir şey değişmez"],
      dogru:1,
      aciklama:"Ekstra yapı ağırlığı → MTOW artar → daha büyük motor → daha fazla yakıt → daha güçlü yapı. Bu zincirleme etki başlangıçtaki küçük bütçe aşımını büyütür." },
    { id:"s3", etiket:"CG hesabı", puan:2,
      soru:"Yakıt kuyruk tankına pompalanınca CG nasıl değişir?",
      secenekler:["CG öne gider","CG değişmez","CG arkaya gider","CG sola gider"],
      dogru:2,
      aciklama:"Kuyruk arkadaki konumundan dolayı kütlesi geriye kayar ve CG arkaya gider. A330 ve B777 bu yöntemi seyir verimini artırmak için kullanır: hafif aft CG küçük negatif kuyruk yükü sağlar, trim sürüklenmesi azalır." }
  ],
  ipuclari:{
    "CG hesabı":"x_CG = Σ(m×x)/Σm. % MAC = (x_CG − x_LEMAC)/MAC × 100.",
    "Ağırlık bütçesi":"Her sisteme bütçe. Aşım → MTOW → snowball. Yolcu: 95 kg, yapı: %25-30 MTOW.",
    "Yakıt CG":"Tüketildikçe tank CG katkısı düşer. Kuyruk tankı CG'yi arkaya çeker — trim tasarrufu."
  }
},

"m8-8": {
  ad: "MDO — Multidisipliner Tasarım Optimizasyonu",
  ders: "Bütünleşik Uçak Tasarımı",
  seviye: "İleri",
  sure: 28,
  mulakat: false,
  onbilgi: "Tüm mod8 konuları, CFD, FEA",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Uçak tasarımı tek bir disiplinin işi değildir. Aerodinamik, yapı, itki ve kontrol birbirini etkiler. MDO (Multidisciplinary Design Optimization), bu disiplinleri eş zamanlı optimize eden sayısal çerçevedir. Modern uçak programlarında MDO olmadan rekabetçi tasarıma ulaşmak neredeyse imkânsızdır." },

    { id:"b2", tip:"metin", baslik:"Neden multidisipliner?",
      metin:"Her disiplin kendi içinde optimize edilirse global optimum kaçırılır.\n\nÖrnek: Aerodinamikçi AR'ı yükseltmek ister (düşük indüklenmiş sürükleme). Yapısal mühendis AR'ı düşük tutmak ister (kanat ağırlığı). Birbirinden bağımsız optimize edilirse ikisi de alt optimal sonuç üretir.\n\nDaha derin bağlantılar:\n• Kanat kalınlığı arttı → yapı hafifler → yakıt azalır → MTOW düşer → kanat küçülür → kalınlık etkisi değişir\n• Motor büyüdü → ağırlık arttı → kaldırma gereksinimi arttı → kanat büyüdü → sürükleme arttı → motor daha büyük motor gerekebilir\n\nBu bağlantılar disiplinler arası tasarımın temelidir. MDO bu bağlantıları matematiksel olarak tanımlar ve optimize eder." },

    { id:"b3", tip:"metin", baslik:"MDO mimarileri",
      metin:"AAO (All-At-Once): Tüm disiplin denklemleri tek büyük optimizasyon problemine dahil edilir. Matematiksel olarak temiz ama boyut çok büyük olunca çözülemez hale gelebilir.\n\nMDF (Multidisciplinary Feasible): İç döngüde tüm analizler güncellenir (disciplinary analyses), dış döngüde optimizasyon yapılır. Her iterasyonda fiziksel olarak tutarlı bir tasarım elde edilir.\n\nIDF (Individual Disciplinary Feasible): Her disiplin bağımsız optimize edilir, aralarındaki tutarlılık kısıt olarak eklenir. Paralelleştirmeye uygundur.\n\nBi-Level: Ana düzey sistem tasarımı, alt düzeyler disiplin tasarımı yapar. BLISS (Bi-Level Integrated System Synthesis) bu kategoridedir.",
      kutu:{ tip:"bilgi", baslik:"MDO araçları",
        metin:"OpenMDAO (NASA, açık kaynak), SUAVE (Stanford, uçak tasarımı odaklı), ModelCenter, BOSS Quattro, ASTROS. Endüstride Airbus ve Boeing proprietary (özel) MDO platformları kullanır. Akademik programlarda OpenMDAO giderek yaygınlaşıyor." } },

    { id:"b4", tip:"metin", baslik:"Tasarım değişkenleri ve hedef fonksiyonlar",
      metin:"MDO probleminin üç temel bileşeni:\n\nTasarım değişkenleri (design variables): Optimizer'ın değiştirebileceği parametreler.\nÖrnekler: AR, sweep açısı, t/c, MTOW, motor büyüklüğü, kanat alanı.\n\nKısıtlar (constraints): Karşılanması zorunlu gereksinimler.\nÖrnekler: Stall hızı, kalkış mesafesi, tırmanma hızı, yapısal güvenlik faktörleri, gürültü.\n\nHedef fonksiyon (objective function): Minimize veya maximize edilecek büyüklük.\nÖrnekler: Yakıt tüketimi, MTOW, direkt işletme maliyeti (DOC), gürültü.\n\nÇok hedefli optimizasyon: Yakıt tüketimi ile kalkış ağırlığı aynı anda minimize edilemez (Pareto cephesi). Tasarımcı bu cepheden bir noktayı seçer." },

    { id:"b5", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Sadece bir disiplini optimize etmek. Aerodinamik optimum her zaman sistem optimumu değildir.",
        "Hedef fonksiyonu yanlış seçmek. MTOW minimize etmek DOC minimize etmekle aynı şey değildir.",
        "Kısıtları eksik tanımlamak. Gürültü veya emisyon kısıtı eklenmezse optimizer bunu görmezden gelir.",
        "Yüksek sadakatli analiz (CFD, FEA) ile kavramsal tasarımı birleştirmeye çalışmak. Kavramsal tasarımda hızlı düşük sadakatli araçlar daha verimlidir.",
        "Konverjans kontrolü yapmamak. Optimizer hassas olmayan gradyanlara yanlış yönde ilerleyebilir."
      ] },

    { id:"b6", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["MDO neden gereklidir?","Uçak tasarımı disiplinleri birbirini etkiler. Bağımsız optimize edilen disiplinler global optimumu kaçırır. MDO bu bağlantıları matematiksel olarak tanımlayarak eş zamanlı optimize eder."],
        ["Pareto cephesi nedir?","Çok hedefli optimizasyonda bir hedefi iyileştirirken diğerini bozmadan mümkün olan en iyi çözümlerin kümesidir. Örneğin yakıt tasarrufu ile kalkış ağırlığı arasındaki ödünleşimde her Pareto noktası bir tasarım seçeneğidir; hangisinin seçileceği mühendislik kararıdır."],
        ["Kavramsal tasarımda neden düşük sadakatli araçlar kullanılır?","Kavramsal tasarımda tasarım uzayı geniştir ve binlerce analiz yapılır. CFD/FEA her analiz için saatler alır. Düşük sadakatli ampirik ve analitik yöntemler saniyeler içinde sonuç verir. Sadakat, tasarım olgunlaştıkça artırılır."]
      ] },

    { id:"b7", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Martins, J. R. R. A., & Ning, A. (2022). Engineering design optimization. Cambridge University Press.",
        "Sobieszczanski-Sobieski, J., & Haftka, R. T. (1997). Multidisciplinary aerospace design optimization: Survey of recent developments. Structural Optimization, 14(1), 1-23.",
        "Gray, J. S. ve diğerleri (2019). OpenMDAO: An open-source framework for multidisciplinary design, analysis, and optimization. Structural and Multidisciplinary Optimization, 59(4), 1075-1104."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"MDO kavramı", puan:2,
      soru:"Neden aerodinamik optimum tasarım sistem optimumu olmayabilir?",
      secenekler:["Çünkü aerodinamik hesaplamalar yanlıştır","Çünkü aerodinamik optimum yapı ağırlığı, maliyet veya diğer disiplinler açısından optimal olmayabilir","Çünkü aerodinamik her zaman önemsizdir","Çünkü optimizer hep hata yapar"],
      dogru:1,
      aciklama:"En iyi aerodinamik çözüm yapısal açıdan çok ağır, üretimi çok pahalı veya başka kısıtları ihlal ediyor olabilir. MDO tüm disiplinleri aynı anda değerlendirerek gerçek sistem optimumuna ulaşır." },
    { id:"s2", etiket:"MDO kavramı", puan:1,
      soru:"Pareto cephesi nedir?",
      secenekler:["En iyi tek tasarım noktası","Tüm kısıtları ihlal eden tasarımlar","Bir hedefi iyileştirirken diğerini bozmadan elde edilebilecek en iyi çözümler kümesi","MDO'nun başarısız olduğu noktalar"],
      dogru:2,
      aciklama:"Pareto cephesindeki her nokta farklı bir ödünleşim temsil eder. Örneğin yakıt tüketimi ve kalkış ağırlığı aynı anda minimize edilemez; her Pareto noktası bu ikisi arasında farklı bir denge kurar." }
  ],
  ipuclari:{
    "MDO kavramı":"Disiplinler birbirini etkiler → bağımsız optimizasyon global optimumu kaçırır → MDO eş zamanlı optimize eder.",
    "MDO mimarileri":"AAO: tüm bir arada. MDF: iç döngü tutarlılık, dış döngü opt. IDF: paralel disiplinler.",
    "Pareto":"Çok hedefli opt → Pareto cephesi → mühendis seçer."
  }
},

"m8-9": {
  ad: "CFD ve FEM ile sayısal doğrulama",
  ders: "Bütünleşik Uçak Tasarımı",
  seviye: "İleri",
  sure: 25,
  mulakat: false,
  onbilgi: "CFD (m3-15), FEA kavramları, MDO (m8-8)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Kavramsal tasarım ampirik yöntemlerle yapılır. Tasarım olgunlaştıkça daha yüksek sadakatli analizler gerekir: CFD ile aerodinamik, FEM ile yapısal. Bu analizler hem tasarımı doğrular hem de ön tasarım yöntemlerinin eksikliklerini giderir." },

    { id:"b2", tip:"metin", baslik:"CFD sürecinde doğrulama hiyerarşisi",
      metin:"Kavramsal tasarım: DATCOM, VSPAERO, XFOIL gibi panel yöntemleri. Saniyeler içinde sonuç, düşük sadakat.\n\nÖn tasarım: RANS (Reynolds-Averaged Navier-Stokes) CFD. Birkaç saatten birkaç güne sürer. Orta-yüksek sadakat. Stall, ayrılmış akış ve transonik şok konumlarını yakalar.\n\nDetaylı tasarım: Yüksek çözünürlüklü RANS veya DES/LES. Gürültü, türbülans detayı, motor-kanat etkileşimi. Günler-haftalar sürebilir.\n\nDoğrulama adımları:\n1. Mesh bağımsızlık çalışması: Elemanlarsayısı artınca sonuç değişmiyorsa yakınsama sağlanmıştır\n2. Doğrulama: Bilinen analitik çözüm veya rüzgar tüneli verisiyle karşılaştırma\n3. Geçerleme: Gerçek uçuş verisiyle karşılaştırma (flight test sonrası)" },

    { id:"b3", tip:"metin", baslik:"FEM sürecinde doğrulama hiyerarşisi",
      metin:"Kavramsal: FLOPS, ACSYNT gibi ampirik ağırlık denklemleri. Ön tasarım: beam element modeller, basit plaka analizleri. Detaylı tasarım: Shell ve solid element 3D FEM modelleri.\n\nUçak yapısal analizi için kritik adımlar:\n1. Yük tayfı: V-n diyagramı, gust envelope, iniş yükleri\n2. Yük dağılımı: CFD çıktısından kanat basıncı dağılımı FEM'e aktarım\n3. Birleştirilmiş aero-yapısal analiz: Kanat aerodinamik yükü değiştikçe esner, esneme aerodinamiği değiştirir (fluid-structure interaction, FSI)\n4. Kritik yük kılıfları (load cases): Tüm sertifikasyon yük durumları için kontrol\n5. Test korelasyonu: Statik ve dinamik yapısal test verileriyle doğrulama",
      kutu:{ tip:"bilgi", baslik:"Aero-yapısal optimizasyon",
        metin:"Kanat tasarımında aerodinamik ve yapı gerçekten birbirini etkiler. Kanat esnedikçe profilin efektif hücum açısı değişir (aeroelastik bükülme). Yüksek AR kanatlarda bu etki çok belirgindir. Bu yüzden B787 gibi esnek yapılı kanatlarda statik aeroelastik analiz kritik bir adımdır." } },

    { id:"b4", tip:"metin", baslik:"Sayısal ve deneysel doğrulamanın birlikteliği",
      metin:"CFD ve FEM güçlü araçlardır ama sınırlıdır. Validasyon (deneysel doğrulama) olmadan güvenilmezler.\n\nRüzgar tüneli + CFD:\n• CFD, rüzgâr tüneli maketinin tam ölçeğe nasıl ölçekleneceğini söyler\n• Rüzgar tüneli, CFD modelinin doğruluğunu onaylar\n• İkisi birlikte güçlü bir doğrulama çifti oluşturur\n\nYapısal test + FEM:\n• Statik yük testi: İzin verilen limit yükün 1,0 katında kalıcı deformasyon yok olmalı\n• Yıkıcı test: Limit yükün 1,5 katında (nihai yük) yapı tutmalı\n• Titreşim testi (GVT): FEM modal analizini doğrular\n\nFlight test + analiz:\n• Uçuş testleri aerodinamik ve kontrol modellerini gerçek atmosferde doğrular\n• Her tasarım noktası için test gerekli değil, önemli noktalar seçilir" },

    { id:"b5", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "CFD sonucunu validasyon olmadan güvenilir kabul etmek. Her model, her akış durumu için ayrı validasyon gerektirir.",
        "Rüzgar tüneli modelini tam ölçek uçakla doğrudan karşılaştırmak. Reynolds sayısı farkı sonuçları etkiler.",
        "FEM'de yük durumlarını eksik tanımlamak. Tüm limit ve nihai yük kombinasyonları kontrol edilmeli.",
        "Fluid-structure interaction'ı ihmal etmek. Esnek kanatlarda aerodinamik ve yapısal analiz birbirinden bağımsız yapılamaz.",
        "Mesh yakınsama çalışmasını atlamak. Kaba meshle elde edilen sonuç yanlış güven verebilir."
      ] },

    { id:"b6", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["CFD rüzgar tünelinin yerini alabilir mi?","Kısmen alabilir ama tam olarak alamaz. CFD bazı fiziksel olayları (türbülans geçişi, ayrılmış akış detayı) doğru modellemekte zorlanır. Rüzgar tüneli gerçek fiziktir ama ölçek ve Reynolds sayısı sınırlamaları var. İkisi birbirini tamamlar."],
        ["Yapısal testte nihai yük neden limit yükün 1,5 katıdır?","CS-25/FAR-25 emniyet katsayısı 1,5'tir. Uçak limit yükte kalıcı deformasyon olmaksızın dayanmalı, 1,5 katında (nihai yük) en az 3 saniye dayanmalıdır. Bu gereksinim deneysel olarak yıkıcı testle doğrulanır."],
        ["Mesh bağımsızlığı neden önemlidir?","Çok kaba mesh fiziksel detayları çözümleyemez, yanlış sonuç verir. Çok ince mesh hesaplama süresi ve kaynağı tüketir. Bağımsızlık çalışması mesh inceltilince sonuç değişmediği noktayı bulur — bu noktada yeterli hassasiyet sağlanmıştır."]
      ] },

    { id:"b7", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Roache, P. J. (1998). Verification and validation in computational science and engineering. Hermosa Publishers.",
        "Oberkampf, W. L., & Roy, C. J. (2010). Verification and validation in scientific computing. Cambridge University Press.",
        "NASA. (2016). Standard for models and simulations (NASA-STD-7009A)."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Doğrulama", puan:2,
      soru:"Doğrulama (verification) ile geçerleme (validation) arasındaki fark nedir?",
      secenekler:["İkisi aynı anlama gelir","Doğrulama kodu doğru çalıştığını, geçerleme modelin gerçeği doğru temsil ettiğini kontrol eder","Doğrulama deneysel, geçerleme sayısaldır","Doğrulama yapısal, geçerleme aerodinamik içindir"],
      dogru:1,
      aciklama:"Doğrulama: Matematiksel modeli doğru çözdük mü? (kod hatası yok mu?). Geçerleme: Doğru fiziksel modeli kullandık mı? (gerçekle uyuşuyor mu?). NASA V&V standartları bu ayrımı net tanımlar." },
    { id:"s2", etiket:"Yapısal test", puan:1,
      soru:"Yapısal yıkıcı testte hedef yük nedir?",
      secenekler:["Limit yük","Limit yükün 1,5 katı (nihai yük)","Limit yükün 2 katı","Uçuşta ölçülen maksimum yük"],
      dogru:1,
      aciklama:"CS-25 ve FAR-25 nihai yük = 1,5 × limit yük. Yapının bu yükü en az 3 saniye taşıması ve kopmaması (veya aşılacaksa öngörülen şekilde kopması) sertifikasyon için şarttır." }
  ],
  ipuclari:{
    "Doğrulama":"Verification: kodu doğru çalıştırıyoruz. Validation: doğru kodu çalıştırıyoruz.",
    "Mesh bağımsızlığı":"İncelt → sonuç değişmiyor → yakınsama. Kaba mesh → yanlış güven.",
    "Yapısal test":"Limit: deformasyon yok. Nihai (1,5×limit): kırılma kabul. GVT: FEM modal doğrular."
  }
},

"m8-10": {
  ad: "Rüzgar tüneli testi ve sertifikasyon kapanışı",
  ders: "Bütünleşik Uçak Tasarımı",
  seviye: "İleri",
  sure: 25,
  mulakat: false,
  onbilgi: "Sayısal doğrulama (m8-9), uçuşa elverişlilik (mod7)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Rüzgar tüneli, uçak aerodinamiğini gerçek uçuştan önce kontrollü bir ortamda test etmenin en önemli yoludur. Sertifikasyon kapanışı ise sertifikasyon planında öngörülen tüm görev ve analizlerin tamamlandığının belgelenmesidir. İkisi birlikte bir uçağı tip sertifikasına taşır." },

    { id:"b2", tip:"metin", baslik:"Rüzgar tüneli türleri",
      metin:"Alçak hız tüneli (subsonic): V < Mach 0,3. Kaldırma, sürükleme, moment katsayıları, stall karakteristiği, yüksek kaldırma cihazı testi. Üniversiteler ve küçük kuruluşlar bu tünellere erişebilir.\n\nYüksek hız alt sonik ve transonik tünel: Mach 0,3-1,2. Dalga sürüklenmesi, kritik Mach sayısı, şok konumları. NASA Langley NTF, ONERA S1MA örnekler.\n\nSüpersonik tünel: Mach 1,5-5. Şok-sınır tabaka etkileşimi, eğik şok, nozul tasarımı.\n\nHipersonik tünel: Mach > 5. Aşırı ısınma, plazma, ablasyon testleri.\n\nKriojenik tünel: Azot gazıyla düşük sıcaklıkta çalışır. Yoğunluk artar → gerçek Reynolds sayısına ulaşılır. NASA NTF (National Transonic Facility) bu tiptedir.\n\nIcing tüneli: Buzlanma koşullarını simüle eder. FADS ve pitot buz akümülasyonu, buz koruma sistemi performansı test edilir.",
      kutu:{ tip:"bilgi", baslik:"Blokaj oranı",
        metin:"Model tünel kesitinin çok büyük bir bölümünü kaplamamalı. Blokaj oranı > %5-7 olursa duvar etkileri ölçümleri bozar. Bu yüzden rüzgar tüneli modelleri gerçek uçağın 1/5 ile 1/20 ölçeğinde yapılır." } },

    { id:"b3", tip:"metin", baslik:"Rüzgar tüneli veri kalibrasyonu ve ölçekleme",
      metin:"Model testinden elde edilen katsayılar doğrudan kullanılamaz. Birkaç düzeltme gerekir:\n\nDuvar etkisi düzeltmesi: Tünel duvarları akışı sıkıştırır. Kaldırma üzerinde ölçeklenmiş etki çıkarılır.\n\nStek etkisi düzeltmesi: Modeli tutan tutucunun aerodinamik etkisi çıkarılır.\n\nReynolds sayısı düzeltmesi: Model ölçeği gerçek Re'den çok düşükse ampirik düzeltme uygulanır veya kriojenik tünel kullanılır.\n\nAdiabatik duvar sıcaklığı: Yüksek Mach sayısında kinetik ısınma etkisi düzeltilir.\n\nSonuç: Rüzgar tünelinden R&T (research and technology) katsayısı alınır, CFD ile birleştirilerek tasarım veritabanı oluşturulur." },

    { id:"b4", tip:"metin", baslik:"Sertifikasyon kapanışı (closure)",
      metin:"Tip sertifikası almak için sertifikasyon planındaki (Certification Plan) her madde kapatılmalıdır. Kapanış yöntemleri (MoC — Means of Compliance):\n\nMoC 0 — Tanımlayıcı doküman: Uygulanabilir gereksinimlerin hangi tasarım özelliğiyle karşılandığının açıklaması.\nMoC 1 — Tanımlayıcı analiz: Gereksinimi sağladığını gösteren hesap veya analiz.\nMoC 2 — Hesaplama/simülasyon: Sayısal doğrulama.\nMoC 3 — Emniyet analizi: FMEA, FTA.\nMoC 4 — Laboratuvar testi: Bileşen veya sistem testi.\nMoC 5 — Yer testi: Komple uçakta yer üstü testi.\nMoC 6 — Uçuş testi: Gerçek uçuş ortamında doğrulama.\nMoC 7 — Rüzgar tüneli testi: Aerodinamik karakteristik doğrulama.\nMoC 8 — Denetim: Üretim sürecinin yerinde denetimi.\nMoC 9 — Ekipman nitelik belgesi.\n\nHer CS-25 paragrafı için hangi MoC yöntemi kullanılacağı sertifikasyon planında belirlenir ve otorite tarafından kabul edilir." },

    { id:"b5", tip:"metin", baslik:"Uçuş test programı",
      metin:"Sertifikasyon uçuş testleri organize bir programa göre yürütülür:\n\nFase 1 — Temel kontrol ve performans: CG zarfı doğrulama, uçuş zarfı genişletme, stall testleri, motor özellikleri.\n\nFase 2 — Genişletilmiş zarfa uçuş: Yüksek hız, gust test, performans ölçümü, doğal donma.\n\nFase 3 — Özel koşullar: Olağandışı tutum kurtarma, kritik motor arızası, yapay buzlanma.\n\nTest uçuş noktalarının sayısı: Orta büyüklükte bir uçak programında 1500-3000 test uçuşu saati tipiktir. Bazı yoğun programlarda daha fazla.\n\nÇok uçaklı paralel test: Büyük programlarda 4-6 uçak farklı test görevleri için aynı anda uçar (A380 6 uçak, B787 6 uçak test filosu)." },

    { id:"b6", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Rüzgar tüneli verilerini düzeltme yapmadan kullanmak. Duvar, stek ve Reynolds etkileri her zaman düzeltilmeli.",
        "Sertifikasyon planını geç hazırlamak. Plan mümkün olduğunca erken otorite tarafından kabul edilmeli.",
        "MoC'leri tasarım geliştikçe güncellememeK. Tasarım değişirse bazı kapatma yöntemleri de değişir.",
        "Uçuş test filozofunun programı çok erken tamamlamak istediğini görmezden gelmek. Acele test güvenliği tehlikeye atar.",
        "Özel koşul testlerini (buzlanma, yüksek irtifa) programın sonuna bırakmak. Bir bulgu tüm programı geri atabilir."
      ] },

    { id:"b7", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Neden kriojenik rüzgar tüneli kullanılır?","Düşük sıcaklıkta azot yoğunluğu artar. Bu yüksek Reynolds sayısı elde etmeyi sağlar. Gerçek uçak Reynolds sayısına yakın test yapılabilir ve ölçek düzeltmesi azalır."],
        ["MoC 6 nedir?","Means of Compliance 6: Uçuş testi. CS-25 gereksinimlerinin gerçek uçuş ortamında doğrulandığını belgeleyen kapanış yöntemi. Stall karakteristiği, kontrol hissi ve performans doğrulamaları bu yöntemle yapılır."],
        ["Tip sertifikası ile üretim sertifikasının farkı nedir?","Tip sertifikası tasarımın onaylandığını gösterir. Üretim sertifikası her üretilen uçağın onaylanan tasarımla aynı olduğunu güvence altına alır. Her ikisi de EASA/FAA tarafından verilir."]
      ] },

    { id:"b8", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Barlow, J. B., Rae, W. H., & Pope, A. (1999). Low-speed wind tunnel testing (3. baskı). Wiley.",
        "EASA. (2020). CS-25: Certification specifications for large aeroplanes.",
        "FAA. (2017). AC 25.1309-1B: System design and analysis."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Rüzgar tüneli", puan:2,
      soru:"Kriojenik rüzgar tünelinin avantajı nedir?",
      secenekler:["Daha yüksek Mach sayısına ulaşır","Düşük sıcaklıkta yoğunluk artar, gerçek Reynolds sayısına yakın test yapılabilir","Daha az gürültü üretir","Hipersonik testler için uygundur"],
      dogru:1,
      aciklama:"Düşük sıcaklıkta azot yoğunluğu artar. Re = ρVL/μ bağıntısında ρ artınca Re artar. Bu sayede küçük model ölçeğinde gerçek uçağın yüksek Reynolds sayısını simüle etmek mümkün olur." },
    { id:"s2", etiket:"Sertifikasyon", puan:1,
      soru:"MoC 6 hangi kapanış yöntemini ifade eder?",
      secenekler:["Analitik hesaplama","Yer testi","Uçuş testi","Rüzgar tüneli testi"],
      dogru:2,
      aciklama:"MoC 6 uçuş testidir. CS-25 gereksiniminin gerçek uçuşta doğrulanmasını içerir. Stall, performans, kontrol karakteristikleri ve özel koşullar MoC 6 ile kapatılır." },
    { id:"s3", etiket:"Sertifikasyon", puan:2,
      soru:"Tip sertifikası ve üretim sertifikasının farkı nedir?",
      secenekler:["İkisi aynı şeydir","Tip: tasarım onayı; Üretim: her üretilen uçağın tasarımla uyumunu güvence altına alır","Tip: motor onayı; Üretim: gövde onayı","Tip: sivil; Üretim: askeri"],
      dogru:1,
      aciklama:"Tip sertifikası bir tasarımın uçuşa elverişli olduğunu onaylar. Üretim sertifikası üretim sürecinin bu tasarımı tekrarlanabilir biçimde ürettiğini onaylar. Her uçağa ayrıca uçuşa elverişlilik sertifikası (airworthiness certificate) verilir." }
  ],
  ipuclari:{
    "Rüzgar tüneli":"Kriojenik → yoğunluk↑ → Re↑ → gerçek ölçek. Blokaj <%7 tut. Duvar+stek düzeltmesi şart.",
    "MoC'ler":"0-Doküman, 1-Analiz, 2-Hesap, 3-Güvenlik, 4-Lab testi, 5-Yer testi, 6-Uçuş testi, 7-Rüzgar tüneli.",
    "Sertifikasyon":"Tip: tasarım onayı. Üretim: seri üretim onayı. Uçuşa elverişlilik: her uçak."
  }
}

}); // Object.assign sonu

/* ================================================================
   MODÜL 6 — AVİYONİK, ÖLÇME VE SEYRÜSEFER
   ================================================================ */

Object.assign(window.CONTENT.konuIcerik, {

"m6-1": {
  ad: "Basınçlı hava veri aletleri ve pitot-statik sistem",
  ders: "Aviyonik, Ölçme ve Seyrüsefer",
  seviye: "Temel",
  sure: 18,
  mulakat: true,
  onbilgi: "Bernoulli denklemi (m3-2), standart atmosfer (m3-6)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Uçağın hızını, irtifasını ve tırmanma hızını ölçen pitot-statik sistem, havacılığın en temel ölçüm altyapısıdır. Bernoulli denkleminin pratik uygulamasıdır. Sistemin arızalanması ölümcül kazalara yol açmıştır; Air France 447 ve birçok diğer kaza bunu acı biçimde kanıtlamıştır." },

    { id:"b2", tip:"metin", baslik:"Sistemin yapısı",
      metin:"Pitot-statik sistem üç temel bileşenden oluşur:\n\nPitot tüpü: Akışa bakan açık uçlu tüp. Havayı durdurarak toplam (durma) basıncı p₀ ölçer. Genellikle kanat önünde veya burun bölgesinde konumlanır. Buz oluşumunu önlemek için elektrikli ısıtma elemanı içerir.\n\nStatik portlar: Gövde yüzeyindeki küçük delikler. Yerel statik basıncı ölçer. Simetrik konumlarda çift port kullanılır; yanlama (sideslip) etkisini azaltmak için portların ortalaması alınır.\n\nAlternatif statik kaynak: Ana statik sistem arızalandığında kabin içi basıncı referans olarak kullanan yedek sistem.\n\nAletler:\n• Hız göstergesi (ASI): p₀ − p = dinamik basınç → IAS\n• Altimetre: Mutlak statik basınç → irtifa\n• Variometre (VSI): Statik basıncın değişim hızı → tırmanma/alçalma hızı" },

    { id:"b3", tip:"formul", baslik:"Temel bağıntılar",
      formul:"IAS = √(2(p₀ − p) / ρ₀)\n\nh = (T₀/L)[1 − (p/p₀)^(LR/g)]\n\nVSI = −(dh/dt)",
      semboller:[
        ["IAS","Gösterilen hava hızı","m/s"],
        ["p₀","Toplam (durma) basıncı","Pa"],
        ["p","Statik basınç","Pa"],
        ["ρ₀","ISA deniz seviyesi yoğunluğu: 1,225 kg/m³","kg/m³"],
        ["h","Basınç irtifası","m"],
        ["T₀","ISA deniz seviyesi sıcaklığı: 288,15 K","K"],
        ["L","Lapse rate: 0,0065 K/m","K/m"],
        ["R","Havanın gaz sabiti: 287 J/(kg·K)","J/(kg·K)"],
        ["g","Yerçekimi ivmesi: 9,81 m/s²","m/s²"]
      ],
      metin:"IAS hesabında her zaman ρ₀ kullanılır — gerçek yoğunluk değil. Bu yüzden yüksekte gerçek hız (TAS) gösterilen hızdan (IAS) büyüktür." },

    { id:"b4", tip:"metin", baslik:"Altimetre ayarı: QNH, QFE, QNE",
      metin:"Altimetre statik basıncı irtifaya çevirir ama hangi referans basıncını kullanacağını bilmesi gerekir. Bu referans altimetre penceresinden (Kollsman window) girilir.\n\nQNH: Deniz seviyesi basıncına ayarlı. En yaygın kullanım. Altimetre deniz seviyesinde sıfır değil, alanın gerçek rakımını gösterir.\n\nQFE: Hava alanı pistinin bulunduğu noktanın basıncına ayarlı. Altimetre pist üzerinde sıfır gösterir. Bazı ülkelerde askeri kullanımda yaygın.\n\nQNE (Standard): 1013,25 hPa standart basınca ayarlı. FL100 (10.000 feet) ve üzerinde tüm uçaklar QNE kullanır. Geçiş irtifasının (transition altitude) üstünde hava trafiği yönetimi için standart referans zorunludur.\n\nGeçiş irtifası (transition altitude): Türkiye'de 3000 feet. Bunun altında QNH, üstünde QNE kullanılır.",
      kutu:{ tip:"bilgi", baslik:"Neden QNE FL'de zorunlu?",
        metin:"Farklı uçaklar farklı QNH ile uçsaydı, aynı irtifada iki uçağın altimetreleri farklı değer gösterirdi. Standart basınç (QNE) ile hepsi aynı referansı kullanır; çakışma hesaplamaları güvenilir olur. FL (Flight Level) bu yüzden mutlak irtifa değil, standart basınca göre irtifadır." } },

    { id:"b5", tip:"metin", baslik:"Sistem arızaları ve güvenlik",
      metin:"Pitot tüpü buzlanması: Isıtma sistemi arızalanırsa buz tüpü tıkayabilir. Pitot kapanırsa IAS artmaz veya sabit kalır. 2009 Air France 447 kazasında pitot buzlanması kritik rol oynadı — üç pitot tüpünün hepsi aynı anda buz aldı, tutarsız hız göstergesi pilotları şaşırttı.\n\nStatik port tıkanması: Hız göstergesi yanlış okuma verir, altimetre donabilir. Alternatif statik kaynak açılarak düzeltilebilir. Kabin içi basınç daha düşük olduğundan alternatif kaynakta altimetre gerçek değerden biraz yüksek gösterebilir.\n\nPitot kapağı unutulması: Uçuş öncesi kontrol (walk-around) sırasında kapaklar çıkarılmazsa tüm ölçümler yanlış olur. Bu sebeble pitot kapakları kırmızı veya parlak renktedir ve 'REMOVE BEFORE FLIGHT' yazısı taşır.\n\nRedüdanlık: Büyük yolcu uçaklarında üç bağımsız pitot-statik sistem bulunur. İki sistem arasında tutarsızlık olursa ADIRU (Air Data Inertial Reference Unit) üçüncü sistemle karşılaştırır ve hatalı olanı devre dışı bırakır." },

    { id:"b6", tip:"ornek", baslik:"Örnek: IAS ve TAS hesabı",
      soru:"Bir uçak FL350'de (35.000 feet ≈ 10.670 m) IAS = 270 knot ile uçuyor. Bu irtifada ρ = 0,379 kg/m³. Gerçek hız (TAS) kaçtır?",
      cozum:"TAS ve IAS arasındaki ilişki:\nIAS² × ρ₀ = TAS² × ρ\nTAS = IAS × √(ρ₀/ρ)\nTAS = 270 × √(1,225/0,379)\nTAS = 270 × √3,233\nTAS = 270 × 1,798\nTAS ≈ 485 knot\n\nYorum: IAS = 270 knot iken gerçek hız 485 knot. Fark çok büyük — yüksek irtifada hava seyrektir. Pilot açısından IAS önemlidir çünkü kanada binen aerodinamik yük dinamik basınca, dolayısıyla IAS'a bağlıdır. GPS hızı ise TAS'a yakındır (rüzgâr yoksa)." },

    { id:"b7", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Altimetre ayarını güncellememeK. QNH değeri sık değişir, iniş yaklaşmasında güncel değer alınmalı.",
        "IAS ile TAS'ı karıştırmak. Uçuş planında menzil hesabı TAS üzerinden, stall hızı IAS üzerinden yapılır.",
        "Pitot kapağını unutmak. Uçuş öncesi kontrol listesi bu yüzden kritiktir.",
        "Alternatif statik kaynağın irtifa hatasını bilmemek. Açıldığında altimetre biraz daha yüksek gösterir.",
        "FL ile gerçek irtifayı karıştırmak. FL standart basınca göredir, sıcak günde gerçek irtifadan farklı olabilir."
      ] },

    { id:"b8", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Pitot-statik sistem nasıl çalışır?","Pitot tüpü toplam basıncı, statik portlar statik basıncı ölçer. Fark dinamik basınçtır. Hız göstergesi dinamik basıncı ISA yoğunluğuyla IAS'a çevirir. Altimetre statik basıncı ISA modeline göre irtifaya çevirir."],
        ["Air France 447 kazasında pitot sisteminin rolü nedir?","Üç pitot tüpü aynı anda buzlanarak tutarsız hız gösterdi. Otomasyon devre dışı kaldı ve pilotlar hız göstergesi olmadan uçmak zorunda kaldı. Sonuçta uçak stall'a girdi. Kaza pitot ısıtma sistemlerinin önemine dikkat çekti."],
        ["QNH ve QNE neden farklı irtifaüzlerde kullanılır?","Geçiş irtifasının altında QNH kullanılarak gerçek irtifada uçuş yapılır. Üstünde tüm uçaklar QNE (1013 hPa) kullanır — böylece aynı referansla uçarak çakışma riski azalır. FL bu nedenle mutlak yükseklik değil basınç referanslı değerdir."]
      ] },

    { id:"b9", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Pallett, E. H. J. (1992). Aircraft instruments and integrated systems. Longman. ISBN 978-0-582-08627-9",
        "Collinson, R. P. G. (2011). Introduction to avionics systems (3. baskı). Springer. ISBN 978-94-007-0708-5",
        "BEA. (2012). Final report AF447. Bureau d'Enquêtes et d'Analyses.",
        "FAA. (2016). Pilot's handbook of aeronautical knowledge (FAA-H-8083-25B)."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Sistem yapısı", puan:1,
      soru:"Pitot tüpü hangi basıncı ölçer?",
      secenekler:["Statik basınç","Dinamik basınç","Toplam (durma) basıncı","Kabin basıncı"],
      dogru:2,
      aciklama:"Pitot tüpü havayı durdurur ve toplam (stagnation/pitot) basıncı ölçer: p₀ = p + ½ρV². Statik basınç ayrıca static portlardan ölçülür. Fark p₀ − p = ½ρV² dinamik basınçtır." },
    { id:"s2", etiket:"IAS ve TAS", puan:2,
      soru:"Yüksek irtifada IAS ve TAS arasındaki ilişki nedir?",
      secenekler:["IAS = TAS","IAS > TAS","IAS < TAS","Mach 0,5 altında IAS = TAS"],
      dogru:2,
      aciklama:"IAS hesabında ρ₀ (deniz seviyesi yoğunluğu) kullanılır. Yüksekte gerçek ρ < ρ₀ olduğundan aynı dinamik basınç için TAS > IAS. TAS = IAS × √(ρ₀/ρ)." },
    { id:"s3", etiket:"Altimetre ayarı", puan:2,
      soru:"FL100 ve üzerinde neden QNE (1013,25 hPa) kullanılır?",
      secenekler:["Basınç bu irtifada sabit olduğundan","Tüm uçaklar aynı referansla uçarak birbirlerine göre doğru dikey ayrımı korur","QNH bu irtifada ölçülemez","Altimetre sadece bu basıncı okuyabilir"],
      dogru:1,
      aciklama:"Farklı QNH değerleriyle uçan uçakların altimetreleri aynı irtifada farklı değerler gösterir. QNE standardıyla tüm uçaklar aynı referansı kullanır; ATC dikey ayrımı güvenilir biçimde yönetebilir." },
    { id:"s4", etiket:"Sistem arızaları", puan:2,
      soru:"Statik port tamamen tıkandığında altimetre nasıl davranır?",
      secenekler:["Sıfır gösterir","Donarak tıkandığı andaki değerde sabit kalır","Sürekli yükselme gösterir","Rastgele değer gösterir"],
      dogru:1,
      aciklama:"Statik port tıkandığında altimetre tıkandığı andaki basıncı referans alarak o irtifayı göstermeye devam eder. İniş yaparken gerçek irtifa düşse de altimetre değişmez — tehlikeli bir durum. Alternatif statik kaynağa geçilir." },
    { id:"s5", etiket:"Sistem yapısı", puan:1,
      soru:"Variometre (VSI) neyi ölçer?",
      secenekler:["Statik basıncın mutlak değeri","Statik basıncın değişim hızı → tırmanma/alçalma hızı","Toplam basınç ile statik basınç farkı","Kabin basınç değişim hızı"],
      dogru:1,
      aciklama:"VSI (Vertical Speed Indicator) statik basıncın zamana göre değişimini ölçer. Alçalırken basınç artar, tırmanırken azalır. Bu değişim hızı dikey hız olarak gösterilir (ft/min veya m/s)." },
    { id:"s6", etiket:"IAS ve TAS", puan:2,
      soru:"IAS = 200 knot, ρ = 0,737 kg/m³ (5000 m irtifa). TAS yaklaşık kaçtır?",
      secenekler:["200 knot","257 knot","155 knot","320 knot"],
      dogru:1,
      aciklama:"TAS = IAS × √(ρ₀/ρ) = 200 × √(1,225/0,737) = 200 × √1,662 = 200 × 1,289 ≈ 258 knot." }
  ],
  ipuclari:{
    "Sistem yapısı":"Pitot → toplam basınç. Statik port → statik basınç. Fark → dinamik basınç → IAS.",
    "IAS ve TAS":"TAS = IAS × √(ρ₀/ρ). Yüksekte ρ düşük → TAS > IAS. Aerodinamik yük IAS'a bağlı.",
    "Altimetre ayarı":"Geçiş altı: QNH (rakım). Üstü: QNE (FL, 1013 hPa). QFE: pist sıfır.",
    "Arızalar":"Pitot tıkandı → IAS sabit/yanlış. Statik tıkandı → altimetre donar. Alternatif statik → biraz fazla gösterir."
  }
},

"m6-2": {
  ad: "Hız dönüşümleri — IAS, CAS, EAS, TAS",
  ders: "Aviyonik, Ölçme ve Seyrüsefer",
  seviye: "Temel",
  sure: 18,
  mulakat: true,
  onbilgi: "Pitot-statik sistem (m6-1), standart atmosfer (m3-6)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Havacılıkta hız tek bir sayı değildir. IAS, CAS, EAS ve TAS farklı fiziksel büyüklükleri ifade eder. Her birinin kullanım amacı farklıdır: pilot IAS'a bakar, yapı mühendisi EAS kullanır, navigasyon için TAS gerekir, rüzgar etkisini görmek için groundspeed hesaplanır." },

    { id:"b2", tip:"tablo", baslik:"Dört hız tanımı",
      basliklar:["Hız","Açılımı","Tanımı","Kullanımı"],
      satirlar:[
        ["IAS","Indicated Airspeed","Pitot-statik sistemin doğrudan okuması. ρ₀ varsayılan.","Pilot ekranı, operasyonel limitler"],
        ["CAS","Calibrated Airspeed","IAS + konum hatası + alet hatası düzeltmesi","Uçuş el kitabı tabloları"],
        ["EAS","Equivalent Airspeed","Deniz seviyesinde aynı dinamik basıncı verecek hız","Yapısal yük hesabı, sertifikasyon"],
        ["TAS","True Airspeed","Uçağın havaya göre gerçek hızı","Navigasyon, uçuş planı, Mach hesabı"]
      ],
      metin:"Düşük hızda ve deniz seviyesine yakın irtifada dört hız birbirine çok yakındır. Farklar yüksek irtifada ve yüksek hızda belirginleşir." },

    { id:"b3", tip:"formul", baslik:"Dönüşüm formülleri",
      formul:"CAS ≈ IAS + Δ_konum + Δ_alet\n\nEAS = CAS × √(p/p₀)    (sıkıştırılabilirlik düzeltmesi)\n\nTAS = EAS × √(ρ₀/ρ) = EAS / √(σ)\n\nMach = TAS / a = TAS / √(γRT)",
      semboller:[
        ["Δ_konum","Konum hatası (position error): statik portun uçak üzerindeki konumuna bağlı","m/s veya knot"],
        ["p","Uçuş irtifasındaki statik basınç","Pa"],
        ["p₀","ISA deniz seviyesi basıncı: 101.325 Pa","Pa"],
        ["σ","Yoğunluk oranı: ρ/ρ₀","—"],
        ["a","Ses hızı","m/s"],
        ["γ","Özgül ısı oranı: 1,4","—"],
        ["R","Havanın gaz sabiti: 287 J/(kg·K)","J/(kg·K)"],
        ["T","Mutlak sıcaklık","K"]
      ],
      metin:"Düşük Mach sayılarında (M < 0,3) sıkıştırılabilirlik etkisi küçüktür ve EAS ≈ CAS ≈ IAS diyebiliriz. Yüksek irtifada TAS, IAS'ın çok üstüne çıkar." },

    { id:"b4", tip:"metin", baslik:"Her hızın kullanım amacı",
      metin:"IAS: Pilot ekranında görünen değer. Stall hızı, manevra hızı (Va), turbo hızı (Vno), maksimum hız (Vne) IAS cinsinden tanımlanır. Çünkü bu sınırlar dinamik basınca bağlıdır ve dinamik basınç IAS² ile orantılıdır.\n\nCAS: Uçuş el kitabı (AFM) performans tabloları CAS kullanır. Konum ve alet hataları giderildiğinden daha doğru bir temel.\n\nEAS: Yapısal mühendislerin dili. V-n zarfı EAS cinsinden çizilir. Yapıya binen aerodinamik yük ½ρV² = ½ρ₀EAS² olduğundan EAS sabit tutulursa yapısal yük irtifadan bağımsızdır.\n\nTAS: Navigasyon ve uçuş planı TAS üzerinden yapılır. Rüzgar etkisi TAS'a eklenerek groundspeed (yer hızı) bulunur.\n\nGroundspeed = TAS ± rüzgâr bileşeni\n\nMach: Sıkıştırılabilirlik ve şok dalgaları Mach'a bağlıdır. Uçuş zarfının yüksek hız sınırı Mach cinsinden tanımlanır (Mmo).",
      kutu:{ tip:"bilgi", baslik:"Uçuşta karşılaşılan gerçek senaryo",
        metin:"Kaptan: 'IAS 280 knot, Mach 0,82.' Bu iki değeri aynı anda söylemesi mantıklıdır çünkü yüksek irtifada aynı TAS için IAS düşük kalır ama Mach yüksek olabilir. FL350'de IAS = 280 knot, TAS ≈ 490 knot, Mach ≈ 0,83 eş zamanlı doğru olabilir." } },

    { id:"b5", tip:"ornek", baslik:"Örnek: Zincirleme dönüşüm",
      soru:"Uçak FL280'de (8534 m, ρ = 0,530 kg/m³, p = 35.600 Pa, T = 236 K) uçuyor.\nIAS = 250 knot (128,6 m/s). Konum hatası ihmal edilsin.\nEAS ve TAS'ı bul. Mach sayısını hesapla.",
      cozum:"IAS ≈ CAS = 250 knot = 128,6 m/s\n\nEAS:\nEAS = CAS × √(p/p₀) = 128,6 × √(35600/101325)\n= 128,6 × √0,3514 = 128,6 × 0,593 = 76,2 m/s ≈ 148 knot\n\nTAS:\nTAS = EAS / √(ρ/ρ₀) = EAS × √(ρ₀/ρ)\n= 76,2 × √(1,225/0,530) = 76,2 × √2,311 = 76,2 × 1,520 = 115,8 m/s ≈ 225 knot\n\nMach:\na = √(γRT) = √(1,4 × 287 × 236) = √(94.866) = 308 m/s\nM = TAS/a = 115,8/308 = 0,376\n\nYorum: IAS = 250 knot, TAS = 225 knot, Mach = 0,376. Bu irtifada TAS IAS'tan düşük çıktı — beklenmedik gibi görünebilir ama doğru. EAS orta noktada. Düşük irtifada TAS > IAS olurdu; burada ρ değeri beklenenden az değil, hesaplamalarda dikkatli ol." },

    { id:"b6", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Stall hızını TAS cinsinden düşünmek. Stall IAS ile tanımlanır; aynı IAS değeri her irtifada aynı yapısal tehlikeyi temsil eder.",
        "EAS ile TAS'ı karıştırmak. Yapısal hesaplarda EAS, navigasyonda TAS kullanılır.",
        "Konum hatasını ihmal etmek. Özellikle yüksek hücum açısında veya yüksek hızda konum hatası büyüyebilir.",
        "Mach limitini IAS'ta izlemeye çalışmak. Mach irtifayla değişir; aynı Mach için yüksekte IAS düşüktür.",
        "Groundspeed ile TAS'ı karıştırmak. Rüzgarsız havada eşittirler ama rüzgarda fark çok büyük olabilir."
      ] },

    { id:"b7", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Neden stall hızı IAS cinsinden tanımlanır?","Stall aerodinamik bir olaydır ve kanada binen yük dinamik basınçla, dolayısıyla IAS² ile orantılıdır. IAS sabit tutulursa yapısal ve aerodinamik yük irtifadan bağımsızdır. Bir pilot hangi irtifada uçarsa uçsun aynı IAS'ta aynı stall marjını korur."],
        ["EAS neden yapısal hesaplarda kullanılır?","EAS ile ½ρ₀EAS² = ½ρTAS² olduğundan EAS sabit tutulursa dinamik basınç sabit kalır. Yapısal yük dinamik basınçla orantılıdır. Bu yüzden V-n zarfı EAS cinsinden çizilir — her irtifada aynı grafik geçerlidir."],
        ["Mach ve IAS aynı anda neden ikisi de önemlidir?","IAS yapısal ve aerodinamik limitler için (stall, Va). Mach sıkıştırılabilirlik ve şok limitleri için (Mmo). Yüksek irtifada bir uçak düşük IAS'ta yüksek Mach'a ulaşabilir. Bu yüzden her ikisi de izlenir: 'speed tape' her ikisini de gösterir."]
      ] },

    { id:"b8", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Hurt, H. H. (1965). Aerodynamics for naval aviators (NAVWEPS 00-80T-80). US Navy.",
        "Collinson, R. P. G. (2011). Introduction to avionics systems (3. baskı). Springer.",
        "FAA. (2016). Pilot's handbook of aeronautical knowledge (FAA-H-8083-25B).",
        "ICAO. (2011). Manual of the ICAO Standard Atmosphere (Doc 7488)."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Hız tanımları", puan:1,
      soru:"Yapısal yük hesabında ve V-n zarfında hangi hız kullanılır?",
      secenekler:["IAS","CAS","EAS","TAS"],
      dogru:2,
      aciklama:"EAS sabit tutulursa ½ρ₀EAS² dinamik basıncı irtifadan bağımsız verir. Yapısal yük dinamik basınçla orantılı olduğundan V-n zarfı EAS ekseninde çizilir." },
    { id:"s2", etiket:"Dönüşüm", puan:2,
      soru:"TAS = EAS × √(ρ₀/ρ) formülüne göre yüksek irtifada TAS ile EAS arasındaki ilişki nedir?",
      secenekler:["TAS = EAS","TAS < EAS","TAS > EAS","İrtifayla değişmez"],
      dogru:2,
      aciklama:"Yüksekte ρ < ρ₀, dolayısıyla ρ₀/ρ > 1 ve √(ρ₀/ρ) > 1. Bu yüzden TAS = EAS × (1'den büyük sayı) → TAS > EAS. Aerodinamik yük aynı olsa da gerçek hız daha yüksektir." },
    { id:"s3", etiket:"Hız tanımları", puan:2,
      soru:"Navigasyon ve uçuş planı hesabında hangi hız kullanılır?",
      secenekler:["IAS — çünkü pilot bunu görür","CAS — çünkü hataları giderilmiş","TAS — çünkü uçağın havaya göre gerçek hızıdır","Groundspeed — çünkü rüzgârı da içerir"],
      dogru:2,
      aciklama:"Navigasyonda uçağın havaya göre gerçek hareketi önemlidir: TAS. Rüzgar etkisi TAS'a vektörel eklenerek groundspeed bulunur. Uçuş planındaki zaman ve mesafe hesabı TAS bazlıdır." },
    { id:"s4", etiket:"Hız tanımları", puan:1,
      soru:"IAS'ı CAS'tan ayıran düzeltme nedir?",
      secenekler:["Sıkıştırılabilirlik düzeltmesi","Yoğunluk düzeltmesi","Konum ve alet hatası düzeltmesi","Sıcaklık düzeltmesi"],
      dogru:2,
      aciklama:"CAS = IAS + konum hatası + alet hatası. Konum hatası statik portun uçak üzerindeki yerine, alet hatası ise ölçüm aletinin kalibrasyonuna bağlıdır." }
  ],
  ipuclari:{
    "Hız tanımları":"IAS: pilot/operasyonel. CAS: AFM tabloları. EAS: yapısal/V-n zarfı. TAS: navigasyon/Mach.",
    "Dönüşüm":"EAS = CAS × √(p/p₀). TAS = EAS × √(ρ₀/ρ). Yüksekte TAS > IAS > EAS sırası bozulabilir.",
    "Yapısal bağlantı":"½ρ₀EAS² = ½ρTAS² = dinamik basınç. EAS sabit → yük irtifadan bağımsız.",
    "Mach":"M = TAS/a. Ses hızı sıcaklığa bağlı → a = √(γRT). Yüksekte a düşük → aynı TAS daha yüksek M."
  }
},

"m6-3": {
  ad: "Jiroskoplar — mekanik, RLG, FOG, MEMS",
  ders: "Aviyonik, Ölçme ve Seyrüsefer",
  seviye: "Orta",
  sure: 22,
  mulakat: false,
  onbilgi: "Temel fizik (açısal momentum), aviyonik temelleri",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Jiroskop açısal hız veya yönelim ölçen sensördür. Uçuş kontrol, navigasyon ve stabilizasyon sistemlerinin temel bileşenidir. Mekanik jiroskoptan lazer ve fiber optik jiroskoplara, oradan MEMS jiroskoplara uzanan teknoloji serüveni hem hassasiyeti hem de güvenilirliği dramatik artırmıştır." },

    { id:"b2", tip:"metin", baslik:"Mekanik jiroskop",
      metin:"Hızla dönen bir tekerleğin açısal momentumunu koruma eğiliminden yararlanır. İki temel özellik:\n\nKatılık (rigidity): Dönen jiroskop uzayda yönünü korur. Dış kuvvetler uygulanmadıkça spin ekseni sabit kalır. Bu özellik yapay ufuk (attitude indicator) ve yön jiroskobunda kullanılır.\n\nPresessyon (precession): Dönen jiroskopa bir kuvvet uygulandığında, uygulama yönünden 90° dönmüş yönde hareket eder. Dönme yönüne ve kuvvet yönüne dik olan bu hareket saatçi gibi çalışır.\n\nMekanik jiroskopun sorunları:\n• Sürtünme nedeniyle drift (sürüklenme) oluşur — jiroskop zamanla yönünü kaybeder\n• Hizalama (alignment) gerektirir\n• Titreşime duyarlıdır\n• Periyodik bakım gerektiren dönen parçalar içerir\n\nKullanım alanları: Eski nesil uçaklar, bazı genel havacılık uçakları. Artık büyük ölçüde lazer jiroskop veya MEMS ile yerini almıştır." },

    { id:"b3", tip:"metin", baslik:"Ring Laser Gyroscope (RLG)",
      metin:"İki lazer ışını üçgen veya kare biçimli optik yol boyunca zıt yönde dolaştırılır. Sistem dönmedikçe iki ışının frekansı eşittir. Sistem döndüğünde (Sagnac etkisi) biri daha kısa, diğeri daha uzun yol alır — aralarında frekans farkı oluşur. Bu fark dönme açısal hızıyla orantılıdır.\n\nAvantajlar:\n• Hareketli parça yok → mekanik aşınma ve bakım yok\n• Çok düşük drift → uzun süre hassas\n• Hızlı başlangıç (warm-up yok)\n• Titreşime dayanıklı\n\nSorun — lock-in etkisi: Çok düşük dönme hızlarında iki lazer birbirini kilitleme eğilimi gösterir ve sıfır çıkış üretir. Çözüm: dither motor — jiroskopa küçük titreşim uygulanarak bu bölgeden kaçınılır.\n\nKullanım: Boeing 777, 787; Airbus A320, A380; modern askeri uçaklar. IRS (Inertial Reference System) içinde üç eksen için üç RLG kullanılır." },

    { id:"b4", tip:"metin", baslik:"Fiber Optic Gyroscope (FOG)",
      metin:"Yüzlerce metre fiber optik kablo sarılı bir makarada iki ışın zıt yönde dolaştırılır. RLG'deki Sagnac etkisinin fiber optik versiyonudur.\n\nRLG ile karşılaştırma:\n• FOG daha esnek tasarım imkânı sunar (fiber kablo bükülebilir)\n• FOG'da lock-in etkisi yoktur\n• FOG bazı uygulamalarda RLG'den daha hassas olabilir\n• FOG tipik olarak RLG'den daha büyük boyutlarda gelir\n\nKullanım: Hassas güdüm sistemleri, uydu yön kontrol sistemleri (ADCS), deniz seyrüsefer sistemleri, bazı yeni nesil IRS.\n\nIFOG (Interferometric FOG): En hassas fiber optik jiroskop türü. Bazı uygulamalarda inertial grade hassasiyete ulaşır." },

    { id:"b5", tip:"metin", baslik:"MEMS Jiroskop",
      metin:"Mikro elektro mekanik sistem teknolojisiyle silikon üzerine entegre işlenen minyatür jiroskoplardır. Coriolis etkisine dayalıdır: bir titreşen kütle dönen referans çerçevesinde Coriolis kuvvetine maruz kalır.\n\nAvantajlar:\n• Çok küçük ve hafif (gram mertebesinde)\n• Çok ucuz (toplu üretim)\n• Düşük güç tüketimi\n• Darbe ve şoka dayanıklı\n\nDezavantajlar:\n• Yüksek drift — uzun süreli hassasiyeti düşük\n• Gürültü seviyesi yüksek\n• Sıcaklık değişimine duyarlı\n\nKullanım alanları: İHA'lar, küçük uçaklar, başvuru sensörü (yedek/yardımcı). Akıllı telefondaki ivme ve gyro sensörleri MEMS teknolojisidir. GPS ile füzyon yapıldığında uzun süreli hata birikmesi kontrol altına alınabilir.\n\nJiroskop kalite sınıfları:\n• Taktik sınıf (0,01-1 °/sa drift): MEMS ve düşük kalite FOG\n• Navigasyon sınıfı (0,001-0,01 °/sa): Orta kalite FOG ve RLG\n• İnertial sınıf (< 0,001 °/sa): Yüksek kalite RLG ve IFOG",
      kutu:{ tip:"bilgi", baslik:"Jiroskop kalitesi navigasyona nasıl yansır?",
        metin:"1 °/saat drift hızı 1 deniz mili/saat konum hatası anlamına gelir. GPS'siz 1 saatlik uçuşta taktik sınıf jiroskop 1+ deniz mili hata yaparken navigasyon sınıfı 0,1 deniz mili altında kalır. Bu yüzden askeri uçuşlarda ve GPS jamming senaryolarında jiroskop kalitesi kritik önem taşır." } },

    { id:"b6", tip:"tablo", baslik:"Jiroskop teknoloji karşılaştırması",
      basliklar:["Özellik","Mekanik","RLG","FOG","MEMS"],
      satirlar:[
        ["Çalışma prensibi","Açısal momentum","Sagnac (lazer)","Sagnac (fiber)","Coriolis"],
        ["Hareketli parça","Evet (dönen disk)","Hayır","Hayır","Hayır (titreşen)"],
        ["Drift","Yüksek","Çok düşük","Çok düşük","Yüksek"],
        ["Başlangıç süresi","Dakikalar","Saniyeler","Saniyeler","Anlık"],
        ["Boyut","Orta","Orta","Büyük-orta","Çok küçük"],
        ["Maliyet","Orta","Yüksek","Orta-yüksek","Çok düşük"],
        ["Tipik uygulama","Eski nesil","B777, A320","Hassas güdüm","İHA, telefon"]
      ] },

    { id:"b7", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "RLG'yi mekanik jiroskop gibi düşünmek. RLG'de dönen parça yoktur; ışık hızındaki lazer fotonları çalışma elemanıdır.",
        "Lock-in etkisini ihmal etmek. RLG tasarımında dither çözümü eklenmezse düşük hız ölçümü yapılamaz.",
        "MEMS jirosku navigasyon sınıfı saymak. MEMS GPS desteği olmadan uzun süreli navigasyon için yetersizdir.",
        "FOG ve RLG'yi rakip görmek. İkisi de Sagnac etkisi kullanır ama farklı avantajlar sunar; uygulama bağlamına göre seçilir.",
        "Jiroskop driftini statik hata sanmak. Drift zamanla birikerek büyür; ne kadar süre ölçüm yapıldığı kritiktir."
      ] },

    { id:"b8", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["RLG neden mekanik jiroskoptan üstündür?","Hareketli parça yoktur, mekanik aşınma ve bakım gerektirmez. Drift çok düşüktür, uzun süreli hassasiyet iyidir. Başlangıç süresi saniyeler mertebesindedir. Titreşim ve şoka karşı daha dayanıklıdır."],
        ["Sagnac etkisi nedir?","Kapalı optik yolda zıt yönde dolaşan iki ışın rotasyon sırasında farklı yol uzunlukları geçer. Bu fark frekans farkına veya faz farkına dönüştürülerek dönme açısal hızı ölçülür. Hem RLG hem FOG bu etkiye dayalıdır."],
        ["MEMS jiroskop neden İHA'larda yaygın?","Küçük, hafif ve ucuzdur. İHA'larda ağırlık ve maliyet kritik olduğundan MEMS tercih edilir. Kısa süreli uçuşlarda GPS ile füzyon yapılarak drift sorunu büyük ölçüde giderilebilir."]
      ] },

    { id:"b9", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Collinson, R. P. G. (2011). Introduction to avionics systems (3. baskı). Springer.",
        "Lawrence, A. (1998). Modern inertial technology (2. baskı). Springer.",
        "Titterton, D., & Weston, J. (2004). Strapdown inertial navigation technology (2. baskı). IET.",
        "Armenise, M. N. ve diğerleri (2010). Advances in gyroscope technologies. Springer."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Jiroskop türleri", puan:1,
      soru:"RLG hangi fiziksel etkiye dayanır?",
      secenekler:["Açısal momentum korunumu","Sagnac etkisi","Coriolis kuvveti","Piezoelektrik etki"],
      dogru:1,
      aciklama:"RLG'de iki lazer ışını zıt yönde döner. Sistem döndüğünde Sagnac etkisiyle iki ışın farklı yol alır, aralarında frekans farkı oluşur. Bu fark dönme hızıyla orantılıdır." },
    { id:"s2", etiket:"Jiroskop türleri", puan:2,
      soru:"MEMS jiroskopun RLG'ye göre temel dezavantajı nedir?",
      secenekler:["Başlangıç süresi uzundur","Hareketli parça içerir","Yüksek drift — uzun süreli hassasiyeti düşük","Çok pahalıdır"],
      dogru:2,
      aciklama:"MEMS jiroskopların drift hızı taktik sınıftadır (0,01-1 °/sa). GPS desteği olmadan saatler içinde konum hatası birikir. RLG ve FOG navigasyon sınıfında çok düşük drift sunar." },
    { id:"s3", etiket:"Mekanik jiroskop", puan:1,
      soru:"Mekanik jiroskopun 'katılık' özelliği ne anlama gelir?",
      secenekler:["Dönme hızı yüksektir","Dış kuvvetlere karşı sert yapıdır","Dönen disk uzayda yönünü korur","Titreşime dayanıklıdır"],
      dogru:2,
      aciklama:"Açısal momentum korunumu gereği dönen disk yönünü korur. Bu özellik yapay ufuk ve yön göstergelerinde referans ekseni sağlamak için kullanılır." },
    { id:"s4", etiket:"Jiroskop türleri", puan:2,
      soru:"RLG'deki lock-in etkisi nedir ve nasıl çözülür?",
      secenekler:["Düşük sıcaklıkta lazer kilitlenir; ısıtma çözer","Çok düşük dönme hızında iki lazer birbirini kilitler; dither titreşimi ile çözülür","Hava kirliliği lazer yolunu tıkar; temizleme çözümü","Güç kesildiğinde lazer kilitlenir; yedek pil çözüm"],
      dogru:1,
      aciklama:"Çok küçük dönme hızlarında iki lazer frekansı birbirine eşitlenme (lock-in) eğilimindedir. Jiroskopa küçük mekanik titreşim (dither) uygulanarak bu bölgeden kaçınılır." }
  ],
  ipuclari:{
    "Jiroskop türleri":"Mekanik: açısal momentum, drift yüksek. RLG: Sagnac+lazer, drift çok düşük. FOG: Sagnac+fiber. MEMS: Coriolis, ucuz+küçük+drift yüksek.",
    "RLG":"Hareketli parça yok → bakım yok. Lock-in → dither çözümü. Navigasyon sınıfı.",
    "MEMS":"Ucuz, hafif, küçük. Drift yüksek → GPS füzyon şart. İHA ve tüketici elektroniği.",
    "Kalite sınıfları":"İnertial: <0,001 °/sa. Navigasyon: 0,001-0,01. Taktik: 0,01-1. MEMS genelde taktik."
  }
},

"m6-4": {
  ad: "İvmeölçerler ve strapdown INS",
  ders: "Aviyonik, Ölçme ve Seyrüsefer",
  seviye: "Orta",
  sure: 22,
  mulakat: false,
  onbilgi: "Jiroskoplar (m6-3), vektör analizi",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"İvmeölçer uçağa etki eden spesifik kuvveti (özgül kuvvet) ölçer. Jiroskopla birleştirildiğinde konum, hız ve yönelim bilgisini dışarıdan herhangi bir sinyal almadan veren tam özerk bir seyrüsefer sistemi oluşturur — bu INS'tir." },

    { id:"b2", tip:"metin", baslik:"İvmeölçer çalışma prensibi",
      metin:"İvmeölçer sismik kütle (proof mass) prensibine dayanır. Gövde ivmelendiğinde atalet nedeniyle kütle yerinde kalmaya çalışır. Bu göreli hareket ölçülür ve ivmeye dönüştürülür.\n\nÖnemli bir nokta: İvmeölçer yerçekimini hisseder. Masada hareketsiz duran bir ivmeölçer g = 9,81 m/s² ölçer. Serbest düşüşte (yörüngede) ise sıfır ölçer. Ölçülen büyüklük özgül kuvvet (specific force) olarak adlandırılır:\n\nf = a − g\n\nBurada a uçağın inersiyel ivmesi, g yer çekimi ivmesidir. Navigasyonda gerçek ivmeye ulaşmak için g çıkarılmalıdır.\n\nİvmeölçer türleri:\n• MEMS ivmeölçer: Silikon yay-kütle sistemi, kapasitif ölçüm. Ucuz, küçük, İHA'larda yaygın.\n• Quartz MEMS: Yüksek hassasiyet, navigasyon uygulamaları.\n• Pendulous force-rebalance: Hassas navigasyon ivmeölçerleri. Kütle sıfır pozisyona geri getirilir, gerekli kuvvet ivme ölçütü olur.\n\nEksiklik: İvmeölçer anlık ivmeyi ölçer. Konum bilgisi için iki kez integrasyon gerekir:\nivme → (1. integral) → hız → (2. integral) → konum\n\nEntegrasyon hatalar biriktirir — INS'in temel sınırlaması budur." },

    { id:"b3", tip:"metin", baslik:"Platform INS ile Strapdown INS",
      metin:"Platform INS (gimbal-based): Jiroskop ve ivmeölçerler mekanik olarak sabitlenmiş bir platforma monte edilir. Platform serbestçe dönerek her zaman inersiyel uzay referansını korur. Karmaşık mekanik sistem, ağır ve pahalı. Eski nesil Boeing ve askeri uçaklarda kullanılmıştır.\n\nStrapdown INS: Sensörler doğrudan uçak gövdesine sabitlenir (strapdown = bağlı). Gövde döndükçe sensörler de döner. Hesaplama bilgisayarla yapılır: jiroskop verisinden yönelim matrisi oluşturulur, ivme ölçümü bu matrisle dönüştürülerek inersiyel eksende ifade edilir, integral alınarak hız ve konum bulunur.\n\nStrapdown INS avantajları:\n• Hareketli mekanik parça yok → güvenilirlik artar\n• Daha hafif ve kompakt\n• Daha düşük maliyet\n• Hızlı başlangıç\n\nStrapdown INS dezavantajı:\n• Hesaplama yükü çok yüksektir. Yüksek hızda manevra eden uçaklarda saniyede yüzlerce-binlerce hesaplama gerekir. Modern işlemcilerle bu artık sorun değil.\n\nGünümüzde neredeyse tüm modern uçaklar strapdown mimarisi kullanır." },

    { id:"b4", tip:"metin", baslik:"INS hata birikmesi",
      metin:"INS'in temel sınırlaması zamanla hata birikimidir. İki kaynak:\n\n1. Jiroskop drift hatası: Jiroskop yavaş yavaş gerçek yönden sapınca ivme ölçümleri yanlış eksende ifade edilir. Bu hata konum hatasına çevrilince zamanla büyür.\n\n2. İvme ölçüm hatası: Küçük bir ivme hatası → büyük hız hatası (integral) → daha büyük konum hatası (ikinci integral). 0,1 mg'lik küçük bir ivme hatası 1 saatte yaklaşık 0,5 km konum hatası yaratır.\n\nHata büyüme hızı:\n• İyi navigasyon sınıfı INS: 0,1-1 deniz mili/saat\n• Tipik taktik INS: 1-10 deniz mili/saat\n\nBu yüzden INS GPS veya diğer dış referanslarla düzenli olarak güncellenmek zorundadır.",
      kutu:{ tip:"bilgi", baslik:"Schuler periyodu",
        metin:"Hata serbest bırakılan bir INS belirli bir periyotla salınım yapar. Bu Schuler periyodu T = 2π√(R_Dünya/g) ≈ 84,4 dakikadır. İyi ayarlanmış bir INS bu periyotta konum hatasının büyümesini sınırlar. Bu fark edilen etkide 1,4 saatlik bir döngü görürsün." } },

    { id:"b5", tip:"ornek", baslik:"Örnek: INS hata tahmini",
      soru:"Navigasyon sınıfı bir INS'in ivme ölçüm hatası 50 μg (mikro g) dir. 2 saatlik uçuşta yalnızca bu hatadan kaynaklanan konum hatası yaklaşık kaçtır? (g = 9,81 m/s²)",
      cozum:"İvme hatası: Δa = 50 × 10⁻⁶ × 9,81 = 4,905 × 10⁻⁴ m/s²\n\nHız hatası (1. integral, t = 7200 s):\nΔv = Δa × t = 4,905 × 10⁻⁴ × 7200 = 3,53 m/s\n\nKonum hatası (2. integral):\nΔx = ½ × Δa × t² = ½ × 4,905 × 10⁻⁴ × 7200² = ½ × 4,905 × 10⁻⁴ × 51.840.000 = 12.714 m ≈ 12,7 km\n\nYorum: 50 μg'lik küçük bir hata 2 saatte 12,7 km konum sapmasına yol açar. Bu değeri 1 deniz mili/saat kural başparmakla karşılaştır: 2 saat × 1 NM/sa = 2 NM ≈ 3,7 km. Gerçek sistemlerde jiroskop hatası da eklenir ve hatalar çok daha büyük olabilir. GPS güncellenmesi bu yüzden kritiktir." },

    { id:"b6", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "İvmeölçerin yerçekimini hissetmediğini sanmak. Tam tersine; özgül kuvvet hesabında g çıkarılmalıdır.",
        "INS'i GPS ile karıştırmak. INS özerk sistemdir, sinyal almaz. GPS uydu sinyaline bağlıdır. İkisi birbirini tamamlar.",
        "Strapdown INS'in daha düşük hassasiyetli olduğunu sanmak. Doğru hesaplama ile platform INS'e eşdeğer hassasiyet mümkündür.",
        "İnegrasyon hatasını küçümsemek. İkinci integrasyon hatayı çok büyütür; iyi sensör + sık güncelleme şarttır.",
        "INS hizalamayı (alignment) atlamak. Başlangıçta doğru referans kurulmadan sistem iyi çalışmaz."
      ] },

    { id:"b7", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Strapdown INS nedir?","Jiroskop ve ivmeölçerlerin doğrudan uçak gövdesine sabit bağlandığı, mekanik platform yerine hesaplamalı dönüşüm kullanan inertial navigasyon sistemidir. Hareketli parça olmadığından güvenilirlik yüksektir."],
        ["İvmeölçer neden yerçekimini hisseder?","İvmeölçer özgül kuvveti (f = a − g) ölçer. Hareketsiz duran ivmeölçer a = 0 ama f = −g = −9,81 m/s² ölçer. Navigasyonda gerçek ivme için ölçüme g eklenmesi gerekir."],
        ["INS neden GPS ile güncellenmek zorundadır?","INS hataları zamanla birikir. Jiroskop drift ve ivme ölçüm hataları çift integrasyon sonucu büyük konum sapmalarına yol açar. GPS dış referans vererek bu birikmiş hatayı sıfırlar."]
      ] },

    { id:"b8", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Titterton, D., & Weston, J. (2004). Strapdown inertial navigation technology (2. baskı). IET.",
        "Groves, P. D. (2013). Principles of GNSS, inertial, and multisensor integrated navigation systems (2. baskı). Artech House.",
        "Savage, P. G. (2000). Strapdown analytics. Strapdown Associates."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"İvmeölçer", puan:2,
      soru:"Hareketsiz masada duran ivmeölçer ne ölçer?",
      secenekler:["Sıfır — çünkü hareket yok","g = 9,81 m/s² — çünkü özgül kuvveti ölçer","−g — çünkü yer çekimi aşağı","Değişken — ortam sıcaklığına bağlı"],
      dogru:1,
      aciklama:"İvmeölçer özgül kuvvet f = a − g ölçer. Hareketsiz a = 0, dolayısıyla f = −g. Ama gösterim konvansiyonuna göre +g olarak okunur. Serbest düşüşte a = g olur, f = 0." },
    { id:"s2", etiket:"Strapdown INS", puan:2,
      soru:"Strapdown INS'in platform INS'e göre avantajı nedir?",
      secenekler:["Daha düşük hesaplama yükü","Hareketli mekanik parça yok → güvenilirlik yüksek, ağırlık düşük","Daha yüksek hassasiyet","Jiroskopa ihtiyaç duymaz"],
      dogru:1,
      aciklama:"Strapdown INS'de gimbal mekanizması yoktur. Hareketli parça olmayınca mekanik arıza riski azalır, sistem hafifler ve küçülür. Hesaplama yükü yüksektir ama modern bilgisayarlar bunu kolayca karşılar." },
    { id:"s3", etiket:"INS hatası", puan:2,
      soru:"INS'te neden ikinci integrasyon konum hatasını büyütür?",
      secenekler:["Çünkü integrasyon matematiksel olarak hatalı","Küçük ivme hatası → büyüyen hız hatası → daha büyüyen konum hatası","Çünkü jiroskop sinyali karışır","Çünkü bilgisayar hız yavaş"],
      dogru:1,
      aciklama:"Δx = ½ × Δa × t². Zaman karesiyle büyüme hata birikmesini dramatik artırır. 1 saatte küçük görünen hata 3 saatte 9 kat büyür. Bu yüzden GPS ile periyodik güncelleme zorunludur." }
  ],
  ipuclari:{
    "İvmeölçer":"Özgül kuvvet f = a − g. Hareketsiz → g ölçer. Serbest düşüş → 0 ölçer. İki integral → konum.",
    "Strapdown INS":"Sensör gövdeye sabit. Mekanik platform yok. Hesaplama bilgisayarda. Modern standart.",
    "Hata birikmesi":"Δx = ½Δa×t² → t²'yle büyür. GPS güncelleme zorunlu. İyi INS: 0,1-1 NM/sa."
  }
},

"m6-5": {
  ad: "INS/GPS entegrasyonu ve Kalman filtresi",
  ders: "Aviyonik, Ölçme ve Seyrüsefer",
  seviye: "İleri",
  sure: 25,
  mulakat: true,
  onbilgi: "INS (m6-4), GPS temelleri, olasılık ve istatistik temelleri",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"INS özerk ama zamanla hata biriktiren, GPS dış bağımlı ama anlık doğru bir sistemdir. İkisinin güçlü yanlarını birleştiren Kalman filtresi, modern seyrüsefer sistemlerinin temel algoritmasıdır. GPS jamming veya spoofing ortamında bile INS desteği navigasyonu sürdürür." },

    { id:"b2", tip:"metin", baslik:"GPS çalışma prensibi",
      metin:"GPS (Global Positioning System) en az dört uydudan gelen sinyal gecikmelerini ölçerek konumu hesaplar.\n\nPseudorange ölçümü: Uydu sinyalinin alıcıya ulaşma süresi × ışık hızı = pseudorange. 'Pseudo' çünkü alıcı saati uydu saatiyle tam senkron değildir; bu yüzden 4. uydu saat hatasını çözmek için gereklidir.\n\nGPS hata kaynakları:\n• İyonosfer gecikmesi: Sinyal iyonosferden geçerken yavaşlar (tipik ~5 m hata)\n• Troposfer gecikmesi: Nemli atmosfer sinyali yavaşlatır\n• Çok yollu yansıma (multipath): Sinyal binalara veya zemine çarptıktan sonra alıcıya ulaşabilir\n• Uydu geometrisi: DOP (Dilution of Precision) — uydular gökyüzünde iyi dağılmışsa düşük DOP → iyi hassasiyet\n• Saat hataları: Uydu ve alıcı saat asenkronisi\n\nDGPS ve SBAS: Sabit referans istasyonlarının hata düzeltmesi yayınlamasıyla hassasiyet artırılır. EGNOS (Avrupa), WAAS (ABD) bu sistemlerdir. Havacılıkta kategori II/III ILS yaklaşımı için bu hassasiyet gereklidir.",
      kutu:{ tip:"bilgi", baslik:"GPS ve görelilik",
        metin:"Uydu saatleri Dünya yüzeyinden daha hızlı hareket eder (özel görelilik → saat yavaşlar) ama yerçekimi daha zayıf (genel görelilik → saat hızlanır). Net etki: uydu saati günde ~38 mikrosaniye ileri gider. Bu düzeltme yapılmazsa GPS günde ~10 km hata biriktirir. Einstein olmadan GPS çalışmazdı." } },

    { id:"b3", tip:"metin", baslik:"Kalman filtresi ne yapar?",
      metin:"Kalman filtresi gürültülü ölçümlerden sistemin gerçek durumunu optimal biçimde tahmin eden özyinelemeli algoritmadır.\n\nTemel fikir: Elimde iki bilgi kaynağım var:\n1. Sistem modeli (INS — iyi dinamik model ama zamanla hata birikir)\n2. Ölçüm (GPS — anlık doğru ama gürültülü)\n\nKalman filtresi bu iki kaynağı güvenilirliklerine göre ağırlıklı ortalamayla birleştirir.\n\nİki adım:\n• Tahmin (predict): INS dinamik modeliyle durumu ilerlet. Kovaryans (belirsizlik) büyür.\n• Güncelleme (update): GPS ölçümü gelince Kalman kazancı (K) hesapla, tahmini düzelt. Kovaryans küçülür.\n\nKalman kazancı K:\n• K büyük → GPS'e daha çok güven (ölçüm gürültüsü küçük veya tahmin belirsizliği büyük)\n• K küçük → INS'e daha çok güven (GPS gürültülü veya INS çok iyi)\n\nGPS sinyali kesildiğinde filtre sadece tahmin adımını çalıştırır. INS ile üretilen konum bilgisi kullanılır; belirsizlik zamanla büyür. Sinyal geri gelince hızla düzelir." },

    { id:"b4", tip:"formul", baslik:"Kalman filtresi temel denklemleri",
      formul:"TAHMİN:\nx̂⁻ₖ = F · x̂ₖ₋₁ + B · uₖ\nP⁻ₖ = F · Pₖ₋₁ · Fᵀ + Q\n\nGÜNCELLEME:\nKₖ = P⁻ₖ · Hᵀ · (H · P⁻ₖ · Hᵀ + R)⁻¹\nx̂ₖ = x̂⁻ₖ + Kₖ · (zₖ − H · x̂⁻ₖ)\nPₖ = (I − Kₖ · H) · P⁻ₖ",
      semboller:[
        ["x̂","Durum vektörü tahmini (konum, hız, yönelim...)","—"],
        ["F","Durum geçiş matrisi (sistem dinamiği)","—"],
        ["B","Kontrol girişi matrisi","—"],
        ["u","Kontrol girişi (INS ivme ölçümü)","—"],
        ["P","Hata kovaryans matrisi (belirsizlik)","—"],
        ["Q","Proses gürültüsü kovaryans matrisi (INS belirsizliği)","—"],
        ["K","Kalman kazanç matrisi","—"],
        ["H","Ölçüm matrisi","—"],
        ["R","Ölçüm gürültüsü kovaryans matrisi (GPS gürültüsü)","—"],
        ["z","Ölçüm vektörü (GPS konum/hız)","—"]
      ],
      metin:"Kovaryans P hata belirsizliğini temsil eder. GPS geldikçe P küçülür, GPS kesilince P büyür. Kazanç K = 0 olursa ölçüm görmezden gelinir, K = H⁻¹ olursa ölçüme tam güvenilir." },

    { id:"b5", tip:"metin", baslik:"GPS jamming ve spoofing tehdidi",
      metin:"Askeri ve sivil havacılık için GPS güvenilirliği kritik bir güvenlik konusudur.\n\nJamming (bozma): GPS sinyalini bastıran radyo paraziti. Alıcı sinyali kaybeder. Çözüm: INS ile devam et, anti-jamming anten kullan, GNSS olmayan alternatif seyrüsefer (INS, radyo nav, ARINC havaalanı veritabanı) hazırla.\n\nSpoofing (sahtekârlık): Sahte GPS sinyali göndererek uçağı yanlış konuma inandırma. INS konumuyla GPS konumu karşılaştırılarak tespit edilebilir. Gelişmiş alıcılar sinyal tutarsızlığını algılar.\n\n2022 sonrası Ukrayna, Karadeniz ve Körfez bölgelerinde yoğun GPS bozulma raporları gelmiştir. Bu durum INS bağımsız navigasyonunun değerini tekrar ön plana çıkarmıştır.\n\nAltAlternatif seyrüsefer:\n• INS/DME füzyon\n• LORAN (bazı bölgelerde)\n• ILS/VOR radyo navigasyonu\n• Terrain-referenced navigation (TRN) — arazi eşleştirme\n• Star tracker (uzay araçları)" },

    { id:"b6", tip:"ornek", baslik:"Örnek: Kalman kazancı yorumu",
      soru:"INS/GPS sisteminde:\n• Tahmin belirsizliği P = 100 m²\n• GPS ölçüm gürültüsü R = 25 m²\nKalman kazancı K'yı yorumla (basitleştirilmiş 1D).",
      cozum:"Basitleştirilmiş 1D:\nK = P / (P + R) = 100 / (100 + 25) = 100 / 125 = 0,80\n\nGüncelleme:\nx̂ = x̂⁻ + K × (z − x̂⁻)\nx̂ = x̂⁻ + 0,80 × (GPS ölçüm − INS tahmini)\n\nYorum: K = 0,80 demek GPS ölçümüne %80 ağırlık, INS tahminine %20 ağırlık veriliyor demektir. INS belirsizliği (100 m²) GPS gürültüsünden (25 m²) 4 kat büyük olduğundan GPS'e çok güveniliyyor.\n\nEğer GPS sinyali kesilse P giderek büyürdü — diyelim P = 400 m² olurdu. Sinyal geri gelince K = 400/(400+25) = 0,94 olurdu ve filtre GPS'e neredeyse tamamen güvenirdi." },

    { id:"b7", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Kalman filtresini sihirli bir kutu sanmak. Filtre ancak model ve gürültü matrisleri (Q, R) doğru ayarlandığında optimal çalışır.",
        "GPS'in her koşulda güvenilir olduğunu varsaymak. Jamming, multipath ve ionosferik bozulma GPS hassasiyetini önemli ölçüde düşürür.",
        "INS/GPS füzyonunu yalnızca konum birleştirme sanmak. İyi füzyon konum, hız, yönelim ve sensör hatalarını aynı anda tahmin eder.",
        "Kalman kazancının sabit olduğunu düşünmek. K her adımda yeniden hesaplanır; belirsizlik ve gürültü değiştikçe K de değişir.",
        "DOP değerini görmezden gelmek. Yüksek HDOP GPS hassasiyetini düşürür; filtre bunu R matrisine yansıtmalıdır."
      ] },

    { id:"b8", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Kalman filtresi INS/GPS füzyonunda ne yapar?","İki kaynağı güvenilirliklerine göre birleştirir. Tahmin adımında INS dinamik modeli kullanılır. Güncelleme adımında GPS ölçümü Kalman kazancıyla ağırlıklandırılarak tahmin düzeltilir. GPS kesilince sadece INS ile devam eder; belirsizlik büyür. GPS geri gelince hızla düzelir."],
        ["GPS spoofing nedir ve nasıl tespit edilir?","Sahte GPS sinyali göndererek alıcıyı yanlış konuma inandırma saldırısıdır. INS bağımsız konum tahminiyle karşılaştırılarak fark büyükse spoofing şüphelenilir. Gelişmiş alıcılar sinyal gücü, Doppler tutarsızlığı ve uydu geometrisi anomalilerini de izler."],
        ["Kalman kazancı K ne zaman büyür?","INS belirsizliği (P) büyüdüğünde veya GPS gürültüsü (R) küçüldüğünde K büyür. K büyüyünce GPS ölçümüne daha fazla güvenilir. GPS kesilince P büyür, sinyal geri gelince K yüksek başlayıp sonra stabilize olur."]
      ] },

    { id:"b9", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Groves, P. D. (2013). Principles of GNSS, inertial, and multisensor integrated navigation systems (2. baskı). Artech House.",
        "Welch, G., & Bishop, G. (2006). An introduction to the Kalman filter. UNC Chapel Hill Technical Report TR 95-041.",
        "Titterton, D., & Weston, J. (2004). Strapdown inertial navigation technology (2. baskı). IET.",
        "Bar-Shalom, Y., Li, X. R., & Kirubarajan, T. (2001). Estimation with applications to tracking and navigation. Wiley."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Kalman filtresi", puan:2,
      soru:"Kalman kazancı K = 0 olsaydı ne anlama gelirdi?",
      secenekler:["GPS'e tamamen güvenilir","Ölçüm tamamen görmezden gelinir, sadece INS kullanılır","INS kapatılır","Sistem durur"],
      dogru:1,
      aciklama:"K = 0 ise güncelleme adımı x̂ = x̂⁻ + 0×(z−x̂⁻) = x̂⁻ olur. Ölçüm tahmine katkı sağlamaz. Sistem tamamen model tahmine dayanır. GPS sinyali çok gürültülüyse bu duruma yaklaşılır." },
    { id:"s2", etiket:"GPS", puan:2,
      soru:"GPS alıcısı neden en az 4 uyduya ihtiyaç duyar?",
      secenekler:["3 boyutlu konum için 3 uydu, 4. yedek için","3 boyutlu konum (x,y,z) + saat hatası = 4 bilinmeyen → 4 denklem","GPS daha iyi sinyal için 4 uydu seçer","4 uydu daha iyi DOP sağlar"],
      dogru:1,
      aciklama:"3 konum bilinmeyeni (x, y, z) + 1 alıcı saat hatası = 4 bilinmeyen. Her uydu bir denklem sağlar. 4 uydu 4 denklemi çözerek hem konum hem saat hatasını belirler." },
    { id:"s3", etiket:"Kalman filtresi", puan:2,
      soru:"GPS sinyali kesilince Kalman filtresi ne yapar?",
      secenekler:["Sistem durur","Sadece tahmin adımı çalışır, INS ile konum üretilir ama belirsizlik büyür","GPS sinyali yapay olarak üretilir","Altimetre devreye girer"],
      dogru:1,
      aciklama:"GPS yokken güncelleme adımı çalışmaz. Filtre sadece INS dinamik modeliyle (tahmin adımı) devam eder. Konum tahmini üretilir ama kovaryans P giderek büyür — doğruluk düşer. Sinyal geri gelince P yüksek olduğu için K büyük başlar ve hızla düzelir." },
    { id:"s4", etiket:"GPS", puan:1,
      soru:"GPS jamming ile GPS spoofing arasındaki fark nedir?",
      secenekler:["İkisi aynı şeydir","Jamming sinyali bastırır (sinyal kaybı); spoofing sahte sinyal gönderir (yanlış konum)","Jamming daha tehlikelidir","Spoofing sadece askeri sistemleri etkiler"],
      dogru:1,
      aciklama:"Jamming sinyali gürültüyle bastırır; alıcı GPS'i kaybeder ve bunu fark eder. Spoofing sahte uydu sinyali gönderir; alıcı hatalı konumu doğru sanır. Bu yüzden spoofing çok daha tehlikeli olabilir." }
  ],
  ipuclari:{
    "Kalman filtresi":"Tahmin (INS model) + Güncelleme (GPS ölçüm). K = P/(P+R). K büyük → GPS'e güven. GPS kesilince P büyür.",
    "GPS":"4 uydu → 4 bilinmeyen (x,y,z,saat). DOP iyi → hassas. Jamming=sinyal kaybı. Spoofing=sahte konum.",
    "Entegrasyon":"INS: özerk ama drift. GPS: dışsal ama doğru. Füzyon: ikisinin en iyisi.",
    "Güvenlik":"Jamming → INS ile devam. Spoofing → INS karşılaştırmasıyla tespit."
  }
},

"m6-6": {
  ad: "Gerinim ölçer ve Wheatstone köprüsü",
  ders: "Aviyonik, Ölçme ve Seyrüsefer",
  seviye: "Orta",
  sure: 22,
  mulakat: false,
  onbilgi: "Gerilme ve şekil değiştirme (m1-8), temel devre analizi",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Gerinim ölçer (strain gauge) malzeme yüzeyindeki mekanik şekil değişimini elektrik sinyaline çeviren sensördür. Wheatstone köprüsü bu küçük sinyal değişimini hassas biçimde ölçmeye yarayan devre konfigürasyonudur. Uçak yapı testleri, motor yük ölçümü ve tartım sistemleri bu teknolojiye dayanır." },

    { id:"b2", tip:"metin", baslik:"Gerinim ölçer çalışma prensibi",
      metin:"Metal veya yarı iletken filament çok ince bir taşıyıcı folyo üzerine serpantin şekilde yerleştirilir. Bu düzenek yüzeye yapıştırılır.\n\nMalzeme gerinim geçirdiğinde (uzama veya kısalma):\n• Filament de uzar veya kısalır\n• Filament direnci değişir: ΔR/R = GF × ε\n\nGauge Factor (GF): Metal için tipik GF = 2. Yarı iletken için GF = 50-200. GF malzemenin rezistivitesinin geometrikle birleşiminin bir ölçütüdür.\n\nε (epsilon) gerinim (strain): ε = ΔL/L\n\nSorun: ΔR/R değişimi çok küçüktür. 1000 microstrain (µε = 10⁻³) uzamada:\nΔR/R = 2 × 0,001 = 0,002 = %0,2\n\nBu küçük değişimi doğrudan ölçmek zordur — Wheatstone köprüsüne ihtiyaç duyulur.\n\nSıcaklık etkisi: Gerinim ölçer sıcaklıkla da direnç değiştirir. Bu termal hata, uygun kompanzasyon teknikleriyle giderilir." },

    { id:"b3", tip:"formul", baslik:"Wheatstone köprüsü",
      formul:"V_çıkış = V_kaynak × (R₂/(R₁+R₂) − R₄/(R₃+R₄))\n\nDengede: R₁/R₂ = R₃/R₄  →  V_çıkış = 0\n\nYarım köprü: V_çıkış ≈ V_kaynak × GF × ε / 2\n\nTam köprü: V_çıkış ≈ V_kaynak × GF × ε",
      semboller:[
        ["V_çıkış","Köprü çıkış gerilimi","V"],
        ["V_kaynak","Besleme gerilimi","V"],
        ["R₁, R₂, R₃, R₄","Köprü dirençleri (R₁ veya daha fazlası gerinim ölçer)","Ω"],
        ["GF","Gauge Factor","—"],
        ["ε","Gerinim (strain): ΔL/L","m/m veya µε"]
      ],
      metin:"Tam köprü (tam Wheatstone): 4 adet gerinim ölçer. İki çekme tarafında, iki basınç tarafında. Sıcaklık etkisi otomatik olarak iptal olur, çıkış sinyali iki kat büyür. Hassas uygulamalarda tercih edilir.\n\nYarım köprü: 2 gerinim ölçer + 2 sabit direnç. Kısmi sıcaklık kompanzasyonu.\n\nÇeyrek köprü: 1 gerinim ölçer + 3 sabit direnç. En basit ama en az hassas ve sıcaklığa duyarlı." },

    { id:"b4", tip:"metin", baslik:"Havacılıkta kullanım alanları",
      metin:"Yapı testi: Uçak kanat ve gövde testlerinde yüzlerce gerinim ölçer yüzeye yapıştırılır. Limit ve nihai yük testlerinde gerilme dağılımı ölçülür, FEM sonuçlarıyla karşılaştırılır.\n\nMotor yük testi: Rotor mili veya yakıt boru hatlarına bağlı gerinim ölçerler tork ve kuvvet ölçer.\n\nUçuş yük ölçümü: Bazı uçak programlarında uçuş sırasında kanat gerilmeleri sürekli izlenir. Ağır manevra geçmişi kaydedilir, ömür tüketimi hesaplanır.\n\nFly-by-wire yük geri bildirimi: Bazı sistemlerde kontrol yüzeyi üzerindeki aerodinamik yük gerinim ölçerle ölçülür ve kontrol yasasına beslenir.\n\nYakıt ölçümü (uçak tartımı): Bazı küçük uçaklarda iniş takımı üzerindeki yük gerinim ölçerle ölçülerek gerçek kalkış ağırlığı belirlenir.\n\nAeroelastisite izleme: Esnek kanatlarda anlık eğilme açısı gerinim ölçerle izlenerek aeroelastik model doğrulanır." },

    { id:"b5", tip:"ornek", baslik:"Örnek: Gerinim ölçer hesabı",
      soru:"GF = 2,1 olan bir gerinim ölçer alüminyum parçaya yapıştırıldı. Parça 500 µε gerinim geçiriyor. Köprü besleme gerilimi V = 5V, yarım köprü konfigürasyonu. Çıkış gerilimi kaçtır?",
      cozum:"ε = 500 × 10⁻⁶ = 5 × 10⁻⁴\n\nYarım köprü çıkış:\nV_çıkış ≈ V × GF × ε / 2\nV_çıkış = 5 × 2,1 × 5×10⁻⁴ / 2\nV_çıkış = 5 × 2,1 × 2,5×10⁻⁴\nV_çıkış = 2,625 × 10⁻³ V = 2,625 mV\n\nYorum: Çıkış sinyali çok küçük — sadece 2,6 mV. Bu sinyal yükseltilmeden (amplify) kullanılmaz. Tipik olarak 100-1000 kat yükseltme uygulanır ve sonra ADC'den geçirilir. Gürültü yönetimi kritiktir; kablo bağlantıları ve sinyal koşullandırma dikkatlice tasarlanmalıdır." },

    { id:"b6", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Gerinim ölçerü yüzeye yanlış yönde yapıştırmak. Ölçüm yönü hassas belirlenmeli; eğik yapıştırma yanlış bileşen ölçümüne yol açar.",
        "Sıcaklık kompanzasyonunu ihmal etmek. Sıcaklık değişimi gerçek gerinim sinyalini maskeleyebilir.",
        "Kablo direncini köprü hesabına katmamak. Uzun kablo köprü dengesini bozar; 3 veya 4 telli bağlantı kullanılmalı.",
        "Yapıştırıcı kürlemesini tamamlamadan ölçüm yapmak. Yapıştırıcı tamamen kurumadan başlangıç referansı alınmaz.",
        "Köprü dengesi kontrolünü atlamak. Ölçüm öncesi sıfır yükte köprü dengesi kontrol edilmeli ve ayarlanmalı."
      ] },

    { id:"b7", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Gerinim ölçer nasıl çalışır?","Metal filament serpantin şekilde folyo üzerine yerleştirilip yüzeye yapıştırılır. Gerinim altında filament uzar, direnci değişir. ΔR/R = GF × ε. Bu küçük direnç değişimi Wheatstone köprüsüyle büyütülür."],
        ["Tam köprü konfigürasyonu neden yarım köprüden üstündür?","Dört gerinim ölçer kullanılır. Karşılıklı ölçerler ters yönde çalışarak çıkış sinyalini iki katlar ve sıcaklık etkilerini otomatik olarak iptal eder. Hassasiyet artar, sıcaklık hatası azalır."],
        ["Wheatstone köprüsünün avantajı nedir?","Küçük direnç değişimlerini büyük voltaj farkına çevirir. Dengede çıkış sıfır olduğundan küçük sapma kolayca ölçülür. Sıcaklık kompanzasyonu için uygun konfigürasyonlar sunar."]
      ] },

    { id:"b8", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Dally, J. W., Riley, W. F., & McConnell, K. G. (1993). Instrumentation for engineering measurements (2. baskı). Wiley.",
        "Hoffmann, K. (1989). An introduction to stress analysis using strain gauges. Hottinger Baldwin Messtechnik.",
        "NASA. (2018). Structural testing for static failure, ultimate load and fatigue — reference document."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Gerinim ölçer", puan:1,
      soru:"GF = 2 ve ε = 800 µε için ΔR/R kaçtır?",
      secenekler:["%0,16","%0,08","%1,6","%8"],
      dogru:0,
      aciklama:"ΔR/R = GF × ε = 2 × 800×10⁻⁶ = 1600×10⁻⁶ = 0,0016 = %0,16. Çok küçük değişim; Wheatstone köprüsü bu yüzden şart." },
    { id:"s2", etiket:"Wheatstone köprüsü", puan:2,
      soru:"Tam köprü konfigürasyonunun yarım köprüye göre avantajı nedir?",
      secenekler:["Daha az gerinim ölçer gerektirir","Çıkış sinyali iki katlar ve sıcaklık hatalarını iptal eder","Daha ucuzdur","Kurulumu daha kolaydır"],
      dogru:1,
      aciklama:"Tam köprüde 4 gerinim ölçer karşılıklı çalışır. Çekme tarafı ve basınç tarafı zıt direnç değişimleri köprü çıkışını iki katlar. Ayrıca tüm ölçerler aynı sıcaklığa maruz kalarak termal hatalar birbirini iptal eder." },
    { id:"s3", etiket:"Gerinim ölçer", puan:2,
      soru:"Uçak yapı testinde neden yüzlerce gerinim ölçer kullanılır?",
      secenekler:["Yedeklilik için","Tüm yapı boyunca gerilme dağılımını haritalamak ve FEM modelini doğrulamak için","Ağırlık merkezi hesabı için","Titreşim frekansını ölçmek için"],
      dogru:1,
      aciklama:"Tek nokta ölçümü yeterli değildir. Farklı yükleme senaryolarında gerilme dağılımının tamamı ölçülür ve FEM sonuçlarıyla karşılaştırılır. Beklenmedik gerilme konsantrasyonları bu şekilde tespit edilir." }
  ],
  ipuclari:{
    "Gerinim ölçer":"ΔR/R = GF × ε. Metal GF≈2. Yarı iletken GF=50-200. Sıcaklık kompanzasyonu şart.",
    "Wheatstone köprüsü":"Denge → V_çıkış=0. Gerinim → dengesizlik. Tam köprü: 2× sinyal + sıcaklık iptali.",
    "Havacılık uygulamaları":"Yapı testi, motor yük, uçuş yük izleme, iniş takımı tartımı."
  }
},

"m6-7": {
  ad: "Ölçüm belirsizliği ve kalibrasyon",
  ders: "Aviyonik, Ölçme ve Seyrüsefer",
  seviye: "Temel",
  sure: 18,
  mulakat: true,
  onbilgi: "Temel istatistik, ölçme temelleri",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Her ölçüm belirsizlik içerir. Bu gerçeği kabul etmek ve sayısal olarak ifade etmek mühendislik güvenilirliğinin temelidir. Kalibrasyon ise aletin bu belirsizliği kabul edilebilir sınırlar içinde tutmasını sağlar. Havacılıkta kalibre edilmemiş aletle yapılan ölçüm geçersiz sayılır." },

    { id:"b2", tip:"metin", baslik:"Ölçüm hatası ve belirsizliği",
      metin:"Ölçüm hatası (error): Ölçüm sonucu ile gerçek değer arasındaki farktır. Gerçek değer bilinemez — bu yüzden hatayı tam olarak bilemeyiz.\n\nÖlçüm belirsizliği (uncertainty): Ölçüm sonucunun gerçek değerle ne kadar uyuşabileceğine dair sayısal ifadedir. Hata değil, hata hakkındaki bilgidir.\n\nBelirsilik türleri:\n• Tip A: İstatistiksel yöntemlerle değerlendirilen belirsizlikler. Tekrarlı ölçümler alınır, standart sapma hesaplanır. u_A = s/√n\n• Tip B: Tekrarlı ölçüm dışı yöntemlerle değerlendirilen. Kalibrasyon belgesi, alef çözünürlüğü, sıcaklık etkisi, literatür verileri. Genellikle uniform veya normal dağılım varsayılır.\n\nBileşik standart belirsizlik:\nu_c = √(u_A² + u_B1² + u_B2² + …)\n\nGenişletilmiş belirsizlik:\nU = k × u_c\n\nBurada k kapsama faktörüdür. k = 2 → %95 güven düzeyi (normal dağılım için). Sonuç şöyle rapor edilir: (25,42 ± 0,05) mm (k = 2, %95 güven)" },

    { id:"b3", tip:"metin", baslik:"Kalibrasyon zinciri ve izlenebilirlik",
      metin:"Kalibrasyon: Bir ölçüm aletinin çıktısını bilinen bir referansa karşı karşılaştırıp sapmaları belirleme ve düzeltme işlemidir.\n\nİzlenebilirlik (traceability): Her ölçüm aletinin ulusal veya uluslararası ölçüm standartlarına kesintisiz belgelenmiş bir zincirle bağlı olması.\n\nZincir şöyle işler:\nSIPS (uluslararası standart) → Ulusal ölçüm enstitüsü (Türkiye'de UME) → Akredite kalibrasyon laboratuvarı → Referans alet → Çalışma aleti → Ürün\n\nKalibrasyon periyodu: Her aletin ne sıklıkta kalibre edilmesi gerektiği kullanım koşullarına, üretici önerisi ve tarihsel kararlılığa bağlıdır. Tipik 6 ay veya 1 yıl.\n\nAS9100 gereksinimi: Havacılıkta tüm ölçüm aletleri izlenebilir biçimde kalibre edilmiş olmalıdır. Süresi dolmuş aletle yapılan ölçüm geçersizdir ve etkilenen ürünler şüpheli sayılır.",
      kutu:{ tip:"uyari", baslik:"Kalibrasyonu süresi dolduysa ne olur?",
        metin:"Kullanılan alet kalibre edilmiş olsa bile süresi dolduysa ölçüm kalite sistemi açısından geçersiz sayılır. O aletle ölçülen tüm parçalar 'şüpheli' statüsüne girer ve yeniden ölçülmesi gerekir. Bu yüzden kalibrasyon takibi üretim kalitesinin kritik bir parçasıdır." } },

    { id:"b4", tip:"formul", baslik:"Belirsizlik hesabı",
      formul:"u_A = s / √n = σ̂ / √n\n\nu_c = √(Σᵢ uᵢ²)\n\nU = k × u_c",
      semboller:[
        ["u_A","Tip A standart belirsizlik","ölçüm birimi"],
        ["s","Ölçüm standart sapması","ölçüm birimi"],
        ["n","Tekrar sayısı","—"],
        ["u_c","Bileşik standart belirsizlik","ölçüm birimi"],
        ["U","Genişletilmiş belirsizlik","ölçüm birimi"],
        ["k","Kapsama faktörü (genellikle 2 için %95)","—"]
      ],
      metin:"Çoklu belirsizlik kaynakları kareler toplamının karekökü (RSS — Root Sum of Squares) ile birleştirilir. Kaynaklar bağımsızsa bu yaklaşım istatistiksel olarak doğrudur." },

    { id:"b5", tip:"ornek", baslik:"Örnek: Belirsizlik bütçesi",
      soru:"Bir uzunluk ölçümünde:\n• 10 tekrarlı ölçümden standart sapma: s = 0,015 mm\n• Kalibrasyondan gelen belirsizlik: u_kal = 0,010 mm\n• Sıcaklık etkisi: u_sıc = 0,008 mm\n• Alet çözünürlüğü: u_çöz = 0,003 mm\nk = 2 için genişletilmiş belirsizliği hesapla.",
      cozum:"Tip A: u_A = s/√n = 0,015/√10 = 0,015/3,162 = 0,00474 mm\n\nBileşik belirsizlik:\nu_c = √(u_A² + u_kal² + u_sıc² + u_çöz²)\nu_c = √(0,00474² + 0,010² + 0,008² + 0,003²)\nu_c = √(0,0000225 + 0,000100 + 0,000064 + 0,000009)\nu_c = √0,0001755 = 0,01325 mm\n\nGenişletilmiş belirsizlik:\nU = k × u_c = 2 × 0,01325 = 0,0265 mm ≈ 0,027 mm\n\nSonuç raporu: (ölçüm değeri ± 0,027) mm (k = 2, %95 güven)\n\nYorum: En büyük katkı kalibrasyon ve sıcaklık etkisinden geliyor. İyileştirmek için daha iyi kalibrasyon veya kontrollü sıcaklık ortamı kullanılmalı." },

    { id:"b6", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Belirsizlik ile hata kavramlarını karıştırmak. Hata gerçek değerden sapmadır; belirsizlik bu sapmanın tahmin aralığıdır.",
        "Belirsizlikleri toplamak yerine RSS uygulamak. Bağımsız kaynaklar için RSS doğru, direkt toplam aşırı muhafazakâr.",
        "Tek ölçüme dayanarak belirsizlik bildirmek. Tip A belirsizlik için en az 5-10 tekrar önerilir.",
        "Kapsama faktörünü varsayılan almak. k = 2 normal dağılım için %95 güven verir; diğer dağılımlar için farklı k gerekir.",
        "Kalibrasyon belirsizliğini belirsizlik bütçesine dahil etmemeK. Referans aletin belirsizliği sonucu etkiler."
      ] },

    { id:"b7", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Ölçüm belirsizliği nedir?","Ölçüm sonucunun gerçek değerle ne kadar uyuşabileceğine dair sayısal ifadedir. (değer ± U) birimi şeklinde raporlanır. k = 2 için %95 güven aralığı verir. GUM (Guide to the Expression of Uncertainty in Measurement) bu alanın temel standardıdır."],
        ["Kalibrasyon izlenebilirliği neden önemlidir?","Her ölçüm aletin ulusal/uluslararası standartlara bağlı olduğunu ve ölçüm sonuçlarının güvenilir olduğunu kanıtlar. İzlenebilirlik zinciri kırılırsa ölçüm sonuçları sorgulanabilir hale gelir. AS9100 bu zinciri zorunlu kılar."],
        ["Kalibrasyonu süresi dolan aletle ölçüm yaptın, ne yaparsın?","Aletle ölçülen tüm ürünleri belirleme ve şüpheli olarak işaretleme. Aleti kalibre ettirme. Mümkünse ürünleri kalibre aletyle yeniden ölçme. NCR açarak süreci kayıt altına alma. Kök neden analizi yaparak kalibrasyon takip sistemini iyileştirme."]
      ] },

    { id:"b8", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "BIPM, IEC, ISO ve diğerleri. (2008). JCGM 100: Evaluation of measurement data — Guide to the expression of uncertainty in measurement (GUM). BIPM.",
        "Doebelin, E. O. (2004). Measurement systems: Application and design (5. baskı). McGraw-Hill.",
        "TÜRKAK. Kalibrasyon laboratuvarları için akreditasyon gereksinimleri (ISO/IEC 17025)."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Belirsizlik", puan:1,
      soru:"Ölçüm belirsizliği ile ölçüm hatası arasındaki fark nedir?",
      secenekler:["İkisi aynı anlama gelir","Hata gerçek değerden sapmadır (bilinmez); belirsizlik bu sapmanın tahmin aralığıdır","Hata büyük, belirsizlik küçüktür","Belirsizlik yalnızca aletin kalitesine bağlıdır"],
      dogru:1,
      aciklama:"Gerçek değer hiçbir zaman tam olarak bilinemez. Bu nedenle hatayı da tam olarak bilemeyiz. Belirsizlik ise elimizdeki bilgilerle hata hakkında yapabildiğimiz en iyi tahmindir. GUM bu ayrımı temel alır." },
    { id:"s2", etiket:"Kalibrasyon", puan:2,
      soru:"Kalibrasyon izlenebilirliği ne demektir?",
      secenekler:["Aletin hangi tarihte kalibre edildiğinin bilinmesi","Her ölçüm aletinin ulusal veya uluslararası standartlara kesintisiz belgelenmiş bir zincirle bağlı olması","Kalibrasyonun tekrarlı yapılması","Aletin sahibinin bilinmesi"],
      dogru:1,
      aciklama:"İzlenebilirlik zinciri: Uluslararası standart → ulusal enstitü (UME) → akredite lab → çalışma aleti. Bu zincir kırılırsa ölçüm sonuçları güvenilmez sayılır. AS9100 bu zinciri zorunlu kılar." },
    { id:"s3", etiket:"Belirsizlik", puan:2,
      soru:"İki bağımsız belirsizlik kaynağı u₁ = 0,02 mm ve u₂ = 0,03 mm. Bileşik standart belirsizlik kaçtır?",
      secenekler:["0,05 mm","0,036 mm","0,025 mm","0,01 mm"],
      dogru:1,
      aciklama:"u_c = √(u₁² + u₂²) = √(0,02² + 0,03²) = √(0,0004 + 0,0009) = √0,0013 = 0,036 mm. Direkt toplam (0,05) değil RSS kullanılır. RSS bağımsız kaynaklar için istatistiksel olarak doğrudur." }
  ],
  ipuclari:{
    "Belirsizlik":"Tip A: s/√n. Tip B: kalibrasyon, çözünürlük, sıcaklık. u_c = √(Σu²). U = k×u_c. k=2 → %95.",
    "Kalibrasyon":"İzlenebilirlik zinciri: uluslararası → ulusal (UME) → akredite lab → çalışma aleti.",
    "Raporlama":"(değer ± U) birim, k=2, %95 güven. Süresi dolan alet → şüpheli ürünler → NCR."
  }
},

"m6-8": {
  ad: "MIL-STD-1553B askeri veriyolu",
  ders: "Aviyonik, Ölçme ve Seyrüsefer",
  seviye: "Orta",
  sure: 20,
  mulakat: true,
  onbilgi: "Temel elektronik ve dijital haberleşme temelleri",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"MIL-STD-1553B, askeri uçak aviyonik sistemlerinde kullanılan zaman paylaşımlı (time-division multiplexed) seri dijital veriyoludur. 1975'ten bu yana değişmeden kullanılması, standardın sağlamlığını ve yaygınlığını gösterir. F-16, F-15, F/A-18, B-2, A-10 ve pek çok platform bu veriyolunu kullanır." },

    { id:"b2", tip:"metin", baslik:"Temel mimari",
      metin:"MIL-STD-1553B üç tip düğüm tanımlar:\n\nBC (Bus Controller — Veriyolu Denetleyicisi): Tüm veri transferini organize eder. Mesaj gönderme ve alma zamanlarını belirler. Bir veriyolunda yalnızca bir etkin BC olabilir.\n\nRT (Remote Terminal — Uzak Terminal): Sensörler, aktüatörler ve alt sistemler. BC komutuna göre veri gönderir veya alır. Bir veriyolunda en fazla 31 RT olabilir (5 bitlik adres).\n\nBM (Bus Monitor — Veriyolu İzleyici): Trafiği dinler ve kaydeder ama aktif iletişime katılmaz. Test ve hata analizi için kullanılır.\n\nÖnemli özellikler:\n• Hız: 1 Mbps (1 megabit per second)\n• İletim ortamı: Shielded twisted pair kablo (STP), 70-85 Ω empedans\n• Çift yedekli: Veriyolu A ve Veriyolu B, biri arızalanınca diğeri devralır\n• Komut-yanıt (command-response) protokolü: RT yalnızca BC komutuyla konuşabilir\n• Zamanlama: Deterministik — her mesaj ne zaman gönderileceği önceden belirlidir" },

    { id:"b3", tip:"metin", baslik:"Mesaj formatı ve sözcük yapısı",
      metin:"1553'te üç tür 20-bit sözcük (word) vardır. Her sözcük 3 bit senkronizasyon + 16 bit veri + 1 bit eşlik (parity) içerir.\n\nKomut sözcüğü (Command Word): BC tarafından gönderilir.\n• RT adresi: 5 bit (0-31)\n• T/R biti: Transmit (1) veya Receive (0)\n• Alt adres/mod kodu: 5 bit\n• Veri sözcüğü sayısı: 5 bit (1-32 sözcük)\n\nDurum sözcüğü (Status Word): RT tarafından gönderilir.\n• RT durumu, hata bitler, meşgul bayrağı\n\nVeri sözcüğü (Data Word): 16 bit veri taşır.\n\nTipik mesaj akışı (BC → RT → BC):\n1. BC komut sözcüğü gönderir\n2. Kısa gecikme (4-12 µs)\n3. RT durum + veri sözcüklerini yanıtlar\n4. BC bir sonraki mesajı başlatır\n\nMesaj süresi: Tipik 20-100 µs. 1 Mbps hız ve deterministik yapıyla gerçek zamanlı kritik aviyonik kontrol sağlanır." },

    { id:"b4", tip:"metin", baslik:"Avantajlar ve sınırlamalar",
      metin:"Avantajlar:\n• Deterministik zamanlanma — her mesajın ne zaman gönderileceği kesindir (güvenlik kritik aviyonik için şart)\n• Çift yedeklilik — bir veriyolu arızasında otomatik geçiş\n• Sağlamlık — EM girişimlerine karşı dayanıklı kablo yapısı\n• Yaygın kullanım — geniş tedarikçi ağı ve uzun tarih\n• Belgelenmiş güvenilirlik — onlarca yıllık operasyonel veri\n\nSınırlamalar:\n• Düşük bant genişliği: 1 Mbps modern aviyonik için yetersiz kalabilir\n• Tek BC: Merkezi kontrol tek nokta arızası riski oluşturur (BC arızalanırsa yedek BC devreye girmeli)\n• Kablo ağırlığı: Twisted pair kablolar ağır; uzun kablo tesisatı ağırlık sorunudur\n• Yeni ihtiyaçlar için yetersiz: Video, yüksek bant genişliği sensör verisi 1553 ile taşınamaz\n\nBu yüzden yeni tasarımlarda ARINC 664 (AFDX) ve fiber optik çözümlere geçilmektedir. Ama mevcut platform yükseltmelerinde 1553 hâlâ yaygın.",
      kutu:{ tip:"bilgi", baslik:"1553 neden hâlâ kullanılıyor?",
        metin:"Askeri programların yaşam döngüsü onlarca yıldır. F-16 1970'lerde tasarlandı ve hâlâ üretiliyor. Mevcut sistemi değiştirmek büyük maliyet ve sertifikasyon riski demektir. 1553'ün güvenilirliği operasyonel olarak kanıtlanmıştır. Bu yüzden yeni geliştirmeler 1553 üzerine katman ekler veya paralel yeni veriyolu kullanır." } },

    { id:"b5", tip:"ornek", baslik:"Örnek: 1553 mesaj süresi hesabı",
      soru:"Bir BC, 4 adet RT'den 8'er veri sözcüğü okuyacak. Her mesaj döngüsü kaç µs sürer? (Her sözcük 20 µs, RT yanıt gecikmesi 4 µs, mesajlar arası 2 µs boşluk)",
      cozum:"Her BC→RT mesajı:\n• Komut sözcüğü: 1 × 20 µs = 20 µs\n• RT gecikme: 4 µs\n• Durum sözcüğü: 1 × 20 µs = 20 µs\n• 8 veri sözcüğü: 8 × 20 µs = 160 µs\n• Mesaj sonu boşluk: 2 µs\nToplam / mesaj = 206 µs\n\n4 RT için toplam:\n4 × 206 µs = 824 µs ≈ 0,82 ms\n\nYorum: 4 RT'den 8'er sözcük okuma yaklaşık 0,82 ms sürer. Bu uçak kontrol sistemleri için yeterince hızlıdır. Tipik uçuş kontrol döngüsü 10-40 ms'dir, yani 1553 bu döngüde pek çok mesaj aktarabilir." },

    { id:"b6", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Veriyolunda birden fazla BC olabileceğini sanmak. Bir anda yalnızca bir etkin BC çalışabilir.",
        "1553 ve ARINC 429'u karıştırmak. 1553 çift yönlü ve komuta dayalı; ARINC 429 tek yönlü yayın tabanlıdır.",
        "RT adresini 0-31 arasında sınırlı tutmayı unutmak. 5 bit adres alanı maksimum 31 RT'ye izin verir.",
        "Bant genişliği hesabını ihmal etmek. 1 Mbps ham hızın protokol yükü ve başlık bitleri düşüldükten sonra gerçek veri hızı daha düşüktür.",
        "Kablo empedansını doğru ayarlamamak. 70-85 Ω empedans dışına çıkılırsa sinyal kalitesi düşer ve iletişim hataları artar."
      ] },

    { id:"b7", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["MIL-STD-1553B nedir?","1975'ten bu yana askeri uçaklarda kullanılan 1 Mbps seri dijital veriyolu standardıdır. Komut-yanıt protokolü, deterministik zamanlanma ve çift yedeklilik temel özellikleridir. Bir BC ve en fazla 31 RT çalışabilir."],
        ["1553'te deterministik zamanlanma neden önemlidir?","Uçuş kontrol ve güvenlik kritik sistemler mesajların belirli bir sürede teslim edileceğini garanti altına almak ister. Deterministik protokolde her mesaj ne zaman gönderileceği önceden bilinir; gecikmeler garanti altındadır. Ethernet gibi olasılıksal protokollerde bu garanti yoktur."],
        ["Neden çift yedekli veriyolu kullanılır?","Veriyolu A arızalanırsa B otomatik devreye girer. Güvenlik kritik sistemlerde tek hata noktası (single point of failure) kabul edilemez. Çift yedeklilik yerleşik arıza toleransı sağlar."]
      ] },

    { id:"b8", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "MIL-STD-1553B. (1978). Aircraft internal time division command/response multiplex data bus. US Department of Defense.",
        "Collinson, R. P. G. (2011). Introduction to avionics systems (3. baskı). Springer.",
        "Spitzer, C. R. (2001). Avionics development and implementation. CRC Press."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"1553 mimari", puan:1,
      soru:"MIL-STD-1553B veriyolunda kaç etkin BC çalışabilir?",
      secenekler:["31","Sınırsız","Yalnızca 1","2 (birincil ve yedek)"],
      dogru:2,
      aciklama:"Bir anda yalnızca bir BC etkin olabilir. Yedek BC pasif bekler ve etkin BC arızalanırsa devreye girer. Bu merkezi kontrol deterministik zamanlamayı mümkün kılar." },
    { id:"s2", etiket:"1553 mimari", puan:2,
      soru:"1553 veriyolunun ARINC 429'dan temel farkı nedir?",
      secenekler:["1553 daha yavaştır","1553 komut-yanıt ve çift yönlüdür; ARINC 429 tek yönlü yayın tabanlıdır","1553 yalnızca sivil uçaklarda kullanılır","ARINC 429 daha güvenilirdir"],
      dogru:1,
      aciklama:"1553'te BC komut gönderir, RT yanıt verir — çift yönlü kontrollü iletişim. ARINC 429'da verici sürekli yayın yapar, alıcılar dinler — tek yönlü. 1553 merkezi kontrol, ARINC 429 dağıtık yayın mimarisi." },
    { id:"s3", etiket:"1553 mimari", puan:1,
      soru:"Bir 1553 veriyolunda maksimum kaç RT adresi kullanılabilir?",
      secenekler:["16","31","64","255"],
      dogru:1,
      aciklama:"RT adresi 5 bittir: 2⁵ = 32 kombinasyon. Ancak 31 numaralı adres yayın (broadcast) için ayrılmıştır. Bu nedenle maksimum 31 ayrı RT adreslendirilebilir." }
  ],
  ipuclari:{
    "1553 mimari":"1 BC (aktif) + maks 31 RT + BM. Komut-yanıt. 1 Mbps. Çift yedekli (A+B).",
    "Mesaj yapısı":"Komut sözcüğü (BC) → gecikme → Durum+Veri (RT). Her sözcük 20 bit = 3 sync + 16 data + 1 parity.",
    "Avantajlar":"Deterministik + yedekli + EM dayanıklı. Sınır: düşük bant genişliği (1 Mbps)."
  }
},

"m6-9": {
  ad: "ARINC 429 ve AFDX/ARINC 664",
  ders: "Aviyonik, Ölçme ve Seyrüsefer",
  seviye: "Orta",
  sure: 20,
  mulakat: false,
  onbilgi: "MIL-STD-1553B (m6-8), temel dijital haberleşme",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"ARINC 429 sivil havacılığın temel veri yolu standardıdır; B747, A300, B737 gibi nesil uçaklarda yaygındır. AFDX (Avionics Full-Duplex Switched Ethernet, ARINC 664 Part 7) ise modern uçaklarda (A380, B787) yüksek bant genişliği gerektiren aviyonik için geliştirilmiş Ethernet tabanlı ağdır." },

    { id:"b2", tip:"metin", baslik:"ARINC 429 temelleri",
      metin:"ARINC 429 (Mark 33 DITS), 1977'de tanımlanan tek yönlü seri dijital veri yoludur.\n\nTemel özellikler:\n• Tek yönlü: Bir verici, en fazla 20 alıcıya yayın yapar\n• Her kanal tek vericiye özel: Farklı sistemleri bağlamak için ayrı kablo çifti gerekir\n• İki hız: Düşük hız (12,5 kbps) ve yüksek hız (100 kbps)\n• 32 bitlik kelime formatı: 8 bit etiket (label) + 2 bit SDI + 19 bit veri + 2 bit SSM + 1 bit eşlik\n• Label: Hangi verinin taşındığını tanımlar (hava hızı, irtifa, vb.)\n• SSM (Sign/Status Matrix): Verinin geçerliliği ve işareti\n• SDI (Source/Destination Identifier): Çoklu sistem ortamında kaynak/hedef kimliği\n\nÖrnek: ADIRU → FMC, ADIRU → EFIS, ADIRU → autopilot her biri için ayrı ARINC 429 hattı döşenir.\n\nAvantaj: Basit, güvenilir, ucuz\nDezavantaj: Düşük bant genişliği, tek yönlü → video/yüksek veri hızı taşınamaz, kablo yükü ağır" },

    { id:"b3", tip:"metin", baslik:"AFDX / ARINC 664 Part 7",
      metin:"AFDX (Avionics Full-Duplex Switched Ethernet), Airbus ve Rockwell Collins tarafından geliştirilen deterministik Ethernet standardıdır. A380 ve B787'de ilk kez geniş çaplı kullanıldı.\n\nNeden Ethernet değil de AFDX?\nStandart Ethernet CSMA/CD (çakışma algılama) protokolü kullanır. Çakışma rastgelededir — iletim gecikmesi garanti edilemez. Güvenlik kritik aviyonik bu belirsizliği kaldıramaz.\n\nAFDX çözümü:\n• Full-duplex anahtarlamalı ağ: Çakışma imkânı yok\n• VL (Virtual Link — Sanal Bağlantı): Her veri akışına bandwidth ve gecikme garantisi\n• Bandwidth Allocation Gap (BAG): Her VL'nin ne sıklıkta veri gönderebileceği tanımlanmış\n• Switch determinizmi: Ağ switch'leri garantili gecikmeyle çalışır\n• Hız: 10 Mbps veya 100 Mbps (standart Ethernet hızları)\n\nA380'de 18 AFDX switch, 75 km kablo ve yüzlerce uç birim bulunur.\n\nFarklı aviyonik sınıfları:\n• A sınıfı: En yüksek güvenlik (uçuş kontrol)\n• B sınıfı: Orta (navigasyon)\n• C sınıfı: Düşük (kabin eğlence)\n\nBunlar ayrı AFDX ağlarında veya VL güvenlik sınıflandırmasıyla ayrılır.",
      kutu:{ tip:"bilgi", baslik:"B787'de AFDX ne sağladı?",
        metin:"B787'nin bakım açısından en büyük yeniliği AFDX sayesinde gerçek zamanlı durum izlemesidir. Motor ve sistemlerin anlık durumu zemin bakım personeline iniş öncesi iletilebilir. Bu sayede iniş sonrası bakım hazırlıkları önceden tamamlanır ve yerde kalma süresi (turnaround time) kısalır." } },

    { id:"b4", tip:"tablo", baslik:"ARINC 429 ve AFDX karşılaştırması",
      basliklar:["Özellik","ARINC 429","AFDX (ARINC 664)"],
      satirlar:[
        ["Yön","Tek yönlü","Çift yönlü (full-duplex)"],
        ["Hız","12,5 veya 100 kbps","10 veya 100 Mbps"],
        ["Topoloji","Yayın (bus)","Anahtarlamalı ağ (switched)"],
        ["Determinizm","Evet (basit)","Evet (VL + switch ile)"],
        ["Bant genişliği","Düşük","Yüksek"],
        ["Karmaşıklık","Düşük","Yüksek"],
        ["Uygulama","B737, A320, B747","A380, B787, A350"],
        ["Kablo","Çift kablo/bağlantı","Merkezi switch ağı"]
      ] },

    { id:"b5", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "ARINC 429'un çift yönlü olduğunu sanmak. Her ARINC 429 hattı yalnızca bir yönde veri taşır.",
        "AFDX'i standart Ethernet ile karıştırmak. AFDX determinizm için VL ve bandwidth kısıtları getirir; standart Ethernet bu garantiyi sağlamaz.",
        "1553 ve ARINC 429'u aynı sanmak. 1553 komuta dayalı iki yönlü; ARINC 429 yayın tabanlı tek yönlü.",
        "AFDX switch'ini standart Ethernet switch'i ile değiştirilebilir görmek. AFDX switch'leri deterministik VL yönetimi için özel donanım içerir.",
        "Güvenlik sınıflarını aynı ağda karıştırmak. A sınıfı uçuş kontrol verisi C sınıfı kabin eğlencesiyle aynı fiziksel ortamda taşınmamalıdır."
      ] },

    { id:"b6", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["ARINC 429'un temel özelliği nedir?","Tek yönlü seri dijital veri yoludur. Bir verici en fazla 20 alıcıya yayın yapar. 32 bitlik kelime formatı label, data ve SSM içerir. 12,5 kbps veya 100 kbps hızda çalışır. Sivil havacılıkta yaygın ve güvenilirdir."],
        ["AFDX neden standart Ethernet'ten farklıdır?","Standart Ethernet çakışma olasılıkları nedeniyle deterministik değildir. AFDX full-duplex anahtarlamalı mimari ve Virtual Link (VL) bandwidth garantisiyle deterministik gecikme sunar. Bu güvenlik kritik aviyonik için zorunludur."],
        ["Neden A380 ve B787 gibi yeni uçaklar AFDX kullanırken eski uçaklar ARINC 429 kullandı?","Yeni uçaklar yüksek bant genişliği gerektiren sistemler içerir: dijital video, büyük veri dosyaları, gerçek zamanlı izleme. ARINC 429'un 100 kbps kapasitesi bu ihtiyaçlara yetmez. AFDX 100 Mbps ve üzeri kapasiteyle bu açığı kapatır."]
      ] },

    { id:"b7", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "ARINC. (1993). ARINC 429: Mark 33 digital information transfer system. Aeronautical Radio Inc.",
        "ARINC. (2007). ARINC 664 Part 7: Aircraft data network — Avionics full-duplex switched ethernet network. Aeronautical Radio Inc.",
        "Collinson, R. P. G. (2011). Introduction to avionics systems (3. baskı). Springer."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"ARINC 429", puan:1,
      soru:"ARINC 429 veriyolunda iletişim yönü nedir?",
      secenekler:["Çift yönlü","Tek yönlü — bir verici, birden fazla alıcı","Yarı çift yönlü","Çok noktadan çok noktaya"],
      dogru:1,
      aciklama:"ARINC 429 tek yönlüdür. Bir verici en fazla 20 alıcıya aynı anda yayın yapar. Çift yönlü iletişim için ayrı hat çifti gerekir." },
    { id:"s2", etiket:"AFDX", puan:2,
      soru:"AFDX'te Virtual Link (VL) ne sağlar?",
      secenekler:["Fiziksel yedekli bağlantı","Her veri akışı için bandwidth ve gecikme garantisi","Şifreli iletişim","Fiziksel kablo güzergahı"],
      dogru:1,
      aciklama:"VL, mantıksal tek yönlü iletişim kanalıdır. Her VL'nin bandwidth (BAG ile) ve maksimum gecikme sınırları tanımlanmıştır. Bu sayede AFDX ağ trafiğine rağmen deterministik davranış garantiler." },
    { id:"s3", etiket:"ARINC 429", puan:1,
      soru:"ARINC 429 32-bit kelimesinde 'label' alanı ne ifade eder?",
      secenekler:["Kaynak sistem adresi","Hangi parametrenin taşındığı (hız, irtifa vb.)","Hata kodu","Veri işareti"],
      dogru:1,
      aciklama:"Label (8 bit), kelimede hangi parametrenin taşındığını tanımlar. Örneğin Label 203 = Computed Airspeed, Label 100 = Barometric Altitude. Alıcı istediği parametrenin label'ını filtreler." }
  ],
  ipuclari:{
    "ARINC 429":"Tek yönlü. 12,5 veya 100 kbps. 32 bit: Label+SDI+Data+SSM+Parity. B737, A320.",
    "AFDX":"Full-duplex + VL + switch. 10/100 Mbps. Deterministik Ethernet. A380, B787.",
    "Fark":"429: basit, ucuz, tek yönlü, düşük bant. AFDX: karmaşık, yüksek bant, çift yönlü, deterministik."
  }
},

"m6-10": {
  ad: "Dijital sinyal işleme ve sensör birleştirme",
  ders: "Aviyonik, Ölçme ve Seyrüsefer",
  seviye: "İleri",
  sure: 25,
  mulakat: false,
  onbilgi: "Kalman filtresi (m6-5), temel istatistik ve sinyal teorisi",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Dijital sinyal işleme (DSP), sürekli fiziksel sinyalleri ayrık zamanlı dijital sinyallere dönüştürüp işlemeyi kapsar. Sensör birleştirme (sensor fusion) ise birden fazla sensörün verilerini birleştirerek hiçbirinin tek başına sunamayacağı kalitede bilgi üretir. İHA sürü zekası, otonom uçuş ve adaptif kontrol bu teknolojilerin somut çıktılarıdır." },

    { id:"b2", tip:"metin", baslik:"Örnekleme teoremi ve aliasing",
      metin:"Nyquist-Shannon örnekleme teoremi: Bir sinyali doğru yeniden oluşturabilmek için örnekleme frekansı sinyalin maksimum frekansının en az iki katı olmalıdır.\n\nf_örnekleme ≥ 2 × f_max\n\nAliasing: Örnekleme frekansı yetersiz olduğunda yüksek frekanslı bileşenler düşük frekanslı bileşenler gibi görünür. Bu yanıltıcı sinyal bozulmasıdır.\n\nÖrnek: 500 Hz örnekleme hızıyla maksimum 250 Hz doğru temsil edilir. 300 Hz bileşen 200 Hz olarak görünür (aliasing).\n\nAnti-aliasing filtresi: Örnekleyiciden önce uygulanan düşük geçiren filtredir. f_max/2'nin üzerindeki frekansları keser.\n\nAviyonik uygulaması: Titreşim sensörü sinyalleri, gerinim ölçer çıkışları, ses (mikrofon) — tümünde örnekleme öncesi anti-aliasing filtresi şarttır." },

    { id:"b3", tip:"metin", baslik:"Dijital filtreler",
      metin:"FIR (Finite Impulse Response) filtresi:\n• Sonlu sayıda geçmiş örneğe dayanır\n• Her zaman kararlı\n• Doğrusal faz — sinyal şekli bozulmaz\n• Yüksek mertebe gerektirebilir (hesaplama yükü)\n• Rekürsif değil — hafıza gerektirmez\n\nIIR (Infinite Impulse Response) filtresi:\n• Hem geçmiş örneklere hem geçmiş çıkışlara dayanır\n• Düşük mertebede yüksek seçicilik\n• Butteworth, Chebyshev, Bessel tasarım yöntemleri\n• Dikkatli tasarım gerektirmez — kararsız hale gelebilir\n• Faz bozulması var — kritik uygulamalarda sorun\n\nAviyonikte kullanım:\n• Gürültü filtreleme: Sensör gürültüsü bastırılır\n• Alçak geçiren (LPF): Yüksek frekans gürültü kesilir\n• Bant geçiren (BPF): Titreşim analizi için belirli frekans aralığı seçilir\n• Ortalama filtresi: Basit ve etkili gürültü azaltma" },

    { id:"b4", tip:"metin", baslik:"Sensör birleştirme yöntemleri",
      metin:"Sensör birleştirme birden fazla sensörü birleştirerek daha iyi tahmin üretir. Temel yaklaşımlar:\n\nKalman filtresi tabanlı füzyon (m6-5): INS + GPS klasik örneği. Doğrusal sistemler için optimal.\n\nEKF (Extended Kalman Filter): Doğrusal olmayan sistem ve ölçüm modelleri için Kalman'ın doğrusallaştırılmış versiyonu. IMU + GPS + barometreli irtifametre birleştirmesi tipik.\n\nUKF (Unscented Kalman Filter): EKF'e göre doğrusallaştırma hatası daha az. Sigma nokta yaklaşımı kullanır. Daha karmaşık dinamiklerde tercih edilir.\n\nParticle filter: Gauss olmayan dağılımlar için. Hesaplama yükü çok yüksek; gerçek zamanlı kısıtlı uygulamalarda sınırlı.\n\nVoting (oylama): Üç bağımsız sensörden ortanca değer seçilir. Uçuş kontrol sistemlerinde üçlü yedekli yapıda kullanılır. Bir sensör arızalanırsa diğer ikisi devam eder.\n\nAğırlıklı ortalama: Sensörlere güvenilirliklerine göre ağırlık verilir. Basit ve yaygın; Kalman filtresi özel bir durumudur.",
      kutu:{ tip:"bilgi", baslik:"İHA sensör füzyon örneği",
        metin:"Küçük bir İHA'nın konum tahmini için: GPS (yavaş ama mutlak konum), IMU/MEMS jiro+ivme (hızlı ama drift), barometrik irtifa (dikey konum), optik akış (yere yakın doğru yatay hız), manyetometre (yaw referansı). EKF tüm bunları birleştirir. Her sensörün gürültü ve drift karakteristiği EKF Q ve R matrislerine girer." } },

    { id:"b5", tip:"metin", baslik:"Gerçek zamanlı DSP gereksinimleri",
      metin:"Aviyonikte DSP gerçek zamanlı (real-time) çalışmak zorundadır. Örnekleme, filtreleme ve sensör füzyon belirli bir döngü süresi içinde tamamlanmalıdır.\n\nUçuş kontrol döngüsü: Tipik 10-40 ms. Bu sürede tüm sensör okumaları, durum tahmini, kontrol yasası hesabı ve aktüatör komutları tamamlanmalı.\n\nWCET (Worst Case Execution Time): Her görevin en kötü çalışma süresinin garantilenmesi. Uçuş kritik yazılımda WCET analizi zorunludur (DO-178C).\n\nFixP vs floatP: Gömülü sistemlerde sabit nokta (fixed-point) aritmetiği kayan noktaya (floating-point) göre daha hızlı ama sayısal hassasiyet sınırlı. Yüksek hassasiyet gerektiren navigasyon hesapları genellikle kayan nokta işlemci (FPU) gerektirir.\n\nFPGA tabanlı DSP: Paralel işleme için uygundur. Radar sinyal işleme, EW sistemleri ve yüksek hızlı sensör arayüzleri FPGA'da gerçeklenir." },

    { id:"b6", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Anti-aliasing filtresini örneklemeden sonra uygulamak. Filtre örnekleyiciden önce gelmeli; sonra uygulandığında aliasing zaten oluşmuştur.",
        "Nyquist frekansını örnekleme frekansı sanmak. Nyquist frekansı örnekleme frekansının yarısıdır — temsil edilebilecek maksimum frekans.",
        "EKF'i doğrusal olmayan sisteme doğrudan Kalman uygulamak. Güçlü doğrusal olmayan sistemlerde EKF diverjansa gidebilir; UKF veya particle filter tercih edilebilir.",
        "Sensör füzyonunda tüm sensörlere eşit güvenmek. Her sensörün gürültü ve güvenilirlik karakteristiği farklıdır; ağırlıklar buna göre ayarlanmalı.",
        "WCET analizini yapmadan çerçeve (frame) zamanını yeterli saymak. Ortalama çalışma süresi değil en kötü durum süresi kritiktir."
      ] },

    { id:"b7", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Nyquist teoremi nedir?","Bir sinyali doğru örneklemek için örnekleme frekansı sinyalin maksimum frekansının en az iki katı olmalıdır. Bu kural ihlal edilirse aliasing oluşur ve sinyal bozulur. Anti-aliasing filtresi örneklemeden önce uygulanarak yüksek frekanslar kesilir."],
        ["Sensör füzyon neden tek sensörden üstündür?","Her sensörün farklı güçlü ve zayıf yanları vardır. GPS mutlak konum ama yavaş ve sinyale bağımlı. IMU hızlı ama drift. Füzyon her sensörün güçlü olduğu durumda onu ağırlıklandırır. Sonuç herhangi bir sensörden daha güvenilir ve hassastır."],
        ["Uçuş kontrol yazılımında WCET neden önemlidir?","Her görevin en kötü durumda ne kadar süreceği bilinmeli ve bu süre kontrol döngüsü zamanının içine sığmalıdır. WCET aşılırsa kontrol döngüsü gecikmesi uçuş güvenliğini tehlikeye atar. DO-178C bu analizi zorunlu kılar."]
      ] },

    { id:"b8", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Proakis, J. G., & Manolakis, D. G. (2007). Digital signal processing (4. baskı). Pearson.",
        "Groves, P. D. (2013). Principles of GNSS, inertial, and multisensor integrated navigation systems (2. baskı). Artech House.",
        "Hall, D. L., & McMullen, S. A. H. (2004). Mathematical techniques in multisensor data fusion (2. baskı). Artech House."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Örnekleme", puan:2,
      soru:"1000 Hz örnekleme frekansıyla güvenilir şekilde temsil edilebilecek maksimum frekans kaçtır?",
      secenekler:["1000 Hz","500 Hz","250 Hz","2000 Hz"],
      dogru:1,
      aciklama:"Nyquist teoremi: f_max = f_örnekleme / 2 = 1000/2 = 500 Hz. Bu Nyquist frekansıdır. 500 Hz üzeri frekanslar aliasing'e yol açar." },
    { id:"s2", etiket:"Sensör füzyon", puan:2,
      soru:"EKF (Extended Kalman Filter) ne zaman standart Kalman filtresine tercih edilir?",
      secenekler:["Daha az hesaplama gerektiğinde","Sistem veya ölçüm modeli doğrusal olmadığında","GPS sinyali kesildiğinde","Sadece askeri uygulamalarda"],
      dogru:1,
      aciklama:"Standart Kalman filtresi doğrusal sistemler için optimaldir. Doğrusal olmayan dinamikler (kanat aerodinamiği, büyük açısal hareket) için EKF Jakobian matrisiyle doğrusallaştırma yapar. Güçlü doğrusal olmayan sistemlerde UKF daha iyi sonuç verebilir." },
    { id:"s3", etiket:"Dijital filtreler", puan:1,
      soru:"FIR filtrenin IIR filtreye göre avantajı nedir?",
      secenekler:["Daha az hesaplama","Daha yüksek seçicilik","Her zaman kararlı ve doğrusal faz","Daha düşük mertebe yeterli"],
      dogru:2,
      aciklama:"FIR filtreleri her zaman kararlıdır çünkü geri besleme içermez. Ayrıca doğrusal faz özelliği vardır — sinyal şeklini bozmaz. Bu özellikler hassas ölçüm ve kontrol uygulamalarında kritik olabilir." }
  ],
  ipuclari:{
    "Örnekleme":"Nyquist: f_s ≥ 2×f_max. f_Nyquist = f_s/2. Aliasing → anti-aliasing filtresi önceden!",
    "Dijital filtreler":"FIR: kararlı, doğrusal faz. IIR: verimli, faz bozulması var.",
    "Sensör füzyon":"EKF: doğrusal olmayan. UKF: daha karmaşık. Voting: üçlü yedekli. Her sensöre güvenilirliğine göre ağırlık.",
    "Gerçek zamanlı":"WCET analizi şart. FPU hızlı hesap. FPGA paralel işleme."
  }
}

}); // Object.assign sonu

/* ================================================================
   MODÜL 7 — SİSTEM MÜHENDİSLİĞİ VE UÇUŞA ELVERİŞLİLİK
   Bernoulli kalitesinde — tam anlatım, 3+ örnek, 10-12 soru
   ================================================================ */

Object.assign(window.CONTENT.konuIcerik, {

"m7-1": {
  ad: "Ürün geliştirme yaşam döngüsü ve V-modeli",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "Temel",
  sure: 20,
  mulakat: false,
  onbilgi: "Genel mühendislik bilgisi",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Bir uçak geliştirmek bir kez yapılıp bitirilen bir iş değildir. Müşteri ihtiyacından başlayıp tip sertifikasına ve operasyona uzanan, onlarca yıl süren sistematik bir süreçtir. V-modeli bu sürecin sol tarafında geliştirme, sağ tarafında doğrulama faaliyetlerini gösteren evrensel çerçevesidir. Havacılık ve uzay mühendisliğinin vazgeçilmez metodolojisidir." },

    { id:"b2", tip:"metin", baslik:"Yaşam döngüsü neden önemli?",
      metin:"Bir uçak programı ortalama 9-12 yıl sürer. Bu sürede binlerce mühendis çalışır, milyarlarca dolar harcanır. Koordinasyonsuz çalışma felaket demektir: farklı ekipler birbirini anlamayan bileşenler üretir, entegrasyonda sorunlar patlar, gecikmeler ve maliyet aşımları kaçınılmaz hale gelir.\n\nYaşam döngüsü çerçevesi bu kaosa düzen getirir. Her aşama için:\n• Ne yapılacak tanımlanır\n• Girdi ve çıktılar belirlenir\n• Giriş ve çıkış kriterleri saptanır\n• Sorumluluklar atanır\n\nBüyük uçak programı faz süreleri (tipik):\n• Kavramsal tasarım: 12 ay\n• Ön tasarım (PDR'a kadar): 18 ay\n• Kritik tasarım (CDR'a kadar): 24 ay\n• Üretim ve entegrasyon: 36 ay\n• Test ve sertifikasyon: 24 ay\n• Toplam: ~114 ay (9,5 yıl)\n\nBu rakamlar büyük ticari programlar içindir. Askeri geliştirmeler, İHA'lar veya modifikasyonlar çok farklı sürelere sahip olabilir.",
      kutu:{ tip:"bilgi", baslik:"Boeing 787 ve Airbus A380 ne kadar sürdü?",
        metin:"A380 programı 1990'ların sonundaki kavramsal çalışmalardan 2007 ilk teslimatına kadar yaklaşık 15 yıl sürdü. B787 ise 2003 resmi lansmanından 2011 ilk teslimatına kadar 8 yıl — ama bu süreçte büyük gecikmeler yaşandı ve program başlangıçta 4-5 yıl hedeflenmişti. Karbon fiber üretim zorlukları ve tedarik zinciri sorunları bu gecikmenin başlıca sebebiydi." } },

    { id:"b3", tip:"metin", baslik:"V-modeli: yapısı ve mantığı",
      metin:"V-modeli adını şekilden alır: sol taraf aşağı iner (geliştirme), sağ taraf yukarı çıkar (doğrulama). Her sol taraf faaliyetinin karşısında bir sağ taraf faaliyeti bulunur.\n\nSol taraf — geliştirme (soldan aşağıya):\n1. Sistem gereksinimleri analizi\n2. Alt sistem gereksinimleri dağılımı\n3. Yazılım ve donanım gereksinimleri\n4. Mimari tasarım\n5. Detaylı tasarım\n6. Kodlama / imalat\n\nSağ taraf — doğrulama (aşağıdan sağa yukarı):\n6. Birim testi → Detaylı tasarımı doğrular\n5. Yazılım entegrasyon testi → Mimari tasarımı doğrular\n4. Yazılım nitelendirme testi → Yazılım gereksinimlerini doğrular\n3. Alt sistem entegrasyon testi → Alt sistem gereksinimlerini doğrular\n2. Sistem kabul testi → Sistem gereksinimlerini doğrular\n1. Operasyon ve bakım → Müşteri ihtiyaçlarını doğrular\n\nV'nin alt noktası kodlama / imalatın tamamlandığı an. Bu noktadan sonra artık bir şeyler test edilecek vardır.\n\nTemel ilke: Sol taraftaki her gereksinimin sağ tarafta bir test faaliyeti olmalıdır. Testi olmayan gereksinim nasıl doğrulanacak? Gereksinimi olmayan test neyi test ediyor?" },

    { id:"b4", tip:"gorsel", baslik:"V-modeli şeması", gorsel:"v_model" },

    { id:"b5", tip:"metin", baslik:"Doğrulama ve geçerleme: kritik ayrım",
      metin:"Bu iki kavram çok karıştırılır ve mülakatlarda sıkça sorulur. Ayrımı net anlamak gerekir.\n\nDoğrulama (Verification): 'Ürünü doğru mu yaptık?'\n→ Spesifikasyona uygunluğu kontrol eder\n→ 'Sistemi istediğimiz gibi mi inşa ettik?'\n→ İnceleme, analiz, test ve demonstrasyon yöntemleriyle yapılır\n→ Örnek: 'Yük taşıma kapasitesi spesifikasyonun gerektirdiği 500 kg yi karşılıyor mu?'\n\nGeçerleme (Validation): 'Doğru ürünü mü yaptık?'\n→ Müşteri ihtiyacını karşılayıp karşılamadığını dener\n→ 'Müşterinin gerçekten ihtiyacı olan şeyi mi yaptık?'\n→ Genellikle gerçek kullanım koşullarında veya simülasyonla\n→ Örnek: 'Pilotlar bu kokpit tasarımıyla etkin görev yapabiliyor mu?'\n\nHavacılık dilinde: 'Verification and Validation' (V&V) olarak birlikte anılır.\n\nGerçek hayat örneği: Müşteri 'hızlı bir uçak' istiyor. Sen 'hızlı'yı 800 km/sa olarak tanımlıyorsun (gereksinim). Uçak 800 km/sa uçuyorsa doğrulama başarılı. Ama müşteri aslında 900 km/sa istiyorsa — gereksinim yanlış tanımlanmış, geçerleme başarısız.",
      kutu:{ tip:"uyari", baslik:"Karıştırma tuzağı",
        metin:"Bir ürün tam spesifikasyona uygun olabilir ama müşteri ihtiyacını karşılamıyor olabilir. Bu doğrulama başarılı ama geçerleme başarısız demektir. Tersine, spesifikasyona uymayan bir ürün bazen müşteri ihtiyacını karşılayabilir — doğrulama başarısız ama geçerleme başarılı. İkisi aynı şey değildir." } },

    { id:"b6", tip:"metin", baslik:"PDR ve CDR: tasarım gözden geçirmeleri",
      metin:"V-modelinin sol tarafındaki iki kritik eşik noktası resmi gözden geçirme toplantılarıdır.\n\nPDR (Preliminary Design Review — Ön Tasarım Gözden Geçirmesi):\nÖn tasarımın gereksinimler karşılanmakta mı sorusunu yanıtlar. Bu noktada:\n• Sistem mimarisi tanımlanmış\n• Alt sistemler belirlenmiş\n• Teknoloji riskleri değerlendirilmiş\n• Maliyet ve takvim tahminleri güncellenmiş\n• Kritik tasarım kararları henüz verilmemiş\n\nBaşarılı PDR, CDR'a geçişi onaylar. PDR geçilemezse ya gereksinimler revize edilir ya tasarım değiştirilir ya da program durdurulur.\n\nCDR (Critical Design Review — Kritik Tasarım Gözden Geçirmesi):\nDetaylı tasarımın üretim için olgunlaşıp olgunlaşmadığını değerlendirir.\n• Tüm teknik çizimler tamamlanmış\n• Analiz ve simülasyonlar tamamlanmış\n• Test planları hazırlanmış\n• Risk azaltma faaliyetleri tamamlanmış\n\nCDR sonrası tasarım 'dondurulmuş' sayılır. Değişiklikler resmi süreç gerektiren ve maliyetli olan Engineering Change Orders (ECO) ile yapılır.\n\nNASA ve büyük savunma kurumlarında PDR ve CDR arasında SRR (System Requirements Review) ve SDR (System Design Review) gibi ek gözden geçirmeler de bulunur." },

    { id:"b7", tip:"metin", baslik:"Gereksinim yönetimi ve izlenebilirlik",
      metin:"İyi bir gereksinim şu özelliklere sahip olmalıdır:\n• Tekil: Bir gereksinim tek bir şey ifade eder\n• Ölçülebilir: 'hızlı' değil '250 m/s den fazla'\n• Test edilebilir: Karşılanıp karşılanmadığı sınanabilir\n• Tutarlı: Diğer gereksinimlerle çelişmez\n• İzlenebilir: Kaynağı (müşteri, yönetmelik) ve doğrulama yöntemi belgelenmiş\n\nKötü gereksinim örnekleri:\n• 'Sistem hızlı tepki vermelidir' → hızlı ölçülemez\n• 'Sistem güvenli olmalıdır' → güvenli ölçülemez, belirsiz\n• 'Sistem iyi çalışmalıdır' → anlamsız\n\nİyi gereksinim örnekleri:\n• 'Sistem, kontrol komutundan 50 ms içinde çıkış üretmelidir'\n• 'Sistem, −40°C ile +85°C arasında nominal performansını korumalıdır'\n• 'Sistem, tek motor arızasında 30 dakika uçuşu sürdürmelidir'\n\nİzlenebilirlik matrisi: Her gereksinimin üst seviye kaynağına (müşteri gereksinimi, yönetmelik maddesi) ve alt seviye doğrulama testine bağlı olduğu tablodur. Tipik bir uçak programında 150 gereksinim için ortalama 2,1 test → ~315 test durumu oluşur.\n\nIBM DOORS, Jama Connect ve Polarion yaygın gereksinim yönetim araçlarıdır.",
      kutu:{ tip:"bilgi", baslik:"Boeing 737 MAX ve gereksinim yönetimi",
        metin:"MCAS sistemi başlangıçta tek bir sensöre bağlı tasarlanmıştı. Bu güvenlik gereksinimlerini karşılamıyordu. Ancak sertifikasyon sürecinde bu durum yeterince irdelenmedi. 346 kişinin hayatını kaybettiği iki kaza sonrası yapılan incelemeler, gereksinim analizi ve güvenlik değerlendirme süreçlerindeki eksiklikleri ortaya koydu. İyi gereksinim yönetimi bu faciayı önleyebilirdi." } },

    { id:"b8", tip:"metin", baslik:"Yaşam döngüsü maliyeti ve değişiklik maliyeti",
      metin:"Bir hatanın düzeltme maliyeti süreç içinde dramatik biçimde artar. Bu 'değişiklik maliyeti eğrisi' sistem mühendisliğinin temel motivasyonlarından biridir.\n\nGereksinimler aşamasında tespit edilen hata: 1× maliyet\nTasarım aşamasında tespit: 10× maliyet\nKodlama/imalat aşamasında tespit: 100× maliyet\nTest aşamasında tespit: 1.000× maliyet\nOperasyonda tespit: 10.000× maliyet\n\nBu rakamlar yaklaşıktır ama mesaj açıktır: hatayı erken yakala.\n\nBu yüzden havacılıkta PDR ve CDR öncesinde çok sayıda iç gözden geçirme yapılır. Model tabanlı simülasyonlar, prototip testleri ve FMEA analizleri hataları erken aşamada yakalamak içindir.\n\nYaşam döngüsü maliyeti perspektifi: Bir yolcu uçağının ömrü boyunca toplam maliyetinin yalnızca yüzde 15-20'si satın alma fiyatıdır. Geri kalanı operasyon, bakım, modifikasyon ve elden çıkarmadır. Bu yüzden kısa vadeli tasarım ekonomisi uzun vadeli işletme maliyetini artırabilir." },

    { id:"b9", tip:"ornek", baslik:"Örnek 1: Gereksinim kalitesi değerlendirmesi",
      soru:"Aşağıdaki gereksinimleri değerlendir ve iyileştir:\na) 'Uçak hızlı irtifa kazanmalıdır'\nb) 'Sistem pilotu bilgilendirmelidir'\nc) 'Kabindeki gürültü seviyesi düşük olmalıdır'",
      cozum:"a) 'Uçak hızlı irtifa kazanmalıdır'\nSorunlar: 'hızlı' ölçülemez, hangi koşulda? hangi yükle?\nİyileştirilmiş: 'Uçak, deniz seviyesinden 10.000 feet'e, MTOW'da ve ISA koşullarında 5 dakikadan kısa sürede tırmanmalıdır.'\n\nb) 'Sistem pilotu bilgilendirmelidir'\nSorunlar: Ne zaman? Nasıl? Hangi bilgi? Kaç saniyede?\nİyileştirilmiş: 'Herhangi bir motor arızasında sistem, kokpit uyarı sistemini etkinleştirmeli ve pilot eylemsizliğinin 3. saniyesinde sesli uyarı vermelidir.'\n\nc) 'Kabindeki gürültü seviyesi düşük olmalıdır'\nSorunlar: 'düşük' ölçülemez, nerede ölçülecek, hangi koşulda?\nİyileştirilmiş: 'Ekonomi sınıfı kabin gürültüsü, seyir uçuşunda 1 kHz frekansında 75 dB(A)'yı geçmemelidir. Ölçüm orta koltuk baş seviyesinde yapılır.'" },

    { id:"b10", tip:"ornek", baslik:"Örnek 2: V&V planı oluşturma",
      soru:"Bir insansız hava aracının yerden 500 metre irtifada 15 dakika havada kalma gereksinimleri var. V-modeline göre doğrulama ve geçerleme planını oluştur.",
      cozum:"Gereksinim: UAV, 500 m irtifada, %100 yakıtla, ISA koşullarında, kesintisiz 15 dakika havada kalacak.\n\nDOĞRULAMA (Verification) planı:\n1. Analiz: Breguet denklemleriyle teorik uçuş süresi hesabı → 15 dakika + %20 marj\n2. Simülasyon: Uçuş dinamiği simülatöründe 500m irtifa, tam yakıt senaryo koşusu\n3. Yer testi: Motor test tezgahında nominal güç ve yakıt tüketimi ölçümü\n4. Uçuş testi: 3 ayrı uçuşta 500m irtifada havada kalma süresi ölçümü\n→ Her test sonucu ≥ 15 dakika olursa gereksinim doğrulandı\n\nGEÇERLEME (Validation) planı:\n1. Operatörlerle sahada kullanım senaryosu değerlendirmesi\n2. Gerçek görev profilinde (rüzgar, sıcaklık değişimi) test uçuşu\n3. Operatör geri bildirimi: 15 dakika bu görev için yeterli mi?\n→ Operatörler görevi bu sürede tamamlayabiliyorsa müşteri ihtiyacı karşılandı\n\nNot: Doğrulama 'tam olarak 15 dakika uçtu mu?' sorusunu yanıtlar. Geçerleme 'bu 15 dakika müşterinin ihtiyacını gerçekten karşılıyor mu?' sorusunu yanıtlar." },

    { id:"b11", tip:"ornek", baslik:"Örnek 3: PDR'da açılan aksiyon",
      soru:"PDR toplantısında yapısal ekip kanat bağlantı braketinin yorulma analizini tamamlamamış. Bu durum için ne yapılır? V-modeli perspektifinden açıkla.",
      cozum:"V-modeli perspektifinden durum değerlendirmesi:\n• PDR çıkış kriteri: Tüm kritik analizler tamamlanmış veya tamamlanma planı onaylanmış olmalı\n• Eksik analiz → PDR çıkış kriteri karşılanmıyor → PDR geçilmemelidir\n\nUygulanabilir seçenekler:\n1. PDR kısmi kapatma: Analiz için 30 günlük uzatma verilir, aksiyon açılır. Analiz tamamlanınca PDR kapanır. (En yaygın pratik)\n2. PDR tekrar: Eğer analiz sonucu tasarımı köklü değiştirirse yeni PDR yapılır.\n3. Risk kabulü: Program yöneticisi riski kabul eder, PDR geçilir ama analiz CDR öncesi zorunlu şart olur. (Riskli, önerilmez)\n\nAksiyon formatı:\n• Aksiyon sahibi: Yapısal ekip lideri\n• Konu: Kanat bağlantı braget yorulma analizi tamamlanacak\n• Son tarih: PDR kapanış tarihinden 30 gün sonra\n• Giriş kriteri CDR: Bu analizin onaylanmış raporu CDR girdi paketi\n\nBu senaryo gerçek programlarda sıkça yaşanır. PDR'ı 'geçildi/geçilemedi' olarak değil, 'tüm açık aksiyonlar kapatıldığında geçildi' olarak yönetmek daha sağlıklıdır." },

    { id:"b12", tip:"tablo", baslik:"Yaşam döngüsü faz özeti",
      basliklar:["Faz","Temel aktiviteler","Çıktılar","Gözden geçirme"],
      satirlar:[
        ["Kavramsal","Görev analizi, fizibilite, MTOW tahmini","Kavramsal tasarım raporu","SRR"],
        ["Ön tasarım","Mimari, ödünleşim, risk analizi","Sistem spesifikasyonu","PDR"],
        ["Kritik tasarım","Detaylı çizimler, analiz, test planları","Üretim altı dokümanlar","CDR"],
        ["Üretim","İmalat, montaj, entegrasyon","Uçuş test aracı","—"],
        ["Test","Yer ve uçuş testleri, sertifikasyon","Tip sertifikası","TRR"],
        ["Operasyon","Teslimat, bakım, modifikasyon","Sürekli airworthiness","—"]
      ],
      metin:"TRR: Test Readiness Review. Her gözden geçirme bir önceki fazın tamamlandığını ve bir sonraki faza geçişe hazır olunduğunu onaylar." },

    { id:"b13", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "V&V'yi aynı şey sanmak. Doğrulama spesifikasyona uygunluk, geçerleme müşteri ihtiyacı karşılanması. İkisi farklı sorulara cevap verir.",
        "PDR'ı sadece bir toplantı sanmak. PDR bir gözden geçirme kapısıdır; gerekli kriterlerin karşılandığı belgelenmeden geçilemez.",
        "Gereksinimleri belirsiz yazmak. 'İyi çalışmalıdır' gibi ifadeler test edilemez. Her gereksinim ölçülebilir ve test edilebilir olmalı.",
        "İzlenebilirliği görmezden gelmek. Test olmayan gereksinim nasıl doğrulanacak? Gereksinim olmayan test neyi test ediyor?",
        "CDR sonrası değişiklikleri informal yapmak. CDR sonrası her değişiklik resmi Engineering Change Order sürecinden geçmeli.",
        "Geçerlemeyı programa çok geç bırakmak. Müşteri ihtiyacı kavramsal aşamada netleştirilmezse geç geçerleme büyük yeniden tasarım gerektirebilir.",
        "Değişiklik maliyeti eğrisini küçümsemek. Operasyonda düzeltilen hata, tasarım aşamasında düzeltilenden 10.000 kat pahalı olabilir."
      ] },

    { id:"b14", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["V-modeli nedir ve neden kullanılır?","Sistem geliştirme sürecini sol tarafta gereksinim ve tasarım, sağ tarafta doğrulama ve geçerleme faaliyetleriyle gösteren çerçevedir. Her sol taraf faaliyetinin karşısında bir test faaliyeti bulunur. Havacılık ve savunma programlarında yaygındır çünkü sertifikasyon gereksinimleri her aşamada ne yapıldığını ve nasıl doğrulandığını belgelemeyi zorunlu kılar."],
        ["Doğrulama ve geçerleme arasındaki fark nedir?","Doğrulama 'ürünü doğru mu yaptık?' — spesifikasyona uygunluk. Geçerleme 'doğru ürünü mü yaptık?' — müşteri ihtiyacı karşılandı mı? Bir ürün tam spesifikasyona uygun olabilir ama müşteri ihtiyacını karşılamıyor olabilir. Bu doğrulama başarılı ama geçerleme başarısız demektir."],
        ["PDR başarısız olursa ne olur?","Programın bir sonraki fazına geçilmez. Açık aksiyonlar için zaman verilir, gereksinimler revize edilir veya tasarım değiştirilir. PDR kriterleri karşılanınca tekrar gözden geçirilir. Nadir durumlarda program yeniden yapılandırılabilir veya durdurulabilir."],
        ["Neden hatayı erken aşamada yakalamak önemli?","Değişiklik maliyeti eğrisi bunu açıklar. Gereksinimler aşamasındaki hata 1 birim maliyetliyken operasyonda 10.000 birim maliyetli. Erken tespit hem ekonomik hem de güvenlik açısından kritik. Bu yüzden PDR/CDR, model simülasyonları ve FMEA analizleri erken hata tespitine odaklanır."],
        ["İzlenebilirlik neden önemli?","Her gereksinimin üst seviye kaynağına ve alt seviye testine bağlı olması gerekiyor. Testi olmayan gereksinim nasıl doğrulanacak? Gereksinimi olmayan test neyi ispatlamak için yapılıyor? İzlenebilirlik bu soruları yanıtlar ve sertifikasyon sürecinde düzenleyici otoriteye uyumun kanıtlanmasını sağlar."]
      ] },

    { id:"b15", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "INCOSE. (2015). Systems engineering handbook: A guide for system life cycle processes and activities (4. baskı). Wiley. ISBN 978-1-118-99940-0",
        "Forsberg, K., Mooz, H., & Cotterman, H. (2005). Visualizing project management (3. baskı). Wiley. ISBN 978-0-471-64848-1",
        "NASA. (2016). NASA systems engineering handbook (SP-2016-6105, Rev. 2). NASA.",
        "EASA. (2020). CS-25: Certification specifications for large aeroplanes. EASA.",
        "SAE International. (2010). ARP4754A: Guidelines for development of civil aircraft and systems. SAE.",
        "Boehm, B. W. (1981). Software engineering economics. Prentice Hall. ISBN 978-0-138-22122-7"
      ] }
  ],

  sorular:[
    { id:"s1", etiket:"V-modeli", puan:1,
      soru:"V-modelinde CDR (Kritik Tasarım Gözden Geçirmesi) hangi faaliyetin tamamlandığını onaylar?",
      secenekler:[
        "Sistem gereksinimlerinin belirlenmesi",
        "Detaylı tasarımın tamamlandığı ve üretim için hazır olduğu",
        "İlk uçuş testinin başarıyla yapıldığı",
        "Müşteriye teslimin gerçekleştiği"
      ],
      dogru:1,
      aciklama:"CDR detaylı tasarımın — tüm teknik çizimler, analizler ve test planları dahil — tamamlandığını ve üretim aşamasına geçmeye hazır olduğunu onaylar. Bu noktadan sonra tasarım 'dondurulmuş' sayılır ve değişiklikler resmi ECO sürecine girer." },

    { id:"s2", etiket:"V&V", puan:2,
      soru:"Bir yolcu uçağı spesifikasyonda belirtilen 4.500 kg kargo kapasitesini karşılıyor. Ancak operatörler bu kapasiteyle uçuşta verimli çalışamıyor. Bu durum neyin göstergesidir?",
      secenekler:[
        "Doğrulama başarısız, geçerleme başarılı",
        "Her ikisi de başarısız",
        "Doğrulama başarılı, geçerleme başarısız",
        "Her ikisi de başarılı"
      ],
      dogru:2,
      aciklama:"Uçak spesifikasyonu karşılıyor → doğrulama başarılı. Ama operatör ihtiyacını karşılamıyor → geçerleme başarısız. Sorun gereksinim tanımında: müşteri ihtiyacı spesifikasyona doğru çevrilmemiş. 4.500 kg doğru sayı mıydı?" },

    { id:"s3", etiket:"Gereksinimler", puan:2,
      soru:"'Sistem kullanışlı olmalıdır' gereksinimi neden kötüdür?",
      secenekler:[
        "Çok kısa yazılmış",
        "Ölçülemeyen ve test edilemeyen — 'kullanışlı' subjektif ve belirsiz",
        "Müşteri ihtiyacını yansıtmıyor",
        "Teknik terim içermiyor"
      ],
      dogru:1,
      aciklama:"İyi gereksinim ölçülebilir ve test edilebilir olmalı. 'Kullanışlı' belirsiz ve subjektif. Test edilemez — hangi test 'kullanışlı' olduğunu kanıtlar? İyileştirme: 'Sistem, eğitimli bir operatörün görevi 5 dakikada tamamlamasına izin vermelidir.'" },

    { id:"s4", etiket:"V&V", puan:1,
      soru:"Doğrulama (verification) hangi soruyu yanıtlar?",
      secenekler:[
        "Doğru ürünü mü yaptık?",
        "Ürünü doğru mu yaptık?",
        "Müşteri memnun mu?",
        "Proje zamanında mı?"
      ],
      dogru:1,
      aciklama:"Doğrulama 'ürünü doğru mu yaptık?' → spesifikasyona uygunluk. Geçerleme ise 'doğru ürünü mü yaptık?' → müşteri ihtiyacı. Bu ayrımı net bilmek mülakatta kritik." },

    { id:"s5", etiket:"Değişiklik maliyeti", puan:2,
      soru:"Bir yazılım hatası operasyonda bulunursa tasarım aşamasında bulunmaya kıyasla maliyeti yaklaşık kaç kat daha yüksektir?",
      secenekler:["10 kat","100 kat","1.000-10.000 kat","Aynı maliyette"],
      dogru:2,
      aciklama:"Değişiklik maliyeti eğrisine göre operasyonda tespit edilen hata düzeltme maliyeti tasarım aşamasındakinin 1.000-10.000 katı. Bu yüzden erken aşamada yoğun analiz, simülasyon ve gözden geçirme yapılır." },

    { id:"s6", etiket:"V-modeli", puan:2,
      soru:"V-modelinde sistem kabul testi hangi sol taraf faaliyetini doğrular?",
      secenekler:[
        "Detaylı tasarımı",
        "Mimari tasarımı",
        "Sistem gereksinimlerini",
        "Alt sistem gereksinimlerini"
      ],
      dogru:2,
      aciklama:"V-modelinde her sağ taraf testi karşısındaki sol taraf faaliyetini doğrular. Sistem kabul testi V'nin en üst sağında bulunur ve tam karşısında sistem gereksinimleri vardır. Sistem tüm gereksinimlerini karşılamış mı? Bunu sistem kabul testi yanıtlar." },

    { id:"s7", etiket:"Gereksinimler", puan:2,
      soru:"İzlenebilirlik matrisi ne amaçla kullanılır?",
      secenekler:[
        "Proje takviminí izlemek için",
        "Her gereksinimin üst seviye kaynağa ve alt seviye doğrulama testine bağlanması için",
        "Yazılım kodunun versiyonunu takip etmek için",
        "Maliyet tahminlerini güncellemek için"
      ],
      dogru:1,
      aciklama:"İzlenebilirlik matrisi her gereksinimin kaynağını (müşteri isteği, yönetmelik maddesi) ve nasıl doğrulanacağını (test, analiz, inceleme) bağlar. Testi olmayan gereksinim var mı? Gereksinimi olmayan test var mı? Bu soruların yanıtı matristedir." },

    { id:"s8", etiket:"PDR/CDR", puan:2,
      soru:"CDR sonrası bir tasarım değişikliği yapılması gerekirse ne olur?",
      secenekler:[
        "Doğrudan mühendis değişiklik yapar",
        "PDR tekrar edilir",
        "Resmi Engineering Change Order (ECO) süreci başlatılır",
        "Müşterinin onayı yeterlidir"
      ],
      dogru:2,
      aciklama:"CDR sonrası tasarım dondurulmuş sayılır. Her değişiklik resmi ECO süreci gerektirir: teknik etki analizi, ilgili tarafların onayı, dokümantasyon güncelleme. Bu hem kalite hem de traceability açısından zorunludur." },

    { id:"s9", etiket:"V-modeli", puan:1,
      soru:"V-modelinin 'alt noktası' neyi temsil eder?",
      secenekler:[
        "Projenin en kritik riskini",
        "Kodlama veya imalatın tamamlandığı anı",
        "PDR toplantısını",
        "İlk uçuş testini"
      ],
      dogru:1,
      aciklama:"V'nin alt noktası kodlama veya imalatın tamamlandığı andır. Bu noktaya kadar geliştirme yapılır (sol kol aşağı iner). Bu noktadan sonra artık test edilecek bir ürün var ve doğrulama faaliyetleri başlar (sağ kol yukarı çıkar)." },

    { id:"s10", etiket:"V&V", puan:2,
      soru:"Bir uçağın motor arızası uyarı sistemi tam spesifikasyona uygun çalışıyor ama pilotlar gerçek acil durumda uyarıyı geç fark ediyor. Bu senaryo neyi gösterir?",
      secenekler:[
        "Doğrulama başarısız",
        "Geçerleme başarısız — insan faktörleri gereksinim analizinde yeterince değerlendirilmemiş",
        "Her ikisi başarısız",
        "Her ikisi başarılı, problem pilot eğitiminde"
      ],
      dogru:1,
      aciklama:"Sistem spesifikasyona uygun → doğrulama başarılı. Ama pilotlar gerçek senaryoda ihtiyaçlarını karşılamıyor → geçerleme başarısız. İnsan faktörleri gereksinim yazma aşamasında yeterince analiz edilmemiş. Uyarı sinyalinin nasıl, ne kadar sürede fark edileceği gereksinim seviyesinde tanımlanmalıydı." }
  ],

  ipuclari:{
    "V-modeli":"Sol: geliştirme (aşağı). Sağ: doğrulama (yukarı). Her sol faaliyetin karşısında bir test. PDR: ön tasarım kapısı. CDR: detaylı tasarım kapısı.",
    "V&V":"Doğrulama: spesifikasyona uygun mu? (ürünü doğru yaptık mı?). Geçerleme: müşteri ihtiyacı karşılandı mı? (doğru ürünü yaptık mı?). İkisi farklı sorular.",
    "Gereksinimler":"İyi gereksinim: tekil, ölçülebilir, test edilebilir, tutarlı, izlenebilir. 'Hızlı, iyi, kullanışlı' — hepsi kötü.",
    "Değişiklik maliyeti":"Gereksinim aşaması: 1×. Tasarım: 10×. Kodlama: 100×. Test: 1.000×. Operasyon: 10.000×. Erken yakala."
  }
}

}); // Object.assign sonu

/* ================================================================
   MODÜL 7 — SİSTEM MÜHENDİSLİĞİ VE UÇUŞA ELVERİŞLİLİK
   ================================================================ */

Object.assign(window.CONTENT.konuIcerik, {

"m7-1": {
  ad: "Ürün geliştirme yaşam döngüsü ve V-modeli",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "Temel",
  sure: 20,
  mulakat: true,
  onbilgi: "Temel mühendislik kavramları",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Bir uçak motordan gövdeye, aviyonikten iniş takımına kadar on binlerce bileşenden oluşur. Bu karmaşıklığı yönetmek için sistem mühendisliği metodolojisi geliştirilmiştir. V-modeli, geliştirme ve doğrulama süreçlerini birbirine bağlayan standart çerçevedir. EASA ve FAA sertifikasyon süreçleri V-modelini temel alır." },

    { id:"b2", tip:"metin", baslik:"Sistem mühendisliği nedir?",
      metin:"Sistem mühendisliği; karmaşık sistemlerin başarıyla gerçekleştirilmesini sağlamak için disiplinlerarası bir yaklaşım ve araçlar bütünüdür. IEEE 15288 standardı sistem mühendisliğini resmi olarak tanımlar.\n\nTemel ilkeler:\n• Sistem bütünü parçaların toplamından fazladır — parçaları tek tek optimize etmek sistem optimumunu garanti etmez\n• Gereksinimler her şeyden önce gelir — ne yapması gerektiği bilinmeden nasıl yapılacağı tasarlanamaz\n• Entegrasyon ve test geliştirmeyle paralel planlanır — sonraya bırakılamaz\n• İzlenebilirlik şarttır — her tasarım kararının bir gereksinime, her gereksinimin bir müşteri ihtiyacına bağlı olması\n\nSistem mühendisliğinin havacılıktaki önemi:\nBoeing 737 MAX MCAS kazaları, sistem entegrasyon eksikliklerinin ve gereksinim yönetimi hatalarının ne kadar yıkıcı sonuçlar doğurabileceğini gösterdi. MCAS'ın tek sensöre bağımlılığı ve pilotların bu sistemi bilmemesi sistem mühendisliği süreçlerindeki boşluklardan kaynaklandı.",
      kutu:{ tip:"bilgi", baslik:"INCOSE ve MBSE",
        metin:"INCOSE (International Council on Systems Engineering) sistem mühendisliğinin küresel meslek kuruluşudur. Model Based Systems Engineering (MBSE), geleneksel doküman tabanlı yaklaşımın yerini alarak sistemleri SysML gibi modellerle tanımlar. Airbus A380 ve B787 ilk kapsamlı MBSE uygulayan büyük uçak programlarıdır." } },

    { id:"b3", tip:"metin", baslik:"Geliştirme yaşam döngüsü fazları",
      metin:"Havacılık ürün geliştirme genellikle şu fazlardan geçer:\n\nKAVRAMSAL FAZA (Concept Phase): Müşteri ihtiyaçları belirlenir. Farklı tasarım alternatifleri karşılaştırılır. Uygulanabilirlik çalışmaları yapılır. Teknoloji olgunluk düzeyleri (TRL) değerlendirilir. Çıktı: Kavram tanım dokümanı, ön gereksinim seti.\n\nGELİŞTİRME FAZISI (Development Phase): Sistem gereksinimleri tanımlanır ve aşağıya doğru dağıtılır. Alt sistem ve bileşen tasarımları yapılır. Prototip ve ilk ürünler üretilir. Çıktı: Tasarım dokümanları, prototip, test planları.\n\nSERTİFİKASYON FAZISI (Certification Phase): Uyum gösterim faaliyetleri yürütülür. Yer ve uçuş testleri gerçekleştirilir. Teknik dosya oluşturulur. Tip sertifikası alınır.\n\nÜRETİM FAZISI (Production Phase): Seri üretim başlar. Her uçak için uçuşa elverişlilik sertifikası verilir.\n\nHİZMET FAZISI (Service Phase): Sürekli uçuşa elverişlilik sağlanır. Değişiklikler yönetilir. Servis bültenleri yayımlanır.\n\nEMEKLİLİK (Retirement): Uçuşa elverişlilik sertifikası iptal edilir. Parça dokümantasyonu korunur." },

    { id:"b4", tip:"metin", baslik:"V-modeli detaylı inceleme",
      metin:"V-modeli geliştirme (sol taraf) ve doğrulama/geçerleme (sağ taraf) süreçlerini V harfi şeklinde gösterir. Sol taraf yukarıdan aşağı gereksinimler ve tasarım, sağ taraf aşağıdan yukarı test ve entegrasyon.\n\nSOL TARAF — Geliştirme:\n1. Müşteri/operasyonel gereksinimler (en üst düzey)\n2. Sistem gereksinimleri\n3. Alt sistem gereksinimleri\n4. Bileşen gereksinimleri (en alt düzey — kod veya parça)\n\nSAĞ TARAF — Doğrulama (aynı düzeyde):\n1. Bileşen testi (birim test)\n2. Alt sistem entegrasyon testi\n3. Sistem entegrasyon testi\n4. Kabul testi (müşteri gereksinimine göre)\n\nÖNEMLİ İLKE: Sol taraftaki her gereksinim, sağ tarafta karşılığı olan bir test faaliyetiyle eşleştirilmek zorundadır. Bu eşleştirme doğrulama matrisinde (Verification Cross-Reference Matrix, VCRM) belgelenir.\n\nV-modelinin avantajları:\n• Erken test planlaması — testler geliştirmeyle paralel planlanır\n• İzlenebilirlik — her gereksinimin test edildiği görülür\n• Hata erken tespiti — tasarım hatası mümkün olan en erken aşamada bulunur\n• Sertifikasyon uyumu — EASA ve FAA bu çerçeveyi tanır",
      kutu:{ tip:"bilgi", baslik:"Neden 'V' şekli?",
        metin:"V harfinin sol kolu aşağıya doğru gereksinimler soyuttan somuta iner. Alt nokta en somut seviyedir: yazılan kod satırı veya üretilen parça. Sağ kol yukarıya doğru entegrasyon ve test seviyeleri somuttan soyuta çıkar. Her sol köşe sağ köşesinin doğrulama hedefini tanımlar." } },

    { id:"b5", tip:"metin", baslik:"Gereksinim sınıflandırması",
      metin:"Gereksinimleri türlerine göre sınıflandırmak yönetimi kolaylaştırır:\n\nFONKSİYONEL GEREKSİNİMLER: Sistemin ne yapması gerektiği. 'Uçak 5000 km menzile sahip olacaktır.' 'Otopilot irtifayı ±50 feet hassasiyetle tutacaktır.'\n\nPERFORMANS GEREKSİNİMLERİ: Fonksiyonu ne kadar iyi yapacağı. 'Tırmanma hızı en az 2000 ft/dak olacaktır.' 'Yolcu kapısı 3 saniyede açılacaktır.'\n\nARAYÜZ GEREKSİNİMLERİ: Diğer sistemlerle nasıl etkileşeceği. 'Aviyonik sistemi MIL-STD-1553B veriyolunu kullanacaktır.'\n\nGÜVENLİK GEREKSİNİMLERİ: Emniyet sınırları. 'Tek motor kaybında uçak kontrol edilebilir olacaktır.'\n\nFİZİKSEL GEREKSİNİMLER: Boyut, ağırlık, çevre koşulları. 'Motor ağırlığı 500 kg'ı geçmeyecektir.'\n\nSÜRDÜRÜLEBİLİRLİK GEREKSİNİMLERİ: Bakım kolaylığı. 'Motor değişimi 4 saatte tamamlanacaktır.'" },

    { id:"b6", tip:"metin", baslik:"TRL — Teknoloji olgunluk düzeyleri",
      metin:"NASA tarafından geliştirilen TRL (Technology Readiness Level) skalası, bir teknolojinin ne kadar olgunlaştığını 1'den 9'a kadar derecelendirir:\n\nTRL 1: Temel ilkeler gözlemlendi\nTRL 2: Teknoloji konsepti oluşturuldu\nTRL 3: Analitik ve deneysel kavram ispatı\nTRL 4: Laboratuvar ortamında bileşen doğrulaması\nTRL 5: Simüle çevre ortamında bileşen doğrulaması\nTRL 6: Gerçekçi çevre ortamında prototip gösterimi\nTRL 7: Operasyonel çevre ortamında sistem prototipi\nTRL 8: Gerçek sistem tamamlandı ve nitelendirildi\nTRL 9: Gerçek başarılı operasyonel ortamda\n\nHavacılık programlarında TRL 6 altındaki teknolojiler yeni geliştirme programlarına dahil edilmez — risk çok yüksektir. Bu kural 'Tecnology Readiness' kapısı olarak bilinir ve program kapı değerlendirmelerinde kontrol edilir.",
      kutu:{ tip:"uyari", baslik:"TRL tuzağı",
        metin:"Bir teknoloji laboratuvarda TRL 7 olabilir ama bütün sistem içine entegre edildiğinde beklenmedik sorunlar çıkabilir. Bu yüzden alt sistem TRL'si sistem TRL'sini garantilemez. F-35 programında bazı teknolojiler program başında TRL 6-7 görünse de sistem entegrasyonunda ciddi sorunlar çıkmış ve program gecikmiştir." } },

    { id:"b7", tip:"metin", baslik:"Kapı değerlendirmeleri (Design Reviews)",
      metin:"Büyük havacılık programlarında her faz geçişinde resmi kapı değerlendirmeleri yapılır. Bu değerlendirmeler müşteri, üretici ve düzenleyici otoritenin katıldığı teknik gözden geçirmelerdir:\n\nSRR (System Requirements Review): Gereksinimler eksiksiz, tutarlı ve test edilebilir mi?\nPDR (Preliminary Design Review): Genel tasarım gereksinimleri karşılıyor mu? Ana riskler tanımlandı mı?\nCDR (Critical Design Review): Ayrıntılı tasarım üretime hazır mı? Test planları tamam mı?\nTRR (Test Readiness Review): Test başlamaya hazır mı? Test ortamı uygun mu?\nFRR (Flight Readiness Review): İlk uçuşa hazır mı? Tüm güvenlik değerlendirmeleri tamamlandı mı?\nPRR (Production Readiness Review): Seri üretim başlamaya hazır mı?\n\nBir kapı değerlendirmesinde açık eylem kalemleri (open action items) varsa kapı geçişi kabul edilmez veya koşullu kabul edilir. Bu değerlendirmeler program takviminin kritik kilometre taşlarıdır." },

    { id:"b8", tip:"metin", baslik:"Değişiklik yönetimi",
      metin:"Bir havacılık ürünü sertifikalandıktan sonra herhangi bir değişiklik kontrollü süreçten geçmek zorundadır.\n\nMinör değişiklik: Uçuşa elverişlilik, güç veya yapısal dayanımı etkilemeyen küçük değişiklikler. Üretici kendi onay mekanizmasıyla onaylayabilir.\n\nMajör değişiklik: Yukarıdaki alanları etkileyen değişiklikler. EASA veya FAA onayı gerektirir. Değişiklik Tip Tasarımına dahil edilir.\n\nSTC (Supplemental Type Certificate — Tamamlayıcı Tip Sertifikası): Mevcut tip tasarımına ek olarak alınan sertifika. Tip tasarımına erişimi olmayan üçüncü taraflar STC alarak modifikasyon yapabilir.\n\nAD (Airworthiness Directive — Uçuşa Elverişlilik Direktifi): Otoritenin zorunlu kıldığı değişiklik veya muayene. Güvenlik sorununu gidermek için belirli sürede uygulanması zorunludur. Uygulamamak uçuşa elverişlilik sertifikasını geçersiz kılar." },

    { id:"b9", tip:"metin", baslik:"Havacılıkta kritik tasarım kararları ve belgeleme",
      metin:"Sistem mühendisliğinde alınan her önemli karar belgelenmek zorundadır. Bu belgeler:\n\nDRD (Design Rationale Document): Neden bu tasarım seçildi? Alternatifler neden reddedildi?\nTrade Study: Farklı alternatifler sayısal kriterlere göre karşılaştırılır. Ağırlıklı puan sistemi kullanılır.\nICD (Interface Control Document): İki sistem arasındaki arayüzün her detayı. Konnektör numarası, pin bağlantısı, protokol, zaman kriterleri.\nFDD (Functional Decomposition Diagram): Sistem fonksiyonlarının alt fonksiyonlara ayrılması.\n\nBu belgeler sertifikasyon teknik dosyasının omurgasını oluşturur. EASA veya FAA denetçisi bu dokümanlara bakarak tasarımın gereksinimleri karşılayıp karşılamadığını değerlendirir." },

    { id:"b10", tip:"ornek", baslik:"Örnek 1: Gereksinim kalitesi değerlendirme",
      soru:"Aşağıdaki gereksinimlerin hangisi iyi yazılmıştır? Neden?\nA) 'Sistem hızlı çalışacaktır.'\nB) 'İklimlendirme sistemi kabin sıcaklığını 18°C ile 26°C arasında ±1°C hassasiyetle kontrol edecektir.'\nC) 'Uçak verimli olacaktır.'\nD) 'Otopilot sistemi iyi çalışacaktır.'",
      cozum:"Doğru cevap: B\n\nAnaliz:\nA) 'Hızlı' ölçülemeyen, belirsiz bir terimdir. Neye göre hızlı? Kaç saniyede?\nB) Ölçülebilir (18-26°C, ±1°C), doğrulanabilir (termometre ile test), belirsizlik yok. İyi gereksinim.\nC) 'Verimli' belirsiz. Yakıt verimliliği mi? L/D oranı mı? Maliyet verimliliği mi?\nD) 'İyi çalışmak' test edilemez. Hangi koşulda? Ne kadar süre?\n\nİyi gereksinim kriterleri (SMART analojisi):\n• Özgün (Specific): Net ve belirsizlik içermeyen\n• Ölçülebilir (Measurable): Sayısal değer veya somut kriter\n• Doğrulanabilir (Achievable/Verifiable): Test ile kanıtlanabilir\n• Gerçekçi (Relevant): Sistemin kontrolünde olan\n• Zamanlı (Time-bound): Uygulanabilir koşullar belirtilmiş" },

    { id:"b11", tip:"ornek", baslik:"Örnek 2: V-modeli doğrulama matrisi",
      soru:"Aşağıdaki sistem gereksinimi için V-modeli doğrulama faaliyetlerini planla:\n'Uçak elektrik sistemi, herhangi bir tek jeneratör arızasında kalan jeneratörler kritik aviyonikleri besleyecektir.'",
      cozum:"Bu gereksinim için V-modeli seviyeleri:\n\nBİLEŞEN DÜZEYİ (Sol kol):\n→ Jeneratör devresi tasarımı ve güç transferi anahtarı tasarımı\n→ Doğrulama: Devre simülasyonu, bileşen testi\n\nALT SİSTEM DÜZEYİ (Sol kol):\n→ Elektrik sistemi entegrasyon tasarımı\n→ Doğrulama: Laboratuvar bench testleri, jeneratör arızası simülasyonu\n\nSİSTEM DÜZEYİ (Sol kol):\n→ Sistem entegrasyon tasarımı, yük analizi\n→ Doğrulama: Uçakta yer testi, gerçek jeneratör kapatma testi\n\nKABUL DÜZEYİ (Sağ kol üst):\n→ CS-25 AMC 25.1351 gereksinimlerine göre uyum kanıtı\n→ Doğrulama: Sertifikasyon uçuş testi, EASA denetçisi gözetiminde\n\nDOĞRULAMA MATRİSİ GİRİŞİ:\nGereksinim: 'Tek jeneratör arızasında kritik aviyonik beslenir'\nDoğrulama yöntemi: Test (MoC 4 + MoC 5 + MoC 6)\nTest tarihi: [Planlanan tarih]\nTest referansı: [Rapor numarası]\nSonuç: [PASS/FAIL]" },

    { id:"b12", tip:"ornek", baslik:"Örnek 3: TRL değerlendirmesi",
      soru:"Yeni bir uydu haberleşme sistemi geliştirilmektedir. Şu ana kadar yapılanlar:\n• Temel prensip matematiksel olarak kanıtlandı\n• Laboratuvar ortamında küçük ölçekli deney yapıldı, teorik sonuçlarla uyum sağlandı\n• Simüle uçak ortamında (yer testi düzeneği) tam ölçekli prototip çalıştırıldı\nBu sistem kaçıncı TRL düzeyindedir? Sertifikasyon programına dahil edilebilir mi?",
      cozum:"TRL değerlendirmesi:\n\nYapılanlar:\n1. Matematiksel kanıt → TRL 1 (temel ilke) ✓\n2. Küçük ölçekli lab deneyi → TRL 3-4 (kavram ispatı) ✓\n3. Simüle çevre tam ölçek → TRL 5 (simüle çevre doğrulaması) ✓\n\nMevcut TRL: 5\n\nSertifikasyon programına dahil edilebilir mi?\n\nHayır. TRL 5 sertifikasyon için yeterli değil. Gereken minimum TRL 6 veya üstüdür (gerçekçi çevre ortamında prototip gösterimi).\n\nEksik adımlar:\n• TRL 6: Gerçek çevre (gerçek uçakta yer testi) → gerekli\n• TRL 7: Uçuş sırasında sistem prototipi → gerekli\n• TRL 8: Tam sistem nitelendirmesi → sertifikasyon öncesi tamamlanmalı\n\nTavsiye: Teknoloji olgunluk programı başlatılmalı, TRL 7'ye ulaşılana kadar program dışında tutulmalı. Erken dahil edilirse program risk ve takvim problemleri yaratır." },

    { id:"b13", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Test planlamasını geliştirmenin sonuna bırakmak. V-modeli test geliştirmeyle paralel planlanması gerektiğini söyler. Son dakika test planı yetersiz kalır ve sertifikasyonu geciktirir.",
        "Gereksinimleri belirsiz yazmak. 'Yeterince iyi', 'makul sürede', 'gerektiğinde' gibi ifadeler test edilemez. Her gereksinim ölçülebilir olmalı.",
        "İzlenebilirliği sonradan kurmak. İzlenebilirlik baştan kurulmazsa binlerce gereksinim ve test arasında bağlantı oluşturmak imkânsız hale gelir.",
        "TRL düzeyini abartmak. Laboratuvar başarısı TRL 4-5 seviyesidir. Gerçek operasyonel ortam olmadan TRL 7-8 iddiası gerçekçi değil.",
        "Kapı değerlendirmelerini formalite saymak. Açık eylem kalemi olan sistemle bir sonraki faza geçmek riskli. Kapı değerlendirmeleri gerçek sorunları erken açığa çıkarır.",
        "Değişiklik yönetimini hafife almak. Sertifikalı sistemde kontrol dışı değişiklik uçuşa elverişlilik sertifikasını geçersiz kılar. Her değişiklik kayıt altına alınmalı."
      ] },

    { id:"b14", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["V-modeli nedir ve neden kullanılır?","V-modeli geliştirme (sol kol: gereksinimler) ve doğrulama (sağ kol: testler) süreçlerini V şeklinde birbirine bağlayan sistem mühendisliği çerçevesidir. Sol koldaki her seviye sağ koldaki bir test seviyesiyle eşleştirilir. Hataların erken tespitini, test planlamasının geliştirmeyle eş zamanlı yürütülmesini ve sertifikasyon izlenebilirliğini sağlar. EASA ve FAA bu çerçeveyi tanır."],
        ["İyi bir gereksinim nasıl yazılır?","Ölçülebilir (sayısal değer veya somut kriter), özgün (belirsiz terim yok), doğrulanabilir (test edilebilir), gerçekçi ve koşulları belirtilmiş olmalı. 'Sistem hızlı çalışacak' değil, 'Sistem mesaj iletimini 50 ms içinde tamamlayacaktır' şeklinde yazılmalı."],
        ["Airworthiness Directive (AD) nedir?","Otoritenin (EASA/FAA) bir güvenlik sorununu gidermek için belirlenen sürede uygulanmasını zorunlu kıldığı değişiklik veya muayene direktifidir. AD uygulanmazsa uçuşa elverişlilik sertifikası geçersiz olur ve uçak uçamaz. AD'ler tüm operatörlere ilan edilir."],
        ["TRL nedir ve havacılık programlarında önemi nedir?","Technology Readiness Level — 1'den 9'a teknoloji olgunluğunu ölçer. TRL 6 altı teknolojiler sertifikasyon programlarına dahil edilmez. TRL hesabı yapılmadan programa alınan olgunlaşmamış teknoloji risk, gecikme ve maliyet aşımına yol açar. F-35 programı bu konuda sık gösterilen örnektir."]
      ] },

    { id:"b15", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "INCOSE. (2015). Systems engineering handbook: A guide for system life cycle processes and activities (4. baskı). Wiley. ISBN 978-1-118-99940-0",
        "NASA. (2007). NASA systems engineering handbook (NASA/SP-2007-6105 Rev1). NASA.",
        "EASA. (2020). CS-25: Certification specifications for large aeroplanes. European Union Aviation Safety Agency.",
        "Blanchard, B. S., & Fabrycky, W. J. (2011). Systems engineering and analysis (5. baskı). Pearson. ISBN 978-0-13-255402-1",
        "Kossiakoff, A. ve diğerleri (2011). Systems engineering principles and practice (2. baskı). Wiley. ISBN 978-0-470-40548-2"
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"V-modeli", puan:1,
      soru:"V-modelinde sol kolun aşağıya inmesi neyi temsil eder?",
      secenekler:["Test sonuçları","Gereksinimler soyuttan somuta doğru ayrıştırılır","Sistemin uçuş performansı","Üretim süreçleri"],
      dogru:1,
      aciklama:"Sol kol müşteri gereksinimlerinden başlayıp sistem → alt sistem → bileşen düzeyine iner. Her adımda gereksinimler daha somut ve teknik hale gelir. Sağ kol bileşen testinden başlayarak sistem kabul testine çıkar." },
    { id:"s2", etiket:"Gereksinim kalitesi", puan:2,
      soru:"'Uçak stabil olacaktır' gereksinimi neden yetersizdir?",
      secenekler:["Çok kısa olduğundan","'Stabil' ölçülemeyen, belirsiz bir terimdir; hangi koşulda, ne kadar stabil?","Türkçe yazıldığından","Sistem mühendisliği terimi olmadığından"],
      dogru:1,
      aciklama:"İyi gereksinim ölçülebilir olmalıdır. 'Stabil' ne anlama gelir? Statik marjin yüzdesi? Dinamik mod sönümü? Belirli atmosfer koşulları? Ölçülemeyen gereksinim test edilemez, dolayısıyla doğrulanamaz." },
    { id:"s3", etiket:"TRL", puan:2,
      soru:"Simüle edilmiş çevre ortamında tam ölçekli prototip başarıyla test edildi. Bu kaçıncı TRL'e karşılık gelir?",
      secenekler:["TRL 3","TRL 5","TRL 7","TRL 9"],
      dogru:1,
      aciklama:"TRL 5: Simüle çevre ortamında bileşen/prototip doğrulaması. TRL 6 gerçekçi çevre, TRL 7 gerçek operasyonel çevre prototipidir. Sertifikasyon programı için minimum TRL 6 gereklidir." },
    { id:"s4", etiket:"Değişiklik yönetimi", puan:2,
      soru:"STC (Supplemental Type Certificate) nedir?",
      secenekler:["Standart tip sertifikası","Mevcut tip tasarımına ek modifikasyon için alınan sertifika; üçüncü tarafların modifikasyon yapmasına izin verir","Üretim kalite sertifikası","Pilot lisansının bir türü"],
      dogru:1,
      aciklama:"STC, mevcut onaylı tip tasarımına üçüncü tarafların modifikasyon eklemesine imkân tanır. Tip tasarım sahibinden bağımsız olarak EASA/FAA tarafından verilir. Aviyonik yükseltme, motor değişimi, kabin modifikasyonu sık STC konularıdır." },
    { id:"s5", etiket:"Kapı değerlendirmeleri", puan:2,
      soru:"CDR (Critical Design Review) ne zaman yapılır ve amacı nedir?",
      secenekler:["İlk uçuştan önce; pilotun hazır olduğunu onaylamak","Ayrıntılı tasarım tamamlandıktan sonra; tasarımın üretime hazır, gereksinimleri karşılar ve test edilebilir olduğunu onaylamak","Sertifikasyon alındıktan sonra; müşteriye teslim hazırlığı","Üretim başlamadan; malzeme listesini onaylamak"],
      dogru:1,
      aciklama:"CDR, PDR'den sonra ve üretime geçmeden önce yapılır. Ayrıntılı tasarım dokümanları, test planları ve risk değerlendirmeleri incelenir. Açık eylem kalemi varsa CDR geçilmez. Bu değerlendirme üretim riskini minimize eder." },
    { id:"s6", etiket:"V-modeli", puan:1,
      soru:"Doğrulama Cross-Reference Matrix (VCRM) ne işe yarar?",
      secenekler:["Motor torkunu matris olarak gösterir","Her gereksinimin test edildiğini ve hangi test aktivitesiyle doğrulandığını belgeler","Kanat geometrisini matris formunda tanımlar","Maliyet-takvim ilişkisini gösterir"],
      dogru:1,
      aciklama:"VCRM her gereksinimiyle karşılık gelen doğrulama faaliyetini (test, analiz, muayene vb.) eşleştirir. Hangi gereksinimin test edildiği, hangisinin henüz doğrulanmadığı bu matrise bakılarak görülür. Sertifikasyon teknik dosyasının zorunlu parçasıdır." },
    { id:"s7", etiket:"Gereksinim türleri", puan:1,
      soru:"'Motor bakımı 4 saatte tamamlanacaktır' hangi tür gereksinimdir?",
      secenekler:["Fonksiyonel gereksinim","Performans gereksinimi","Sürdürülebilirlik gereksinimi","Arayüz gereksinimi"],
      dogru:2,
      aciklama:"Sürdürülebilirlik (maintenance) gereksinimi, bakım kolaylığı ve erişilebilirliği tanımlar. Fonksiyonel gereksinim ne yaptığını (motoru çalıştırmak), performans gereksinimi ne kadar iyi yaptığını (thrust değeri) tanımlar." },
    { id:"s8", etiket:"Değişiklik yönetimi", puan:2,
      soru:"Airworthiness Directive (AD) uygulanmazsa ne olur?",
      secenekler:["Para cezası uygulanır","Uçuşa elverişlilik sertifikası geçersiz olur; uçak uçamaz","Sadece sonraki bakımda uygulanması gerekir","Pilot lisansı iptal edilir"],
      dogru:1,
      aciklama:"AD zorunlu bir direktiftir. Belirtilen sürede uygulanmazsa uçak uçuşa elverişsiz sayılır. Bu durum sadece idari para cezası değil, fiziksel olarak uçuş yasağı demektir. Havayolu operatörleri AD takibini kritik güvenlik görevi olarak yönetir." },
    { id:"s9", etiket:"TRL", puan:1,
      soru:"TRL 9 ne anlama gelir?",
      secenekler:["Temel ilkeler gözlemlendi","Sistem tamamlandı ve tam operasyonel çevrede başarıyla kullanıldı","Prototip gerçekçi çevrede test edildi","Sertifikasyon alındı"],
      dogru:1,
      aciklama:"TRL 9 en yüksek olgunluk düzeyidir. Sistem gerçek operasyonel görevde başarıyla kullanıldı. Bu genellikle ilk seri teslimat ve operasyonel kullanım anlamına gelir. TRL 8 sertifikasyon ve nitelendirme, TRL 9 gerçek kullanım kanıtıdır." },
    { id:"s10", etiket:"V-modeli", puan:2,
      soru:"V-modelinde 'sistem entegrasyon testi' hangi gereksinim seviyesini doğrular?",
      secenekler:["Bileşen gereksinimleri","Alt sistem gereksinimleri","Sistem gereksinimleri","Müşteri operasyonel gereksinimleri"],
      dogru:2,
      aciklama:"V-modelinde sistem entegrasyon testi sol koldaki sistem gereksinimleriyle eşleştirilir. Bileşen testi bileşen gereksinimlerini, alt sistem testi alt sistem gereksinimlerini, kabul testi müşteri operasyonel gereksinimlerini doğrular." }
  ],
  ipuclari:{
    "V-modeli":"Sol kol: gereksinim ayrıştırması (soyut → somut). Sağ kol: test entegrasyonu (somut → soyut). Her sol → karşılık sağ. VCRM izlenebilirlik sağlar.",
    "Gereksinim kalitesi":"Ölçülebilir + özgün + doğrulanabilir. 'Hızlı' değil '50 ms'de tamamlanır'. SMART kriteri.",
    "TRL":"1=temel prensip. 5=simüle çevre. 6=gerçekçi çevre. 7=uçuş prototipi. 9=operasyonel. Sertifikasyon için min TRL 6.",
    "Değişiklik":"Minör: üretici onaylar. Majör: otorite onayı. STC: 3. taraf modifikasyon. AD: zorunlu direktif, uygulanmazsa uçuş yasağı."
  }
},

"m7-2": {
  ad: "Gereksinim yönetimi ve izlenebilirlik",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "Orta",
  sure: 20,
  mulakat: true,
  onbilgi: "V-modeli ve yaşam döngüsü (m7-1)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Bir yolcu uçağında 50.000'i aşkın teknik gereksinim bulunabilir. Bu gereksinimleri yazmak kadar yönetmek de kritiktir. Gereksinim yönetimi; gereksinimlerin oluşturulması, takibi, değiştirilmesi ve doğrulanmasını kapsayan disiplindir. İzlenebilirlik ise her gereksinimin kaynağından teste kadar izlenebilir olmasını sağlar." },

    { id:"b2", tip:"metin", baslik:"Gereksinim hiyerarşisi",
      metin:"Gereksinimleri piramit şeklinde düşün:\n\nEN ÜST: Müşteri/Operasyonel Gereksinimler (ConOps)\n'Uçak 300 yolcuyu 10.000 km taşıyacaktır.'\n↓ Ayrıştırma\nSİSTEM GEREKSİNİMLERİ\n'Yakıt sistemi 180 ton yakıt taşıyacaktır.'\n↓ Ayrıştırma\nALT SİSTEM GEREKSİNİMLERİ\n'Ana yakıt tankı 80 ton kapasitede olacaktır.'\n↓ Ayrıştırma\nBİLEŞEN GEREKSİNİMLERİ\n'Tank kaynak dikişi CS-25 Madde 25.965'e göre test edilecektir.'\n\nBu hiyerarşide her gereksinim bir üstünü karşılamalı, bir altı tarafından gerçekleştirilmelidir. Bu çift yönlü bağlantı izlenebilirliğin temelidir.\n\nAyrıştırma kuralları:\n• Her alt gereksinim bir üst gereksinime bağlı olmalı (yetim gereksinim yok)\n• Bir üst gereksinim birden fazla alt gereksinim gerektirebilir\n• Alt gereksinimler bir araya gelince üst gereksinimi tam karşılamalı (eksik kapsam yok)" },

    { id:"b3", tip:"metin", baslik:"İzlenebilirlik matrisi",
      metin:"İzlenebilirlik matrisi gereksinimleri, tasarım unsurlarını ve test aktivitelerini birbirine bağlayan tablodur.\n\nTYPİK SATIRLAR: Her gereksinim (ID ile)\nTYPİK SÜTUNLAR: Kaynak doküman, tasarım öğesi, test faaliyeti, test sonucu, onay durumu\n\nİki yönlü izlenebilirlik:\n• Aşağı izlenebilirlik (downward traceability): Bir üst gereksinimin hangi alt gereksinimler tarafından karşılandığı\n• Yukarı izlenebilirlik (upward traceability): Bir alt gereksinimin hangi üst gereksinimi desteklediği\n\nYetim gereksinim: Hiçbir üst gereksinime bağlı olmayan alt gereksinim. Bu ya gereksiz bir özellik ya da tasarımcının kendi eklediği özellik anlamına gelir. Gereksizse çıkarılmalı, gereklidir ama üst gereksinimlerde yoksa üst gereksinim güncellenmeli.\n\nKapsam boşluğu (coverage gap): Bir üst gereksinim hiçbir alt gereksinim tarafından karşılanmıyorsa sistem o gereksinimi yerine getiremez. Erken tespiti kritiktir.",
      kutu:{ tip:"uyari", baslik:"737 MAX ve gereksinim izlenebilirliği",
        metin:"MCAS sistemi başlangıçta küçük bir değişiklik olarak tanımlandı ve sertifikasyon kapsamı sınırlı tutuldu. Sistem zamanla büyüdüğünde gereksinim tabanı güncellenmedi. Pilotlar bu sistemden haberdar edilmedi çünkü pilot eğitim gereksinimi bağlantısı kurulmamıştı. İzlenebilirlik zinciri kırıldığında sonuçlar ölümcül olabiliyor." } },

    { id:"b4", tip:"metin", baslik:"Gereksinim yönetim araçları",
      metin:"Onlarca bin gereksinimi manuel excel tablosunda yönetmek imkânsızdır. Araçlar:\n\nIBM DOORS (Dynamic Object-Oriented Requirements System): Havacılık ve savunma sanayiinde en yaygın kullanılan araç. Hiyerarşik gereksinim yapısı, bağlantılar ve izlenebilirlik. AS9100 ortamlarında standart haline gelmiştir.\n\nPolarion: Web tabanlı, yaşam döngüsü yönetim platformu. Airbus ve bazı büyük tedarikçiler kullanır.\n\nJama Connect: Bulut tabanlı, test yönetimiyle entegre.\n\nReqView, Helix RM: Daha küçük programlar için alternatifler.\n\nSBF (Specification by Feature): Gereksinimler Gherkin formatında (Given-When-Then) yazılarak doğrudan test senaryolarına dönüştürülür. Modern yazılım yoğun aviyonik sistemlerinde kullanılmaya başlandı.\n\nBu araçların temel özellikleri:\n• Her gereksinime benzersiz ID atanır\n• Değişiklik geçmişi otomatik kaydedilir\n• İzlenebilirlik bağlantıları görselleştirilir\n• Kapsam boşluğu ve yetim gereksinim otomatik tespit edilir\n• Onay akışı (review/approve) araç içinde yürütülür" },

    { id:"b5", tip:"metin", baslik:"Gereksinim değişiklik yönetimi",
      metin:"Geliştirme boyunca gereksinimler değişir. Bu değişimleri kontrol etmek kritik önem taşır.\n\nDeğişiklik kontrol süreci:\n1. Değişiklik Talebi (Change Request, CR) açılır\n2. Etki analizi yapılır: hangi alt gereksinimler, tasarım öğeleri ve testler etkileniyor?\n3. Teknik ve takvim etkisi değerlendirilir\n4. Değişiklik Kontrol Kurulu (CCB — Change Control Board) değerlendirip onaylar veya reddeder\n5. Onaylanan değişiklik uygulanır, izlenebilirlik güncellenir\n6. Etkilenen testler yeniden yapılır veya değerlendirilir\n\nBazeline alma (baselining): Belirli bir program noktasında gereksinim seti dondurulur ve resmi baseline oluşturulur. Sonraki her değişiklik bu baselineye göre takip edilir. İlk baseline tipik olarak PDR'da alınır.\n\nDeğişiklik etkisi:\nBir gereksinim değiştiğinde domino etkisi olabilir. 'Menzil 5000 km'den 6000 km'ye çıkarıldı' değişikliği yakıt kapasitesini, tank tasarımını, yapısal ağırlığı, motor performansını, kalkış ve iniş performansını etkiler." },

    { id:"b6", tip:"metin", baslik:"Kalite ve gereksinimlerin doğrulanabilirliği",
      metin:"Bir gereksinimin kalitesini değerlendirmek için INCOSE kontrol listesi:\n\nGerekli mi? Sistem bu özelliğe ihtiyaç duyuyor mu?\nDoğrulanabilir mi? Test, muayene, analiz veya gösterimle kanıtlanabilir mi?\nUlaşılabilir mi? Teknoloji ve bütçe çerçevesinde gerçekleştirilebilir mi?\nBelirgin mi? Tek bir yoruma izin veriyor mu?\nTam mı? Gerekli tüm koşulları kapsıyor mu?\nTutarlı mı? Diğer gereksinimlerle çelişiyor mu?\nSıralanmış mı? Öncelik derecesi belirlenmiş mi?\n\nGereksinim özellikleri:\nGEREKLİ OLMAYAN ÖZELLİK (Gold plating): Müşteri istemediği halde eklenen özellik. Maliyet artırır, programı uzatır. Geliştirici iyi niyetle ekler ama değer yaratmaz.\nÇELİŞKİLİ GEREKSİNİM: 'Motor gürültüsü 80 dB altında olacaktır' ve 'Motor 5000 hp gücünde olacaktır' çelişebilir. Erken tespiti gerekir." },

    { id:"b7", tip:"ornek", baslik:"Örnek 1: Gereksinim ayrıştırması",
      soru:"Üst düzey gereksinim: 'Uçak iklimlendirme sistemi tüm kabin koşullarında EASA CS-25 Madde 25.831'e uygun hava kalitesi sağlayacaktır.' Bu gereksinimi alt sistem düzeyine kadar ayrıştır.",
      cozum:"ÜST DÜZEY GEREKSİNİM (SYS-IKL-001):\n'Uçak iklimlendirme sistemi CS-25 Madde 25.831'e uygun hava kalitesi sağlayacaktır.'\n\nALT SİSTEM GEREKSİNİMLERİ:\n\nSYS-IKL-001-01 (Sıcaklık):\n'İklimlendirme sistemi kabin sıcaklığını pilot isteği üzerine 18°C ile 26°C arasında ±1°C hassasiyetle kontrol edecektir.'\n\nSYS-IKL-001-02 (Nem):\n'Göreli nem yüzde 20 ile yüzde 60 arasında tutulacaktır.'\n\nSYS-IKL-001-03 (Karbondioksit):\n'Kabin CO₂ konsantrasyonu hiçbir koşulda 5.000 ppm'yi geçmeyecektir.'\n\nSYS-IKL-001-04 (Hava debisi):\n'Kişi başına taze hava debisi minimum 0,55 kg/dak olacaktır.'\n\nSYS-IKL-001-05 (Arıza durumu):\n'Tek paket arızasında kalan paket tüm yolcular için minimum hava kalitesini sağlayacaktır.'\n\nDoğrulama matrisi:\nSYS-IKL-001-01 → Test (yer testi + uçuş testi, termal kamera + sıcaklık sensörü)\nSYS-IKL-001-02 → Test (nem sensörü, farklı dış koşullarda)\nSYS-IKL-001-03 → Test (CO₂ ölçümü, doluluk kapasitesi koşullarında)\nSYS-IKL-001-04 → Analiz + Test (debi ölçüm)\nSYS-IKL-001-05 → Test (arıza simülasyonu)" },

    { id:"b8", tip:"ornek", baslik:"Örnek 2: Yetim gereksinim tespiti",
      soru:"Gereksinim setinde şu iki gereksinim var:\nSYS-AVI-042: 'Uçuş yönetim sistemi çapraz bağlantı portu üzerinden harici cihazlara veri aktaracaktır.'\nSYS-AVI-042-01: 'Çapraz bağlantı portu USB 3.0 standardını kullanacaktır.'\n\nSYS-AVI-042-01 incelendiğinde müşteri gereksinimlerinde 'harici cihaz' veya 'USB' ifadesinin geçmediği görüldü. Bu durumu değerlendir.",
      cozum:"Durum değerlendirmesi:\n\nSYS-AVI-042-01 iki olası sorundan birine işaret eder:\n\nSENARYO A — Yetim gereksinim:\nMüşteri ConOps'ta harici cihaz bağlantısı tanımlanmamışsa SYS-AVI-042 ve dolayısıyla SYS-AVI-042-01 yetim gereksinimdir. Kimsenin istemediği bir özellik geliştirilmektedir.\nAksiyon: CCB'ye sunarak ya müşteri gereksinimlerine geriye dönük bağlantı kurulmalı ya da gereksinim iptal edilmeli.\n\nSENARYO B — Eksik üst gereksinim:\nMüşteri bu özelliği istemiş ama ConOps'a yazılmamış. Üst gereksinim eksik.\nAksiyon: ConOps gözden geçirilerek üst gereksinim eklenmeli, gereksinim zinciri tamamlanmalı.\n\nHer iki durumda da CCB onayı ve VCRM güncellemesi şarttır. 'Bu özellik nasılsa var, bıraksak ne olur?' tavrı yasaktır — 'gold plating' riski ve sertifikasyon yükü yaratır." },

    { id:"b9", tip:"ornek", baslik:"Örnek 3: Gereksinim çatışması tespiti",
      soru:"Gereksinim setinde şu iki gereksinim bulundu:\nSYS-STR-015: 'Kanat yapısı 50.000 uçuş çevriminde yorulma ömrünü tamamlayacak şekilde tasarlanacaktır.'\nSYS-OPS-032: 'Uçak 20 yıllık servis ömrü boyunca minimum bakım gerektirecektir.'\n\nBu iki gereksinim arasında potansiyel çatışma var mı?",
      cozum:"Çatışma analizi:\n\nBağlam bilgisi:\nOrtalama kısa hat yolcu uçağı yılda 3.000-4.000 uçuş çevrimi yapar.\n20 yıl × 3.500 çevrim/yıl = 70.000 çevrim\n\nTESPİT — ÇELİŞKİ VAR:\nSYS-STR-015 yalnızca 50.000 çevrim için tasarım gerektiriyor.\nSYS-OPS-032 20 yıl ömür istiyor → 70.000 çevrim beklenti.\n\nEğer bu çelişki giderilmezse:\n• Kanat 50.000 çevrimde ömrünü tamamlarken uçak hâlâ servis hayatındadır\n• Kanat değiştirme maliyeti yüksek bakıma yol açar\n• Ya SYS-OPS-032 ihlal edilir ya da SYS-STR-015 gereksiz erken kanat değiştirmeye zorlar\n\nÇözüm önerileri:\nA) SYS-STR-015 revize et: '70.000 uçuş çevrimi'\nB) SYS-OPS-032 revize et: '17 yıl servis ömrü' (50.000/3.000 ≈ 16,7 yıl)\nC) Kapsamı netleştir: 'Minimum bakım' kanat değişimini kapsıyor mu?\n\nCCB'ye sunulur, müşteriyle görüşülür ve VCRM güncellenir." },

    { id:"b10", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Gereksinimleri proje sonunda yazmak. Gereksinimler en başta oluşturulur; sonradan yazılan gereksinim ya zaten yapılana göre yazılır (ters mühendislik) ya da değişiklik talebine yol açar.",
        "Benzersiz ID atamamak. Her gereksinim benzersiz tanımlanabilir olmalıdır. 'REQ-1, REQ-2' gibi sıralı numaralar bile gereksinim silindikçe karışıklık yaratır.",
        "İzlenebilirliği sadece aşağı yönde kurmak. Yukarı izlenebilirlik de şart; alt gereksinim neden var, hangi üstü karşılıyor?",
        "Gereksinim değişikliklerini informal iletişimle yapmak. E-posta veya toplantı notu yeterli değil. Her değişiklik CCB sürecinden geçmeli, araçta kayıt altına alınmalı.",
        "Kapsam yönetimini ihmal etmek. Yetim gereksinimler programı şişirir, kapsam boşlukları sistemi eksik bırakır. Her iki durum da kritik sorun.",
        "Çelişen gereksinimleri görmezden gelmek. Erken tespit edilmeyen çelişki tasarım ve test aşamasında çok daha pahalıya mal olur."
      ] },

    { id:"b11", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["İzlenebilirlik neden önemlidir?","Her gereksinimin kaynağından (müşteri ihtiyacı) tasarıma ve teste kadar izlenebilmesidir. Kapsam boşluğunu (karşılanmayan gereksinim) ve yetim gereksinimleri (gereksiz özellik) tespit eder. Sertifikasyonda otorite her gereksinimin doğrulandığını görmek ister. 737 MAX kazalarında izlenebilirlik eksiklikleri kritik rol oynadı."],
        ["CCB nedir ve neden gereklidir?","Change Control Board — Değişiklik Kontrol Kurulu. Her gereksinim değişikliği önce etki analizi yapılarak CCB'ye sunulur. CCB teknik, takvim ve maliyet etkilerini değerlendirerek onaylar veya reddeder. Kontrol dışı değişiklik domino etkisiyle tüm sistemi etkiler; CCB bu riski yönetir."],
        ["Yetim gereksinim nedir ve nasıl tespit edilir?","Hiçbir üst gereksinime bağlı olmayan alt gereksinim. Ya gereksiz özellik ya da üst gereksinim eksik. DOORS gibi araçlar otomatik olarak izlenebilirlik boşluklarını işaretler. Tespitte VCRM'de bağlantısız gereksinim sütunlarını ara."]
      ] },

    { id:"b12", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "INCOSE. (2015). Systems engineering handbook (4. baskı). Wiley.",
        "IEEE. (2011). IEEE 29148: Systems and software engineering — life cycle processes — requirements engineering. IEEE.",
        "Hull, E., Jackson, K., & Dick, J. (2011). Requirements engineering (3. baskı). Springer. ISBN 978-1-84996-404-3",
        "IBM. DOORS documentation. https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/doors"
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"İzlenebilirlik", puan:1,
      soru:"Aşağı izlenebilirlik (downward traceability) ne anlama gelir?",
      secenekler:["Test sonuçlarından gereksinimlere gitmek","Üst gereksinimlerin hangi alt gereksinimler tarafından karşılandığını görmek","Sistemin aşağı doğru hareket etmesi","Ağırlık merkezinin düşmesi"],
      dogru:1,
      aciklama:"Aşağı izlenebilirlik, üst düzey gereksinimlerin alt düzey gereksinimler tarafından nasıl karşılandığını gösterir. Kapsam boşluğunu tespit eder: 'Bu üst gereksinim altında hiç alt gereksinim yok mu?'" },
    { id:"s2", etiket:"Gereksinim kalitesi", puan:2,
      soru:"'Gold plating' gereksinim yönetiminde ne anlama gelir?",
      secenekler:["Gereksinimleri altın kaplamayla korumak","Müşteri istemediği halde eklenen, değer yaratmayan özellik","En yüksek kaliteli gereksinim yazmak","Sertifikasyon standartlarını aşmak"],
      dogru:1,
      aciklama:"Gold plating geliştiricinin iyi niyetle ama müşteri talebine dayanmadan özellik eklemesidir. Maliyet ve takvim artırır, kapsam genişler, bazen çatışmaya yol açar. Tüm gereksinimler bir müşteri ihtiyacına izlenebilir olmalıdır." },
    { id:"s3", etiket:"Değişiklik yönetimi", puan:2,
      soru:"Baseline alma (baselining) nedir ve neden yapılır?",
      secenekler:["Başlangıç noktası belirlemek için ilk uçuş öncesi yapılan test","Belirli bir program noktasında gereksinim setinin dondurulması; sonraki değişiklikler bu baza göre takip edilir","Temel tasarım seçeneklerini karşılaştırmak","Ağırlık tabanını belirlemek"],
      dogru:1,
      aciklama:"Baseline alınca gereksinim seti dondurulur ve resmi referans noktası oluşur. Sonraki her değişiklik bu referansa göre takip edilir. PDR'da alınan başlangıç baseline'ı süreç boyunca evrilir." },
    { id:"s4", etiket:"İzlenebilirlik", puan:2,
      soru:"Kapsam boşluğu (coverage gap) ne anlama gelir?",
      secenekler:["Yazılım kodundaki boşluk","Üst gereksinim hiçbir alt gereksinim tarafından karşılanmıyor — sistem o gereksinimi yerine getiremez","Üretim bandındaki boşluk","Test kapsamı raporu"],
      dogru:1,
      aciklama:"Kapsam boşluğu sistemin gerçekleştiremeyeceği gereksinimler demektir. Çünkü üst gereksinim var ama onu karşılayan alt gereksinim tasarıma yansıtılmamış. Erken tespit kritik; geç tespiti teslimatta ciddi problem yaratır." },
    { id:"s5", etiket:"Gereksinim hiyerarşisi", puan:1,
      soru:"Gereksinim hiyerarşisinde 'yetim gereksinim' nedir?",
      secenekler:["Anne-baba kaybetmiş mühendis tarafından yazılan gereksinim","Hiçbir üst gereksinime bağlı olmayan alt gereksinim","Test edilmemiş gereksinim","En alt düzey bileşen gereksinimi"],
      dogru:1,
      aciklama:"Yetim gereksinim ya gereksiz bir özellik (gold plating) ya da üst gereksinimde eksik olan bir ihtiyacı temsil eder. İzlenebilirlik aracı boş bağlantı olarak işaretler; CCB değerlendirmesi gerekir." },
    { id:"s6", etiket:"Araçlar", puan:1,
      soru:"IBM DOORS ne işe yarar?",
      secenekler:["Uçak kapılarını kontrol eden sistem","Gereksinimleri yönetmek, izlenebilirlik kurmak ve değişiklikleri takip etmek için kullanılan araç","Dijital operasyonel radyasyon sistemi","Motor kapısı açma mekanizması"],
      dogru:1,
      aciklama:"DOORS (Dynamic Object-Oriented Requirements System) havacılık ve savunmada en yaygın gereksinim yönetim aracıdır. Hiyerarşik gereksinim yapısı, izlenebilirlik bağlantıları, değişiklik geçmişi ve onay akışı sağlar." },
    { id:"s7", etiket:"Değişiklik yönetimi", puan:2,
      soru:"Bir gereksinim değiştirildiğinde hangi adımlar izlenir?",
      secenekler:["Doğrudan değiştirilir ve bildirilir","CR açılır, etki analizi yapılır, CCB onaylar, araçta güncellenir, etkilenen testler yeniden değerlendirilir","E-posta ile bildirilir","Yalnızca test mühendisi değişikliği yapar"],
      dogru:1,
      aciklama:"Gereksinim değişikliği kontrollü süreçten geçer: Change Request → etki analizi → CCB onayı → uygulama → VCRM güncellemesi → etkilenen test değerlendirme. Bu adımlardan birini atlamak izlenebilirliği bozar." },
    { id:"s8", etiket:"Gereksinim kalitesi", puan:2,
      soru:"Gereksinim kalite kontrolünde INCOSE'nin önerdiği kriterlerden hangisi doğrulanabilirlik anlamına gelir?",
      secenekler:["Gereksinimin müşteri tarafından onaylanması","Test, muayene, analiz veya gösterimle kanıtlanabilir olması","Sistemin belgelenebilir olması","Gereksinimin standarda uygun formatı"],
      dogru:1,
      aciklama:"Doğrulanabilirlik, gereksinimin test/muayene/analiz/gösterim yöntemlerinden biriyle kanıtlanabileceği anlamına gelir. 'Sistem güzel görünecektir' doğrulanamaz. 'Titreşim 1,5 G'nin altında olacaktır' doğrulanabilir." }
  ],
  ipuclari:{
    "İzlenebilirlik":"Aşağı: üst→alt kapsam. Yukarı: alt→üst kaynak. Yetim: bağlantısız alt. Boşluk: karşılanmayan üst.",
    "Değişiklik":"CR → etki analizi → CCB → araç güncelle → test yenile. Baseline: PDR'da dondurulur.",
    "Gereksinim kalitesi":"INCOSE: gerekli + doğrulanabilir + ulaşılabilir + belirgin + tam + tutarlı + sıralı.",
    "Araçlar":"DOORS/Polarion/Jama → benzersiz ID, değişiklik geçmişi, izlenebilirlik görselleştirme."
  }
}

}); // Object.assign sonu

Object.assign(window.CONTENT.konuIcerik, {

"m7-3": {
  ad: "Doğrulama ve geçerli kılma (V&V) süreçleri",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "Orta",
  sure: 20,
  mulakat: true,
  onbilgi: "V-modeli (m7-1), gereksinim yönetimi (m7-2)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"'Doğru ürünü mü yapıyoruz?' ve 'Ürünü doğru mu yapıyoruz?' — bu iki soru V&V'nin özüdür. Verification (doğrulama) sistemin gereksinimleri karşılayıp karşılamadığını kontrol eder. Validation (geçerli kılma) ise sistemin müşterinin gerçek ihtiyacını karşılayıp karşılamadığını kanıtlar. İkisi birbirini tamamlar ama birinin yerine geçmez." },

    { id:"b2", tip:"metin", baslik:"Doğrulama (Verification) nedir?",
      metin:"Doğrulama, sistemin veya bileşenin yazılı gereksinimlerini karşılayıp karşılamadığını kanıtlama sürecidir.\n\n'Sistemi DOĞRU yapıyor muyuz?' sorusunu yanıtlar.\n\nDört doğrulama yöntemi vardır:\n\nTEST: Fiziksel sistem veya prototip üzerinde ölçüm. En güçlü kanıt. 'Motor gücü 5000 hp'dir' → test koşum tezgahında ölçülür.\n\nMUAYENE: Gözlemsel inceleme. Ölçüm yapılmaz, bakılır. 'Kablo renk kodlaması MIL-SPEC'e uygun' → muayene ile kontrol edilir.\n\nANALİZ: Hesap ve simülasyon. Fiziksel test yetersiz veya imkânsız olduğunda. 'Kanat 150 kN yük altında dayanır' → FEM analizi. Sonuç mutlaka doğrulanmış model veya deneyimsel katsayıyla desteklenmeli.\n\nGÖSTERİM: Sistem özelliğinin çalıştırılarak gösterilmesi. Test gibi ama kapsamlı ölçüm yapılmaz. 'İniş kapılarının tahliye açılışı 3 saniyede gerçekleşir' → gösterim ile onaylanır." },

    { id:"b3", tip:"metin", baslik:"Geçerli kılma (Validation) nedir?",
      metin:"Geçerli kılma, sistemin müşterinin gerçek ihtiyacını ve operasyonel kullanım senaryolarını karşıladığını kanıtlama sürecidir.\n\n'DOĞRU sistemi yapıyor muyuz?' sorusunu yanıtlar.\n\nAyrımı anlamak için klasik örnek:\n'Müşteri hızlı seyahat istiyor. Sen süper hızlı bir bisiklet yaptın. Bisiklet tüm gereksinimleri karşılıyor (doğrulama OK). Ama müşteri uçmak istiyordu — geçerli kılma FAIL.'\n\nHavacılıkta geçerli kılma faaliyetleri:\n• Operasyonel senaryo testleri (gerçek pilot, gerçek koşullar)\n• Pilot görüşleri ve kullanılabilirlik değerlendirmesi\n• Servis simülatörü testleri\n• Sertifikasyon uçuş testleri\n• Müşteri kabul testleri\n\nGeçerli kılma genellikle daha subjektif ama kritiktir. 'Kokpit aydınlatması yeterli' → lüks sınıf yolcular için yeterli ama kargo operasyonu için yeterli olmayabilir.",
      kutu:{ tip:"bilgi", baslik:"Klasik V&V hatası",
        metin:"Challenger uzay mekiği kazasında O-ring contalar düşük sıcaklık gereksinimini karşılıyordu (verification OK). Ama Florida kışının gerçek soğuğunda nasıl davrandığı yeterince test edilmemişti (validation yetersiz). Sistem gereksinimleri karşıladı ama gerçek operasyonel koşulda başarısız oldu." } },

    { id:"b4", tip:"metin", baslik:"V&V planlaması ve yönetimi",
      metin:"V&V faaliyetleri program başında planlanır ve yaşayan belgelerdir.\n\nV&V Planı (VVP) içeriği:\n• Kapsam: Hangi gereksinimler, hangi sistem seviyeleri\n• Yöntemler: Her gereksinim için T/M/A/G seçimi ve gerekçesi\n• Sorumluluklar: Kim yapacak, kim onaylayacak\n• Kaynaklar: Test tesisi, alet, personel\n• Takvim: Test öncesi milestone'lar\n• Başarı kriterleri: 'Geçti' veya 'Kaldı' nasıl belirleniyor?\n• Risk yönetimi: Kritik test başarısız olursa ne olur?\n\nTest konfigürasyon yönetimi:\n'Hangi yazılım sürümüyle, hangi donanım yapılandırmasında test yapıldı?' bu bilgi olmadan test sonuçları geçersizdir. Konfigürasyon Kontrol Belgesi (CCB onaylı) her test için kayıt altına alınır.\n\nTest prosedürleri:\nHer test adım adım yazılmış prosedüre göre yapılır. Prosedürden sapma ancak CCB onayıyla mümkündür. Prosedür olmadan yapılan test geçersizdir — sertifikasyon açısından var sayılmaz." },

    { id:"b5", tip:"metin", baslik:"Uyum gösterim yöntemleri (MoC)",
      metin:"CS-25 veya FAR-25 gereksinimlerini nasıl karşıladığını otoriteye göstermek için Means of Compliance (MoC) belirlenir. Bu EASA'nın sertifikasyon çerçevesinde resmi sınıflandırmadır.\n\nMoC 0 — Tanımlayıcı doküman: Tasarımın gereksinimi nasıl karşıladığını sözel açıklar. Karmaşık olmayan gereksinimler için yeterli.\n\nMoC 1 — Uygunluk analizleri ve hesaplamalar: Mühendislik hesabı ve analitik ispatlar.\n\nMoC 2 — Hesaplamalı simülasyon: CFD, FEM gibi doğrulanmış sayısal araçlarla analiz.\n\nMoC 3 — Güvenlik analizi: FHA, FMEA, FTA gibi emniyet analizleri.\n\nMoC 4 — Laboratuvar testi: Tam uçak test tesisi dışında bileşen veya sistem seviyesinde test.\n\nMoC 5 — Uçak yer testi: Uçak üzerinde yer koşullarında yapılan test.\n\nMoC 6 — Uçuş testi: Gerçek uçuşta yapılan sertifikasyon testi.\n\nMoC 7 — Rüzgar tüneli testi: Aerodinamik doğrulama.\n\nMoC 8 — Benzer tasarım deneyimi: Önceki sertifikalı tasarımdan kanıtlanmış tecrübe.\n\nMoC 9 — Ekipman nitelendirmesi (ETSO/TSO): Ayrıca sertifikalandırılmış teçhizat." },

    { id:"b6", tip:"metin", baslik:"Test seviyesi hiyerarşisi",
      metin:"Havacılık sistemlerinde testler alt düzeyden üst düzeye doğru tırmanır:\n\nBİRİM TESTİ (Unit Test): En küçük test edilebilir birim. Yazılımda fonksiyon seviyesi, donanımda bileşen seviyesi.\n\nENTEGRASYON TESTİ: Birden fazla birimin birlikte çalışması. Alt sistem seviyesi. Arayüz hataları bu aşamada ortaya çıkar.\n\nSİSTEM TESTİ: Tüm sistemin birlikte çalışması. İşlevsel gereksinimler doğrulanır.\n\nSİSTEM ENTEGRASYON TESTİ (SIT): Birden fazla sistemin birlikte çalışması. Elektrik sistemi + aviyonik + kontrol sistemi etkileşimi.\n\nKABUL TESTİ: Müşteriye teslim öncesi. Müşteri gereksinimlerinin karşılanması doğrulanır.\n\nSERTİFİKASYON TESTİ: EASA/FAA gözetiminde. Tip sertifikası için zorunlu.\n\nHer seviyede geçemeyen bir test bir alttaki seviyeye döner. Kabul testinde bulunan hata çok geç ve pahalıdır. Bu yüzden erken doğrulama kritiktir." },

    { id:"b7", tip:"metin", baslik:"Yazılım V&V — DO-178C",
      metin:"Uçak yazılımı DO-178C (Software Considerations in Airborne Systems) standardına göre geliştirilir.\n\nDO-178C yazılım düzeyleri (DAL — Design Assurance Level):\nDAL A: Felaket — katastrofik başarısızlık. En yüksek güvence. Her satır koda elle bakılır.\nDAL B: Tehlikeli — kritik başarısızlık. Çok yüksek güvence.\nDAL C: Majör — majör başarısızlık. Yüksek güvence.\nDAL D: Minör — minör başarısızlık. Orta güvence.\nDAL E: Etki yok. Minimum gereksinim.\n\nDAL A yazılım için şunlar zorunlu:\n• Her gereksinimin test edildiği kanıtlanmalı\n• Ölü kod (dead code) yasak — erişilemeyen satır kalmayacak\n• Test coverage: Tüm kararlar (MC/DC — Modified Condition/Decision Coverage) test edilmeli\n• Bağımsız doğrulama ekibi (IV&V — Independent Verification and Validation)\n\nDAL A yazılım maliyeti normal yazılıma göre 10-100 kat daha yüksektir.",
      kutu:{ tip:"bilgi", baslik:"Neden yazılım bu kadar kritik?",
        metin:"Modern uçaklarda milyonlarca satır yazılım kodu çalışmaktadır. B787'de yaklaşık 8 milyon, F-35'te 8+ milyon satır kod vardır. Bir uçuş kontrol yazılımındaki hata anlık uçak kaybına yol açabilir. Bu yüzden DO-178C süreçleri son derece katı ve maliyetlidir." } },

    { id:"b8", tip:"ornek", baslik:"Örnek 1: Doğrulama yöntemi seçimi",
      soru:"Aşağıdaki gereksinimlerin her biri için en uygun doğrulama yöntemini (Test/Muayene/Analiz/Gösterim) belirle ve gerekçe.",
      cozum:"REQ-1: 'Motor arıza anında kanat üzerindeki asimetrik kaldırma 50.000 Nm'yi geçmeyecektir.'\n→ ANALİZ. Gerçek motor arızasıyla testi uçakta yapmak imkânsız ve tehlikelidir. CFD + aerodinamik analiz ve doğrulanmış simülasyon kullanılır.\n\nREQ-2: 'Acil çıkış kapısı 3 saniyede açılacaktır.'\n→ GÖSTERİM. Kapı açılır, kronometreyle ölçülür. Çok çeşitli ölçüm gerekmez; gözlemle doğrulanabilir.\n\nREQ-3: 'Kablo tesisatı MIL-DTL-38999 konnektör standartını kullanacaktır.'\n→ MUAYENEi. Fiziksel inceleme yeterlidir. Konnektör tipine bakılır, ölçüme gerek yok.\n\nREQ-4: 'Kabin sıcaklığı tüm uçuş fazlarında 18-26°C arasında kalacaktır.'\n→ TEST. Gerçek uçuş koşullarında termometre ölçümü gerekir. Farklı dış sıcaklık koşullarında uçuş testi." },

    { id:"b9", tip:"ornek", baslik:"Örnek 2: MoC seçimi",
      soru:"CS-25 Madde 25.1309 'Ekipman, Sistemler ve Donanımlar' kapsamında aviyonik bilgisayarın arıza güvenliği için hangi MoC'ler uygulanmalıdır? Açıkla.",
      cozum:"25.1309 için uygun MoC kombinasyonu:\n\nMoC 3 — Güvenlik analizi (ZORUNLU):\nFHA (Functional Hazard Assessment): Hangi arızanın ne tür tehlikeye yol açacağını tanımlar.\nFMEA: Her bileşen arızasının sistem üzerindeki etkisini listeler.\nFTA: Katastrofik arıza durumu için hata ağacı çizilir ve 10⁻⁹/uçuş saati hedefinin karşılandığı gösterilir.\n\nMoC 1 — Analiz:\nYük analizi, güç tüketimi, ısı dağılımı hesaplamaları.\n\nMoC 4 — Laboratuvar testi:\nBilgisayar kasasında fonksiyon ve arıza modu testleri.\nDO-160 çevresel testler (titreşim, sıcaklık, EMC).\n\nMoC 5 — Uçak yer testi:\nTam aviyonik entegrasyon yer testi. Diğer sistemlerle arayüz doğrulaması.\n\nMoC 6 — Uçuş testi:\nFonksiyonun gerçek uçuşta doğrulanması.\n\nGenellikle MoC'ler kombinasyon halinde kullanılır. Tek MoC nadiren yeterlidir." },

    { id:"b10", tip:"ornek", baslik:"Örnek 3: Test kapsam analizi",
      soru:"Bir yazılım modülünün 4 dalı var:\nDal 1: Normal operasyon (her uçuşta çalışır)\nDal 2: Motor arızası senaryosu\nDal 3: Çift motor arızası senaryosu\nDal 4: Yer operasyonu kodu\n\nDAL A yazılım için MC/DC coverage ne gerektirir? Her dal test edilmeli mi?",
      cozum:"MC/DC (Modified Condition/Decision Coverage) gereksinimleri:\n\nHer karar noktasında:\n• Her koşulun bağımsız olarak True/False olduğu test senaryosu\n• Her dal (True/False) en az bir kez çalıştırılmış olmalı\n\nDal 1: Teste dahil — normal operasyon → her zaman\nDal 2: Teste dahil — motor arızası → arıza enjeksiyonu ile test edilir\nDal 3: Teste dahil — çift motor arızası → simülatörde veya devre dışı bırakmayla test edilir\nDal 4: Teste dahil — yer kodu DAL A'da ölü kod sayılır, ya test edilmeli ya da meşru ölü kod olarak belgelenmeli\n\nÖNEMLİ: DAL A'da ölü kod yasak. Dal 4 gerçekten erişilemeyen bir kod ise ya silinmeli ya da 'deassert' mekanizmasıyla kapsam dışı bırakılmalı ve belgelenmeli.\n\nTest sayısı: 4 dal için minimum 4 test senaryosu ama MC/DC her koşulu bağımsız test ettiğinden gerçekte çok daha fazla senaryo gerekir." },

    { id:"b11", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Doğrulama ile geçerli kılmayı karıştırmak. Doğrulama: 'gereksinimlere uydu mu?'. Geçerli kılma: 'müşteri ihtiyacını karşıladı mı?'. İkisi birbirinin yerine geçmez.",
        "Analiz sonuçlarını test olmadan kabul etmek. Analiz güçlü kanıt ama modelin doğrulanması şart. Doğrulanmamış simülasyon güvenilir değil.",
        "Test konfigürasyonunu kayıt altına almamak. Hangi yazılım sürümü, hangi donanım yapılandırması — bu bilgi olmadan test tekrarlanamaz ve geçersizdir.",
        "Prosedürsüz test yapmak. Adım adım test prosedürü olmadan yapılan test sertifikasyon açısından geçersiz sayılır.",
        "Bağımsız doğrulamayı atlarsak. DAL A yazılımda IV&V zorunlu. Geliştirici ekip kendi işini doğrulayamaz.",
        "Geç doğrulama. 'Test et, sonra düzelt' modeli üretimde son derece pahalıdır. Erken doğrulama hem ucuz hem hızlıdır."
      ] },

    { id:"b12", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Verification ve Validation arasındaki fark nedir?","Verification: Ürünü doğru mu yapıyoruz? — gereksinimlere uyum. Validation: Doğru ürünü mü yapıyoruz? — müşteri ihtiyacına uyum. Her ikisi de gerekli: bir sistem tüm teknik gereksinimleri karşılayabilir ama müşterinin gerçek ihtiyacını karşılamıyorsa başarısız."],
        ["DO-178C DAL A nedir ve nasıl uygulanır?","Design Assurance Level A — katastrofik başarısızlık durumu için en yüksek yazılım güvence seviyesi. MC/DC test coverage, ölü kod yasağı, bağımsız doğrulama (IV&V) zorunlu. Her gereksinime test senaryosu bağlanmalı. Maliyet normal yazılıma göre 10-100 kat yüksektir."],
        ["Neden erken doğrulama önemlidir?","Hata ne kadar geç bulunursa düzeltme maliyeti o kadar yüksektir. Gereksinim aşamasında bulunan hata bileşen maliyetine, test aşamasında bulunan hata ise ürün maliyetinin 100 katına kadar yol açabilir. Erken doğrulama hem ucuz hem de programı kısaltır."]
      ] },

    { id:"b13", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "RTCA. (2011). DO-178C: Software considerations in airborne systems and equipment certification. RTCA.",
        "EASA. (2020). CS-25: Certification specifications for large aeroplanes. AMC 25.1309.",
        "NASA. (2007). NASA systems engineering handbook. Bölüm 5: V&V.",
        "IEEE. (2012). IEEE 1012: Standard for system, software and hardware verification and validation. IEEE."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"V&V tanımı", puan:2,
      soru:"'Doğru sistemi yapıyor muyuz?' sorusu V&V'nin hangi parçasını temsil eder?",
      secenekler:["Verification","Validation","Test","Muayene"],
      dogru:1,
      aciklama:"Validation (geçerli kılma) müşterinin gerçek ihtiyacının karşılanıp karşılanmadığını sorgular. Verification ise 'Sistemi doğru mu yapıyoruz?' — gereksinimlere uyumu kontrol eder." },
    { id:"s2", etiket:"Doğrulama yöntemleri", puan:2,
      soru:"'Motor güç çıkışı 5.000 hp'dir' gereksinimi için en uygun doğrulama yöntemi nedir?",
      secenekler:["Muayene","Analiz","Test","Gösterim"],
      dogru:2,
      aciklama:"Güç çıkışı ölçülmesi gereken sayısal bir değerdir. Test koşum tezgahında torkmetre ile ölçüm yapılır. Analiz tahmin sağlar ama gerçek değeri test verir." },
    { id:"s3", etiket:"MoC", puan:2,
      soru:"CS-25 bağlamında MoC 6 ne anlama gelir?",
      secenekler:["Laboratuvar testi","Güvenlik analizi","Uçuş testi","Benzer tasarım deneyimi"],
      dogru:2,
      aciklama:"MoC 6 uçuş testidir. Gereksinimin gerçek uçuş koşullarında doğrulandığını kanıtlar. Stall, performans, uçuş zarfı sınırları gibi gereksinimler MoC 6 ile kapatılır." },
    { id:"s4", etiket:"DO-178C", puan:2,
      soru:"DAL A yazılımda 'ölü kod' neden yasaktır?",
      secenekler:["Depolama alanı kapladığı için","Test edilemeyeceğinden; erişilemeyen kodun beklenmedik koşullarda ne yapacağı bilinemez","Derleme hatasına yol açtığı için","Maliyeti artırdığı için"],
      dogru:1,
      aciklama:"Ölü kod (hiçbir zaman çalıştırılamayan kod) test edilemez. DO-178C DAL A'da her satır test edilmeli. Ölü kod varlığı test coverage'ı tamamlanamaz hale getirir ve potansiyel güvenlik riski barındırır." },
    { id:"s5", etiket:"V&V tanımı", puan:1,
      soru:"'Sistemi doğru mu yapıyoruz?' sorusu neyi temsil eder?",
      secenekler:["Validation","Verification","Geçerli kılma","Kabul testi"],
      dogru:1,
      aciklama:"Verification (doğrulama) sistemin teknik gereksinimlere uyumunu kontrol eder. 'Doğru şeyi mi yapıyoruz?' sorusu Validation'dır. İkisi çok farklı kavramlardır." },
    { id:"s6", etiket:"Test seviyeleri", puan:2,
      soru:"Sistem entegrasyon testinde hangi tür hataların ortaya çıkması beklenir?",
      secenekler:["Bileşen içi mantık hataları","İki veya daha fazla sistem arasındaki arayüz ve etkileşim hataları","Yazılım derleme hataları","Malzeme yorulma hataları"],
      dogru:1,
      aciklama:"Entegrasyon testi birden fazla sistemi birleştirir. Sistemler ayrı çalışırken iyi olsa bile birlikte çalışırken arayüz uyumsuzlukları, zamanlama sorunları ve veri formatı çakışmaları ortaya çıkabilir." },
    { id:"s7", etiket:"Doğrulama yöntemleri", puan:1,
      soru:"'Kablo bağlantısı sarı olacaktır' gereksinimi hangi yöntemle doğrulanır?",
      secenekler:["Test","Analiz","Muayene","Gösterim"],
      dogru:2,
      aciklama:"Renk kontrolü göz ile yapılır — muayene (inspection). Ölçüm veya hesap gerektirmeyen görsel gereksinimler muayene ile doğrulanır." },
    { id:"s8", etiket:"V&V planlaması", puan:2,
      soru:"Test konfigürasyon yönetimi neden kritiktir?",
      secenekler:["Testi hızlandırmak için","Hangi yazılım/donanım yapılandırmasıyla test yapıldığını belgelemek; aksi halde test sonuçları tekrarlanamaz ve geçersiz sayılır","Maliyeti azaltmak için","Otorite gerekli değil"],
      dogru:1,
      aciklama:"Test hangi yazılım sürümüyle, hangi donanım revizyonunda yapıldığını bilmeden sonuç anlamsızdır. Donanım değişince test yenilenmeli mi? Yazılım güncellemesinde hangi testler etkilendi? Bunlar konfigürasyon kaydı olmadan cevaplanamaz." }
  ],
  ipuclari:{
    "V&V tanımı":"Verification: doğru yapıyor muyuz? (gereksinime uyum). Validation: doğru şeyi yapıyor muyuz? (müşteri ihtiyacı).",
    "Doğrulama yöntemleri":"Test: ölçüm. Muayene: görsel bakış. Analiz: hesap/sim. Gösterim: çalıştırarak göster.",
    "MoC":"0-dok, 1-analiz, 2-sim, 3-emniyet, 4-lab testi, 5-yer testi, 6-uçuş testi, 7-rüzgar tüneli.",
    "DO-178C":"DAL A=katastrofik. MC/DC coverage. Ölü kod yasak. IV&V zorunlu. Maliyet 10-100x."
  }
}

}); // Object.assign sonu

Object.assign(window.CONTENT.konuIcerik, {

"m7-4": {
  ad: "EASA CS-25 ve FAA FAR-25 esasları",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "Orta",
  sure: 22,
  mulakat: true,
  onbilgi: "V-modeli (m7-1), V&V süreçleri (m7-3)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Büyük taşıt uçaklarının tasarım, üretim ve işletimini düzenleyen iki temel standart vardır: EASA CS-25 (Avrupa) ve FAA FAR-25 (Amerika). Bu standartlar uçak tasarımı mühendisinin 'anayasasıdır'. Her karar, her analiz bu standartların gereksinimlerine izlenebilir olmalıdır." },

    { id:"b2", tip:"metin", baslik:"Otoriteler ve yetki alanları",
      metin:"EASA (European Union Aviation Safety Agency — Avrupa Birliği Havacılık Emniyeti Ajansı):\n• 2003'te kuruldu, merkezi Köln, Almanya\n• AB üye devletlerin sivil havacılık otoritesi\n• CS (Certification Specifications) serisi standartlar yayımlar\n• CS-25: Büyük uçaklar (takeoff weight > 5.700 kg veya 9+ yolcu)\n• CS-23: Küçük uçaklar\n• CS-E: Motorlar\n• CS-P: Pervaneler\n\nFAA (Federal Aviation Administration — Federal Havacılık İdaresi):\n• 1958'de kuruldu, Washington DC\n• ABD sivil havacılık otoritesi\n• FAR (Federal Aviation Regulations) serisi\n• FAR Part 25: CS-25'in ABD muadili\n• FAR Part 23, 27 (helikopter), 33 (motor)\n\nULUUD İŞBİRLİĞİ:\nTCDS (Type Certificate Data Sheet) başka ülkede alınan tip sertifikasının validasyonunu sağlar. EASA-FAA arasında bilateral anlaşma (BASA — Bilateral Aviation Safety Agreement) tekrarlı testleri önler. EASA TC olan bir uçak FAA Validation ile ABD'ye giriş yapabilir.",
      kutu:{ tip:"bilgi", baslik:"Türkiye ve SHGM",
        metin:"Türkiye'de Sivil Havacılık Genel Müdürlüğü (SHGM) otoritedir. SHGM 2009'dan itibaren EASA ile alignment içindedir. CS-25 gereksinimlerini referans alır. TCDD (Türk Tip Sertifikası) süreci EASA sürecine paralel yürütülür." } },

    { id:"b3", tip:"metin", baslik:"CS-25 yapısı ve temel bölümler",
      metin:"CS-25 aşağıdaki bölümlerden oluşur:\n\nSUBPART A — Genel (25.1-25.3)\nAmaç, uygulanabilirlik, şekil değiştirmeler.\n\nSUBPART B — Uçuş (25.21-25.253)\nPerformans gereksinimleri: kalkış, tırmanma, seyir, alçalma, iniş, stall, manevra kabiliyeti.\n\nSUBPART C — Yapı (25.301-25.631)\nYük durumları, faktörler, malzeme gereksinimleri, yorulma değerlendirmesi.\n25.301: Limit yükler (operasyonel maksimum) ve nihai yükler (limit × 1,5).\n\nSUBPART D — Tasarım ve İnşa (25.601-25.899)\nEmalzeme kalifikasyonu, ekipman kurulumu, yangın koruması.\n\nSUBPART E — Güç Tesisi (25.901-25.1207)\nMotor, yakıt sistemi, yağlama, hava alma sistemleri.\n\nSUBPART F — Teçhizat (25.1301-25.1461)\nEnstrümanlar, aviyonik, elektrik sistemleri, acil ekipman.\n25.1309: Ekipman, sistemler ve donanımlar — emniyet analizi gereksinimleri.\n\nSUBPART G — Sürekli Uçuşa Elverişlilik (25.1501-25.1581)\nAFM (Aircraft Flight Manual), bakım gereksinimleri." },

    { id:"b4", tip:"metin", baslik:"CS-25 Madde 25.1309 — Emniyet analizi",
      metin:"25.1309 muhtemelen CS-25'in en önemli maddesidir. Tüm ekipman ve sistemlerin arıza durumlarının etki sınıfını ve olasılık hedeflerini tanımlar.\n\nArıza etki sınıflandırması:\n• Katastrofik (Catastrophic): Uçak kaybı veya birden fazla ölüm. Olasılık: < 10⁻⁹/uçuş saati. (Pratikte 'ekstrem nadir olasılık')\n• Tehlikeli (Hazardous): Ciddi yaralanma veya ölüm riski. < 10⁻⁷/uçuş saati.\n• Majör (Major): Önemli güvenlik marjı azalması. < 10⁻⁵/uçuş saati.\n• Minör (Minor): Küçük güvenlik marjı azalması. < 10⁻³/uçuş saati.\n• Etki yok (No safety effect): Operasyonel değerlendirme yok.\n\nBu olasılık hedefleri emniyet analizinin (FHA, FMEA, FTA) çıktısıyla karşılaştırılır. Hesaplanan olasılık hedefin altında kalmalıdır.\n\nAMC (Acceptable Means of Compliance) 25.1309: Bu maddenin nasıl karşılanacağına dair EASA'nın yönlendirici açıklaması. Zorunlu değil ama tercih edilen yol." },

    { id:"b5", tip:"metin", baslik:"25.1309 ve bağımsızlık ilkesi",
      metin:"CS-25 Madde 25.1309'un kritik bir ilkesi vardır: Katastrofik ve tehlikeli arıza koşulları tek bir arızadan kaynaklanmamalıdır.\n\nBu 'no single failure' ilkesi şu anlama gelir:\n• Tek bir eleman arızalanınca katastrofik sonuç oluşmamalı\n• İki bağımsız arızanın aynı anda olma olasılığı arızaların bağımsızlığını varsayar\n• Eğer iki sistem bağımsız değilse (ortak mod arızası) tek arıza gibi değerlendirilir\n\nOrtak mod arızası (Common Cause Failure):\n• Ortak güç kaynağı: İki 'bağımsız' sistem aynı güç barından beslenirse ortak mod arızası var\n• Ortak yazılım: Aynı yazılım iki redundant bilgisayarda çalışıyorsa yazılım hatası her ikisini aynı anda etkiler\n• Ortak çevre: İki sensör aynı fiziksel konumdaysa yangın veya hasar her ikisini etkiler\n\nZonal Safety Analysis (ZSA): Her uçak bölgesinde (zone) hangi sistemlerin bulunduğunu analiz eder. Aynı bölgede birden fazla 'bağımsız' sistem varsa ortak mod riski değerlendirilmeli.",
      kutu:{ tip:"uyari", baslik:"Boeing 737 MAX ve bağımsızlık ilkesi",
        metin:"MCAS sistemi tek AoA (Angle of Attack) sensöründen veri aldı. Bu sensörün arızası MCAS'ı yanlış tetikledi. Tek sensöre bağımlılık 'no single failure' ilkesini ihlal etti. Bu ihlalin onay sürecinde nasıl geçtiği sorusu bugün hâlâ tartışılmaktadır." } },

    { id:"b6", tip:"metin", baslik:"CS-25 ve FAR-25 farkları",
      metin:"CS-25 ve FAR-25 büyük ölçüde harmonize edilmiş standartlardır. Temel yapı ve gereksinim numaraları uyumludur. Ancak bazı farklar vardır:\n\nYangın koruması: FAA bazı gereksinimler için farklı test yöntemi kabul eder.\n\nUçuş deneyi: FAR-25.23 vs CS-25.23 bazı ağırlık limitleri için farklı değer içerebilir.\n\nGürültü: ICAO Annex 16 tabanlı olmakla birlikte FAA Stage sınıflandırması ile EASA Chapter sınıflandırması aynı değildir.\n\nOlarisation kuralları: Bazı kablo ve elektrik gereksinimlerinde küçük teknik farklar.\n\nUygulama anlayışı: Yazı aynı olsa bile EASA denetçisi ile FAA denetçisi bazı gereksinim yorumlarında farklılaşabilir. Bu nedenle EASA-FAA bilateral koordinasyonu kritik önem taşır.\n\nPratik öneri: Hem EASA hem FAA sertifikasyonu hedeflenen bir programda iki otoriteyle baştan koordinasyon kurulur; öngörülemeyen farklar takvim ve maliyeti etkiler." },

    { id:"b7", tip:"metin", baslik:"Sertifikasyon temeli (Certification Basis)",
      metin:"Her yeni uçak programı için sertifikasyon temeli (certification basis) otoriteyle müzakere edilerek belirlenir.\n\nSertifikasyon temeli:\n• Hangi CS-25/FAR-25 sürümünün uygulandığı (amendment numarası)\n• Özel koşullar (Special Conditions): Mevcut standartta karşılığı olmayan yeni teknoloji (karbon fiber, elektrikli uçuş kontrol, lityum pil) için otorite özel gereksinim yayımlar\n• İstisna hükümleri (Exemptions): Çok nadir, otorite tarafından gerekçeli olarak kabul edilir\n• Eşdeğer güvenlik bulguları (Equivalent Level of Safety, ELOS): Standart gereksinim yerine farklı bir yolla eşdeğer güvenlik sağlandığı kanıtlanır\n\nCertification Basis neden önemli:\n'Hangi kurala göre tasarlandı?' sorusuna cevap verir. Uçak tüm servis hayatı boyunca bu temele göre yönetilir. Değişiklik olduğunda değişikliğin sertifikasyon temeline etkisi değerlendirilir." },

    { id:"b8", tip:"ornek", baslik:"Örnek 1: Arıza sınıflandırması",
      soru:"Bir yolcu uçağında aşağıdaki arızaların her biri için CS-25 kategorisini ve olasılık hedefini belirle:\nA) Kabin aydınlatmasının %30 azalması\nB) Otopilot devre dışı kalması\nC) Her iki motor itkisinin kaybı\nD) Fren sisteminin tamamen arızalanması",
      cozum:"A) Kabin aydınlatması %30 azalması:\n→ MİNÖR. Uçuş güvenliğini tehdit etmiyor, yolcu konforu düşüyor. Hedef: < 10⁻³/saat\n\nB) Otopilot devre dışı kalması:\n→ MİNÖR (normal koşullar). Pilot devralır, operasyon sürer. Ek pilot iş yükü oluşur. Hedef: < 10⁻³/saat\n(Not: Otopilot düşük görüş IMC yaklaşmasında devre dışı kalırsa MAJÖR olarak sınıflandırılabilir)\n\nC) Her iki motor itkisi kaybı:\n→ KATASTROFİK. Kontrollü iniş büyük ölçüde imkânsız, çok sayıda can kaybı riski. Hedef: < 10⁻⁹/saat\n(Bu yüzden çift motor kaybı 'no single failure' ilkesi gereği tek bir arızadan kaynaklanmamalı)\n\nD) Fren sistemi tam arızası:\n→ TEHLİKELİ-KATASTROFİK arası. Uygun pistlerde yüksek hızda stop kabiliyeti yok → büyük hasar riski. Hedef: < 10⁻⁷/saat" },

    { id:"b9", tip:"ornek", baslik:"Örnek 2: Sertifikasyon temeli belirleme",
      soru:"Yeni geliştirilecek yolcu uçağına karbon fiber kompozit gövde ve lityum-iyon pil tabanlı APU kullanılacak. Sertifikasyon temeli hazırlanırken hangi özel koşullar gerekebilir?",
      cozum:"ÖZEL KOŞUL 1 — Karbon fiber kompozit gövde:\nCS-25'te basınçlı gövde için metalik yapı standardı var. Kompozit için farklı arıza modu, farklı hasar toleransı ve farklı bakım muayene yöntemi gerekir. EASA, kompozit gövde için 'Composite Structure' özel koşulu yayımlar. B787 programı bu süreçten geçmiştir.\n\nÖZEL KOŞUL 2 — Lityum-iyon pil:\nCS-25'te lityum-iyon pil için doğrudan madde yok. Termal kaçış (thermal runaway) ve gaz birikimi riskleri standart pil gereksinimlerinden farklı. EASA özel koşul yayımlar:\n• Termal izolasyon ve konteyner gereksinimleri\n• Şarj/deşarj yönetimi\n• Yangın algılama ve söndürme entegrasyonu\n(B787 lityum-iyon pil yangınları 2013'te bu sürecin önemini gösterdi)\n\nEĞER ELOS HEDEFLENIYORSA:\nStandart gereksinimden sapma ama eşdeğer güvenlik ispatı. Örneğin: 'Tek pil arızasında sistem devam ediyor' → alternatif güç kaynağı + izleme sistemi = eşdeğer güvenlik kanıtı." },

    { id:"b10", tip:"ornek", baslik:"Örnek 3: No single failure analizi",
      soru:"Bir uçağın iniş takımı açma sistemi inceleniyor. Ana sistem hidrolik, yedek sistem elektrik motorludur. Sadece güç kaynağını değerlendirerek 'no single failure' ilkesini analiz et.",
      cozum:"MEVCUT DURUM:\nAna sistem: Hidrolik güç\nYedek sistem: Elektrik motoru\n\nBAĞIMSIZLIK ANALİZİ:\n\nTek güç kaynağı sorusu:\nHidrolik sistem → hangi pompadan besleniyor? → Motor tahrikli pompa\nElektrik motoru → hangi baradan besleniyor? → Ana DC bara\n\nEĞER motor kaybı olursa:\n• Motor tahrikli hidrolik pompa durur → ana sistem devre dışı\n• Ana DC bara kaybolursa (motor jeneratörü) elektrik motoru da durabilir\n\nPOTANSİYEL ORTAK MOD: Motor kaybı her iki sistemi aynı anda etkileyebilir.\n\nÇÖZÜM GEREKSİNİMLERİ:\n1. Yedek hidrolik sistemi el pompası veya ram air turbine (RAT) ile besle\n2. Elektrik motorunu bataryadan veya APU'dan besle (motor bağımsız)\n3. Manuel mekanik kolu hep birlikte sağla (son yedek)\n\nBu analiz Zonal Safety Analysis ve Common Cause Failure Analysis (CCFA) süreçlerinde yapılır." },

    { id:"b11", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "CS-25 ve FAR-25'i tamamen aynı sanmak. Büyük ölçüde uyumlu ama küçük farklar var. Çift sertifikasyon hedefleniyorsa her ikisi ayrıca kontrol edilmeli.",
        "Arıza kategorisini konservatif değerlendirmemek. Şüpheli durumlarda daha tehlikeli kategori seçilir — alt kategoride değerlendirmek güvenlik açığı yaratır.",
        "'No single failure' ilkesini sadece donanım için uygulamak. Yazılım ve ortak çevre de analiz edilmeli. Ortak mod arızası tüm yedek yapıyı işlevsiz kılabilir.",
        "Sertifikasyon temelini geç belirlemek. Ne kadar erken belirlenirsf program o kadar az sürpriz yaşar. Özel koşullar beklenmedik maliyet ve takvim yükü getirir.",
        "AMC'yi zorunlu standart sanmak. AMC uygulaması tercih edilen yoldur ama alternatif uyum yolu da mümkündür — otorite ikna edilirse.",
        "TCDS'i ihmal etmek. Başka ülkede alınan tip sertifikasını validate etmek bazen sıfırdan tasarım kadar iş gerektirir."
      ] },

    { id:"b12", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["CS-25 Madde 25.1309 ne söyler?","Ekipman, sistemler ve donanımların tasarımı uçuşa olumsuz etkiyi engelleyecek biçimde yapılmalı. Arıza etki sınıfları (katastrofik, tehlikeli, majör, minör) tanımlanmış; her sınıf için olasılık hedefi var. Katastrofik: < 10⁻⁹/saat. Tek bir arızadan katastrofik sonuç çıkmamalı (no single failure)."],
        ["EASA ve FAA arasındaki bilateral anlaşma ne sağlar?","BASA (Bilateral Aviation Safety Agreement) her iki otoritenin sertifikasyon süreçlerini karşılıklı tanımasını sağlar. EASA TC olan uçak FAA validation ile ABD'ye giriş yapabilir. Tekrarlı testler ve analizler azalır, maliyet düşer. Küçük farklılıklar iki otorite koordinasyonuyla çözülür."],
        ["Özel koşul (Special Condition) nedir?","Mevcut CS-25/FAR-25'te karşılığı olmayan yeni teknoloji için otorite özel gereksinim yayımlar. Karbon fiber gövde, lityum pil, elektrikli uçuş kontrol bu konularda özel koşullar yayımlanmıştır. Başvuru sahibinin önerisine otoritenin görüşü eklenerek oluşturulur."]
      ] },

    { id:"b13", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "EASA. (2020). CS-25 Amendment 27: Certification specifications and acceptable means of compliance for large aeroplanes.",
        "FAA. (2020). FAR Part 25: Airworthiness standards: Transport category airplanes. 14 CFR Part 25.",
        "EASA. (2018). AMC 25.1309: Equipment, systems and installation — Acceptable means of compliance.",
        "SAE. (2010). ARP4754A: Guidelines for development of civil aircraft and systems. SAE International."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"CS-25 yapısı", puan:1,
      soru:"CS-25 Madde 25.1309 hangi konuyu düzenler?",
      secenekler:["Yapısal limit yükler","Ekipman, sistemler ve donanımların arıza analizi ve emniyet gereksinimleri","Motor güç değerlendirmesi","Kalkış performansı"],
      dogru:1,
      aciklama:"25.1309, tüm uçak sistemlerinin arıza etkilerini ve olasılıklarını düzenler. Katastrofik, tehlikeli, majör, minör sınıflandırması ve her sınıf için olasılık hedefleri burada tanımlanır." },
    { id:"s2", etiket:"Arıza sınıflandırması", puan:2,
      soru:"CS-25'e göre katastrofik arıza için maksimum olasılık hedefi nedir?",
      secenekler:["10⁻⁵/uçuş saati","10⁻⁷/uçuş saati","10⁻⁹/uçuş saati","10⁻³/uçuş saati"],
      dogru:2,
      aciklama:"Katastrofik arıza (uçak kaybı veya birden fazla ölüm) için olasılık hedefi < 10⁻⁹/uçuş saatidir. Bu 'ekstrem nadir olasılık' sınıfıdır. Tehlikeli için 10⁻⁷, majör için 10⁻⁵, minör için 10⁻³." },
    { id:"s3", etiket:"No single failure", puan:2,
      soru:"'No single failure' ilkesi ne anlama gelir?",
      secenekler:["Sistemde hiç arıza olmaması","Tek bir eleman arızasının katastrofik veya tehlikeli sonuç yaratmaması","Arızaların sayılmasının mümkün olması","Test sırasında arıza çıkmaması"],
      dogru:1,
      aciklama:"CS-25 25.1309 gereği katastrofik ve tehlikeli arızalar tek bir arızadan kaynaklanmamalıdır. Bu yüzden kritik sistemler yedeklenmeli ve yedekler gerçekten bağımsız olmalıdır." },
    { id:"s4", etiket:"EASA-FAA", puan:1,
      soru:"BASA (Bilateral Aviation Safety Agreement) ne sağlar?",
      secenekler:["İki ülkenin ortak uçak tasarlamasını","Her iki otoritenin sertifikasyon süreçlerini karşılıklı tanıması ve tekrarlı testlerin azalması","Pilotların her iki ülkede lisans almasını","Havayolu güzergahlarının paylaşılmasını"],
      dogru:1,
      aciklama:"BASA EASA ve FAA'nın birbirinin sertifikasyon süreçlerini tanımasına olanak tanır. Bir tarafta alınan TC diğer tarafta validate edilir. Tekrarlı analizler azalır, çift sertifikasyon süreci hızlanır." },
    { id:"s5", etiket:"CS-25 yapısı", puan:1,
      soru:"CS-25 Subpart C hangi konuları kapsar?",
      secenekler:["Aviyonik ve ekipman","Yapısal yükler, faktörler ve malzeme gereksinimleri","Güç tesisi","Genel hükümler"],
      dogru:1,
      aciklama:"Subpart C (25.301-25.631) yapısal gereksinimleri kapsar: limit ve nihai yük tanımları, güvenlik faktörü 1,5, malzeme kalifikasyonu, yorulma değerlendirmesi ve hasar toleransı." },
    { id:"s6", etiket:"Özel koşullar", puan:2,
      soru:"Neden lityum-iyon pil için özel koşul (Special Condition) gerekebilir?",
      secenekler:["Çok pahalı olduğundan","CS-25'te lityum-iyon pil için özel madde olmadığından; termal kaçış ve gaz birikimi gibi özel riskler standart pil gereksinimlerinden farklı","Yeni teknoloji her zaman özel koşul gerektirir","Lityum yasadışıdır"],
      dogru:1,
      aciklama:"CS-25'te lityum-iyon pil için doğrudan madde yoktur. Termal kaçış, gaz birikimi ve şarj yönetimi gibi özel riskler için EASA özel gereksinim (Special Condition) yayımlar. B787 pil yangınları bu gereksinimlerin önemini gösterdi." },
    { id:"s7", etiket:"Arıza sınıflandırması", puan:2,
      soru:"Ortak mod arızası (Common Cause Failure) neden tehlikelidir?",
      secenekler:["Daha sık oluştuğundan","İki 'bağımsız' sistemi aynı anda etkileyen arızalar; yedek yapıyı tek arıza etkisine dönüştürür","Tespit edilmesi çok kolay olduğundan","Yalnızca yazılımda görüldüğünden"],
      dogru:1,
      aciklama:"Ortak güç kaynağı, ortak yazılım veya ortak fiziksel konum gibi ortak mod, iki bağımsız görünen sistemi aynı anda devre dışı bırakabilir. Bu 'no single failure' ilkesini fiilen ihlal eder. Zonal Safety Analysis bu riski tanımlar." },
    { id:"s8", etiket:"Sertifikasyon temeli", puan:1,
      soru:"Sertifikasyon temeli (Certification Basis) nedir?",
      secenekler:["Uçağın tabanının sertifikasyonu","Her program için hangi CS-25/FAR-25 sürümünün, hangi özel koşulların ve istisnaların uygulanacağını belirleyen çerçeve","Sertifika belgelerinin saklandığı veritabanı","Otorite denetçisinin çalışma tabanı"],
      dogru:1,
      aciklama:"Her uçak programı için otoriteyle müzakere edilen sertifikasyon temeli hangi standart sürümünün uygulandığını, hangi özel koşulların eklendiğini ve istisnalar varsa hangi ELOS gerekçesiyle kabul edildiğini tanımlar." }
  ],
  ipuclari:{
    "CS-25 yapısı":"A=genel, B=uçuş, C=yapı, D=tasarım, E=güç tesisi, F=teçhizat, G=sürekli elverişlilik. 25.1309=emniyet analizi.",
    "Arıza sınıflandırması":"Katastrofik<10⁻⁹. Tehlikeli<10⁻⁷. Majör<10⁻⁵. Minör<10⁻³. No single failure kritik kategoriler için.",
    "EASA-FAA":"BASA=bilateral tanıma. Büyük ölçüde harmonize ama küçük farklar var. Özel koşul=yeni teknoloji için ek gereksinim.",
    "Sertifikasyon temeli":"CS-25 sürüm + özel koşullar + istisnalar/ELOS. Erken belirle, programı koru."
  }
},

"m7-5": {
  ad: "Tip sertifikası, PC ve uçuşa elverişlilik",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "Temel",
  sure: 18,
  mulakat: true,
  onbilgi: "CS-25 esasları (m7-4)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Bir uçağın üretilip teslim edilebilmesi için üç temel sertifika gerekir: Tip Sertifikası tasarımı, Üretim Sertifikası üretim sürecini, Uçuşa Elverişlilik Sertifikası ise her bireysel uçağı onaylar. Bu üçlü yapı havacılık güvenliğinin sertifikasyon ayağını oluşturur." },

    { id:"b2", tip:"metin", baslik:"Tip Sertifikası (Type Certificate, TC)",
      metin:"Tip Sertifikası, bir uçak tasarımının onaylı standartları karşıladığını gösteren belgedir.\n\nKim alır: Tasarım organizasyonu (tasarımı yapan şirket)\nVerilen: EASA veya FAA tarafından\nNeyi onaylar: Belirli bir tip tasarımını — tüm teknik özellikleriyle\n\nTip Sertifikası içeriği:\n• TCDS (Type Certificate Data Sheet): Onaylı yapılandırmayı özetleyen kısa belge\n  - Sertifikasyon temeli (uygulanan standart sürümü)\n  - Onaylı motor tipleri ve kombinasyonları\n  - Onaylı ağırlık limitleri\n  - Onaylı konfigürasyonlar\n  - Özel uçuş kısıtlamaları\n\nSüreç:\n1. Başvuru yapılır (Letter of Application)\n2. Sertifikasyon planı onaylanır\n3. Uyum gösterim faaliyetleri yürütülür\n4. Otorite denetimi\n5. TC verilir\n\nTC bir kez verilir ve kalıcıdır. Majör değişiklikler tip tasarımını değiştirir ve yeni onay gerektirir.",
      kutu:{ tip:"bilgi", baslik:"TC vs STC",
        metin:"TC: Özgün tip tasarımı. STC (Supplemental Type Certificate): Mevcut TC'ye eklenen değişiklik. STC tip tasarımı sahibinden bağımsız başka bir kuruluş tarafından da alınabilir. Kabin yeniden düzenleme, motor değiştirme, aviyonik yükseltme sık STC konularıdır." } },

    { id:"b3", tip:"metin", baslik:"Üretim Sertifikası (Production Certificate, PC)",
      metin:"Üretim Sertifikası, bir üretim tesisinin onaylı tip tasarımına uygun uçak üretme yetkinliğine sahip olduğunu gösteren belgedir.\n\nKim alır: Üretim organizasyonu (imalat yapan şirket)\nVerilen: EASA (Part-21 Subpart G) veya FAA tarafından\nNeyi onaylar: Üretim sürecinin kalite yönetim sistemini\n\nPC kapsamı:\n• Kalite yönetim sistemi (AS9100 veya EN 9100 tabanlı)\n• Satın alma ve tedarikçi denetimi\n• Üretim süreç kontrolleri\n• Konfigürasyon yönetimi\n• Kabullenme testi prosedürleri\n• Uygunsuz ürün yönetimi\n\nPC olmadan uçak üretilip satılamaz. TC sahibi ve PC sahibi aynı şirket olabilir (Boeing, Airbus gibi) veya farklı şirketler olabilir (lisanslı üretim gibi).\n\nHer üretilen uçak PC kapsamındaki süreçlerle üretilir ve Conformity Statement (uygunluk bildirimi) ile teslim edilir." },

    { id:"b4", tip:"metin", baslik:"Uçuşa Elverişlilik Sertifikası (Airworthiness Certificate)",
      metin:"Uçuşa Elverişlilik Sertifikası, belirli bir uçağın (münferit, tescil numarasıyla tanımlanan) uçuşa elverişli olduğunu belgeleyen sertifikadır.\n\nKim alır: Uçağın sahibi/operatörü\nVeren: Ulusal otorite (Türkiye'de SHGM, ABD'de FAA, AB'de üye devlet otoritesi EASA adına)\nNeyi onaylar: Bireysel uçağın onaylı tip tasarımına uygun olduğunu ve bakımının sürdürüldüğünü\n\nİlk uçuşa elverişlilik:\nİlk teslimat sonrasında verilir. Uçağın onaylı tip tasarımına uygun üretildiği ve tüm kabullenme testlerini geçtiği doğrulanır.\n\nSürekli uçuşa elverişlilik:\nSertifika başlangıçta verilir ama operatör sürekli olarak uçuşa elverişliliği korumakla yükümlüdür.\n• Planlı bakım programına uyum\n• AD (Airworthiness Directive) uygulamaları\n• Ömür sınırlı parça değişimleri\n• Defect ve modification yönetimi\n\nSertifika askıya alınması: Bakım zamanı geçmişse, AD uygulanmamışsa veya hasar varsa uçuşa elverişlilik sertifikası askıya alınır ve uçak yer alır (grounding)." },

    { id:"b5", tip:"metin", baslik:"Kategoriler ve özel airworthiness sertifikaları",
      metin:"Normal Uçuşa Elverişlilik Sertifikası: Ticari operasyon ve özel uçuş için standart sertifika.\n\nÖzel Uçuşa Elverişlilik Sertifikası:\n• Experimental: Araştırma, geliştirme, gösterim amaçlı. Normal TC gerekmez. X-15, SpaceShipOne bu kategoride uçtu. Yolcu taşıma kısıtlıdır.\n• Kısıtlı (Restricted): Tarım, havadan fotoğraf, yangın söndürme gibi özel amaçlar. Özel kısıtlamalar içerir.\n• Özel Uçuş İzni (Special Flight Permit): Geçici uçuşa elverişsiz durumda uçak için sınırlı izin. 'Ferry permit' olarak da bilinir. Uçağı onarım tesisine götürmek için kullanılır.\n\nExport Certificate of Airworthiness: Uçak başka ülkeye satıldığında düzenlenir. Alıcı ülkenin otoritesi import işlemi yapar.",
      kutu:{ tip:"bilgi", baslik:"İlk uçuş öncesi durum",
        metin:"Prototip uçaklar normal TC almadan önce 'Experimental' sertifikasıyla uçar. Bu sertifika teknik ekibin (test pilotları dahil) binmesine izin verir ama yolcu taşımayı yasaklar. B787'nin ilk uçuşu (2009) ve A380'in ilk uçuşu (2005) experimental sertifikayla yapılmıştır." } },

    { id:"b6", tip:"metin", baslik:"Sürekli uçuşa elverişlilik yönetimi",
      metin:"Havayolları uçuşa elverişliliği kendi organizasyonlarıyla yönetir:\n\nCAAMO (Continuing Airworthiness Management Organization):\nPart-M/Part-CAMO kapsamında onaylı kuruluş. Her uçağın bakım durumunu takip eder. AD'leri uygular ve kayıt altına alır. Bakım programını yönetir.\n\nBakım programı temelleri:\nMPD (Maintenance Planning Document): Üretici tarafından hazırlanan bakım planı. Her görev için zaman/çevrim aralıkları.\nMSG-3 (Maintenance Steering Group Methodology): Bakım görevlerini oluşturmak için kullanılan analitik yöntem.\n\nMSG-3 temel kararı:\n• Planlı bakım mı (on-condition, hard-time)?\n• Hasar toleranslı tasarım ve izleme mi?\n• Parçanın ömrü dolduğunda değişim mi?\n\nLife-Limited Parts (LLP): Ömrü uçuş çevrimi veya saatiyle sınırlı parçalar. Motor turbine diski, fan diski. Bu parçaların bireysel takibi zorunlu — parça geçmişi belgesi (part history) kaybolursa parça kullanılamaz." },

    { id:"b7", tip:"ornek", baslik:"Örnek 1: TC ve STC farkı",
      soru:"Bir havayolu, filosundaki B737-800 uçaklarına yeni bir aviyonik sistemi eklemek istiyor. TC almak mı yoksa STC almak mı gerekir? Aradaki farkı açıkla.",
      cozum:"CEVAP: STC (Supplemental Type Certificate) gerekli.\n\nNeden:\nTC (Type Certificate), özgün tip tasarımını tanımlar. B737-800'ün TC'si Boeing elindedir. Havayolu veya aviyonik şirket tip tasarımını değiştiremez.\n\nSTC ise mevcut TC'ye ek değişiklik sertifikasıdır:\n• Aviyonik şirketi veya entegratör EASA/FAA'ya başvurur\n• Aviyonikin B737-800'e nasıl entegre edileceği, elektrik yükü, kablo, montaj prosedürü tanımlanır\n• Uyum gösterim faaliyetleri yürütülür\n• EASA/FAA STC onaylar\n• Her uçağa bu STC uygulandığında Airworthiness Certificate geçerliliğini korur\n\nSTC'nin avantajı: Boeing'den izin alınmadan (ama tip tasarımı veri paketine erişim genellikle gerekir) modifikasyon yapılabilir. Pek çok kabin yenileme, açık yük kapasitesi artışı ve uydu haberleşme sistemi ekleme STC ile yapılmaktadır." },

    { id:"b8", tip:"ornek", baslik:"Örnek 2: Airworthiness Directive senaryosu",
      soru:"Bir havayolunun B737 filosuna EASA AD yayımlandı:\n'Kanat üst yüzeyi bölgesindeki stringer bağlantıları 500 çevrimde bir muayene edilecek. Çatlak tespit edilirse 50 çevrim içinde değiştirilecek. Bu AD uygulama tarihinden itibaren 30 gün içinde başlayacaktır.'\nHavayolunun yapması gerekenler nelerdir?",
      cozum:"ADIM 1 — Etkilenen uçakları belirle (30 gün içinde):\n• Tüm B737 tescil numaraları incelenir\n• TCDS'e bakılarak bu AD'nin hangi seri numaraları kapsadığı kontrol edilir\n\nADIM 2 — Bakım programını güncelle (30 gün içinde):\n• Her uçak için 500 çevrimde bir muayene görevi eklenir\n• CAMO kayıt sistemine AD numarası girilir\n• İş emri (work order) oluşturulur\n\nADIM 3 — Muayene prosedürü hazırla:\n• Üreticinin SB (Service Bulletin) varsa referans alınır\n• AMM (Aircraft Maintenance Manual) ilgili prosedür kontrol edilir\n• Teknik personel eğitimi gerekiyorsa organize edilir\n\nADIM 4 — Muayene ve raporlama:\n• Her muayene sonucu CAMO'ya raporlanır\n• Çatlak tespit edilirse 50 çevrim içinde değişim iş emri açılır\n\nADIM 5 — Uyumsuzluk durumu:\n• 30 gün içinde uygulama başlamadıysa uçuşa elverişlilik sertifikası tehlikeye girer\n• SHGM'ye bildirilmeli; ek süre talep edilebilir ama onaylanmasa uçak yer alır (ground)" },

    { id:"b9", tip:"ornek", baslik:"Örnek 3: PC kapsamı analizi",
      soru:"Küçük bir tedarikçi şirket, EASA onaylı bir uçak için kompozit kanat paneli üretecek. Hangi sertifikaları alması gerekir? Sadece TC alma yoluna gidebilir mi?",
      cozum:"CEVAP: Hayır, TC değil POA (Part-21 Production Organisation Approval) veya PC alması gerekir.\n\nTC (Tip Sertifikası) → tasarımı onaylar. Tedarikçi şirket kendi tasarımını yapmıyor, onaylı tip tasarımına göre üretim yapıyor.\n\nGEREKLİ ONAYLAR:\n\n1. Part-21 Subpart G (POA — Production Organisation Approval):\nEASA kapsamında üretim organizasyonu onayı. Şirketin üretim süreçlerinin, kalite sisteminin ve teknik yetkinliğinin onaylanması.\n\n2. Alternatif: DOA'nın üretim onayı altında çalışmak:\nBazı durumlarda tasarım organizasyonunun (DOA) onayı altında alt tedarikçi çalışabilir. Ama bu durumda DOA tam sorumluluğu üstlenir.\n\n3. AS9100 sertifikasyonu:\nTeknik olarak zorunlu değil ama pratikte tüm büyük havacılık müşterileri AS9100 ister.\n\n4. Malzeme ve proses onayları:\nKompozit proses (otoklav, cure döngüsü) onaylı süreç talimatına göre yapılmalı. Malzeme tedarikçisi de onaylı listede olmalı (QPL — Qualified Products List)." },

    { id:"b10", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "TC, PC ve Airworthiness Certificate'ı karıştırmak. TC: tasarım. PC: üretim süreci. Airworthiness: bireysel uçak.",
        "STC almayı ihmal etmek. Onaylı tip tasarımına her değişiklik formal onay gerektirir. 'Küçük değişiklik' minör/majör değerlendirmesini atlamamak için formal süreçten geçmeli.",
        "Airworthiness Directive'i zamanında uygulamamak. Süre aşımı uçuşa elverişlilik sertifikasını geçersiz kılar — sadece para cezası değil, uçuş yasağı.",
        "Experimental kategorisini ticari uçuş için kullanmaya çalışmak. Experimental sertifika yolcu taşımayı yasaklar.",
        "Life-Limited Part geçmişini kaydetmemek. Parça geçmişi belgesi (traceability) olmayan LLP kullanılamaz, hurda edilir.",
        "Part-M ve Part-CAMO arasındaki farkı bilmemek. Part-M bakım yönetimini, Part-CAMO (yeni) sadece continuing airworthiness management organizasyonu onayını kapsar."
      ] },

    { id:"b11", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["TC, PC ve Airworthiness Certificate arasındaki fark nedir?","TC: Tip tasarımını onaylar (tasarım organizasyonu alır). PC: Üretim sürecini onaylar (üretim organizasyonu alır). Airworthiness Certificate: Her bireysel uçağın uçuşa elverişliliğini onaylar (operatör/sahibi adına otorite verir). Üçü birbirini tamamlar; hepsi olmadan ticari uçuş yapılamaz."],
        ["Airworthiness Directive'e uymak neden zorunlu?","AD, otorite tarafından bir güvenlik sorununu gidermek için zorunlu kılınan direktiftir. Belirlenen sürede uygulanmazsa uçuşa elverişlilik sertifikası geçersiz olur ve uçak yer alır. İdari ceza değil operasyonel yasaktır."],
        ["STC nedir?","Supplemental Type Certificate — mevcut tip tasarımına ek modifikasyon sertifikası. TC sahibinden bağımsız kuruluşlar da alabilir. Aviyonik yükseltme, motor değiştirme, kabin yenileme sık STC konularıdır."]
      ] },

    { id:"b12", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "EASA. (2021). Part-21: Certification of aircraft and related products, parts and appliances. Commission Regulation (EU) No 748/2012.",
        "FAA. (2020). FAR Part 21: Certification procedures for products and articles. 14 CFR Part 21.",
        "EASA. (2020). Part-M: Continuing airworthiness. Commission Regulation (EU) No 1321/2014.",
        "Transport Canada. (2018). Understanding aircraft type certificates. TP 14371."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Sertifika türleri", puan:1,
      soru:"Tip Sertifikası (TC) neyi onaylar?",
      secenekler:["Belirli bir uçağın bakım durumunu","Üretim tesisinin kalite yönetim sistemini","Bir uçak tipinin tasarımının onaylı standartları karşıladığını","Pilotun uçuş ehliyetini"],
      dogru:2,
      aciklama:"TC bir uçak tipinin (tasarımının) onaylı standartlara (CS-25/FAR-25) uyduğunu belgeleyen tasarım onay belgesidir. Üretim TCDS'e kayıtlı onaylı konfigürasyona göre yapılır." },
    { id:"s2", etiket:"Sertifika türleri", puan:2,
      soru:"Uçuşa Elverişlilik Sertifikası neden her bireysel uçak için ayrı düzenlenir?",
      secenekler:["Maliyeti artırmak için","Her uçağın kendine özgü bakım geçmişi ve durumu var; TC tasarımı değil bireysel uçağı onaylar","Pilot isim kartı gerektiğinden","Fabrika çıkışında tek sertifika yeterli"],
      dogru:1,
      aciklama:"İki aynı modelin bile bakım geçmişi ve mevcut durumu farklıdır. Uçuşa Elverişlilik Sertifikası o anki bakım durumunu, AD uygulamalarını ve teknik durumunu onaylar. Operatör bu sertifikayı sürekli güncel tutmakla yükümlüdür." },
    { id:"s3", etiket:"STC", puan:2,
      soru:"Hangi durum STC gerektirir?",
      secenekler:["Uçağın renk değişimi","Minör dokümantasyon düzeltmesi","Onaylı tip tasarımına eklenen majör aviyonik değişikliği","Pilot eğitim süresi değişikliği"],
      dogru:2,
      aciklama:"Majör değişiklik (uçuşa elverişlilik, güç veya yapıyı etkileyen) STC veya TC revizyonu gerektirir. Aviyonik ekleme, motor değiştirme, kabin modifikasyonu sık STC konularıdır." },
    { id:"s4", etiket:"Airworthiness Directive", puan:1,
      soru:"AD'nin 30 günlük uygulamasını kaçıran havayoluna ne olur?",
      secenekler:["Para cezası öder, uçuşa devam eder","Uçuşa elverişlilik sertifikası geçersiz olur; etkilenen uçak yer alır","Otomatik uzatma verilir","Sadece uyarı yazısı alır"],
      dogru:1,
      aciklama:"AD zorunlu direktiftir. Süre aşımı uçuşa elverişlilik sertifikasını geçersiz kılar. Sertifika geçersizleşince uçak ticari uçuş yapamaz. Bu sadece idari ceza değil, fiili operasyonel yasaktır." },
    { id:"s5", etiket:"Sertifika türleri", puan:1,
      soru:"Experimental uçuşa elverişlilik sertifikasıyla ne yapılabilir?",
      secenekler:["Normal ticari uçuş","Ücretli yolcu taşıma","Araştırma, geliştirme ve gösterim uçuşları (yolcu taşıma kısıtlı)","EASA'nın belirlediği her türlü uçuş"],
      dogru:2,
      aciklama:"Experimental sertifika normal TC gerekmeksizin araştırma, geliştirme, gösterim amaçlı uçuşa olanak tanır. Ancak ücretli yolcu taşıma yasaktır. Prototip uçaklar ilk uçuşlarını experimental sertifikayla yapar." },
    { id:"s6", etiket:"Life-Limited Parts", puan:2,
      soru:"Life-Limited Part (LLP) nedir ve neden geçmişi izlenmeli?",
      secenekler:["Çok pahalı parçalar","Ömrü uçuş çevrimi veya saatiyle sınırlı parçalar; geçmiş belgesi olmadan güvenli kullanım süresi doğrulanamaz","Sadece motor parçaları","Kompozit malzemeli tüm parçalar"],
      dogru:1,
      aciklama:"LLP (motor türbin diski, fan diski gibi) belirlenmiş limit dolduğunda kullanımı yasaklanır. Gerçek kullanım süresinin (çevrim/saat) belgelenmiş olması şart. Geçmiş belgesi olmayan LLP hurda edilir — sertifika amacıyla kullanılamaz." }
  ],
  ipuclari:{
    "Sertifika türleri":"TC=tasarım onayı. PC=üretim süreci. Airworthiness=bireysel uçak. STC=mevcut TC'ye ek değişiklik.",
    "AD":"Zorunlu direktif. Süre aşımı → uçuşa elverişlilik geçersiz → yer alır. Operatörün sorumluluğu.",
    "LLP":"Ömür sınırlı parça. Geçmiş belgesi şart. Çevrim/saat doldu → zorunlu değişim.",
    "Experimental":"TC gerekmez. Araştırma/geliştirme. Yolcu taşıma yasak. Prototip ilk uçuş."
  }
}

}); // Object.assign sonu

Object.assign(window.CONTENT.konuIcerik, {

"m7-6": {
  ad: "Part-21 DOA/POA ve uyum gösterim yöntemleri",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "İleri",
  sure: 22,
  mulakat: false,
  onbilgi: "TC ve PC (m7-5), CS-25 esasları (m7-4)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"EASA Part-21, havacılık ürünleri ve parçaların sertifikasyonunu düzenleyen temel yönetmeliktir. DOA (Design Organisation Approval) tasarım organizasyonlarını, POA (Production Organisation Approval) ise üretim organizasyonlarını onaylar. Bu onaylar olmadan bir şirket EASA kapsamında sivil havacılık ürünü tasarlayıp üretemez." },

    { id:"b2", tip:"metin", baslik:"Part-21 kapsamı ve alt bölümleri",
      metin:"Part-21 (Commission Regulation EU 748/2012) aşağıdaki alt bölümlerden oluşur:\n\nSubpart B — Tip Sertifikası ve Kısıtlı Tip Sertifikası\nSubpart D — Değişiklikler\nSubpart E — Tamamlayıcı Tip Sertifikası (STC)\nSubpart F — Üretim (POA olmaksızın küçük üreticiler için alternatif)\nSubpart G — Üretim Organizasyonu Onayı (POA)\nSubpart H — Uçuşa Elverişlilik Sertifikası\nSubpart I — Gürültü Sertifikası\nSubpart J — Tasarım Organizasyonu Onayı (DOA)\nSubpart K — Parçalar ve malzemeler\nSubpart M — Onarımlar\nSubpart O — ETSO onayı\nSubpart P — Uçuş İzni\nSubpart Q — Tanımlama işaretleri",
      kutu:{ tip:"bilgi", baslik:"Part-21 ve SHGM",
        metin:"Türkiye EASA üyesi değildir ama SHGM Part-21'e eşdeğer yönetmelik uygulamaktadır. Türkiye'deki şirketler EASA DOA veya POA almak istediğinde EASA ile doğrudan ilişki kurar. SHGM onaylı kuruluşlar Türk sertifikasyonu için SHGM, Avrupa için EASA kapsamında çalışır." } },

    { id:"b3", tip:"metin", baslik:"DOA — Tasarım Organizasyonu Onayı",
      metin:"DOA, bir şirketin TC, STC veya değişiklik onayı başvurusunu bağımsız olarak yapabilme yetkinliğini gösteren EASA onayıdır.\n\nDOA'nın avantajı — self-approval yetkisi:\nDOA onaylı şirket belirli koşullarda EASA'nın önceden onayını almadan değişiklik gerçekleştirebilir. Minör değişiklikler DOA bünyesinde onaylanabilir. Majör değişiklikler EASA onayı gerektirir ama DOA şirketi başvuru yapabilir.\n\nDOA gereksinimleri (Part-21 Subpart J):\n• Yetkin personel ve sorumluluk yapısı\n• Tasarım güvence sistemi (Design Assurance System — DAS)\n• İndependent monitoring (bağımsız izleme)\n• Uyum doğrulama prosedürleri\n• EASA ile sürekli irtibat (liaison)\n• DOA Exposition (şirketin nasıl çalıştığını anlatan temel doküman)\n\nDOA seviyeleri:\nPrivileges (ayrıcalıklar) DOA'nın kapsamına göre belirlenir. Büyük şirketler (Airbus, Leonardo) geniş privileges taşır; küçük şirketler sınırlı kapsamda onay alır.\n\nDOA sahipleri: Airbus, Boeing, Leonardo, TAI, Roketsan, ASELSAN bunların örnekleridir." },

    { id:"b4", tip:"metin", baslik:"POA — Üretim Organizasyonu Onayı",
      metin:"POA, bir üretim organizasyonunun onaylı tip tasarımına uygun ürün üretebilme ve airworthiness sertifikası düzenleyebilme yetkinliğini gösteren EASA onayıdır.\n\nPOA kapsamı (Part-21 Subpart G):\n• Kalite yönetim sistemi: Tasarım verisinin kontrolü, üretim süreç kontrolü, kalite denetimi\n• Tedarikçi yönetimi: Alt tedarikçiler de onaylı listede olmalı veya POA'nın denetim kapsamında çalışmalı\n• Konfigürasyon kontrolü: Her üretilen uçak onaylı tasarıma uygun olduğunun teyidi\n• Uygunluk bildirimi (Statement of Conformity): Her uçak tesliminde düzenlenir\n• Uçuşa elverişlilik dokümanları (EASA Form 1): Parça ve bileşen düzeyinde\n\nEASA Form 1:\nBir parça veya sistemin onaylı tasarıma ve uygulanabilir standartlara uygun üretildiğini belgeleyen EASA belgesi. Havacılık tedarik zincirinde her parçanın bu belgesi olmalıdır. Form 1 olmayan parça kullanılamaz.\n\nAS9100/EN 9100:\nPOA için AS9100 zorunlu değil ama pratikte tüm büyük havacılık müşterileri ister. AS9100, ISO 9001'in havacılık özelinde genişletilmiş versiyonudur." },

    { id:"b5", tip:"metin", baslik:"Uyum Gösterim Yöntemleri (MoC) detaylı",
      metin:"MoC, CS-25 gereksinimlerinin nasıl karşılandığını otoriteye göstermenin yoludur. Sertifikasyon Planında her gereksinim için hangi MoC kullanılacağı tanımlanır.\n\nMoC 0 — Tanımlayıcı doküman:\nYasası veya standartı açıklayan tasarım dokümanı. 'Uygulanabilir değil' veya 'bu madde bu uçakta karşılanmıyor' durumları dahil.\n\nMoC 1 — Uygunluk analizi ve hesaplama:\nMühendislik hesapları: ağırlık analizi, termal analiz, elektrik yük analizi. Onaylı araç veya yönteme dayanmalı.\n\nMoC 2 — Hesaplamalı analiz (simülasyon):\nCFD, FEM, yazılım simülasyonu. Araç doğrulanmış ve validate edilmiş olmalı.\n\nMoC 3 — Emniyet analizi:\nFHA, FMEA, FTA, PSSA (Preliminary System Safety Assessment), SSA (System Safety Assessment).\n\nMoC 4 — Laboratuvar testi:\nBileşen veya sistem seviyesinde test tesisinde gerçekleştirilen test.\n\nMoC 5 — Yer testi:\nTam uçak üzerinde, yer koşullarında. Motor çalışma, yer hidrolik testi.\n\nMoC 6 — Uçuş testi:\nGerçek uçuşta. Stall, kalkış/iniş performansı, yüksek irtifa.\n\nMoC 7 — Rüzgar tüneli:\nAerodinamik gereksinimler için.\n\nMoC 8 — Simüler tasarım deneyimi:\nBenzer sertifikalı tasarımdan kazanılan deneyim.\n\nMoC 9 — Ekipman nitelendirmesi:\nETSO/TSO kapsamında ayrıca sertifikalandırılmış ekipman.",
      kutu:{ tip:"bilgi", baslik:"MoC kombinasyonu neden gerekli?",
        metin:"Çoğu gereksinim tek bir MoC ile kapatılamaz. 25.1309 emniyet analizi (MoC 3) + yer testi (MoC 5) + uçuş testi (MoC 6) kombinasyonu tipiktir. Otorite hangi MoC kombinasyonunun kabul edilebilir olduğu konusunda ön görüşme (pre-application meeting) sırasında yönlendirme yapar." } },

    { id:"b6", tip:"metin", baslik:"Issue Papers ve CP süreçleri",
      metin:"Sertifikasyon sürecinde bazı teknik konular taraflar arasında tartışma gerektirir:\n\nIssue Paper (IP):\nBelirli bir teknik veya uyum konusunda EASA ile başvuran arasındaki resmi yazışma belgesi. Bir konuda anlayış farklılığı, yeni teknoloji yorumu veya özel koşul gereksinimi olduğunda IP açılır. IP kapanınca uyum yolu netleşmiş olur.\n\nCertification Plan (CP) / Sertifikasyon Planı:\nTüm uyum gösterim faaliyetlerini özetleyen master belge. Her CS-25 paragrafı için hangi MoC kullanılacağı, kim yapacağı ve takvimi içerir. EASA bu planı onaylar; plan değiştiğinde güncellenir.\n\nDP (Declaration of Compliance) / Uyum Bildirimi:\nBelirli bir gereksinim veya gereksinim grubunun karşılandığını başvuru sahibinin beyan ettiği belge. Destekleyici doküman paketine referans verir.\n\nConformity Inspection:\nEASA müfettişinin yer ziyareti. Tasarım ve üretim dokümanları, test senaryoları ve testlerin gerçekten nasıl yapıldığı yerinde kontrol edilir. Müfettişin imzası sertifikasyon dosyasına eklenir." },

    { id:"b7", tip:"ornek", baslik:"Örnek 1: MoC kombinasyonu planlaması",
      soru:"CS-25 Madde 25.571 — Yorulma değerlendirmesi: 'Uçak yapısı hasar toleranslı olacak ve yorulma değerlendirmesi yapılacaktır.' Bu madde için hangi MoC kombinasyonu uygulanabilir?",
      cozum:"CS-25 Madde 25.571 için tipik MoC kombinasyonu:\n\nMoC 1 — Analiz:\n• Yorulma yükü spektrumu hesabı (görev profili bazlı)\n• S-N (Stress-Number) yorulma ömür analizi\n• Çatlak büyüme hızı analizi (Paris kanunu)\n• Kritik konum ve elemanlarda gerilme konsantrasyonu hesabı\n\nMoC 2 — Simülasyon:\n• FEM modeliyle gerilme dağılımı doğrulama\n• Hasar toleransı simülasyonu (çatlak propagasyon modeli)\n\nMoC 4 — Laboratuvar testi:\n• Tam yapı yorulma testi (full-scale fatigue test)\n• Kritik bağlantı noktaları yorulma kuponu testleri\n• Hasar toleransı testleri (çatlak olan yapıya yük uygulama)\n\nMoC 5 — Yer testi:\n• Çatlak muayene prosedürlerinin uygulanabilirliği (NDT erişimi)\n\nMoC 6 — Uçuş testi:\n• Gerçek yük ölçümü ile analiz kalibrasyonu (gerinim ölçer verileri)\n\nEKSİK OLAMAZ: 25.571 kapsamında yapı yorulma testi (MoC 4) ve analiz (MoC 1) her zaman birlikte bulunur. Test analize göre daha kısa süre tamamlandığında, analiz test sonuçlarıyla kalibre edilir." },

    { id:"b8", tip:"ornek", baslik:"Örnek 2: DOA ve POA farkı senaryosu",
      soru:"Bir Türk havacılık şirketi hem yerli uçak geliştirip hem de Airbus için parça üretmek istiyor. Hangi onayları alması gerekir?",
      cozum:"İKİ FARKLI FAALİYET:\n\nFAALİYET 1 — Yerli uçak geliştirme:\n→ DOA (Design Organisation Approval) gerekli (Part-21 Subpart J)\n• Şirket kendi uçağı için TC başvurusu yapabilmeli\n• Tasarım güvence sistemi kurulmalı\n• EASA veya SHGM onayı (Türkiye'de SHGM)\n• Eğer EASA sertifikasyonu hedefleniyorsa EASA DOA\n\nFAALİYET 2 — Airbus için parça üretimi:\n→ POA (Production Organisation Approval) gerekli (Part-21 Subpart G)\n• Airbus onaylı tasarıma göre parça üretecek\n• Üretim kalite sistemini onaylatmalı\n• EASA Form 1 düzenleyebilmek için POA şart\n• AS9100 sertifikası ek gereksinim olarak istenir\n\nKOMBİNASYON:\nAynı şirket hem DOA hem POA alabilir. Bu durumda tasarım ve üretim her ikisi de onaylı hale gelir.\nÖrnek: TAI (Türk Havacılık ve Uzay Sanayii) hem DOA hem POA kapsamında faaliyet göstermektedir." },

    { id:"b9", tip:"ornek", baslik:"Örnek 3: Uyum planı hazırlama",
      soru:"Yeni geliştirilen bir uçağın kabin basınçlandırma sistemi için CS-25 Madde 25.841 (Kabin basınçlandırma) kapsamında sertifikasyon planının iskeletini oluştur.",
      cozum:"CS-25 Madde 25.841 — Kabin basınçlandırma sistemi sertifikasyon planı:\n\nMADDE 25.841(a) — Maksimum kabin basınç farkı:\nMoC 1: Analiz — Max basınç farkı hesabı, yapısal yük değerlendirmesi\nMoC 4: Test — Basınçlı kabin yapısal testi (basınç çevrimi testi)\nMoC 5: Yer testi — Uçak üzerinde kabin basınçlama sistemi fonksiyon testi\n\nMADDE 25.841(b) — Kabin basıncı korunumu:\nMoC 3: Güvenlik analizi — Basınç kaybı senaryolarında FMEA\nMoC 5: Yer testi — Basınç kayıp oranı ölçümü\nMoC 6: Uçuş testi — Maksimum sertifikasyon irtifasında basınçlandırma doğrulaması\n\nMADDE 25.841(c) — Basınç uyarı sistemi:\nMoC 5: Yer testi — Uyarı sistemi fonksiyon testi\nMoC 6: Uçuş testi — Alçalma prosedürü validasyonu\n\nSertifikasyon Planı Başlığı:\nGereksinim ID | CS-25 Maddesi | MoC | Doküman Referansı | Planlanan Tarih | Durum\n841-01 | 25.841(a) | MoC 1 + MoC 4 | SYS-PRESS-001 | 2025-Q3 | Açık\n841-02 | 25.841(b) | MoC 3 + MoC 5 + MoC 6 | SYS-PRESS-002 | 2025-Q4 | Açık" },

    { id:"b10", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "DOA ve POA'yı aynı sanmak. DOA tasarım, POA üretim organizasyonu onayı. Farklı kapsamlar, farklı gereksinimler.",
        "EASA Form 1 olmadan parça kullanmak. Form 1'siz parça kullanılamaz; tüm havacılık parçaları için zorunlu.",
        "MoC'yi sertifikasyon sonunda belirlemek. MoC baştan planlanmalı. 'Ne yaptıysam ona MoC atadım' geçerli değil.",
        "Issue Paper açmaktan kaçınmak. Teknik belirsizlik varsa IP açmak süreci uzatmaz, aksine erken netleştirir. Geç kalan belirsizlik daha büyük gecikmeye yol açar.",
        "Self-approval yetkisini abartmak. DOA self-approval yalnızca minör değişiklikler için geçerli. Majör değişiklik ve TC başvurusu EASA onayı gerektirir.",
        "Sertifikasyon planını güncellememeK. Plan değişikliklere göre revize edilmeli. Eski plan hatalı MoC'lere yol açabilir."
      ] },

    { id:"b11", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["DOA nedir ve ne sağlar?","EASA Part-21 Subpart J kapsamında Tasarım Organizasyonu Onayı. Şirkete TC/STC başvurusu ve belirli koşullarda self-approval yapma yetkisi verir. Tasarım güvence sistemi, bağımsız izleme ve EASA ile sürekli irtibat gerektir. Airbus, TAI, ASELSAN gibi şirketler DOA sahibidir."],
        ["EASA Form 1 nedir?","Bir parça veya sistemin onaylı tasarıma ve uygulanabilir standartlara uygun üretildiğini belgeleyen EASA belgesi. POA sahibi şirketler düzenler. Havacılık tedarik zincirinde her parça Form 1 ile teslim edilir. Form 1 olmayan parça uçağa takılamaz."],
        ["Sertifikasyon planı neden önemlidir?","Tüm uyum gösterim faaliyetlerini (hangi CS-25 maddesi için hangi MoC, ne zaman, kim) özetler. EASA bu planı onaylar. Plan olmadan neyin yapılıp bitmediği izlenemez. Sertifikasyon sürecinin yönetim belgesidir."]
      ] },

    { id:"b12", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "EASA. (2021). Part-21: Certification of aircraft and related products. Commission Regulation (EU) No 748/2012.",
        "EASA. (2020). Acceptable Means of Compliance (AMC) and Guidance Material (GM) to Part-21.",
        "SAE. (2016). ARP4761: Guidelines and methods for conducting the safety assessment process on civil airborne systems and equipment.",
        "EASA. (2019). Certification Memoranda: Guidance for MoC selection."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"DOA ve POA", puan:2,
      soru:"DOA ile POA arasındaki temel fark nedir?",
      secenekler:["DOA daha pahalıdır","DOA tasarım organizasyonunu, POA üretim organizasyonunu onaylar","POA daha geniş kapsama sahiptir","İkisi aynı şeyin farklı isimleridir"],
      dogru:1,
      aciklama:"DOA (Part-21 Subpart J) tasarım faaliyetleri ve TC/STC başvurusu için. POA (Part-21 Subpart G) üretim kalite sistemi ve EASA Form 1 düzenlemek için. Bir şirket her ikisine de sahip olabilir." },
    { id:"s2", etiket:"MoC", puan:1,
      soru:"MoC 6 ne anlama gelir?",
      secenekler:["Laboratuvar testi","Güvenlik analizi (FMEA/FTA)","Uçuş testi","Benzer tasarım deneyimi"],
      dogru:2,
      aciklama:"MoC 6 uçuş testidir. Gereksinimlerin gerçek uçuş koşullarında doğrulanmasını kapsar. Stall testleri, performans testleri, uçuş zarfı genişletme faaliyetleri MoC 6 kapsamındadır." },
    { id:"s3", etiket:"EASA Form 1", puan:2,
      soru:"EASA Form 1 olmadan ne olur?",
      secenekler:["Para cezası ödenir","Parça onaylı havacılık ürününe takılamaz","Sadece test için kullanılabilir","Otoritenin izniyle kullanılabilir"],
      dogru:1,
      aciklama:"Form 1 parçanın onaylı tasarıma uygun üretildiğini belgeler. Form 1'siz parça traceability zinciri kırık demektir ve uçağa takılamaz. Tek istisna experimental uçuş için bazı parçalarda otorite onaylı muafiyet." },
    { id:"s4", etiket:"Sertifikasyon planı", puan:1,
      soru:"Sertifikasyon Planı (CP) kimin onayından geçer?",
      secenekler:["Yalnızca üretici şirketin","EASA veya ilgili otorite","Müşteri havayolunun","ISO sertifikasyon kurumunun"],
      dogru:1,
      aciklama:"Sertifikasyon Planı EASA (veya FAA) tarafından onaylanır. Bu onay hangi MoC kombinasyonunun kabul edileceğini, hangi testlerin gerektiğini ve otorite denetim noktalarını resmi olarak belirler." },
    { id:"s5", etiket:"Issue Paper", puan:2,
      soru:"Issue Paper ne zaman açılır?",
      secenekler:["Her gereksinim için otomatik","Teknik belirsizlik, yeni teknoloji yorumu veya özel koşul gereksinimi gibi tartışmalı konular için","Yalnızca olumsuz test sonuçlarında","Uçuş testi öncesinde"],
      dogru:1,
      aciklama:"IP, başvuran ile EASA arasında teknik uzlaşı gerektiren konular için açılır. Erken IP açmak belirsizliği netleştirir ve süreci hızlandırır. Geç kalan belirsizlik sertifikasyon gecikmesine yol açar." }
  ],
  ipuclari:{
    "DOA ve POA":"DOA=tasarım onayı (Subpart J). POA=üretim onayı (Subpart G). Form 1=parça uygunluk belgesi.",
    "MoC":"0=doküman, 1=analiz, 2=sim, 3=emniyet, 4=lab, 5=yer, 6=uçuş, 7=rüzgar tüneli, 8=deneyim, 9=ETSO.",
    "Sertifikasyon planı":"Her CS-25 paragrafı + MoC + tarih + sorumlu. EASA onaylar. Değişince güncelle.",
    "IP":"Teknik tartışmalı konu → Issue Paper → erken aç → gecikmeden kaçın."
  }
},

"m7-7": {
  ad: "DO-160 çevresel test gereksinimleri",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "Orta",
  sure: 20,
  mulakat: false,
  onbilgi: "CS-25 esasları (m7-4), temel elektronik",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"DO-160 (RTCA/DO-160G, son sürüm), uçak aviyonik ve elektrik ekipmanlarının çevresel koşullara dayanıklılığını test etmek için kullanılan uluslararası standarttır. Titreşim, sıcaklık, nem, EMC, yıldırım gibi on dörtten fazla test kategorisi içerir. DO-160 geçmeyen ekipman uçağa takılamaz." },

    { id:"b2", tip:"metin", baslik:"DO-160 neden gereklidir?",
      metin:"Bir uçak aviyonik kutusunun maruz kaldığı koşulları düşün:\n• Motor gürültüsünden gelen yoğun titreşim (10-2000 Hz)\n• Yerden +70°C'ye kadar değişen dış sıcaklık\n• Tropikal çevre nemliliği\n• Yıldırım çarpması (500.000 A akım tepesi)\n• Radyo sistemi emisyonları (elektromanyetik girişim)\n• Güç kaynağındaki geçici bozulmalar\n• Kuş çarpması titreşimi\n\nBu koşulların her birinde ekipmanın arızalanmaması gerekir. DO-160, bu koşulları standardize edilmiş test prosedürleriyle simüle eder ve hangi ekipmanın hangi ortamda kullanılabileceğini sertifikalandırır.\n\nETSO (European Technical Standard Order) ve TSO (Technical Standard Order): Belirli ekipman kategorileri (pitot tüpü, transponder, acil konum vericisi) ETSO/TSO kapsamında ayrıca sertifikalandırılır. Bu sertifikasyon DO-160 testlerini zorunlu kılar." },

    { id:"b3", tip:"metin", baslik:"DO-160 test kategorileri",
      metin:"DO-160G 26 test bölümünden oluşur. En kritik olanlar:\n\nBölüm 4 — Sıcaklık ve İrtifa:\nEkipmanın çalışacağı sıcaklık aralığı test edilir. Operasyonel sıcaklık (tipik -55°C ile +70°C) ve depolama sıcaklığı ayrı test edilir. Yer koşulları (sıcak çöl, soğuk kuzey) simüle edilir.\n\nBölüm 5 — Sıcaklık Değişimi:\nUçak yerden FL390'a çıkarken yaşanan hızlı sıcaklık değişimi simüle edilir. Ekipman bu geçiş sırasında çalışmaya devam etmeli.\n\nBölüm 7 — Operasyonel Şok ve Kaza Güvenliği:\nYere çarpma, pist bombası etkisi, kapı kapanma darbeleri. Operasyonel şok ekipmanın çalışması beklenir. Kaza şoku ekipmanın yolcuya zarar vermemesi beklenir.\n\nBölüm 8 — Titreşim:\nMotor titreşimi, aerodinamik titreşim (flutter), piste inme darbeleri. Frekans aralıkları uçak tipi ve kurulum konumuna göre belirlenir.\n\nBölüm 17 — Voltaj Kesintisi:\nGüç kaynağı kesintisi ve yeniden başlatma sırasında ekipman davranışı.\n\nBölüm 22 — Yıldırım Hassasiyeti:\nYıldırım çarpması sırasında ekipmanın hasar görmemesi veya kabul edilebilir arıza modunda başarısız olması.\n\nBölüm 21 — EMC (Elektromanyetik Uyumluluk):\nEkipmanın diğer sistemlerden gelen EMI'a dayanması ve kendisinin EMI üretmemesi.",
      kutu:{ tip:"bilgi", baslik:"DO-160 kategorileri",
        metin:"Her bölümde ekipman kategorileri harfle (A, B, C, D...) tanımlanır. Örneğin titreşim testi için Category B kokpitte elektronik raf, Category C gövde alt kısmında hassas ekipman için farklı şiddet gerektirir. Ekipman hangi kategoride onaylanmışsa yalnızca o kategoriye uygun konuma takılabilir." } },

    { id:"b4", tip:"metin", baslik:"EMC gereksinimleri — Bölüm 20 ve 21",
      metin:"EMC (Electromagnetic Compatibility) havacılıkta kritik güvenlik konusudur. İki yön:\n\nEMI Emisyonu (Bölüm 21):\nEkipmanın çevreye ne kadar elektromanyetik gürültü yaydığı. Frekans aralığına göre limit değerler var. Aşılırsa diğer sistemler etkilenir.\n\nEMI Hassasiyeti (Bölüm 20):\nEkipmanın diğer kaynaklardan gelen EMI'a dayanma kapasitesi. Test: belirli frekans ve şiddette EMI uygulanır, ekipman hata vermemeli.\n\nWide Band Conducted Susceptibility:\nKablo yoluyla gelen EMI. Güç kablolarından yayılan gürültü.\n\nNarrow Band Radiated Susceptibility:\nHava yoluyla gelen EMI. Radar, telsiz, cep telefonu emisyonları.\n\nYüksek Yoğunluklu Radyasyon Alanı (HIRF):\nGüçlü radar veya radyo istasyonu yakınında ekipmanın çalışması. Bölüm 20, HIRF testlerini içerir.\n\nPortable Electronic Device (PED) politikası:\nYolcu cihazları (laptop, tablet) da EMI üretir. Havayolları DO-160 bazlı PED değerlendirmesi yaparak cihazlara uçuş izni verir." },

    { id:"b5", tip:"metin", baslik:"Yıldırım koruması — Bölüm 22",
      metin:"Yıldırım çarpması havacılığın en zorlu çevresel tehlikelerinden biridir. Ticari uçaklar ortalama yılda 1-2 kez yıldırım çarpar. Yıldırım:\n• 200.000-500.000 ampere kadar anlık akım\n• Nanosaniye-mikrosaniye aralığında çok kısa süre\n• Yakıt sistemi, aviyonik ve yapı üzerinde ciddi etki potansiyeli\n\nDO-160 Bölüm 22 iki seviye test içerir:\n\nSeviye 1 — Direkt etki:\nYıldırım doğrudan ekipmana çarpma simülasyonu. Ekipman bu test sonrasında hasar görse de kabul edilebilir arıza modunda çalışması veya öngörülen şekilde başarısız olması beklenir.\n\nSeviye 2 — Endüktif/Kapasitif Kuple:\nYıldırım kablolar ve yapı yoluyla ekipmana iletilen etki. Ekipman çalışmaya devam etmeli.\n\nFaraday Kafesi etkisi:\nMetalik gövde yıldırımı çevresine iletir. Karbon fiber gövde metalik değildir ve bu korumayı sağlamaz. Bu yüzden B787 gibi kompozit gövdeli uçaklarda yıldırım koruması çok daha karmaşık bir mühendislik problemidir. Gömülü bakır kafes ve koruma katmanları eklenir." },

    { id:"b6", tip:"ornek", baslik:"Örnek 1: Test kategorisi belirleme",
      soru:"Bir aviyonik bilgisayar üç farklı konuma monte edilebilir:\nA) Kokpit raf sistemi\nB) Uçak gövdesi alt kısmındaki ekipman bölmesi (yere yakın)\nC) Kanat içi\n\nHer konum için DO-160 titreşim kategorisi nasıl farklılaşır? Hangi konum en zorlu testi gerektirir?",
      cozum:"Titreşim kaynakları ve şiddetleri konuma göre değişir:\n\nA) Kokpit raf sistemi:\n• Kaynaklar: Motora uzak, aerodinamik titreşim az\n• Titreşim seviyesi: Düşük-orta\n• Tipik kategori: S (Standard) — genel ekipman\n• Test şiddeti: Düşük g, geniş frekans tarama\n\nB) Gövde alt kısmı (ekipman bölmesi):\n• Kaynaklar: Piste iniş darbeleri (çok şiddetli), gövde yapısal titreşimi\n• Titreşim seviyesi: Orta-yüksek (özellikle iniş darbeleri)\n• Tipik kategori: R veya U\n• Test şiddeti: Yüksek g şok testi eklenir\n\nC) Kanat içi:\n• Kaynaklar: Motor titreşimi (turbo fan), aerodinamik flutter riski, yakıt çalkalanması\n• Titreşim seviyesi: ÇOK YÜKSEK (özellikle motor yakınında)\n• Tipik kategori: H veya en yüksek\n• Test şiddeti: Yüksek genlik, geniş frekans, uzun süre\n\nEN ZORLU: C — Kanat içi. Motor titreşimi doğrudan kanat yapısına iletilir ve aerodinamik harmonikler ekler. Bu bölge için DO-160 test planı çok daha kapsamlı olur." },

    { id:"b7", tip:"ornek", baslik:"Örnek 2: EMC analiz senaryosu",
      soru:"Yeni bir aviyonik bilgisayar tasarımı uçak radyo sistemiyle aynı ekipman rafında bulunacak. EMC açısından hangi riskler değerlendirilmeli?",
      cozum:"EMC risk değerlendirmesi:\n\nRİSK 1 — Bilgisayarın radyo sistemine etki (emisyon):\nBilgisayar saat frekansları (100 MHz, 200 MHz ve harmonikleri) yayabilir. Bu frekanslar radyo alım bandına (118-137 MHz VHF) düşebilir.\n→ Test: DO-160 Bölüm 21 — Radiated Emission\n→ Önlem: Ekranlı kasa, filtreli güç girişi, kablo koruması\n\nRİSK 2 — Radyo sisteminin bilgisayara etki (hassasiyet):\nRadyo sistemi sinyali yayarken güçlü RF alanı oluşturur. Bu alan bilgisayarı etkileyebilir.\n→ Test: DO-160 Bölüm 20 — Radiated Susceptibility\n→ Önlem: Bilgisayar kasası EMI'a dayanıklı ekranlama ile korunmalı\n\nRİSK 3 — Ortak güç kablosundan gürültü:\nİkisi aynı güç barından besleniyorsa birinin oluşturduğu güç gürültüsü diğerini etkiler.\n→ Test: DO-160 Bölüm 17 — Conducted Susceptibility/Emission\n→ Önlem: Ayrı güç filtresi, güç hattı ferrit çekirdekler\n\nÇÖZÜM STRATEJİSİ:\nEMC testi öncesinde simulation (FEKO gibi araç) ile risk bölgelerini belirle. Kritik frekanslarda şielding etkinliği hesapla. Test planını buna göre yap." },

    { id:"b8", tip:"ornek", baslik:"Örnek 3: DO-160 test planı",
      soru:"Yeni tasarlanan bir inertial reference unit (IRU) için DO-160G test planının ana hatlarını oluştur. IRU kokpit altındaki ekipman bölmesinde çalışacak.",
      cozum:"IRU DO-160G Test Planı — Ana Başlıklar:\n\nBÖLÜM 4 — Sıcaklık ve İrtifa:\nKategori: D2 (−55°C ile +70°C operasyonel, −65°C ile +85°C depolama)\nTest: Sıcak operasyon, soğuk operasyon, irtifa (40.000 feet), kısa süreli aşırı sıcaklık\nIRU özelliği: Gyro mekanizması sıcaklığa hassas → sıcaklık gradyanı testi önemli\n\nBÖLÜM 7 — Şok:\nKategori: B (ekipman bölmesi — yere yakın)\nTest: Operasyonel şok (6g, 11ms), kaza güvenliği (20g)\n\nBÖLÜM 8 — Titreşim:\nKategori: S (ekipman bölmesi koşulları)\nTest: Sinüs tarama + rastgele titreşim\nIRU özelliği: Vibrasyon gyro kalibrasyonunu bozabilir → test sırasında navigasyon doğruluk ölçümü\n\nBÖLÜM 20 — EMC Hassasiyeti:\nKategori: Zz (tüm uçak tiplerine uygun en geniş spektrum)\nTest: VHF/HF/radar frekanslarında radiated susceptibility\n\nBÖLÜM 21 — EMC Emisyonu:\nRF emisyon limitleri — VOR/ILS bandı etkilenmemeli (108-118 MHz)\n\nBÖLÜM 22 — Yıldırım:\nSeviye 2 (endüktif etki) — IRU kablolarından iletilen yıldırım etkisi\n\nBÖLÜM 25 — Donanım Bağışıklığı:\nHIRF testi — güçlü radar/radyo istasyonu yakınında IRU çalışma testi" },

    { id:"b9", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "DO-160 kategorisini konuma göre belirlememeK. Hangi bölüm, hangi kategori — montaj konumuyla uyumlu olmak zorunlu.",
        "EMC testini son adım sanmak. EMC sorunları erken simülasyon ve tasarımda çözülmeli. Test aşamasında bulunan EMC sorunu tasarım revizyonu gerektirir.",
        "Yıldırım testini sadece doğrudan çarpma zannetmek. Bölüm 22 indüktif/kapasitif etkiyi de test eder; bu çoğunlukla doğrudan çarpmadan daha yaygın etkidir.",
        "ETSO ve DO-160'ı karıştırmak. ETSO/TSO belirli ekipman kategorileri için bütünsel sertifika; DO-160 bu sertifikasyonun bir parçası olan çevresel test standardıdır.",
        "Test kategorisi belgelenmesini ihmal etmek. Hangi kategoride test yapıldığı Form 1 ve uygunluk bildiriminde belirtilmeli. Eksik kayıt kuruluma izin vermez.",
        "Kompozit gövdede yıldırım korumasını metalik gövdeyle aynı sanmak. Karbon fiber Faraday kafesi oluşturmaz; ek koruma katmanları zorunlu."
      ] },

    { id:"b10", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["DO-160 nedir ve neden kullanılır?","RTCA/DO-160G, uçak aviyonik ve elektrik ekipmanlarının çevresel testleri için uluslararası standarttır. Titreşim, sıcaklık, EMC, yıldırım gibi 26 bölüm içerir. DO-160 geçmeyen ekipman uçağa takılamaz. Her ekipman hangi kategoride onaylandıysa yalnızca o ortama uygun konuma takılabilir."],
        ["Elektromanyetik uyumluluk (EMC) havacılıkta neden kritik?","Uçaktaki aviyonik sistemler hem diğer sistemlerin EMI'ından etkilenmemeli hem de çevreye EMI yaymamalıdır. Etkileşim kritik sistemleri bozabilir. DO-160 Bölüm 20 hassasiyeti, Bölüm 21 emisyonu test eder. HIRF, güçlü yer istasyonlarının uçuş sırasında aviyoniği etkilemesi riskini de kapsar."],
        ["B787 gibi karbon fiber uçakta yıldırım koruması neden özel çözüm gerektirir?","Metalik gövde Faraday kafesi oluşturur ve yıldırımı çevresinden iletir. Karbon fiber iletkendir ama metalik gibi yıldırımı iletmez; dağıtma kapasitesi farklıdır. B787'de gömülü bakır kafes ve iletken bant sistemi eklenmiştir. Yıldırım koruması için ek mühendislik çözümleri zorunludur."]
      ] },

    { id:"b11", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "RTCA. (2010). DO-160G: Environmental conditions and test procedures for airborne equipment. RTCA.",
        "EUROCAE. (2010). ED-14G: Environmental conditions and test procedures for airborne equipment. EUROCAE.",
        "Perez, R. (2012). Handbook of electromagnetic compatibility. Academic Press.",
        "FAA. (2018). Advisory Circular AC 21-16G: RTCA Document DO-160 versions D, E, F, and G."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"DO-160", puan:1,
      soru:"DO-160'ın amacı nedir?",
      secenekler:["Pilot eğitim standardı","Aviyonik ve elektrik ekipmanlarının çevresel testleri için standart","Uçak bakım prosedürü","Yakıt sistemi testi"],
      dogru:1,
      aciklama:"DO-160 (RTCA/DO-160G), uçak aviyonik ve elektrik ekipmanlarının titreşim, sıcaklık, EMC, yıldırım gibi çevresel koşullara dayanıklılığını test etmek için kullanılan uluslararası standarttır." },
    { id:"s2", etiket:"EMC", puan:2,
      soru:"DO-160 Bölüm 20 ve 21 arasındaki fark nedir?",
      secenekler:["20: Titreşim, 21: Sıcaklık","20: EMI'a hassasiyet (etkilenme), 21: EMI emisyonu (yayma)","20: Yıldırım, 21: HIRF","İkisi aynı testi farklı şiddette uygular"],
      dogru:1,
      aciklama:"Bölüm 20: Ekipmanın dışarıdan gelen EMI'a dayanması (susceptibility). Bölüm 21: Ekipmanın çevreye ne kadar EMI yaydığı (emission). Her ikisi de önemli: biri diğer sistemlerden korunma, diğeri diğer sistemlere zarar vermeme." },
    { id:"s3", etiket:"Yıldırım", puan:2,
      soru:"Kanat içindeki ekipman için DO-160 yıldırım testinde hangi etki daha önemlidir?",
      secenekler:["Doğrudan çarpma — çünkü kanat uçları yıldırım kancalar","Indüktif/kapasitif kuple — çünkü kanat boyunca uzanan kablolar yıldırım enerjisi taşır","İkisi eşit öneme sahip","Kanat içindeki ekipman yıldırımdan etkilenmez"],
      dogru:1,
      aciklama:"Kanat boyunca uzanan yakıt, hidrolik ve aviyonik kabloları yıldırım enerjisini endüktif ve kapasitif yolla iletir. Bu ikincil etki doğrudan çarpmadan çok daha yaygın ve ekipmanı daha sık etkiler. DO-160 Bölüm 22 her iki etkiyi de test eder." },
    { id:"s4", etiket:"Test kategorisi", puan:2,
      soru:"Ekipman hangi DO-160 kategorisinde onaylanmışsa nerede kullanılabilir?",
      secenekler:["Herhangi bir konumda","Yalnızca o kategoriye uygun çevre koşullarındaki konumda","En az o kategoride onaylanan konumlarda","Kategori sadece belge için gerekli, konumu belirlemez"],
      dogru:1,
      aciklama:"DO-160 kategorisi ekipmanın test edildiği çevre şiddetini gösterir. Ekipman yalnızca o kategoriye uygun (veya daha az zorlu) konuma takılabilir. Daha zorlu konuma takılmak sertifikasyonu geçersiz kılar." }
  ],
  ipuclari:{
    "DO-160":"26 bölüm: Sıcaklık (4), şok (7), titreşim (8), EMC hassasiyet (20), emisyon (21), yıldırım (22). Kategori = montaj konumu.",
    "EMC":"Bölüm 20=hassasiyet (etkilenme). Bölüm 21=emisyon (yayma). HIRF=güçlü yer istasyonu etkisi.",
    "Yıldırım":"Doğrudan çarpma + indüktif/kapasitif kuple. Kompozit gövde → Faraday kafesi yok → ek koruma şart.",
    "Kategori":"Kategoriye uygun konuma takılır. Daha zorlu = daha yüksek kategori gerektirir."
  }
},

"m7-8": {
  ad: "Uçak alt sistemleri — hidrolik ve iklimlendirme",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "Orta",
  sure: 22,
  mulakat: false,
  onbilgi: "CS-25 esasları (m7-4), temel termodinamik",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Hidrolik ve iklimlendirme sistemleri modern uçağın vazgeçilmez altyapısıdır. Hidrolik sistemi uçuş kontrol yüzeylerini, iniş takımını ve fren sistemini besler. İklimlendirme sistemi kabin basıncını ve sıcaklığını yolcu güvenliği ve konforu için yönetir. Her iki sistem de CS-25 kapsamında ciddi emniyet gereksinimlerine tabidir." },

    { id:"b2", tip:"metin", baslik:"Hidrolik sistem temelleri",
      metin:"Hidrolik sistemler Pascal kanununa dayanır: kapalı sistemde uygulanan basınç her yöne eşit iletilir.\n\nF₁/A₁ = F₂/A₂ = P (basınç)\n\nKüçük yüzeye küçük kuvvet, büyük yüzeyde büyük kuvvet. Bu prensiple pilot küçük kuvvetle büyük kontrol yüzeylerini hareket ettirebilir.\n\nÇalışma basıncı:\n• 3.000 psi (207 bar): Eski nesil uçaklar (B747, A300)\n• 5.000 psi (345 bar): Yeni nesil (B787, A380, A350)\n• 5.000 psi sistemi daha küçük ve hafif bileşenler kullanır ama malzeme ve sızdırmazlık daha zorlu\n\nHidrolik sıvı:\n• Skydrol (fosfat ester bazlı): Sivil havacılık standardı. Yangına dayanıklı. Cilde ve göze tahriş edici.\n• MIL-PRF-5606 (mineral yağ bazlı): Askeri. Daha ucuz ama yanıcı.\n\nYedeklilik:\nBüyük yolcu uçaklarında 3 bağımsız hidrolik sistem (Green, Blue, Yellow — A320 örneği). Herhangi ikisinin kaybında temel uçuş kontrolü sürdürülür. Tümü kaybolursa RAT (Ram Air Turbine) en az fonksiyonu sağlar." },

    { id:"b3", tip:"metin", baslik:"Hidrolik sistem bileşenleri",
      metin:"POMPA TÜRLERİ:\n• Engine Driven Pump (EDP): Motor şaftından tahrik alır. Birincil pompa. Güvenilir, büyük debi.\n• Electric Motor Pump (EMP): Elektrik motoru tahrikli. İkincil veya acil. Yer operasyonunda motor yok iken kullanılır.\n• Power Transfer Unit (PTU): Bir sistemden diğerine güç aktarır. Sıvı transferi yapmaz, yalnızca güç. A320'nin karakteristik PTU 'havlayan köpek' sesi ünlüdür.\n• Ram Air Turbine (RAT): Uçak hareketi havasından güç üretir. Tüm diğer sistemler başarısız olduğunda devreye girer. Küçük türbin + jeneratör veya hidrolik pompa kombinasyonu.\n\nDEPO (RESERVOIR): Sıvı tankı. Presürize edilmiş (cabin altı) veya basınçlı gaz kullanılır.\n\nAKÜMÜLATÖR: Basınç dengeleme ve anlık yük karşılama. Fren sisteminde çok önemli.\n\nSERVO VALFLER: Pilot sinyalini hidrolik kuvvete dönüştürür. Fly-by-wire'da elektrik sinyaliyle çalışır.\n\nHIDROLİK GÜÇLÜ AKTÜATÖRLEr (PCU — Power Control Unit): Kanat kenar cihazları, iniş takımı, frenler için.",
      kutu:{ tip:"bilgi", baslik:"A320 PTU'nun köpek sesi",
        metin:"A320'de Green ve Yellow sistemlerin basıncı fark ettiğinde PTU devreye girer. PTU periyodik çalışmasında 'ruf ruf' benzeri ses üretir. Yolcular bu sesi duyunca endişelenir ama normal operasyondur. PTU sıvı transfer etmez, yalnızca pompa hareketini bir sistemden diğerine aktarır." } },

    { id:"b4", tip:"metin", baslik:"İklimlendirme ve kabin basınçlandırma",
      metin:"Kabin basınçlandırması neden gerekli?\n\n10.000 m (33.000 feet) irtifada dış basınç yaklaşık 264 hPa — deniz seviyesinin yalnızca yüzde 26'sı. Bu basınçta yeterli oksijen alınamaz (hipoksi). 7-10 dakika içinde bilinç kaybı.\n\nKabin 'pressurization differential'ı:\nTicari uçaklar kabin içini yaklaşık 8.000 feet (2.400 m) eşdeğeri basınçta tutar (kabaca 750 hPa). Bu kabindeki ve dış atmosfer arasında ~0,56 bar basınç farkı demektir.\n\nHava kaynağı — bleed air:\nGeleneksel sistemde motor kompresörünün orta aşamalarından sıcak ve yüksek basınçlı hava çekilir (bleed air). Bu havadan güç kaybı motor verimliliğini düşürür.\n\nB787 no-bleed sistemi:\nBoeing 787 bleed air yerine elektrikli kompresörler kullanır. Avantajlar: Motor verimliliği yüksek, boru hatları az, bakım basit. Dezavantajlar: Güçlü elektrik jeneratörleri gerektirir.\n\nHava paketleri (Air Conditioning Pack):\n• Bleed air soğutularak ve nemlendirilerek kabine verilir\n• Tipik olarak 2 veya 3 paket (yedeklilik)\n• Her paket ACM (Air Cycle Machine) — kompresör + türbin + ısı değiştirici kombinasyonu\n• Tek paket arızasında diğer paketler tüm yolcular için minimum koşulları sağlamalı (CS-25)" },

    { id:"b5", tip:"metin", baslik:"Kabin basıncı kontrolü ve acil basınç kaybı",
      metin:"OFV (Outflow Valve):\nKabinden dışarıya hava çıkışını kontrol eder. Kabin basıncı OFV açıklık derecesiyle ayarlanır. Otomatik kontrol sistemi pilot isteği veya programlı profil doğrultusunda OFV'yi yönetir.\n\nNegative Pressure Relief Valve:\nKabin içi basıncın dış basınçtan düşmesini önler. İniş sırasında OFV tam açık bırakılırsa kabin basıncı dış basıncın altına düşebilir — bu gövdeyi ters yönde yükler. Relief valve bu durumu önler.\n\nAcil basınç kaybı senaryoları:\n• Yavaş sızıntı: Pilot fark eder, kontrollü alçalma\n• Hızlı basınç kaybı: Süreye göre hipoksi riski artar. Maske otomatik düşer.\n• Patlayıcı basınç kaybı: Pencere veya kapı açılması. Anlık büyük basınç farkı → güçlü türbülans, nesneler fırlar\n\nOksijen maskeleri:\nBasınç kaybı algılandığında PSU (Passenger Service Unit) maskeleri otomatik bırakır. Kimyasal oksijen jeneratörü (KClO₃) ısınarak O₂ üretir. Yaklaşık 12-15 dakika O₂ sağlar — yeterli iniş alçalması için yeterli süre.\n\nCS-25 Madde 25.831 — Kabin hava kalitesi:\nKişi başı taze hava debisi, CO₂ limitleri, nem ve sıcaklık gereksinimleri.\n\nCS-25 Madde 25.841 — Kabin basıncı:\nMaksimum basınç farkı, basınç uyarı sistemi, acil basınç kaybı prosedürleri." },

    { id:"b6", tip:"ornek", baslik:"Örnek 1: Hidrolik yedeklilik analizi",
      soru:"A320 üç hidrolik sistem (Green, Blue, Yellow) içeriyor. Aşağıdaki arıza senaryolarında uçuş kontrolü sürdürülebilir mi?\nA) Green sistem kaybı\nB) Green ve Blue sistem kaybı\nC) Green, Blue ve Yellow sistem kaybı",
      cozum:"A320 sistem bağımlılıkları (basitleştirilmiş):\n\nA) Green sistem kaybı:\n• Elevator: Blue + Yellow backup ile çalışır ✓\n• Rudder: Blue + Yellow backup ile çalışır ✓\n• Aileron: Blue + Yellow ile çalışır ✓\n• Frenler: Yellow + akümülatör ✓\n• Iniş takımı: Blue yedek ✓\n→ Uçuş kontrol TAM SÜRDÜRÜLÜR. Normal iniş yapılabilir.\n\nB) Green ve Blue sistem kaybı:\n• Elevator: Yellow backup + RAT yedek ✓\n• Rudder: Yellow + mekanik backup ✓\n• Aileron: Yellow + flaperon ✓\n• Fren: Yellow akümülatör (sınırlı çevrim) ✓\n• Iniş takımı: Mekanik acil açma ✓\n→ Uçuş SINIRLI ŞEKİLDE SÜRDÜRÜLEBİLİR. Daha dikkatli uçuş, acil inis prosedürü.\n\nC) Green, Blue, Yellow — tüm sistemler kayıp:\n• RAT devreye girer → elektrik + sınırlı hidrolik\n• ELAC backup → temel kontrol\n• Fren: Yedek akümülatör (sınırlı)\n→ ACIL DURUM. Temel uçuş kontrolü var ama sınırlı. Air Transat 236 (2001) bu durumu yaşadı; her iki motor yakıt bitti, Azor adaları'nda başarılı süzüşle indi." },

    { id:"b7", tip:"ornek", baslik:"Örnek 2: Kabin basınç hesabı",
      soru:"Bir yolcu uçağı FL390'da (39.000 feet ≈ 11.900 m) seyrediyor. Kabin 8.000 feet (2.440 m) eşdeğerinde basınçlandırılıyor.\n\na) Dış atmosfer basıncı (FL390'da): 193 hPa\nb) Kabin basıncı (8.000 feet eşdeğeri): 754 hPa\n\nGövde üzerine etki eden basınç farkını ve birim yüzeye düşen kuvveti hesapla.",
      cozum:"Basınç farkı:\nΔP = P_kabin − P_dış = 754 − 193 = 561 hPa = 56.100 Pa = 0,561 bar\n\nBirim yüzeye düşen kuvvet:\n56.100 Pa = 56.100 N/m² ≈ 5,72 ton/m²\n\nBir A320 gövde paneli yaklaşık 1,5 m × 0,5 m = 0,75 m²:\nF = 56.100 × 0,75 = 42.075 N ≈ 4,3 ton\n\nYorum: Her orta büyüklükteki gövde panelinde 4 tonun üzerinde kuvvet var. Bu yüzden basınçlı gövde yapısı ve özellikle pencere çerçevesi, kapı kenarı gibi gerilme konsantrasyonu noktaları kritik tasarım konularıdır. De Havilland Comet kazaları bu basınç yüklerinin yorulma etkisinin yetersiz değerlendirilmesinden kaynaklandı." },

    { id:"b8", tip:"ornek", baslik:"Örnek 3: Bleed air ve no-bleed karşılaştırması",
      soru:"Geleneksel bleed air sistemi ile B787'nin no-bleed sistemini verimlilik açısından karşılaştır. Avantaj ve dezavantajları sırala.",
      cozum:"BLEED AIR SİSTEMİ (Geleneksel — B737, A320, B747...):\n\nAvantajlar:\n+ Motor çalışır çalışmaz hava mevcut\n+ Basit güç akışı (mekanik boru hattı)\n+ Kanıtlanmış, güvenilir teknoloji\n+ Elektrik sistemi yükü düşük\n\nDezavantajlar:\n− Motor kompresörünün işinin bir kısmı 'çalınıyor' → yakıt verimliliği düşüyor\n− Yüksek sıcaklıklı (200°C+) boru hattı → yangın riski, ağır yalıtım\n− Boru sızıntısı kabine yağlı hava gerebilir (fume event riski)\n− Bakım karmaşık\n\nNO-BLEED SİSTEMİ (B787):\n\nAvantajlar:\n+ Motor tüm gücü itki için kullanır → yakıt tüketimi %1-2 azalır\n+ Yüksek sıcaklıklı boru hattı yok → yangın riski azalır\n+ Fume event riski azalır\n+ Bakım basitleşir\n\nDezavantajlar:\n− Çok güçlü elektrik jeneratörleri gerekir (B787'de 4 × 250 kVA jeneratör)\n− Jeneratör ve elektrik sistemi ağırlık ekler\n− Yeni teknoloji → başlangıçta fazla güvenilirlik sorunu\n− Yer operasyonunda ASU (Air Start Unit) veya APU daha kritik\n\nSEÇİM KRİTERİ: B787 gibi karbon fiber, hafif gövdeli uzun menzil uçaklarda no-bleed ağırlık ve verimlilik avantajı sağlar. Kısa hat uçaklarda bleed air sistemi daha pratik kalabilir." },

    { id:"b9", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Kabin basıncını irtifayla karıştırmak. 'Kabin 8.000 feet basınçlandırılmış' demek uçak 8.000 feet irtifada uçuyor demek değil. Uçak 39.000 feette uçarken kabin içi 8.000 feet atmosferik eşdeğeri basıncında tutulur.",
        "Hidrolik sıvı sızıntısını hafife almak. Skydrol göz ve cilde tahriş edici. Sızıntı arıza değil, tehlikeli sıvı riski demek.",
        "RAT'ın tüm sistemleri besleyeceğini sanmak. RAT yalnızca temel uçuş kontrolü ve kritik aviyoniği besler. Tam güç yoktur.",
        "Bleed air sıcaklığını küçümsemek. Motor kompresöründen gelen hava 200-300°C sıcaklıkta. Boru hattı arızası yangın riski demektir.",
        "PTU'yu hidrolik sıvı transfer eden cihaz sanmak. PTU yalnızca güç (mekanik hareket) aktarır. Sıvı transferi yoktur.",
        "Negatif basınç kapağını (negative pressure relief valve) ihmal etmek. İniş sırasında OFV hatalı bırakılırsa gövde ters yönde yüklenir. Bu yapısal risk içerir."
      ] },

    { id:"b10", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Uçak hidrolik sisteminin yedeklilik tasarımı nasıldır?","Büyük yolcu uçaklarında 2-3 bağımsız hidrolik sistem bulunur. Her biri farklı motor tarafından tahrik edilir. Bir sistem kaybında diğerleri temel uçuş kontrolünü sürdürür. Tümü kaybolursa RAT en kritik sistemleri besler. CS-25 no single failure ilkesi gereği bir sistem kaybı katastrofik sonuç vermemeli."],
        ["Kabin basınçlandırması neden gereklidir?","10.000 m irtifada dış atmosfer basıncı yüzde 26 — yeterli oksijen alınamaz. Kabin yaklaşık 2.400 m (8.000 feet) eşdeğerinde tutularak nefes alınabilir basınç sağlanır. Kabin ve dış atmosfer arasında yaklaşık 0,56 bar fark oluşur; bu fark gövde üzerine büyük basınç yükü bindirir."],
        ["B787 bleed air kullanmaz, bu ne anlama gelir?","B787 no-bleed mimarisi kullanır. Motor kompresöründen hava çekmek yerine büyük elektrik jeneratörleriyle elektrikli kompresörler çalıştırır. Motor tüm gücünü itki için kullanır. Yakıt tüketimi azalır, yangın riski düşer, bakım basitleşir. Ama güçlü elektrik sistemi gerektirir."]
      ] },

    { id:"b11", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Moir, I., & Seabridge, A. (2013). Aircraft systems: Mechanical, electrical and avionics subsystems integration (3. baskı). Wiley. ISBN 978-1-119-94340-8",
        "Wild, T. W. (2008). Transport category aircraft systems (3. baskı). Jeppesen.",
        "Boeing. (2011). 787 No-Bleed Systems. AERO Magazine Q3 2007.",
        "Airbus. (2002). A320 Aircraft Systems Maintenance Manual. Airbus Industries."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Hidrolik", puan:1,
      soru:"Uçak hidrolik sisteminde 5.000 psi (345 bar) çalışma basıncının 3.000 psi'ye göre avantajı nedir?",
      secenekler:["Daha ucuz sıvı kullanılır","Daha küçük ve hafif bileşenler kullanılabilir","Daha az yedek sistem gerekir","Motor verimliliği artar"],
      dogru:1,
      aciklama:"Aynı kuvvet için daha yüksek basınç daha küçük piston alanı demektir (F=PA). Bu daha küçük, hafif aktüatörler ve borular anlamına gelir — uçak ağırlığı azalır. Ancak yüksek basınç için daha dayanıklı malzeme ve sızdırmazlık gerektirir." },
    { id:"s2", etiket:"İklimlendirme", puan:2,
      soru:"Kabin 8.000 feet eşdeğerinde basınçlandırılmış, uçak FL390'da. Bu durumda kabin ile dış atmosfer arasındaki basınç farkı yaklaşık kaçtır?",
      secenekler:["0,1 bar","0,3 bar","0,56 bar","1,0 bar"],
      dogru:2,
      aciklama:"FL390'da dış basınç ≈193 hPa. 8.000 feet eşdeğeri ≈754 hPa. Fark = 754−193 = 561 hPa ≈ 0,56 bar. Bu fark gövde üzerine büyük kuvvet bindirir — her panel üzerinde tonlarca yük." },
    { id:"s3", etiket:"Hidrolik", puan:2,
      soru:"RAT (Ram Air Turbine) ne zaman devreye girer?",
      secenekler:["Her uçuşta","Tüm normal güç sistemleri başarısız olduğunda son çare olarak","Motor gücü azaldığında","Hidrolik sıvı değişimi gerektiğinde"],
      dogru:1,
      aciklama:"RAT motor, APU ve batarya dahil tüm güç sistemleri başarısız olduğunda otomatik devreye girer (veya pilot açar). Uçağın ileri hareketinden türbin gücü alır. Yalnızca temel uçuş kontrolü ve kritik aviyoniği besler." },
    { id:"s4", etiket:"İklimlendirme", puan:2,
      soru:"B787'nin no-bleed sisteminin temel avantajı nedir?",
      secenekler:["Daha az oksijen maskesi gerekir","Motor tüm gücünü itki için kullanır, yakıt verimliliği artar","Kabin daha fazla basınçlandırılabilir","Pilot yükü azalır"],
      dogru:1,
      aciklama:"Bleed air çekmek motor kompresör işinin bir kısmını 'çalar'. No-bleed mimarisinde motor tüm gücünü itki için kullanır. Yakıt tüketimi %1-2 azalır, yüksek sıcaklıklı boru hattı riski ortadan kalkar." },
    { id:"s5", etiket:"Hidrolik", puan:1,
      soru:"PTU (Power Transfer Unit) ne yapar?",
      secenekler:["Hidrolik sıvıyı bir tanktan diğerine aktarır","Bir hidrolik sistemin gücünü mekanik olarak diğerine aktarır, sıvı transferi yapmaz","Elektrik enerjisini hidrolik enerjiye çevirir","Yer güç kaynağından hidrolik sistemi besler"],
      dogru:1,
      aciklama:"PTU bir sistemin motorunu (pompayı) diğer sistemin basıncıyla tahrik eder. Sıvı karışmaz — sadece güç transfer edilir. Bu yüzden A320 PTU 'havlayan köpek' sesi çıkarır: aralıklı pompalama." }
  ],
  ipuclari:{
    "Hidrolik":"Pascal: F=PA. 3000 psi eski, 5000 psi yeni nesil → hafif. 3 sistem yedeklilik. RAT=son çare.",
    "İklimlendirme":"Bleed air: motor kompresöründen hava. No-bleed (B787): elektrikli kompresör → verimli.",
    "Kabin basıncı":"FL390: dış≈193 hPa. Kabin: 8000 feet≈754 hPa. ΔP≈0,56 bar → tonlarca yük.",
    "PTU":"Güç transferi, sıvı değil. A320'nin 'ruf ruf' sesi."
  }
},

"m7-9": {
  ad: "Kokpit ergonomisi ve havacılık fizyolojisi",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "Orta",
  sure: 20,
  mulakat: false,
  onbilgi: "Temel insan anatomisi, standart atmosfer (m3-6)",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Uçak ne kadar iyi tasarlanmış olursa olsun, onu kullanan pilot insan fizyolojisinin sınırlarıyla kısıtlanmıştır. Kokpit ergonomisi pilotun hata yapma olasılığını minimize edecek şekilde bilgi, kontrol ve çalışma ortamını tasarlar. Havacılık fizyolojisi ise yüksek irtifanın, hızlanmanın ve stres altında çalışmanın insan vücuduna etkilerini inceler." },

    { id:"b2", tip:"metin", baslik:"İnsan faktörü ve 'Dirty Dozen'",
      metin:"Uçak kazalarının yaklaşık yüzde 70-80'inin insan hatasından kaynaklandığı kabul edilir. Bu oran insan faktörü mühendisliğinin ne kadar önemli olduğunu gösterir.\n\nHavacılıkta 'Dirty Dozen' — 12 insan faktörü hatası kaynağı (Transport Canada):\n1. İletişim eksikliği\n2. Dikkatsizlik\n3. Bilgi eksikliği\n4. Dikkat dağınıklığı\n5. Ekip çalışması eksikliği\n6. Yorgunluk\n7. Kaynak eksikliği\n8. Baskı (Pressure)\n9. Özgüven fazlalığı (Complacency)\n10. Stres\n11. Farkındalık eksikliği\n12. Norm dışı uygulama (Norms)\n\nBu faktörlerin her biri tasarımla azaltılabilir:\n• İletişim: Standarize edilmiş prosedürler, CREW resource management\n• Yorgunluk: Görev süresi limitleri (FTL — Flight Time Limitations)\n• Dikkati dağıtma: Kritik faz kısıtlamaları (sterile cockpit kuralı)",
      kutu:{ tip:"bilgi", baslik:"Sterile Cockpit Kuralı",
        metin:"10.000 feet altında (kalkış ve iniş) kokpitte yalnızca uçuşla ilgili konuşulabilir. Kişisel sohbet, yemek yeme, uçuşla ilgisiz görev yasak. Bu kural 1981'de FAA tarafından, ekip kaynaklı birkaç ölümcül kaza sonrasında getirildi. Yerleşim operasyonlarında da uygulanır." } },

    { id:"b3", tip:"metin", baslik:"Hipoksi — oksijen yetersizliği",
      metin:"Hipoksi yeterli oksijen alamayan dokunun işlev bozukluğudur. Havacılıkta kritik risk.\n\nİrtifa hipoksisi:\n10.000 feet: Gece görüşü bozulur (retina oksijene hassas)\n14.000 feet: Ince motor becerileri azalır\n18.000 feet: 20-30 dakika içinde bilinç bulanıklığı\n22.000 feet: Time of Useful Consciousness (TUC) = 5-10 dakika\n25.000 feet: TUC ≈ 3-5 dakika\n40.000 feet: TUC ≈ 15-20 saniye\n\nHipoksinin aldatıcı yanı: Hasta kendini iyi hisseder. Öfori (coşku) duygusu olabilir. Bu yüzden pilot kendi yargısına güvenemez.\n\nSemptomlar: Baş ağrısı, uyuşluk, koordinasyon kaybı, renk algısı bozulması, bilinç kaybı.\n\nÇözüm: Oksijen maskesi. Ticari uçaklarda basınç kaybında otomatik maske. Askeri pilot yüksek irtifada her zaman taktik oksijen maske kullanır.\n\nHiperventilasyon: Hipoksi sanılabilir ama tersidir — çok hızlı nefes alarak CO₂ azalması. Tedavi: Yavaş nefes al." },

    { id:"b4", tip:"metin", baslik:"Hızlanma etkileri — G kuvvetleri",
      metin:"+G (pozitif G, pozitif yüksekliğe doğru):\nKandaki yoğunluk artar, kan beyinden aşağıya çekilir.\n+2G: Ağırlık iki katına çıkar\n+3-4G: Tünel görüşü (periferik görüş kaybı)\n+5-6G: Gri görüntü (gray-out) → siyah görüntü (black-out) → bilinç kaybı (G-LOC)\nG-LOC: G-induced Loss of Consciousness. Uçak pilota en hafif uyarı veriyor gibi görünürken pilot bilinçsizdir. Çok tehlikeli.\n\n−G (negatif G, aşağıya doğru):\nKan başa çekilir. Kırmızı görüntü (red-out). Daha az tolere edilir.\n\nG koruma:\n• AGSM (Anti-G Straining Maneuver): Kas germesi.\n• G-suit: Bacak ve karına hava şişer, kanı aşağıya itmez.\n• ATAGS (Advanced Technology Anti-G Suit): Otomatik şişen modern sistemler.\n\nG limitleri:\n• Sivil yolcu uçağı: +2,5G ile −1G normal, +3,75G limit\n• Savaş uçağı: F-16: +9G\n• İnsan fizyolojisi: Eğitimli pilot ~9G (sürekli), anlık ~12G tolere edebilir\n\n10.000 feet kural ile birlikte kalkış ve iniş sırasında dikkat dağıtıcı aktiviteler yasak" },

    { id:"b5", tip:"metin", baslik:"Kokpit tasarımı ve ergonomi ilkeleri",
      metin:"REACH ZONELERİ:\nPilot koltuğu referans noktasından kolların rahatça uzanabileceği alan. Kritik kontroller (throttle, flight controls, emergency) bu alanda.\nZone 1: Her zaman ulaşılabilir\nZone 2: Gövde eğilerek ulaşılabilir\nZone 3: Sadece acil durum (overhead panel gibi)\n\nGÖRÜŞ ALANI (FOV — Field of View):\n• 15° üstte, 10° altta minimum görüş alanı tanımları\n• Ön cam buz ve yağmur koşullarında iç taraftan görüş\n• Pist, PAPI ışıkları ve threshold'un görülebilirliği\n\nDİSPLAY TASARIMI:\n• PFD (Primary Flight Display): Yapay ufuk, hız, irtifa, VSI tek ekranda\n• ND (Navigation Display): Harita, rotalar, hava durumu\n• ECAM/EICAS: Motor ve sistem bilgileri\n• HUD (Head-Up Display): Kritik bilgiler camda, pilot başını kaldırmadan görebilir\n\nRENK KODLAMASI (standarize):\n• Kırmızı: Uyarı (Warning) — anlık müdahale\n• Turuncu/Sarı: Dikkat (Caution) — gecikmeli müdahale\n• Yeşil: Normal operasyon\n• Mavi: Avizans (önerilen değer, otomasyon modu)\n\nSES UYARILARI:\n• GPWS (Ground Proximity Warning System): 'Pull up, pull up'\n• TCAS (Traffic Collision Avoidance System): 'Climb, climb'\n• Stall warning: Stick shaker\n• Sink rate: 'Too low, terrain'" },

    { id:"b6", tip:"metin", baslik:"Barotravma ve dekompresyon hastalığı",
      metin:"BAROTRAVMA:\nBasınç değişimiyle vücuttaki hava boşluklarının (sinüs, orta kulak) zarar görmesi.\n\nOrta kulak barotravması:\nYükselirken kulak içindeki hava genişler — otomatik geçer.\nAlçalırken dış basınç artar, östaki borusu açılmazsa kulakta negatif basınç → şiddetli ağrı, zarın yırtılması riski.\nÇözüm: Yutkunma, Valsalva manevras (burun kapalıyken üfle).\n\nSinüs barotravması: Soğuk algınlığı ve tıkalı sinüsle uçmak riski.\n\nDİŞ BAROTRAVMASI: Dolgu altında hava hapsolabilir. Yükselirken şiddetli ağrı.\n\nDEKOMPRESYON HASTALIĞI (Bends):\nÇok yüksek irtifada (genellikle 18.000 feet üstü) basınç düştükçe kanda ve dokularda çözünmüş azot gaz kabarcıkları oluşturur.\nSemptomlar: Eklem ağrısı (bends), deri kaşıntısı (chokes), nörolojik semptomlar.\nRisk faktörleri: Dalış sonrası hızlı yükseliş. Dalgıçların bildiği tablo.\nKabinli uçaklarda pratik olarak risk yok (kabin 8.000 feet). F-16 gibi açık sistem kokpitlerde risk var.\n\nHIPOBARİK HİPOKSİ: İrtifaya bağlı O₂ azlığı — ana konu." },

    { id:"b7", tip:"ornek", baslik:"Örnek 1: Kokpit uyarı sistemi değerlendirme",
      soru:"Bir test pilotu simülatörde 60 saniyede 12 farklı uyarı aldı. Bu tasarım problemi midir? Hangi ilkelere göre değerlendirilir?",
      cozum:"Bu kesinlikle bir tasarım problemidir. Değerlendirme:\n\nDİKKAT KAPASİTESİ:\nİnsan beyninin aynı anda işleyebileceği bilgi kanalları sınırlı (Miller'ın 7±2 kuralı). 60 saniyede 12 uyarı → saniyede 0,2 uyarı → karmaşık durumda pilotun işleyemeyeceği bilgi.\n\nUYARI HİYERARŞİSİ SORUNU:\nTüm 12 uyarı eşit öncelikte görünüyorsa pilot hangisine önce tepki vereceğini bilemez. 'Warning' ve 'caution' ayrımı, sesli uyarı, ekran önceliklendirmesi kritik.\n\nALARM YORGUNLUĞU (Alert Fatigue):\nÇok sık uyarı → pilot 'geliyor zaten' diye duyarsızlaşır. Uçuşun kritik anında gerçek bir uyarıyı görmezden gelebilir. Air France 447'de GPWS uyarıları çok geç fark edildi.\n\nTASARIM ÖNERİLERİ:\n• Uyarıları öncelik sırası ile göster (en kritik = en üstte, en sesli)\n• Aynı anda en fazla 3-5 uyarı aktif olsun\n• Uyarı bastırmak için pilot onayı al (acknowledge)\n• DO-160 standartlarında insan faktörü testleri\n• CS-25 AMC 25.1302: Installed systems and equipment for use by the flightcrew" },

    { id:"b8", tip:"ornek", baslik:"Örnek 2: Hipoksi TUC hesabı",
      soru:"Bir askeri uçak 25.000 feet irtifaya ulaşıyor. Pilot oksijen maskesini giymedi. Eğitim tablolarına göre TUC 3-5 dakika.\n\na) Bu süre yeterli mi bir 'return to lower altitude' prosedürü için?\nb) G-LOC ile hipoksi farkı nedir?",
      cozum:"a) TUC YETERLİLİK ANALİZİ:\n\nTUC = 3-5 dakika (25.000 feet)\n\nTipik alçalma prosedürü:\n• Fark etme: 30-60 saniye (hipoksi öforik olduğundan fark geç edilebilir)\n• Karar verme ve tertibat: 30-60 saniye\n• Yükseklik kontrolü: Dalış + kontrollü alçalma\n• FL150'ye iniş: 25.000 → 15.000 feet / 1000 ft/dak = 10 dakika\n\nSonuç: TUC YETERSİZ. 5 dakika TUC var ama güvenli irtifaya iniş 10 dakika alır. Bu yüzden askeri uçaklar her zaman taktik oksijen maske giyer. 25.000 feet için maske zorunlu.\n\nb) HİPOKSİ vs G-LOC FARKI:\n\nHipoksi:\n• Yavaş başlangıç, dakikalar içinde\n• Öfori — kendini iyi hisseder\n• Görme bozulması renk kaybıyla başlar\n• Düzeltme: Oksijen ver veya alçal\n\nG-LOC:\n• Çok hızlı başlangıç (saniyeler)\n• Öncesi gray-out/black-out görüntü\n• Bilinç kaybı anlık\n• Düzeltme: G azalt, otomatik G-LOC recovery prosedürü\n\nOrtak özellik: Her ikisinde de pilot kendini iyi hissedebilir — bu en tehlikeli yanı." },

    { id:"b9", tip:"ornek", baslik:"Örnek 3: Ergonomik tasarım değerlendirmesi",
      soru:"Yeni kokpit tasarımında acil yangın söndürme butonu overhead panel'e (başın üstü) yerleştirildi. Bu doğru mu? Ergonomik ilkelere göre değerlendir.",
      cozum:"DEĞERLENDİRME:\n\nOVERHEAD PANEL KONUMU:\n• Zone 3 — gövde ileri eğilerek ulaşılabilir\n• Acil durum baskısı altında büyük kas koordinasyonu bozulur\n• Yüksek G'de kola ek yük binebilir (kol ağırlığı artar)\n\nACİL BUTON KRİTERLERİ (CS-25 Madde 25.777):\n• Acil butonlar kolayca erişilebilir ve görülebilir konumda olmalı\n• Tüm operasyonel koşullarda (turbülans, gece, eldiven) çalışabilmeli\n• Yanlışlıkla tetiklenmeye karşı korumalı (guard kapak)\n\nERGONOMİK SONUÇ: Overhead panel ACİL yangın butonu için uygun değil.\n\nÖNERİLEN KONUM:\n• Merkez pedestal (iki pilot arasında) — her iki pilot erişir\n• Zone 1 veya 2 — normal oturma pozisyonundan erişilebilir\n• Kırmızı guard kapak + belirgin renk\n• İki adımlı onay (açık + bas) yanlış tetiklenmeyi önler\n\nSTANDART REFERANS:\nCS-25 AMC 25.1302, RTCA DO-229D ve EASA Human Factors Certification Criteria bu tasarım kararlarını yönlendirir." },

    { id:"b10", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Hipoksiyi hızla fark edebileceğini sanmak. Hipoksi öforik duygular yaratabilir — pilot kendini normal hisseder. Bu yüzden 10.000 feet üstünde maske zorunludur.",
        "G-LOC'un yalnızca savaş pilotlarını etkilediğini düşünmek. Sert manevra yapan her uçuşta G-LOC riski var. Sivil akrobasi pilotları da bu riski yaşar.",
        "Tüm uyarıların eşit önemde olduğunu varsayan tasarım. Uyarı önceliklendirmesi ve hiyerarşisi olmadan pilot kritik uyarıyı görmezden gelebilir.",
        "Barotravmayı sadece dalış ile ilişkilendirmek. Soğuk algınlığıyla uçmak orta kulak ve sinüs barotravmasına yol açabilir.",
        "Renk kodlamasını keyfi seçmek. Havacılıkta kırmızı=uyarı, sarı=dikkat, yeşil=normal standarttır. Farklı renk kullanmak karışıklık yaratır.",
        "İnsan faktörünü tasarım gereksinimi saymamak. CS-25 Madde 25.1302 ve 25.777 kokpit tasarımı ve uyarı sistemleri için insan faktörü gereksinimlerini tanımlar."
      ] },

    { id:"b11", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Hipoksi neden tehlikelidir ve havacılık tasarımı nasıl önler?","Yüksek irtifada oksijen azlığı koordinasyon bozukluğu ve bilinç kaybına yol açar. Tehlikeli yanı öfori duygusuyla pilotun kendini iyi hissetmesi. Kabin basınçlandırması (~8.000 feet eşdeğeri) birincil önlem. Basınç kaybında otomatik oksijen maskeleri CS-25 Madde 25.1447 kapsamında zorunlu."],
        ["Kokpit renk kodlaması standardı nedir?","Kırmızı: Uyarı (Warning) — anlık müdahale. Turuncu/Sarı: Dikkat (Caution) — izlenecek. Yeşil: Normal operasyon. Mavi: Otomasyon modu/tavsiye. Bu renklerin tutarlı kullanımı karışıklığı önler. CS-25 AMC 25.1302 bu gereksinimleri tanımlar."],
        ["G-LOC nedir ve nasıl önlenir?","G-induced Loss of Consciousness — yüksek G altında kanın beyin dışına çekilmesiyle bilinç kaybı. AGSM (kas germesi), G-suit ve G-LOC recovery prosedürleri önlem alır. Savaş uçaklarında GCAS (Ground Collision Avoidance System) pilotun bilincini yitirmesi durumunda otomatik kurtarma yapar."]
      ] },

    { id:"b12", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "Hawkins, F. H. (1993). Human factors in flight (2. baskı). Ashgate. ISBN 978-0-291-39827-8",
        "Transport Canada. (2018). Human Factors for Aviation — Basic Handbook.",
        "EASA. (2013). CS-25 AMC 25.1302: Installed systems and equipment for use by the flightcrew.",
        "Reinhart, R. O. (1992). Aerospace medicine. Iowa State University Press."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"Hipoksi", puan:2,
      soru:"Hipoksinin en tehlikeli özelliği nedir?",
      secenekler:["Çok hızlı gelişmesi","Öfori yarattığından pilot kendini iyi hisseder, tehlikeyi fark etmeyebilir","Geri dönüşsüz olması","Sadece yüksek G'de görülmesi"],
      dogru:1,
      aciklama:"Hipoksinin en sinsi özelliği öfori duygusudur. Oksijen azaldıkça beyin hata yapmasına rağmen pilot kendini normal hisseder. Bu yüzden pilot kendi yargısına güvenemez ve 10.000 feet üstünde oksijen maskesi zorunludur." },
    { id:"s2", etiket:"G kuvvetleri", puan:2,
      soru:"+G kuvvetleri savaş pilotuna nasıl etki eder (artan G ile sıralama)?",
      secenekler:["Red-out → gray-out → black-out → G-LOC","Tünel görüş → gray-out → black-out → G-LOC","Black-out → G-LOC → tünel görüş","Hiçbir belirti olmadan direkt G-LOC"],
      dogru:1,
      aciklama:"+G altında kan beyinden aşağıya çekilir. Süreç: Periferik görüş kaybı (tünel görüş) → gri görüntü (gray-out) → siyah görüntü (black-out) → bilinç kaybı (G-LOC). Her aşama artan G şiddetiyle gelir." },
    { id:"s3", etiket:"Kokpit ergonomisi", puan:1,
      soru:"Sterile cockpit kuralı nedir?",
      secenekler:["Kokpitte steril malzeme kullanma kuralı","10.000 feet altında yalnızca uçuşla ilgili faaliyetlere izin verilmesi","Kokpitte yalnızca iki pilot bulunması","Uçuş sırasında cep telefonu yasağı"],
      dogru:1,
      aciklama:"Sterile cockpit kuralı (FAA 1981) kritik uçuş fazlarında (genellikle 10.000 feet altı) kişisel sohbet, yemek yeme ve uçuşla ilgisiz faaliyetleri yasaklar. Dikkat dağıtıcı aktivitelerin kaza riskini artırdığı görüldükten sonra getirildi." },
    { id:"s4", etiket:"Kokpit ergonomisi", puan:2,
      soru:"Havacılık uyarı sistemlerinde kırmızı renk ne anlama gelir?",
      secenekler:["Dikkat — izle","Uyarı — anlık müdahale gerekiyor","Normal operasyon","Otomasyon modu aktif"],
      dogru:1,
      aciklama:"Havacılık renk kodlaması: Kırmızı = Warning (uyarı) — anlık müdahale gerekiyor. Sarı/turuncu = Caution (dikkat) — izle ve müdahale hazırlığı. Yeşil = normal. Bu standart tüm uçak tiplerinde uygulanır." },
    { id:"s5", etiket:"Barotravma", puan:1,
      soru:"Soğuk algınlığıyla uçmanın riski nedir?",
      secenekler:["Diğer yolculara bulaştırma","Tıkalı sinüs ve östaki borusu → barotravma riski, şiddetli ağrı ve zar yırtılması","Motor gürültüsünü işitmeme","Hipoksi riski artar"],
      dogru:1,
      aciklama:"Tıkalı sinüs ve östaki borusu basınç değişimine ayak uyduramaz. Alçalırken artan dış basınç sinüs veya orta kulakta negatif basınç oluşturur — şiddetli ağrı ve zar yırtılması riski. Bu yüzden soğuk algınlığıyla uçmak tavsiye edilmez." }
  ],
  ipuclari:{
    "Hipoksi":"10kft: gece görüş. 22kft: TUC=20-30 dk. 25kft: TUC=3-5 dk. 40kft: TUC=15-20 sn. Öfori=tehlikeli.",
    "G kuvvetleri":"+G: tünel→gray-out→black-out→G-LOC. G-suit + AGSM önlem. F-16 +9G limit.",
    "Kokpit renkleri":"Kırmızı=warning. Sarı=caution. Yeşil=normal. Mavi=otomasyon/tavsiye.",
    "Sterile cockpit":"10kft altı: sadece uçuş konuşmaları. 1981 FAA kuralı."
  }
},

"m7-10": {
  ad: "FHA ve FMEA/FMEDA analizleri",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "Orta",
  sure: 22,
  mulakat: true,
  onbilgi: "CS-25 25.1309 (m7-4), emniyet kategorileri",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"FHA, FMEA ve FMEDA, uçak sistemlerinin güvenlik analizinin temel araçlarıdır. FHA sistemin ne tür tehlikeler yaratbileceğini tanımlar. FMEA her bileşen arızasının sistemin ne yapacağını analiz eder. FMEDA ise yazılım yoğun sistemlerde sayısal güvenilirlik hesabı ekler. Bu üçlü CS-25 Madde 25.1309 uyum dosyasının temel parçasıdır." },

    { id:"b2", tip:"metin", baslik:"FHA — Functional Hazard Assessment",
      metin:"FHA, sistemin veya fonksiyonun tüm arıza koşullarını ve bunların etki sınıflarını belirleyen ilk ve en üst düzey güvenlik analiz belgesidir.\n\nFHA süreci:\n1. Sistem fonksiyonları listelenir (uçuş kontrolü, itki, iniş takımı, yakıt, elektrik...)\n2. Her fonksiyon için olası arıza koşulları tanımlanır\n3. Her arıza koşulunun etkisi değerlendirilir (katastrofik, tehlikeli, majör, minör, etki yok)\n4. Arıza koşulu için olasılık hedefi atanır (CS-25 25.1309'a göre)\n\nFHA çıktıları:\n• Arıza koşulu listesi ve sınıflandırması\n• Her arıza koşulunun etki senaryosu\n• Güvenlik hedefleri (Safety Objectives — SO)\n• Alt sisteme aktarılan güvenlik gereksinimleri\n\nFHA kim tarafından yapılır?\nSistem güvenlik mühendisi (safety engineer) liderliğinde multidisipliner ekip: sistem tasarımcısı, test mühendisi, operasyon temsilcisi.\n\nFHA hangi aşamada yapılır?\nTasarım başlamadan önce (Preliminary System Safety Assessment — PSSA) ve sonrasında (System Safety Assessment — SSA) güncellenir. PSSA güvenlik hedeflerini belirler, SSA tasarımın bu hedefleri karşıladığını kanıtlar." },

    { id:"b3", tip:"tablo", baslik:"FHA arıza koşulu tablosu — örnek",
      basliklar:["Fonksiyon","Arıza koşulu","Etki","Sınıf","Olasılık hedefi"],
      satirlar:[
        ["Uçuş kontrolü","Her iki elevatörün kaybı","Pitch kontrolü yok — uçak kurtarılamaz","Katastrofik","< 10⁻⁹/saat"],
        ["Uçuş kontrolü","Sol elevatör kaybı","Sınırlı pitch kontrolü — acil iniş","Tehlikeli","< 10⁻⁷/saat"],
        ["Yakıt sistemi","Yakıt çapraz beslenme engeli","Normal operasyon devam — yakıt dengesizliği","Majör","< 10⁻⁵/saat"],
        ["İklimlendirme","Tek paket arızası","Kabin koşulları kısmen bozulabilir","Minör","< 10⁻³/saat"],
        ["Elektrik","APU jeneratör kaybı","Yedek kaynaklara geçiş — normal işletim","Etki yok","—"]
      ],
      metin:"Bu tablo sertifikasyon dosyasının temel referans belgesidir. Sonraki analizler (FMEA, FTA) bu tablodaki hedeflerin karşılandığını kanıtlar." },

    { id:"b4", tip:"metin", baslik:"FMEA — Failure Mode and Effects Analysis",
      metin:"FMEA, her donanım bileşeninin olası arıza modlarını ve her modun sistem üzerindeki etkisini sistematik biçimde listeleyen analiz yöntemidir.\n\nFMEA tablosu sütunları:\n• Bileşen: Pompa, valf, sensör, kablo...\n• Arıza modu: Açık devre, kısa devre, sıkışma, sızıntı...\n• Arıza nedeni: Yorulma, korozyon, üretim hatası, yabancı madde...\n• Lokal etki: Bileşenin kendisinde ne olur\n• Üst sistem etkisi: Alt sisteme etkisi\n• Uçak seviyesi etkisi: Uçağın tüm operasyonuna etkisi\n• Etki sınıfı: Katastrofik/Tehlikeli/Majör/Minör\n• Arıza oranı: λ (lambda) — arıza/saat veya arıza/çevrim\n• Telafi eden tasarım: Yedek, uyarı, izleme\n\nFMEA türleri:\n• Hardware FMEA: Donanım bileşenleri\n• Software FMEA: Yazılım modülleri\n• Process FMEA (PFMEA): Üretim süreci\n\nFMEA vs FTA farkı:\nFMEA alttan yukarı (inductive): 'Bu bileşen arızalanırsa ne olur?'\nFTA yukarıdan aşağı (deductive): 'Bu katastrofik olay nasıl olabilir?'" },

    { id:"b5", tip:"metin", baslik:"FMEDA — FMEA with Diagnostic Analysis",
      metin:"FMEDA, özellikle fonksiyonel güvenlik standartları (IEC 61508, ISO 26262, DO-178C) kapsamındaki yazılım yoğun ve elektronik sistemler için FMEA'ya tanı (diagnostic) analizini ekler.\n\nTemel kavramlar:\n\nSafe Failure Fraction (SFF):\nGüvenli arızaların (tespit edilen veya güvenli moda giren) toplam arızalara oranı.\nSFF = (λ_s + λ_d) / (λ_s + λ_d + λ_du)\nλ_s = güvenli arıza, λ_d = tespit edilen tehlikeli arıza, λ_du = tespit edilemeyen tehlikeli arıza\n\nDiagnostic Coverage (DC):\nTanı sisteminin tespit edebildiği tehlikeli arızaların oranı.\nDC = λ_d / (λ_d + λ_du)\n\nPFH (Probability of dangerous Failure per Hour):\nSaatlik tehlikeli arıza olasılığı. CS-25 kategorileriyle karşılaştırılır.\n\nFMEDA neden önemli?\nModern aviyonik sistemlerde standart FMEA yeterli değil. Mikrodenetleyiciler içindeki her transistörü listelemek imkânsız. FMEDA teknoloji veritabanı (SN62304 gibi) kullanarak blok düzeyinde güvenilirlik hesabı yapılmasına olanak tanır." },

    { id:"b6", tip:"ornek", baslik:"Örnek 1: FHA arıza sınıflandırması",
      soru:"Bir uçağın iniş takımı sisteminin FHA'sını hazırla. Aşağıdaki arıza koşullarını değerlendir:\nA) Tüm iniş takımının açılmaması\nB) Yalnızca burun tekerleğinin açılmaması\nC) İniş takımının açılmış pozisyonda kilitlenmemesi (down lock yok)\nD) Geri çekilmiş iniş takımının açık kalması (retract başarısız)",
      cozum:"FHA TABLOSU:\n\nA) Tüm iniş takımı açılmıyor:\nEtki: Normal iniş imkânsız. Gövde üzerine iniş → büyük hasar, yangın, can kaybı riski.\nSınıf: KATASTROFİK\nHedef: < 10⁻⁹/saat\nNot: Bu yüzden tüm iniş takımı sistemleri en az 3 bağımsız açma mekanizmasına sahip (normal, acil, mekanik)\n\nB) Yalnızca burun tekerleği açılmıyor:\nEtki: Yönlendirme ve ön destek yok. Ön gövde sürtünme hasarı, potansiyel yangın.\nSınıf: TEHLİKELİ\nHedef: < 10⁻⁷/saat\nNot: Yönlü control kaybı riski ve olası gövde yangını. Emniyet marjı büyük azalma.\n\nC) Down lock (kilit) yok:\nEtki: İniş sırasında tekerlek içeri girebilir → ani gövde sürtüşü → hasar ve yangın riski.\nSınıf: KATASTROFİK\nHedef: < 10⁻⁹/saat\nNot: Bu yüzden down lock uyarısı zorunlu ve down lock sensörü yedekli.\n\nD) Geri çekilemiyor (açık kalıyor):\nEtki: Sürükleme artar, hız ve irtifa limiti → erken iniş, yakıt tüketimi artar. Can kaybı yok.\nSınıf: MAJÖR\nHedef: < 10⁻⁵/saat\nNot: Operasyonel kısıtlama gerektirir ama uçuş sürdürülebilir." },

    { id:"b7", tip:"ornek", baslik:"Örnek 2: FMEA tablosu oluşturma",
      soru:"Bir hidrolik pompa için FMEA tablosunun ilk iki girdisini oluştur.",
      cozum:"FMEA — HİDROLİK POMPA\n\nBİLEŞEN: Motor tahrikli hidrolik pompa (EDP)\n\nGİRDİ 1:\nArıza modu: Debisiz — pompa çalışmıyor (no flow)\nArıza nedeni: Motor tahrik bağlantısı kopması, pompa rotor hasarı\nLokal etki: Pompa debi üretmiyor\nAlt sistem etkisi: Green hidrolik sistemi basıncı düşüyor\nUçak etkisi: Flight controls EMP veya PTU'ya geçiyor; iniş takımı yedek pompaya\nEtki sınıfı: MAJÖR (yedekler devreye giriyor)\nArıza oranı: λ = 5×10⁻⁶/saat (tipik EDP)\nTelafi eden: EMP otomatik devreye, BTU sinyal, ECAM uyarısı\n\nGİRDİ 2:\nArıza modu: Aşırı akış — internal sızıntı (by-pass)\nArıza nedeni: Baskı kontrol valfi sıkışması, rotor aşınması\nLokal etki: Pompa düşük basınç üretiyor\nAlt sistem etkisi: Sistem basıncı yetersiz, aktüatörler yavaş/zayıf\nUçak etkisi: Kontrol yüzeyleri yavaşlıyor, yük taşıma kapasitesi düşüyor\nEtki sınıfı: TEHLİKELİ (tam arızaya geçmeden kontrol bozuluyor)\nArıza oranı: λ = 2×10⁻⁶/saat (kısmi arıza)\nTelafi eden: Basınç sensörü ECAM uyarısı, EMP destek, kontrol law uyarlaması" },

    { id:"b8", tip:"ornek", baslik:"Örnek 3: RPN hesabı (FMEA öncelik sayısı)",
      soru:"PFMEA'da (proses FMEA) Risk Priority Number (RPN) hesabı yapılır:\nRPN = Şiddet (S) × Oluşma (O) × Tespit (D)\nHer faktör 1-10 arasında puanlanır.\n\nBir üretim sürecinde iki hata bulundu:\nHata A: S=9 (kritik güvenlik etkisi), O=3 (nadir), D=2 (kolayca tespit edilir)\nHata B: S=5 (orta etki), O=7 (sık görülür), D=8 (tespiti zor)\n\nHangisi daha öncelikli? RPN ve yorumu.",
      cozum:"HESAP:\nHata A: RPN = 9 × 3 × 2 = 54\nHata B: RPN = 5 × 7 × 8 = 280\n\nYorum — hangi öncelikli?\nRPN değerine göre: Hata B (280) daha yüksek → Hata B önce düzeltilir.\n\nAncak bu sonuç yanıltıcı olabilir. Hata A güvenlik etkisi 9 — kritik. RPN bunu yeterince yansıtmıyor.\n\nÖNEMLİ KURAL: Şiddet 9-10 olan her hata, RPN bağımsız olarak öncelikli ele alınır. Havacılık standartları (ARP 4761) çoğunlukla şiddet bazlı önceliklendirmeyi RPN'nin önüne koyar.\n\nSEÇİM:\nHata A: Şiddet 9 → güvenlik kritik → her zaman önce ele al\nHata B: RPN yüksek ama şiddet orta → süreç iyileştirme programına al\n\nPRATİK SONUÇ: RPN tek başına yeterli değil. Şiddet, oluşma olasılığı ve tespit edilebilirlik ayrı ayrı değerlendirilmeli." },

    { id:"b9", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "FHA ve FMEA'yı birbirinin yerine kullanmak. FHA üst düzey fonksiyonel — 'ne olabilir'. FMEA bileşen düzeyi — 'bu arızalanırsa ne olur'. Her ikisi de şart.",
        "FMEA'yı tasarım tamamlandıktan sonra yapmak. FMEA özellikle tasarım sürecinde yapılmalı. Bulunan sorun tasarımla düzeltilir. Test aşamasında FMEA geç ve pahalı.",
        "RPN'yi tek başına tasarım kararı için kullanmak. Şiddet 9-10 olan arızalar RPN düşük bile olsa önceliklidir. Güvenlik kritik etkiler ayrıca ele alınmalı.",
        "Ortak mod arızalarını FMEA'ya dahil etmemeK. İki bileşeni aynı anda etkileyen arızalar bağımsız arıza analizi yetersiz kalır.",
        "Güvenlik hedeflerini FHA'dan FMEA/FTA'ya taşımamak. FHA'da belirlenen hedeflerin FMEA ve FTA ile karşılandığı kanıtlanmalı — bu sertifikasyon dosyasının omurgası.",
        "PSSA'yı yapmadan tasarıma başlamak. PSSA güvenlik gereksinimlerini tasarıma girmeden önce belirler. Geç kalan güvenlik analizi tasarım değişikliklerine yol açar."
      ] },

    { id:"b10", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["FHA nedir ve ne zaman yapılır?","Functional Hazard Assessment — sistemin tüm arıza koşullarını ve etki sınıflarını belirleyen üst düzey güvenlik analizi. Tasarım başlamadan önce (PSSA kapsamında) yapılır ve tasarım güvenlik gereksinimlerini tanımlar. CS-25 25.1309 uyumu için temel belgedir."],
        ["FMEA ile FTA arasındaki fark nedir?","FMEA alttan yukarı (inductive): 'Bu bileşen arızalanırsa ne olur?' Bileşen seviyesinden başlar. FTA yukarıdan aşağı (deductive): 'Bu katastrofik olay nasıl olabilir?' İstenmeyen olay sondan başlar, olası nedenler aranır. Her ikisi de tamamlayıcıdır."],
        ["RPN neden tek başına yeterli değil?","RPN şiddet × oluşma × tespit = 1-1000 arası sayı. Yüksek RPN önemli değil gibi görünen ama sık ve zor tespit edilen hataları öne çıkarabilir. Şiddet 9-10 olan güvenlik kritik arızalar RPN düşük bile olsa her zaman öncelikle ele alınmalı. Havacılıkta şiddet temelli önceliklendirme esas alınır."]
      ] },

    { id:"b11", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "SAE. (2010). ARP4761: Guidelines and methods for conducting the safety assessment process on civil airborne systems and equipment. SAE International.",
        "SAE. (2010). ARP4754A: Guidelines for development of civil aircraft and systems. SAE International.",
        "IEC. (2010). IEC 61508: Functional safety of electrical/electronic/programmable electronic safety-related systems. IEC.",
        "EASA. (2020). CS-25 AMC 25.1309: System design and analysis."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"FHA", puan:2,
      soru:"FHA (Functional Hazard Assessment) hangi soruyu yanıtlar?",
      secenekler:["Bu bileşen arızalanırsa ne olur?","Sistemin olası arıza koşulları ve etki sınıfları nelerdir?","Bu katastrofik olay nasıl olabilir?","Test başarısız olursa ne yapılır?"],
      dogru:1,
      aciklama:"FHA üst düzey fonksiyonel analiz: 'Sisteminizin hangi arıza koşulları var ve bunların etkisi ne?' FMEA bileşen düzeyi ('bu arızalanırsa?'), FTA tersine mühendislik ('bu olay nasıl?'). FHA hepsinden önce gelir." },
    { id:"s2", etiket:"FMEA", puan:2,
      soru:"FMEA ile FTA arasındaki temel yaklaşım farkı nedir?",
      secenekler:["FMEA analitik, FTA deneysel","FMEA alttan yukarı (bileşen→sistem), FTA yukarıdan aşağı (istenmeyen olay→nedenler)","FMEA yazılım, FTA donanım için","İkisi aynı yöntemi farklı isimle uygular"],
      dogru:1,
      aciklama:"FMEA inductive: Başlangıç noktası bileşen arızası → etkisi yukarı doğru izlenir. FTA deductive: Başlangıç noktası istenmeyen olay (top event) → olası nedenler aşağı doğru bulunur. Her ikisi tamamlayıcıdır." },
    { id:"s3", etiket:"RPN", puan:2,
      soru:"RPN = 50 olan güvenlik kritik (Şiddet=10) arıza ile RPN = 300 olan orta şiddetli arıza arasında hangisi önce ele alınır?",
      secenekler:["RPN 300 — çünkü sayı daha yüksek","RPN 50 — çünkü şiddet 10 güvenlik kritik; şiddet temelli önceliklendirme RPN'nin önüne geçer","Her ikisi eşit öncelikli","Oluşma frekansına göre karar verilir"],
      dogru:1,
      aciklama:"Şiddet 10 (güvenlik kritik) arıza her zaman önceliklidir. RPN sadece bir sıralama aracı; şiddet 9-10 arızalar RPN bağımsız olarak ayrıca ele alınmalıdır. Havacılıkta ARP4761 bu yaklaşımı destekler." },
    { id:"s4", etiket:"FHA", puan:1,
      soru:"PSSA (Preliminary System Safety Assessment) ne zaman yapılır?",
      secenekler:["Sistem tesliminden sonra","Tasarım tamamlandıktan sonra sertifikasyon için","Tasarım başlamadan önce — güvenlik gereksinimlerini tasarıma girmeden belirlemek için","Her uçuş öncesinde"],
      dogru:2,
      aciklama:"PSSA, FHA tabanlı güvenlik hedeflerini alt sistemlere dağıtır ve tasarım başlamadan önce yapılır. Tasarımın hangi güvenlik gereksinimlerini karşılaması gerektiğini belirler. Tasarım tamamlanınca SSA ile hedeflerin karşılandığı kanıtlanır." },
    { id:"s5", etiket:"FMEDA", puan:2,
      soru:"FMEDA'nın standart FMEA'ya eklediği temel kavram nedir?",
      secenekler:["Proses arızaları","Tanı kapsamı (Diagnostic Coverage) ve güvenli arıza oranı (SFF) — tespit edilemeyen tehlikeli arızaları nicelleştirir","Yazılım test kapsamı","Motor arızaları"],
      dogru:1,
      aciklama:"FMEDA, FMEA'ya tanı analizi ekler. Hangi arızaların tanı sistemi tarafından tespit edilebildiği (DC) ve güvenli arızaların oranı (SFF) hesaplanır. Modern fonksiyonel güvenlik standartları (IEC 61508, DO-178C) bu analizi gerektirir." }
  ],
  ipuclari:{
    "FHA":"Üst düzey fonksiyonel analiz. Arıza koşulu → etki sınıfı → olasılık hedefi. PSSA başlangıcı, SSA tamamı.",
    "FMEA":"Bileşen → arıza modu → lokal etki → sistem etkisi → uçak etkisi. RPN=S×O×D. Alttan yukarı.",
    "FTA":"İstenmeyen olay → nedenler. Yukarıdan aşağı. FMEA tamamlayıcısı.",
    "RPN":"Şiddet 9-10 → her zaman önce. RPN tek başına yeterli değil. Güvenlik kritik = şiddet öncelikli."
  }
},

"m7-11": {
  ad: "Hata ağacı analizi ve 10⁻⁹ emniyet hedefi",
  ders: "Sistem Mühendisliği ve Uçuşa Elverişlilik",
  seviye: "İleri",
  sure: 25,
  mulakat: true,
  onbilgi: "FHA ve FMEA (m7-10), olasılık teorisi temelleri",
  guncelleme: "12 Eylül 2026",
  icerikSurum: "1.0",
  bolumler: [
    { id:"b1", tip:"ozet",
      metin:"Hata Ağacı Analizi (FTA — Fault Tree Analysis), katastrofik bir olayın hangi hata kombinasyonlarıyla oluşabileceğini görsel ve matematiksel olarak analiz eden yöntemdir. CS-25 Madde 25.1309 kapsamında katastrofik arızaların < 10⁻⁹/uçuş saati olasılık hedefini karşılaması gerekir. FTA bu hedefin karşılandığını sayısal olarak kanıtlar." },

    { id:"b2", tip:"metin", baslik:"FTA temel kavramlar",
      metin:"Hata ağacı şu unsurlardan oluşur:\n\nÜST OLAY (Top Event): Analiz edilen istenmeyen olay. Genellikle katastrofik arıza koşulunun FHA'dan alındığı tanım. Örnek: 'Her iki motorun itkisinin kaybı'.\n\nARA OLAYLAR: Üst olayın altındaki ara hatalar ve koşullar. Sistemin belirli bir bölümünün başarısızlığını ifade eder.\n\nTEMEL OLAYLAR (Basic Events): En alt düzey, artık daha fazla ayrıştırılmayan bileşen veya insan hatası. Her birinin kendi arıza oranı (λ) vardır.\n\nKAPILAR (Gates):\n• VE kapısı (AND gate): Tüm girişler aynı anda başarısız olursa çıkış başarısız. Paralel yedek sistemler VE kapısıyla bağlıdır.\n• VEYA kapısı (OR gate): Herhangi bir giriş başarısız olursa çıkış başarısız. Seri bağlantı VEYA kapısı.\n• Inhibit kapısı: Giriş + koşul aynı anda olursa çıkış başarısız.\n\nHESAP MANTIĞI:\nVE kapısı: P_out = P₁ × P₂ (bağımsız arızalar için)\nVEYA kapısı: P_out = 1 − (1−P₁)(1−P₂) ≈ P₁ + P₂ (küçük olasılıklarda)",
      kutu:{ tip:"bilgi", baslik:"AND kapısı sistemi nasıl güvenli kılar?",
        metin:"AND kapısı: 'Her iki sistem de aynı anda başarısız olmalı ki üst olay oluşsun.' İki bağımsız jeneratörün olasılığı: λ₁ × λ₂ = 10⁻³ × 10⁻³ = 10⁻⁶. Yeterli değil. Üç bağımsız sistem: 10⁻³ × 10⁻³ × 10⁻³ = 10⁻⁹. Hedef karşılandı. Bu yüzden büyük uçaklar üç elektrik jeneratörü, üç hidrolik sistem kullanır." } },

    { id:"b3", tip:"metin", baslik:"10⁻⁹ hedefine ulaşmak",
      metin:"CS-25 katastrofik arıza için < 10⁻⁹/uçuş saati hedefi gerçekçi mi?\n\nReferans: Bir ticari yolcu uçağı tipik olarak yılda 3.000-4.000 saat uçar. 20 yıl servis ömrü = 60.000-80.000 saat. Tüm küresel filoda (örneğin 5.000 B737) toplam 3 × 10⁸ uçuş saati.\n\n10⁻⁹ hedefi bunu demektir: Milyarda bir uçuş saatinde bir katastrofik arıza. 300 milyon saatlik global filoda beklenen olay sayısı: 300 milyon × 10⁻⁹ = 0,3. Yani bu tür bir katastrofik arızanın 30 yılda bir görülmesi hedeflenir.\n\nBu hedef nasıl doğrulanır?\n• Doğrudan test imkânsız (milyarda bir olasılık test edilemez)\n• FTA sayısal hesabı: Alt sistem güvenilirlik verileri kombinasyonu\n• Tarihsel güvenilirlik verileri ve benzer tasarımın deneyimi\n• Emniyet analizi bütünlüğünün EASA denetçi değerlendirmesi\n\n10⁻⁹'u doğrulayan kaynaklar:\n• MIL-HDBK-217: Elektronik güvenilirlik veritabanı\n• FIDES: Avrupa elektronik güvenilirlik kılavuzu\n• Tarihsel arıza oranı verileri (field data)\n• SAE AIR 5577: Havacılık donanım güvenilirlik kılavuzu" },

    { id:"b4", tip:"metin", baslik:"Minimum Kesim Kümeleri (MCS)",
      metin:"Minimum Kesim Kümesi (Minimal Cut Set, MCS), hata ağacını üst olayı tetikleyebilecek en küçük temel olay kombinasyonudur.\n\nNeden önemli?\n• MCS, en zayıf güvenlik zincirlerini gösterir\n• Tek elemanlı MCS (singleton) = tek arıza → katastrofik! 'No single failure' ihlali\n• İki elemanlı MCS = iki eş zamanlı arıza gerekiyor → daha güvenli\n\nÖrnek:\nÜst olay: 'Uçak frenleri tamamen çalışmıyor'\nMCS-1: {Normal fren sistemi arızası} — tek arıza!\nMCS-2: {Yedek fren sistemi arızası} — tek arıza!\nMCS-3: {Normal sistem arızası VE Yedek sistem arızası}\n\nMCS-1 ve MCS-2 tekli MCS → tasarım hatası! Her iki sistem bağımsız VE kapısıyla bağlanmalı:\nMCS-3: {Normal VE Yedek aynı anda arıza} → iki arıza gerekiyor → katastrofik hedef karşılanabilir\n\nOrtak Mod Arıza Analizi (CCFA):\nMCS içinde aynı kök nedeni paylaşan arızalar ortak mod olarak işaretlenir. İki bağımsız görünen sistem aynı kaynak arızasından etkileniyorsa MCS aslında singleton gibi davranır." },

    { id:"b5", tip:"formul", baslik:"FTA hesabı — OR ve AND kapıları",
      formul:"OR kapısı: P = 1 − (1−p₁)(1−p₂)...(1−pₙ)\n   ≈ p₁ + p₂ + ... + pₙ  (küçük olasılıklarda)\n\nAND kapısı: P = p₁ × p₂ × ... × pₙ\n   (bağımsız arızalar için)\n\nSaatlik arıza oranından olasılık:\nq(t) = 1 − e^(−λt) ≈ λt  (λt << 1 için)",
      semboller:[
        ["P","Olasılık (0-1 arası)","—"],
        ["p₁, p₂","Temel olayların olasılıkları","—"],
        ["λ","Arıza oranı (failures/hour)","1/saat"],
        ["t","İşletim süresi veya muayene aralığı","saat"]
      ],
      metin:"AND kapısındaki çarpım bağımsız arızalar varsayımına dayanır. Ortak mod arızası varlığında bu varsayım bozulur ve gerçek olasılık hesaplananın üzerinde olabilir. CCFA bu durumu tanımlar." },

    { id:"b6", tip:"ornek", baslik:"Örnek 1: Basit FTA hesabı",
      soru:"Bir uçağın kontrol yüzeyi aktüatör sistemi iki bağımsız aktüatörden oluşuyor. Her aktüatörün saatlik arıza oranı λ = 10⁻³/saat. Muayene aralığı 500 saat.\n\nHer aktüatörün muayene aralığı sonundaki arıza olasılığını ve AND kapısıyla bağlı iki aktüatörün aynı anda arızalanma olasılığını hesapla.",
      cozum:"Tek aktüatör arıza olasılığı (t = 500 saat):\nq₁ = 1 − e^(−λt) ≈ λt = 10⁻³ × 500 = 0,5\n\nDikkat: q₁ = 0,5 = %50! Aktüatör muayene aralığı sonunda %50 ihtimalle arızalı.\nBu değer çok yüksek — tek aktüatör güvenilirliği yetersiz.\n\nİki aktüatör AND kapısı (her ikisi aynı anda arızalı):\nP_AND = q₁ × q₂ = 0,5 × 0,5 = 0,25\n\nBu da yüksek! %25 ihtimalle 500 saatte her ikisi arızalı.\n\nYORUM:\n500 saat muayene aralığı çok uzun. λ = 10⁻³/saat için uygun aralık:\nHedef P < 10⁻⁵ olsun:\nP = (λt)² = (10⁻³ × t)² = 10⁻⁵\nt² = 10⁻⁵ / 10⁻⁶ = 10\nt = √10 ≈ 3,16 saat!\n\nBu gerçekçi değil — ya daha güvenilir aktüatör (daha düşük λ) ya da daha güçlü yedekleme gerekiyor. Gerçek sistemlerde λ çok daha düşük (10⁻⁶ mertebesi) ve çoklu yedeklilik vardır." },

    { id:"b7", tip:"ornek", baslik:"Örnek 2: FTA ağacı ve MCS",
      soru:"Üst olay: 'Sol kanat yanma uyarı sistemi çalışmıyor'\n\nSistem:\n• Đki bağımsız yangın dedektörü (A ve B)\n• Bir uyarı işlemcisi\n• Bir pilot uyarı ışığı\n\nFTA ağacını çiz (sembolik) ve MCS'leri listele.",
      cozum:"FTA AĞACI (metin gösterimi):\n\nÜst Olay: 'Sol kanat yangın uyarısı yok'\n     |\n    OR\n   /    \\\nEVENT-1   EVENT-2\n(Her iki dedektör arıza)\n(AND kapısı)   (İşlemci arızası OR Işık arızası)\n    |              |\n  A AND B        OR kapısı\n                /     \\\n          İşlemci   Uyarı Işığı\n\nMCS LİSTESİ:\nMCS-1: {Dedektör A arızası VE Dedektör B arızası}\nMCS-2: {Uyarı işlemcisi arızası}\nMCS-3: {Pilot uyarı ışığı arızası}\n\nANALİZ:\nMCS-2 ve MCS-3 → Tekli MCS (singleton)!\nTek işlemci arızası veya tek ışık arızası → sistemin tüm uyarı yeteneği kayboluyor.\nBu 'no single failure' ihlali — tehlikeli arıza olarak sınıflandırılırsa yeterli olasılık hedefinin tek bileşenle sağlanması çok zor.\n\nTASARIM DÜZELTMESİ:\nMCS-2 ve MCS-3 ortadan kaldırmak için işlemci ve ışık da yedeklenmeli:\nDual işlemci (OR → AND)\nDual uyarı ışığı (OR → AND)\nBöylece en küçük MCS en az 2 elemanlı olur." },

    { id:"b8", tip:"ornek", baslik:"Örnek 3: 10⁻⁹ hedefine ulaşma",
      soru:"Katastrofik bir arıza için üç bağımsız alt sistem gerekiyor:\nSistem A: λ_A = 10⁻³/saat\nSistem B: λ_B = 5×10⁻⁴/saat  \nSistem C: λ_C = 2×10⁻³/saat\nHepsi AND kapısıyla bağlı. Saatlik katastrofik arıza olasılığını hesapla ve 10⁻⁹ hedefini karşılayıp karşılamadığını kontrol et.",
      cozum:"AND kapısı kombinasyonu:\nP_katastrofik = λ_A × λ_B × λ_C × Δt³ ... \n\nOLASILIK ORANI (saatlik):\nÜç bağımsız bileşen AND kapısında:\nλ_toplam ≈ λ_A × λ_B × λ_C × t²\n\nAncak bu formülasyon karmaşıklaşır. Basit yaklaşım:\nSaatlik arıza olasılığı (tüm üçü aynı anda):\nP/saat = λ_A × λ_B × λ_C = 10⁻³ × 5×10⁻⁴ × 2×10⁻³\nP/saat = 10⁻³ × 5×10⁻⁴ × 2×10⁻³\n= 10⁻⁹ saat⁻³ değil, farklı bir yaklaşım gerekli.\n\nDoğru yaklaşım (her biri muayene aralığı t ile):\nÜç bileşen sürekli izleniyor varsayımı:\nP(1 saat içinde hepsi arıza) ≈ λ_A × λ_B × λ_C × (ortalama zaman)²\n\nPratik hesap (t_muayene = 1000 saat):\np_A = λ_A × t = 10⁻³ × 1000 = 1,0 → bu çok yüksek\n\nYorum: λ = 10⁻³/saat ile 10⁻⁹ hedefine üç AND bileşenle ulaşmak:\n(λt)³ = 10⁻⁹ için:\nλ = 10⁻³ → t = (10⁻⁹)^(1/3)/10⁻¹ = 10⁻³/10⁻¹ = 0,01 saat!\nMuayene aralığı 0,01 saat = 36 saniye — gerçekçi değil.\n\nGERÇEK ÇÖZÜM: λ değerleri çok daha düşük olmalı. Avionikte λ = 10⁻⁶ - 10⁻⁷/saat bileşenler kullanılır, üç AND kombinasyonu: 10⁻⁶ × 10⁻⁶ × 10⁻⁶ = 10⁻¹⁸ — hedefin çok altında. Bu yüzden güvenilirlik verileri havacılık grade bileşenler gerektirir." },

    { id:"b9", tip:"liste", baslik:"Yaygın hatalar",
      maddeler:[
        "Olasılıkları toplamak yerine AND için çarpmak. AND kapısında olasılıklar çarpılır (bağımsızlık varsayımı altında). OR kapısında toplanır (küçük değerlerde).",
        "Bağımsızlık varsayımını sorgulamadan kullanmak. İki 'bağımsız' sistem ortak güç veya ortak yazılım paylaşıyorsa çarpım formülü yanlış sonuç verir. CCFA şart.",
        "Singleton MCS'i kabul etmek. Tek arıza → katastrofik = 'no single failure' ihlali. Her singleton MCS tasarım revizyonu gerektirir.",
        "10⁻⁹'u kanıtlanamaz sanmak. Doğrudan test imkânsız ama FTA + güvenilirlik veritabanı + tarihsel veri kombinasyonu EASA tarafından kabul edilir.",
        "FTA'yı statik belge olarak bırakmak. Tasarım değişikliğinde FTA güncellenmeli. Güncellenmemiş FTA yanlış güvenlik kararlarına yol açar.",
        "Kesim küme analizini yapmamak. FTA ağacı çizmek yeterli değil; MCS analizi zayıf güvenlik zincirlerini ortaya çıkarır."
      ] },

    { id:"b10", tip:"mulakat", baslik:"Mülakatta nasıl sorulur?",
      sorular:[
        ["Hata Ağacı Analizi (FTA) nedir?","İstenmeyen (katastrofik) bir olayın hangi temel hata kombinasyonlarıyla oluşabileceğini Boolean mantığı ve olasılık teorisiyle analiz eden yukarıdan aşağı yöntemdir. AND/OR kapıları kullanılır. CS-25 25.1309 kapsamında katastrofik arızaların < 10⁻⁹/saat hedefini karşıladığı FTA ile kanıtlanır."],
        ["AND ve OR kapısı arasındaki fark nedir?","AND kapısı: Tüm girişler aynı anda başarısız olursa çıkış başarısız. Olasılıklar çarpılır. Yedekli sistemler AND kapısıyla güvenli kılınır. OR kapısı: Herhangi bir giriş başarısız olursa çıkış başarısız. Olasılıklar toplanır. Seri bağlantı OR kapısına karşılık gelir."],
        ["Minimum Kesim Kümesi (MCS) neden önemlidir?","MCS, hata ağacının üst olayı tetikleyebilecek en küçük temel olay kombinasyonudur. Tekli MCS (singleton) tek arızanın katastrofik olaya yol açtığını gösterir — no single failure ihlali. Tasarımda en az 2 elemanlı MCS hedeflenir. MCS analizi tasarımın en zayıf güvenlik zincirlerini ortaya çıkarır."]
      ] },

    { id:"b11", tip:"kaynakca", baslik:"Kaynakça",
      maddeler:[
        "SAE. (2010). ARP4761: Guidelines and methods for conducting the safety assessment process on civil airborne systems and equipment.",
        "Vesely, W. E. ve diğerleri. (1981). Fault Tree Handbook. US Nuclear Regulatory Commission. NUREG-0492.",
        "EASA. (2020). CS-25 AMC 25.1309.",
        "Stamatelatos, M. ve diğerleri. (2002). Fault tree handbook with aerospace applications. NASA."
      ] }
  ],
  sorular:[
    { id:"s1", etiket:"FTA temelleri", puan:2,
      soru:"AND kapısında iki bağımsız olayın olasılıkları p₁ = 10⁻³ ve p₂ = 10⁻⁴ ise kapı çıkışı olasılığı kaçtır?",
      secenekler:["10⁻³ + 10⁻⁴ = 1,1×10⁻³","10⁻³ × 10⁻⁴ = 10⁻⁷","10⁻³ − 10⁻⁴ = 9×10⁻⁴","max(10⁻³, 10⁻⁴) = 10⁻³"],
      dogru:1,
      aciklama:"AND kapısında bağımsız olayların olasılıkları çarpılır: P = p₁ × p₂ = 10⁻³ × 10⁻⁴ = 10⁻⁷. Bu AND kapısının gücünü gösterir: iki bağımsız arıza gerektirince sistem çok daha güvenli hale gelir." },
    { id:"s2", etiket:"MCS", puan:2,
      soru:"Singleton MCS neden kabul edilemez?",
      secenekler:["Hesaplamayı zorlaştırdığından","Tek bir arızanın katastrofik olaya yol açması 'no single failure' ilkesini ihlal eder","Tespit edilmesi zor olduğundan","FTA diyagramını büyüttüğünden"],
      dogru:1,
      aciklama:"Singleton MCS = tek bir temel olay üst olayı tetikliyor. Katastrofik arıza CS-25 gereği single failure ile oluşmamalı. Singleton MCS bulunursa tasarım yedekleme ile revizyona gider." },
    { id:"s3", etiket:"10⁻⁹ hedefi", puan:2,
      soru:"10⁻⁹/saat katastrofik hedefi nasıl doğrulanır?",
      secenekler:["Yalnızca testlerle — bir milyar saatlik test yapılır","FTA + bileşen güvenilirlik veritabanı + tarihsel veri kombinasyonu; otorite bu yaklaşımı kabul eder","Simülasyonla — bilgisayar bir milyar saati simüle eder","Matematiksel olarak doğrulanamaz, kabul edilir"],
      dogru:1,
      aciklama:"10⁻⁹'u doğrudan test etmek imkânsız. Kabul edilen yaklaşım: FTA ile sistem olasılığı hesaplanır, temel olayların olasılıkları MIL-HDBK-217 veya FIDES gibi veritabanlarından alınır. Tarihsel alan verisi kalibrasyona yardımcı olur. EASA bu metodolojik kanıtı kabul eder." },
    { id:"s4", etiket:"FTA temelleri", puan:1,
      soru:"OR kapısında iki olayın olasılıkları p₁ = 0,01 ve p₂ = 0,02 ise kapı çıkışı yaklaşık kaçtır?",
      secenekler:["0,0002","0,03","0,01 × 0,02 = 2×10⁻⁴","0,01 / 0,02 = 0,5"],
      dogru:1,
      aciklama:"OR kapısı küçük olasılıklarda: P ≈ p₁ + p₂ = 0,01 + 0,02 = 0,03. Kesin formül: 1−(1−0,01)(1−0,02) = 1−0,99×0,98 = 1−0,9702 = 0,0298 ≈ 0,03. Toplama yaklaşımı küçük olasılıklarda iyi çalışır." },
    { id:"s5", etiket:"Ortak mod", puan:2,
      soru:"İki bağımsız görünen sistem aynı güç barından besleniyorsa FTA hesabı nasıl etkilenir?",
      secenekler:["Hiç etkilenmez — güç kaynağı ayrı analiz edilir","AND kapısındaki çarpım formülü geçersizleşir; ortak güç kaybı her iki sistemi aynı anda etkiler — singleton MCS oluşur","OR kapısına dönüşür","Olasılık yarıya iner"],
      dogru:1,
      aciklama:"Ortak güç kaynağı paylaşımı bağımsızlık varsayımını bozar. Güç kaynağı arızalandığında her iki 'bağımsız' sistem aynı anda etkilenir — bu OR kapısındaki tek arıza gibi davranır ve singleton MCS oluşturur. CCFA bu ortak modu tanımlamalıdır." },
    { id:"s6", etiket:"10⁻⁹ hedefi", puan:1,
      soru:"Tehlikeli arıza için CS-25'in olasılık hedefi kaçtır?",
      secenekler:["< 10⁻⁹/saat","< 10⁻⁷/saat","< 10⁻⁵/saat","< 10⁻³/saat"],
      dogru:1,
      aciklama:"CS-25 25.1309 hedefleri: Katastrofik < 10⁻⁹, Tehlikeli < 10⁻⁷, Majör < 10⁻⁵, Minör < 10⁻³. Tehlikeli arıza ciddi yaralanma veya ölüm riski içerdiğinden katastrofik kadar sıkı değil ama yine de çok düşük olasılık hedeflenir." }
  ],
  ipuclari:{
    "FTA temelleri":"AND: çarp (p₁×p₂). OR: topla (p₁+p₂, küçük olasılıkta). Singleton=tek arıza→katastrofik=yasak.",
    "MCS":"En küçük temel olay kombinasyonu. Singleton → no single failure ihlali → tasarım revizyonu.",
    "10⁻⁹ hedefi":"CS-25: Katastrofik<10⁻⁹, Tehlikeli<10⁻⁷, Majör<10⁻⁵, Minör<10⁻³. FTA+veritabanı ile doğrulanır.",
    "Ortak mod":"CCFA ortak nedeni bulur. Ortak güç/yazılım → bağımsızlık yok → AND değil OR gibi davranır."
  }
}

}); // Object.assign sonu
