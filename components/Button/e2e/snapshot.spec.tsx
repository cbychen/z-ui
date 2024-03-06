import React from 'react';
import ReactDOMServer from 'react-dom/server'


import {configureToMatchImageSnapshot} from 'jest-image-snapshot'
import Button from '../Button';

describe('Button', () => {
  it('should match snapshot', async() => {
    await jestPuppeteer.resetPage()

    await page.goto(`file://${process.cwd()}/tests/index.html`)
    const html = ReactDOMServer.renderToString(<Button >click</Button>)

    await page.evaluate(innerHtml=>{
      document.querySelector('#root').innerHTML = innerHtml
    },html)

    const  screenShot = await page.screenshot()
    expect(screenShot).toMatchSnapshot()
  })
})