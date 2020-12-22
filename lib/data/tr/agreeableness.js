module.exports = {
  domain: 'A',
  title: 'Uyumluluk',
  shortDescription: 'Uyumluluk, işbirliği ve sosyal uyumla ilgili bireysel farklılıkları yansıtır. Uyumlu bireyler başkalarıyla iyi geçinmeye değer verir.',
  description: `Uyumlu insanlar,arkadaşcanlısı cömert ve sağlıklı ilişkiler yürütebilen insanlardır.
  Tüm insanların iyi olduklarına inanırlar. Verdikleri sözlere değer verirler.
  `,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Uyumluluk puanınız düşük, bu diğer insanların ihtiyaçlarına seninkilerden daha az önem verdiğini gösteriyor. 
      Bununla birlikte insanlar sizi ulaşılmaz, eleştirici ve taviz vermeyen biri olarak görüyor.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Uyumluluk puanınız ortalama bir seviyede ve bu başka insanların ihtiyaçları için az da olsa endişelendiğinizi gösterir. 
      Ancak genelde başkaları için fedakarlıkta bulunmaktan kaçınırsınız.`
    },
    {
      score: 'high', // do not translate this line
      text: `Uyumluluk puanınız yüksek, bu başkalarının ihtiyaçları ve onların iyi durumda olmasını önemsediğinizi gösterir. 
      Aynı zamanda bu alanda yüksek bir skor sizin hoş, sempatik ve kooperatif olduğunuzu gösterir.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Güven',
      text: `Güven puanı yüksek olan bir kişi çoğu insanın kendisi gibi adil, dürüst ve iyi niyetli olduğunu düşünür. 
      Güven puanı düşük olanlar ise diğer insanların bencil, aldatıcı ve potansiyel bir tehdit olarak görürler.`
    },
    {
      facet: 2,
      title: 'Ahlaklı',
      text: `Bu ölçekte yüksek puan alanlar, diğer insanlarla ilişkilerinde bahane veya manipülasyonun gereksiz olduğunu düşünürler. 
      Bu nedenle samimiyete ve açık sözlülüğe inanırlar. Düşük puan alanlar ise sosyal ilişkilerinde az da olsa aldatmanın(yalan söylemenin, vb.) 
      gerekli olduğunu düşünürler. Genellikle insanlar bu ölçekte yüksek puan alan kişiler ile ilişki kurmanın daha basit olduğunu düşünürler. 
      Tam aksine, insanlar bu ölçekte düşük puan alanlar yani ilişkilerinde sade ve açık olmayanlar ile ilişki kurmanın zor olduğunu düşünür. 
      Bunun yanında düşük puan alanların kötü insanlar değil de sadece ilişkilerinde daha korumacı davrandıklarını, 
      kendileri ile alakalı her şeyi ortaya dökmek istemediklerini düşünmek daha doğru olur.`
    },
    {
      facet: 3,
      title: 'Fedakarlık',
      text: `Fedakar insanlar başkalarına yardım etmenin ödüllendirici olduğunu düşünür. 
      Bundan dolayı genelde ihtiyaç içinde olan insanlara yardım etmekte diğer insanlara nazaran daha istekli olurlar. 
      Fedakar insanlar bunu yapmanın fedakarlıktan ziyade bir çeşit kendini gerçekleştirme olarak görür. 
      Bu ölçekte düşük puan alanlar, başkalarına yardım etmeyi pek sevmez. 
      Başka insanlardan gelen yardım taleplerini kendini gerçekleştirme fırsatı yerine bir çeşit dayatma olarak görürler.`
    },
    {
      facet: 4,
      title: 'İş Birliği',
      text: `Bu ölçekte yüksek puan alan kişiler, ortaya çıkan çıkar çatışmasından hoşlanmazlar. 
      Ödün vermeye isteklilerdir veya başkalarıyla daha iyi geçinmek için kendi ihtiyaçlarını inkar edebilirler. 
      Bu ölçekte düşük alan kişiler ise, tam aksine kendi istediklerini elde etmek için diğer insanları zorlamaya daha yatkındır. `
    },
    {
      facet: 5,
      title: 'Tevazu',
      text: `Bu ölçekte yüksek puan alanlar, genelde herhangi bir konuda diğer insanlardan daha iyi olduklarını ifade etmekten kaçınırlar. 
      Bazı durumlarda, bu tutum düşük özgüven veya düşük öz saygıdan dolayı gerçekleşebilir. 
      Kendilerinin bazı konularda diğerlerinden üstün gören kişiler ise, genelde diğer insanlar tarafından anlaşılamaz ve kibir olarak görülür.`
    },
    {
      facet: 6,
      title: 'Sempati',
      text: `Bu ölçekte yüksek puan alan kişiler yufka yürekli ve şefkatli olarak değerlendirilir. 
      Başkalarının acılarını kolayca hissedebilir ve onlara karşı acıma duygusuna kapılabilirler. 
      Düşük puan alanlar ise insanların çektiği acılardan fazla etkilenmezler. 
      Kendileri ile sebep odaklı objektif kararlar verdikleri için gurur duyarlar. 
      Şefkatli insanların aksine bir olayın gerçekleri ve olay hakkında tarafsız adaletin daha önemli olduğunu düşünürler.`
    }
  ]
}