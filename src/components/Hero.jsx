import mainbox from "../assets/main-box.svg";
import mainboxShadow from "../assets/main-box-shadow.svg";

function Hero() {
  return (
    <div className="mt-10 px-4">
      <h1 className="font-['Plateia'] text-left uppercase leading-[123%] text-[26px]">
        Комплексные решения
      </h1>
      <h3 className="font-sans font-normal text-base leading-4 mt-2 text-left">
        в построении отдела маркетинга
      </h3>
      <img src={mainbox} alt="Описание изображения" className="mt-11 m-auto" />
      <img src={mainboxShadow} alt="Описание изображения" className="m-auto" />
      <p className="mt-8 font-gilroy text-xs leading-4 text-center">
        Получите в свой проект системный бокс решений, который увеличит вашу
        прибыль
      </p>
      <div className="p-0.5 button-shadow h-12 rounded-[4px] mt-9 w-full bg-gradient-to-r from-white via-[#7D6137] via-[#7D6137] to-[#7D6137]">
        <div className="back h-full flex bg-[#7D6137] items-center justify-center">
          <span>Получить аудит проекта</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
