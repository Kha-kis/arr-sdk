import type { components } from './generated-types.js'

// Movie
export type Movie = components['schemas']['MovieResource']
export type MovieFile = components['schemas']['MovieFileResource']
export type MovieEditor = components['schemas']['MovieEditorResource']
export type MovieStatistics = components['schemas']['MovieStatisticsResource']
export type AddMovieOptions = components['schemas']['AddMovieOptions']
export type AlternativeTitle = components['schemas']['AlternativeTitleResource']
export type MovieStatusType = components['schemas']['MovieStatusType']

// Collection
export type Collection = components['schemas']['CollectionResource']
export type CollectionMovie = components['schemas']['CollectionMovieResource']
export type CollectionUpdate = components['schemas']['CollectionUpdateResource']

// Quality
export type QualityProfile = components['schemas']['QualityProfileResource']
export type QualityProfileQualityItem = components['schemas']['QualityProfileQualityItemResource']
export type QualityDefinition = components['schemas']['QualityDefinitionResource']
export type QualityDefinitionLimits = components['schemas']['QualityDefinitionLimitsResource']
export type Quality = components['schemas']['Quality']
export type QualityModel = components['schemas']['QualityModel']

// Custom Format
export type CustomFormat = components['schemas']['CustomFormatResource']
export type CustomFormatBulk = components['schemas']['CustomFormatBulkResource']
export type CustomFormatSpecificationSchema = components['schemas']['CustomFormatSpecificationSchema']
export type ProfileFormatItem = components['schemas']['ProfileFormatItemResource']

// Language
export type Language = components['schemas']['Language']
export type LanguageResource = components['schemas']['LanguageResource']

// Release
export type Release = components['schemas']['ReleaseResource']
export type ReleaseType = components['schemas']['CalendarReleaseType']

// Command
export type Command = components['schemas']['Command']
export type CommandResource = components['schemas']['CommandResource']
export type CommandStatus = components['schemas']['CommandStatus']
export type CommandResult = components['schemas']['CommandResult']
export type CommandPriority = components['schemas']['CommandPriority']
export type CommandTrigger = components['schemas']['CommandTrigger']

// Queue
export type Queue = components['schemas']['QueueResource']
export type QueueBulk = components['schemas']['QueueBulkResource']
export type QueueStatus = components['schemas']['QueueStatusResource']

// History
export type History = components['schemas']['HistoryResource']
export type MovieHistoryEventType = components['schemas']['MovieHistoryEventType']

// Calendar
export type Calendar = Movie

// Download Client
export type DownloadClient = components['schemas']['DownloadClientResource']
export type DownloadClientBulk = components['schemas']['DownloadClientBulkResource']
export type DownloadClientConfig = components['schemas']['DownloadClientConfigResource']
export type DownloadProtocol = components['schemas']['DownloadProtocol']

// Indexer
export type Indexer = components['schemas']['IndexerResource']
export type IndexerBulk = components['schemas']['IndexerBulkResource']
export type IndexerConfig = components['schemas']['IndexerConfigResource']
export type IndexerFlag = components['schemas']['IndexerFlagResource']

// Import List
export type ImportList = components['schemas']['ImportListResource']
export type ImportListBulk = components['schemas']['ImportListBulkResource']
export type ImportListConfig = components['schemas']['ImportListConfigResource']
export type ImportExclusion = components['schemas']['ImportListExclusionResource']
export type ImportExclusionBulk = components['schemas']['ImportListExclusionBulkResource']

// Notification
export type Notification = components['schemas']['NotificationResource']

// Metadata
export type Metadata = components['schemas']['MetadataResource']

// Tag
export type Tag = components['schemas']['TagResource']
export type TagDetails = components['schemas']['TagDetailsResource']

// Root Folder
export type RootFolder = components['schemas']['RootFolderResource']

// Remote Path Mapping
export type RemotePathMapping = components['schemas']['RemotePathMappingResource']

// Blocklist
export type Blocklist = components['schemas']['BlocklistResource']
export type BlocklistBulk = components['schemas']['BlocklistBulkResource']

// Manual Import
export type ManualImport = components['schemas']['ManualImportResource']
export type ManualImportReprocess = components['schemas']['ManualImportReprocessResource']

// Parse
export type Parse = components['schemas']['ParseResource']

// Backup
export type Backup = components['schemas']['BackupResource']
export type BackupType = components['schemas']['BackupType']

// System
export type SystemResource = components['schemas']['SystemResource']
export type Health = components['schemas']['HealthResource']
export type HealthCheckResult = components['schemas']['HealthCheckResult']
export type DiskSpace = components['schemas']['DiskSpaceResource']
export type Task = components['schemas']['TaskResource']
export type Log = components['schemas']['LogResource']
export type LogFile = components['schemas']['LogFileResource']
export type Update = components['schemas']['UpdateResource']

// Config
export type HostConfig = components['schemas']['HostConfigResource']
export type UiConfig = components['schemas']['UiConfigResource']
export type NamingConfig = components['schemas']['NamingConfigResource']
export type MediaManagementConfig = components['schemas']['MediaManagementConfigResource']

// Delay Profile
export type DelayProfile = components['schemas']['DelayProfileResource']

// Auto Tagging
export type AutoTagging = components['schemas']['AutoTaggingResource']
export type AutoTaggingSpecificationSchema = components['schemas']['AutoTaggingSpecificationSchema']

// Custom Filter
export type CustomFilter = components['schemas']['CustomFilterResource']

// Localization
export type LocalizationLanguage = components['schemas']['LocalizationLanguageResource']

// Media
export type MediaCover = components['schemas']['MediaCover']
export type MediaCoverTypes = components['schemas']['MediaCoverTypes']
export type MediaInfo = components['schemas']['MediaInfoResource']

// Ratings
export type Ratings = components['schemas']['Ratings']

// Rename Movie
export type RenameMovie = components['schemas']['RenameMovieResource']

// Movie File List
export type MovieFileList = components['schemas']['MovieFileListResource']

// Credit
export type Credit = components['schemas']['CreditResource']

// Extra File
export type ExtraFile = components['schemas']['ExtraFileResource']

// Misc types
export type ApplyTags = components['schemas']['ApplyTags']
export type SortDirection = components['schemas']['SortDirection']
export type Field = components['schemas']['Field']
export type SelectOption = components['schemas']['SelectOption']
export type ProviderMessage = components['schemas']['ProviderMessage']

// Paging types
export type BlocklistPagingResource = components['schemas']['BlocklistResourcePagingResource']
export type HistoryPagingResource = components['schemas']['HistoryResourcePagingResource']
export type QueuePagingResource = components['schemas']['QueueResourcePagingResource']
export type LogPagingResource = components['schemas']['LogResourcePagingResource']
export type ImportExclusionPagingResource = components['schemas']['ImportListExclusionResourcePagingResource']
