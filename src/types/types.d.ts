//USE
type TNotesResponse = {
  _id: string;
  title: string;
  description: string;
  timestamp: string;
  __v: number;
};

type TNotesEditCreate = {
  title: string;
  description: string;
};

// insight
type TContentsPerRegion = {
  id: string;
  name: string;
  Insights: TInsight[];
};

type TInsight = {
  id: string;
  name: string;
};

type TFeaturedInsight = {
  id: string;
  industries: TIndustry[];
  name: string;
  photo: TFileUrl;
  files: {
    file_url: string;
  };
  brief: string;
};

type TInsightResponse = {
  data: TResponseBody[];
  totalPage: number;
};

type TResponseBody = {
  body: string;
  brief: string;
  has_broadcasted: boolean;
  service_id: number;
  position: number | null;
  insight_id: string;
  files: TInsightFile;
  content_type: string;
  brief: string;
  is_highlight: boolean;
  createdAt: string;
  id: string;
  name: string;
  file_id: string;
  full_file: TFileUrl;
  full_file_id: string;
  region_id: number;
  updatedAt: string;
  region: {
    name: string;
  };
  industries: {
    key: string;
    name: TLanguage;
    id: number;
    client_number: number;
    body: TLanguage;
    industry_id?: number;
  }[];
  services: {
    key: string;
    name: TLanguage;
    id: number;
    // client_number: number;
    body: TLanguage;
    service_id?: number;
  }[];
};

type TInsightFile = {
  blur_hash: string;
  file_url: string;
  id: string;
  name: string;
  service_id: number;
  blurhash: string;
  industry_id: number;
  url: string;
};
type TInsightPagesResult = {
  top_nis: TFeaturedInsight[];
  contents: object;
  contents_per_region: TContentsPerRegion[];
};

type TFeaturedInsight = {
  id: string;
  industries: TInsight[];
  name: string;
};

// industry
type TIndustryResponse = {
  data: TIndustry[];
  totalPage: number;
};

// services
type TServicesResponse = {
  data: TServices[];
};

type TAdminResponse = {
  data: TGetAdminResponse[];
  totalPage: number;
};

type TGetAdminResponse = {
  is_active: boolean;
  email: string;
  password: string;
  full_name: string;
  region: TRegion;
  role: TRole;
};

type TGetAdminAddBody = {
  is_active: boolean;
  email: string;
  password?: string;
  full_name: string;
  region_id: number;
  is_active: boolean;
  title: string;
};

type TArticleAdd = {
  name: string;
  content_type: string;
  body: string;
  region_id: number;
  file_id: string;
  createdAt: string;
  updatedAt: string;
  brief: string;
  industry_id: number;
  region: {
    id: number;
    name: string;
  };
};

type TIndustryServices = {
  body: TLanguage;
  date: string;
  id: number;
  key: string;
  name: string;
  user_id: string;
  is_content: boolean;
  createdAt: string;
  updatedAt: string;
};

type TColorType = {
  [num: number]: {
    [key: string]: string;
  };
};

type TIndustry = {
  result: TLanguage;
  length: number;
  body: TLanguage;
  services: TServices[];
  client_number: number;
  createdAt: string;
  date: string;
  id: number;
  is_show: boolean;
  key: string;
  name: TLanguage;
  service_photo?: {
    id: string;
    file_url: string;
  };
  project_number: number;
  updatedAt?: string;
  user_id?: string;
  picture_id?: string;
  team_members: TTeam_Members[];
  case?: TLanguage;
  description?: TLanguage;
  result?: TLanguage;
  picture_id?: string;
  title?: TLanguage;
  industry_photo_id: string;
  industry_photo: TIndustry_Photo;
  client_photo_id?: string;
  client_photo?: TClient_Photo;
  client_number: number;
  client_results: TClient_Results[];
};

