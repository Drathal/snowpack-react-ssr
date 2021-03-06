import React, { Suspense, lazy } from 'react';
import { createElement, useRef, useState, useEffect } from 'react'
import Menu from './menu';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const canUseDOM = !!(
    (typeof window !== 'undefined' &&
    window.document && window.document.createElement)
  );

let markdownFile;
let ReactMarkdown;
if (!canUseDOM) {
    const fs = require('fs');
    ReactMarkdown = require('react-markdown');
    markdownFile = fs.readFileSync(`${process.cwd()}/content/about.md`);
}

export default function About() {
    return (
        <React.Fragment>
          <div id="root">
              <Container>
              <header>
                  <Menu />
              </header>
              </Container>
          </div>
          <Container>
            {!canUseDOM && <ReactMarkdown source={markdownFile} />}
          </Container>
        </React.Fragment>
    )
}