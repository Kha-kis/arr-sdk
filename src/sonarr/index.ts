export { SonarrClient } from './client.js'
export type { ClientConfig } from '../core/index.js'

// Re-export types
export type {
  // Series
  Series,
  SeriesEditor,
  SeriesStatistics,
  SeriesType,
  AddSeriesOptions,
  AlternateTitle,
  // Season
  Season,
  SeasonStatistics,
  SeasonPass,
  SeasonPassSeries,
  // Episode
  Episode,
  EpisodeFile,
  EpisodeFileList,
  EpisodesMonitored,
  EpisodeHistoryEventType,
  RenameEpisode,
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
  LanguageProfile,
  LanguageProfileItem,
  LanguageResource,
  // Release
  Release,
  ReleaseProfile,
  ReleaseEpisode,
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
  ImportListExclusion,
  ImportListExclusionBulk,
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
  Localization,
  LocalizationLanguage,
  // Media
  MediaCover,
  MediaCoverTypes,
  MediaInfo,
  // Ratings
  Ratings,
  // Misc types
  MonitorTypes,
  NewItemMonitorTypes,
  ApplyTags,
  SortDirection,
  Field,
  SelectOption,
  ProviderMessage,
  // Paging types
  BlocklistPagingResource,
  EpisodePagingResource,
  HistoryPagingResource,
  QueuePagingResource,
  LogPagingResource,
  ImportListExclusionPagingResource
} from './types.js'

// Re-export command types
export type { SonarrCommand, SonarrManualImportFile } from './resources/command.js'

// Re-export wanted types
export type { GetWantedOptions } from './resources/wanted.js'

// Re-export option types
export type { GetSeriesOptions, DeleteSeriesOptions } from './resources/series.js'
export type { GetEpisodesOptions } from './resources/episode.js'
export type { CalendarOptions, CalendarFeedOptions } from './resources/calendar.js'
export type { GetQueueOptions, GetQueueDetailsOptions, DeleteQueueOptions } from './resources/queue.js'
export type { GetHistoryOptions } from './resources/history.js'
export type { SearchReleasesOptions } from './resources/release.js'
export type { GetBlocklistOptions } from './resources/blocklist.js'
export type { GetManualImportOptions } from './resources/manualImport.js'
export type { FileSystemEntry, GetFileSystemOptions } from './resources/filesystem.js'