type TClientResult = {
  result: TLanguage;
  case: TLanguage;
  client_photo: TFileUrl;
  description: TLanguage;
  name: string;
  testimony: TLanguage;
  updatedAt?: string;
  user_id?: string;
  picture_id?: string;
  team_members: TTeam_Members[];
  case?: TLanguage;
  description?: TLanguage;
  result?: TLanguage;
  picture_id?: string;
  title?: TLanguage;
  industry_photo_id: string;
  industry_photo: TIndustry_Photo;
  client_photo_id?: string;
  client_photo?: TClient_Photo;
  client_number: number;
  client_results: TClient_Results[];
};

type Services = {
  id: number;
  key: string;
  project_number: number;
  name: string;
  is_content: boolean;
  name: {
    [key: string]: string;
  };
  industry_photo_id: string;
  industry_photo: TIndustry_Photo;
  body: {
    [key: string]: string;
  };
  services: TServices[];
  team_members: TTeam_Members[];
  client_number: number;
  client_results: TClient_Results[];
};

type TClient_Results = {
  id: string;
  name: string;
  case: {
    [key: string]: string;
  };
  result: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  testimony: {
    [key: string]: string;
  };
  client_photo_id: string;
  client_photo?: TClient_Photo;
};

type TClient_Photo = {
  file_url: string;
  id: string;
};

type TIndustry_Photo = {
  blurhash: string;
  file_url: string;
  id: string;
  industry_id: number;
  name: string;
  url: string;
  service_id: number;
};

type TLoginResponse = {
  access_token: string;
};

type TLoginForm = {
  username: string;
  password: string;
};

type TFileUrl = {
  file_url: string;
  name: string;
  id: string;
};

type TRole = {
  id: string;
  role: string;
};

type SubscribersResponse = {
  data: TUsers[];
  total: number;
  totalPage: number;
  first_data: Date;
};

type TUsers = {
  id: string;
  address: string;
  cv: string;
  full_name: string;
  cv_id: string;
  phone: string;
  picture: string;
  picture_id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role_id: number;
  is_active: boolean;
  is_subscribe: boolean;
  role: TRole;
  region: TRegion;
};

type TLanguages = {
  code: string;
  label: string;
};

type TLanguage = {
  en: string;
  vn: string;
  kr: string;
  my: string;
  id: string;
  zh: string;
};

type TNavbarMenu = {
  key: string;
  path?: string;
  dropdowns?: TChildrenNavbarMenu[];
};

type TChildrenNavbarMenu = {
  key: string;
  path: string;
};

type TObjectString = {
  [key: string]: string;
};

type TBriefDetail = {
  title: string;
  "main-text": string;
  "detail-first-heading": string;
  "detail-first-text": string;
  "detail-second-heading": string;
  "detail-second-text": string;
};

type TIndustryMenu = {
  label: string;
  href: string;
};

type TArticleItem = {
  img: string;
  title: string;
  type: string;
};

type TServiceData = {
  key: string;
  "key-desc": string;
  path: string;
};

type TServices = {
  name: TLanguage;
  body?: TLanguage;
  date: string;
  id: number;
  key: string;
  user_id?: string;
  is_content: boolean;
  createdAt: string;
  updatedAt: string;
  brief: {
    [key: string]: string;
  };
  description: TLanguage;
  client_results: TClient_Results[];
  team_members: TTeam_Members[];
  sub_services: TSub_Services[];
  service_photo: TService_Photo;
  service_photo_id: string;
  length: number;
  services: TIndustryServices[];
  client_number: number;
  is_show: boolean;
  project_number: number;
};

type TSub_Services = {
  id: string;
  title: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  brief: TLanguage;
};

type TService_Photo = {
  id: string;
  file_url: string;
};

type TSub_Services = {
  title: TLanguage;
  description: TLanguage;
  id: string;
  title: TLanguage;
  brief: TLanguage;
};

type TTeam_Members = {
  id?: string;
  name: string;
  title: {
    [key: string]: string;
  };
  picture_id: string;
  industry_id?: number;
  picture?: TIndustry_Photo;
  link: string;
};

type TMainOffice = {
  img: string;
  img2: string;
  maincity: string;
  country: string;
  offices: TAllianceOfficeCity[];
};

interface ICustomCollapseItems {
  id: number;
  continent: string;
  country: string;
}

type TAllianceOffice = {
  continent: string;
  countries: TAllianceOfficeCountry[];
};

