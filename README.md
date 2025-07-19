# Node.js + Express + TypeScript + Prisma ORM + EJS (MVC)

## 📌 Proje Hakkında

Bu proje, **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM** ve **EJS** kullanılarak geliştirilmiş bir kullanıcı yönetim sistemidir. Kullanıcı bilgileri veritabanından alınarak web arayüzünde gösterilir. 

Proje, MVC (Model-View-Controller) mimarisine ve ORM (Object-Relational Mapping) yapısına örnek bir uygulama olarak tasarlanmıştır.

## 🎯 Özellikler

- Kullanıcı verilerini veritabanından alma
- EJS kullanarak kullanıcı bilgilerini HTML sayfasında gösterme
- MVC mimarisiyle yapılandırılmıştır
- Prisma ile veritabanı işlemleri yapılır

## 🔧 Kurulum ve Kullanım

### 1. Bağımlılıkları yükleyin
```bash
npm install
```

### 2. .env dosyasını oluşturun
`.env` dosyasına aşağıdaki gibi veritabanı bağlantısını ekleyin:
```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

### 3. Prisma yapılandırması
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Uygulamayı başlatın
```bash
npx ts-node src/app.ts
```

## 📁 Klasör Yapısı

```
Nodejs_Proje/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma          # Prisma veritabanı şeması
│
├── src/
│   ├── controllers/           # İş mantığı (controller)
│   ├── models/                # Veritabanı işlemleri (model)
│   ├── routes/                # Express router
│   ├── views/                 # EJS dosyaları
│   │   └── users.ejs
│   └── app.ts                 # Express uygulama dosyası
│
├── package.json
├── tsconfig.json
└── .env
```

## 🔌 Kullanılan Teknolojiler
.
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- EJS
- PostgreSQL

## 👨‍💻 Geliştirici Notu

Bu proje, Express ve Prisma ORM kullanarak kullanıcıların veritabanından çekilip tarayıcıda görüntülenmesini sağlamaktadır. Eğitim ve geliştirme amaçlı olarak oluşturulmuştur.
