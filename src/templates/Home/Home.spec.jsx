/* eslint-disable*/
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import { render, scrren, waitForElementToBeRemoved } from '@testing-library/react';
// import { Home } from '.';

// const handlers = [
//   rest.get('https://jsonplaceholder.typicode.com/posts', async 
//   (req, res, ctx) => {
//     return res(ctx.json());
//   })
// ]

// const server = setupServer(...handlers);

// describe('<Home />', () => {
//   it('is a dummy test', async () => {
//     render('<Home />')
//     const noMorePosts = screen.getByText('Não existem posts =(');

//     await waitForElementToBeRemoved(noMorePosts);
//   });
// });