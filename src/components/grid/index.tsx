import { cards } from "../../data/cards";
import { Card } from "../card";

export const Grid = () => {
  return (
    <div className="flex flex-wrap w-full h-full max-h-screen text-neutral-700 py-16 px-4 md:px-8 gap-x-14 md:overflow-y-auto">
      <div className="flex-1 min-w-[300px] mb-4 md:mb-0">
        <span className="block text-xl font-bold mb-6">A Fazer</span>
        <div className="flex flex-col gap-y-8">
          {cards.map((value) => {
            if (value.status === 1) {
              return <Card title={value.title} description={value.description} tags={value.tags} />;
            }
          })}
        </div>
      </div>
      <div className="flex-1 min-w-[300px] mb-4 md:mb-0">
        <span className="block text-xl font-bold mb-6">Fazendo</span>
        <div className="flex flex-col  gap-y-8">
          {cards.map((value) => {
            if (value.status === 2) {
              return <Card title={value.title} description={value.description} tags={value.tags} />;
            }
          })}
        </div>
      </div>
      <div className="flex-1 min-w-[300px]">
        <span className="block text-xl font-bold mb-6">Feito</span>
        <div className="flex flex-col gap-y-8">
          {cards.map((value) => {
            if (value.status === 3) {
              return <Card title={value.title} description={value.description} tags={value.tags} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};
