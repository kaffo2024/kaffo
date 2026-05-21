export interface EducationType {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface EducationStageType {
  id: string;
  name: string;
  slug: string;
  image: string;
  grade_levels?: EducationLevelType[];
}

export interface EducationLevelType {
  id: string;
  name: string;
  slug: string;
}

export interface VideoType {
  title: string;
  link: string;
  cover: string;
  is_trial: boolean;
  id: string;
}
export interface CoursesType {
  id: string;
  grade_level?: string;
  slug: string;
  title: string;
  subject: string;
  desc: string;
  cover: string;
  course_videos?: VideoType[];
}

export interface ErrorSchema {
  message?: string;
  extra?: {
    fields?: any;
  };
}

export interface PaginationTypeResponse<T> {
  limit: number;
  offset: number;
  count: number;
  next: string;
  previous: string;
  results: T;
}

export interface BlogType {
  id: string;
  cover: string;
  overview: string;
  created_at: string;
  content: string;
  slug: string;
}

export interface BlogsType extends PaginationTypeResponse<BlogType[]> {}

export interface ErrorsType {
  extra: {
    fields: any;
  };
  message: string;
}

export interface CategoryType {
  id: number;
  ref: string;
  url: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  effect: number;
  icon: string;
  color: string;
  gradient: string;
  features: string[];
}

export interface ServicesType {
  id: string;
  title: string;
  cover: string;
  slug: string;
  parent: string;
}

export interface ProjectGalleryType {
  img: string;
}
export interface ServicesProjectsType {
  id: string;
  title: string;
  cover: string;
  slug: string;
  overview: string;
  year_completed?: string;
  partner?: string;
  gallery: ProjectGalleryType[];
}
