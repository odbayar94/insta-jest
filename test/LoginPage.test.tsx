/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import LoginPage from '../src/pages/LoginPage';


it("LoginPage maches snapshot", ()=>{
  const appSnap = renderer.create(<LoginPage/>).toJSON()
  expect(appSnap).toMatchSnapshot()
});

test("...", () => {
  const store = configureStore();
  const wrapper = ({ children }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );
  const { result } = renderHook(() => {
    useSaveAuthenticationDataToStorages(useDispatch());
  }, { wrapper });
  // ... Rest of the logic
});

// jest.mock('react-redux', () => {
//   const ActualReactRedux = jest.requireActual('react-redux');
//   return {
//       ...ActualReactRedux,
//       useSelector: jest.fn().mockImplementation(() => {
//           return mockState;
//       }),
//   };
// });