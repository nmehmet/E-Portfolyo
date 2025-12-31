# 🚀 Necdet Mehmet Güneş — Kişisel Portfolyo

Bu depo, kişisel portfolyo sitemin kaynak kodlarını içerir. Modern, hızlı ve erişilebilir bir portfolyo deneyimi sunmak için sade (vanilla) HTML/CSS/JavaScript kullanılarak geliştirilmiştir.

<a href="https://nmehmet.github.io/E-Portfolyo/" target="_blank" rel="noopener noreferrer">Canlı Site</a> 

---

İçindekiler
- [Genel Bakış](#genel-bakış)
- [Öne Çıkan Özellikler](#öne-çıkan-özellikler)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Dosya Yapısı](#dosya-yapısı)
- [Yerel Çalıştırma](#yerel-çalıştırma)
- [Kullanım ve Özelleştirme](#kullanım-ve-özelleştirme)
- [Katkıda Bulunma](#katkıda-bulunma)
- [İletişim](#iletişim)
- [Lisans](#lisans)

---

## Genel Bakış
Bu portfolyo; mobil öncelikli (mobile-first), erişilebilir, SEO dostu ve performans odaklı bir tasarım hedefiyle hazırlanmıştır. Statik bir site olduğu için hızlı yüklenir ve kolayca barındırılabilir.

## Öne Çıkan Özellikler
- Responsive tasarım (mobil, tablet, masaüstü uyumu)
- Dark mode desteği
- Glassmorphism görsel stilleri
- Scroll Spy / bölüm algılama: IntersectionObserver ile performanslı navigasyon güncelleme
- Semantic HTML ve temel SEO meta etiketleri
- Kolay PDF CV entegrasyonu

## Kullanılan Teknolojiler
- Saf (vanilla) HTML5
- CSS3 (Değişkenler, Media Queries)
- JavaScript (ES6+), IntersectionObserver API
- Statik dosyalar: resimler, PDF (CV), küçük JS dosyaları

## Dosya Yapısı
Aşağıdaki yapı projeyi hızlıca anlamanız için özetlenmiştir:

```bash
.
├── assets/             # CV (PDF) ve diğer statik dökümanlar
├── images/             # Profil fotoğrafı ve proje görselleri
├── scripts/
│   └── main.js         # Scroll etkileşimleri ve dinamik UI mantığı
├── style.css           # Özel stiller, CSS değişkenleri ve media queries
└── index.html          # Ana sayfa iskeleti
```

## Yerel Çalıştırma
Projeyi kendi bilgisayarınızda çalıştırmak için:

1. Repoyu klonlayın:
```bash
git clone https://github.com/nmehmet/E-Portfolyo.git
```

2. Proje klasörüne girin:
```bash
cd E-Portfolyo
```

3. Basit bir yerel sunucu ile açın (önerilir — bazı tarayıcı özellikleri dosya:// ile kısıtlı olabilir):

Python 3 ile:
```bash
python -m http.server 8000
# sonra tarayıcıda: http://localhost:8000
```

Alternatif olarak, `index.html` dosyasını doğrudan tarayıcıda açabilirsiniz, fakat IntersectionObserver veya benzeri API'lerin davranışı bazı durumlarda local dosya protokolünde kısıtlı olabilir.

## Kullanım ve Özelleştirme
- CV'yi güncellemek için `assets/` klasöründeki PDF dosyasını değiştirin veya yeni bir dosya ekleyip `index.html` içindeki bağlantıyı güncelleyin.
- Renk teması ve tipografiyi `style.css` üzerinden kolayca özelleştirebilirsiniz.
- Yeni proje eklemek için `index.html` içerisindeki ilgili bölümde örüntüyü takip edin (görsel + açıklama + link).

## Katkıda Bulunma
Bu depo kişisel kullanım içindir; ancak eklemeler veya düzeltmeler yapmak isterseniz:
1. Fork yapın.
2. Yeni bir branch oluşturun (ör. `feature/iyilestirme`).
3. Değişikliklerinizi commit ve push edin.
4. Pull request açın — yaptığınız değişikliği ve nedenini kısa bir şekilde açıklayın.

Kod stilini temiz ve okunabilir tutmaya özen gösterin.

## İletişim
- LinkedIn: https://linkedin.com/in/nmehmet093/
- E-posta: nmehmetgunes@gmail.com

Her türlü geri bildirim ve iş fırsatları için ulaşabilirsiniz.

## Lisans
Bu projede henüz lisans belirtilmemiştir. Eğer başkalarının da kullanmasını istiyorsanız bir lisans (ör. MIT) eklemenizi öneririm. (Yeni bir `LICENSE` dosyası oluşturabilirsiniz.)

---

Bu README dosyasını istediğin doğrultuda daha da sadeleştirebilir ya da İngilizce, iki dilli versiyon ekleyebilirim. İstersen canlı site linkini ve varsa proje görsellerini ekleyip README'ye görsel önizleme de yerleştireyim.
