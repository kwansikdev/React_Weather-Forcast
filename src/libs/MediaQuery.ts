import { css } from 'styled-components';

const sizes = {
  desktop: 1025,
  tablet: 1024,
  mobile: 768,
};

const sizeCheck = (label: string) => {
  if (label === 'desktop') return `all and (min-width: ${sizes[label]}px)`;
  if (label === 'tablet')
    return `all and (min-width: ${+sizes['mobile'] + 1}px) and (max-width: ${
      sizes[label]
    }px)`;
  if (label === 'mobile') return `all and (max-width: ${sizes[label]}px)`;
};

const media = Object.keys(sizes).reduce((points: any, label) => {
  points[label] = (literals: TemplateStringsArray, ...args: any[]) => css`
    @media ${sizeCheck(label)} {
      ${css(literals, ...args)}
    }
  `;

  return points;
}, {} as Record<keyof typeof sizes, (literals: TemplateStringsArray, ...args: any[]) => string>);

export default media;
