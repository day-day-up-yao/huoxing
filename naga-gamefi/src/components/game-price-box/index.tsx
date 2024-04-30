import React, { useMemo } from 'react';

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { getFullNum } from 'src/utils/public';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    height: '48px',
    boxSizing: 'border-box',
    background: theme.palette.background.paper,
    borderRadius: '5px',
    padding: '14px 20px',
  },
}));

type GamePriceBoxProps = {
  price: number;
  fontSize?: string;
  fontWeight?: string;
};

const GamePriceBox = (props: GamePriceBoxProps) => {
  const { price, fontSize, fontWeight } = props;

  const priceText = useMemo(() => {
    // eslint-disable-next-line no-new-wrappers
    const prices = getFullNum(price);
    const strPrice = prices.toString();
    const isTooltip = prices < 0.1;
    const num =
      prices < 0.00001
        ? `${strPrice.slice(0, 3)}...${strPrice.slice(-4)}`
        : prices < 0.0001
        ? Number(prices.toFixed(5))
        : Number(prices.toFixed(3));

    return isTooltip ? (
      <HtmlTooltip
        title={
          <Typography
            sx={({ palette }) => ({
              fontSize: '16px',
              color: palette.text.primary,
              lineHeight: '20px',
            })}
          >{`$ ${prices}`}</Typography>
        }
      >
        <Typography
          sx={({ palette }) => ({
            color: palette.text.primary,
            fontSize: fontSize || '16px',
            fontWeight,
          })}
        >{`$ ${num}`}</Typography>
      </HtmlTooltip>
    ) : (
      <Typography
        sx={({ palette }) => ({
          color: palette.text.primary,
          fontSize: fontSize || '16px',
          fontWeight,
        })}
      >
        {`$ ${num}`}
      </Typography>
    );
  }, [fontSize, fontWeight, price]);

  return <object>{priceText}</object>;
};

export default GamePriceBox;
