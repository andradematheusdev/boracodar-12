import Tooltip from "../radix/tooltip"

interface IAvatarProps{
  username: string;
  picture: string;
}

export const Avatar = ({picture,username}: IAvatarProps) => {
  return (
    <div>
        <Tooltip side={'left'} text={username}>
          <img src={picture} className="rounded-full w-16 h-16"/>
        </Tooltip>
      </div>
  )
}
