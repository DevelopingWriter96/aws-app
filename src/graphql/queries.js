/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSetData = /* GraphQL */ `
  query GetSetData($id: ID!) {
    getSetData(id: $id) {
      id
      Number
      NumberVariant
      Name
      Year
      Theme
      ThemeGroup
      Subtheme
      Category
      Released
      Pieces
      Minifigs
      Image {
        ThumbnailURL
        ImageURL
      }
      BricksetURL
      Collection {
        Collection
      }
      Collections {
        OwnedBy
        WantedBy
      }
      LEGOCom {
        US {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        UK {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        CA {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        DE {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
      }
      Rating
      ReviewCount
      PackagingType
      Availability
      InstructionsCount
      AdditionalImageCount
      AgeRange {
        AgeRange
      }
      Dimensions {
        Height
        Width
        Depth
        Weight
      }
      Barcode {
        EAN
        UPC
      }
      ExtendedData {
        Tags
        Description
      }
      LastUpdated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSetData = /* GraphQL */ `
  query ListSetData(
    $filter: ModelSetDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSetData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Number
        NumberVariant
        Name
        Year
        Theme
        ThemeGroup
        Subtheme
        Category
        Released
        Pieces
        Minifigs
        Image {
          ThumbnailURL
          ImageURL
        }
        BricksetURL
        Collection {
          Collection
        }
        Collections {
          OwnedBy
          WantedBy
        }
        Rating
        ReviewCount
        PackagingType
        Availability
        InstructionsCount
        AdditionalImageCount
        AgeRange {
          AgeRange
        }
        Dimensions {
          Height
          Width
          Depth
          Weight
        }
        Barcode {
          EAN
          UPC
        }
        ExtendedData {
          Tags
          Description
        }
        LastUpdated
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSetData = /* GraphQL */ `
  query SyncSetData(
    $filter: ModelSetDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSetData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Number
        NumberVariant
        Name
        Year
        Theme
        ThemeGroup
        Subtheme
        Category
        Released
        Pieces
        Minifigs
        Image {
          ThumbnailURL
          ImageURL
        }
        BricksetURL
        Collection {
          Collection
        }
        Collections {
          OwnedBy
          WantedBy
        }
        Rating
        ReviewCount
        PackagingType
        Availability
        InstructionsCount
        AdditionalImageCount
        AgeRange {
          AgeRange
        }
        Dimensions {
          Height
          Width
          Depth
          Weight
        }
        Barcode {
          EAN
          UPC
        }
        ExtendedData {
          Tags
          Description
        }
        LastUpdated
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
