import type { components } from './generated-types.js'

// Author (main entity - like Series in Sonarr, Artist in Lidarr)
export type Author = components['schemas']['AuthorResource']
export type AuthorEditor = components['schemas']['AuthorEditorResource']
export type AuthorStatistics = components['schemas']['AuthorStatisticsResource']
export type AddAuthorOptions = components['schemas']['AddAuthorOptions']

// Book (like Episode in Sonarr, Album in Lidarr)
export type Book = components['schemas']['BookResource']
export type BookEditor = components['schemas']['BookEditorResource']
export type BookStatistics = components['schemas']['BookStatisticsResource']
export type BooksMonitored = components['schemas']['BooksMonitoredResource']
export type Bookshelf = components['schemas']['BookshelfResource']
export type BookshelfAuthor = components['schemas']['BookshelfAuthorResource']

// Edition (different versions of a book)
export type Edition = components['schemas']['EditionResource']

// Book File
export type BookFile = components['schemas']['BookFileResource']
export type BookFileList = components['schemas']['BookFileListResource']

// Series (book series)
export type Series = components['schemas']['SeriesResource']
export type SeriesBookLink = components['schemas']['SeriesBookLinkResource']

// Quality
export type QualityProfile = components['schemas']['QualityProfileResource']
export type QualityProfileQualityItem = components['schemas']['QualityProfileQualityItemResource']
export type QualityDefinition = components['schemas']['QualityDefinitionResource']
export type Quality = components['schemas']['Quality']
export type QualityModel = components['schemas']['QualityModel']
export type ProfileFormatItem = components['schemas']['ProfileFormatItemResource']

// Metadata Profile
export type MetadataProfile = components['schemas']['MetadataProfileResource']

// Custom Format
export type CustomFormat = components['schemas']['CustomFormatResource']

// Language
export type Language = components['schemas']['LanguageResource']

// Release (search results)
export type Release = components['schemas']['ReleaseResource']
export type ReleaseProfile = components['schemas']['ReleaseProfileResource']

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
export type EntityHistoryEventType = components['schemas']['EntityHistoryEventType']

// Calendar
export type Calendar = Book

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
export type ImportExclusion = components['schemas']['ImportListExclusionResource']

// Notification
export type Notification = components['schemas']['NotificationResource']

// Metadata
export type Metadata = components['schemas']['MetadataResource']
export type MetadataProviderConfig = components['schemas']['MetadataProviderConfigResource']

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
export type ManualImportUpdate = components['schemas']['ManualImportUpdateResource']

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
export type DevelopmentConfig = components['schemas']['DevelopmentConfigResource']

// Delay Profile
export type DelayProfile = components['schemas']['DelayProfileResource']

// Custom Filter
export type CustomFilter = components['schemas']['CustomFilterResource']

// Media
export type MediaCover = components['schemas']['MediaCover']
export type MediaCoverTypes = components['schemas']['MediaCoverTypes']
export type MediaInfo = components['schemas']['MediaInfoResource']

// Ratings
export type Ratings = components['schemas']['Ratings']

// Rename/Retag
export type RenameBook = components['schemas']['RenameBookResource']
export type RetagBook = components['schemas']['RetagBookResource']

// Wanted
export type MonitorTypes = components['schemas']['MonitorTypes']
export type NewItemMonitorTypes = components['schemas']['NewItemMonitorTypes']
export type MonitoringOptions = components['schemas']['MonitoringOptions']

// Misc types
export type ApplyTags = components['schemas']['ApplyTags']
export type SortDirection = components['schemas']['SortDirection']
export type Field = components['schemas']['Field']
export type SelectOption = components['schemas']['SelectOption']
export type ProviderMessage = components['schemas']['ProviderMessage']
export type Links = components['schemas']['Links']

// Paging types
export type BlocklistPagingResource = components['schemas']['BlocklistResourcePagingResource']
export type HistoryPagingResource = components['schemas']['HistoryResourcePagingResource']
export type QueuePagingResource = components['schemas']['QueueResourcePagingResource']
export type LogPagingResource = components['schemas']['LogResourcePagingResource']
export type BookPagingResource = components['schemas']['BookResourcePagingResource']
