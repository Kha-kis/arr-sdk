export { RadarrClient } from './client.js'
export type { ClientConfig } from '../core/index.js'

// Re-export types
export type {
  // Movie
  Movie,
  MovieFile,
  MovieEditor,
  MovieStatistics,
  AddMovieOptions,
  AlternativeTitle,
  MovieStatusType,
  // Collection
  Collection,
  CollectionMovie,
  CollectionUpdate,
  // Quality
  QualityProfile,
  QualityProfileQualityItem,
  QualityDefinition,
  QualityDefinitionLimits,
  Quality,
  QualityModel,
  // Custom Format
  CustomFormat,
  CustomFormatBulk,
  CustomFormatSpecificationSchema,
  ProfileFormatItem,
  // Language
  Language,
  LanguageResource,
  // Release
  Release,
  ReleaseType,
  // Command
  Command,
  CommandResource,
  CommandStatus,
  CommandResult,
  CommandPriority,
  CommandTrigger,
  // Queue
  Queue,
  QueueBulk,
  QueueStatus,
  // History
  History,
  MovieHistoryEventType,
  // Download Client
  DownloadClient,
  DownloadClientBulk,
  DownloadClientConfig,
  DownloadProtocol,
  // Indexer
  Indexer,
  IndexerBulk,
  IndexerConfig,
  IndexerFlag,
  // Import List
  ImportList,
  ImportListBulk,
  ImportListConfig,
  ImportExclusion,
  ImportExclusionBulk,
  // Notification
  Notification,
  // Metadata
  Metadata,
  // Tag
  Tag,
  TagDetails,
  // Root Folder
  RootFolder,
  // Remote Path Mapping
  RemotePathMapping,
  // Blocklist
  Blocklist,
  BlocklistBulk,
  // Manual Import
  ManualImport,
  ManualImportReprocess,
  // Parse
  Parse,
  // Backup
  Backup,
  BackupType,
  // System
  SystemResource,
  Health,
  HealthCheckResult,
  DiskSpace,
  Task,
  Log,
  LogFile,
  Update,
  // Config
  HostConfig,
  UiConfig,
  NamingConfig,
  MediaManagementConfig,
  // Delay Profile
  DelayProfile,
  // Auto Tagging
  AutoTagging,
  AutoTaggingSpecificationSchema,
  // Custom Filter
  CustomFilter,
  // Localization
  LocalizationLanguage,
  // Media
  MediaCover,
  MediaInfo,
  // Ratings
  Ratings,
  // Rename Movie
  RenameMovie,
  // Movie File List
  MovieFileList,
  // Credit
  Credit,
  // Extra File
  ExtraFile,
  // Misc types
  ApplyTags,
  SortDirection,
  Field,
  SelectOption,
  ProviderMessage,
  // Paging types
  BlocklistPagingResource,
  HistoryPagingResource,
  QueuePagingResource,
  LogPagingResource,
  ImportExclusionPagingResource
} from './types.js'

// Re-export command types
export type { RadarrCommand, RadarrManualImportFile } from './resources/command.js'

// Re-export wanted types
export type { GetWantedOptions } from './resources/wanted.js'

// Re-export option types
export type { GetMovieOptions, DeleteMovieOptions } from './resources/movie.js'
export type { CalendarOptions, CalendarFeedOptions } from './resources/calendar.js'
export type { GetQueueOptions, GetQueueDetailsOptions, DeleteQueueOptions } from './resources/queue.js'
export type { GetHistoryOptions } from './resources/history.js'
export type { SearchReleasesOptions } from './resources/release.js'
export type { GetBlocklistOptions } from './resources/blocklist.js'
export type { GetManualImportOptions } from './resources/manualImport.js'
export type { FileSystemEntry, GetFileSystemOptions } from './resources/filesystem.js'
