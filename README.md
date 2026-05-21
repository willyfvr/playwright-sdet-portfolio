# 🎭 Playwright Automation Framework - E-Commerce Portfolio

This repository features a robust End-to-End (E2E) and hybrid (UI + API) test automation framework built with **Playwright** and **TypeScript**. 

The primary goal of this project is to showcase production-ready software architecture applied to QA Automation (SDET), focusing on maintainability, scalability, and execution speed.

## 🚀 Framework Features

*   **Language:** TypeScript (Strictly typed for locators, pages, and data structures).
*   **Design Pattern:** Page Object Model (POM) for a clean separation of concerns.
*   **Locator Strategy:** Driven by accessibility standards (`getByRole`, `getByTestId`) to ensure resilient and reliable tests.
*   **CI/CD Pipeline:** Seamless Continuous Integration via **GitHub Actions**, triggering the test suite on every Push and Pull Request.
*   **Advanced Reporting:** Built-in HTML reports generated automatically after each test run.
*   **State Management:** Global authentication state sharing to eliminate redundant login steps and optimize execution time.

## 📂 Project Structure

```text
├── .github/workflows/   # CI/CD Pipelines (GitHub Actions)
├── pages/               # Page Object Model (POM) classes
├── tests/               # Automated test cases (.spec.ts)
├── playwright.config.ts # Global Playwright configuration engine
└── package.json         # Project dependencies and execution scripts
```

# 🎭 Playwright Automation Framework - E-Commerce Portfolio

Este repositorio contiene un framework de automatización de pruebas de extremo a extremo (E2E) e integración híbrida (UI + API) utilizando **Playwright** y **TypeScript**. 

El objetivo de este proyecto es demostrar prácticas avanzadas de arquitectura de software aplicadas a QA Automation (SDET), enfocadas en la mantenibilidad, escalabilidad y velocidad de ejecución.

## 🚀 Características del Framework

*   **Lenguaje:** TypeScript (Tipado estricto para localizadores y páginas).
*   **Patrón de Diseño:** Page Object Model (POM) para la separación limpia de responsabilidades.
*   **Estrategia de Localizadores:** Basada en roles de accesibilidad (`getByRole`, `getByTestId`) garantizando tests robustos.
*   **CI/CD Pipeline:** Integración continua con **GitHub Actions** que ejecuta la suite de pruebas en cada Push y Pull Request.
*   **Reportes Avanzados:** Reportes HTML nativos generados automáticamente tras cada ejecución.

## 📂 Estructura del Proyecto

```text
├── .github/workflows/   # Pipelines de CI/CD (GitHub Actions)
├── pages/               # Clases bajo el patrón Page Object Model (POM)
├── tests/               # Casos de prueba automatizados (.spec.ts)
├── playwright.config.ts # Configuración global del motor de Playwright
└── package.json         # Dependencias y scripts de ejecución
```