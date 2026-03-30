---
layout: project
title: "Early Warning System — SAT Colombia"
category: "Investigación · ML"
description: "Modelos de Machine Learning para anticipar violencia armada, complementando la inteligencia cualitativa de analistas humanos."
order: 1
featured: true
---

Anticipar brotes de violencia no es solo un desafío técnico: es una necesidad humanitaria. Colombia cuenta con el **Sistema de Alertas Tempranas (SAT)**, operado por la Defensoría del Pueblo, que identifica riesgos de violaciones a los derechos humanos como picos atípicos de violencia. Históricamente, el sistema ha dependido de evaluaciones cualitativas basadas en la experticia de analistas de campo.

Este proyecto busca complementar esa experticia con la capacidad predictiva de modelos de machine learning. El objetivo **no es reemplazar a los analistas**, sino darles una herramienta cuantitativa y replicable que estime la probabilidad de eventos violentos en un municipio y trimestre específico.

## Metodología

El modelo combina tres fuentes:

- **Registros históricos del SAT** (alertas 2010–2024, geolocalización municipal)
- **Variables contextuales**: presencia institucional, indicadores socioeconómicos, datos de movilidad
- **Procesamiento de texto**: NLP sobre fuentes de prensa para detectar señales tempranas

Se usa un ensemble de gradient boosting y redes neuronales recurrentes con horizonte de predicción de 30 días.

## Resultados

El modelo alcanza un AUC de 0.82 en el conjunto de prueba, con tasa de falsos negativos del 8%. La validación con analistas territoriales confirmó que el modelo identifica patrones que reconocen como significativos pero que serían difíciles de detectar manualmente a escala nacional.

## Documento

<a href="{{ '/assets/pdf/main.pdf' | relative_url }}" target="_blank" style="
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--text);
  text-decoration: none;
  padding: 10px 20px;
  border: var(--border);
  background: var(--card-bg);
  display: inline-block;
  margin-top: 8px;
  transition: background .1s, color .1s, transform .1s, box-shadow .1s;
" onmouseover="this.style.background='var(--text)';this.style.color='var(--bg)';this.style.transform='translate(-2px,-2px)';this.style.boxShadow='var(--sh)'"
   onmouseout="this.style.background='var(--card-bg)';this.style.color='var(--text)';this.style.transform='none';this.style.boxShadow='none'">↓ Descargar presentación PDF</a>
