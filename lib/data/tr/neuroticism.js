module.exports = {
  domain: 'N',
  title: 'Duygusal Denge',
  shortDescription: 'Duygusal Denge, olumsuz duyguları(üzülme, vb.) deneyimleme eğilimini ifade eder.',
  description: `Nevrotiklik, duygusal tutarsızlığı ifade eder. Sıradan durumlar bile onlar için tehdit edicidir.
  Küçük hayal kırıklıkları, onlar için üstesinden gelinemeyecek kadar büyüktür. Olumsuz duygusal tepkileri uzun sürelidir.
  Benliğini kabul edememe, aşırı mükemmeliyetçi olma, yapıcı eleştiriye dahi açık olamama durumları gözlemlenir.
  Adler nevrozu sürekli etkinlik gösteren aşağılık duygusu olarak tanımlar.İleri aşamalarında kişilik bozukluğu olarak karşımıza çıkar.
  Nevrotizm ölçeğinde düşük puana sahip bireylerde duygusal denge gözlemlenir. Olumsuz duygu durumlarıyla baş etmede iyidirler.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Duygusal Denge alanında puanınız düşük, bu sizin son derecede sakin, rahat ve soğukkanlı olduğunuzu gösteriyor. 
      Genelde çoğu insanı sterese ve duygusal yoğunluğa sevk eden durumlarda siz onların aksine yoğun duygularla tepki göstermiyorsunuz. 
      Bu özelliğiniz bazen ikili ilişkilerinizde sorunlara yol açsa dahi, çoğu insanın zorlanacağı durumlarda başarı potansiyelinizi arttırır.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Duygusal Denge alanında aldığınız puan ortalama bir seviyede, ve bu sizin oluşan durumlarda verdiğiniz duygusal 
      tepkinin çoğunlukla genel popülasyondan farklı olmadığını gösterir. Stresli ve sinir bozucu durumlar sizi biraz üzebilir, 
      ama genel anlamda konuşmak gerekirse bu tarz durumların üstesinden gelmekte çok zorluk çekmiyorsunuz.`
    },
    {
      score: 'high', // do not translate this line
      text: `Duygusal Denge alanında aldığınız puan yüksek, bu sizin belli durumlar karşısında kolayca üzebileceğinizi gösterir. 
      Çoğu insanın "Hayat bu, olur." deyip geçtiği durumlarda bile çoğunluğun aksine kolayca üzülebilirsiniz. 
      Bunun dışında, çevreniz sizi hassas ve duygusal olarak görüyor olabilir.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Anksiyete',
      text: `Endişe seviyesi yüksek olan kişilerin beyninde bulunan "savaş ya da kaç" sistemi çok kolay ve çok sık bir şekilde 
      çalışır. Bu nedenle, anksiyete seviyesi yüksek olan kişiler genellkle tehlikeli bir şey olacakmış gibi hissederler. 
      Belirli durumlardan korkuyor olabilirler veya  sadece genel olarak korku duygusuna diğer insanlardan bir tık daha fazla 
      sahip olabilirler. Anksiyete seviyesi yüksek olan kişiler sürekli gergindirler ve bunu etraflarına kolayca hissettirebilirler. 
      Tam aksine bu alanda düşük alan kişiler ise sakin ve endişe sahibi değillerdir.`
    },
    {
      facet: 2,
      title: 'Öfke',
      text: `Öfke alanında yüksek puan alan kişiler, işler yolunda gitmediği zaman çileden çıkarlar. 
      Kendilerine adil davranılması konusunda oldukça hassastırlar ve aldatıldıklarını hissederlerse çok kırgın ve acı içinde 
      hissederler. Bu ölçek kişilerin yaşanan olaylar karşısında öfkelenmeye yatkınlığını ölçer; kişinin böyle durumlara karşı 
      düşmanlık veya kızgınlık ifade edip etmemesi kişinin Uyumluluk seviyesine bağlıdır. Öfke puanı düşük olan kişiler ise kolayca 
      ve sıkça öfkelenmezler.`
    },
    {
      facet: 3,
      title: 'Depresyon',
      text: `Bu ölçek, kişilerin üzgün, kederli ve cesareti kırılmış hissetme eğilimini ölçer. Yüksek puan alanlar, 
      enerjiden yoksundur ve herhangi bir işe başlamakta zorluk çekerler. Bunun dışında sıkça aynı konuyu düşünme eğilimi gösterirler. 
      Düşük alanlar ise bu depresif duygulardan özgür olma eğilimindedir.`
    },
    {
      facet: 4,
      title: 'Kişisel Farkındalık',
      text: `Kendini iyi tanıyan kişiler, başkalarının onlar hakkında ne düşündüğü konusunda hassastır. Reddedilme ve alay edilme 
      konusundaki endişeleri, başkalarının yanında utangaç ve rahatsız hissetmelerine neden olur. Kolayca utanabilirler ve genelde 
      utanmış hissederler. Başkalarının onları eleştirme veya dalga geçme konusundaki korkuları abartılıdır ve gerçekçi değildir, 
      fakat sahip oldukları bu garip davranış eğilimi ve rahatsızlıkları düşündükleri korkuların gerçekleşmesini sağlayabilir. Düşük 
      puan alanlar ise, aksine, herkesin onları izlediğini ve yargıladığını düşünmez, bununla birlikte sosyal ortamlarda gergin 
      hissetmezler.`
    },
    {
      facet: 5,
      title: 'Dengesizlik',
      text: `Dengesiz kişiler güçlü bir arzulama içgüdüsüne sahiplerdir ve buna karşı direnmekte zorlandıklarını ifade ederler. 
      Genellikle, uzun vadeli hedeflerin peşinde koşmaktansa gündelik veya diğer bir deyişle kısa vadeli hedeflerin etrafında bir 
      yaşam oluştururlar. Düşük puan alanlar ise, genellikle bu tarz çok güçlü bir arzulama duygusu yaşamazlar ve sonuç olarak bu 
      tarz işlerin peşine pek düşmezler.`
    },
    {
      facet: 6,
      title: 'Kırılganlık',
      text: `Kırılganlık alanında yüksek puan alan kişiler, baskı veya stres altında panik, kafa karışıklığı ve çaresizlik 
      hissetmeye yatkındırlar. Düşük puan alanlar ise bu tarz durumlarda daha dengeli, özgüvenli ve düşüncelerinde 
      netlik hissederler.`
    }
  ]
}