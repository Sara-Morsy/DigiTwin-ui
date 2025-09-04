```mermaid
flowchart TD
  subgraph Inputs
    A1["WP1: Training & RDMkit templates"]
    A2["WP2: Metadata profiles & FAIRCORE4EOSC (MSCR, PID resolver, PID graph)"]
    A3["WP3: Mixed-methods datasets & semantic artefacts"]
    A4["WP4: AI-assisted FAIRification pipelines & benchmarks"]
    A5["WP6: DigiTwin open database (FAIR Digital Objects)"]
    A6["WPs8–9: DMPs, ethics & sustainability"]
  end

  subgraph Outputs
    B1["Open training materials & FAIR Cookbook recipes"]
    B2["Reusable metadata standards (Bioschemas, DDI, MSCR)"]
    B3["Open-source software, workflows & AI models (GitHub / Hugging Face)"]
    B4["Preregistered study protocols & Registered Reports"]
    B5["Open Semantic Artifact Catalogue & FAIR data access via EOSC + PID Graph"]
  end

  subgraph Outcomes
    C1["Adoption by EOSC, ECRIN, ELIXIR & ERICs"]
    C2["Cross-domain interoperability & discoverability (FAIRCORE4EOSC, PID resolver, PID graph)"]
    C3["Improved reproducibility of mixed-methods research"]
    C4["Lower cost & faster design of clinical trials"]
    C5["Active citizen & stakeholder participation in twin validation"]
  end

  subgraph Impacts["Long-Term Impacts"]
    D1["European leadership in FAIR Digital Twin infrastructures"]
    D2["Enhanced evidence-based health & social policies"]
    D3["Greater societal trust in data-driven health research"]
  end

  %% Connections
  A1 --> B1
  A2 --> B2
  A2 --> B5
  A3 --> B3
  A3 --> B5
  A4 --> B3
  A4 --> B5
  A5 --> B5
  A6 --> B4
  A6 --> B5

  B1 --> C2
  B2 --> C2
  B3 --> C3
  B4 --> C3
  B5 --> C1
  C1 --> D1
  C2 --> D1
  C3 --> D2
  C4 --> D2
  C5 --> D3