type TAllianceOfficeCountry = {
  country: string;
  offices: TAllianceOfficeCity[];
};

type TAllianceOfficeCity = {
  city: string;
  address: string;
  tel: string;
  fax?: string;
};

type TOffice = {
  allianceOffices: TAllianceOffice[];
  mainOffices: TMainOffice[];
};

interface IHistoryAwardsItems {
  year: number;
  img: string;
  list: string[];
}

type TOurVision = {
  key: string;
  text: string;
};

type TCitizenshipChildren = {
  img: string;
  header: string;
  desc: string;
  works: {
    img: string;
    year: number;
    title: string;
  }[];
  partners?: string[];
};

type TLanguageList = "en" | "id" | "kr" | "vn" | "zh" | "my";

// jobs
type TJobsResponse = {
  data: TJob[];
  totalPage: number;
  total: number;
};

type TJob = {
  id: string;
  location: string;
  position: string;
  header: string;
  description: string;
  date: Date | string;
  region_id: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  region: TRegion;
  job_industries: TIndustry;
  jobs_applied: TJobApplied[];
  total_job_appliers: number;
  is_active: boolean;
};

type TJobApplied = {
  Users_Jobs: TUserJob;
  createdAt: Date;
  date: Date;
  description: string;
  header: string;
  id: string;
  industry_id: number;
  is_active: boolean;
  location: string;
  position: string;
  region_id: string;
  updatedAt: string;
  cv: TFileUrl;
  phone: string;
  email: string;
  full_name: string;
};

type TRegion = {
  id: number;
  name: string;
};

type TUserJob = {
  user_id: string;
  job_id: string;
  status_id: number;
  createdAt: string | Date;
  updatedAt: string | Date;
};

//regions
type TRegionResponse = {
  data: TRegion[];
  totalPage: number;
};

type TAddAdmin = {
  data: TGetMeResponse;
  message: string;
};

// getme
type TGetMeResponse = {
  _id: ObjectId;
  username: string;
};

type TRoleResponse = {
  id: number;
  role: string;
};

type TEducation = {
  createdAt: Date;
  degree: string;
  documents: TDocument[];
  educational_name: string;
  end_date: string;
  start_date: string;
  id: string;
  user_id: string;
  field_of_study: string;
};

type TExperienceGetMe = {
  id: string;
  user_id: string;
  company_name: string;
  job_title: string;
  start_date: string;
  end_date: string;
  description: string;
  documents: TDocument[];
};

type THonorGetMe = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  start_date: string;
  year: string;
  documents: TDocument[];
};

type TClient_Photo = {
  id: string;
  file_url: string;
};

type Client_Results = {
  id: string;
  name: string;
  case?: {
    [language: string]: string;
  };
  result?: {
    [language: string]: string;
  };
  description?: {
    [language: string]: string;
  };
  testimony?: {
    [language: string]: string;
  };
  client_photo_id: string;
  client_photo: TClient_Photo;
};

type Team_Members = {
  id: string;
  name: string;
  picture: {
    file_url: string;
    blurhash: string;
    industry_id: number;
    url: string;
  };
  picture_id: string;
  title: {
    [key: string]: string;
  };
  link: string;
};

type TInitialValuesIndustryCreate = {
  is_show: boolean;
  industry_photo_id: string;
  industry_photo: {
    id: string;
    file_url: string;
  };
  name: {
    [key: string]: string;
  };
  key: string;
  body: {
    [key: string]: string;
  };
  services: Services[];
  client_results: Client_Results[];
  team_members: Team_Members[];
};

type TDocumentGetMe = {
  document_id?: string;
};

type TSocialMediaGetMe = {
  id: string;
  user_id: string;
  name: string;
  url: string;
};

type TSkillGetMe = {
  id: string;
  user_id: string;
  skill_name: string;
  level: string;
  documents: TDocument[];
};

type TDocument = {
  file_url: string;
  name: string;
};

type TAdminPanelForm = {
  full_name: string;
  title: string;
  email: string;
  region_id?: number;
  password?: string;
  is_active: boolean;
};
