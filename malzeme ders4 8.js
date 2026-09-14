// =====================================================
// MALZEME MODÜLÜ — Ders 4+ (mal3 sonrasına eklenecek)
// =====================================================

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
