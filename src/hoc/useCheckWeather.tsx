import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/modules/reducer';

function withAuth(Component: any, isDatas: boolean) {
  function WrappedComponent(props: any) {
    const selectedDatas = useSelector(
      (state: RootState) => state.weathers.city_weathers,
    );

    if (!isDatas) {
      if (!selectedDatas.length) {
        return <Redirect to="/" />;
      }
    }

    return <Component {...props} />;
  }
  WrappedComponent.displayName = `withWeather(${Component.name})`;
  return WrappedComponent;
}

withAuth.defaultProps = {
  isDatas: true,
};

export default withAuth;
