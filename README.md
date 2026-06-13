# Lumere Beauty Salon Template Documentation

## Overview

**Lumere** is a modern, responsive website template designed for a beauty salon. It showcases services, client reviews, FAQs, and a booking contact form. The template is built for clarity, elegance, and ease of navigation.

**Tech Stack:**

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![wpdsui-kit](https://img.shields.io/badge/wpdsui--kit-2-8A2BE2?style=flat-square)

- **Next.js 16** – React framework (App Router)
- **React 18** – UI library
- **wpdsui-kit** – UI component library

---

## Installation & Setup

```bash
git clone git@github.com:NOMAGIX-SOLUTIONS/lumere-salon.git

cd lumere-salon

npm install

npm run dev
```

---

## Customization Tips

- **Replace content:** Edit text arrays (services, reviews, FAQ) inside components.
- **Images:** Add salon photos in `/public` and import into `Hero`, `Services`, or `About`.
- **Map:** For address, embed a Google Maps iframe or use `react-leaflet`.
- **Form submission:** Hook the booking form to an API route (`/api/book`) that sends email or saves to a CRM.

---

## Browser Support

- Latest Chrome, Firefox, Safari, Edge

---

## License

This template is for personal or commercial use. Replace all placeholder content (text, images, address, phone) with actual salon information before deployment.
