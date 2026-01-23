export { LidarrClient } from './client.js'
export type { ClientConfig } from '../core/index.js'

// Re-export types
export type {
  // Artist
  Artist,
  ArtistEditor,
  ArtistStatistics,
  AddArtistOptions,
  // Album
  Album,
  AlbumRelease,
  AlbumStatistics,
  AddAlbumOptions,
  AlbumAddType,
  AlbumsMonitored,
  AlbumStudio,
  AlbumStudioArtist,
  // Track
  Track,
  TrackFile,
  TrackFileList,
  // Medium
  Medium,
  // Quality
  QualityProfile,
  QualityProfileQualityItem,
  QualityDefinition,
  Quality,
  QualityModel,
  // Metadata Profile
  MetadataProfile,
  MetadataProfileElement,
  // Custom Format
  CustomFormat,
  CustomFormatBulk,
  CustomFormatSpecificationSchema,
  // Language
  Language,
  // Release
  Release,
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
  // Delay Profile
  DelayProfile,
  // Custom Filter
  CustomFilter,
  // Localization
  Localization,
  // Media
  MediaCover,
  MediaCoverTypes,
  MediaInfo,
  // Ratings
  Ratings,
  // Rename
  Rename,
  // Retag
  Retag,
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
  AlbumPagingResource
} from './types.js'

// Re-export command types
export type { LidarrCommand } from './resources/command.js'

// Re-export option types
export type { GetArtistOptions, DeleteArtistOptions } from './resources/artist.js'
export type { GetAlbumOptions, DeleteAlbumOptions } from './resources/album.js'
export type { GetTrackOptions } from './resources/track.js'
export type { CalendarOptions, CalendarFeedOptions } from './resources/calendar.js'
export type { GetQueueOptions, GetQueueDetailsOptions, DeleteQueueOptions } from './resources/queue.js'
export type { GetHistoryOptions } from './resources/history.js'
export type { GetWantedOptions } from './resources/wanted.js'
export type { GetLogOptions } from './resources/system.js'
