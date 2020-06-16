import {getDest} from '../__mocks__/post_destination';

jest.mock('../post_destination.js');

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return getDest(4).then(data => expect(data).toEqual('Paris'));
});