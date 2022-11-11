import React from "react";

const Bmi: React.FC = () => {
  return (
    <main className="py-10 px-5">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-extrabold text-xl">
          Vücut Kitle İndeksi(BMI) Nedir?
        </h1>
        <p className="mt-2">
          Vücut Kitle İndeksi, bir diğer adıyla boy kilo indeksi vücudunuzdaki
          tahmini yağ oranını gösteren bir değerdir. İnsanın kilosunun boyuna
          göre normal olup olmadığının anlaşılması için kullanılır. Elde edilen
          değerle insanın kendisi için sağlıklı ve ideal kiloya ne kadar yakın
          olduğunu gösterir.
        </p>
        <div>
          <img
            src={require("../../assets/images/bmi-kilo.png")}
            alt="bmi-table"
            className="w-full"
          />
        </div>

        <div className="mt-16">
          <h1 className="font-extrabold text-xl">
            Vücut Kitle İndeksi(BMI) Sonuçları Ne Anlama Gelir?
          </h1>
          <p className="mt-2">
            Vücut kitle indeksi hesaplamasında yağ oranı, vücut tipi, yağ ve kas
            dokusu gibi etmenler yer almaz. Bu nedenle, uzmanlar ideal kilo
            hesaplamada beden kitle indeksi ve bel çevresinin ölçümü dışında,
            metabolizma hızı ölçümü ve detaylı vücut analizleriyle de kişinin
            eğer kilo sorunu hakkında daha ayrıntılı bilgi elde ederler. Kişinin
            ideal kilosunun altında ya da üstünde olması; diğer etmenlerle
            birlikte hekim tarafından değerlendirilmelidir. Mevcut sağlık
            sorunlarını gidermek ve olası sağlık sorunlarını önlemek için
            hekimle birlikte hareket edilmelidir. Erkeklerde bel çevresi 94
            cm’yi geçerse artmış risk, 102 cm’yi geçerse yüksek risk olarak
            görülür. Bu oran kadınlarda ise 80 cm’yi geçerse artmış risk, 88
            cm’yi geçerse yüksek risk olarak kabul edilir.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Bmi;
