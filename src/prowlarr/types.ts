import type { components } from './generated-types.js'

// Indexer
export type Indexer = components['schemas']['IndexerResource']
export type IndexerBulk = components['schemas']['IndexerBulkResource']
export type IndexerCapability = components['schemas']['IndexerCapabilityResource']
export type IndexerProxy = components['schemas']['IndexerProxyResource']
export type IndexerStats = components['schemas']['IndexerStatsResource']
export type IndexerStatus = components['schemas']['IndexerStatusResource']
export type IndexerCategory = components['schemas']['IndexerCategory']

// Application
export type Application = components['schemas']['ApplicationResource']
export type ApplicationBulk = components['schemas']['ApplicationBulkResource']

// App Profile
export type AppProfile = components['schemas']['AppProfileResource']

// Release / Search
export type Release = components['schemas']['ReleaseResource']

// Command
export type Command = components['schemas']['Command']
export type CommandResource = components['schemas']['CommandResource']
export type CommandStatus = components['schemas']['CommandStatus']
export type CommandPriority = components['schemas']['CommandPriority']
export type CommandTrigger = components['schemas']['CommandTrigger']

// History
export type History = components['schemas']['HistoryResource']

// Download Client
export type DownloadClient = components['schemas']['DownloadClientResource']
export type DownloadClientBulk = components['schemas']['DownloadClientBulkResource']
export type DownloadClientConfig = components['schemas']['DownloadClientConfigResource']
export type DownloadProtocol = components['schemas']['DownloadProtocol']

// Notification
export type Notification = components['schemas']['NotificationResource']

// Tag
export type Tag = components['schemas']['TagResource']
export type TagDetails = components['schemas']['TagDetailsResource']

// Backup
export type Backup = components['schemas']['BackupResource']
export type BackupType = components['schemas']['BackupType']

// System
export type SystemResource = components['schemas']['SystemResource']
export type Health = components['schemas']['HealthResource']
export type HealthCheckResult = components['schemas']['HealthCheckResult']
export type Task = components['schemas']['TaskResource']
export type Log = components['schemas']['LogResource']
export type LogFile = components['schemas']['LogFileResource']
export type Update = components['schemas']['UpdateResource']

// Config
export type HostConfig = components['schemas']['HostConfigResource']
export type UiConfig = components['schemas']['UiConfigResource']
export type DevelopmentConfig = components['schemas']['DevelopmentConfigResource']

// Custom Filter
export type CustomFilter = components['schemas']['CustomFilterResource']

// Localization
export type LocalizationOption = components['schemas']['LocalizationOption']

// API Info
export type ApiInfo = components['schemas']['ApiInfoResource']

// Misc types
export type ApplyTags = components['schemas']['ApplyTags']
export type SortDirection = components['schemas']['SortDirection']
export type Field = components['schemas']['Field']
export type SelectOption = components['schemas']['SelectOption']
export type ProviderMessage = components['schemas']['ProviderMessage']
export type PrivacyLevel = components['schemas']['PrivacyLevel']
export type HistoryEventType = components['schemas']['HistoryEventType']

// Paging types
export type HistoryPagingResource = components['schemas']['HistoryResourcePagingResource']
export type LogPagingResource = components['schemas']['LogResourcePagingResource']
