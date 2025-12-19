export { ProwlarrClient } from './client.js'
export type { ClientConfig } from '../core/index.js'

// Re-export types
export type {
  // Indexer
  Indexer,
  IndexerBulk,
  IndexerCapability,
  IndexerProxy,
  IndexerStats,
  IndexerStatus,
  IndexerCategory,
  // Application
  Application,
  ApplicationBulk,
  // App Profile
  AppProfile,
  // Release / Search
  Release,
  // Command
  Command,
  CommandResource,
  CommandStatus,
  CommandPriority,
  CommandTrigger,
  // History
  History,
  HistoryEventType,
  // Download Client
  DownloadClient,
  DownloadClientBulk,
  DownloadClientConfig,
  DownloadProtocol,
  // Notification
  Notification,
  // Tag
  Tag,
  TagDetails,
  // Backup
  Backup,
  BackupType,
  // System
  SystemResource,
  Health,
  HealthCheckResult,
  Task,
  Log,
  LogFile,
  Update,
  // Config
  HostConfig,
  UiConfig,
  DevelopmentConfig,
  // Custom Filter
  CustomFilter,
  // Localization
  LocalizationOption,
  // API Info
  ApiInfo,
  // Misc types
  ApplyTags,
  SortDirection,
  Field,
  SelectOption,
  ProviderMessage,
  PrivacyLevel,
  // Paging types
  HistoryPagingResource,
  LogPagingResource
} from './types.js'

// Re-export command types
export type { ProwlarrCommand } from './resources/command.js'

// Re-export option types
export type { SearchOptions } from './resources/search.js'
export type { GetHistoryOptions } from './resources/history.js'
export type { GetIndexerStatsOptions } from './resources/indexer.js'
export type { FileSystemEntry, GetFileSystemOptions } from './resources/filesystem.js'
