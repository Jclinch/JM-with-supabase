import React from 'react';
import ReactDOMServer from 'react-dom/server';
import EmailTemplate from '@/email-template';
import { FormData } from '@/components/Contact'; // Adjust the import path based on your project structure

export function renderEmailTemplate(data: FormData): string {
  const emailHtml = ReactDOMServer.renderToStaticMarkup(
    <EmailTemplate {...data} />
  );
  return `<!DOCTYPE html>${emailHtml}`;
}
