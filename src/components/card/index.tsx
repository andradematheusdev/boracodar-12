import { Tag as CustomTag } from "../tag";

interface ICardProps {
  title: string;
  description: string;
  tags: string[];
}

export const Card = ({ title, description, tags }: ICardProps) => {
  return (
    <div className="bg-white hover:shadow-md hover:shadow-violet-100 p-6 rounded-xl transition-all">
      <h3 className="font-bold mb-3">{title}</h3>
      <p className="mb-3 break-words">{description}</p>
      <div className="flex w-full flex-wrap gap-2">
        {tags.map((tag) => {
          return <CustomTag content={tag} />;
        })}
      </div>
    </div>
  );
};
