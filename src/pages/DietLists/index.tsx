import React from "react";

const DietLists: React.FC = () => {
  return (
    <main className="py-10 px-5">
      <div className="max-w-xl mx-auto">
        <h1 className="text-center font-extrabold text-2xl">
          Düşük Kalorili Haftalık Diyet Programı
        </h1>
        <div>
          <h1 className="text-center underline underline-offset-4 mt-5 font-bold text-lg">
            Kahvaltı
          </h1>
          <ul className="font-medium mt-2">
            <li>
              Yiyebildiğiniz kadar domates, salatalık, biber, maydanoz, roka,
              nane.
            </li>
            <li>2 adet iyi haşlanmış yumurta 5 tam ceviz içi.</li>
            <li>
              Damak zevkine göre pul biber, kimyon, karabiber yumurtaya eklenir.
            </li>
            <li>1 dilim ekmek yiyebilirsiniz.</li>
          </ul>
        </div>

        <div>
          <h1 className="text-center underline underline-offset-4 mt-5 font-bold text-lg">
            Öğle Yemeği
          </h1>
          <ul className="font-medium mt-2">
            <li>1 kase mercimek çorbası. (yağlı olmamalı)</li>
            <li>1 büyük kase salatalık, biber, domatesli semizotu salatası.</li>
            <li>
              1 kase yoğurt ve 1 çay kaşığı toz zerdeçalı karıştırıp
              tüketebilirsiniz.
            </li>
            <li>
              İstediğiniz kadar maydanoz, roka, nane, dereotu gibi yeşillikler.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-center underline underline-offset-4 mt-5 font-bold text-lg">
            Ara Öğün
          </h1>
          <ul className="font-medium mt-2">
            <li>
              3 yemek kaşığı lor peyniri 5 tam ceviz. (ekmek yerine
              tüketilecektir)
            </li>
            <li>1 fincan Türk kahvesi veya filtre kahve içilebilir.</li>
            <li>Veya 1 porsiyon mevsim meyvesi.</li>
          </ul>
        </div>

        <div>
          <h1 className="text-center underline underline-offset-4 mt-5 font-bold text-lg">
            Akşam Yemeği
          </h1>
          <ul className="font-medium mt-2">
            <li>
              2 ince dilim karpuz. (eğer yoksa 1 adet şeftali, elma gibi mevsim
              meyvesi)
            </li>
            <li>
              4 yemek kaşığı lor peyniri. (Az yağlı ve tuzlu olması öneriliyor)
            </li>
            <li>5 tam ceviz içi. (ekmek yerine yiyeceğinizi unutmayın)</li>
            <li>
              1 kase bol domatesli, salatalıklı semizotu salatası bol limon
              sosla beraber.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default DietLists;
