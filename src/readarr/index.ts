// Main client
export { ReadarrClient } from './client.js'

// Re-export all types
export type {
  // Author
  Author,
  AuthorEditor,
  AuthorStatistics,
  AddAuthorOptions,
  // Book
  Book,
  BookEditor,
  BookStatistics,
  BooksMonitored,
  Bookshelf,
  BookshelfAuthor,
  // Edition
  Edition,
  // Book File
  BookFile,
  BookFileList,
  // Series
  Series,
  SeriesBookLink,
  // Quality
  QualityProfile,
  QualityProfileQualityItem,
  QualityDefinition,
  Quality,
  QualityModel,
  ProfileFormatItem,
  // Metadata Profile
  MetadataProfile,
  // Custom Format
  CustomFormat,
  // Language
  Language,
  // Release
  Release,
  ReleaseProfile,
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
  EntityHistoryEventType,
  // Calendar
  Calendar,
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
  ImportExclusion,
  // Notification
  Notification,
  // Metadata
  Metadata,
  MetadataProviderConfig,
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
  ManualImportUpdate,
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
  DevelopmentConfig,
  // Delay Profile
  DelayProfile,
  // Custom Filter
  CustomFilter,
  // Media
  MediaCover,
  MediaCoverTypes,
  MediaInfo,
  // Ratings
  Ratings,
  // Rename/Retag
  RenameBook,
  RetagBook,
  // Wanted
  MonitorTypes,
  NewItemMonitorTypes,
  MonitoringOptions,
  // Misc types
  ApplyTags,
  SortDirection,
  Field,
  SelectOption,
  ProviderMessage,
  Links,
  // Paging types
  BlocklistPagingResource,
  HistoryPagingResource,
  QueuePagingResource,
  LogPagingResource,
  BookPagingResource
} from './types.js'

// Re-export command types
export type { ReadarrCommand } from './resources/command.js'

// Re-export option types
export type { GetAuthorOptions, DeleteAuthorOptions } from './resources/author.js'
export type { GetBookOptions, DeleteBookOptions } from './resources/book.js'
export type { GetBookFileOptions } from './resources/bookFile.js'
export type { GetCalendarOptions } from './resources/calendar.js'
export type { GetQueueOptions } from './resources/queue.js'
export type { GetHistoryOptions } from './resources/history.js'
export type { GetWantedOptions } from './resources/wanted.js'
export type { GetLogOptions } from './resources/system.js'

// Re-export manual import types
export type { GetManualImportOptions } from './resources/manualImport.js'
export type { ReadarrManualImportFile } from './resources/command.js'
