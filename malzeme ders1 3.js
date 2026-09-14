// =====================================================
// MALZEME MODÜLÜ — Ders 1–8 (konuIcerik bloklarına eklenecek)
// =====================================================

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
