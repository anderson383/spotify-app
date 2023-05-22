export interface Image {
  url: string
}

export interface IArtist {
  id: string
  name: string
  items?: IArtist[]
  artists?: IArtist[]
  images: Image[]
  followers: {
    total: number
  }
  external_urls: {
    spotify: string
  }
}

export interface IAlbum {
  id: string
  name: string
  images: Image[]
  artists: IArtist[]
  items?: IAlbum[],
  external_urls: {
    spotify: string
  }
}

export interface ITrack {
  id: string
  name: string
  album: IAlbum
  artists: IArtist[]
  preview_url: string
}

export interface ResponseSearch {
  artists?: {
    items: IArtist[]
  },
  albums?: {
    items: IAlbum[]
  },
  tracks?: {
    items: ITrack[]
  },
}

export interface ResponseCommon {
  artists?: IArtist[],
  albums?: IAlbum[],
  tracks?: IArtist[]
}

export interface SpotifyRepository {
  getSearch(querySearch:string): Promise<ResponseSearch>;

  getArtists(): Promise<IArtist[]>;

  getAlbums(): Promise<IAlbum[]>;
}
