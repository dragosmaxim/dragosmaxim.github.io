import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'lakehouse-analytics-platform',
    title: 'Lakehouse Analytics Platform',
    category: 'data-engineering',
    shortDescription:
      'Batch and incremental analytics platform with curated warehouse models and observable data quality checks.',
    technologies: ['Python', 'Spark', 'dbt', 'Airflow', 'Databricks'],
    githubUrl: 'https://github.com/maximdragos/lakehouse-analytics-platform',
    repositoryPublic: true,
    featured: true,
    details: {
      overview:
        'A data-engineering portfolio project showing ingestion, transformation, modeling, and quality controls for analytics-ready datasets.',
      problemStatement:
        'Operational data needed to be converted into trusted reporting tables without manual reconciliation or brittle one-off scripts.',
      architecture:
        'The project uses staged ingestion, curated transformation layers, orchestration, and validation checks before publishing analytical marts.',
      technologyStack: ['Python', 'Spark', 'dbt', 'Airflow', 'Databricks'],
      engineeringDecisions: [
        'Separate raw, staging, and curated layers to keep lineage clear.',
        'Use incremental processing for repeatable local and production-style runs.',
        'Keep validation close to the transformation layer.'
      ],
      implementationDetails: [
        'Defined modular transformation jobs with explicit dependencies.',
        'Added data quality checks for primary keys, freshness, and required fields.',
        'Documented operational assumptions for reruns and failed tasks.'
      ],
      challenges: [
        'Balancing a realistic lakehouse structure with static portfolio deployability.',
        'Keeping sample data representative without exposing private datasets.'
      ],
      results: [
        'Produced a clear architecture example for analytical data delivery.',
        'Demonstrated maintainable data pipeline boundaries and quality gates.'
      ]
    }
  },
  {
    id: 'rag-knowledge-assistant',
    title: 'RAG Knowledge Assistant',
    category: 'ai',
    shortDescription:
      'Retrieval-augmented assistant prototype for searching project documentation with traceable answers.',
    technologies: ['Python', 'Embeddings', 'Vector Search', 'FastAPI', 'React'],
    repositoryPublic: false,
    featured: true,
    details: {
      overview:
        'An applied AI project focused on grounded answers over a curated technical document corpus.',
      problemStatement:
        'Teams needed faster access to project knowledge while reducing unsupported or untraceable generated answers.',
      architecture:
        'Documents are chunked, embedded, indexed, retrieved by semantic similarity, and supplied as context to the generation step.',
      technologyStack: ['Python', 'Embeddings', 'Vector Search', 'FastAPI', 'React'],
      engineeringDecisions: [
        'Prioritize source traceability over conversational breadth.',
        'Keep retrieval and generation boundaries independently testable.',
        'Return unavailable states when source evidence is insufficient.'
      ],
      implementationDetails: [
        'Built ingestion routines for markdown and structured documentation.',
        'Added retrieval scoring and context-window controls.',
        'Designed API response shapes that keep citations attached to generated text.'
      ],
      challenges: [
        'Avoiding hallucinated answers when documents do not contain enough evidence.',
        'Tuning chunk sizes for both recall and concise responses.'
      ],
      results: [
        'Created a practical architecture for evidence-backed document Q&A.',
        'Established evaluation points for retrieval quality and answer grounding.'
      ]
    }
  },
  {
    id: 'demand-forecasting-ml',
    title: 'Demand Forecasting ML Pipeline',
    category: 'ml',
    shortDescription:
      'Machine-learning workflow for time-series demand forecasting with feature engineering and model comparison.',
    technologies: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'MLflow'],
    githubUrl: 'https://github.com/maximdragos/demand-forecasting-ml',
    repositoryPublic: true,
    featured: true,
    details: {
      overview:
        'A machine-learning project showing end-to-end forecasting workflow design from feature generation through evaluation.',
      problemStatement:
        'Planning decisions required a repeatable forecasting process instead of spreadsheet-based estimates and manual model comparison.',
      architecture:
        'The pipeline prepares time-window features, trains candidate models, evaluates backtests, and records experiment metadata.',
      technologyStack: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'MLflow'],
      engineeringDecisions: [
        'Use time-aware validation to prevent leakage.',
        'Separate feature generation from model training.',
        'Track experiments so model comparisons remain reproducible.'
      ],
      implementationDetails: [
        'Created lag, rolling-window, and calendar-derived features.',
        'Implemented baseline and gradient-boosted model comparisons.',
        'Recorded metrics and parameters for repeatable review.'
      ],
      challenges: [
        'Handling sparse historical periods without creating biased validation results.',
        'Explaining model performance in terms useful for planning decisions.'
      ],
      results: [
        'Produced a repeatable forecasting workflow with transparent evaluation.',
        'Demonstrated practical ML engineering boundaries for analytics use cases.'
      ]
    }
  },
  {
    id: 'emg-signal-classification',
    title: 'EMG Signal Classification System',
    category: 'emg-signals',
    shortDescription:
      'Signal-processing and classification pipeline for EMG gesture recognition experiments.',
    technologies: ['Python', 'NumPy', 'SciPy', 'scikit-learn', 'Signal Processing'],
    repositoryPublic: false,
    featured: true,
    details: {
      overview:
        'An EMG signals project focused on preprocessing, feature extraction, and classification of muscle activation patterns.',
      problemStatement:
        'Raw EMG readings are noisy and require careful processing before they can support reliable gesture classification.',
      architecture:
        'The system filters raw signals, extracts time-domain and frequency-domain features, trains classifiers, and evaluates per-gesture performance.',
      technologyStack: ['Python', 'NumPy', 'SciPy', 'scikit-learn', 'Signal Processing'],
      engineeringDecisions: [
        'Keep preprocessing parameters explicit and repeatable.',
        'Compare simple interpretable classifiers before adding model complexity.',
        'Report class-level metrics to expose weak gesture separability.'
      ],
      implementationDetails: [
        'Implemented filtering and segmentation for EMG windows.',
        'Generated statistical and spectral features from each segment.',
        'Evaluated classifiers with confusion matrices and per-class scores.'
      ],
      challenges: [
        'Reducing noise while preserving useful activation patterns.',
        'Managing variation between recording sessions and gesture repetitions.'
      ],
      results: [
        'Built a reusable signal-classification workflow.',
        'Documented the tradeoffs between preprocessing choices and model reliability.'
      ]
    }
  }
];
