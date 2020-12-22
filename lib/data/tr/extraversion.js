module.exports = {
  domain: 'E',
  title: 'Dışadönüklük',
  shortDescription: 'Dışadönüklük, olumlu duygular, diğerlerinin teşvik ve ortaklıklarını arama eğilimi olarak tanımlanır',
  description: `Bu özellik dış dünyayla açık bir etkileşim ile kendini gösterir.
  Dışadönükler insanlarla olmaktan eğlenirler, genellikle enerji dolu olarak tanımlanırlar.
  Heyecan olanaklarına karşılık 'Evet!' ya da 'Hadi gidelim!' diyebilecek olan; coşkulu, hareket-odaklı bireyler olma eğilimindedirler.
  Grup içinde konuşmayı severler, kendilerini öne çıkarırlar ve ilgi çekerler.İçedönükler laf kalabalığı, enerji ve dışadönüklerin eylem seviyesinden uzaktırlar.
  Sessiz, şatafatsız, ağır ve sosyal dünyayla daha az ilgili olma eğilimindedirler.
  Sosyal katılımlarının az olması utangaçlık veya bunalım olarak yorumlanmamalıdır.
  İçedönükler, sadece, dışadönüklerden daha az dürtüye ve daha fazla yalnız zamana ihtiyaç duyarlar..
  <br /><br />
  Dışadönükler, depresyona uzak enerjilerini etrafındakilere yayan kişilerdir.
  <br /><br />
  İçe dönük kişiler dışarıdan bağımsız karakterler olarak görülür,iletişimde çekingen olurlarlar,grup içinde etkisiz eleman gibi davranırlar.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Dışadönüklük puanınız düşük bu sizin içe dönük, içine kapanık ve sessiz biri olduğunuzu belirtir. 
      Yalnızlıktan hoşlanıyorsun ve yalnızlığın tadını çıkartmayı biliyorsun. 
      Aynı zamanda düşük puan sizin daha küçük ama daha sağlam bir arkadaş çevresine sahip olduğunuzu gösterir.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Dışadönüklük puanınız ortalama bir seviyede, bu sizin yalnızlık kalesinde tıkalı kaldığınızı veya sizin bir 
      muhabbet tellalı olduğunu göstermez. Ortalama bir puan sizin hem yalnız hem de başkalarıyla vakit geçirmeyi 
      sevdiğinizi gösterir.`
    },
    {
      score: 'high', // do not translate this line
      text: `Dışadönüklük puanınız yüksek, bu sizin sosyal, enerjik ve hayat dolu olduğunuzu gösterir. 
      Genelde kendinizden ziyade başka insanlarla vakit geçirmeyi seversiniz.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Arkadaşcanlısı Olmak',
      text: `Dost canlısı insanlar, hakikaten arkadaşlarını, dostalarını severler ve pozitif duygularını yakınlarına açıkça 
      ifade ederler. Hızlı arkadaş edinirler ve onlar için yakın, sıkı ilişkiler kurmak kolaydır. Bu ölçekte düşük puan almak 
      sizin düşmancıl veya soğuk birisi olduğunuzu göstermez, ancak etrafınıza uzak ve çekingen olduğunuzu hissettirme eğiliminde 
      olduğunuzu gösterir.`
    },
    {
      facet: 2,
      title: 'Sokulganlık', // HAKAN KÜSTAHLIK DİYE ÇEVİRMİŞ
      text: `Sokulgan insanlar başkalarının arkadaşlığını hoş bir şekilde uyarıcı ve ödüllendirici bulurlar. 
      Bunun dışında kalabalıkların heyecanından(milli maçlar, siyasi mitingler, vb.) zevk alırlar. 
      Düşük puan alanlar ise bunalmış hissetme eğilimindedirler ve kalabalık ortamlardan kaçınmaya çalışırlar. 
      Bu onların insanlarla birlikte olmayı sevmediklerini göstermez, fakat onların gizliliğe ve kendileri ile zamana 
      olan ihtiyaçları bu ölçekte yüksek yapanlardan çok daha fazladır.`
    },
    {
      facet: 3,
      title: 'Girişkenlik',
      text: `Girişkenlik ölçeğinde yüksek puan alan insanlar, düşüncelerini konuşarak ifade etmeyi, 
      sorumluluk almayı ve başkalarını yönetmeyi severler. Genellikle grup içerisinde lider olmaya yatkınlardır. 
      Düşük puan alanlar ise konuşmayı çok sevmezler, etliye sütlüye karışmazlar ve gruptaki diğer insanların sorumluluk 
      almasını beklerler(onların liderlik yapmasını beklerler).`
    },
    {
      facet: 4,
      title: 'Aktiflik',
      text: `Aktif bireylerin hayat tempoları genellikle hızlıdır ve halk arasındaki deyişle hızlı yaşamayı severler. 
      Boş zamana tahammülleri yoktur ve her anlarını güzel bir faaliyet ile geçirmekte ısrarcılardır. 
      Bu ölçekte düşük puan alanlar ise hayatlarını daha yavaş bir tempoda idame ettirmekten hoşlanırlar.`
    },
    {
      facet: 5,
      title: 'heyecan arayışı',
      text: `Bu ölçekte yüksek puan alanlar, bulundukları ortamda büyük bir uyarıcı etken olmadığı durumlarda hızlıca 
      sıkılmaya yatkınlardır. Parlak ışıkları ve bir iş peşinde koşturmaya aşıklardır. Diğer insanlara nazaran risk 
      almaya ve heyecan aramaya yatkınlardır. Düşük puan alanlar ise gürültü ve kargaşadan bunalmışlardır ve heyecan 
      aramanın felsefine tümüyle karşılardır.`
    },
    {
      facet: 6,
      title: 'neşeli',
      text: `Bu ölçek kişilerin olumlu ruh halini ve duyguları ölçer. Tipik olarak bu ölçekte yüksek 
      puan alan kişiler mutluluk dahil bir dizi olumlu duyguyu(coşku, iyimserlik, neşe, vb.) deneyimlerle. 
      Tam aksine düşük puan alanlar ise bu tarz duyguları sıklıkla deneyimlemeye yatkın değillerdir.`
    }
  ]
}