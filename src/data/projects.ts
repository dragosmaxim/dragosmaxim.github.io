import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'data-pipeline',
    title: 'Data pipeline',
    category: 'data-engineering',
    shortDescription:
      'An end-to-end Medallion Architecture data pipeline that ingests and transforms Amazon product data using Apache Spark and Delta Lake. Supports interactive execution in a Spark container or automated orchestration via Apache Airflow.',
    technologies: ['Python', 'Spark', 'Delta Lake', 'Airflow', 'Databricks'],
    githubUrl: 'https://github.com/dragosmaxim/data-pipeline-poc.git',
    repositoryPublic: true,
    featured: true,
    details: {
      overview:
        'This project ingests an Amazon products CSV and transforms it through Bronze, Silver, and Gold layers using Apache Spark and Delta Lake. It is runnable interactively inside a Spark container or orchestrated by an Airflow stack.',
      problemStatement:
        'Separates raw, cleaned, and curated data for reproducibility and lineage. Enforces configurable data-quality checks to avoid silently promoting bad data. Demonstrates a small, production-like medallion pipeline you can extend for other datasets.',
      architecture:
        'CSV ingestion flows through Bronze, Silver, and Gold Delta Lake layers, with Spark processing packaged in Docker and optionally scheduled by Airflow.',
      technologyStack: ['Python', 'Spark', 'Docker', 'Airflow'],
      engineeringDecisions: [
        'Used a medallion layout to make data quality and lineage explicit.',
        'Kept interactive Spark execution available for local development while supporting Airflow orchestration.'
      ],
      implementationDetails: [
        'Ingested raw product records into a Bronze layer.',
        'Applied cleaning and validation transformations in Silver.',
        'Published curated analytical data in Gold.'
      ],
      challenges: [
        'Maintaining consistent schemas across pipeline stages.',
        'Making the same transformations work in both interactive and scheduled execution.'
      ],
      results: [
        'Produced a reproducible end-to-end data pipeline.',
        'Enabled reusable data-quality checks and curated outputs for analysis.'
      ]
    }
  },
  {
    id: 'rag-knowledge-assistant',
    title: 'Smart Librarian, AI RAG chatbot with tooling',
    category: 'ai',
    shortDescription:
      'Smart Librarian is an AI-powered chatbot that recommends books based on user interests.It combines OpenAI GPT with RAG (Retrieval-Augmented Generation) using ChromaDB for semantic search, and provides short + full summaries through a tool function.',
    technologies: ['Python', 'OpenAI SDK', 'SQLAlchemy', 'FastAPI', 'ChromaDB'],
    githubUrl: 'https://github.com/dragosmaxim/smart_librarian.git',
    repositoryPublic: true,
    featured: true,
    details: {
      overview:
        'An applied AI project focused on grounded answers over a curated technical document corpus.',
      problemStatement:
        'Teams needed faster access to project knowledge while reducing unsupported or untraceable generated answers.',
      architecture:
        'A FastAPI service retrieves semantically relevant documents from ChromaDB and combines them with OpenAI responses and callable summary tools.',
      technologyStack: ['Python', 'OpenAI SDK', 'SQLAlchemy', 'FastAPI', 'ChromaDB'],
      engineeringDecisions: [
        'Used retrieval-augmented generation to ground recommendations in the indexed book corpus.',
        'Separated persistence, retrieval, and generation responsibilities.'
      ],
      implementationDetails: [
        'Created embeddings for the document collection and stored them in ChromaDB.',
        'Exposed book recommendations and summaries through a FastAPI interface.',
        'Used a tool function to provide short and full summaries.'
      ],
      challenges: [
        'Balancing retrieval relevance with concise conversational responses.',
        'Keeping generated recommendations tied to available source material.'
      ],
      results: [
        'Delivered grounded book recommendations with supporting context.',
        'Added reusable retrieval and summary capabilities to the chatbot.'
      ]
    }
  },
  {
    id: 'machine-learning-for-car-plates-detection-and-recognition',
    title: 'Car Plate Detection and Recognition',
    category: 'ml',
    shortDescription:
      'Machine-learning workflow for detecting and recognizing car plates in images.',
    technologies: ['Python', 'OpenCV', 'YOLOv8', 'EasyOCR'],
    githubUrl: 'https://github.com/dragosmaxim/Machine-learning-for-car-plates-detection-and-recognition.git',
    repositoryPublic: true,
    featured: true,
    details: {
      overview:
        'A machine-learning project showing end-to-end workflow design for car plate detection and recognition.',
      problemStatement:
        'Automatically locate vehicle plates in images and convert the detected regions into readable text.',
      architecture:
        'Images pass through YOLOv8 plate detection, OpenCV preprocessing, and EasyOCR text recognition.',
      technologyStack: ['Python', 'OpenCV', 'YOLOv8', 'EasyOCR'],
      engineeringDecisions: [
        'Used a dedicated object detector before OCR to reduce the recognition search area.',
        'Applied image preprocessing to improve OCR input quality.'
      ],
      implementationDetails: [
        'Detected plate bounding boxes with YOLOv8.',
        'Cropped and normalized plate regions with OpenCV.',
        'Extracted plate text using EasyOCR.'
      ],
      challenges: [
        'Handling differences in lighting, angle, and image quality.',
        'Reducing OCR errors on small or partially obscured plates.'
      ],
      results: [
        'Established a complete detection-to-recognition workflow.',
        'Made the pipeline extensible for additional vehicle imagery.'
      ]
    }
  },
  {
    id: 'system-EMG-signals',
    title: 'EMG Signal Classification System',
    category: 'emg-signals',
    shortDescription:
      'Acquisition system for EMG signals consists in a Python algorithm that read the muscle contraction input from the user through gelled electrodes and display in real time the amplified muscle contraction through Grove EMG detector.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Signal Processing'],
    githubUrl: 'https://github.com/dragosmaxim/system-EMG-signals.git',
    repositoryPublic: true,
    featured: true,
    details: {
      overview:
        'An EMG signals project focused on preprocessing, feature extraction, and classification of muscle activation patterns.',
      problemStatement:
        'Capture and interpret muscle contractions in real time from signals collected through gelled electrodes and a Grove EMG detector.',
      architecture:
        'The system acquires EMG input, filters and transforms the signal, extracts features, and presents the amplified contraction in real time.',
      technologyStack: ['Python', 'NumPy', 'Pandas', 'Signal Processing'],
      engineeringDecisions: [
        'Used a lightweight Python processing path suitable for real-time feedback.',
        'Separated signal acquisition, preprocessing, and feature analysis.'
      ],
      implementationDetails: [
        'Read EMG samples from the detector.',
        'Applied numerical preprocessing with NumPy and organized measurements with Pandas.',
        'Displayed processed muscle-contraction signals in real time.'
      ],
      challenges: [
        'Filtering noise while preserving meaningful muscle activity.',
        'Keeping processing responsive during live acquisition.'
      ],
      results: [
        'Built a working real-time EMG acquisition and visualization workflow.',
        'Created a foundation for future signal classification experiments.'
      ],
    }
  }
];
