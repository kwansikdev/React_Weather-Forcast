import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';
import { darkTheme, lightTheme } from '../../Theme';

type TSvg = {
  status: boolean;
};

const Svg = styled.svg`
  width: 25px;
  rect {
    /* fill: #2b244d; */
    fill: #242424;
    fill: ${({ status }: TSvg) =>
      status ? lightTheme.header : darkTheme.header};
  }
`;

export default function HamburgerMenu() {
  const status = useSelector((state: RouteState) => state.common.status);

  return (
    <Svg
      _ngcontent-rbr-c0
      className="hamburger__icon"
      data-name="Menu Burger Icon"
      id="Menu_Burger_Icon"
      viewBox="31.5 30 49.9 32"
      status={status}
    >
      <defs _ngcontent-rbr-c0="true">
        <style
          _ngcontent-rbr-c0="ture"
          dangerouslySetInnerHTML={{
            __html: '.hamburger__icon__fill { fill: #594e78 }',
          }}
        />
      </defs>
      <rect
        _ngcontent-rbr-c0="true"
        className="hamburger__icon__fill"
        data-name="Rectangle 9"
        height={4}
        id="Rectangle_9"
        rx={2}
        transform="translate(31.5 58)"
        width="49.9"
      />
      <rect
        _ngcontent-rbr-c0="true"
        className="hamburger__icon__fill"
        data-name="Rectangle 10"
        height={4}
        id="Rectangle_10"
        rx={2}
        transform="translate(31.5 44)"
        width="49.9"
      />
      <rect
        _ngcontent-rbr-c0="true"
        className="hamburger__icon__fill"
        data-name="Rectangle 11"
        height={4}
        id="Rectangle_11"
        rx={2}
        transform="translate(31.5 30)"
        width="49.9"
      />
    </Svg>
  );
}
