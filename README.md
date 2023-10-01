# Hava Durumu Formu

Bu React uygulaması, kullanıcıların adlarını, soyadlarını ve yaşadıkları şehirleri girerek hava durumu bilgisini alabilmelerini sağlar. Ayrıca, kullanıcılar koordinasyon bilgilerini vermeyi seçebilirler.

![Görüntü 1 10 2023 20 27](https://github.com/NursahDemirpolat/weather-formic/assets/87416365/6e07f97e-ee53-4e16-b324-5b955ed62a72)
![Görüntü 1 10 2023 19 28](https://github.com/NursahDemirpolat/weather-formic/assets/87416365/2f5a0131-c709-4daa-aa79-db5d1f32ac09)

## Özellikler

- Kullanıcılar adlarını, soyadlarını ve yaşadıkları şehri girerler.
- Kullanıcılar koordinasyon bilgisini "Evet" veya "Hayır" olarak seçebilirler.
- Sözleşmeyi kabul etmek için bir onay kutusu bulunur.
- Hava durumu bilgileri OpenWeatherMap API kullanılarak çekilir.
- Kullanıcı adı ve hava durumu bilgileri sonuç sayfasında görüntülenir.

## Kullanılan Teknolojiler

- React
- Formik (Form yönetimi için)
- Yup (Doğrulama için)
- Axios (API istekleri için)
- React Icons (İkonlar için)

## Kurulum

1. Proje dizinini yerel makinenize klonlayın veya ZIP dosyasını indirin.
2. Terminal veya komut istemcisini açın ve proje klasörüne gidin.
3. Aşağıdaki komutları çalıştırarak gerekli bağımlılıkları yükleyin ve projeyi başlatın:


## (your api key) İçin:
- OpenWeatherMap web sitesine gidin ve sağ üst köşede bulunan "Sign In" (Giriş Yap) veya "Sign Up" (Üye Ol) seçeneklerinden birini kullanarak bir hesap oluşturun veya mevcut hesabınıza giriş yapın.
- Hesabınıza giriş yaptıktan sonra, sağ üst köşede kullanıcı adınıza tıklayarak "My API Keys" (API Anahtarlarım) seçeneğine gidin.
- API Anahtarlarınızın bulunduğu bir sayfa açılacaktır. Eğer daha önce API anahtarı oluşturmadıysanız, "Create Key" (Anahtar Oluştur) veya benzer bir seçenek kullanarak yeni bir API anahtarı oluşturun.
- API anahtarınız oluşturulduktan sonra, bu anahtarı kopyalayın.
- API anahtarınızı App.js dosyanızdaki API isteği yaparken kullanacağınız yere yapıştırın. 



```bash
npm install
npm start

