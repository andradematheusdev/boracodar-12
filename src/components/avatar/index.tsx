import Tooltip from "../radix/tooltip"

interface IAvatarProps{
  username: string;
  picture: string;
}

export const Avatar = ({picture,username}: IAvatarProps) => {
  return (
    <div className="flex w-full md:w-auto items-center justify-center">
        <Tooltip side={'left'} text={username}>
          <img src={picture} className="rounded-full md:w-16 md:h-16"/>
        </Tooltip>
      </div>
  )
}
