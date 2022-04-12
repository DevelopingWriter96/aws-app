import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class ExtendedData {
  readonly Tags?: (string | null)[] | null;
  readonly Description?: string | null;
  constructor(init: ModelInit<ExtendedData>);
}

export declare class Barcode {
  readonly EAN?: string | null;
  readonly UPC?: string | null;
  constructor(init: ModelInit<Barcode>);
}

export declare class Dimensions {
  readonly Height?: number | null;
  readonly Width?: number | null;
  readonly Depth?: number | null;
  readonly Weight?: number | null;
  constructor(init: ModelInit<Dimensions>);
}

export declare class AgeRange {
  readonly AgeRange?: string | null;
  constructor(init: ModelInit<AgeRange>);
}

export declare class DE {
  readonly RetailPrice?: number | null;
  readonly DateFirstAvaliable?: string | null;
  readonly DateLastAvaliable?: string | null;
  constructor(init: ModelInit<DE>);
}

export declare class CA {
  readonly RetailPrice?: number | null;
  readonly DateFirstAvaliable?: string | null;
  readonly DateLastAvaliable?: string | null;
  constructor(init: ModelInit<CA>);
}

export declare class UK {
  readonly RetailPrice?: number | null;
  readonly DateFirstAvaliable?: string | null;
  readonly DateLastAvaliable?: string | null;
  constructor(init: ModelInit<UK>);
}

export declare class US {
  readonly RetailPrice?: number | null;
  readonly DateFirstAvaliable?: string | null;
  readonly DateLastAvaliable?: string | null;
  constructor(init: ModelInit<US>);
}

export declare class LEGOCom {
  readonly US?: US | null;
  readonly UK?: UK | null;
  readonly CA?: CA | null;
  readonly DE?: DE | null;
  constructor(init: ModelInit<LEGOCom>);
}

export declare class Collections {
  readonly OwnedBy?: number | null;
  readonly WantedBy?: number | null;
  constructor(init: ModelInit<Collections>);
}

export declare class Collection {
  readonly Collection?: string | null;
  constructor(init: ModelInit<Collection>);
}

type ImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SetDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Image {
  readonly id: string;
  readonly ThumbnailURL?: string | null;
  readonly ImageURL?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Image, ImageMetaData>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image, ImageMetaData>) => MutableModel<Image, ImageMetaData> | void): Image;
}

export declare class SetData {
  readonly id: string;
  readonly Number?: string | null;
  readonly NumberVariant?: number | null;
  readonly Name?: string | null;
  readonly Year?: number | null;
  readonly Theme?: string | null;
  readonly ThemeGroup?: string | null;
  readonly Subtheme?: string | null;
  readonly Category?: string | null;
  readonly Released?: boolean | null;
  readonly Pieces?: number | null;
  readonly Minifigs?: number | null;
  readonly BricksetURL?: string | null;
  readonly Collection?: Collection | null;
  readonly Collections?: Collections | null;
  readonly LEGOCom?: LEGOCom | null;
  readonly Rating?: number | null;
  readonly ReviewCount?: number | null;
  readonly PackagingType?: string | null;
  readonly Availability?: string | null;
  readonly InstructionsCount?: number | null;
  readonly AdditionalImageCount?: number | null;
  readonly AgeRange?: AgeRange | null;
  readonly Dimensions?: Dimensions | null;
  readonly Barcode?: Barcode | null;
  readonly ExtendedData?: ExtendedData | null;
  readonly LastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SetData, SetDataMetaData>);
  static copyOf(source: SetData, mutator: (draft: MutableModel<SetData, SetDataMetaData>) => MutableModel<SetData, SetDataMetaData> | void): SetData;
}