import * as TooltipBase from '@radix-ui/react-tooltip';
// import './styles.css';

const Tooltip = (children: React.ReactNode) => {
  return (
    <TooltipBase.Provider>
      <TooltipBase.Root>
        <TooltipBase.Trigger asChild>
          {children}
        </TooltipBase.Trigger>
        <TooltipBase.Portal>
          <TooltipBase.Content className="TooltipContent" sideOffset={5}>
            Add to library
            <TooltipBase.Arrow className="TooltipArrow" />
          </TooltipBase.Content>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  );
};

export default Tooltip;
