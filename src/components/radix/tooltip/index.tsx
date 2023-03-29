import * as TooltipBase from '@radix-ui/react-tooltip';
import './styles.css';

interface ITooltipProps{
  children: React.ReactNode;
  text: string;
  side: 'bottom' | 'left' | 'right' | 'top';
}

const Tooltip = ({children, text, side}: ITooltipProps) => {
  return (
    <TooltipBase.Provider>
      <TooltipBase.Root>
        <TooltipBase.Trigger asChild>
          {children}
        </TooltipBase.Trigger>
        <TooltipBase.Portal>
          <TooltipBase.Content side={side} className="TooltipContent" sideOffset={5}>
            {text}
            <TooltipBase.Arrow className="TooltipArrow" />
          </TooltipBase.Content>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  );
};

export default Tooltip;
