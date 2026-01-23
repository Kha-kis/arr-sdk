import { BaseClient, type ClientConfig } from '../core/index.js'
import { AuthorResource } from './resources/author.js'
import { BookResource } from './resources/book.js'
import { EditionResource } from './resources/edition.js'
import { BookFileResource } from './resources/bookFile.js'
import { CalendarResource } from './resources/calendar.js'
import { CommandResource_ } from './resources/command.js'
import { QueueResource } from './resources/queue.js'
import { HistoryResource } from './resources/history.js'
import { QualityProfileResource, QualityDefinitionResource } from './resources/qualityProfile.js'
import { MetadataProfileResource } from './resources/metadataProfile.js'
import { TagResource, TagDetailsResource } from './resources/tag.js'
import { RootFolderResource } from './resources/rootFolder.js'
import { WantedResource } from './resources/wanted.js'
import {
  SystemInfoResource,
  HealthResource,
  DiskSpaceResource,
  TaskResource,
  BackupResource,
  LogResource,
  LogFileResource,
  UpdateResource
} from './resources/system.js'

export class ReadarrClient extends BaseClient {
  public readonly author: AuthorResource
  public readonly book: BookResource
  public readonly edition: EditionResource
  public readonly bookFile: BookFileResource
  public readonly calendar: CalendarResource
  public readonly command: CommandResource_
  public readonly queue: QueueResource
  public readonly history: HistoryResource
  public readonly qualityProfile: QualityProfileResource
  public readonly qualityDefinition: QualityDefinitionResource
  public readonly metadataProfile: MetadataProfileResource
  public readonly tag: TagResource
  public readonly tagDetails: TagDetailsResource
  public readonly rootFolder: RootFolderResource
  public readonly wanted: WantedResource
  public readonly system: SystemInfoResource
  public readonly health: HealthResource
  public readonly diskSpace: DiskSpaceResource
  public readonly task: TaskResource
  public readonly backup: BackupResource
  public readonly log: LogResource
  public readonly logFile: LogFileResource
  public readonly update: UpdateResource

  constructor(config: ClientConfig) {
    super(config)

    this.author = new AuthorResource(this)
    this.book = new BookResource(this)
    this.edition = new EditionResource(this)
    this.bookFile = new BookFileResource(this)
    this.calendar = new CalendarResource(this)
    this.command = new CommandResource_(this)
    this.queue = new QueueResource(this)
    this.history = new HistoryResource(this)
    this.qualityProfile = new QualityProfileResource(this)
    this.qualityDefinition = new QualityDefinitionResource(this)
    this.metadataProfile = new MetadataProfileResource(this)
    this.tag = new TagResource(this)
    this.tagDetails = new TagDetailsResource(this)
    this.rootFolder = new RootFolderResource(this)
    this.wanted = new WantedResource(this)
    this.system = new SystemInfoResource(this)
    this.health = new HealthResource(this)
    this.diskSpace = new DiskSpaceResource(this)
    this.task = new TaskResource(this)
    this.backup = new BackupResource(this)
    this.log = new LogResource(this)
    this.logFile = new LogFileResource(this)
    this.update = new UpdateResource(this)
  }
}
