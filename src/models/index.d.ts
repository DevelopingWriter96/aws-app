import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export declare class ExtendedData {
  readonly Tags?: (string | null)[];
  readonly Description?: string;
  constructor(init: ModelInit<ExtendedData>);
}

export declare class Barcode {
  readonly EAN?: string;
  readonly UPC?: string;
  constructor(init: ModelInit<Barcode>);
}

export declare class Dimensions {
  readonly Height?: number;
  readonly Width?: number;
  readonly Depth?: number;
  readonly Weight?: number;
  constructor(init: ModelInit<Dimensions>);
}

export declare class AgeRange {
  readonly AgeRange?: string;
  constructor(init: ModelInit<AgeRange>);
}

export declare class DE {
  readonly RetailPrice?: number;
  readonly DateFirstAvaliable?: string;
  readonly DateLastAvaliable?: string;
  constructor(init: ModelInit<DE>);
}

export declare class CA {
  readonly RetailPrice?: number;
  readonly DateFirstAvaliable?: string;
  readonly DateLastAvaliable?: string;
  constructor(init: ModelInit<CA>);
}

export declare class UK {
  readonly RetailPrice?: number;
  readonly DateFirstAvaliable?: string;
  readonly DateLastAvaliable?: string;
  constructor(init: ModelInit<UK>);
}

export declare class US {
  readonly RetailPrice?: number;
  readonly DateFirstAvaliable?: string;
  readonly DateLastAvaliable?: string;
  constructor(init: ModelInit<US>);
}

export declare class LEGOCom {
  readonly US?: US;
  readonly UK?: UK;
  readonly CA?: CA;
  readonly DE?: DE;
  constructor(init: ModelInit<LEGOCom>);
}

export declare class Collections {
  readonly OwnedBy?: number;
  readonly WantedBy?: number;
  constructor(init: ModelInit<Collections>);
}

export declare class Collection {
  readonly Collection?: string;
  constructor(init: ModelInit<Collection>);
}

export declare class Image {
  readonly ThumbnailURL?: string;
  readonly ImageURL?: string;
  constructor(init: ModelInit<Image>);
}

type SetDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SetData {
  readonly id: string;
  readonly Number?: string;
  readonly NumberVariant?: number;
  readonly Name?: string;
  readonly Year?: number;
  readonly Theme?: string;
  readonly ThemeGroup?: string;
  readonly Subtheme?: string;
  readonly Category?: string;
  readonly Released?: boolean;
  readonly Pieces?: number;
  readonly Minifigs?: number;
  readonly Image?: Image;
  readonly BricksetURL?: string;
  readonly Collection?: Collection;
  readonly Collections?: Collections;
  readonly LEGOCom?: LEGOCom;
  readonly Rating?: number;
  readonly ReviewCount?: number;
  readonly PackagingType?: string;
  readonly Availability?: string;
  readonly InstructionsCount?: number;
  readonly AdditionalImageCount?: number;
  readonly AgeRange?: AgeRange;
  readonly Dimensions?: Dimensions;
  readonly Barcode?: Barcode;
  readonly ExtendedData?: ExtendedData;
  readonly LastUpdated?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SetData, SetDataMetaData>);
  static copyOf(source: SetData, mutator: (draft: MutableModel<SetData, SetDataMetaData>) => MutableModel<SetData, SetDataMetaData> | void): SetData;
}