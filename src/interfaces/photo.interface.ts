export interface IPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  public_domain: boolean;
  description: string;
  alt_description: string;
  slug: string;
  exif: {
    make: string;
    model: string;
    name: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
  };
  location: {
    city: string;
    country: string;
    position: {
      latitude: number;
      longitude: number;
    };
  };
  tags: {
    title: string;
  }[];
  current_user_collections: {
    id: number;
    title: string;
    published_at: string;
    last_collected_at: string;
    updated_at: string;
    cover_photo: null;
    user: null;
  }[];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
    };
  };
}

export interface IPhotoSearchRes {
  total: number;
  total_pages: number;
  results: IPhoto[];
}

export interface IPhotoStatistics {
  id: string;
  downloads: {
    total: number;
    historical: {
      change: number;
      resolution: string;
      quantity: number;
      values: {
        date: string;
        value: number;
      }[];
    };
  };
  views: {
    total: number;
    historical: {
      change: number;
      resolution: string;
      quantity: number;
      values: {
        date: string;
        value: number;
      }[];
    };
  };
  likes: {
    total: number;
    historical: {
      change: number;
      resolution: string;
      quantity: number;
      values: {
        date: string;
        value: number;
      }[];
    };
  };
}
