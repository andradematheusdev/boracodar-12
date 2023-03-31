interface ITagProps{
  content: string;
}

export const Tag = ({content}: ITagProps) => {
  return (
    <span className="bg-violet-200 rounded-lg py-1 px-2 text-sm text-violet-600">
      {content}
    </span>
  )
}
